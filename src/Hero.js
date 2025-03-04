import React from 'react';
import heroimage from './images/restauranfood.jpg';
import { useNavigate } from 'react-router-dom';
function Hero() {
    const navigate = useNavigate();
    const handleReserveTable = () => {
        navigate('/reservation');
    };
    return (
        <section class="main_section">
            <div class="text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are family owned Mediterranean restaurant, 
                   focused on traditional on traditional recipes served with a modern twist. </p>
                   <button aria-label='Reserve a table' onClick={handleReserveTable}>Reserve a Table</button>
            </div>
            <div class="photo">
                <img class='hero_image' src={heroimage} alt='Little Lemon main dish on a plate.'></img>
            </div>
        </section>
    );
}
export default Hero;