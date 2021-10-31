const Article = require("../models/article.models");

//implements at least all methods in DAO layer
const findAll = (request, response) => {
  //logic for handling json or xml
  Article.getAll((error, data) => {
    if (error)
      response.status(500).send({
        message:
          error.message || "some error happened while retrieving the data",
      });
    else response.send(data);
  });
};

const findAllGroupByCategory = (request, response) => {
  //logic for handling json or xml
  Article.getAllGroupedByCategories((error, data) => {
    if (error)
      response.status(500).send({
        message:
          error.message || "some error happened while retrieving the data",
      });
    else response.send(data);
  });
};
const findAllFromCategory = (request, response) => {
  const categoryID = request.params.categoryID;
  if (categoryID > 4 || categoryID < 1)
    response.status(400).send({ message: "incorrect user request " });
  else {
    Article.getArticlesByCategory(categoryID, (error, data) => {
      if (error)
        response.status(500).send({
          message:
            error.message || "some error happened while retrieving the data",
        });
      else {
        console.log(typeof data);
        response.send(data);
      }
    });
  }
};
module.exports = {
  findAll,
  findAllGroupByCategory,
  findAllFromCategory,
};
