import React from "react";
import Search from "../search/Search";
import "./style.css";

const Navbar = ({ setLocation, setApi }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 justify-content-between">
      <a className="navbar-brand col-3" href="#">
        City Air Quality Checker
      </a>
      <div className="d-flex justify-content-center col-6">
        <Search setLocation={setLocation} setApi={setApi}/>
      </div>

      <div className="collapse navbar-collapse justify-content-end pe-3 col" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li> 
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;