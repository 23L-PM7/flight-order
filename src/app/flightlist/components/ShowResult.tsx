import React from "react";

const formList = [{ key: "Cheapest" }, { key: "Best" }, { key: "Quickest" }];

const ShowResult = () => {
  return (
    <div className="w-10/12 flex gap-2 mt-[40px] bg-[#FAFBFC]">
      <div className="w-[500px] bg-cyan-100"></div>
      <div className="bg-white rounded-2xl flex gap-6 px-6 py-4">
        <div className="flex gap-32">
          <div className="flex flex-col gap-2">
            <p className="text-base">Cheapest</p>
            <div className="flex gap-1">
              <p className="opacity-40 text-sm font-light">$99</p>
              <p className="opacity-40 text-sm font-light">.</p>
              <p className="opacity-40 text-sm font-light">2h 18m</p>
            </div>
          </div>
          <img src="./line.svg" alt="line"></img>
        </div>
        <div>
          <button className="flex gap-2 items-center justify-center">
            <img className="w-6 h-6" src="./ssort.svg" alt="sort" />
            <p className="">Other sort</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowResult;
