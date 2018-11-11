import React from "react";
import { Link } from "react-router-dom";

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

export default Links;
