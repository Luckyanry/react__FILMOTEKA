import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
                <NavLink to="/">{movie.name}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Home;
