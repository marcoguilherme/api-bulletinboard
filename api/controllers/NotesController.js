exports.getNotes = function(app, req, res){
    let database = app.config.database;
    let NotesModel = new app.api.models.NotesModel(database);
    NotesModel.allNotes(res);
    
}
exports.newNote = function(app, req, res){
    let note = req.body;
    let database = app.config.database;
    let NotesModel = new app.api.models.NotesModel(database);
    NotesModel.newNote(note, res);
}
exports.editNote = function(app, req, res){
    res.send('Ok')
}
exports.deleteNote = function(app, req, res){
    res.send('Ok')
}