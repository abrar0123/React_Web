import React from "react";
import "./header.css";
import Logo1 from "../../assets/Icons/logo4.png";
export default function header() {
  return (
    <header>
      <div className="container">
        <div className="imgcontainer">
          <img src={Logo1} alt="" />
        </div>

        <nav>
          <ul>
            <li>
              <a href=""> Home</a>
            </li>
            <li>
              <a href=""> Courses</a>
            </li>
            <li>
              <a href=""> Services</a>
            </li>
            
            <li>
              <a href=""> Contact </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a href=""> Sign up</a>
            </li>
            <li>
              <a href=""> Log In </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
