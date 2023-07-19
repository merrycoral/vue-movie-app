import axios from "axios";
import _uniqBy from "lodash/uniqBy";

export default {
  namespaced: true,
  state: () => ({
    movies: [],
    message: "",
    loading: false,
  }),
  getters: {},
  mutations: {
    // 변이 method
    updateState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    resetMovies(state) {
      state.movies = [];
    },
  },
  actions: {
    async searchMovies({ state, commit }, payload) {
      const res = await _fetchMovie({
        ...payload,
        page: 1,
      });
      const { Search, totalResults } = res.data;
      commit("updateState", {
        movies: _uniqBy(Search, "imdbID"),
      });
      console.log(totalResults);
      console.log(typeof totalResults);

      const total = parseInt(totalResults, 10);
      const pageLength = Math.ceil(total / 10);

      // 추가 요청
      if (pageLength > 1) {
        for (let page = 2; page <= pageLength; page += 1) {
          if (page > payload.number / 10) break;
          const res = await _fetchMovie({
            ...payload,
            page,
          });
          const { Search } = res.data;
          commit("updateState", {
            movies: [...state.movies, ..._uniqBy(Search, "imdbID")],
          });
        }
      }
    },
  },
};

function _fetchMovie(payload) {
  const { title, type, year, page } = payload;
  const OMDB_API_KEY = "3a131227";
  // const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title.toLowerCase()}&type=${type}&y=${year}&page=${page}`;
  const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        if (res.data.Error) {
          reject(res.data.Error);
        }
        resolve(res);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
}
