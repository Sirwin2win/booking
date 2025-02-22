import React from "react";
import Categories from "@/components/Categories";
import GalleryOne from "@/components/GalleryOne";
import GalleryTwo from "@/components/GalleryTwo";
import GalleryThree from "@/components/GalleryThree";

const Home = () => {
  return (
    <div>
      <main className="mx-[200px]">
        <Categories />
        <GalleryOne />
        <GalleryTwo />
        <GalleryThree />
      </main>
    </div>
  );
};

export default Home;
