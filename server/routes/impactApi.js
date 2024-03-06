const Router = require("express").Router;

const ImpactApi = (postgresDB) => {
  const router = Router();

  //Get all impacts
  router.get("/", (req, res) => {
    postgresDB
      .query("SELECT * FROM impact")
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
      });
  });

  //Get all impacts by project id
  router.get("/project/:id", (req, res) => {
    const id = req.params.id;
    postgresDB
      .query("SELECT * FROM impact WHERE project_id = $1", [id])
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
      });
  });

  return router;
};
exports.ImpactApi = ImpactApi;
