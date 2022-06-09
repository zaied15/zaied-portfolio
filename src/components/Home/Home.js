import React from "react";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
