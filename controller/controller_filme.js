/*********************************************************************************************
 * Objetivo: Arquivo responsável pelas validações e consistências de dados de filme
 * Data: 01/02/2024
 * Autor: Maria Luiza Gomes de Almeida
 * Versão: 1.0
*********************************************************************************************/
const message = require('../module/config')

const filmesDAO = require('../model/DAO/filme.js')

const setInserirNovoFilme = async (dadosFilme) => {
    let novoFilmeJSON = {}

    if( dadosFilme.nome == ''            || dadosFilme.nome == undefined            || dadosFilme.nome.length > 80             ||
        dadosFilme.sinopse == ''         || dadosFilme.sinopse == undefined         || dadosFilme.sinopse.length > 65000       ||
        dadosFilme.duracao == ''         || dadosFilme.duracao == undefined         || dadosFilme.duracao.length > 8           ||
        dadosFilme.data_lancamento == '' || dadosFilme.data_lancamento == undefined || dadosFilme.data_lancamento.length != 10 ||
        dadosFilme.foto_capa == ''       || dadosFilme.foto_capa == undefined       || dadosFilme.fot_capa.length > 200        ||
        dadosFilme.valor_unitario.length > 6
    ){
        return message.ERROR_REQUIRED_FIELDS

    } else {

        let validateStatus = false

        if(dadosFilme.data_relancamento != null || dadosFilme.data_relancamento != ''){
            if(dadosFilme.data_relancamento.length != 10){
                return message.ERROR_REQUIRED_FIELDS
            } else {
                validateStatus = true
            }
        } else {
            validateStatus = true
        }

        let novoFilme = await filmesDAO.insertFilme(dadosFilme)

        if(novoFilme){
            novoFilmeJSON.filme = dadosFilme
            novoFilmeJSON.status = message.SUCCESS_CREATED_ITEM.status
            novoFilmeJSON.status_code = message.SUCCESS_CREATED_ITEM.status_code
            novoFilmeJSON.message = message.SUCCESS_CREATED_ITEM.message

            return novoFilmeJSON
        } else {
            return message.ERROR_INTERNAL_SERVER_DB
        }
    }
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