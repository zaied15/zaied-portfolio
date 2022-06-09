import React from "react";

const Project = ({ img, title, desc }) => {
  return (
    // <div class="card max-w-lg bg-base-100 shadow-xl image-full">
    //   <figure>
    //     <img src={img} alt="" />
    //   </figure>
    //   <div class="card-body">
    //     <h2 class="card-title">{title}</h2>
    //     <p>{desc}</p>
    //     <div class="card-actions justify-end">
    //       <button class="btn btn-primary">Buy Now</button>
    //     </div>
    //   </div>
    // </div>
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} className="h-100" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Project;
