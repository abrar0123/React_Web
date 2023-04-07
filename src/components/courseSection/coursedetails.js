import React from "react";
import "./courses.css";

const Coursedetails = (props) => {
  const MyCourses = props.mycourses;

  return (
    <>
      {MyCourses &&
        MyCourses.map((item) => {
          return (
            <div className="coursecCard">
              <h2 style={{ margin: 0, color: "rgb(204, 199, 199)" }}>
                {item.name}
              </h2>
              <h3>{item.exp}</h3>
              <p>{item.des}</p>
            </div>
          );
        })}
    </>
  );
};

export default Coursedetails;
