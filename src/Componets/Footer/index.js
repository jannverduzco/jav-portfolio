import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

function Footer() {
  return (
    <footer>
      <Row className="justify-content-md-center">
        <h4>Lets Connect</h4>
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
        </div>
      </Row>
      <Row className="justify-content-md-center">All Rights Reserved</Row>
    </footer>
  );
}

export default Footer;
