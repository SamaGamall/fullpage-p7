import React, { useState } from 'react';
import { Link, NavLink  } from "react-router-dom";
import './Header.css';
import {FaBars} from 'react-icons/fa';
import './main';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
  }
  return (
    <>
  
  <header>
    <nav className="nav-bar" id="myTopnav">
      <a href="" className="active" style={{ color: "black" }}>
        home
      </a>
      <a href="" style={{ color: "black" }}>
        Donor Center Location
      </a>
      <a href="" style={{ color: "black" }}>
        About Us
      </a>
      <a href="" style={{ color: "black" }}>
        Contant
      </a>
      <button
        className=" btn1-1"
        onclick="window.location.href='';">
        donate
      </button>
      

      <a href="javascript:void(0);" className="icon2" onClick={myFunction}>
      <MenuIcon  />
      </a>

      
    </nav>
  </header>
</>

  );
}

export default Header;

