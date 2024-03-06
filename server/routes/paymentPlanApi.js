const { findUserByLoginToken } = require("../lib/findUserByLoginToken");
const Router = require("express").Router;

const PaymentPlanApi = (postgresDB, logins) => {
  const router = Router();

  //get payment plan by id with user access
  router.get("/plan/:id", (req, res) => {
    const { login_token } = req.signedCookies;

    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      res.sendStatus(401);
      return;
    }

    const { user_id } = user[login_token].user;
    const id = req.params.id;

    const query = `SELECT project.project_name,
                              payment_plan.payment_plan_method,
                              payment_plan.payment_plan_date,
                              payment_plan.payment_plan_amount,
                              payment_plan.payment_plan_type,
                              payment_plan.payment_plan_next_payment_date
                       FROM payment_plan
                                JOIN project ON project.project_id = payment_plan.project_id
                       WHERE payment_plan.payment_plan_id = $1
                         AND payment_plan.user_id = $2`;
    postgresDB
      .query(query, [id, user_id])
      .then((result) => {
        res.json(result.rows[0]);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  });

  //get a users active payment plans
  router.get("/active", (req, res) => {
    const { login_token } = req.signedCookies;

    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      res.sendStatus(401);
      return;
    }

    const { user_id } = user[login_token].user;

    postgresDB
      .query(
        "SELECT payment_plan.payment_plan_id, payment_plan.payment_plan_amount, payment_plan.payment_plan_type, project.project_name, project.project_description, project.project_description_image_path, project.project_id  FROM payment_plan LEFT JOIN project ON project.project_id = payment_plan.project_id WHERE payment_plan.user_id = $1 AND payment_plan.payment_plan_is_active = true",
        [user_id]
      )
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  });

  //post payment plan
  router.post("/", async (req, res) => {
    const { login_token } = req.signedCookies;

    // Check if user is logged in. Return 401 if not.
    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      res.sendStatus(401);
      return;
    }

    const { user_id } = user[login_token].user;
    const {
      project_id,
      payment_plan_type,
      payment_plan_method,
      payment_plan_amount,
    } = req.body;

    const date = new Date();
    const payment_plan_date = formatDate(date);
    const next_payment_date = calculateNextPaymentDate(payment_plan_type, date);

    if (next_payment_date === null) {
      await transactionsAndImpactRequests(
        user_id,
        project_id,
        payment_plan_amount,
        payment_plan_date,
        payment_plan_method,
        postgresDB,
        res
      );

      res.status(201).json({
        message: "Transaction added",
      });
    } else {
      const payment_plan_next_payment_date = formatDate(next_payment_date);

      const insertPaymentPlanQuery = `INSERT INTO payment_plan (project_id, user_id, payment_plan_type,
                                                                      payment_plan_date,
                                                                      payment_plan_next_payment_date,
                                                                      payment_plan_method, payment_plan_amount,
                                                                      payment_plan_is_active)
                                            VALUES ($1, $2, $3, $4, $5, $6, $7, true)`;
      const insertPaymentPlanValues = [
        project_id,
        user_id,
        payment_plan_type,
        payment_plan_date,
        payment_plan_next_payment_date,
        payment_plan_method,
        payment_plan_amount,
      ];

      const dbResPaymentPlan = await dbRequestPromise(
        postgresDB,
        insertPaymentPlanQuery,
        insertPaymentPlanValues
      );

      if (!dbResPaymentPlan) {
        res.sendStatus(500);
      }

      await transactionsAndImpactRequests(
        user_id,
        project_id,
        payment_plan_amount,
        payment_plan_date,
        payment_plan_method,
        postgresDB,
        res
      );

      res.status(201).json({
        message: "Payment plan created successfully and transaction added",
      });
    }
  });

  //set payment plan as inactive
  router.patch("/inactive/:id", async (req, res) => {
    const { login_token } = req.signedCookies;

    // Check if user is logged in. Return 401 if not.
    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      res.sendStatus(401);
    }

    const { user_id } = user[login_token].user;
    const { id } = req.params;

    const query = `UPDATE payment_plan
                       SET payment_plan_is_active         = false,
                           payment_plan_next_payment_date = null
                       WHERE payment_plan_id = $1
                         AND user_id = $2`;
    const values = [id, user_id];

    const dbRes = await dbRequestPromise(postgresDB, query, values);
    if (!dbRes) {
      res.sendStatus(500);
    }
    res.status(200).json({
      message: "Payment plan set as inactive",
    });
  });

  //Patch payment plan
  router.patch("/plan/:id", (req, res) => {
    const { login_token } = req.signedCookies;

    const user = findUserByLoginToken(logins, login_token);
    if (user === undefined) {
      res.sendStatus(401);
      return;
    }

    const { user_id } = user[login_token].user;
    const id = req.params.id;
    const { payment_plan_method, payment_plan_type, payment_plan_amount } =
      req.body;

    postgresDB
      .query(
        "UPDATE payment_plan SET payment_plan_method = $1, payment_plan_type = $2, payment_plan_amount = $3 WHERE payment_plan_id = $4 AND user_id = $5",
        [
          payment_plan_method,
          payment_plan_type,
          payment_plan_amount,
          id,
          user_id,
        ]
      )
      .then(() => {
        res.status(200).json({
          message: "Payment plan updated successfully",
        });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  });

  return router;
};

function calcImpact(impacts, payment_plan_amount) {
  let current_impact_id = -1;
  for (let i = 0; i < impacts.length; i++) {
    if (impacts[i].impact_cost > payment_plan_amount) {
      break;
    } else {
      current_impact_id = impacts[i].impact_id;
    }
  }
  return current_impact_id;
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

async function dbRequestPromise(postgresDB, query, values) {
  return new Promise((resolve) => {
    postgresDB.query(query, values, (err, result) => {
      if (err) {
        console.log(err);
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

function formatDate(date) {
  return (
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) +
    "-" +
    (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
  );
}

function calculateNextPaymentDate(payment_plan_type, date) {
  let next_payment_date = null;
  if (payment_plan_type === "annually") {
    next_payment_date = new Date(
      date.getFullYear() +
        1 +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getDate()
    );
  } else if (payment_plan_type === "quarterly") {
    next_payment_date = new Date(
      date.getFullYear() + "-" + (date.getMonth() + 4) + "-" + date.getDate()
    );
  } else if (payment_plan_type === "monthly") {
    next_payment_date = new Date(
      date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + date.getDate()
    );
  } else if (payment_plan_type === "single-payment") {
    next_payment_date = null;
  }
  return next_payment_date;
}

async function transactionsAndImpactRequests(
  user_id,
  project_id,
  payment_plan_amount,
  payment_plan_date,
  payment_plan_method,
  postgresDB,
  res
) {
  const insertTransactionQuery = `INSERT INTO transaction (user_id, project_id, transaction_amount, transaction_date,
                                                             transaction_type)
                                    VALUES ($1, $2, $3, $4, $5)`;
  const insertTransactionValues = [
    user_id,
    project_id,
    payment_plan_amount,
    payment_plan_date,
    payment_plan_method,
  ];

  const dbResTransaction = await dbRequestPromise(
    postgresDB,
    insertTransactionQuery,
    insertTransactionValues
  );
  if (!dbResTransaction) {
    res.sendStatus(500);
  }

  const getImpactQuery = `SELECT *
                            FROM impact
                            WHERE project_id = $1
                            ORDER BY impact_cost ASC`;
  const getImpactValues = [project_id];

  const impacts = await dbRequestValues(
    postgresDB,
    getImpactQuery,
    getImpactValues
  );

  const current_impact_id = calcImpact(impacts, payment_plan_amount);

  if (current_impact_id >= 0) {
    const checkForUserImpactQuery = `SELECT *
                                         FROM user_impact
                                         WHERE user_id = $1
                                           AND impact_id = $2`;
    const checkForUserImpactValues = [user_id, current_impact_id];

    const userImpact = await dbRequestValues(
      postgresDB,
      checkForUserImpactQuery,
      checkForUserImpactValues
    );
    if (userImpact.length > 0) {
      const updateUserImpactQuery = `UPDATE user_impact
                                           SET user_impact_amount = user_impact_amount + $1
                                           WHERE user_id = $2
                                             AND impact_id = $3`;
      const updateUserImpactValues = [
        payment_plan_amount,
        user_id,
        current_impact_id,
      ];

      const dbResUserImpact = await dbRequestPromise(
        postgresDB,
        updateUserImpactQuery,
        updateUserImpactValues
      );
    } else {
      const addUserImpactQuery = `INSERT INTO user_impact (impact_id, user_id, user_impact_amount)
                                        VALUES ($1, $2, $3)`;
      const addUserImpactValues = [
        current_impact_id,
        user_id,
        payment_plan_amount,
      ];

      const dbResUserImpact = await dbRequestPromise(
        postgresDB,
        addUserImpactQuery,
        addUserImpactValues
      );
    }
  }
}

exports.PaymentPlanApi = PaymentPlanApi;
