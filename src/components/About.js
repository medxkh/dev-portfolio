import React from "react";
import api from "../assets/icons/api.svg";
import Skillcard from "./Skillcard";

const skills = [
  {
    icon: api,
    title: "lorem ipsum dolor sit.",
    about:
      "lorem of 10 line and this is it zmot sarijio dila moppi cambojiballalala",
  },
  {
    icon: api,
    title: "lorem ipsum dolor sit.",
    about:
      "lorem of 10 line and this is it zmot sarijio dila moppi cambojiballalala",
  },
  {
    icon: api,
    title: "lorem ipsum dolor sit.",
    about:
      "lorem of 10 line and this is it zmot sarijio dila moppi cambojiballalala",
  },
  {
    icon: api,
    title: "lorem ipsum dolor sit.",
    about:
      "lorem of 10 line and this is it zmot sarijio dila moppi cambojiballalala",
  },
  {
    icon: api,
    title: "lorem ipsum dolor sit.",
    about:
      "lorem of 10 line and this is it zmot sarijio dila moppi cambojiballalala",
  },
  {
    icon: api,
    title: "lorem ipsum dolor sit.",
    about:
      "lorem of 10 line and this is it zmot sarijio dila moppi cambojiballalala",
  },
];

function About() {
  return (
    <div className="about">
      <h6 className="about__intro">lorem haykavki,g for the lopmamikaaa</h6>
      <div className="container about__container">
        <h6 className="about__heading"></h6>
        <div className="row">
          {skills.map((skill) => (
            <Skillcard skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
