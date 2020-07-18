import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Post from "../pages/Post";

const Routes = (props) => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/post/:slug" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
