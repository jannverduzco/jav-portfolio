import React from "react";
import AutoMind from "../../images/autoMind.jpg";
import EatDaBurger from "../../images/eatDaBurger.jpg";
import ReadMeGen from "../../images/readMeGen.PNG";
import BudgetTracker from "../../images/BudgetTracker.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projects() {
  return (
    <div className="container">
      <Row>
        <Col md={6}>
          AutoMind
          <img src={AutoMind} alt="AutoMind" height={150} width={400} />{" "}
          <Row>
            <a href="https://github.com/jannverduzco/AutoMind">
              AutoMind on GitHub
            </a>
          </Row>
          <Row>
            <a href="https://auto-mind.herokuapp.com/">AutoMind on Heroku</a>
          </Row>
        </Col>
        <Col md={6}>
          Eat-Da-Burger
          <img
            src={EatDaBurger}
            alt="EatDaBurger"
            height={150}
            width={400}
          />{" "}
          <Row>
            <a href="https://github.com/jannverduzco/Eat-Da-Burger">
              Eat-Da-Burger on GitHub
            </a>
          </Row>
          <Row>
            <a href="https://eat-da-brg.herokuapp.com/">
              Eat-Da-Burger on Heroku
            </a>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          Professional README.md Generator
          <img
            src={ReadMeGen}
            alt="ProfReadMeGen"
            height={150}
            width={400}
          />{" "}
          <Row>
            <a href="https://github.com/jannverduzco/09-Node.js-Homework-Professional-README-Generator">
              Professional README.md Generator on GitHub
            </a>
          </Row>
        </Col>
        <Col md={6}>
          Budget Tracker
          <img
            src={BudgetTracker}
            alt="budgetTracker"
            height={150}
            width={400}
          />{" "}
          <Row>
            <a href="https://github.com/jannverduzco/Budget-Tracker">
              Budget Tracker on GitHub
            </a>
          </Row>
          <Row>
            <a href="https://bdg-tracker.herokuapp.com/">
              Budget Tracker on Heroku
            </a>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
