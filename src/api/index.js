import axios from 'axios'

// Define URL Backend API
// const API_URL_TMDB = 'https://api.themoviedb.org/3'
// const API_KEY_TMDB = '312e61611bcb46506fbcc5b2d2112713'

// Define URL Base + Headers en constante global para peticiones POST
const API = axios.create({
    baseURL: process.env.VUE_APP_TMDB_URL,
    headers: {
        'Authorization': process.env.VUE_APP_TMDB_API_KEY
    }
})

export { API }