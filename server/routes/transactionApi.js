const Router = require("express").Router;
const { findUserByLoginToken } = require("../lib/findUserByLoginToken");
const { values } = require("pg/lib/native/query");

const TransactionApi = (postgresDB, logins) => {
  const router = Router();

  router.get("/", (req, res) => {
    const { login_token } = req.signedCookies;

    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      res.sendStatus(401);
      return;
    }

    const { user_id } = user[login_token].user;

    const query = `SELECT project.project_name,
                              transaction.transaction_id,
                              transaction.transaction_amount,
                              transaction.transaction_date,
                              transaction.transaction_type
                       FROM transaction
                                LEFT JOIN project ON project.project_id = transaction.project_id
                       WHERE transaction.user_id = $1`;
    const values = [user_id];
    postgresDB.query(query, values, (err, result) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).send(result.rows);
      }
    });
  });

  //get by project id
  router.get("/project/:id", (req, res) => {
    const { login_token } = req.signedCookies;

    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      res.sendStatus(401);
      return;
    }

    const { user_id } = user[login_token].user;
    const query = `SELECT project.project_name,
                              transaction.transaction_id,
                              transaction.transaction_amount,
                              transaction.transaction_date,
                              transaction.transaction_type
                       FROM transaction
                                LEFT JOIN project ON project.project_id = transaction.project_id
                       WHERE transaction.project_id = $1
                         AND transaction.user_id = $2`;
    const values = [req.params.id, user_id];
    postgresDB.query(query, values, (err, result) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).send(result.rows);
      }
    });
  });

  //get frontpageStatistics
  router.get("/statistics", (req, res) => {
    const query = `SELECT COUNT(transaction_id), SUM(transaction_amount)
                       from transaction`;
    postgresDB.query(query, (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        const secondQuery = `SELECT SUM(transaction_amount)
                                     FROM transaction
                                     WHERE transaction_date >= '2022-01-01' `;
        postgresDB.query(secondQuery, (err2, result2) => {
          if (err2) {
            console.log(err2);
            res.sendStatus(500);
          } else {
            res
              .status(200)
              .json({ this_year: result2.rows[0], total: result.rows[0] });
          }
        });
      }
    });
  });

  router.get("/projectDonated/:project_id", (req, res) => {
    // get amount donated and date from transaction table
    const { project_id } = req.params;

    const { login_token } = req.signedCookies;

    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      res.sendStatus(401);
      return;
    }

    const { user_id } = user[login_token].user;

    const query = `SELECT transaction_amount, transaction_date
                       FROM transaction
                       WHERE project_id = $1 AND user_id = $2`;
    const values = [project_id, user_id];
    postgresDB.query(query, values, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        let total = 0;
        let thisYear = 0;
        let last2Years = 0;
        const year = new Date().getFullYear();

        result.rows.forEach((transaction) => {
          total += parseInt(transaction.transaction_amount);
          if (transaction.transaction_date.getFullYear() === year) {
            thisYear += parseInt(transaction.transaction_amount);
          } else if (
            transaction.transaction_date.getFullYear() === year - 1 ||
            transaction.transaction_date.getFullYear() === year - 2
          ) {
            last2Years += parseInt(transaction.transaction_amount);
          }
        });

        res.status(200).send({ total, thisYear });
      }
    });
  });

  router.get("/all/:id", (req, res) => {
    // get amount donated and date from transaction table

    const query = `SELECT transaction_amount, transaction_date
                       FROM transaction
                       WHERE project_id = $1`;
    const values = [req.params.id];
    postgresDB.query(query, values, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        let total = 0;
        let thisYear = 0;
        let last2Years = 0;
        const year = new Date().getFullYear();

        result.rows.forEach((transaction) => {
          total += parseInt(transaction.transaction_amount);
          if (transaction.transaction_date.getFullYear() === year) {
            thisYear += parseInt(transaction.transaction_amount);
          } else if (
            transaction.transaction_date.getFullYear() === year - 1 ||
            transaction.transaction_date.getFullYear() === year - 2
          ) {
            last2Years += parseInt(transaction.transaction_amount);
          }
        });

        res.status(200).send({ total, thisYear, last2Years });
      }
    });
  });

  // Get projects a user has donated to
  router.get("/donated", (req, res) => {
    const { login_token } = req.signedCookies;

    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      res.sendStatus(401);
    }
    const { user_id } = user[login_token].user;

    const query = `SELECT DISTINCT (project.project_name) ,project.project_id
                   from project
                          LEFT JOIN transaction ON project.project_id = transaction.project_id
                   WHERE transaction.user_id = $1`;
    const values = [user_id];

    postgresDB.query(query, values, (err, result) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).send(result.rows);
      }
    });
  });

  return router;
};
exports.TransactionApi = TransactionApi;
