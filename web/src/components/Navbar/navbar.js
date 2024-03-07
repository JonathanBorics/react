import "./navbar.css";

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navi">
      <Link to="/aboutus" className="nav-link">
        About US
      </Link>
      <Link to="/" className="nav-link">
        Foods
      </Link>
      <Link to="/contact" className="nav-link">
        menu
      </Link>
      <Link to="/restaurant" className="nav-link">
        Restaurant
      </Link>
      <Link to="/api" className="nav-link">
        Api
      </Link>
      <Link to="/post" className="nav-link">
        Post
      </Link>
    </div>
  );
}
