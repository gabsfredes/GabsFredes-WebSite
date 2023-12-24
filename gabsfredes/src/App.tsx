import React from "react";
import NavBar from "./components/NavBar";
import Header from "./sections/Header";
import Stacks from "./sections/Stacks";
import Footer from "./sections/Footer";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Stacks />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
