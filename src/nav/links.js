import React from "react";
import { NavLink } from "react-router-dom";

const activeLinkClass = "active";

const Links = () => (
  <nav>
    <NavLink exact activeClassName={activeLinkClass} to="/">
      Home
    </NavLink>
    <NavLink activeClassName={activeLinkClass} to="/people">
      People
    </NavLink>
    <NavLink activeClassName={activeLinkClass} to="/planets">
      Planets
    </NavLink>
    <NavLink activeClassName={activeLinkClass} to="/species">
      Species
    </NavLink>
    <NavLink activeClassName={activeLinkClass} to="/ships">
      Ships
    </NavLink>
    <NavLink activeClassName={activeLinkClass} to="/vehicles">
      Vehicles
    </NavLink>
    <NavLink activeClassName={activeLinkClass} to="/films">
      Films
    </NavLink>
  </nav>
);

export default Links;
