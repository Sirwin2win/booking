"use client";
import React, { useEffect } from "react";
import createUser from "../actions/createUser";
import { useActionState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [state, formAction] = useActionState(createUser, {});
  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("User has been created successfully!");
    }
  }, [state]);
  return (
    <div>
      <div className="bg-cover h-[350px] w-screen md:h-[200px] md:w-full bg-hero-reg"></div>
      <div className="md:w-[500px] md:ml-[320px] bg-gray-200 content-center my-5">
        <form
          className="bg-blue-300 shadow-md rounded border-3 border-blue-700 px-8 pt-6 pb-8 mb-4"
          action={formAction}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="--Full Name--"
              name="name"
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
              placeholder="--Email--"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="--Password--"
              name="password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="password"
              placeholder="--Confirm Password--"
              name="confirm-password"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
