import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { request, searchMoviesUrl } from "../../helpers/request";
import "./MoviesPage.css";

class MoviesPage extends Component {
  state = {
    movies: [],
    search: "",
    loader: false,
    error: false,
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
      throw new Error(error);
    } finally {
    }
  };

  render() {
    const { search, movies } = this.state;
    const { match } = this.props;

    return (
      <>
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
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <NavLink
                to={{
                  pathname: `${match.url}/${movie.id}`,
                  state: {
                    from: `${match.url}`,
                    search: `${search}`,
                  },
                }}
              >
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
