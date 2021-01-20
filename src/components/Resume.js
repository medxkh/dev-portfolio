import React from "react";

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
          <div className="resume-language__body">{}</div>
        </div>
        <div className="col-lg-6 languages">
          <h5 className="resume-language__heading">Tools and Softwares</h5>
          <div className="resume-language__body">{}</div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
