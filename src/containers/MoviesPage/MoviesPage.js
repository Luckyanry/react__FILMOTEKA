import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./MoviesPage.css";

class MoviesPage extends Component {
  state = {
    movies: [
      { id: "id-5", name: "Simpson" },
      { id: "id-6", name: "Hermione" },
      { id: "id-7", name: "Clements" },
      { id: "id-8", name: "Copeland" },
    ],
    search: "",
    loader: false,
    error: false,
  };

  addSearchQuery = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleQueryOnSubmit = (e) => {
    e.preventDefault();
    // const { search } = this.state;
    console.log("Can to do search in backend");
  };

  // searchRequest = async (...rest) => {
  //   const URL = createGalleryUrl(...rest);

  //   try {
  //     this.loaderToggle(true);
  //     const result = await request("get", URL);
  //     this.errorToggle(false);
  //     return result;
  //   } catch (error) {
  //     this.errorToggle(true);
  //     const message = error.message;
  //     return message;
  //   } finally {
  //     this.loaderToggle(false);
  //   }
  // };

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
              <NavLink to={`${match.url}/${movie.id}`}>
                {movie.name}:{movie.id}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
