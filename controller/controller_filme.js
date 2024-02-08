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

const getBuscarFilme = async () => {

}

module.exports = {
    getBuscarFilme,
    getListarFilmes,
    setAtualizarFilme,
    setExcluirFilme,
    setInserirNovoFilme
}