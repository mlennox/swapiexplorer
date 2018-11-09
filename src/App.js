import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Films from "./films";
import People from "./people";
import Planets from "./planets";
import Species from "./species";
import Ships from "./ships";
import Vehicles from "./vehicles";

const Home = () => <h1>Home</h1>;

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/people">People</Link>
    <Link to="/planets">Planets</Link>
    <Link to="/species">Species</Link>
    <Link to="/ships">Ships</Link>
    <Link to="/vehicles">Vehicles</Link>
    <Link to="/films">Films</Link>
  </nav>
);

const App = () => (
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

export default App;
