import React, { Component } from "react";
import "./Movies.css";

class Movies extends Component {
  state = {
    movies: [],
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
    const { search } = this.state;
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
      </>
    );
  }
}

export default Movies;