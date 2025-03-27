import React from "react";
import img from "@/assets/images/lo.png";
import Image from "next/image";

const RoomCard = ({ room }) => {
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;
  const imageSrc = room.image ? imageUrl : img;
  return (
    <div>
      <Image
        src={imageSrc}
        width={300}
        height={300}
        alt={room.name}
        className="w-full"
      />
      <p className="pl-3 pt-3 text-center text-2xl font-bold text-blue-700">
        {room.name}
      </p>
      <p className="text-center block text-gray-500">{room.address}</p>
      <p className="text-center block text-gray-500">{room.availability}</p>
      <p className="text-center block text-gray-500">${room.price_per_hour}</p>
    </div>
  );
};

export default RoomCard;
