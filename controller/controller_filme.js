/*********************************************************************************************
 * Objetivo: Arquivo responsável pelas validações e consistências de dados de filme
 * Data: 01/02/2024
 * Autor: Maria Luiza Gomes de Almeida
 * Versão: 1.0
*********************************************************************************************/
const message = require('../module/config')

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
        if(dadosFilmes.length > 0){
            filmesJSON.filmes = dadosFilmes
            filmesJSON.quantidade = dadosFilmes.length
            filmesJSON.status_code = 200;
    
            return filmesJSON
        } else {
            return message.ERROR_NOT_FOUND
        }
    } else {
        return message.ERROR_INTERNAL_SERVER_DB
    }

}

const getBuscarFilmeId = async (id) => {
    let idFilme = id
    let dadosFilmeJSON = {}

    if(idFilme == '' || idFilme == undefined || isNaN(idFilme)){
        return message.ERROR_INVALID_ID
    } else {
    
        let dadosFilme = await filmesDAO.selectByIdFilme(idFilme)
    
        if(dadosFilme){
            if(dadosFilme.length > 0){
                dadosFilmeJSON.filme = dadosFilme
                dadosFilmeJSON.status_code = 200
        
                return dadosFilmeJSON
            } else {
                return message.ERROR_NOT_FOUND
            }
        } else{
            return message.ERROR_INTERNAL_SERVER_DB
        }
    }

}

const getBuscarFilme = async (titulo,data) =>{
    let filmeJSON = {}

    let dadosFilme = await filmesDAO.selectByNomeFilme(titulo,data)

    if(dadosFilme){
        if(dadosFilme.length > 0){
            filmeJSON.filme = dadosFilme
            filmeJSON.quantidade = dadosFilme.length
            filmeJSON.status_code = 200
    
            return filmeJSON
        } else {
            return message.ERROR_NOT_FOUND
        }
    } else {
        return message.ERROR_INTERNAL_SERVER_DB
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