import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const baseURL = "https://fakestoreapi.com/products/";

const Mens = () => {
  const [post, setPost] = useState();
  const navigate  = useNavigate()
  useEffect(() => {

    try {
      axios.get(baseURL).then((response) => {
        console.log("fskfdhkjs", response.data);
        setPost(response?.data);
      });

    } catch (error) {
      console.log(error)
    }
  }, );


  return (
    <>
      <Navbar />
      <div className='container'>
        <h3>Men's wear section</h3><br />
        <div className="row row-cols-3 g-3">
          {post && Object.values(post).slice(0, 12).map((item ,index) => {

            return (<div key={index}>

             
                <div className='card'>
                  <img src={item.image} className="card-img-top" style={{ height: 260, width: 300 }}
                    alt="Palm Springs Road" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      {item.title} <br />
                      price = {item.price} <br />
                      {item.category} <br />

                      {item.description.slice(0,50)}

                    </p>
                    <button className='btn btn-success' onClick={()=>navigate('/Mens/1')} >Add to Cart</button>
                  </div>

                </div>
            
            </div>)
          })}
        </div >
      </div>
    </>
  )
}

export default Mens
