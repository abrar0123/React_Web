import React from "react";
import "./about.css";
import Button from "../UI/button/Button";
import { useState } from "react";

const data = [
  { id: 1, name: "Education", status: true },
  { id: 2, name: "Experience", status: false },
  { id: 3, name: "Courses", status: false },
  { id: 4, name: "Contact", status: false },
];

export default function AboutDetails(props) {
  const [myindex, setmyindex] = useState(1);

  const clickHandler = (id) => {
    setmyindex(id);
    props.myIndex(id);
  };
  return (
    <React.Fragment>
      {data.map((item, i) => {
        return (
          <div className="datacontainer" key={i}>
            <Button
              style={{
                backgroundColor: item.id === myindex && "rgb(255, 38, 0)",
              }}
              onClick={clickHandler.bind(this, item.id)}
            >
              {item.name}
            </Button>
          </div>
        );
      })}
    </React.Fragment>
  );
}
