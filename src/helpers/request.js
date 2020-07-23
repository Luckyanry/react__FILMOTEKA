import axios from "axios";

export const createGalleryUrl = (query, currentPage, perPage = 12) => {
  return withCredentials(
    `https://pixabay.com/api/?q=${query}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=${perPage}&`
  );
};

export const withCredentials = (url) => {
  return `${url}key=${process.env.REACT_APP_KEY}`;
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
