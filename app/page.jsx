import Image from "next/image";
import React from "react";
import Categories from "@/components/Categories";
import GalleryOne from "@/components/GalleryOne";
import GalleryTwo from "@/components/GalleryTwo";
import GalleryThree from "@/components/GalleryThree";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";

export default function Home() {
  return (
    <div>
      <div className="bg-cover h-[800px] w-screen md:h-[800px] md:w-full bg-hero-image"></div>
      <main className="md:mx-[200px] mx-[30px]">
        <BackgroundImage />
        {/* <Header /> */}
        <Categories />
        <GalleryOne />
        <GalleryTwo />
        <GalleryThree />
      </main>
    </div>
  );
}
