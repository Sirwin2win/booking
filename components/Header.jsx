"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import with_cars from "@/assets/images/with_cars.jpg";
import pool from "@/assets/images/pool.avif";
import lubby from "@/assets/images/lubby.avif";
import logo from "@/assets/images/logo.jpg";
import "@/app/Home.module.css";

const Header = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);

  return (
    <div className="headerPix">
      {/* <Image src={with_cars} alt="Hotel image" className="" /> */}
      <div className="absolute text-center mt-[-550px] text-blue-700">
        <p className="font-bold">Welcome to Destre Hotel</p>
        <h3 className="font-bold p-[200px]">
          Your Home of Comfort and Excellence
        </h3>
        <p className="font-bold mx-[300px] text-sm mb-5">
          Destre hotel is here to give you a quality lodging experience. Your
          can search through our rooms and booking right away, under the comfort
          of your home.
        </p>
        <form>
          <input type="text" className="rounded-full md:w-[500px] h-[50px]" />
        </form>
      </div>
    </div>
  );
};
export default Header;
