import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './Components/ContactUs';
import Mens from './Components/Mens';
import Womens from './Components/Womens';
import Shoes from './Components/Card/Shoes'
import Watches from './Components/Card/Watches'
import Sunglass from './Components/Card/Sunglass'
import Cart from './Components/Cart';
import Details from './Components/Details';
import FormVal from './Components/Form';
import Home from './Components/Home';

function App() {
  


  return (
 <>
 <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="womens" element={<Womens />} />
          <Route path="/Form" element={<FormVal/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="Shoes" element={<Shoes />} />
          <Route path="Watches" element={<Watches />} />
          <Route path="Sunglass" element={<Sunglass />} />
          <Route path='/Cart.js' element={<Cart/>}/>
          <Route path='/Mens/:id' element={<Details/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
     
     
    </>
  );
}

export default App;
