var app = require('../server');
var db = app.get('db');

module.exports = {
  getAllAnimals : function(req,res, next) {
    db.getAllAnimals(function(err, animals) {
      if (err) {
        res.status(402).json(err);
      } else {
        res.status(200).json(animals);
      }
    });
  },

  createAnimal: function(req, res, next) {
    db.postAnAnimal([req.body.name, req.body.limbs, req.body.tail, req.body.habitat], function(err, animal) {
      if (err) {
        res.status(404).json('🖕🏿');
      } else {
        res.status(200).json('👍🏿');
      }
    });
  }
};
