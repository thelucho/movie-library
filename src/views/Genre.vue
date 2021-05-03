<template>
    <div class="container">
        <Sidebar />
        <div class="wrapper">
            <h1>{{ this.genreTitle }}</h1>
            <movie-list :list="getMoviesByGenre" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MovieList from '../components/MovieList.vue'
import Sidebar from '../components/Sidebar.vue'
export default {
    name: 'Genre',
    components: {
        Sidebar,
        MovieList
    },
    data() {
        return {
            genreTitle: ''
        }
    },
    computed: {
        ...mapGetters(['getMoviesByGenre', 'getGenreList']),
    },
    mounted(){
        this.getGenreTitle()
    },
    created() {
        const genreId = this.$route.params.id.toString()
        this.$store.dispatch('getMoviesByGenre', genreId)
    },
    methods: {
        getGenreTitle(){
            const res = this.getGenreList.find(item => {
                return item.id === this.$route.params.id
            })
            if (res) {
                this.genreTitle = res.name
            }
        }
    }
}
</script>