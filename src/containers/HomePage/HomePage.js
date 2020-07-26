import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { request, requestMovieUrl } from "../../helpers/request";
import "./HomePage.css";

class Home extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const URL = requestMovieUrl();

    try {
      const result = await request("get", URL);

      this.setState({
        movies: [...result.results],
      });
    } catch (error) {
      throw new Error(error);
    } finally {
    }
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>Trending today</h1>
        {movies.length > 0 && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <NavLink
                  to={{
                    pathname: `/movie/${movie.id}`,
                    state: {
                      from: "/",
                    },
                  }}
                >
                  {movie.title}
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
