import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        {" "}
        <Link to="/forms">Form-Page</Link>
        <Link to="/counts">Counts</Link>
        <Link to="/styles">Style-Component</Link>
      </header>
    </>
  );
};

export default Navbar;
