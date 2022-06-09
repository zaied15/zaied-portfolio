import React from "react";
import Project from "./Project";
import project1 from "../../../images/project-1.png";
import project2 from "../../../images/project-2.png";
import project3 from "../../../images/project-3.png";

const Projects = () => {
  return (
    <div>
      <div>
        <h3 className="text-xl lg:text-5xl text-center mb-10">
          <span className="border-b w-1/2 inline-block pb-2 border-primary">
            Projects I have done.
          </span>
        </h3>
      </div>
      <div className="flex flex-wrap gap-5 lg:justify-around w-full">
        <Project
          img={project1}
          title="Car Parts Dealer (MERN Stack)"
          desc="A car parts dealer website where admin can manage user, order, product and as well as user can make order and payment using Stripe card payment method. Firebase authentication used for login and register."
          link="https://car-parts-auth-a92ca.web.app/"
        ></Project>
        <Project
          img={project2}
          title="Cars Inventory Management (MERN Stack)"
          desc="Cars Inventory Management web application where uses can add and delete products. Firebase, JWT, Heroku tools has used."
          link="https://car-inventory-auth.web.app/"
        ></Project>
        <Project
          img={project3}
          title="Traveline (Local guide service solution)"
          desc="Traveline is a local guide service solution website where you can get service from individual tour guide."
          link="https://traveline-firebase-auth.web.app/"
        ></Project>
      </div>
    </div>
  );
};

export default Projects;
