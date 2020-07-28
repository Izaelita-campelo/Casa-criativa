// Usei o express para criar e configurar o meu servidor
const express = require("express")
const server = express()


const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/3107/3107897.svg",
        title: "Curso de Programação",
        caterogy: "Estudo",
        descript: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab nobis accusantium earum provident excepturi quibusdam maiores amet obcaecati.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/3043/3043238.svg",
        title: "Exercicio em Casa",
        caterogy: "Atividade",
        descript: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab nobis accusantium earum provident excepturi quibusdam maiores amet obcaecati.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://www.flaticon.com/premium-icon/icons/svg/2975/2975842.svg",
        title: "Meditação",
        caterogy: "Saúde mental",
        descript: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab nobis accusantium earum provident excepturi quibusdam maiores amet obcaecati.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2972/2972048.svg",
        title: "Gamer",
        caterogy: "Diversão em Familía",
        descript: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab nobis accusantium earum provident excepturi quibusdam maiores amet obcaecati.",
        url: "https://rocketseat.com.br"
    }
]

//confuguração de arquiavo estaticos(css, script, imagem)
server.use(express.static("public"))

//configuração do nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('views', {
    express: server,
    noCache: true
})

//crei uma rota para o meu servidor
//e capturo o pedido do cliente para responder
server.get("/", function (req, res) {
        let lastIdeas =[]
        for(let idea of ideas.reverse()){
            if(lastIdeas.length<2){
                lastIdeas.push(idea)
            }
        }
       

    return res.render("index.html", {ideas: lastIdeas})
})

server.get("/ideias", function (req, res) {
    return res.render("ideias.html")
})



//Liguei meu servidor na porta 3000


server.listen(3000)