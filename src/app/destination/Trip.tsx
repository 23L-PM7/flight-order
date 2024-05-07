import React from "react";
import Kekw from "../destination/Kekw";
import { useState } from "react";

const tripCardStyle:any = {
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

const Trip = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="m-auto flex w-10/12 flex-col gap-10">
      <div className="flex flex-col gap-10">
        <div className="flex w-full justify-between">
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-3xl leading-10 text-black">
              Plan your perfect trip
            </h1>
            <p className="text-base text-black opacity-50">
              Search Flights & Places Hire to our most popular destinations
            </p>
          </div>
          <div className="flex items-center">
            <button
              className="h-10 rounded border border-[#8DD3BB] px-4 py-2 text-[#4C4850] delay-75 duration-100 ease-in-out hover:bg-[#8DD3BB] max-[740px]:truncate"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? 'Show more places' : 'Show less places...'}
            </button>
          </div>
        </div>
        <div className="w-full gap-8 grid">
          <div style={isOpen ? undefined : tripCardStyle} className="grid grid-rows-3 grid-cols-3 gap-8">
            <Kekw />
            <Kekw />
            <Kekw />
            <Kekw />
            <Kekw />
            <Kekw />
            <Kekw />
            <Kekw />
            <Kekw />
          </div>
          <div className="grid grid-rows-3 grid-cols-3 gap-8 w-full hidden">
            <Kekw />
            <Kekw />
            <Kekw />
            <Kekw />
            <Kekw />
            <Kekw />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trip;
