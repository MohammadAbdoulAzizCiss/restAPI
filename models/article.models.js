const sql = require("./db");

const Article = function (article) {
  (this.id = article.id),
    (this.titre = article.titre),
    (this.contenu = article.contenu),
    (this.dateCreation = article.dateCreation),
    (this.dateModification = article.dateModification),
    (this.Categorie = article.Categorie);
};

Article.getAll = callback => {
  sql.query("SELECT * FROM Article;", (error, response) => {
    if (error) {
      callback(err, null);
      return;
    }
    callback(null, response);
  });
};

Article.getAllGroupedByCategories = callback => {
  sql.query(
    `SELECT titre,contenu,libelle,dateCreation,dateModification,Article.id ,Categorie.libelle 
            FROM Article INNER JOIN Categorie on Article.categorie = Categorie.id;`,
    (error, response) => {
      if (error) {
        callback(err, null);
        return;
      }
      callback(null, response);
    }
  );
};
Article.getArticlesByCategory = (id, callback) => {
  sql.query(
    `SELECT * FROM Article WHERE categorie = ${id}`,
    (error, response) => {
      if (error) {
        callback(err, null);
        return;
      }
      callback(null, response);
    }
  );
};
Article.updateArticle = (article, callback) => {
  sql.query(
    `UPDATE Article SET titre ='${article.titre}',contenu ='${article.contenu}',categorie ='${article.categorie}' WHERE id = ${article.id};`,
    (error, response) => {
      if (error) {
        callback(err, null);
        return;
      }
      if (response.affectedRows == 0) {
        // not found Article with the id
        callback({ kind: "not_found" }, null);
        return;
      }
      callback(null, { ...article });
    }
  );
};
Article.deleteArticle = (id, callback) => {
  sql.query(`DELETE FROM Article WHERE id = ${id}`, (error, response) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.affectedRows == 0) {
      // not found Article with the id
      callback({ kind: "not_found" }, null);
      return;
    }
    callback(null, response);
  });
};
module.exports = Article;
