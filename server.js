// Usei o express para criar e configurar o meu servidor
const express = require("express")
const server = express()

//crei uma rota para o meu servidor
//e capturo o pedido do cliente para responder
server.get("/",function(req, res){
    return res.send("Vc, Dona Iza é muito linda!")
})


//Liguei meu servidor na porta 3000


server.listen(3000)