import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";

const Stacks: React.FC = () => {
  return (
    <div
      id="stacks"
      className="w-full flex flex-col box-border justify-between items-center my-10 gap-1 py-12 px-10 md:gap-3 md:px-12 lg:my-24 lg:gap-10"
    >
      <p className="text-header font-bold text-lg md:text-2xl lg:text-5xl">Minhas Tecnologias</p>
      <p className="text-nav text-base md:text-xl lg:text-3xl">Tecnologias que utilizo atualmente</p>
      <div className="flex box-border items-center justify-center flex-wrap gap-8 text-3xl px-4 my-4 md:gap-12 md:text-5xl md:px-8 md:my-8 lg:gap-24 lg:px-12 lg:my-12 lg:text-8xl">
        <FaHtml5 className="text-html5" />
        <FaCss3Alt className="text-css3" />
        <IoLogoJavascript className="text-js" />
        <FaReact className="text-react" />
        <FaGithub className="text-black" />
        <SiTypescript className="text-ts" />
        <GrGraphQl className="text-graphql" />
        <FaGitAlt className="text-git" />
        <SiTailwindcss className="text-tail" />

      </div>
    </div>
  );
};

export default Stacks;
