import axios from "axios";

export const withCredentials = (url) => {
  return `${url}client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
};

export const createUserUrl = (search, page, perPage) => {
  return withCredentials(
    `https://api.github.com/search/users?q=${search}&page=${page}&per_page=${perPage}&`
  );
};

export const createSingleUserUrl = (login) => {
  return withCredentials(`https://api.github.com/users/${login}?`);
};

export const request = async (method, url, body = null) => {
  const result = await axios[method](url, body);
  return result.data;
};

/*
https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.
*/
