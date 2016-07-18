var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/stocks';
var db = pgp(connectionString);

function getAllStocks(req, res, next){
	db.any('select * from stocks')
		.then(function(data){
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'Retrieved all stocks'
				});
		})
		.catch(function(err){
			return next(err);
		})
}

function getStock(req, res, next){
	db.one('select * from stocks where name = $1', req.params.name)
		.then(function(data){
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'Retrieved ' + req.params.name + ' stock'
				});
		})
		.catch(function(err){
			console.log(":(")
			return next(err);
		})
}

function createStock(req, res, next) {
	db.none('insert into stocks (name, value) values (${name}, ${value})', req.body)
		.then(function(){
			res.status(200)
				.json({
					status: 'success',
					message: 'Inserted ' + req.body.name + ' stock'
				})
		})
		.catch(function(err){
			return next(err);
		});
}

module.exports = {
  getAllStocks: getAllStocks,
  getStock: getStock,
  createStock: createStock/*,
  updateStock: updateStock,
  removeStock: removeStock*/
};