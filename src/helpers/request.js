import axios from "axios";

const baseUrl = `https://api.themoviedb.org/3`;

export const searchMoviesUrl = (query) => {
  return withCredentials(`${baseUrl}/search/movie?query=${query}&`);
};

export const requestMovieUrl = (urlType = "/trending/movie/day") => {
  return withCredentials(`${baseUrl}${urlType}?`);
};

export const withCredentials = (url) => {
  return `${url}api_key=${process.env.REACT_APP_API_KEY}`;
};

export const request = async (method, url, body = null) => {
  const result = await axios[method](url, body);
  return result.data;
};

/*
https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>> - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=Max - поиск кинофильма по ключевому слову на странице фильмов.
https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>> - запрос полной информации о фильме для страницы кинофильма.
https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>> - запрос информации о актёрском составе для страницы кинофильма.
https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>> - запрос обзоров для страницы кинофильма.
*/

// export const getMovieReviewsUrl = (id) => {
//   return withCredentials(`https://api.themoviedb.org/3/movie/${id}/reviews?`);
// };

// export const getMovieCreditsUrl = (id) => {
//   return withCredentials(`https://api.themoviedb.org/3/movie/${id}/credits?`);
// };

// export const getMovieDetails = (id) => {
//   return withCredentials(`https://api.themoviedb.org/3/movie/${id}?`);
// };

// export const getTrendingMovieUrl = () => {
//   return withCredentials(`https://api.themoviedb.org/3/trending/movie/day?`);
// };
