"use client";
import React, { useEffect } from "react";
import bookRoom from "@/app/actions/bookRoom";
import { useActionState } from "react";
import { toast } from "react-toastify";
// import { usePaystackPayment } from "react-paystack";

const BookRoom = ({ room }) => {
  const [state, formAction] = useActionState(bookRoom, {});
  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("Room has been booked!");
    }
  }, [state]);
  return (
    <div>
      {/* <div className="md:w-[500px] md:ml-[320px] bg-gray-200 content-center my-5"> */}
      <form action={formAction} className="px-[100px] md:px-[200px] mb-5">
        <div className="md:grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6">
          <div className="mb-2 md:col-span-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="check-in-date"
            >
              Check-In Date
            </label>
            <input
              className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="check-in-date"
              type="date"
              name="check-in-date"
            />
          </div>
          <input
            className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="check-in-date"
            type="hidden"
            name="room_id"
            value={room.$id}
          />
          <input
            className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="check-in-date"
            type="hidden"
            name="amount"
            value={room.price_per_hour}
          />
          <div className="mb-2 md:col-span-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="check-in-time"
            >
              Check-In Time
            </label>
            <input
              className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="check-in-time"
              type="time"
              name="check-in-time"
            />
          </div>

          <div className="mb-2 md:col-span-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="check-out-date"
            >
              Check-Out Date
            </label>
            <input
              className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="check-out-date"
              type="date"
              name="check-out-date"
            />
          </div>
          <div className="mb-2 md:col-span-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="check-out-time"
            >
              Check-Out Time
            </label>
            <input
              className="shadow appearance-none border-1 border-blue-500 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="check-out-time"
              type="time"
              name="check-out-time"
            />
          </div>
        </div>
        <button className="text-white bg-blue-700 text-center rounded-md font-bold h-[40px] w-full">
          Book Room
        </button>
      </form>
    </div>
    // </div>
  );
};

export default BookRoom;
