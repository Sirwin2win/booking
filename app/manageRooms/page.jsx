import CreateProducts from "@/components/CreateProducts";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-cover h-[350px] w-screen md:h-[200px] md:w-full bg-hero-amen"></div>
      <CreateProducts />
    </div>
  );
};

export default page;
