import React from "react";
import DoctorSidePanel from "./mainpages/DoctorSidePanel";

const DoctorNavBar = ({name}) => {
  return (
    <div>
      <div className="flex justify-between pt-10 shadow-black"> {/* Use shadow-md or other shadow classes */}
        <div className="mx-[300px]">
          <h1 className="text-5xl text-primary font-semibold pt-5">{name}</h1>
        </div>
        <div className="flex justify-between space-x-10">
          <input
            type="text"
            className="px-5 py-4 rounded-md shadow-md outline-none"
            placeholder="Search"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/886/209/non_2x/doctor-medical-cartoon-design-vector.jpg"
            alt="Doctor Avatar"
            className="w-16 h-16 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorNavBar;
