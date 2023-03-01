import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import ContactForm from './ContactUs'




const Link = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/contact' element={
          <ContactForm/>
      }/>

    





    </Routes>   
   </BrowserRouter>
  )
}

export default Link
