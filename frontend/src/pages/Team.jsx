import React, { useEffect } from "react";
import Footer from "../components/Footer";
import "../styles/Team.css"

const Team = (props) => {
  useEffect(() => {
    document.title = "GC 2.0 - " + props.title;
  }, [props.title]);

  return (
    <div>
      <h1>The Team</h1>
      <hr />
      <div>
        <h3>Organizing Secretary</h3>
        <div className=" d-flex justify-content-around">
          {/* Dipanshu */}
          <div class="card" style={{ width: "15rem" }}>
            <img
              src="/assests/WhatsApp Image 2025-02-13 at 23.47.22.jpeg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Dipanshu Dutta</h5>
              <p class="card-text">General Secretary Sports Affairs</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <h2>Organizing Leads</h2>
        <div className="d-flex  justify-content-around">
          {/* Priyanshu, Pavan, Karthikeya */}
          <div class="card" style={{ width: "15rem" }}>
            <img
              src="/assests/IMG20240608203011.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Priyanshu</h5>
              <p class="card-text">Deputy Secretary Sports Affairs</p>
            </div>
          </div>
          <div class="card" style={{ width: "15rem" }}>
            <img
              src="/assests/WhatsApp Image 2025-02-13 at 23.29.02.jpeg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Pavan Sai</h5>
              <p class="card-text">Deputy Secretary Sports Affairs</p>
            </div>
          </div>
          <div class="card" style={{ width: "15rem" }}>
            <img
              src="/assests/WhatsApp Image 2025-02-13 at 23.28.29.jpeg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Karthikeya B</h5>
              <p class="card-text">Students General Secretary</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="container">
        <h2 className="text-center mb-4">Organisers</h2>
        <div className="row justify-content-center">
          {/* Revanth, Lohith, Nikhil, Vinay */}
          {[
            {
              name: "J. Revanth",
              title: "General Secretary Hostel Affairs",
              img: "/assests/WhatsApp Image 2025-02-14 at 14.02.13.jpeg",
            },
            {
              name: "Lohith",
              img: "/assests/WhatsApp Image 2025-02-13 at 23.44.56.jpeg",
            },
            {
              name: "Nikhil S Thomas",
              img: "/assests/WhatsApp Image 2025-02-14 at 00.22.47.jpeg",
            },
            {
              name: "Vinay Krishna",
              img: "/assests/vinay.jpeg",
            },
          ].map((organiser, index) => (
            <div
              key={index}
              className="col-md-3 col-sm-6 d-flex align-items-stretch"
            >
              <div className="card h-100 text-center">
                <img
                  src={organiser.img}
                  className="card-img-top"
                  alt={organiser.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{organiser.name}</h5>
                  {organiser.title && (
                    <p className="card-text">{organiser.title}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />
      <hr />
      <br />
      <div>
        <h2>Social Media Head</h2>
        {/* Likhith */}
        <div className="d-flex justify-content-center">
          <div class="card" style={{ width: "15rem" }}>
            <img
              src="/assests/WhatsApp Image 2025-02-13 at 23.30.26.jpeg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Likhith Chandra</h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <h2>Design Head</h2>
        {/* Chaitanya */}
        <div className="d-flex justify-content-center">
          <div class="card" style={{ width: "15rem" }}>
            <img
              src="/assests/WhatsApp Image 2025-02-14 at 00.20.39.jpeg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Chaitanya Teja</h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* <br /> */}
      <hr />
      <Footer />
    </div>
  );
};

export default Team;
