import Vue from 'vue'
import Vuex from 'vuex'
import { API } from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    moviesByGenre: [],
    genreList: []
  },

  getters: {
    getMovies(state) {
      return state.movies
    },
    getMoviesByGenre(state) {
      return state.moviesByGenre
    },
    getGenreList(state) {
      return state.genreList
    }
  },

  mutations: {
    setMovies(state, data) {
      state.movies = data
    },

    setMoviesByGenre(state, data) {
      state.moviesByGenre = data
    },

    setGenres(state, data) {
      state.genreList = data
    },
  },

  actions: {
    getMovies(context) {
      return new Promise((resolve, reject) => {
        API.get(`/movie/popular?api_key=${process.env.VUE_APP_TMDB_API_KEY}`)
          .then((response) => {
            console.log("DATA: ", response.data.results)
            context.commit('setMovies', response.data.results)
            resolve(response)
          })
          .catch((error) => {
            console.log(error)
            reject(error)
          })
      })
    },

    getMoviesByGenre(context, genreId) {
      return new Promise((resolve, reject) => {
        API.get(`/discover/movie?api_key=${process.env.VUE_APP_TMDB_API_KEY}`, {
          params: {
            with_genres: genreId
          }
        })
          .then((response) => {
            console.log("POR GENERO: ", response.data.results)
            context.commit('setMoviesByGenre', response.data.results)
            resolve(response)
          })
          .catch((error) => {
            console.log(error)
            reject(error)
          })
      })
    },

    getGenres(context) {
      return new Promise((resolve, reject) => {
        API.get(`/genre/movie/list?api_key=${process.env.VUE_APP_TMDB_API_KEY}`)
          .then((response) => {
            console.log(response.data.genres)
            context.commit('setGenres', response.data.genres)
            resolve(response)
          })
          .catch((error) => {
            console.log(error)
            reject(error)
          })
      })
    }
  }

})
