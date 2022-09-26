import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <div className="header__left">
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/reference">reference</Link>
          </li>
          <li>
            <Link to="/portfolio">portfolio</Link>
          </li>
        </ul>
      </div>
      <div className="header__logo">
        <Link to="/">API Stie</Link>
      </div>
      <div className="header__right">
        <ul>
          <li>
            <Link to="/youtube">youtube</Link>
          </li>
          <li>
            <Link to="/movie">movie</Link>
          </li>
          <li>
            <Link to="/unsplash">unsplash</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
