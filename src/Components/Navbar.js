import React from 'react';

import { Link } from 'react-router-dom';



export default function Navbar(props) {

   
    return (
        <div className=''>
            {console.log("hjguyyu",props)}
          
    <nav className="navbar  navbar-expand-lg navbar-light bg-light">
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
                    <p>Welcome, {props?.data && props.data.firstName} {props?.data && props.data.LastName}</p>
                </div>
                <form className="d-flex">
                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                    <Link className='nav-link' to="/Cart.js">  <button  className="btn btn-outline-dark" type="submit">Your Cart</button></Link>
                    <Link className='nav-link' to="/Form">  <button  className="btn btn-outline-dark" type="submit">SignUp</button></Link>
                </form>
            </div>
        </div>
    </nav>

</div>

    )
}
