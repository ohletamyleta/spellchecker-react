import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/currentUser";

const Logout = ({ logout }) => {
  return (
    <form onSubmit={logout}>
      <button className="button button-logout" type="submit" value="Log Out">
        Log out
      </button>
    </form>
  );
};

export default connect(null, { logout })(Logout);
