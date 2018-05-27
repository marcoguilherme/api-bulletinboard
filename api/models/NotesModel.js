function NotesModel(connection){
    this._connection = connection();
}

NotesModel.prototype.allNotes = function(res){
    // console.log(this._connection);
    this._connection.open((err, mongoclient)=>{
        mongoclient.collection('notes', (err, result)=>{
            result.find().toArray((err, result)=>{
                if(err)
                    res.status(404).json('No notes created!')

                res.status(200).json(result);
            })
        })
    })
}
NotesModel.prototype.newNote = function(req, res){
    
}

module.exports = function(){
    return NotesModel;
}