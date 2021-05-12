<template>
    <div class="container">
        <Sidebar />
        <div class="wrapper">

            <div class="movie-details">
                <div class="col-left">
                    <img :src="imagePath + getMovieItem.poster_path">
                </div>
                <div class="col-right">
                    <h1>{{ getMovieItem.title }}</h1>
                    <div class="tagline">{{ getMovieItem.tagline }}</div>

                    <div class="row-rating">
                        <star-rating
                            active-color="#546e7a"
                            active-border-color="null"
                            :border-width="0"
                            border-color="#fff"
                            inactive-color="#ccc"
                            :padding="5"
                            :rating="roundRating(getMovieItem.vote_average)"
                            :read-only="true"
                            :round-start-rating="false"
                            :star-size="14"
                            :increment="0.01"
                        />
                        <div class="metadata">
                            <span v-for="(lang, index) in getMovieItem.spoken_languages" :key="index"> {{ lang.english_name }} / </span>
                            {{ getMovieItem.runtime }} MIN /
                            {{ releaseDate }}</div>
                    </div>

                    <div class="synopsis">
                        <div class="subtitle">SYNOPSIS</div>
                        <p>{{ getMovieItem.overview }}</p>
                    </div>

                    <div class="genres">
                        <div class="subtitle">GENRES</div>
                        <ul>
                            <li v-for="(genre, index) in getMovieItem.genres" :key="index">
                                <router-link :to="{ name: 'Genre', params: { id: genre.id } }">
                                    {{ genre.name }}
                                </router-link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Sidebar from '../components/Sidebar.vue'
import StarRating from 'vue-star-rating'

export default {
    name: 'SingleMovie',
    components: {
        Sidebar,
        StarRating
    },
    computed: {
        ...mapGetters(['getMovieItem']),

        imagePath() {
            return process.env.VUE_APP_TMDB_URL_COVER
        },

        releaseDate() {
            const fecha = new Date(this.getMovieItem.release_date)
            return fecha.getFullYear()
        }
    },
    methods: {
        roundRating(value) {
            const result = value/2
            return result
        }
    },
    created() {
        const movieId = this.$route.params.id.toString()
        this.$store.dispatch('getMovieItem', movieId)
    }
    
}
</script>

<style lang="scss" scoped>
.wrapper {
    .movie-details {
        width: 100%;
        max-width: 83%;
        margin: 0px auto 7rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        padding: 65px 100px;

        .col-left {
            width: 40%;
            padding: 20px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 90%;
                border-radius: 0.8rem;
                box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.25);
            }
        }
        
        .col-right {
            width: 57%;
            padding: 20px;
            box-sizing: border-box;

            h1 {
                font-size: 33px;
                font-weight: 300;
                line-height: 1.2;
                color: #759eaf;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                margin-bottom: 10px;
            }

            .tagline {
                font-size: 17px;
                font-weight: 700;
                text-transform: uppercase;
                color: #546e79;
                margin-bottom: 15px;
            }

            .row-rating {
                margin-bottom: 45px;
                display: flex;
                justify-content: space-between;

                .vue-star-rating {
                    font-size: 12px;
                    color: #7b7b7b;
                    justify-content: center;
                }

                .metadata {
                    font-size: 14px;
                    font-weight: 400;
                    color: #bdbdbd;
                }
            }

            .synopsis {
                p {
                    font-size: 14px;
                    line-height: 25px;
                    color: #808080;
                }
            }

            .subtitle {
                font-size: 16px;
                font-weight: 600;
                color: #759eaf;
            }

            .genres {
                margin-top: 30px;

                a {

                }
            }
            
        }
    }

    
}
</style>
<style lang="scss">
.vue-star-rating-rating-text {
    background-color: #ffbc00;
    color: white;
    font-size: 10px;
    padding: 1px 5px;
    border-radius: 12px;
}
</style>