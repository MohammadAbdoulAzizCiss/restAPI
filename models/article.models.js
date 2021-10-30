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
    callback(null, response);
  });
};

Article.getAllGroupedByCategories = (callback) => {
  sql.query(
    `SELECT titre,contenu,libelle,dateCreation,dateModification,Article.id ,Categorie.libelle 
            FROM Article INNER JOIN Categorie on Article.categorie = Categorie.id`,
    (error, response) => {
      if (error) {
        console.log("error: ", err);
        callback(err, null);
        return;
      }
      callback(null, response);
    }
  );
};

module.exports = Article;
