import React from "react";
import react from "../assets/icons/react.svg";
import Bar from "./Bar";
const languages = [
  {
    icon: react,
    name: "Python",
    level: "46",
  },
  {
    icon: react,
    name: "Python",
    level: "55",
  },
  {
    icon: react,
    name: "Python",
    level: "66",
  },
];
const tools = [
  {
    icon: react,
    name: "Python",
    level: "56",
  },
  {
    icon: react,
    name: "Python",
    level: "88",
  },
  {
    icon: react,
    name: "Python",
    level: "78",
  },
];

function Resume() {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">computer Science Enginnering</h5>
            <p className="resume-card__name">ISTAM</p>
            <p className="resume-card__details">
              lorem ipsum do in the life to panic
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">computer Science Enginnering</h5>
            <p className="resume-card__name">ISTAM</p>
            <p className="resume-card__details">
              lorem ipsum do in the life to panic
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 languages">
          <h5 className="resume-language__heading">language and framework</h5>
          <div className="resume-language__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 languages">
          <h5 className="resume-language__heading">Tools and Softwares</h5>
          <div className="resume-language__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
