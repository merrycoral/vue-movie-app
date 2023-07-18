export default {
  // module!
  namespaced: true,
  // data!
  state: () => ({
    movies: [],
  }),
  // computed
  getters: {
    movieIds(state) {
      return state.movies.map((m) => m.imdbID);
    },
  },
  // 변이
  mutations: {
    resetMovies(state) {
      state.movies = [];
    },
  },
  // 비동기로 동작
  actions: {
    searchMovies({}) {},
  },
};
