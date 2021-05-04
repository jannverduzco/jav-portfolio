import React from "react";
import Image from "../../images/about-me.jpg";

function About() {
  return (
    <div className="section-container">
      <div
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
        }}
      >
        <h5> I am a Full Stack Web Developer.</h5>
      </div>
    </div>
  );
}

export default About;
