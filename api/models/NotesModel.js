function NotesModel(connection){
    this._connection = connection();
}

NotesModel.prototype.allNotes = function(res){
    this._connection.open((err, mongoclient)=>{
        mongoclient.collection('notes', (err, collection)=>{
            if(err){
                res.status(500).json('collection not found')
            }
            collection.find().toArray((err, result)=>{
                if(err)
                    res.status(404).json('No notes created!');

                res.status(200).json(result);
            })
        })
    })
}
NotesModel.prototype.newNote = function(note, res){
    this._connection.open((err, mongoclient)=>{
        mongoclient.collection('notes', (err, collection)=>{
            if(err){
                res.status(404).json('collection not found')
            }
            collection.insert(note, (err, result)=>{
                if(err){
                    res.status(204).json('Check the body if all the fields are correct');
                }else{
                    res.status(200).json('Note created');
                }

            })

        })
    })
}

module.exports = function(){
    return NotesModel;
}