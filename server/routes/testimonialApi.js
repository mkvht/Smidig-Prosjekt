const Router = require("express").Router;
const { findUserByLoginToken } = require("../lib/findUserByLoginToken");

const TestimonialApi = (postgresDB, logins) => {
  const router = Router();

  //router get all testimonials
  router.get("/", (req, res) => {
    postgresDB
      .query(
        "SELECT * FROM testimonial LEFT JOIN users ON users.user_id = testimonial.user_id"
      )
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
      });
  });

  //router get testimonial by id
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    postgresDB
      .query("SELECT * FROM testimonial WHERE testimonial_id = $1", [id])
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
exports.TestimonialApi = TestimonialApi;
