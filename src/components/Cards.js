import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Discover all that the Multisports has to offer!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/weight-lifting-final.jpg"
              text="Weight Lifting"
              label="Strength"
              path="/services"
            />
            <CardItem
              src="images/boxing-final.jpg"
              text="Boxing Club"
              label="Martial Art"
              path="/services"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/kickboxing-final.jpg"
              text="Kickboxing"
              label="Martial Art"
              path="/services"
            />
            <CardItem
              src="images/crossfit-final.jpg"
              text="Crossfit Training"
              label="Cardio"
              path="/products"
            />
            <CardItem
              src="images/spinning-final.jpg"
              text="Spinning Class"
              label="Cardio"
              path="/products"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/yoga-final.jpg"
              text="Yoga Class"
              label="Flexibility"
              path="/services"
            />
            <CardItem
              src="images/zumba-final.jpg"
              text="Zumba Class"
              label="Cardio"
              path="/products"
            />
            <CardItem
              src="images/instructor-final.jpg"
              text="Fitness Instructor"
              label="Training"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
