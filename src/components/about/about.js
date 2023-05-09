import React, { useState } from "react";
import "./about.css";
import Card from "../UI/Card/card";
import AboutDetails from "./aboutDetails";
import Profile from "../../assets/images/uu.jpg";
import FlexCard from "../UI/Card/FlexCard";
import Container from "../UI/Card/Container";
import About_edu from "./about_edu";
import About_exp from "./about_exp";
import About_courses from "./about_courses";
import About_Contact from "./about_Contact";

const items = [
  { id: 1, name: "+923097914975", title: "Contact" },
  {
    id: 2,
    name: "https://www.linkedin.com/in/abrar-hussain-347b76239/",
    title: "Linked In",
  },
  { id: 3, name: "ssgibrar786@gmail.com", title: "Email" },
  { id: 3, name: "https://github.com/abrar0123", title: "Github" },
];
export default function About() {
  const [Index, setIndex] = useState(1);

  const myIndex = (id) => {
    setIndex(id);
  };

  return (
    <Card className="about">
      <h1>About Me</h1>

      <div className="dataflexcontainer">
        <AboutDetails myIndex={myIndex} />
      </div>

      {Index === 1 ? (
        <About_edu />
      ) : Index === 2 ? (
        <About_exp />
      ) : Index === 3 ? (
        <About_courses />
      ) : (
        <About_Contact items={items} />
      )}
    </Card>
  );
}
