import Image from "next/image";
import React from "react";
import Categories from "@/components/Categories";
import GalleryOne from "@/components/GalleryOne";
import GalleryTwo from "@/components/GalleryTwo";
import GalleryThree from "@/components/GalleryThree";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import getAllRooms from "./actions/getAllRooms";

export default async function Home() {
  const rooms = await getAllRooms();
  console.log(rooms);
  return (
    <div>
      <div className="bg-cover h-[800px] w-screen md:h-[800px] md:w-full bg-hero-home"></div>

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
