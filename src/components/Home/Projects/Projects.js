import React from "react";
import Project from "./Project";
import project1 from "../../../images/project-1.png";
import project2 from "../../../images/project-2.png";
import project3 from "../../../images/project-3.png";

const Projects = () => {
  return (
    <div>
      <div>
        <h3 className="text-5xl font-bold text-primary text-center mb-10">
          Projects
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Project
          img={project1}
          title="Car Parts Dealer (MERN Stack)"
          desc="A car parts dealer website where admin can manage user, order, product and as well as user can make order and payment using Stripe card payment method. Firebase authentication used for login and register."
        ></Project>
        <Project
          img={project2}
          title="Cars Inventory Management (MERN Stack)"
          desc="Cars Inventory Management web application where uses can add and delete products. Firebase, JWT, Heroku tools has used."
        ></Project>
        <Project
          img={project3}
          title="Traveline (Local guide service solution)"
          desc="Traveline is a local guide service solution website where you can get service from individual tour guide."
        ></Project>
      </div>
    </div>
  );
};

export default Projects;
