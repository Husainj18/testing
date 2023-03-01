import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

import Navbar from './Navbar';

const baseURL = "https://fakestoreapi.com/products/";






const Details = () => {


    const [post, setPost] = useState();
    
    useEffect(() => {
  
      try {
        axios.get(baseURL + id).then((response) => {
          console.log("fskfdhkjs", response.data);
          setPost(response?.data);
        });
  
      } catch (error) {
        console.log(error)
      }
    }, );
  

    const { id } = useParams();
    console.log("fbfhbg", id)
    

    return (
        <> <Navbar/>
        <div className='container'>
          <h3>Men's wear section</h3><br />
          <div className="row row-cols-3 g-3">
            {post && Object.values(post).map((item ,index) => {
  
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
  
                        {item.description}
  
                      </p>
                      <button className='btn btn-success'  >Add to Cart</button>
                    </div>
  
                  </div>
              
              </div>)
            })}
          </div >
        </div>
      </>
    )
  }
        
export default Details
