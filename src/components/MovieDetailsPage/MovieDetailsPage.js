import React, { Component, lazy, Suspense } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { request, requestMovieUrl } from "../../helpers/request";
import Spinner from "../Loader/Loader";
import BackArrow from "../../img/back_arrow.svg";
import defaultImg from "../../img/default-img.jpg";
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
    message: "",
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
      const message = error.message;
      this.setState({ message });
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
    const { movie, message } = this.state;

    return (
      <div className="Container">
        {message && (
          <h2 className="Error">Whoops, something went wrong: {message}</h2>
        )}
        <img
          src={BackArrow}
          alt="Back arrow"
          className="GoBack"
          onClick={this.goBack}
        />
        <div className="MuvieDetailWrapper">
          <div className="MoviePoster">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <img src={defaultImg} alt={movie.title} />
            )}
          </div>

          <div className="MovieDescription">
            <h1 className="MovieTitle">{movie.title}</h1>
            {movie.vote_average > 0 && (
              <p className="MovieScore">User Score: {movie.vote_average}</p>
            )}
            <h2 className="MovieOverviewTitle">Overview</h2>
            <p className="MovieOverview">{movie.overview}</p>
            {movie.genres && <h3 className="MovieGenres">Genres</h3>}
            {movie.genres && (
              <ul className="MovieGenresList">
                {movie.genres.map((genre) => (
                  <li key={genre.id} className="MovieItem">
                    {genre.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <hr />
        <div className="SubMenuWrapper">
          <h3 className="SubMenuTitle">Additional information</h3>
          <NavLink
            to={`${url}/credits`}
            className="SubMenuLink"
            activeClassName="SubMenuLinkActive"
          >
            Credits
          </NavLink>
          <NavLink
            to={`${url}/reviews`}
            className="SubMenuLink"
            activeClassName="SubMenuLinkActive"
          >
            Reviews
          </NavLink>
        </div>
        <hr />

        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path={`${path}/credits`} component={Cast} />
            <Route path={`${path}/reviews`} component={Reviews} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default MovieDetailsPage;
