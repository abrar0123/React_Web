import React from "react";
import "./headersec.css";
import Card from "../UI/Card/card";
import Container from "../UI/Card/Container";
import FlexColumn from "../UI/Card/FlexColumn";
import FlexRow from "../UI/Card/FlexRow";
import Button from "../UI/button/Button";

import pic from "../../assets/Icons/removebgAbrar (2).png";

// import Typical from "react-typical";

export default function headersection() {
  return (
    <Card className="headsection">
      <FlexRow
        style={{
          // alignItems: "flex-start",
          color: "white",
        }}
      >
        <FlexColumn className="secondarysec">
          <h1 style={{ alignItems: "center", color: "white" }}>
            Hi, Welcome to my Portfolio
          </h1>

          {/* npm i react-typical@latest --legacy-peer-depsatest --legacy-peer-deps */}

          {/* <h2 style={{ fontSize: "30px", color: "rgb(188, 204, 13)" }}>
            <Typical
              // style={{ fontSize: "30px" }}
              loop={Infinity}
              steps={[
                "Front End Developer",
                2000,
                "React Js Developer ",
                1000,
                "React Native Developer",
                1000,
              ]}
            />
          </h2> */}
          <p>
            Hi, I am Abrar-Hussain, I am professional Web developer and Mobile
            Developer,
          </p>
          <p>
            My Qualification is BS (hons) in Software Engineering from the
            university of Gujrat
          </p>
          <p>Click to Visit my Latest Projects</p>
          <FlexRow style={{ marginTop: "50px" }}>
            <Button
              style={{
                backgroundColor: "transparent",
                border: "2px solid red",
                marginRight: "20px",
                padding: "10px 20px",
              }}
            >
              Read More
            </Button>
            <Button
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "10px 20px",
                border: "2px solid red",
              }}
            >
              Latest Work
            </Button>
          </FlexRow>
        </FlexColumn>
        <Container className="imageContainer">
          <img src={pic} alt="" />
        </Container>
      </FlexRow>
    </Card>
  );
}
