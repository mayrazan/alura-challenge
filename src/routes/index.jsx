import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Community from "../pages/Community";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/comunidade" component={Community} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
