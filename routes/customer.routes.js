const router = require("express").Router();
const articles = require("../controllers/article.controller");

//get all  articles
router.get("/articles", articles.findAll);

//get All articles , grouped by categories

module.exports = router;
