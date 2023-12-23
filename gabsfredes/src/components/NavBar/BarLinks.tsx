import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

interface BarLinksProps {
  isFooter: boolean;
}

const BarLinks: React.FC<BarLinksProps> = ({ isFooter }) => {
  let navLinks =
    "text-nav hover:text-violet-700 font-medium text-sm md:text-base lg:text-xl lg:font-medium transition-colors duration-300 ease-in-out";
  let navIcons =
    "text-nav hover:text-gray-950 font-medium text-2xl md:text-lg lg:text-2xl transition-colors duration-300 ease-in-out";

  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 640px)").matches;
      if (!isMobile) {
        setToggleMenu(false);
      } else {
        setToggleMenu(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <RiMenu3Fill
        className={`${
          toggleMenu ? "text-zinc-700" : "text-violet-700"
        } font-semibold text-4xl md:hidden`}
        onClick={toggleNav}
      />

      <div
        className={`${
          toggleMenu
            ? "hidden"
            : "flex flex-col absolute right-10 top-20 rounded-md shadow-md p-4 items-center"
        } gap-2 z-50 bg-white md:static md:top-0 md:shadow-none md:gap-4 md:flex-row lg:gap-7 lg:flex-row`}
      >
        <a className={navLinks} href="/">
          Início
        </a>
        <a className={navLinks} href="#about">
          Sobre mim
        </a>
        <a className={navLinks} href="#stacks">
          Tecnologias
        </a>
        <a className={navLinks} href="#projects">
          Projetos
        </a>
        <a className={navLinks} href="#contact">
          Contato
        </a>

        
        {!isFooter && (
          <>
            <a
              className={navIcons}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/gabsfredes"
            >
              <FaGithub />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              className={`${navIcons}`}
              href="https://www.linkedin.com/in/gabrielfredes/"
            >
              <FaLinkedin className={`${navIcons} text-sky-700`} />
            </a>
          </>
        )}
      </div>
    </>
  );
};

export default BarLinks;
