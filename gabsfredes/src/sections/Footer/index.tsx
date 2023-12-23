import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import BarLinks from "../../components/NavBar/BarLinks";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="w-full flex flex-col box-border justify-between items-center gap-1 py-8 px-10 md:gap-3 md:px-12 lg:gap-10"
    >
      <div className="w-full flex justify-between items-center gap-1 py-4 border-b-2">
        <div className="flex-col text-center items-center">
          <p className="text-header font-bold text-lg lg:text-xl tracking-wider">
            &#123;GF&#125;
          </p>
          <p className="text-header font-semibold text-lg lg:text-lg">
            gabsfredes
          </p>
        </div>
        <div className="flex gap-2">
          <div className="text-lg text-header flex gap-12">
            <a href="mailto:gabriel.sfredes@gmail.com">
              gabriel.sfredes@gmail.com
            </a>
            <a
              className="text-header text-2xl"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/gabsfredes"
            >
              <FaGithub />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              className="text-header text-2xl"
              href="https://www.linkedin.com/in/gabrielfredes/"
            >
              <FaLinkedin className="text-sky-700" />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              className="text-header text-2xl"
              href="https://www.instagram.com/gabsfredes/"
            >
              <FaInstagram className="text-pink-700" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="hidden lg:block"><BarLinks isFooter={true}/></div>
        <p className="text-sm md:text-base lg:text-lg text-header">Design base <a href="https://github.com/pavanmg007" rel="noreferrer" className="gradient" target="_blank">PavanMG</a> | Modificações <a href="https://github.com/gabsfredes" rel="noreferrer" className="gradient" target="_blank">&#123;GF&#125;</a></p>
      </div>
    </footer>
  );
};

export default Footer;
