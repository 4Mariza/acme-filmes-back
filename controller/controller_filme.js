/*********************************************************************************************
 * Objetivo: Arquivo responsável pelas validações e consistências de dados de filme
 * Data: 01/02/2024
 * Autor: Maria Luiza Gomes de Almeida
 * Versão: 1.0
*********************************************************************************************/

const filmesDAO = require('../model/DAO/filme.js')

const setInserirNovoFilme = async () => {

}

const setAtualizarFilme = async () => {

}

const setExcluirFilme = async () => {

}

const getListarFilmes = async () => {
    let filmesJSON = {}

    //chama a função do DAO que retorna os dilmes do BD
    let dadosFilmes = await filmesDAO.selectAllFilmes()

    if (dadosFilmes){
        filmesJSON.filmes = dadosFilmes
        filmesJSON.quantidade = dadosFilmes.length
        filmesJSON.status_code = 200;

        return filmesJSON
    } else {
        return false
    }

}

const getBuscarFilmeId = async (id) => {
    let dadosFilmeJSON = {}

    let dadosFilme = await filmesDAO.selectByIdFilme(id)

    if(dadosFilme){
        dadosFilmeJSON.filme = dadosFilme
        dadosFilmeJSON.quantidade = dadosFilme.length
        dadosFilmeJSON.status_code = 200

        return dadosFilmeJSON
    } else{
        return false
    }
}

const getBuscarFilme = async (titulo,data) =>{
    let filmeJSON = {}

    let dadosFilme = await filmesDAO.selectByNomeFilme(titulo,data)

    if(dadosFilme){
        filmeJSON.filme = dadosFilme
        filmeJSON.quantidade = dadosFilme.length
        filmeJSON.status_code = 200

        return filmeJSON
    } else {
        return false
    }
}

module.exports = {
    getBuscarFilme,
    getBuscarFilmeId,
    getListarFilmes,
    setAtualizarFilme,
    setExcluirFilme,
    setInserirNovoFilme
}