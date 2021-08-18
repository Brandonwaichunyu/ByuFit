import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import HomeSectionItems from "../HomeSectionItems";

function Home() {
  return (
    <>
      <HeroSection />
      <HomeSectionItems />
      <Cards />
    </>
  );
}

export default Home;
