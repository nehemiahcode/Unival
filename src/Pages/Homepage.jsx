import React from "react";
import Mainlayout from "../NavbarWrapper";
import Sections from "../Sections/FirstSection";
import SecondSection from "../Sections/SecondSection";
import { Cards, FeaturedCourses, Offers, Reviews } from "../Sections/SecondSection";
function Homepage() {
  return (
    <Mainlayout>
      <Sections />
      <SecondSection />
      <Cards />
      <FeaturedCourses />
      <Offers />
      <Reviews />
    </Mainlayout>
  );
}

export default Homepage;
