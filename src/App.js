import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Reservation from './Reservation';
import Menu from './Menu';
import Login from './Login';
import Hero from './Hero.js';
import Highlights from './Highlights.js';
import Orderonline from './Orderonline.js';

function App() {
  return (
    <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path="/" element={<div></div>} />
         <Route path="/about" element={<About />} />
         <Route path="/menu" element={<Menu />} />
         <Route path="/reservation" element={<Reservation />} />
         <Route path="/orderonline" element={<Orderonline />} />
         <Route path="/login" element={<Login />} />
       </Routes>
       <Hero />
       <Highlights />
     </BrowserRouter>
  );
}

export default App;
