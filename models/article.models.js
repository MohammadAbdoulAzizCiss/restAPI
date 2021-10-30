const sql = require("./db");

const Article = function (article) {
  (this.id = article.id),
    (this.titre = article.titre),
    (this.contenu = article.contenu),
    (this.dateCreation = article.dateCreation),
    (this.dateModification = article.dateModification),
    (this.Categorie = article.Categorie);
};

Article.getAll = (callback) => {
  sql.query("SELECT * FROM Article", (error, response) => {
    if (error) {
      console.log("error: ", err);
      callback(err, null);
      return;
    }
    console.log("customers: ", res);
    callback(null, res);
  });
};

Article.getAllGroupedByCategories = (callback) => {
  sql.query("SELECT * FROM Article ORDER BY categorie", (error, response) => {
    if (error) {
      console.log("error: ", err);
      callback(err, null);
      return;
    }
    console.log("customers: ", res);
    callback(null, res);
  });
};

module.exports = Article;
