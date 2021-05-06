import React from "react";
import "./style.css";
import Image from "../../images/about-me.jpg";
import JannethV from "../../images/jannethaverduzco.jpg";

function About() {
  return (
    <div className="container">
      <div
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
        }}
      >
        <h1>About Me</h1>
        <img src={JannethV} alt="Janneth Verduzco" height={200} width={200} />

        <div className="row">
          <div className="col-md-10">
            <p>
              I live in San Antonio, Texas, where I graduated from The
              University of Texas with a Biology Degree. I used my degree to
              focus on clinical trials. Four years post-graduation I have
              received my certificate, also from UTSA, as a Full Stack Web
              Developer.
            </p>
            <p>
              I have experience as a front and back end with a stack in
              JavaScript, React, MongoDB, MySQL, NoSQL, GitHub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
