import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card/Card';
import Carousel from './Carousel';


const Home = () => {
  return (
    <>
            <Carousel />
            <br />
            <Card />
            <div className='container'>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">

                        <a className="navbar-brand" href="/">Asthetic-Home</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className='nav-link' to="/Mens">Men's Wear</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to="/Womens">Women's Wear</Link>

                                </li>

                                <li className='nav-item'>
                                    <Link className='nav-link' to="/ContactUs">Contact Us</Link>
                                </li>
                            </ul>

                            <div>
                                <p>Welcome , </p>

                            </div>
                            <form className="d-flex">
                                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                                <Link className='nav-link' to="/Form">  <button  className="btn btn-outline-dark" type="submit">SignUp</button></Link>
                                <Link className='nav-link' to="/Cart.js">  <button  className="btn btn-outline-dark" type="submit">Your Cart</button></Link>

                            </form>
                        </div>
                    </div>
                </nav>

            </div>
        </>
  )
}

export default Home
