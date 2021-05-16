import React from "react";
import "./style.css";
import JannethV from "../../images/jannethaverduzco.jpg";

function About() {
  return (
    <div className="container">
      <h2>About Me</h2>
      <div className="row about-me-section">
        <div className="col-md-5">
        <img src={JannethV} alt="Janneth Verduzco" height={320} width={420} />
        </div>
        <div className="col-md-6">
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
