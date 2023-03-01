import React from 'react'
import Pic from '../Components/images/image1.jpg'
import Pic1 from './images/image2.jpg'
import { Link } from 'react-router-dom';

import '../App.css';


export default function Carousel() {
  return (
    <>
   
    <div className="container" style={{marginTop:"63px"}}>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={Pic} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Man's Wear</h5>

              <Link to="/mens"> <button className="btn btn-md btn-dark">More</button></Link>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={Pic1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Woman's Wear</h5>

              <Link to="/Womens.js"> <button className="btn btn-md btn-dark">More</button></Link>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </>
  )
}
