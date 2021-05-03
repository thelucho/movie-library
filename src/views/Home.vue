<template>
  <div class="container">
    <Sidebar />
    <div class="wrapper">
      <h1>Home</h1>
      <movie-list :list="getMovies" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import MovieList from '@/components/MovieList.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    MovieList,
    Sidebar
  },
  computed: {
    ...mapGetters(["getMovies"]),
  },
  created() {
    this.$store.dispatch("getMovies")
  }
}
</script>
