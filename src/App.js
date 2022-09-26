
import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ScrapMaterial from './pages/ScrapMaterial'
import Cart from './pages/Cart';

import Fromdb from './products/Fromdb';
import About from './pages/About';
import ScrapYardNavbar from './components/ScrapYardNavbar';


function App() {
  return (
    <>
      {/* <ScrapYardNavbar/> */}
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logi" element={<Login />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/scrapMaterial" element={<ScrapMaterial/>}/>
          <Route path='/fromdb' element={<Fromdb/>}/>
          <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
