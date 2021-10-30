const Article = require("../models/article.models");

//implements at least all methods in DAO layer
const findAll = (request, response) => {
  //logic for handling json or xml
  Article.getAll((err, data) => {
    if (err)
      response.status(500).send({
        message: err.message || "some error happened while retrieving the data",
      });
    else response.send(data);
  });
};

const findAllGroupByCategory = (request, response) => {
  //logic for handling json or xml
  Article.getAllGroupedByCategories((err, data) => {
    if (err)
      response.status(500).send({
        message: err.message || "some error happened while retrieving the data",
      });
    else response.send(data);
  });
};
module.exports = {
  findAll,
  findAllGroupByCategory,
};
