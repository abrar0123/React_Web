import React from 'react';
import './headersec.css';
import Container from '../UI/Card/Container';
import FlexColumn from '../UI/Card/FlexColumn';
import Button from '../UI/button/Button';

import pic from '../../assets/Icons/removebgAbrar (2).png';

// import Typical from "react-typical";

export default function headersection() {
  return (
    <section className="headsection">
      <div className="flex mainflexCntainer">
        <FlexColumn className="secondarysec">
          <h2
            style={{
              color: 'white',
              marginBottom: 30,
              fontSize: 25,
              fontFamily: 'sans-serif',
            }}
          >
            Hello, I'm Abrar Hussain Software Engineer
          </h2>
          {/* <h2 style={{ color: 'blue', margin: '30 0' }}>SOFTWARE ENGINEER</h2> */}

          <h2
            style={{
              color: 'white',
              margin: 0,
              fontSize: 32,
              fontFamily: 'sans-serif',
            }}
          >
            I can create
            <span style={{ color: 'darkblue' }}>
              {' '}
              Mobile and Web Apps for you
            </span>
          </h2>
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
          {/* <p>
            Hi, I'm Abrar-Hussain, I am professional React developer and Mobile
            Developer (React Native),
          </p>
          <p>
            My Qualification is BS (hons) in Software Engineering from the
            university of Gujrat.
          </p> */}
          {/* <p>Click to Visit my Latest Projects</p> */}
          <div style={{ marginTop: '50px' }}>
            <Button
              style={{
                backgroundColor: 'transparent',
                border: '2px solid red',
                marginRight: '20px',
                padding: '10px 20px',
              }}
            >
              Read More
            </Button>
            <Button
              style={{
                backgroundColor: 'red',
                color: 'white',
                padding: '10px 20px',
                border: '2px solid red',
              }}
            >
              Latest Work
            </Button>
          </div>
        </FlexColumn>
        <Container className="imageContainer">
          <img src={pic} alt="" />
        </Container>
      </div>
    </section>
  );
}
