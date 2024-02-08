var apiMovies = require('../module/filmes')

var movies = apiMovies.filmes.filmes

const getMovieByIdFilter = (id) => {
    let status = false

    let idFilme = id
    let dadosFilmeJSON = {}

    dadosFilmeJSON.id = idFilme
    movies.forEach(movie =>{
        if(movie.id == idFilme){
            dadosFilmeJSON.nome = movie.nome
            dadosFilmeJSON.sinopse = movie.sinopse
            dadosFilmeJSON.duracao = movie.duracao
            dadosFilmeJSON.data_lancamento = movie.data_lancamento
            dadosFilmeJSON.data_relancamento = movie.data_relancamento
            dadosFilmeJSON.foto_capa = movie.foto_capa
            dadosFilmeJSON.valor_unitario = movie.valor_unitario

            status = true
        }
    })

    if (status) 
        return dadosFilmeJSON
    else
        return false
}

module.exports = {
    getMovieByIdFilter
}