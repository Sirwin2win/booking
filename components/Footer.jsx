import React from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="row bg-blue-700 pt-5 px-5">
      <div className="col-md-3">
        <p className="font-semibold text-white ">Destre Hotel</p>
        <p className="text-white text-sm">
          Hotel Booking made easy. You can start booking under the comfort of
          your bed. Check out our facilities and book at ease
        </p>
        <div className="flex">
          <FaXTwitter className="text-white rounded-full bg-blue-400 h-[30px] w-[30px]" />
          <FaFacebookF className="text-white rounded-full mx-4 bg-blue-400 h-[30px] w-[30px]" />
          <FaInstagram className="text-white rounded-full bg-blue-400 h-[30px] w-[30px]" />
          <FaLinkedinIn className="text-white rounded-full ml-5 bg-blue-400 h-[30px] w-[30px] " />
        </div>
      </div>
      <div className="col-md-3">
        <p className="font-semibold text-white">Menu</p>
        <p>
          <Link
            href={"/"}
            className="text-white no-underline font-serif font-bold bg-white-0"
          >
            Home
          </Link>
        </p>
        <p>
          {" "}
          <Link
            href={"/about"}
            className="text-white no-underline font-serif font-bold bg-white-0"
          >
            About
          </Link>
        </p>
        <p>
          {" "}
          <Link
            href={"/contact"}
            className="text-white no-underline font-serif font-bold bg-white-0"
          >
            Contact
          </Link>
        </p>
        <p>
          {" "}
          <Link
            href={"/rooms"}
            className="text-white no-underline font-serif font-bold bg-white-0"
          >
            Rooms
          </Link>
        </p>
        <p>
          {" "}
          <Link
            href={"/blog"}
            className="text-white no-underline font-serif font-bold bg-white-0"
          >
            Blog
          </Link>
        </p>
      </div>
      <div className="col-md-3">
        <p className="font-semibold text-white">Rooms</p>
        <p>
          {" "}
          <Link
            href={"/#blog"}
            className="text-white no-underline font-serif font-bold bg-white-0"
          >
            Exclusive
          </Link>
        </p>
        <p>
          {" "}
          <Link
            href={"/#blog"}
            className="text-white no-underline font-serif font-bold bg-white-0"
          >
            Presidential
          </Link>
        </p>
        <p>
          {" "}
          <Link
            href={"/#blog"}
            className="text-white no-underline font-serif font-bold bg-white-0"
          >
            Executive
          </Link>
        </p>
        <p>
          {" "}
          <Link
            href={"/#blog"}
            className="text-white no-underline font-serif font-bold bg-white-0"
          >
            Legends
          </Link>
        </p>
        <p>
          {" "}
          <Link
            href={"/#blog"}
            className="text-white no-underline font-serif font-bold bg-white-0"
          >
            Senior Citizens
          </Link>
        </p>
      </div>
      <div className="col-md-3">
        <p className="font-semibold text-white">Join Our Newsletter</p>
        <form className="relative mb-3 flex">
          <input
            type="text"
            placeholder="your email address"
            className="rounded-full h-[50px]"
          />
          <button className="absolute text-white p-1 bg-blue-700 rounded-full ml-[115px] mt-2">
            Submit
          </button>
        </form>
        <p className="text-white text-sm">
          Get a cupon after a certain number of patronise
        </p>
      </div>
      <hr style={{ color: "white" }} />
      <p className="text-sm mx-[400px] text-white">
        Copyright @ Destre Tech {year}. All Rights Reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
