import React from "react";
import Photo from "../../assets/images/me.png";

const Header: React.FC = () => {
  let pStyles = "text-lg font-bold text-header md:text-2xl lg:text-6xl";

  return (
    <header
      id="about"
      className="flex flex-col gap-2 bg-white box-border justify-between items-center md:flex-row px-12 md:px-20 lg:px-24 lg:py-24"
    >
      <div className="text-center flex flex-col md:text-left">
        <p className={pStyles}>Olá 👋🏽,</p>
        <p className={pStyles}>Meu nome é</p>
        <p className="gradient font-bold text-lg md:text-2xl lg:text-6xl tracking-wider">
          Gabriel
        </p> 
        <p className={pStyles}>desenvolvedor front-end.</p>
      </div>
      <div className="header_me">
        <img src={Photo} className="w-60 lg:w-96 p-4" loading="lazy" alt="Foto de Gabriel" />
      </div>
    </header>
  );
};

export default Header;
