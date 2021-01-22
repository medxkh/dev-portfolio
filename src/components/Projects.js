import React, { useState } from "react";
import data_projects from "./data/projects_data";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [projects, setProjects] = useState(data_projects);
  const handleFilterCategory = (name) => {
    const new_array = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(new_array);
  };
  return (
    <div className="container projects">
      <div className="projects__navbar">
        <div onClick={() => setProjects(data_projects)}>All</div>
        <div onClick={() => handleFilterCategory("react.js")}>React</div>
        <div onClick={() => handleFilterCategory("python")}>Python</div>
        <div onClick={() => handleFilterCategory("Django")}>Django</div>
        <div onClick={() => handleFilterCategory("static")}>HTML/CSS</div>
      </div>
      <div className="row">
        {data_projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
