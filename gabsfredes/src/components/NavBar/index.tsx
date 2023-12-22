import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

const NavBar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 640px)").matches;
        if (!isMobile) {
            setToggleMenu(false);
        }
        else {
            setToggleMenu(true);
        }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let navLinks =
    "text-zinc-600 hover:text-emerald-700 font-medium text-sm md:text-sm lg:text-xl lg:font-medium transition-colors duration-300 ease-in-out";
  let navIcons =
    "hover:text-zinc-300 font-medium text-2xl md:text-lg lg:text-2xl transition-colors duration-300 ease-in-out";

  return (
    <nav className="w-full flex box-border justify-between items-center gap-1 py-6 px-10 md:gap-3 md:px-12 lg:gap-10">
      <div className="flex-col text-center items-center">
        <p className="gradient font-bold text-2xl md:text-2xl lg:text-4xl tracking-wider">
          &#123;GF&#125;
        </p>
        <p className="gradient font-semibold text-lg md:text-xl lg:text-2xl">
          gabsfredes
        </p>
      </div>

      <RiMenu3Fill 
        className={`${
          toggleMenu ? "text-zinc-700" : "text-green-700"
        } font-semibold text-4xl md:hidden`}
        onClick={toggleNav}
      />

      <div
        className={`${
          toggleMenu
            ? "hidden"
            : "flex flex-col absolute right-10 top-20 rounded-md shadow-md p-4 items-center"
        } gap-2 bg-slate-200 md:bg-white md:static md:top-0 md:shadow-none md:gap-6 md:flex-row lg:gap-10 lg:flex-row`}
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
          className={`${navIcons} text-sky-700`}
          href="https://www.linkedin.com/in/gabrielfredes/"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
