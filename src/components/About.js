import React from "react";
import api from "../assets/icons/api.svg";
import algo from "../assets/icons/algo.svg";
import computer from "../assets/icons/computer.svg";
import repair from "../assets/icons/repair.svg";
import puzzle from "../assets/icons/puzzle.svg";
import Skillcard from "./Skillcard";

const skills = [
  {
    icon: computer,
    title: "Frontend Devlopment",
    about:
      "i can build a beautiful and scalable SPA using HTML, CSS and React.js",
  },
  {
    icon: repair,
    title: "Backend Development",
    about: "handle database, server, api using django/firebase/SQL",
  },
  {
    icon: api,
    title: "API Development ",
    about: "I can develop rebust REST API ",
  },
  {
    icon: algo,
    title: "Competitive Coder",
    about: "a daily problem solver, trying new algo ",
  },
  {
    icon: puzzle,
    title: "contrebute open source",
    about: "i can change add new future in open source projects",
  },
  {
    icon: computer,
    title: "Web scraping/automation",
    about:
      "i can scrape data from web and make bots for automation using python",
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
