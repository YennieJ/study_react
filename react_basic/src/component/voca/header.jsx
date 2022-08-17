import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link to="/">
      <h1>IELTS 영단어</h1>
    </Link>
    <div className="menu">
      <a href="#" className="link">
        단어 추가
      </a>
      <a href="#" className="link">
        day 추가
      </a>
    </div>
  </div>
);

export default Header;
