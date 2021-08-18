import React from "react";
import HomeSection from "./HomeSection";
import "./HomeSection.css";

function ServiceCards() {
  return (
    <div>
      <h1 className="services">Fitness Classes</h1>
      <h1 className="title-container">Physical Training and Classes</h1>
      <div className="contentwrapper">
        <HomeSection
          src="images/personal-trainer.jpg"
          title="Personal Training"
          paragraph="Are you intimidated by the idea of joining a gym? If so, you are not alone. The gym experience can be overwhelming. It can be as confusing as a calculus equation or as frightening as a medieval torture chamber. If you’re a gym novice, you will need guidance and someone to answer all your questions. Is it better to run on a treadmill, bike, or use an elliptical? Do you stretch before or after you work out? What do you wear to the gym? At BYU FIT, we are here to answer those questions and so much more. Reaching out and giving one of our certified trainers a call is your first step in resolving your confusion and intimidation."
        />
        <HomeSection
          src="images/fitness-classes.jpg"
          title="Fitness Classes"
          paragraph="While running on the treadmill, working out on the elliptical machine, and lifting weights are all excellent forms of exercise, it is always a good idea to change up your workout routine by taking a class. When your body gets used to an exercise, your muscles are no longer being challenged. Variety in your workout routine will keep your body guessing, resulting in a more successful workout. At BYU FIT, we offer a wide range of classes to meet a variety of fitness levels. From Zumba to Pilates to Cycling, there’s always something new for you to try at BYU FIT."
        />
        <HomeSection
          src="images/fitness-center.jpg"
          title="Fitness Center"
          paragraph="Train as you like in a judgment free environment. Being able to workout is integral to a healthy life, but there are some places that make this difficult because they have atmospheres that are not conducive to learning and growing. With this in mind, BYU FIT was created so that all the people of gym could find a place to improve themselves."
        />
        <HomeSection
          src="images/spa.jpg"
          title="Health Club & Spa"
          paragraph="Recover after a long, hard workout in our steam room, sauna, or hot tub! As a member of BYU FIT, you have the opportunity to take advantage of our wide range of spa amenities. Whether your gym regimen consists of low-level intensity exercises or high-level intensity exercises, there is nothing like relaxing in a hot tub, sauna, or steam room after your workout session. At BYU FIT we pride ourselves on offering our gym clientele a calming, clean, and inviting space to unwind after their day at the gym."
        />
      </div>
    </div>
  );
}

export default ServiceCards;
