import React from 'react';
import '../styles/Caraousel.css';

const Caraousel = () => {
  return (
    <div className="container-fluid p-0">
      <div id="carouselExampleIndicators" className="carousel slide vh-100" data-bs-ride="carousel" data-bs-interval="1000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner h-100">
          <div className="carousel-item active h-100">
            <img src="/assests/DSC00462.JPG" className="d-block h-100 w-100" alt="..." />
          </div>
          <div className="carousel-item h-100">
            <img src="/assests/DSC03552.JPG" className="d-block h-100 w-100" alt="..." />
          </div>
          <div className="carousel-item h-100">
            <img src="/assests/DSC02022.JPG" className="d-block h-100 w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Caraousel;
