const movieDb = [
  {
    id : 1,
    title: "Pacific Rim",
    description: "Lorem Ipsum",
    year: 2012,
    director: "Guillermo del Toro"
  },
  {
    id : 2,
    title: "Pinochio",
    description: "Lorem Ipsum",
    year: 2020,
    director: "Guillermo del Toro"
  },
  {
    id : 3,
    title: "Avengers - End Game",
    description: "Lorem Ipsum",
    year: 2019,
    director: "Russo Brothers"
  }
]

let movieId = 4

const findAllMovies = async () => {
  return movieDb
}

const findMovieByID = async (id) => {
  const data = movieDb.find((movie) => movie.id === id)

  return data
}

const createMovie = async (movieObj) => {
  const newMovie = {
    id: movieId++,
    title: movieObj.title || 'unknown',
    description: movieObj.description || 'unknown',
    year: movieObj.year || 'unknown',
    director: movieObj.director || 'unknown'
  }

  movieDb.push(newMovie)
  return newMovie

}

module.exports = {findAllMovies, findMovieByID, createMovie}