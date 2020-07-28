// Usei o express para criar e configurar o meu servidor
const express = require("express")
const server = express()

//confuguração de arquiavo estaticos(css, script, imagem)
server.use(express.static("public"))

//crei uma rota para o meu servidor
//e capturo o pedido do cliente para responder
server.get("/",function(req, res){
    return res.sendFile(__dirname + "/index.html")
})

server.get("/ideias",function(req, res){
    return res.sendFile(__dirname + "/ideias.html")
})



//Liguei meu servidor na porta 3000


server.listen(3000)