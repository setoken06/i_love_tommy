import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// page components
import { Home } from "components/pages/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
