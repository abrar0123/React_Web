import React, { useEffect, useState } from "react";
import "./header.css";
import Logo1 from "../../assets/Icons/logo22.png";
import { useRef } from "react";
import CourseSection from "../courseSection/courseSection";
import Headersection from "../headersection/headersection";
import About from "../about/about";
import Container from "../UI/Card/Container";
import FlexRow from "../UI/Card/FlexRow";
import Card from "../UI/Card/card";
import { IoIosMenu, IoIosRemoveCircle } from "react-icons/io";
import { BiCross } from "react-icons/bi";

export default function Header() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the component
  };

  const [isOpen, setIsOpen] = useState(false);
  const [sider, setsider] = useState(false);

  const sideHandler = () => {
    setsider(true);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
        setsider(false);
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
        <FlexRow className="headercontainer">
          <Container className="imgcontainer">
            <img src={Logo1} alt="" />
          </Container>

          {isOpen ? (
            <IoIosMenu
              className="toggle"
              color="white"
              size={25}
              onClick={sideHandler}
            />
          ) : (
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
          )}
          {sider && (
            <Card className="sidebar">
              <FlexRow>
                <a href=""></a>
                <BiCross
                  color="white"
                  size={25}
                  className="toggle"
                  onClick={() => setsider(false)}
                />
              </FlexRow>
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
            </Card>
          )}
        </FlexRow>
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
