import React from "react";

const Project = ({ img, title, desc, link }) => {
  return (
    <div className="card w-full lg:w-96 bg-base-100 shadow-xl my-5 lg:my-0">
      <figure>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={img} className="border lg:h-64" alt="Shoes" />
        </a>
      </figure>
      <div className="card-body">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h2 className="card-title text-primary">{title}</h2>
        </a>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Project;
