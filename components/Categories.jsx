import React from "react";
import { FaSpa } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineDinnerDining } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineGolfCourse } from "react-icons/md";
import { GiTennisRacket } from "react-icons/gi";

const Categories = () => {
  return (
    <div className="md:my-[80px]">
      <h4 className="text-center text-blue-700 font-[sora] mt-[50px] md:font-semibold">
        OUR TOP CATEGORIES
      </h4>
      <p className="font-bold md:mx-[200px] my-4">
        We are known for our exceptional level of service and pampering, wih
        staff trained to provide the highest level of customer care
      </p>
      <div className="md:inline">
        <div className="inline-grid grid-cols-4 gap-5">
          <div>
            <p>
              <IoIosFitness className="h-[30px] w-[30px] text-blue-700" />
            </p>
            <p className="font-semibold">Fitness</p>
          </div>
          <div>
            <p>
              <MdOutlineBedroomParent className="h-[30px] w-[30px] text-blue-700" />
            </p>
            <p className="font-semibold">Rooms </p>
          </div>
          <div>
            <p>
              <MdOutlineDinnerDining className="h-[30px] w-[30px] text-blue-700" />
            </p>
            <p className="font-semibold">Dining </p>
          </div>
          <div>
            <p>
              <MdOutlinePool className="h-[30px] w-[30px] text-blue-700" />
            </p>
            <p className="font-semibold">Pool </p>
          </div>
        </div>
        <div className="inline-grid grid-cols-4 gap-2">
          <div>
            <p>
              <RiCustomerService2Line className="h-[30px] w-[30px] text-blue-700" />
            </p>
            <p className="font-semibold">Services </p>
          </div>
          <div>
            <p>
              <MdOutlineGolfCourse className="h-[30px] w-[30px] text-blue-700" />
            </p>
            <p className="font-semibold">Gulf Courses </p>
          </div>
          <div>
            <p>
              <GiTennisRacket className="h-[30px] w-[30px] text-blue-700" />
            </p>
            <p className="font-semibold">Tennis Courts</p>
          </div>
          <div>
            <p>
              <FaSpa className="h-[30px] w-[30px] text-blue-700" />
            </p>
            <p className="font-semibold">Sauna or Spa </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
