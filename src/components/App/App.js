import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import Spinner from "../Loader/Loader";
import "./App.css";

const HomePage = lazy(() =>
  import(
    "../../containers/HomePage/HomePage" /* webpackChunkName: "home-page" */
  )
);

const MoviesPage = lazy(() =>
  import(
    "../../containers/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */
  )
);

const MovieDetailsPage = lazy(() =>
  import(
    "../MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movie" component={MoviesPage} />
          <Route path="/movie/:movieId" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
