import { useBookingStore } from "@/app/order/Utils";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const FlightInfo = ({ data }: { data: any }) => {
  const router = useRouter();

  const booking = async () => {
    try {
      const params = new URLSearchParams({
        fromTo: data._id || "",
      }).toString();
      await router.push(`/order?${params}`);
    } catch (error) {
      console.error("Failed to navigate:", error);
    }
  };

  return (
    <div className="flex w-full rounded-2xl border bg-white px-6 py-4 hover:shadow">
      <img src="./emirates.svg" alt="" />
      <div className="flex w-full flex-col gap-4 px-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="flex rounded border border-[#8DD3BB] px-4 py-2">
              <button className="">
                <span className="text-xs">4.2</span>
              </button>
            </div>
            <span>
              <strong>Very Good</strong> 54 reviews
            </span>
          </div>
          <span className="flex flex-col">
            <p className="text-xs opacity-75">starting from</p>
            <p className="flex place-items-end text-2xl font-semibold text-[#FF8682]">
              ${data.price}
            </p>
          </span>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex gap-10">
              <div className="flex gap-3">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="flex flex-col gap-2">
                      <span className="">{data.departure_time}</span>
                      <span className="w-[50px] text-sm opacity-40">
                        <div className="group relative flex flex-col transition duration-300 ease-in-out">
                          <div className="w-[60px] hover:cursor-help">
                            {data.departure_airport.code}
                          </div>
                          <span
                            className="visible absolute mx-auto hidden w-max -translate-x-1/2 -translate-y-[2px] translate-y-full rounded-md bg-gray-900 
    px-4 py-4 text-sm text-white transition transition transition-opacity duration-300 group-hover:block"
                          >
                            <div>
                              {JSON.stringify(data.departure_airport.name)}
                            </div>
                          </span>
                        </div>
                      </span>
                    </div>
                    <span className="">-</span>
                    <div className="flex flex-col gap-2">
                      <span className="">{data.arrival_time}</span>
                      <span className="w-[50px] text-sm opacity-40">
                        <div className="group relative flex flex-col duration-300 ease-in-out">
                          <div className="w-[60px] hover:cursor-help">
                            {data.arrival_airport.code}
                          </div>
                          <span
                            className="visible absolute mx-auto hidden w-max -translate-x-1/2 -translate-y-[2px] translate-y-full rounded-md bg-gray-800 px-4 
    py-4 text-sm text-gray-100 transition transition-opacity ease-in-out group-hover:block group-hover:delay-200"
                          >
                            <div>
                              {JSON.stringify(data.arrival_airport.name)}
                            </div>
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="opacity-68 text-sm leading-5">non stop</span>
              <div className="flex flex-col gap-1">
                <span className="opacity-78">{data.duration}</span>
                <span className="text-sm font-light opacity-40">
                  {data.flight_number}
                </span>
              </div>
            </div>
          </div>
        </div>
        <img src="./bruh.svg" alt="" />
        <div className="flex gap-4">
          <button className="flex gap-[10px] rounded border border-[#8DD3BB] px-4 py-4 duration-100 hover:bg-[#8DD3BB]">
            <img src="./heart.svg" alt="" />
          </button>
          <button className="flex gap-[10px] rounded border border-[#8DD3BB] px-4 py-4 duration-100 hover:bg-[#8DD3BB]">
            <img src="./Share.png" alt="" />
          </button>
          <button
            onClick={booking}
            className="w-full rounded bg-[#8DD3BB] duration-100 hover:bg-slate-100"
          >
            <span className="text-sm font-medium">Book now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightInfo;
