import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../../containers/HomePage/HomePage";
import MoviesPage from "../../containers/MoviesPage/MoviesPage";
import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
