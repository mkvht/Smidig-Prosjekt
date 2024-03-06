const Router = require("express").Router;

const CategoryApi = (postgresDB) => {
  const router = Router();

  // Get all categories
  router.get("/", (request, response) => {
    postgresDB.query("SELECT * FROM category", (err, res) => {
      if (err) {
        console.log(err);
      } else {
        return response.json(res.rows);
      }
    });
  });
  return router;
};
exports.CategoryApi = CategoryApi;
