import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home";

const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );

function App() {
  return(
    <>
    <Home/>
    </>
  )
}

export default App;