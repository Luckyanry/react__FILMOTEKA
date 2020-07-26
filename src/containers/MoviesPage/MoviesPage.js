import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { request, searchMoviesUrl } from "../../helpers/request";
import defaultImg from "../../img/default-img.jpg";
import "./MoviesPage.css";

class MoviesPage extends Component {
  state = {
    movies: [],
    search: "",
    message: "",
  };

  componentDidMount() {
    if (this.props.location.state) {
      const { search } = this.props.location.state;
      this.setState({ search });

      if (search) {
        this.searchRequest(search);
      }
    }
  }

  addSearchQuery = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleQueryOnSubmit = (e) => {
    e.preventDefault();
    const { search } = this.state;

    if (search) {
      this.searchRequest(search);

      this.props.history.push({
        search: `query=${search}`,
        state: {
          search,
        },
      });
    } else {
      return;
    }
  };

  searchRequest = async (search) => {
    const URL = searchMoviesUrl(search);

    try {
      const result = await request("get", URL);
      this.setState({
        movies: [...result.results],
      });
    } catch (error) {
      const message = error.message;
      this.setState({ message });
    }
  };

  render() {
    const { search, movies, message } = this.state;
    const { match } = this.props;

    return (
      <div className="Container">
        <div className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleQueryOnSubmit}>
            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search films"
              name="search"
              value={search}
              onChange={this.addSearchQuery}
            />
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>
          </form>
        </div>
        {message && (
          <h2 className="Error">Whoops, something went wrong: {message}</h2>
        )}
        {movies.length > 0 && (
          <ul className="MovieList">
            {movies.map((movie) => (
              <li key={movie.id} className="MovieCard">
                <NavLink
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: {
                      from: `${match.url}`,
                      search: `${search}`,
                    },
                  }}
                  className="CardLink"
                >
                  <div className="CardPoster">
                    {movie.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                      />
                    ) : (
                      <img src={defaultImg} alt={movie.title} />
                    )}
                  </div>
                  <h3 className="CardTitle">{movie.title}</h3>
                  <span className="CardReleaseDate">{movie.release_date}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default MoviesPage;
