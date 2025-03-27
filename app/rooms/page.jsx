import React from "react";
import Link from "next/link";
import Image from "next/image";
import getAllRooms from "../actions/getAllRooms";
import RoomCard from "@/components/RoomCard";

const Rooms = async () => {
  const rooms = await getAllRooms();
  console.log(rooms);

  return (
    <div>
      <div className="bg-cover h-[350px] w-screen md:h-[200px] md:w-full bg-hero-room"></div>
      {/* <div className="bg-hero-rooms bg-cover  md:bg-cover h-[300px] md:h-[600px] w-full"></div> */}
      <div className="md:grid grid-cols-3 gap-4 mx-5 my-5">
        {rooms.map((room) => (
          <div
            key={room.$id}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg"
          >
            <Link href={`/rooms/${room.$id}`} className="no-underline">
              <RoomCard room={room} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
