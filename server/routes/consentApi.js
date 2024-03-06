const { findUserByLoginToken } = require("../lib/findUserByLoginToken");
const Router = require("express").Router;

const ConsentApi = (postgresDB, logins) => {
  const router = Router();

  // Get by user id
  router.get("/user", (request, response) => {
    const { login_token } = request.signedCookies;

    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      response.sendStatus(401);
      return;
    }

    const { user_id } = user[login_token].user;
    postgresDB.query(
      "SELECT * FROM consent WHERE user_id = $1",
      [user_id],
      (err, res) => {
        if (err) {
          console.log(err);
          response.status(500).json({ error: "internal server error" });
        } else {
          return response.status(200).json(res.rows[0]);
        }
      }
    );
  });

  // Change consent
  router.put("/", (req, res) => {
    const { login_token } = req.signedCookies;

    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      res.sendStatus(401);
      return;
    }

    const { user_id } = user[login_token].user;
    const { consent, value } = req.body;

    let query = "";
    let values = [value, user_id];
    switch (consent) {
      case "consent_newsletter":
        query = "UPDATE consent SET consent_newsletter = $1 WHERE user_id = $2";
        break;
      case "consent_logo_rights":
        query =
          "UPDATE consent SET consent_logo_rights = $1 WHERE user_id = $2";
        break;
      default:
        res.sendStatus(400);
        break;
    }
    postgresDB.query(query, values, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      } else {
        return res.status(201).json({ message: "Consent created" });
      }
    });
  });
  return router;
};
exports.ConsentApi = ConsentApi;
