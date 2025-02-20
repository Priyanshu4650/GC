import React from "react";
import "../styles/About.css"; // Make sure to create and import this CSS file for custom styling
import ContactForm from "./Contact";

const About = () => {
  return (
    <div>
      <h1>About General Championship</h1>
      <div className="about-container d-flex">
        <span
          className="about-text p-2 flex-grow-1"
          style={{ maxWidth: "1500px" }}
        >
          General Championship is the annual inter-batch tournament where
          students as well as faculty/staff strive to uphold their batch's
          pride. This serves as the right platform for every person at the
          institute of various experiences to have a healthy interaction with
          each other. Points are allotted to winners and runners in each event
          accordingly and the batch with the highest aggregate of points across
          all events is named the General Champion. Each event sees a winner and
          points are awarded according to the standings, thus making an overall
          points tally.
        </span>
        {/* Image Card */}
        <div className="card p-2 card-about">
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
          <img src="/assests/9.png" className="card-img-top" alt="Team 8" />
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default About;
