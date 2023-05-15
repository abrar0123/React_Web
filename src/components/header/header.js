import React, { useEffect, useState } from "react";
import "./header.css";
import Logo1 from "../../assets/Icons/logo22.png";
import { useRef } from "react";
import CourseSection from "../courseSection/courseSection";
import Headersection from "../headersection/headersection";
import About from "../about/about";
import Container from "../UI/Card/Container";
import { IoIosMenu } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";
import Frontend from "../MyProjects/frontend";

export default function Header() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the component
  };

  const [lessWidth, setlessWidth] = useState(false);
  const [sider, setsider] = useState("navBar");

  const sideHandler = () => {
    setsider("navBar activeNavBar");
  };
  const closeMenu = () => {
    setsider("navBar removeeNavBar");
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setlessWidth(true);
      } else {
        setlessWidth(false);
        // setsider(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <div className="flex headercontainer">
          <Container className="imgcontainer">
            <img src={Logo1} alt="" />
          </Container>
          <div className={sider}>
            <ul className="flex navList">
              <li className="navItem" onClick={() => scrollToRef(section1)}>
                <a href="#Home"> Home</a>
              </li>
              <li className="navItem" onClick={() => scrollToRef(section2)}>
                <a href="#Skills">Skills</a>
              </li>
              <li className="navItem" onClick={() => scrollToRef(section3)}>
                <a href="#About"> About</a>
              </li>
              <li className="navItem" onClick={() => scrollToRef(section4)}>
                <a href="#Projects">Projects</a>
              </li>

              <li className="navItem">
                <a href="#"> Contact </a>
              </li>
              {lessWidth && (
                <AiFillCloseCircle
                  size={30}
                  color="white"
                  className="toggleMenu"
                  onClick={closeMenu}
                />
              )}
            </ul>
          </div>
          {lessWidth && (
            <IoIosMenu
              className="menuBar"
              color="white"
              size={35}
              onClick={sideHandler}
            />
          )}
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
      <div ref={section4}>
        <Frontend />
      </div>
    </>
  );
}
