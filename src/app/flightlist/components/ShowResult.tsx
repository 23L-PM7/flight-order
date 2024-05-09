import FlightInfo from "./kekw/FlightInfo";
import Recommended from "./kekw/Recommended";
import Soort from "./kekw/Soort";
import React from "react";

const ShowResult = () => {
  return (
    <div className="w-10/12 flex gap-2 mt-[40px] bg-[#FAFBFC]">
      <div className="w-[500px] bg-cyan-100"></div>
      <div className="w-full flex flex-col gap-6">
        <Soort />
        <Recommended />
        <FlightInfo />
      </div>
    </div>
  );
};

export default ShowResult;
