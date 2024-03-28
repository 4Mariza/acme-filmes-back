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

    let sql
    try {
        if (dadosFilme.data_relancamento != '' &&
            dadosFilme.data_relancamento != null &&
            dadosFilme.data_relancamento != undefined) {

            sql = `insert into tbl_filme (  nome,
                                                sinopse,
                                                categoria,
                                                duracao,
                                                data_lancamento,
                                                data_relancamento,
                                                foto_capa,
                                                foto_fundo,
                                                valor_unitario
            ) values (
                                                '${dadosFilme.nome}',
                                                '${dadosFilme.sinopse}',
                                                '${dadosFilme.categoria}',
                                                '${dadosFilme.duracao}',
                                                '${dadosFilme.data_lancamento}',
                                                '${dadosFilme.data_relancamento}',
                                                '${dadosFilme.foto_capa}',
                                                '${dadosFilme.foto_fundo}',
                                                '${dadosFilme.valor_unitario}'
            );`
        } else {
            sql = `insert into tbl_filme (  nome,
                                                sinopse,
                                                categoria,
                                                duracao,
                                                data_lancamento,
                                                data_relancamento,
                                                foto_capa,
                                                foto_fundo,
                                                valor_unitario
            ) values (
                                                '${dadosFilme.nome}',
                                                '${dadosFilme.sinopse}',
                                                '${dadosFilme.categoria}',
                                                '${dadosFilme.duracao}',
                                                '${dadosFilme.data_lancamento}',
                                                null,
                                                '${dadosFilme.foto_capa}',
                                                '${dadosFilme.foto_fundo}',
                                                '${dadosFilme.valor_unitario}'
            );`
        }

        let result = await prisma.$executeRawUnsafe(sql)

        if (result)
            return true
        else
            return false
    } catch (error) {
        return false
    }

}

const selectLastId = async () => {
    try {
        let sql = 'select cast(last_insert_id() as decimal) as id from tbl_filme limit 1;'

        let id = await prisma.$queryRawUnsafe(sql)

        return id
    } catch (error) {
        return false
    }
}

//Função para atualizar um filme no Banco de Dados
const updateFilme = async (dadosFilmes, id) => {
    let sql
    try {
        if (dadosFilmes.data_relancamento != '' && dadosFilmes.data_relancamento != null && dadosFilmes.data_relancamento != undefined) {
            sql = `UPDATE tbl_filme
            SET
                nome = '${dadosFilmes.nome}', 
                sinopse = '${dadosFilmes.sinopse}',
                categoria ='${dadosFilmes.categoria}',
                duracao = '${dadosFilmes.duracao}',
                data_lancamento = '${dadosFilmes.data_lancamento}',
                data_relancamento = '${dadosFilmes.data_relancamento}',
                foto_capa = '${dadosFilmes.foto_capa}',
                foto_fundo = '${dadosFilmes.foto_fundo}',
                valor_unitario = '${dadosFilmes.valor_unitario}'
            WHERE tbl_filme.id = ${id};`

        } else {
            sql = `UPDATE tbl_filme
            SET
                nome = '${dadosFilmes.nome}', 
                sinopse = '${dadosFilmes.sinopse}',
                ctegoria = '${dadosFilmes.categoria}'
                duracao = '${dadosFilmes.duracao}',
                data_lancamento = '${dadosFilmes.data_lancamento}',
                data_relancamento = null,
                foto_capa = '${dadosFilmes.foto_capa}',
                foto_fundo = '${dadosFilmes.foto_fundo}'
                valor_unitario = '${dadosFilmes.valor_unitario}'
            WHERE tbl_filme.id = ${id};`
        }

        let result = await prisma.$executeRawUnsafe(sql)

        if (result)
            return true
        else
            return false

    } catch (error) {
        return false
    }
}

//Função para excluir filme no Banco de Dados
const deleteFilme = async (id) => {
    try{
        let sql = `delete from tbl_filme where id = ${id}`

        let rsdeletedMovie = await prisma.$queryRawUnsafe(sql)

        return rsdeletedMovie
    
    } catch (error) {
        return false
    }
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

const selectByNomeFilme = async (titulo) => {

    try {
        let sql = `select * from tbl_filme where nome like "${titulo}%"`

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
    selectByNomeFilme,
    selectLastId
}