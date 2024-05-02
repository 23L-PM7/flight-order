import React from "react";

const Trip = () => {
  return (
    <div className="m-auto flex w-10/12 flex-col gap-10">
      <div className="w-full h-[599px] overflow-hidden">
        <img className="bg-gradient-to-b from-[#00000000] overflow-hidden to-[#00000099] relative" src="woof.png" alt="photo"></img>
        <img className="-translate-y-full top-[-17px] overflow-hidden relative" src="pog.png" alt="pog"></img>
      </div>
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
          <button className="delay-75 ease-in-out duration-150 h-10 rounded border border-[#8DD3BB] px-4 py-2 text-[#4C4850] hover:bg-[#8DD3BB] max-[740px]:truncate">
            See more places
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-cyan-200 gap-8">12131231 </div>
    </div>
  );
};

export default Trip;
