import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Reservation from './Reservation';
import Menu from './Menu';
import Login from './Login';
import Hero from './Hero.js';
import Highlights from './Highlights.js';
import Orderonline from './Orderonline.js';
import Home from './Home.js';
import Confirmation from './ConfirmedBooking.js';

const LayoutWrapper = ({children}) => {
  const location = useLocation();
  if (location.pathname === "/") {
    return (
      <div>
        <main>{children}</main>
        <Hero />
        <Highlights />
      </div>
    );
  }
  return <main>{children}</main>
}
function App() {
  return (
    <BrowserRouter>
       <Navbar />
       <LayoutWrapper>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About />} />
         <Route path="/menu" element={<Menu />} />
         <Route path="/reservation" element={<Reservation />} />
         <Route path="/orderonline" element={<Orderonline />} />
         <Route path="/login" element={<Login />} />
         <Route path = "/confirmed-booking" element={<Confirmation/>}/>
       </Routes>
       </LayoutWrapper>
     </BrowserRouter>
  );
}

export default App;
