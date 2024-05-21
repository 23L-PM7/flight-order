"use client";

import { FindFlight } from "./FindFlight";

export function Hero() {
  return (
    <div>
      <div className="relative mb-[30px] h-[599px] w-screen bg-[url('/Hero-pic.jpg')] bg-cover bg-center">
        <div className="absolute left-1/3 top-[25%] flex flex-col items-center justify-center font-serif text-white">
          <h2 className="text-[45px] font-bold">Helping Others</h2>
          <h1 className="mb-4 mt-1 text-[80px] font-bold">LIVE & TRAVEL</h1>
          <p className="text-[20px] font-semibold">
            Special offers to suit your plan
          </p>
        </div>
      </div>
      <FindFlight />
    </div>
  );
}
