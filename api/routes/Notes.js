module.exports = function(app){

    app.get('/notes', function(req, res){
         app.api.controllers.NotesController.getNotes(app, req, res);
    })
    app.post('/note', function(req, res){
         app.api.controllers.NotesController.newNote(app, req, res);
    })
    app.put('/note/:id', function(req, res){
        app.api.controllers.NotesController.editNote(app, req, res);
    })
    app.delete('/notes/:id', function(req, res){
        app.api.controllers.NotesController.deleteNote(app, req, res);
    })
}