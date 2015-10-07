module.exports = function(app) {
  var express = require('express');
  var parentRouter = express.Router();
  var PARENT_FIXTURE = {
    1: {
      id: 1,
      name: 'Parent 1',
      categories: [1,2]
    }
  };

  parentRouter.get('/:id', function(req, res) {
    res.send({
      'parent': PARENT_FIXTURE[req.params.id]
    });
  });

  app.use('/api/parents', parentRouter);
};
