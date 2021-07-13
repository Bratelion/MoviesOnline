import React from "react";
import render from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Movies from "./pages/movies";
import TvShows from "./pages/tvshows";

const App = () => (
  <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/tvshows" component={TvShows} />
      </Switch>
      </BrowserRouter>
);

export default App;


