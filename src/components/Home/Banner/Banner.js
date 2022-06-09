import React from "react";
import { Link } from "react-router-dom";
import zaied from "../../../images/zaied.jpeg";

const Banner = () => {
  let txtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  txtType.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span className="wrap">' + this.txt + "</span>";

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    let elements = document.getElementsByClassName("typewrite");
    for (let i = 0; i < elements.length; i++) {
      let toRotate = elements[i].getAttribute("data-type");
      let period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new txtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row lg:justify-between">
        <img
          src={zaied}
          className="w-full lg:max-w-lg rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <p>Hello, I'm</p>
          <h1 className="text-5xl font-bold">Md. Anwar Zaied</h1>
          <h1 className="h-7 my-3">
            <a
              to=""
              className="typewrite text-xl"
              data-period="2000"
              data-type='[ "Full Stack Developer (MERN).", "I love to write code and develope application." ]'
            >
              <span className="wrap"></span>
            </a>
          </h1>
          <a href="#contact">
            <button className="btn contact-btn mt-5">Contact Me</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
