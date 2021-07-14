import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css"

import Home from "./pages/home";
import Movies from "./pages/movies";
import TvShows from "./pages/tvshows";

const App = () => (
  <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/tvshows" component={TvShows} />
      </Switch>
      </BrowserRouter>
);

export default App;


