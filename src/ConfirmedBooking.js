import React from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
function Confirmation() {
    const location = useLocation();
    const formData = location.state;
    const navigate = useNavigate();
    const handleBackHome = () => {
          navigate('/');
    };
    return (
    <section className="form-section">
    <h1>Booking confirmed! Thank you for your reservation! See you soon!</h1>
    <p>Date: {formData.date}</p>
    <p>Date: {formData.time}</p>
    <p>Number of Guests: {formData.guests}</p>
    <p>Occasion: {formData.occasion}</p>
    <button onClick={handleBackHome}>Home</button>
    </section>
    )
}
  export default Confirmation;