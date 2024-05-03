"use client";

import { FindFlight } from "./FindFlight";

export function Hero() {
  return (
    <div>
      <div className="relative h-[599px] bg-cover bg-center w-screen mb-[30px] bg-[url('/Hero-pic.jpg')]">
        <div className="absolute text-white top-[25%] flex flex-col items-center justify-center left-1/3 font-serif">
          <h2 className="font-bold text-[45px]">Helping Others</h2>
          <h1 className="font-bold text-[80px] mt-1 mb-4">LIVE & TRAVEL</h1>
          <p className="font-semibold text-[20px]">
            Special offers to suit your plan
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <FindFlight />
      </div>
    </div>
  );
}
