import React from 'react'
import { Link  } from 'react-router-dom';

import Pic1 from '../images/sunglas.jpg'
import Pic2 from '../images/Watches.jpg'
import Pic3 from '../images/shoes.jpg'


const Card = () => {
    const shopData = [
        {
            img: Pic3,
            title: 'Shoes',
            description: 'This is a longer card with supporting text below as a natural lead-in to additional content.',
            navigate: "/Shoes",

        },
        {
            img: Pic2,
            title: 'Watches',
            description: 'This is a longer card with supporting text below as a natural lead-in to additional content.',
            navigate: "/Shoes",

        },
        {
            img: Pic1,
            title: 'Sunglasses',
            description: 'This is a longer card with supporting text below as a natural lead-in to additional content.',
            navigate: "/Shoes",
        },
    ]
    return (
        <>
            <div className='container'>
                <div className="row row-cols-3 g-3">
                    {shopData && shopData.map((item) => {
                        return (
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={item.img} className="card-img-top"
                                        alt="Hollywood Sign on The Hill" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}
                                        </p>
                                        <Link to={item.navigate}> <button className="btn btn-md btn-dark">More</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Card
