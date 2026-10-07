import axios from 'axios';

const API_KEY = 'f46c1d0ce2a6997d57e3d839898c078e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data.results;
};

export const searchMovies = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data.results;
};
