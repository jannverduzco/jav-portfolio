import React from "react";
import AutoMind from "../../images/autoMind.jpg";
import ALists from "../../images/a-lists.jpg";
import ReadMeGen from "../../images/readMeGen.PNG";
import FitnessTracker from "../../images/fitnessTracker.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projects() {
  return (
    <div className="container">
      <Row>
        <Col md={6}>
          AutoMind
          <img src={AutoMind} alt="AutoMind" height={150} width={300} />{" "}
          <div className="icons">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/jannverduzco/AutoMind"
            >
              <i className="fab fa-github" title="github repo" id="github">
                {" "}
              </i>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://auto-mind.herokuapp.com/"
              target="_blank"
            >
              {" "}
              <i
                className="fas fa-external-link-alt"
                title="live preview"
                id="live"
              ></i>
            </a>
          </div>
        </Col>
        <Col md={6}>
          A-Lists
          <img
            src={ALists}
            alt="ALists"
            height={150}
            width={300}
          />{" "}
          <div className="icons">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/jannverduzco/a-lists"
            >
              <i className="fab fa-github" title="github repo" id="github">
                {" "}
              </i>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://a-lists.herokuapp.com/"
              target="_blank"
            >
              {" "}
              <i
                className="fas fa-external-link-alt"
                title="live preview"
                id="live"
              ></i>
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          Professional README.MD Generator
          <img
            src={ReadMeGen}
            alt="ProfReadMeGen"
            height={150}
            width={300}
          />{" "}
          <div className="icons">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/jannverduzco/09-Professional-README-Generator"
            >
              <i className="fab fa-github" title="github repo" id="github">
                {" "}
              </i>
            </a>
          </div>
        </Col>
        <Col md={6}>
          Budget Tracker
          <img
            src={FitnessTracker}
            alt="FitnessTracker"
            height={150}
            width={300}
          />{" "}
           <div className="icons">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/jannverduzco/My-Workout-Tracker"
            >
              <i className="fab fa-github" title="github repo" id="github">
                {" "}
              </i>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://stay-fit-ness-tracker.herokuapp.com/"
              target="_blank"
            >
              {" "}
              <i
                className="fas fa-external-link-alt"
                title="live preview"
                id="live"
              ></i>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
