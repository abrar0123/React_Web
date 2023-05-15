import React from "react";
import "./courses.css";
import Card from "../UI/Card/card";
const Coursedetails = (props) => {
  const MyCourses = props.mycourses;

  return (
    <div className="coursecontainer">
      {MyCourses &&
        MyCourses.map((item) => {
          // item?.topics &&
          let myTopic = [];
          if (item.topics) {
            myTopic = Object.keys(item?.topics && item.topics);
          }

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
              {/* {item?.topics && (
                <div className="topicbox">{item.topics.SemanticHTML[0]}</div>
              )} */}
              <div style={{ margin: "20px 0" }}>
                <hr />
              </div>
              <div className="topicflex">
                {myTopic &&
                  myTopic.map((topic) => {
                    return <div className="topicbox">{topic}</div>;
                  })}
              </div>
            </Card>
          );
        })}
    </div>
  );
};

export default Coursedetails;
