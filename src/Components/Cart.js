import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios'
import Navbar from './Navbar';


const baseURL = "https://api.escuelajs.co/api/v1/products";

const Womans = () => {

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
    <Navbar/>
    <div className='container'>
      <h3>Cart Item's - </h3><br/>
      {post && Object.entries(post).slice(0, 3).map((item, index) => {

        return (<div key={index}>
          {/* <div className="row"> */}

          
          <div className="col-md-3">
          
            {/* <div className="card"> */}
            {/* <img src={item.image} className="card-img-top" style={{height:260 , width:300 }}
              alt="Palm Springs Road" /> */}
          
            <div className="card-body">
          
              <h5 className="card-title">{item.title}</h5>
          
              <p className="card-text">
                {item.id} <br />
                price = {item.price} <br />
               {item.category} <br />

                {item.description}
                
              </p>
              <button className='btn btn-success'>Add to Cart</button>
            </div>
            {/* </div> */}
          </div>
          {/* </div> */}





        </div>)
      })}
    


 
    </div >
    </>
  )
}

export default Womans
