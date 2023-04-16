import React from "react";
import "./header.css";
import Logo1 from "../../assets/Icons/logo22.png";

export default function header() {
  const a = "https://looka.com/s/121222617";

  return (
    <header>
      <div className="headercontainer">
        <div className="imgcontainer">
          <img src={Logo1} alt="" />
        </div>

        <nav>
          <ul>
            <li>
              <a href="#"> Home</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#"> Services</a>
            </li>
            <li>
              <a href="#"> About</a>
            </li>

            <li>
              <a href="#"> Contact </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
