import React, { Component, lazy, Suspense } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { request, requestMovieUrl } from "../../helpers/request";
import Spinner from "../Loader/Loader";
import "./MovieDetailsPage.css";

const Cast = lazy(() =>
  import("../Cast/Cast" /* webpackChunkName: "movie-cast-page" */)
);

const Reviews = lazy(() =>
  import("../Reviews/Reviews" /* webpackChunkName: "movie-reviews-page" */)
);

class MovieDetailsPage extends Component {
  state = {
    movie: [],
    search: "",
    from: "",
  };

  async componentDidMount() {
    const { url } = this.props.match;
    const URL = requestMovieUrl(url);

    try {
      const result = await request("get", URL);

      this.setState({
        movie: result,
      });
    } catch (error) {
      throw new Error(error);
    } finally {
    }

    if (this.props.location.state) {
      this.setState({
        search: this.props.location.state.search,
        from: this.props.location.state.from,
      });
    }
  }

  goBack = (e) => {
    e.preventDefault();
    const { from, search } = this.state;

    if (search) {
      this.props.history.push({
        pathname: `${from}`,
        search: `query=${search}`,
        state: {
          search,
        },
      });
    } else {
      this.props.history.push("/");
    }
  };

  render() {
    const { path, url } = this.props.match;
    const { movie } = this.state;

    return (
      <div>
        <button type="button" onClick={this.goBack}>
          <span>&#8617;</span> Go Back
        </button>
        {movie.poster_path && (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        )}
        <div>
          <h1>{movie.title}</h1>
          <span>User Score: {movie.vote_average}</span>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          {movie.genres && (
            <ul>
              {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          )}
        </div>
        <hr />
        <div>
          <h3>Additional information</h3>
          <NavLink to={`${url}/credits`}>Credits</NavLink>
          <span> </span>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </div>
        <hr />

        <div>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path={`${path}/credits`} component={Cast} />
              <Route path={`${path}/reviews`} component={Reviews} />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
