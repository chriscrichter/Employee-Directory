import React from "react";
import SearchName from "./Filter.js";
import "../styles/Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle=""
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="" />
      </button>
      <div className="navbar-collapse collapse row" id="navbarNav">
        <div className="search-area col-5">
          <SearchName />
        </div>
      </div>
    </nav>
  );
}
export default Nav;
