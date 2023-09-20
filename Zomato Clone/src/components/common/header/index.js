import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="max-width header">
      <img src="assets/logo.jpg" alt="logo" className="header-logo" />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
            <i className="fa-solid fa-location-dot absolute-center location-icon"></i>
            <div>Banglore</div>
            </div>
            <i className="fa-solid fa-caret-down absolute-center"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

