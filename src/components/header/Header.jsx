import React from "react";
import logo from "../../assets/image/Logo.png";
import "./header.css";
import { BsSearch } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="navbar flex">
        <img src={logo} alt="logo" />
        <ul className="list flex">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Collection</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <div className="auth">
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </div>
      <div className="text__content">
        <h1>Find your favorite  </h1> 
        <h1><BsSearch/> Clothing</h1>
        <div className="search__bar">
            <input type="text" placeholder="search your brands" />
            <FaSearch className="search"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
