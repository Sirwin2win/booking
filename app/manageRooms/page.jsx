import CreateProducts from "@/components/CreateProducts";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-cover h-[800px] w-screen md:h-[800px] md:w-full bg-hero-home"></div>
      <CreateProducts />
    </div>
  );
};

export default page;
