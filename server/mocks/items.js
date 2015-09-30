module.exports = function(app) {
  var express = require('express');
  var itemsRouter = express.Router();
  var ITEM_FIXTURE = {
    1: {
      id: 1,
      name: 'Apple',
      category: 1,
      categories: [3]
    },
    2: {
      id: 2,
      name: 'Banana',
      category: 1
    },
    3: {
      id: 3,
      name: 'Orange',
      category: 1
    },
    4: {
      id: 4,
      name: 'Beef',
      category: 2
    },
    5: {
      id: 5,
      name: 'Pork',
      category: 2
    },
    6: {
      id: 6,
      name: 'Chicken',
      category: 2
    },
    7: {
      id: 7,
      name: 'Granny Smith',
      category: 3
    },
    8: {
      id: 8,
      name: 'McIntosh',
      category: 3
    },
    9: {
      id: 9,
      name: 'Golden Delicious',
      category: 3
    }
  };

  itemsRouter.get('/', function(req, res) {
    var items = [];

    for (var item in ITEM_FIXTURE) {
       items.push(ITEM_FIXTURE[item]);
    }

    res.send({
      'items': items
    });
  });

  itemsRouter.get('/:id', function(req, res) {
    res.send({
      'items': ITEM_FIXTURE[req.params.id]
    });
  });

  app.use('/api/items', itemsRouter);
};
