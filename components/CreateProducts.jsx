"use client";
import React, { useState, useEffect, useActionState } from "react";
// import { useProductStore } from "@/app/store/products/product";
import { IoCloudUploadOutline } from "react-icons/io5";
import omg from "../assets/images/amen.avif";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import createRoom from "@/app/actions/createRoom";
import error from "@/app/error/error";
import { toast } from "react-toastify";

const CreateProducts = () => {
  const [state, formAction] = useActionState(createRoom, {});
  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("Room created Successfully!");
      router.push("/rooms");
    }
  }, [state]);

  return (
    <div className="container">
      <h2 className="text-center font-bold text-2xl text-blue-500 my-5 p-3">
        Create Rooms
      </h2>
      <div className="md:w-[500px] md:ml-[320px] bg-gray-200 content-center">
        <form
          className="bg-blue-300 shadow-md rounded border-3 border-blue-700 px-8 pt-6 pb-8 mb-4"
          action={formAction}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Room Title
            </label>
            <input
              className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="--Product Title--"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="sqft"
            >
              Square Fit
            </label>
            <input
              className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sqft"
              type="text"
              placeholder="--SQFT--"
              name="sqft"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="capacity"
            >
              Capacity
            </label>
            <input
              className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="capacity"
              type="text"
              placeholder="--Capacity--"
              name="capacity"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="--Location--"
              name="location"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="--Address--"
              name="address"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="availability"
            >
              Availability
            </label>
            <input
              className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="availability"
              type="text"
              placeholder="--Availability--"
              name="availability"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price_per_hour"
            >
              Price Per Hour
            </label>
            <input
              className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price_per_hour"
              type="text"
              placeholder="--price_per_hour--"
              name="price_per_hour"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amenities"
            >
              Amenities
            </label>
            <input
              className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="amenities"
              type="text"
              placeholder="--Amenities--"
              name="amenities"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            ></label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
         focus:outline-none focus:shadow-outline form-control"
              id="image"
              name="image"
              type="file"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow h-[200px] appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="lorem ipsum dolor sit amet"
              name="description"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProducts;
