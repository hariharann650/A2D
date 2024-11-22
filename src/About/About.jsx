import React from "react";
import "./About.css";

const About = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4371914d-2242-4662-900c-bef2d8316315");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <>
      <div id="contact" className="contact">
        <div className="contact-title">
          <h1 className="autoshowing">How can we help?</h1>
          {/* <img src='' alt="theming" /> */}
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1 className="autoshowing">Locate us!</h1>
           
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9244.595711755683!2d80.16648883741613!3d13.043710535294226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267004f8780fd%3A0x50c02f506e1c7831!2sA2D%20PC%20Factory!5e0!3m2!1sen!2sin!4v1731001298433!5m2!1sen!2sin"
                width="auto"
                height="450px"
                style={{ border: 0 }}
                allowFullScreen
                // className="autoshowing"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="name">Name*</label>
            <input type="text" placeholder="Enter your Name" name="name" />
            <label htmlFor="email">Email*</label>
            <input type="text" placeholder="Enter your E-mail" name="email" />
            <label htmlFor="textarea">Message*</label>
            <textarea
              name="textarea"
              row="8"
              placeholder="Enter Your Message"
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      
    </>
  );
};

export default About;