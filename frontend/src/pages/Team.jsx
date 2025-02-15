import React, { useEffect } from "react";
import Footer from "../components/Footer";

const Team = (props) => {
    useEffect(() => {
        document.title += ' - ' + props.title;
    },[])

    return (
    <div>
      <h1>The Team</h1>
      <hr />
      <div>
        <h3>Organizing Secretary</h3>
        <div className=" d-flex justify-content-around">
          {/* Dipanshu */}
          <div class="card" style={{ width: "18rem;" }}>
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
          <div class="card" style={{ width: "18rem;" }}>
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
          <div class="card" style={{ width: "18rem;" }}>
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
          <div class="card" style={{ width: "18rem;" }}>
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
      <div>
        <h2>Organisers</h2>
        {/* Revanth, Lohith, Nikhil, Vinay */}
        <div className="d-flex justify-content-center">
          <div class="card" style={{ width: "18rem;" }}>
            <img
              src="/assests/WhatsApp Image 2025-02-14 at 14.02.13.jpeg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">J. Revanth</h5>
              <p class="card-text">General Secretary Hostel Affairs</p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem;" }}>
            <img
              src="/assests/WhatsApp Image 2025-02-13 at 23.44.56.jpeg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Lohith</h5>
            </div>
          </div>
          <div class="card" style={{ width: "18rem;" }}>
            <img
              src="/assests/WhatsApp Image 2025-02-14 at 00.22.47.jpeg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Nikhil S Thomas</h5>
            </div>
          </div>
          <div class="card" style={{ width: "18rem;" }}>
            <img
              src="/assests/vinay.jpeg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Vinay Krishna</h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <h2>Social Media Head</h2>
        {/* Likhith */}
        <div className="d-flex justify-content-center">
          <div class="card" style={{ width: "18rem;" }}>
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
          <div class="card" style={{ width: "18rem;" }}>
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

      <Footer/>
    </div>
  );
};

export default Team;
