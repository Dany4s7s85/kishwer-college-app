import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="NavMainDiv">
        <ul>
          <li>
            <Link to="/" className="CustomLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/programmes" className="CustomLink">
              Programmes
            </Link>
          </li>
          <li>
            <Link to="/apply" className="CustomLink">
              Application Form
            </Link>
          </li>
          <li>
            <Link to="/status" className="CustomLink">
              Application Status
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="CustomLink">
              About-us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
