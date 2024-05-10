import React from "react";

const Soort = () => {
  return (
    <div className="bg-white rounded-2xl flex gap-6 px-6 w-full">
      <div className="flex hover:border-b-2 py-4 cursor-pointer hover:border-[#8DD3BB] justify-between w-full">
        <div className="flex flex-col gap-2">
          <p className="text-base">Cheapest</p>
          <div className="flex gap-1">
            <p className="opacity-40 text-sm font-light">$99</p>
            <p className="opacity-40 text-sm font-light">.</p>
            <p className="opacity-40 text-sm font-light">2h 18m</p>
          </div>
        </div>
      </div>
      <img src="./line.svg" alt="line"></img>
      <div className="flex justify-between py-4 w-full cursor-pointer active:border-[#8DD3BB] hover:border-b-2 hover:border-[#8DD3BB]">
        <div className="flex flex-col gap-2">
          <p className="text-base">Best</p>
          <div className="flex gap-1">
            <p className="opacity-40 text-sm font-light">$99</p>
            <p className="opacity-40 text-sm font-light">.</p>
            <p className="opacity-40 text-sm font-light">2h 18m</p>
          </div>
        </div>
      </div>
      <img src="./line.svg" alt="line"></img>
      <div className="flex justify-between py-4 cursor-pointer hover:border-b-2 hover:border-[#8DD3BB] w-full">
        <div className="flex flex-col gap-2">
          <p className="text-base">Quickest</p>
          <div className="flex gap-1">
            <p className="opacity-40 text-sm font-light">$99</p>
            <p className="opacity-40 text-sm font-light">.</p>
            <p className="opacity-40 text-sm font-light">2h 18m</p>
          </div>
        </div>
      </div>
      <img src="./line.svg" alt="line"></img>
      <div className="flex rounded w-full">
        <button className="flex gap-2 items-center justify-center">
          <img className="w-6 h-6" src="./ssort.svg" alt="sort" />
          <p className="">Other sort</p>
        </button>
      </div>
    </div>
  );
};

export default Soort;
