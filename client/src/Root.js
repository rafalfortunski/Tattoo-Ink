import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./views/Home";
import ArtistsList from "./views/ArtistsList";
import Artist from "./views/Artist";
import About from "./views/About";
import Login from "./views/Login";
import Register from "./views/Register";

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={About} />
          <Route exact path="/artists" component={ArtistsList} />
          <Route path="/artists/:id" component={Artist} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Register} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default Root;
