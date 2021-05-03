<template>
    <div>
        <ul>
            <li v-for="(movie, index) in list" :key="index">
                <img :src="imagePath + movie.poster_path">
                <div class="title">{{ movie.title }}</div>
                <star-rating
                active-color="#546e7a"
                active-border-color="null"
                :border-width="0"
                border-color="#fff"
                inactive-color="#ccc"
                :padding="5"
                :rating="roundRating(movie.vote_average)"
                :read-only="true"
                :round-start-rating="false"
                :star-size="14"
                :increment="0.01"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    name: 'MovieList',
    components: {
        StarRating
    },
    props: {
        list: {
            type: Array
        }
    },
    computed: {
        imagePath() {
            return process.env.VUE_APP_TMDB_URL_COVER
        },
    },
    methods: {
        roundRating(value) {
            const result = value/2
            return result
        }
    },
}
</script>

<style lang="scss" scoped>
ul {
    padding: 0 0;
    display: flex;
    flex-wrap: wrap;
    gap: 70px 30px;

    li {
        list-style: none;
        width: 230px;
        height: 390px;

        img {
            max-width: 230px;
            border-radius: 15px;
            box-shadow: 0px 0px 17px 2px #e0e0e0;
            transition: all .2s ease-in-out;
        }

        .title {
            font-size: 13px;
            color: #7b7b7b;
            text-align: center;
            line-height: 15px;
            margin-top: 15px;
            margin-bottom: 15px;
        }

        .vue-star-rating {
            font-size: 12px;
            color: #7b7b7b;
            justify-content: center;
        }

        &:hover {
            cursor: pointer;

            img {
            transform: scale(1.03);
            box-shadow: 0px 0px 17px 2px #cecece;
            transition: all .2s ease-in-out;
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