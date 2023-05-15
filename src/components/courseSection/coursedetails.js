import React from "react";
import "./courses.css";
import Card from "../UI/Card/card";
const Coursedetails = (props) => {
  const MyCourses = props.mycourses;

  return (
    <div className="coursecontainer">
      {MyCourses &&
        MyCourses.map((item) => {
          return (
            <Card className="coursecCard">
              <div className="flexContainer">
                <div className="titlecontainer">
                  <h2>{item.name}</h2>
                </div>

                <h3>{item.exp}</h3>
              </div>

              <p
                style={
                  {
                    // color: " rgb(53, 52, 52)",
                  }
                }
              >
                {item.des}
              </p>
            </Card>
          );
        })}
    </div>
  );
};

export default Coursedetails;
