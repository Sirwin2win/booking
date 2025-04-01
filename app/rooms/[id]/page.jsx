import React from "react";
import getSingleRoom from "@/app/actions/getSingleRoom";
import Image from "next/image";
import BookRoom from "@/components/BookRoom";

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
          <p className="block text-gray-500">${}</p>
          <p className="block text-gray-500">{room.address}</p>
          <p className="block text-gray-500">{room.amenities}</p>
          <p className="italic text-gray-500">{room.availability}</p>
        </div>
      </div>
      <BookRoom room={room} />
    </div>
  );
};

export default page;
