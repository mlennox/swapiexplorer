import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../home";
import Films from "../films";
import People from "../people/people";
import Planets from "../planets";
import Species from "../species";
import Ships from "../ships";
import Vehicles from "../vehicles";
import Links from "./links";

const Routes = () => (
  <Router>
    <Links />
    <Route exact={true} path="/" component={Home} />
    <Route path="/people" component={People} />
    <Route path="/planets" component={Planets} />
    <Route path="/species" component={Species} />
    <Route path="/ships" component={Ships} />
    <Route path="/vehicles" component={Vehicles} />
    <Route path="/films" component={Films} />
  </Router>
);

export default Routes;
