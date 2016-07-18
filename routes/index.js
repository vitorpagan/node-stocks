var express = require('express');
var router = express.Router();
var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/stocks', db.getAllStocks);
router.get('/api/stocks/:name', db.getStock);
router.post('/api/stocks', db.createStock);
// router.put('/api/stocks/:id', db.updateStock);
// router.delete('/api/stocks/:id', db.removeStock);

module.exports = router;
