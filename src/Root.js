import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import ArtistsList from "./views/ArtistsList";
import Artist from "./views/Artist";
import About from "./views/About";
import DesignSystem from "./views/DesignSystem";

function Root() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={About} />
        <Route exact path="/artists" component={ArtistsList} />
        <Route path="/artists/:id" component={Artist} />
        <Route path="/design" component={DesignSystem} />
      </Router>
    </div>
  );
}

export default Root;
