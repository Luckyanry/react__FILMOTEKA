import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { request, requestMovieUrl } from "../../helpers/request";
import defaultImg from "../../img/default-img.jpg";
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
    }
  }

  render() {
    const { movies, message } = this.state;

    return (
      <div className="Container">
        <h1 className="Title">Trending today</h1>
        {message && (
          <h2 className="Error">Whoops, something went wrong: {message}</h2>
        )}
        {movies.length > 0 && (
          <ul className="HomeList">
            {movies.map((movie) => (
              <li key={movie.id} className="HomeCard">
                <NavLink
                  to={{
                    pathname: `/movie/${movie.id}`,
                    state: {
                      from: "/",
                    },
                  }}
                  className="HomeCardLink"
                >
                  <div className="HomeCardPoster">
                    {movie.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                      />
                    ) : (
                      <img src={defaultImg} alt={movie.title} />
                    )}
                  </div>
                  <h3 className="HomeCardTitle">{movie.title}</h3>
                  <span className="HomeCardReleaseDate">
                    {movie.release_date}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Home;
