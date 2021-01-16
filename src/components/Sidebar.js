import React from "react";
import facebook from "../assets/icons/facebook.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import mightycoder from "../assets/mightycoder.svg";
import resume from "../assets/resume.pdf";

function Sidebar() {
  const handleEmail = () => {
    window.open("mailto:medkh6699@gmail.com");
  };
  return (
    <div className="sidebar">
      <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        Med <span>Kh </span>
      </div>
      <div className="sidebar__item sidebar__title"> Web Developer</div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href="">
          <img src={facebook} alt="facebook" className="sidebar__icon mr-3" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github mr-3">
          <a href="">
            <img src={github} alt="github" className="sidebar__icon" />
            github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon" />
          Tunis,Manar
        </div>
        <div className="sidebar__item">medkh6699@gmail.com</div>
        <div className="sidebar__item">55436765</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmail}>
        Email me
      </div>
    </div>
  );
}

export default Sidebar;
