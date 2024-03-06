const Router = require("express").Router;
const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
const path = require("path");
const { getImpactInfo } = require("../lib/getImpactInfo");
const { isNumeric } = require("../lib/isNumeric");
const { getCompanyName } = require("../lib/getCompanyName");

const PromoApi = (postgresDB) => {
  const router = Router();

  router.get("/", async (req, res) => {
    // Get params and set defaults
    const request_user_impactId = isNumeric(req.query.userImpactId)
      ? req.query.userImpactId
      : "none";
    const request_size = req.query.size ? req.query.size : "small";
    const request_project_id = req.query.projectId;
    const request_user_id = req.query.userId;

    // Sets correct request_size for canvas
    const { image_width, image_height } = getSize(request_size);
    let text_max_width = Math.floor(image_width * 0.7);
    let start_x, start_y, line_height;

    // Creates canvas
    const canvas = createCanvas(image_width, image_height);
    const ctx = canvas.getContext("2d");

    // Sets background color
    ctx.fillRect(0, 0, image_width, image_height);

    // Configures font
    if (request_size === "large") {
      ctx.fillStyle = "black";
      ctx.font = "bold 50pt 'Sans'";
      ctx.textAlign = "left";
      start_x = 50;
      start_y = 400;
      line_height = 80;
    } else {
      ctx.fillStyle = "black";
      ctx.font = "bold 15pt 'Sans'";
      ctx.textAlign = "left";
      start_x = 20;
      start_y = 120;
      line_height = 20;
    }

    let imageText = "";
    let image_project_promo_background_path =
      "tmp project promo background path";

    console.log("request_project_id: ", request_project_id);

    console.log(await getImpactInfo(request_user_impactId, postgresDB));

    if (request_user_impactId !== "none") {
      const {
        user_id,
        user_impact_amount,
        project_id,
        impact_description_past_tense,
      } = await getImpactInfo(request_user_impactId, postgresDB);

      if (
        user_id === undefined ||
        user_impact_amount === undefined ||
        impact_description_past_tense === undefined
      ) {
        res.status(400).send("Invalid request_user_impactId");
        return;
      }
      const { user_company_name } = await getCompanyName(user_id, postgresDB);
      const { project_name, project_promo_background_path } =
        await getProjectNameAndBackground(postgresDB, project_id);

      image_project_promo_background_path = project_promo_background_path;

      imageText = `${user_company_name} ${impact_description_past_tense} by donating to ${project_name}`;
      imageText = imageText.replace("¤", user_impact_amount);

      // no request_user_impactId
    } else {
      console.log(request_project_id);
      if (!request_project_id || !isNumeric(request_project_id)) {
        res.status(400).send("Invalid projectId");
        return;
      }
      const getAmountDonatedQuery = `SELECT SUM(transaction_amount) FROM transaction WHERE project_id = $1 AND user_id= $2`;
      const getAmountDonatedValues = [request_project_id, request_user_id];

      const queryResult = await dbRequestValues(
        postgresDB,
        getAmountDonatedQuery,
        getAmountDonatedValues
      );
      const { user_company_name } = await getCompanyName(
        request_user_id,
        postgresDB
      );
      const { project_name, project_promo_background_path } =
        await getProjectNameAndBackground(postgresDB, request_project_id);

      image_project_promo_background_path = project_promo_background_path;

      console.log(queryResult);

      imageText = `${user_company_name} has donated ${queryResult[0].sum} NOK to ${project_name}`;
    }
    console.log(imageText);
    if (
      !image_project_promo_background_path ||
      image_project_promo_background_path === ""
    ) {
      res.sendStatus(400);
    }

    const imagePath = path.join("../", image_project_promo_background_path);
    console.log(imagePath);
    try {
      const background = await loadImage(imagePath);
      ctx.drawImage(background, 0, 0, image_width, image_height);
      wrapText(ctx, imageText, start_x, start_y, text_max_width, line_height);

      // create image from canvas
      const buffer = canvas.toBuffer("image/png");

      fs.writeFile("promoAPI/bufferImage.png", buffer, (err) => {
        if (err) {
          console.log("Error with writing to image: " + err);
          res.sendStatus(500);
        } else {
          res
            .type("image/png")
            .sendFile(path.resolve("promoAPI/bufferImage.png"));
        }
      });
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

  return router;
};

async function getProjectNameAndBackground(postgresDB, projectID) {
  return new Promise((resolve) => {
    postgresDB.query(
      "SELECT project_name, project_promo_background_path FROM project WHERE project_id = $1 ",
      [projectID],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          resolve(result.rows[0]);
        }
      }
    );
  });
}

function getSize(size) {
  switch (size) {
    case "small":
      return { image_width: 400, image_height: 300 };
    case "large":
      return { image_width: 1920, image_height: 1080 };
    case "wide":
      return { image_width: 800, image_height: 300 };
    default:
      return { image_width: 400, image_height: 300 };
  }
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}

async function dbRequestValues(postgresDB, query, values) {
  return new Promise((resolve) => {
    postgresDB.query(query, values, (err, result) => {
      if (err) {
        console.log(err);
        resolve(null);
      } else {
        resolve(result.rows);
      }
    });
  });
}

exports.PromoApi = PromoApi;
