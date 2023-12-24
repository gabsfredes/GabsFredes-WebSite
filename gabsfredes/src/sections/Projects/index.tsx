import React from "react";

const Projects: React.FC = () => {
  return (
    <div
      id="projects"
      className="w-full flex flex-col box-border justify-between items-center my-10 gap-1 py-12 px-10 md:gap-3 md:px-12 lg:my-24 lg:gap-10"
    >
      <p className="text-header font-bold text-lg md:text-2xl lg:text-5xl">
        Meus projetos
      </p>
      <p className="text-nav text-base md:text-xl lg:text-3xl">
        Projetos que desenvolvi e participei
      </p>
    </div>
  );
};

export default Projects;
