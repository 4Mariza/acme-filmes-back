/*********************************************************************************************
 * Objetivo: Criação de um API para manipular dados de uma empresa de filmes
 * Data: 25/01/2024
 * Autor: Maria Luiza Gomes de Almeida
 * Versão: 1.0
*********************************************************************************************/

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {request} = require('http')

const app = express()
app.use(express.json())

app.use((request, response, next) =>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()
})

/*********************Import dos arquivos de controller do projeto*************************/
    const controllerFilmes = require('./controller/controller_filme.js')
 /******************************************************************************************/

const bodyParserJSON = bodyParser.json()

//versão 2.0 que retorna os dados de filmes do Banco de Dados
app.get('/v2/acmeFilmes/filmes', cors(), async function(request, response){
    let dadosfilmes = await controllerFilmes.getListarFilmes()

    response.status(dadosfilmes.status_code)
    response.json(dadosfilmes)
})

app.get('/v2/acmeFilmes/filme/:id', cors(), async function(request, response, next){
    let id = request.params.id

    let dadosFilme = await controllerFilmes.getBuscarFilmeId(id)

    response.status(dadosFilme.status_code)
    response.json(dadosFilme)
})

app.get('/v1/acmeFilmes/filmes/filtro', cors(), async function(request, response){
    let titulo = request.query.titulo
    let data = request.query.data

    let dadosFilmes = await controllerFilmes.getBuscarFilme(titulo,data)

    response.status(dadosFilmes.status_code)
    response.json(dadosFilmes)
})

app.post('/v2/acmeFilmes/filme', cors(), bodyParserJSON, async function(request, response){
    let dadosBody = request.body

    let resultDadosNovoFilme = await controllerFilmes.setInserirNovoFilme(dadosBody)

    response.status(resultDadosNovoFilme.status_code)
    response.json(resultDadosNovoFilme)
})

app.listen('8080', function(){
    console.log('API funcionando!')
})