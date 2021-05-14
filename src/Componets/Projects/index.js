import React from "react";
import AutoMind from "../../images/autoMind.jpg";
import ALists from "../../images/a-lists.jpg";
import ReadMeGen from "../../images/readMeGen.PNG";
import FitnessTracker from "../../images/fitnessTracker.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

function Projects() {
  return (
    <div className="container">
      <Row>
        <Col>
          <Row>
            <div className="title">AutoMind</div>
          </Row>
          <Row>
            {" "}
            <img src={AutoMind} alt="AutoMind" height={150} width={300} />{" "}
          </Row>
          <Row>
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
                  title="deployed site"
                  id="deployed"
                ></i>
              </a>
            </div>
          </Row>
        </Col>
        <Col>
          <Row>
            <div className="title">A-Lists </div>
          </Row>
          <Row>
            <img src={ALists} alt="ALists" height={150} width={300} />{" "}
          </Row>
          <Row>
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
                  title="deployed site"
                  id="deployed"
                ></i>
              </a>
            </div>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <div className="title"> Professional README.MD Generator </div>
          </Row>
          <Row>
            <img src={ReadMeGen} alt="ProfReadMeGen" height={150} width={300} />{" "}
          </Row>
          <Row>
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
          </Row>
        </Col>
        <Col>
          <Row>
            <div className="title"> Budget Tracker</div>
          </Row>
          <Row>
            <img
              src={FitnessTracker}
              alt="FitnessTracker"
              height={150}
              width={300}
            />{" "}
          </Row>
          <Row>
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
                  title="deployed site"
                  id="deployed"
                ></i>
              </a>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
