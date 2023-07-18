<template>
  <div class="container">
    <div class="inner">
      <MovieItem v-for="movie in movies" :key="movie.imdbId" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieItem from "~/components/MovieItem";

export default {
  components: {
    MovieItem,
  },
  computed: {
    // 반응성을 가져야 하므로 computed
    movies() {
      return this.$store.state.movie.movies;
    },
  },
};
</script>
