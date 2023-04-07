import React from "react";
import "./headersec.css";
import Card from "../UI/Card/card";
import pic from "../../assets/images/AbrarPic.JPEG";
export default function headersection() {
  return (
    <Card className="headsection">
      <div className="headerMainContainer">
        <div style={{ width: "220px" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              opacity: 0.75,
              Zindex: 998,
              boxShadow: "2px 2px 10px brown",
            }}
            src={pic}
            alt=""
          />
        </div>
        <div className="headsectionContainer">
          <h1>★彡 Mʏ Pᴏʀᴛꜰᴏʟɪᴏ Site 彡★</h1>
          <p>
            Hi, I am Abrar-Hussain, I am professional Web developer and Mobile
            Developer,
          </p>
          <p>
            My Qualification is BS (hons) in Software Engineering from the
            university of Gujrat
          </p>
          <p>Click to Visit my Latest Projects</p>
        </div>
      </div>
    </Card>
  );
}
