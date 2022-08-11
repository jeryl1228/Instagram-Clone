import React from "react";
import "../styles/navigation.scss";
import logo from "../images/instagramLogo.png";
import searchIcon from "../images/searchIcon.png";
import Menu from "./Menu.js";

function Navigation({ setUser }) {
  return (
    <div className="navigation">
      <div className="container">
        <img className="logo" src={logo} alt="instagram logo" />
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="search icon" />
          <span className="searchText">Search</span>
        </div>
        <Menu setUser={setUser} />
      </div>
    </div>
  );
}

export default Navigation;
