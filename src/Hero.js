import React from 'react';
import heroimage from './images/restauranfood.jpg'
function Hero() {
    return (
        <section class="main_section">
            <div class="text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are family owned Mediterranean restaurant, 
                   focused on traditional on traditional recipes served with a modern twist. </p>
                   <button>Reserve a Table</button>
            </div>
            <div class="photo">
                <img class='hero_image' src={heroimage} alt='Little Lemon main dish on a plate.'></img>
            </div>
        </section>
    );
}
export default Hero;