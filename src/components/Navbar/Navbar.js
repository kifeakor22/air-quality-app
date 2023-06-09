import React from "react";
import Search from "../search/Search";
import "./style.css";

const Navbar = ({ setLocation, setApi }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <button className="navbar-brand col-3 btn btn-outline">
        City Air Quality Checker
      </button>
      <div className="d-flex justify-content-center align-items-center col-6">
        <Search setLocation={setLocation} setApi={setApi} />
      </div>

      <div
        className="collapse navbar-collapse justify-content-end pe-3 col"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <button className="nav-link btn btn-outline">
              Home <span className="sr-only">(current)</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
