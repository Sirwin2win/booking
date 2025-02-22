import React from "react";
import Image from "next/image";
import room04 from "../assets/images/room04.jpeg";
import room3 from "../assets/images/room3.avif";
import room5 from "../assets/images/room5.jpeg";
import room4 from "../assets/images/room4.jpeg";

const GalleryTwo = () => {
  return (
    <div className="md:md:grid grid-cols-2 divide-x-4 mt-[50px] mb-[50px]">
      <div className="md:ml-0  mt-3 p-2">
        <h4 className="text-blue-700 font-[sora] font-bold">
          HOTEL LODGING CONVENIENCE
        </h4>
        <p className="font-semibold mt-2 p-3">
          We have the reputation of offering best-in-town services
        </p>
        <p className="mt-2 p-3">
          Whether you're looking for where to lodge on a business trip, vacation
          etc. Explore a wide range of activities that will make every little
          time spent in our hotel a memorable one
        </p>
        <button className="rounded-full bg-blue-700 text-white text-sm b-3 p-2 mt-2">
          Get Started
        </button>
      </div>

      {/* Photo gallery start */}
      <div className="flex ml-[-25px]">
        <div className="mr-5">
          <div>
            <Image
              src={room4}
              alt="Room2"
              className="rounded-2xl m-3 h-[300px] w-[200px]"
            />
          </div>
          <div className="mt-3">
            <Image
              src={room3}
              alt="Lubby"
              className="rounded-2xl m-3 h-[200px] w-[200px]"
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              src={room04}
              alt="Pool"
              className="rounded-2xl m-3 h-[200px] w-[200px]"
            />
          </div>
          <div className="mt-3">
            <Image
              src={room5}
              alt="Round1"
              className="rounded-2xl m-3 h-[300px] w-[200px]"
            />
          </div>
        </div>
      </div>
      {/* Photo gallery end*/}
    </div>
  );
};

export default GalleryTwo;
