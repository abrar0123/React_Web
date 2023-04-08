import React from "react";
import Card from "../UI/Card/card";
import "./about.css";

export default function about_courses() {
  
  const courses = [
    {
      id: 1,
      name: "Professional Udemy Course of React JS from beginners to Advanced ",
    },
    {
      id: 2,
      name: "Professional Udemy Course React Native complete course  ",
    },
    {
      id: 3,
      name: "Professional Udemy of Html,CSS comlete with Flexbox and Grid  ",
    },
    { id: 4, name: "Professional Udemy Advanced JavaScript include ES6 " },
  ];

  return (
    <Card>
      {courses.map((item) => {
        return (
          <div className="aboutcourseContainer">
            <p>{item.name}</p>
          </div>
        );
      })}
    </Card>
  );
}
