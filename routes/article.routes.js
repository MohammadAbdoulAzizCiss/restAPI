const router = require("express").Router();
const articles = require("../controllers/article.controller");

router.get("/", (request, response) => {
  response.json({ message: "root,welcome" });
});

router.get("/articles", articles.findAll);
router.get("/articles/:categoryID", articles.findAllFromCategory);
router.get("/articlesByCategory", articles.findAllGroupByCategory);

module.exports = router;
