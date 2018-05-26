 var mongodb = require('mongodb');

 var connDb = function(){
    var db = mongodb.Db(
        'api-bulletinboard', //Collection name
        new mongodb.Server(
            'localhost', //hostname
            '27017', //port number
            {} //database misc
        ),
        {} //Setup misc
    );
    return db;
 }

 module.exports = function(){
     return connDb;
 }