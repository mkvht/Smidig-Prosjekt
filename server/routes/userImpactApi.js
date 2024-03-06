const { getImpactInfo } = require("../lib/getImpactInfo");
const { findUserByLoginToken } = require("../lib/findUserByLoginToken");
const Router = require("express").Router;

const UserImpactApi = (postgresDB, logins) => {
  const router = Router();

  // Get all user impact data
  router.get("/all", async (req, res) => {
    const { login_token } = req.signedCookies;

    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      res.sendStatus(401);
      return;
    }

    const { user_id } = user[login_token].user;

    const query = `SELECT user_impact.user_impact_id,
                              user_impact.user_impact_amount,
                              project.project_name,
                              impact.project_id,
                              impact.impact_description_past_tense,
                              impact.impact_image_path,
                              impact.impact_cost
                       FROM user_impact
                                INNER JOIN impact ON user_impact.impact_id = impact.impact_id
                                INNER JOIN project ON impact.project_id = project.project_id
                       WHERE user_impact.user_id = $1`;

    postgresDB.query(query, [user_id], function (err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        result.rows.forEach(function (row) {
          row.impact_impact_text = row.impact_description_past_tense.replace(
            "¤",
            Math.floor(row.user_impact_amount / row.impact_cost)
          );
        });

        res.json(result.rows);
      }
    });
  });

  router.get("/project/:id", async (req, res) => {
    const { login_token } = req.signedCookies;

    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      res.sendStatus(401);
      return;
    }

    const { user_id } = user[login_token].user;
    const project_id = req.params.id;

    const query = `SELECT user_impact.user_impact_id,
                              impact.project_id,
                              impact.impact_name
                       FROM user_impact
                                INNER JOIN impact ON user_impact.impact_id = impact.impact_id
                       WHERE user_impact.user_id = $1 AND impact.project_id = $2`;

    postgresDB.query(query, [user_id, project_id], function (err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.json(result.rows);
      }
    });
  });

  return router;
};
exports.UserImpactApi = UserImpactApi;
