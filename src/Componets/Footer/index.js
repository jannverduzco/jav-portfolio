import React from "react";
import Row from "react-bootstrap/Row";
import Resume from "../../images/JAVResume.pdf"
import "./style.css";

function Footer() {
  return (
    <footer>
      <Row className="justify-content-md-center">
        <h4>Let's Connect</h4>
      </Row>
      <Row className="justify-content-md-center">
        <div className="icons">
          {" "}
          <a href="https://github.com/jannverduzco">
            <i className="fab fa-github" title="github repo" id="github"></i>
          </a>
          <a href="https://www.linkedin.com/in/jannethaverduzco">
            <i className="fab fa-linkedin" title="linked in" id="linkedIn"></i>
          </a>
          <a href={Resume} download>
          <i className="far fa-file" title="resume" id="resume"></i>
          </a>
        </div>
      </Row>
      <Row className="justify-content-md-center">
        @ 2021 Janenth Alvarado Verduzco
      </Row>
    </footer>
  );
}

export default Footer;
