const app = require('./config/server');

const port = 8000;

app.listen(port, ()=>{
    console.log("Servidor rodando na porta " + port);
})
