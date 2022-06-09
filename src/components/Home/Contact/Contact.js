import React, { useRef } from "react";
import contactBg from "../../../images/contact-bg.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ltgxub4",
        "template_9ssh1fb",
        form.current,
        "Ev1vayAMeUlms2V80"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-100 mt-24 py-24"
    >
      <div className="ml-2lg:ml-10 pt-10 bg-opacity-50 bg-black w-full lg:w-[45%] rounded-lg">
        <div className="mx-auto w-4/5">
          <div className="text-white mb-5">
            <h3 className="text-3xl">Contact Me</h3>
            <p>Please send your message below.</p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Your Name"
              name="fullName"
              className="input input-bordered w-full max-w-lg"
            />
            <br />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="input input-bordered w-full max-w-lg my-5"
            />
            <br />
            <textarea
              className="textarea textarea-bordered w-full max-w-lg resize-none"
              name="message"
              placeholder="Message"
              rows={5}
            ></textarea>
            <br />
            <input
              className="btn w-40 contact-btn my-5"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
