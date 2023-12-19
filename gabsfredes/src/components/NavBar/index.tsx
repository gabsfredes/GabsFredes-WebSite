import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav>
            <a href="/">Início</a>
            <a href="#about">Sobre mim</a>
            <a href="#stacks">Tecnologias</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
        </nav>
    );
};

export default NavBar;
