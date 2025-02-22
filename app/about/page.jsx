import React from "react";
import img from "../../assets/images/lo.png";
import Categories from "@/components/Categories";
import GalleryTwo from "@/components/GalleryTwo";

const About = () => {
  return (
    <div>
      <div className="bg-hero-about  md:bg-cover h-[300px] md:h-[600px] w-full"></div>
      <div className="container">
        <Categories />
        <GalleryTwo />
      </div>
    </div>
  );
};

export default About;
