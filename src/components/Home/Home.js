import React from "react";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner/Banner";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Projects></Projects>
    </div>
  );
};

export default Home;
