module.exports = function(app) {
  var express = require('express');
  var categoriesRouter = express.Router();
  var CATEGORY_FIXTURE = {
    1: {
      id: 1,
      name: 'Fruit',
      description: 'A bunch of fruit',
      items: [1, 2, 3]
    },
    2: {
      id: 2,
      name: 'Meat',
      description: 'A bunch of meat',
      items: [4, 5, 6]
    },
    3: {
      id: 3,
      name: 'Apples',
      description: 'Some apples',
      items: [7, 8, 9],
      parentItem: 1
    }
  };

  categoriesRouter.get('/', function(req, res) {
    var categories = [];

    for (var category in CATEGORY_FIXTURE) {
       categories.push(CATEGORY_FIXTURE[category]);
    }

    res.send({
      'categories': categories
    });
  });

  categoriesRouter.get('/:id', function(req, res) {
    res.send({
      'category': CATEGORY_FIXTURE[req.params.id]
    });
  });

  app.use('/api/categories', categoriesRouter);
};
