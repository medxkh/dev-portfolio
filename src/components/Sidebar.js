import React from "react";

function Sidebar() {
  return (
    <div>
      <img src="" alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        Med <span>Kh </span>
      </div>
      <div className="sidebar__item sidebar__title"> Web Developer</div>
      <a href="">
        <div className="sidebar__item">
          <img src="" alt="resume" className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons">
        <a href="">
          <img src="" alt="facebook" className="sidebar__icon" />
          <img src="" alt="gmail" className="sidebar__icon" />
        </a>
      </figure>
      <div className="contact">
        <div className="sidebar__item">
          <a href="">
            <img src="" alt="github" className="sidebar__icon" />
            github
          </a>
        </div>
        <div className="sidebar__item">medkh6699@gmail.com</div>
        <div className="sidebar__item">55436765</div>
      </div>
      <div className="sidebar__item sidebar__email">Email me</div>
    </div>
  );
}

export default Sidebar;
