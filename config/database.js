 var mongodb = require('mongodb');

 var connDb = function(){
    var db = mongodb.Db(
        'api-todolist', //Nome da collection
        new mongodb.Server(
            'localhost', //host do banco
            '27017', //Porta do banco
            {} //Configuracoes opcionais do servidor
        ),
        {} //Configuracoes opcionais
    );
    return db;
 }

 module.exports = function(){
     return connDb;
 }