<template>
    <div class="sidebar">
        <div class="title">Genres</div>
        <ul>
            <li v-for="(genre, index) in getGenreList" :key="index">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dot-circle" class="svg-inline--fa fa-dot-circle fa-w-16 fa-1x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-right: 10px;"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"></path></svg>
                <router-link :to="{ name: 'Genre', params: { id: genre.id } }">{{ genre.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name: 'sidebar',
    computed: {
        ...mapGetters(["getGenreList"]),
    },
    created() {
        this.$store.dispatch("getGenres")
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    width: 250px;
    background: rgb(233, 233, 233);
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    padding: 35px 35px;
    box-sizing: border-box;

    .title {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 13px;
    }

    ul {
        padding: 0px;

        li {
            list-style: none;
            margin-bottom: 4px;
            display: flex;
            cursor: pointer;
            border: 1px solid transparent;
            border-radius: 25px;
            padding: 6px 30px;
            transition: all .2s ease-in-out;

            svg {
                width: 10px;
                margin: 0 0;
                opacity: 0.4;
            }

            a {
                font-size: 13px;
                text-decoration: none;
                color: #737b7d;
                display: block ;
            }

            &:hover {
                border: 1px solid #546e7a;
                transition: all .2s ease-in-out;
            }
        }
    }
}
</style>