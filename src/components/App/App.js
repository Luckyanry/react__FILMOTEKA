import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../containers/Home/Home";
import Movies from "../../containers/Movies/Movies";
import HomePage from "../HomePage/HomePage";
import MoviesPage from "../MoviesPage/MoviesPage";
import "./App.css";
import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/movies" component={Movies} /> */}
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;