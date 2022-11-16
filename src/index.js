const express = require('express')
const bodyParser = require('body-parser')
const Post = require('../models/Post')
const Comodo = require('../models/Comodo')

const app = express()
const PORTA = 3000

// Iniciando body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Iniciando o servidor
app.listen(PORTA, ()=>{
    console.log('Servidor Online!')
})

//-------------ROTAS

//Rota Home
app.get('/', function(req , res){
    res.send('Pagina inicial')
})

//Rota Inicio
app.get('/inicio', function(req , res){
    res.send("preencher")
})

//Rota de informações do imóvel
app.get('/residencia', function(req , res){
    res.send('Pagina de informações do imovel')
})

//Rota de cadastro de imoveis mostrando as informações do Banco de dados
app.get('/imoveis', async function(req, res){
    console.log("aaaaaaaaaa")
    let posts = await Post.findAll({order: [['id', 'DESC']]})
    res.json (posts);
})

//Rota de adicionar comodos
app.get('/comodos', function(req , res){
    res.send('Pagina de comodos')
})

app.get('/imoveis/:id', async function(req, res){
    console.log(req.params)
    let posts = await Post.findOne({where: {id: req.params.id}, order: [['id', 'DESC']]})
    res.json (posts);
})

app.post('/imoveis', function(req, res){
    console.log(req.body)
    Post.create({
        Nome: req.body.Nome,
        Categoria: req.body.Categoria,
        Tipo: req.body.Tipo,
        Descrição: req.body.Descrição,
        CEP: req.body.CEP,
        NomeRua: req.body.NomeRua,
        Número: req.body.Número,
        Complemento: req.body.Complemento,
        Bairro: req.body.Bairro,
        Cidade: req.body.Cidade,
        Estado: req.body.Estado
    }).then(function(){
        res.sendStatus(200)
    }).catch(function(erro){
        res.send("Erro de cadastro de imovel: "+  erro)
    })
})

app.delete('/imoveis/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(() => {
        res.sendStatus(200)
    }).catch((erro) => {
        res.send("Este imóvel não existe!")
    })
})
