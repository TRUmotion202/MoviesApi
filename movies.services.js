const moviescontrollers = require('./movies.controllers')

const getAllMovies = (req, res) => {
  moviescontrollers.findAllMovies()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch(() => {
      res.status(400).json({ message: "Bad request", err })
    })
}

const getMoviesByID = (req, res) => {
  const id = Number(req.params.id)

  moviescontrollers.findMovieByID(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: `Movie with id: ${id} not found` })
      }
      res.status(200).json(data)
    })

    .catch(() => {
      res.status(400).json({ message: "Bad request", err })
    })
}

const postNewMovie = (req, res) => {
  const movieObj = req.body
  moviescontrollers.createMovie(movieObj)
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(() => {
      res.status(400).json({ message: "Bad request"})
    })
}

module.exports = {
  getAllMovies,
  getMoviesByID,
  postNewMovie
}