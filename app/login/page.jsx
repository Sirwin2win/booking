"use client";
import React from "react";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import createSession from "../actions/createSession";
import { useActionState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const page = () => {
  const [state, formAction] = useActionState(createSession, {});
  let router = useRouter();
  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("You're logged in successfully!");
      // router.push(lastLocation.pathname);
    }
  }, [state]);
  return (
    <div>
      <div className="bg-cover h-[800px] w-screen md:h-[800px] md:w-full bg-hero-reg"></div>
      <div className="mx-[50px]">
        <h1 className="text-center my-5 p-2 text-blue-700">Welcome back!</h1>
        <div className="md:w-[500px] md:ml-[320px] bg-gray-200 content-center my-5">
          <form
            action={formAction}
            className="bg-blue-300 shadow-md rounded border-3 border-blue-700 px-8 pt-6 pb-8 mb-4"
          >
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
            <input
              type="submit"
              className="text-white bg-blue-700 rounded-2xl h-10 w-20"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
