const router = require("express").Router();
const articles = require("../controllers/article.controller");

//testing root route
router.get("/", (request, response) => {
  response.json({ message: "basic route welcome" });
});

//get all  articles
router.get("/articles", articles.findAll);

//get All articles , grouped by categories

module.exports = router;
