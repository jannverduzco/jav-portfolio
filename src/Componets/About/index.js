import React from "react";
import "./style.css";
import JannethV from "../../images/jannethaverduzco.jpg";

function About() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <div className="row about-me-section">
        <div className="col-sm-3">
          <img src={JannethV} alt="Janneth Verduzco" height={200} width={200} />
        </div>
        <div className="col-sm-6">
          I live in San Antonio, Texas, where I graduated from The University of
          Texas with a Biology Degree. I used my degree to focus on clinical
          trials. Four years post-graduation I have received my certificate,
          also from UTSA, as a Full Stack Web Developer. I have experience as a
          front and back end with a stack in JavaScript, React, MongoDB, MySQL,
          NoSQL, GitHub.
        </div>
      </div>
    </div>
  );
}

export default About;
