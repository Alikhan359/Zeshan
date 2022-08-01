import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-items">
          <img
            className="logo"
            src="https://cdn.vectorstock.com/i/1000x1000/70/84/logo-icon-for-digital-business-vector-19107084.webp"
            alt="Logo"
            width={100}
          />
         <ul className="nav-list">
         <li><a href="#">Home</a></li> 
          <li><a href="#">About</a></li>
         <li><a href="#">Contact Us</a></li>
         </ul>
      </div>
    </div>
  );
}
