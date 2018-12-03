var promise = require('bluebird');

var options = {
    promiseLib : promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:naufal135@localhost:5432/canary_reserve';
var db = pgp(connectionString);


function getAllPuppies(req, res, next) {
    db.any('select * from pups')
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL puppies'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }
module.exports = {

    getAllPuppies: getAllPuppies
}