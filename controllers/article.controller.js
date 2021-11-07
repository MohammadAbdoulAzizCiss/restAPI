const Article = require("../models/article.models");
const o2x = require("object-to-xml");

const findAll = (request, response) => {
  Article.getAll((error, data) => {
    if (error)
      response.status(500).send({
        message:
          error.message || "some error happened while retrieving the data",
      });
    else {
      data = { ...data };
      response.send(request.query.format === "xml" ? o2x(data) : data);
    }
  });
};

const findAllGroupByCategory = (request, response) => {
  Article.getAllGroupedByCategories((error, data) => {
    if (error)
      response.status(500).send({
        message:
          error.message || "some error happened while retrieving the data",
      });
    else {
      data = { ...data };
      response.send(request.query.format === "xml" ? o2x(data) : data);
    }
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
        data = { ...data };
        response.send(request.query.format === "xml" ? o2x(data) : data);
      }
    });
  }
};
const updateOne = (request, response) => {
  const article = request.body.article;
  Article.updateArticle(article, (error, data) => {
    if (error) response.send({ error });
    response.send({ data });
  });
};
const deleteOne = (request, response) => {
  Article.deleteArticle(request.params.ID, (error, data) => {
    if (error)
      response.status(500).send({
        error,
      });
    else {
      response.json({ data });
    }
  });
};
const insertOne = (request, response) => {
  const article = request.body.article;
  if (Object.values(article).every(value => value)) {
    Article.createOne(article, (error, data) => {
      if (error) response.send({ error });
      response.send({ data });
    });
  } else {
    response.send({ message: "missing fields" });
  }
};

module.exports = {
  findAll,
  findAllGroupByCategory,
  findAllFromCategory,
  deleteOne,
  updateOne,
  insertOne,
};
