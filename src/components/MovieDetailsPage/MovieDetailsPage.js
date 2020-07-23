import React from "react";
import { NavLink, Switch, Route, useHistory } from "react-router-dom";
import "./MovieDetailsPage.css";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

const MovieDetailsPage = ({ match }) => {
  const { path } = match;

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  console.dir(goBack);

  return (
    <div>
      <button type="button" onClick={goBack}>
        <span>&#8617;</span>Go Back
      </button>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h1>Title</h1>
        <span>User Score: </span>
        <h2>Overview</h2>
        <p>Discription</p>
        <h3>Genres</h3>
        {/* {singleMovie && (
          <ul>
            {singleMovie.map((genre) => (
              <li>{genre.name}</li>
            ))}
          </ul>
        )} */}
      </div>
      <hr />
      <div>
        <h3>Additional information</h3>
        <NavLink to={`${path}/cast`}>Cast</NavLink>
        <NavLink to={`${path}/reviews`}>Reviews</NavLink>
      </div>
      <hr />

      <div>
        <Switch>
          <Route path={`${path}/cast`} component={Cast} />
          <Route path={`${path}/reviews`} component={Reviews} />
        </Switch>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
