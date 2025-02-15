import React from "react";
import "../styles/About.css"; // Make sure to create and import this CSS file for custom styling

const About = () => {
  return (
    <div>
      <h1>About General Championship</h1>
      <div className="about-container d-flex">
        <span
          className="about-text p-2 flex-grow-1"
          style={{ maxWidth: "1500px" }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eaque
          vitae explicabo, soluta aliquid natus reiciendis excepturi molestiae
          sequi, veniam dolorem odio saepe! Magni eveniet sed quis quaerat
          recusandae magnam debitis consectetur in a.
        </span>
        {/* Image Card */}
        <div className="card p-2" style={{ width: "25rem" }}>
          <img
            src="/assests/DSC03629.JPG"
            className="card-img-top"
            alt="About General Championship"
          />
        </div>
      </div>
      <br />
      <br />
      
      <h1>Teams Participating</h1>
      <div className="card-container">
        <div className="card">
          <img src="/assests/1.png" className="card-img-top" alt="Team 1" />
        </div>
        <div className="card">
          <img src="/assests/2.png" className="card-img-top" alt="Team 2" />
        </div>
        <div className="card">
          <img src="/assests/3.png" className="card-img-top" alt="Team 3" />
        </div>
        <div className="card">
          <img src="/assests/4.png" className="card-img-top" alt="Team 4" />
        </div>
        <div className="card">
          <img src="/assests/5.png" className="card-img-top" alt="Team 5" />
        </div>
        <div className="card">
          <img src="/assests/6.png" className="card-img-top" alt="Team 6" />
        </div>
        <div className="card">
          <img src="/assests/7.png" className="card-img-top" alt="Team 7" />
        </div>
        <div className="card">
          <img src="/assests/8.png" className="card-img-top" alt="Team 8" />
        </div>
      </div>
    </div>
  );
};

export default About;
