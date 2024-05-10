import React from "react";
import Checkbox from "@mui/joy/Checkbox";
import Button from "@mui/joy/Button";

const FlightInfo = () => {
  return (
    <div className="w-full rounded-2xl flex px-6 py-4 bg-white">
      <img src="./emirates.svg" alt="" />
      <div className="px-6 w-full gap-4 flex flex-col">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="flex border border-[#8DD3BB] px-4 py-2 rounded">
              <button className="">
                <span className="text-xs">4.2</span>
              </button>
            </div>
            <span>
              <strong>Very Good</strong> 54 reviews
            </span>
          </div>
          <span className="flex flex-col">
            <p className="opacity-75 text-xs">starting from</p>
            <p className="text-[#FF8682] place-items-end flex text-2xl font-semibold">
              $104
            </p>
          </span>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-4">
            <div className="gap-10 flex">
              <div className="flex gap-3">
                <Checkbox color="success" />
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <span className="">12:00 pm</span>
                    <span className="">-</span>
                    <span className="">01:28 pm</span>
                  </div>
                  <span className="opacity-40 font-light text-xs">
                    Emirates
                  </span>
                </div>
              </div>
              <span className="opacity-68 text-sm leading-5">non stop</span>
              <div className="flex flex-col gap-1">
                <span className="opacity-78">2h 28m</span>
                <span className="opacity-40 text-sm font-light">EWR-BNA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-4">
            <div className="gap-10 flex">
              <div className="flex gap-3">
                <Checkbox color="success" />
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <span className="">12:00 pm</span>
                    <span className="">-</span>
                    <span className="">01:28 pm</span>
                  </div>
                  <span className="opacity-40 font-light text-xs">
                    Emirates
                  </span>
                </div>
              </div>
              <span className="opacity-68 text-sm leading-5">non stop</span>
              <div className="flex flex-col gap-1">
                <span className="opacity-78">2h 28m</span>
                <span className="opacity-40 text-sm font-light">EWR-BNA</span>
              </div>
            </div>
          </div>
        </div>
        <img src="./bruh.svg" alt="" />
        <div className="flex gap-4">
          <button className="flex gap-[10px] border rounded px-4 py-4 border-[#8DD3BB] hover:bg-[#8DD3BB]">
            <img src="./heart.svg" alt="" />
          </button>
          <button className="bg-[#8DD3BB] hover:bg-slate-100 rounded w-full">
            <span className="text-sm font-medium">View Deals</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightInfo;
