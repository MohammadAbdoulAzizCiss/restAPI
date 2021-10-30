const Article = require("../models/article.models");

//implements at least all methods in DAO layer
exports.findAll = (req, res) => {
  //logic for handling json or xml
  Article.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "some error happened while retrieving the data",
      });
    else res.send(data);
  });
};

exports.findAllGroupByCategory = () => {};
