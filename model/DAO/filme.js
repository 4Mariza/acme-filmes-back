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
const insertFilme = async (dadosFilme) => {

    try {
        let sql = `insert into tbl_filme (  nome,
                                            sinopse,
                                            duracao,
                                            data_lancamento,
                                            data_relancamento,
                                            foto_capa,
                                            valor_unitario
        ) values (
                                            '${dadosFilme.nome}',
                                            '${dadosFilme.sinopse}',
                                            '${dadosFilme.data_lancamento}',
                                            '${dadosFilme.data_relancamento}',
                                            '${dadosFilme.foto_capa}',
                                            '${dadosFilme.valor_unitario}'
        )`
    
        let result = await prisma.$executeRawUnsafe(sql)
        
        if (result) 
            return true
        else 
            return false
    } catch (error) {
        return false
    }

}

//Função para atualizar um filme no Banco de Dados
const updateFilme = async () => {

}

//Função para excluir filme no Banco de Dados
const deleteFilme = async () => {

} 

//Função para listar todos os filmes no Banco de Dados
const selectAllFilmes = async () => {

    try {
        let sql = 'select * from tbl_filme'
    
        //$queryRawUnsafe(sql) - possibilita encaminhar uma varável 
        //$queryRaw('select * from tbl_filme') - faz o script dentro dele
        let rsFilmes = await prisma.$queryRawUnsafe(sql)

        return rsFilmes
        
    } catch (error) {
        return false
    }
}

const selectByIdFilme = async (id) => {

    try {
        let sql = `select * from tbl_filme where id =${id}`
    
        let rsFilme = await prisma.$queryRawUnsafe(sql)
    
        return rsFilme 
    } catch (error) {
        return false
    }

}

const selectByNomeFilme = async (titulo, ano) => {

    try {
        let sql = `select * from tbl_filme where nome like "${titulo}%" or data_lancamento like "${ano}%"`
    
        let rsFilmes = await prisma.$queryRawUnsafe(sql)

        return rsFilmes
        
    } catch (error) {
        return false
    }    
}

module.exports = {
    insertFilme,
    updateFilme,
    deleteFilme,
    selectAllFilmes,
    selectByIdFilme,
    selectByNomeFilme
}