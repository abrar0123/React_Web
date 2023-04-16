import React from "react";
import "./header.css";
import Logo1 from "../../assets/Icons/logo22.png";
import { useRef } from "react";
import CourseSection from "../courseSection/courseSection";
import Headersection from "../headersection/headersection";
import About from "../about/about";
export default function Header() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the component
  };

  return (
    <>
      <header>
        <div className="headercontainer">
          <div className="imgcontainer">
            <img src={Logo1} alt="" />
          </div>

          <nav>
            <ul>
              <li onClick={() => scrollToRef(section1)}>
                <a href="#Home"> Home</a>
              </li>
              <li onClick={() => scrollToRef(section2)}>
                <a href="#Skills">Skills</a>
              </li>
              <li onClick={() => scrollToRef(section3)}>
                <a href="#About"> About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#"> Services</a>
              </li>

              <li>
                <a href="#"> Contact </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* <div ref={section1Ref}>dslkdlksldk</div> */}
      {/* <Headersection /> */}
      {/* <Headersection /> */}

      <div ref={section1}>
        <Headersection />
      </div>
      <div ref={section2}>
        <CourseSection />
      </div>
      <div ref={section3}>
        <About />
      </div>
    </>
  );
}
