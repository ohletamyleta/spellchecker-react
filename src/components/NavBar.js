import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
};

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: "darkgreen",
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/spells"
          exact
          style={link}
          activeStyle={{
            background: "darkgreen",
          }}
        >
          Spells
        </NavLink>
        <NavLink
          to="/spellbook"
          exact
          style={link}
          activeStyle={{
            background: "darkgreen",
          }}
        >
          Spellbook
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
