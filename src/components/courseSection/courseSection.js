import React from "react";
import Coursedetails from "./coursedetails";
import "./courses.css";
import Card from "../UI/Card/card";

const CourseSection = () => {
  const mycourses = [
    {
      id: 1,
      name: "HTML5",
      exp: "1.5+ Years",
      des: "Hi, i have completed my html course 2 years ago , when i have in university and also i have coursera certificate regarding this,Also i done many projects regardig this , Thanks ",
    },
    {
      id: 2,
      name: "CSS3",
      exp: "1+ Years",
      des: "Hi, i have completed my CSS3 course 2 years ago , when i have in university and also i have coursera certificate regarding this,Also i done many projects regardig this , Thanks ",
    },
    {
      id: 3,
      name: "JavaScript",
      exp: "1+ Years",
      des: "Hi, I have completely understand the backbone of javacsript includes advanced concpets ,Also i done many projects regardig this , Thanks ",
    },
    {
      id: 4,
      name: "Git & Github",
      exp: "6+ Months",
      des: "Hi, I have completely understand git and github and also professional veriosn managment through Sourcetree and i also update my projects through Sourcetree  , Thanks ",
    },
    {
      id: 5,
      name: "React JS",
      exp: "6+ Months",
      des: "I have completed the advanced concepts of  of React JS includes advanced concpets ,Also i done many projects regardig this , Thanks ",
    },
    {
      id: 6,
      name: "React Native",
      exp: "6+ Months",
      des: "I have 3 month software house experience of React Native includes advanced concpets ,Also i done many projects regardig this , Thanks ",
    },
  ];

  return (
    <Card className="section">
      <h1>My Skills</h1>

      <div className="coursecontainer">
        <Coursedetails mycourses={mycourses} />
      </div>
    </Card>
  );
};

export default CourseSection;
