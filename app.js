const app = require('./config/server');

const port = 80;

app.listen(port, ()=>{
    console.log("Servidor rodando na porta " + port);
})
