import React from "react";
import HomeSection from "./HomeSection";
import "./HomeSection.css";

function HomeSectionItems() {
  return (
    <div className="contentwrapper">
      <HomeSection
        src="images/Home.png"
        title="Introducing BYUFIT, A Fitness Center"
        paragraph="Whether it’s a workout in the gym, a motivating group exercise class, the fresh feeling of that first length in the pool, or simply a space where you can be relax and make be feel happy. "
        paragraph2="After you decide to start training we will make sure you get the best fitness program. Our sport experts and latest sports equipment are the winning combination of gym exercises."
      />
    </div>
  );
}

export default HomeSectionItems;
