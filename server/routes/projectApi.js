const Router = require("express").Router;

const ProjectApi = (postgresDB) => {
  const router = Router();

  router.get("/", (request, response) => {
    postgresDB.query("SELECT * FROM project", (err, res) => {
      if (err) {
        console.log(err);
      } else {
        return response.json(res.rows);
      }
    });
  });

  router.get("/:project_id", (request, response) => {
    const project_id = request.params.project_id;

    postgresDB.query(
      "SELECT * FROM project WHERE project_id = $1",
      [project_id],
      (err, res) => {
        if (err) {
          console.log(err);
          console.log(request.params.id);
        } else {
          return response.json(res.rows[0]);
        }
      }
    );
  });
  router.get("/category/:id", (request, response) => {
    const category_id = request.params.id;

    //postgres query which returns all projects with the same category from join table project_category
    postgresDB.query(
      `SELECT *
                 FROM project
                          INNER JOIN project_category ON project.project_id = project_category.project_id
                 WHERE project_category.category_id = $1`,
      [category_id],
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          return response.json(res.rows);
        }
      }
    );
  });

  return router;
};
exports.ProjectApi = ProjectApi;
