const router = require("express").Router();
const articles = require("../controllers/article.controller");

router.get("/", (request, response) => {
  response.json({ message: "root,welcome" });
});
router.get("/articles", articles.findAll);
router.post("/articles/update", articles.updateOne);
router.post("/articles/add", articles.insertOne);
router.get("/articles/delete/:ID", articles.deleteOne);
router.get("/articles/:categoryID", articles.findAllFromCategory);
router.get("/articlesByCategory", articles.findAllGroupByCategory);

module.exports = router;
