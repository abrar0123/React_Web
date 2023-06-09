import React from "react";
import Container from "../UI/Card/Container";
import Button from "../../components/UI/button/Button";

const ProjectsDetails = ({ myProjects }) => {
  return (
    <div className="projectsDetailsContainer flex">
      {myProjects &&
        myProjects.map((item) => {
          return (
            <div className="projectsCard">
              <Container className="imgContainer">
                <img src={item.pic} alt="pic" />
              </Container>
              <Container className="spaceb flex">
                <h3>{item.name}</h3>
                <div className="box">{item.effort}</div>
              </Container>
              <Container className="flex">
                <div className="box" style={{ backgroundColor: "red" }}>
                  {item.Technologies[0]}
                </div>
                <div className="box">{item.Technologies[1]}</div>
                <div style={{ backgroundColor: "blue" }} className="box">
                  {item.Technologies[2]}
                </div>
              </Container>
              <div style={{ marginTop: "20px" }}>
                <hr />
              </div>
              <p>{item.des}</p>
              <div className="btnstyle">
                <Button style={{ width: "100%", padding: "15px" }}>
                  <a href={item.link} target="_blank">
                    Visit Live Project
                  </a>
                </Button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProjectsDetails;
