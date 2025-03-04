import React from 'react';
import Salad from "./images/greek salad.jpg";
import Bruchetta from "./images/bruchetta.svg";
import Dessert from "./images/lemon dessert.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

function Highlights() {
    return (
        <section className="highlights_section">
            <div className="specials">
                <h3>This  week's specials!</h3>
            </div>
            <div >
                <button aria-label='Online menu'>Online Menu</button>
            </div>
            <div className="cards">
             <div className="card_special">
                <img className="card_image" src={Salad} alt="Greek Salad"></img>
                 <div className="card_text">
                   <div className="title_price">
                   <h4>Greek Salad</h4>
                   <h5>$12.99</h5>
                   </div>
                  <p className="card_description">Greek salad is a traditional Greek dish with veggies, greens and chicken.</p>
                  <a href='#orderdelivery'>Order a delivery <FontAwesomeIcon icon={faBicycle}/></a>
                </div>
             </div>
             <div className="card_special">
                <img className="card_image" src={Bruchetta} alt="Bruchetta"></img>
                 <div className="card_text">
                   <div className="title_price">
                   <h4>Bruchetta</h4>
                   <h5>$5.99</h5>
                   </div>
                  <p className="card_description">Our Bruchetta is made from grilled bread  that has been smeared with garlic and seasoned with salt and olive oil. </p>
                  <a href='#orderdelivery'>Order a delivery <FontAwesomeIcon icon={faBicycle}/></a>
                </div>
            </div>
            <div className="card_special">
                <img className="card_image" src={Dessert} alt="Lemon Dessert"></img>
                 <div className="card_text">
                   <div className="title_price">
                   <h4>Lemon Dessert</h4>
                   <h5>$5.00</h5>
                   </div>
                  <p className="card_description">This comes strait from grandmother’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                  <a href='#orderdelivery'>Order a delivery <FontAwesomeIcon icon={faBicycle}/></a>
                </div>
             </div>
            </div>
        </section>
            );
        }
        export default Highlights;