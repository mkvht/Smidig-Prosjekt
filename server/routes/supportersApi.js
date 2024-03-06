const Router = require("express").Router;

const SupporterApi = (postgresDB) => {
  const router = Router();

  router.get("/:project_id", (req, res) => {
    const id = req.params.project_id;

    postgresDB.query(
      `SELECT DISTINCT ON (us.user_id) user_logo_path
             FROM users as us
                      INNER JOIN consent AS co ON us.user_id = co.user_id
                      INNER JOIN transaction AS tr ON us.user_id = tr.user_id
             WHERE tr.project_id = $1
               AND co.consent_logo_rights = true
               AND us.user_logo_path IS NOT NULL
            `,
      [id],
      (err, result) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: "Error while getting supporters",
          });
        } else {
          res.status(200).json({
            success: true,
            message: "Supporters fetched successfully",
            supporters: result.rows,
          });
        }
      }
    );
  });
  return router;
};
exports.SupporterApi = SupporterApi;
