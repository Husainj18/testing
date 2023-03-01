import React, { useEffect, useState } from 'react'

import axios from "axios";

import Navbar from '../Navbar';

const baseURL = "https://raw.githubusercontent.com/iffi96/Shoe-store-data-json/master/data001.json";

const Shoes = () => {

  const [post, setPost] = useState();
  useEffect(() => {

    try {
      axios.get(baseURL).then((response) => {
        console.log("fskfdhkjs", response.data);
        setPost(response?.data);
      });

    } catch (error) {
      console.log(error)
    }
  }, []);




  return (
    <>
      <Navbar />
        
      <div className='container '>
       <h3>Shoes Section - </h3>
      <div className="row row-cols-3 g-3">
        {post && Object.values(post).slice(0, 14).map((item, index) => {
          
          return (<div key={index}>

            
              <div className="card">
              <img src={item.imageURL} className="card-img-top"
                alt="Palm Springs Road" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  Brand name is {item.brand} <br />
                  gender {item.gender} <br />
                  price = {item.price} <br />
                  item left = {item.items_left}.
                </p>
                <button className='btn btn-success'>Add to Cart</button>
              </div>
          
            </div>
          </div>)
        })}
      </div>
      </div>
    </>

  )
}

export default Shoes
