import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { request, requestMovieUrl } from "../../helpers/request";
import "./HomePage.css";

class Home extends Component {
  state = {
    movies: [],
    message: "",
  };

  async componentDidMount() {
    const URL = requestMovieUrl();

    try {
      const result = await request("get", URL);

      this.setState({
        movies: [...result.results],
      });
    } catch (error) {
      const message = error.message;
      this.setState({ message });
      // } finally {
    }
  }

  render() {
    const { movies, message } = this.state;

    return (
      <>
        <h1>Trending today</h1>
        {<h2 className="Error">Whoops, something went wrong: {message}</h2>}
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
