module.exports = function(app){

    app.get('/', function(req, res){
        app.api.controllers.Notes.getNotes(app, req, res);
    })
}