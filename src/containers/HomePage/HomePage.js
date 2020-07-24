import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.css";

class Home extends Component {
  state = {
    movies: [
      { id: "id-1", name: "Rosie Simpson" },
      { id: "id-2", name: "Hermione Kline" },
      { id: "id-3", name: "Eden Clements" },
      { id: "id-4", name: "Annie Copeland" },
    ],
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>Trending today</h1>
        {movies.length > 0 && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>
                  {movie.name}:{movie.id}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Home;
