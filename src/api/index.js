import axios from 'axios'

const API = axios.create({
    baseURL: process.env.VUE_APP_TMDB_URL,
    headers: {
        'Authorization': process.env.VUE_APP_TMDB_API_KEY
    }
})

export { API }