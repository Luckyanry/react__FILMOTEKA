import React from "react";
import "./MoviesPage.css";
import { NavLink } from "react-router-dom";

const MoviesPage = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <NavLink to={``}>{movie.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesPage;
