"use client";
import React, { useState, useEffect } from "react";

const Contact = () => {
  // const [width, setWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState(() => {
    if (typeof window !== "undefined")
      return {
        width: window.innerWidth,
      };
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="bg-hero-contact bg-[800px] md:bg-cover h-[600px] w-full"></div>
      <div className="container">
        <h4 className="text-blue-700 font-[80px] text-center font-[sora] font-bold my-5">
          Get in touch
        </h4>
        <p className="px-5 text-center mb-5">
          <span className="block text-gray-500">
            People will forget what you said.
          </span>
          <span className="block text-gray-500">
            They will forget what you did. But they will never forget how you
            made them feel.
          </span>
        </p>
        {width >= 640 ? (
          <div className="grid grid-cols-3 divide-x-4 my-5 text-center">
            <div className="">
              <p className="font-[sora] font-[800px] font-bold">Email</p>
              <p className="block text-gray-500">sirwin2win@gmail.com</p>
            </div>
            <div className="ml-3">
              <p className="font-[sora] font-[800px] font-bold">Call</p>
              <p className="block text-gray-500">07068939304</p>
            </div>
            <div className="ml-3">
              <p className="font-[sora] font-[800px] font-bold">Visit</p>
              <p className="block text-gray-500">Abuja, Nigeria</p>
            </div>
          </div>
        ) : (
          <div className="text-center border-2 border-solid my-5">
            <div className="p-2">
              <p className="font-[sora] font-[800px] font-bold">Email</p>
              <p className="block text-gray-500">sirwin2win@gmail.com</p>
            </div>
            <hr className="mx-5" />
            <div className="ml-3 p-2">
              <p className="font-[sora] font-[800px] font-bold">Call</p>
              <p className="block text-gray-500">07068939304</p>
            </div>
            <hr className="mx-5" />
            <div className="ml-3 p-2">
              <p className="font-[sora] font-[800px] font-bold">Visit</p>
              <p className="block text-gray-500">Abuja, Nigeria</p>
            </div>
          </div>
        )}
        <div className="md:w-[500px] md:ml-[320px] bg-gray-200">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                placeholder="--Full Name--"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="--email--"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                placeholder="--subject--"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subject"
              >
                Description
              </label>
              <textarea
                className="shadow h-[200px] appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="lorem ipsum dolor sit amet"
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Get in touch
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
