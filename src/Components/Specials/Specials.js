import React from "react";
import "./Specials.css";
import Card from "../Card/Card";
import greekSalad from "../../icons_assets/greek-salad.png";
import lemonDessert from "../../icons_assets/lemon dessert.jpg";
import bruchetta from "../../icons_assets/bruchetta.png";
function Specials() {
    return (
        <section className="specials">
            <div className="specials-header">
                <div className="specials-title-container">
                    <p>Specials</p>
                </div>
                <div className="specials-button-container">
                    <button className="button-yellow">Online Menu</button>
                </div>
            </div>
            <div className="specials-cards">
                <Card title="Greek Salad" img={greekSalad} content="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." price={12.99} />
                <Card title="Bruchetta" img={bruchetta} content="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." price={5.99} />
                <Card title="Lemon Dessert" img={lemonDessert} content="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." price={8.99} />
            </div>
        </section>
    );
}

export default Specials;
