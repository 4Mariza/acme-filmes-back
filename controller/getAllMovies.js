var apiMovies = require('../module/filmes')

var movies = apiMovies.filmes.filmes

const getAllMovies = () => {
    let status = false

    let moviesJSON = {}
    let moviesArray = []
    let quantidade = movies.length

    movies.forEach(movie => {
        moviesArray.push(movie.nome)
        status = true
    })

    moviesJSON.filmes = moviesArray
    moviesJSON.quantidade = quantidade

    if (status) 
        return moviesJSON
    else
        return false
}

module.exports = {
    getAllMovies
}