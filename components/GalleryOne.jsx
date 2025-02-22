import React from "react";
import Image from "next/image";
import pool from "../assets/images/pool.avif";
import lubby from "../assets/images/lubby.avif";
import room2 from "../assets/images/room2.avif";
import round1 from "../assets/images/round1.png";

const GalleryOne = () => {
  return (
    <div className="md:grid grid-cols-2 divide-x-4 mt-[50px] mb-[50px]">
      <div className="flex ml-[-25px]">
        <div className="mr-5">
          <div>
            <Image
              src={room2}
              alt="Room2"
              className="rounded-2xl m-3 h-[300px] w-[200px]"
            />
          </div>
          <div className="mt-3">
            <Image
              src={lubby}
              alt="Lubby"
              className="rounded-2xl m-3 h-[200px] w-[200px]"
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              src={pool}
              alt="Pool"
              className="rounded-2xl m-3 h-[200px] w-[200px]"
            />
          </div>
          <div className="mt-3">
            <Image
              src={round1}
              alt="Round1"
              className="rounded-2xl m-3 h-[300px] w-[200px]"
            />
          </div>
        </div>
      </div>
      <div className="md:ml-[50px]  mt-3 p-2">
        <h4 className="text-blue-700 font-[sora] font-bold p-4">
          ABOUT US- DISCOVER THE BEST HOTEL SERVICES
        </h4>
        <p className="font-semibold mt-2 p-4">
          We have the reputation of offering best-in-town services
        </p>
        <p className="mt-2 p-4">
          Explore a wide range of activities that will make every little time
          spent in our hotel a memorable one. We have a pool facility, table
          tennis, card games, board games etc
        </p>
        <button className="rounded-full bg-blue-700 text-white text-sm b-3 p-2 mt-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GalleryOne;
