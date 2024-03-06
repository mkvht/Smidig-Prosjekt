const Router = require("express").Router;
const { googleConfig } = require("../config/loginConfigs");
const { fetchUser } = require("../lib/fetchUser");
const { v4: uuidv4 } = require("uuid");
const { findUserByLoginToken } = require("../lib/findUserByLoginToken");

const LoginApi = (postgresDB, logins) => {
  const router = Router();

  router.get("/", async (req, res) => {
    const config = {
      google: await googleConfig(),
    };

    const response = { config, user: {} };

    const { login_token } = req.signedCookies;

    if (login_token && findUserByLoginToken(logins, login_token)) {
      const { google } = findUserByLoginToken(logins, login_token)[login_token];
      if (google) {
        const provider = "google";
        const user = await fetchUser(google, config.google);
        if (user) {
          const db_user = await getUser(postgresDB, user, provider);
          response.user = db_user;
          //response.user.provider = provider;
        } else {
          res.clearCookie("login_token");
          logins.splice(
            logins.indexOf(logins.filter((login) => login[login_token])[0]),
            1
          );
        }
      } else {
        delCookies(res, logins, login_token);
      }
    }

    res.json(response);
  });

  router.post("/:provider", async (req, res) => {
    const provider = req.params.provider;
    const { access_token } = req.body;

    const config = {
      google: await googleConfig(),
    };

    const user = await fetchUser(access_token, config[provider]);
    if (user) {
      const db_user = await addUserIfNotExists(postgresDB, user, provider);
      console.log(db_user.first_login);
      const cookieVal = uuidv4();
      logins.push({
        [cookieVal]: {
          [provider]: access_token,
          user: db_user.user,
        },
      });

      res.cookie("login_token", cookieVal, { signed: true });
      res
        .status(200)
        .json({ login: "success", first_login: db_user.first_login })
        .send();
    } else {
      res.sendStatus(401);
    }
  });

  router.delete("/", (req, res) => {
    delCookies(res, logins, req.signedCookies.login_token);
    res.sendStatus(200);
  });

  return router;
};

async function addUserIfNotExists(postgresDB, user, provider) {
  return new Promise((resolve) => {
    postgresDB.query(
      "SELECT * FROM users WHERE user_openid = $1 AND user_provider = $2",
      [user.sub, provider],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          if (result.rows.length === 0) {
            postgresDB.query(
              "INSERT INTO users(user_openid, user_provider, user_email) VALUES ($1, $2, $3) returning *",
              [user.sub, provider, user.email],
              (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  postgresDB.query(
                    "INSERT INTO consent(user_id, consent_terms, consent_privacy_policy, consent_newsletter, consent_logo_rights) VALUES ($1, $2, $3, $4, $5)",
                    [result.rows[0].user_id, false, false, false, false],
                    (err, _result) => {
                      if (err) {
                        console.log(err);
                      } else {
                        resolve({ user: result.rows[0], first_login: true });
                      }
                    }
                  );

                  resolve({ user: result.rows[0], first_login: true });
                }
              }
            );
          } else {
            resolve({ user: result.rows[0], first_login: false });
          }
        }
      }
    );
  });
}

async function getUser(postgresDB, user, provider) {
  return new Promise((resolve) => {
    postgresDB.query(
      "SELECT * FROM users WHERE user_openid = $1 AND user_provider = $2",
      [user.sub, provider],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          if (result.rows.length === 0) {
            resolve(null);
          } else {
            resolve(result.rows[0]);
          }
        }
      }
    );
  });
}

function delCookies(res, logins, login_token) {
  logins.splice(
    logins.indexOf(logins.filter((login) => login[login_token])[0]),
    1
  );
  res.clearCookie("login_token");
}

exports.LoginApi = LoginApi;
