import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {ROUTES} from "./constants/api";

import Header from "./components/header/Header";

import CouncillorsList from "./pages/CouncillorsList";
import AffairsList from "./pages/AffairsList";
import CouncilsList from "./pages/CouncilsList";

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path={ROUTES.affairs} component={AffairsList} />
      <Route exact path={ROUTES.councillors} component={CouncillorsList} />
      <Route exact path={ROUTES.councils} component={CouncilsList} />
    </Switch>
  </Router>
)

export default Routes