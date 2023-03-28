import React from "react";
import Search from "../search/Search";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 justify-content-between">
      <h3 className="navbar-brand col-3" >
        City Air Quality Checker
      </h3>
      <div className="d-flex justify-content-center col-6">
        <Search />
      </div>

      <div className="collapse navbar-collapse justify-content-end pe-3 col" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <h3 className="nav-link">
              Home <span className="sr-only">(current)</span>
            </h3>
          </li> 
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;