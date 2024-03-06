const Router = require("express").Router;
const { findUserByLoginToken } = require("../lib/findUserByLoginToken");

const FollowApi = (postgresDB, logins) => {
  const router = Router();

  //get follows_project by user_id
  router.get("/", (req, res) => {
    const { login_token } = req.signedCookies;

    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      res.sendStatus(401);
      return;
    }

    const { user_id } = user[login_token].user;
    postgresDB
      .query("SELECT project_id FROM follows_project WHERE user_id = $1", [
        user_id,
      ])
      .then((result) => {
        res.status(200).json(result.rows);
      })
      .catch((err) => {
        res.status(500).json({
          error: "internal server error",
        });
      });
  });

  //delete follow_project by user_id and project_id
  router.delete("/", (req, res) => {
    const { login_token } = req.signedCookies;

    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      res.sendStatus(401);
      return;
    }

    const { user_id } = user[login_token].user;
    const { project_id } = req.body;
    const query = `DELETE
                       FROM follows_project
                       WHERE user_id = $1
                         AND project_id = $2`;
    const values = [user_id, project_id];
    postgresDB.query(query, values, (err) => {
      if (err) {
        res.status(500).json({
          error: "internal server error",
        });
      } else {
        res.status(200).json({
          message: "Follow deleted",
        });
      }
    });
  });

  //post follow_project by user_id and project_id
  router.post("/", (req, res) => {
    const { login_token } = req.signedCookies;

    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      res.sendStatus(401);
      return;
    }

    const { user_id } = user[login_token].user;
    const { project_id } = req.body;
    const query = `SELECT *
                       FROM follows_project
                       WHERE user_id = $1
                         AND project_id = $2`;
    const values = [user_id, project_id];
    postgresDB.query(query, values, (err, result) => {
      if (err) {
        res.status(500).json({
          error: "internal server error",
        });
      } else if (result.rows.length === 0) {
        const insertQuery = `INSERT INTO follows_project (user_id, project_id)
                                     VALUES ($1, $2)`;
        const insertValues = [user_id, project_id];
        postgresDB.query(insertQuery, insertValues, (err) => {
          if (err) {
            res.status(500).json({
              error: "internal server error",
            });
          } else {
            res.status(201).json({
              message: "Followed project",
            });
          }
        });
      } else {
        res.status(400).json({
          message: "Already following project",
        });
      }
    });
  });
  return router;
};
exports.FollowApi = FollowApi;
