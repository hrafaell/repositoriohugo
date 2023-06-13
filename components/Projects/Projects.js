import React from "react";
import Image from "next/image";

import ProjectItem from "@/components/Projects/ProjectItem";
import { projects } from "../../data/projectsData";
import RepoButton from "../Buttons/Repositorios/RepoButton";


import { Link, Element } from "react-scroll";


function Projects() {
  return (
    <Element name="projects">
    <div className="w-full  bg-slate-900" id="projetos">
      <div className="max-w-[1240px] mx-auto px-2 py-1">
        <p className="flex justify-center font-bold uppercase   text-6xl tracking-widest   py-5  text-purple-600">
          Projetos
        </p>

        <div className="">
          {projects.map((project, id) => (
            <ProjectItem
              key={id}
              title={project.title}
              backgroundGif={project.backgroundGif}
              toolsUsed={project.toolsUsed}
              urlDeploy={project.urlDeploy}
            />
          ))}
        </div>
            <RepoButton />
      </div>
    </div>
    </Element>
  );
}

export default Projects;
