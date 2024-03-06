const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Pool = require("pg").Pool;
const dotenv = require("dotenv");

const { ProjectApi } = require("./routes/projectApi");
const { LoginApi } = require("./routes/loginApi");
const { CategoryApi } = require("./routes/categoryApi");
const { ConsentApi } = require("./routes/consentApi");
const { TestimonialApi } = require("./routes/testimonialApi");
const { ImpactApi } = require("./routes/impactApi");
const { PaymentPlanApi } = require("./routes/paymentPlanApi");
const { TransactionApi } = require("./routes/transactionApi");
const { FollowApi } = require("./routes/followApi");
const { SupporterApi } = require("./routes/supportersApi");
const { PromoApi } = require("./routes/promoApi");
const { UserImpactApi } = require("./routes/userImpactApi");
const { UserApi } = require("./routes/userApi");
const fs = require("fs");

const logins = [];
dotenv.config();

const postgres = configurePG();
postgres.connect().then(() => {
  console.log("Connected to postgres");
});

const app = express();

function setupServer() {
  const bufferImgPath = "./promoAPI";
  if (!fs.existsSync(bufferImgPath)) {
    fs.mkdirSync(bufferImgPath, { recursive: true });
  }
}
setupServer();

// -- Swagger --
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Meliora Impact APIs",
      version: "1.0.0",
      description: "A simple API to manage our postgresdb",
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: ["./swagger/*.js"],
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// -- Middleware --
configWWWhisper(app);
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// -- Routes --
app.use("/api/project", ProjectApi(postgres));
app.use("/api/login", LoginApi(postgres, logins));
app.use("/api/category", CategoryApi(postgres));
app.use("/api/consent", ConsentApi(postgres, logins));
app.use("/api/testimonial", TestimonialApi(postgres, logins));
app.use("/api/impact", ImpactApi(postgres));
app.use("/api/paymentplan", PaymentPlanApi(postgres, logins));
app.use("/api/follow", FollowApi(postgres, logins));
app.use("/api/support", SupporterApi(postgres));
app.use("/api/transaction", TransactionApi(postgres, logins));
app.use("/api/promo", PromoApi(postgres));
app.use("/api/userimpact", UserImpactApi(postgres, logins));
app.use("/api/user", UserApi(postgres, logins));

// serve static files from the React app and from the public folder. Server the frontpage if nothing is found
app.use(express.static("../client/dist"));
app.use("/resources", express.static("../public"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    return res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at: http://localhost:${server.address().port}`);
});

// Configures postgres. uses ssl when in production, since heroku requires it
function configurePG() {
  if (process.env.NODE_ENV === "production") {
    return new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });
  } else {
    return new Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }
}

// Configures WWWHisper only when in production
function configWWWhisper() {
  if (process.env.NODE_ENV === "production") {
    const wwwhisper = require("connect-wwwhisper");
    app.use(wwwhisper());
  }
}
