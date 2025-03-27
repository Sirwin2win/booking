import React from "react";
import getSingleRoom from "@/app/actions/getSingleRoom";
import Image from "next/image";

const page = async ({ params }) => {
  const { id } = await params;
  const room = await getSingleRoom(id);
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;
  const imageSrc = room.image ? imageUrl : img;
  if (!room) {
    return <p>Rooms Not Found</p>;
  }
  return (
    <div>
      <div className="bg-cover h-[350px] w-screen md:h-[200px] md:w-full bg-hero-rooms"></div>

      <div className="mx-[80px] md:flex justify-center my-5">
        <Image
          src={imageSrc}
          width={400}
          height={200}
          alt="room.name"
          className="rounded-lg shadow-xl dark:shadow-gray-800 mb-3"
        />
        <div className="px-5">
          <p className="font-bold text-2xl text-blue-700">{room.name}</p>
          <p className="block text-gray-500">{room.description}</p>
          <p className="block text-gray-500">${room.price_per_hour}</p>
          <p className="block text-gray-500">{room.address}</p>
          <p className="block text-gray-500">{room.amenities}</p>
          <p className="italic text-gray-500">{room.availability}</p>
        </div>
      </div>
      <form className="px-[200px] mb-5">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
  );
};

export default page;
