const { findUserByLoginToken } = require("../lib/findUserByLoginToken");
const Router = require("express").Router;

const UserApi = (postgresDB, logins) => {
  const router = Router();

  // Get user information
  router.get("/", (req, res) => {
    const { login_token } = req.signedCookies;

    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      res.sendStatus(401);
      return;
    }

    const { user_id } = user[login_token].user;

    const query = `
            SELECT user_company_name,
                   user_organization_number,
                   user_email,
                   user_address,
                   user_zip_code,
                   user_city,
                   user_country,
                   user_phone
            FROM users
            WHERE user_id = $1;
        `;
    postgresDB.query(query, [user_id], function (err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.json(result.rows[0]);
      }
    });
  });

  // Patch user information
  router.patch("/", (req, res) => {
    const { login_token } = req.signedCookies;

    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      res.sendStatus(401);
      return;
    }

    const { user_id } = user[login_token].user;

    const {
      user_company_name,
      user_organization_number,
      user_email,
      user_address,
      user_zip_code,
      user_city,
      user_country,
      user_phone,
    } = req.body;

    const query = `
            UPDATE users
            SET user_company_name = $1,
                user_organization_number = $2,
                user_email = $3,
                user_address = $4,
                user_zip_code = $5,
                user_city = $6,
                user_country = $7,
                user_phone = $8
            WHERE user_id = $9;
        `;
    postgresDB.query(
      query,
      [
        user_company_name,
        user_organization_number,
        user_email,
        user_address,
        user_zip_code,
        user_city,
        user_country,
        user_phone,
        user_id,
      ],
      function (err, result) {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          console.log("Cool");
          res.status(200).json({ message: "success" });
        }
      }
    );
  });
  return router;
};
exports.UserApi = UserApi;
