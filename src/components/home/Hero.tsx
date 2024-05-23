"use client";

import { FindFlight } from "./FindFlight";

export function Hero() {
  return (
    <div>
      <div className="relative mb-8 h-[599px] w-full bg-[url('/Hero-pic.jpg')] bg-cover bg-center">
        <div className="flex justify-center">
          <div className="absolute flex translate-y-full flex-col text-center font-sans text-white lg:translate-y-36">
            <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              Helping Others
            </h2>
            <h1 className="mb-4 mt-1 text-6xl font-bold sm:text-7xl md:text-8xl lg:text-9xl">
              LIVE & TRAVEL
            </h1>
            <p className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
              Special offers to suit your plan
            </p>
          </div>
        </div>
      </div>
      <FindFlight />
    </div>
  );
}
