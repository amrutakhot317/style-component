import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        {" "}
        <Link to="/forms">Create-User</Link>
        <Link to="/profile">Review-User</Link>
        <Link to="/confirm">List Of User</Link>
        <Link to="/counts">Counts</Link>
        <Link to="/styles">Style-Component</Link>
        <Link to="/sagas">Saga-Example</Link>
      </header>
    </>
  );
};

export default Navbar;
