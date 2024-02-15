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
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

/*********************Import dos arquivos de controller do projeto*************************/
    const controllerFilmes = require('./controller/controller_filme.js')
 /******************************************************************************************/


//versão 1.0 que retorna os dados de um arquivo de filmes
//Período de utilização 01/2024 até 02/2024
app.get('/v1/acmeFilmes/filmes', cors(), async function(request, response, next){

    let controleFilmes = require('./controller/getAllMovies')
    let listaFilmes = controleFilmes.getAllMovies()

    if(listaFilmes){
        response.json(listaFilmes)
        response.status(200)
    } else {
        response.json({erro:'Não foi possível concluir a requisição'})
        response.status(404)
    }
})

//versão 2.0 que retorna os dados de filmes do Banco de Dados
app.get('/v2/acmeFilmes/filmes', cors(), async function(request, response){
    let dadosfilmes =await controllerFilmes.getListarFilmes()

    if(dadosfilmes){
        response.json(dadosfilmes)
        response.status(200)
    } else {
        response.json({message:'Nenhum registro encontrado.'})
        response.status(404)
    }
})

app.get('/v1/acmeFilmes/filmes/filtroId', cors(), async function(request, response, next){
    let id = request.query.id

    let dadosFilme = await controllerFilmes.getBuscarFilmeId(id)

    if(dadosFilme){
        response.json(dadosFilme)
        response.status(200)
    } else {
        response.json({error:'Item não encontrado'})
        response.status(404)
    }
})

app.get('/v1/acmeFilmes/filmes/filtro', cors(), async function(request, response){
    let titulo = request.query.titulo
    let data = request.query.data

    let dadosFilmes = await controllerFilmes.getBuscarFilme(titulo,data)

    if(dadosFilmes){
        response.json(dadosFilmes)
        response.status(200)
    } else{
        response.json({error:'Item não encontrado'})
        response.status(404)
    }
})

app.listen('8080', function(){
    console.log('API funcionando!')
})