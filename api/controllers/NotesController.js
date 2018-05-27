exports.getNotes = function(app, req, res){
    let database = app.config.database;
    if(database){
        let NotesModel = new app.api.models.NotesModel(database);
        NotesModel.allNotes(res);
    }
    
}
exports.newNote = function(app, req, res){
    res.send('Ok')
}
exports.editNote = function(app, req, res){
    res.send('Ok')
}
exports.deleteNote = function(app, req, res){
    res.send('Ok')
}