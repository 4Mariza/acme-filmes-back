/*********************************************************************************************
 * Objetivo: Arquivo responsável pela manipulação de dados no banco de dados MySql,
                         aqui realizamos o CRUD na linguagem SQL
 * Data: 01/02/2024
 * Autor: Maria Luiza Gomes de Almeida
 * Versão: 1.0
*********************************************************************************************/

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


//Função para inserir filme no Banco de Dados
const insertFilme = async () => {

}

//Função para atualizar um filme no Banco de Dados
const updateFilme = async () => {

}

//Função para excluir filme no Banco de Dados
const deleteFilme = async () => {

} 

//Função para listar todos os filmes no Banco de Dados
const selectAllFilmes = async () => {
    let sql = 'select * from tbl_filme'

    //$queryRawUnsafe(sql) - possibilita encaminhar uma varável 
    //$queryRaw('select * from tbl_filme') - faz o script dentro dele
    let rsFilmes = await prisma.$queryRawUnsafe(sql)

    if (rsFilmes.length > 0)
        return rsFilmes
    else 
        return false
}

const selectByIdFilme = async (id) => {

}

module.exports = {
    insertFilme,
    updateFilme,
    deleteFilme,
    selectAllFilmes,
    selectByIdFilme
}