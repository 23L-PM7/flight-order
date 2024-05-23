import { useBookingStore } from "@/app/order/Utils";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

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

  const now = dayjs()
const arrivalTime = dayjs(data.arrival_time).format("YYYY-MM-DD hh-mm")
const departureTime = dayjs(data.departure_time).format("YYYY-MM-DD hh-mm")
  return <div className="w-full rounded-2xl flex px-6 py-4 bg-white border hover:shadow">
    <img src="./emirates.svg" alt="" />
    <div className="px-6 w-full gap-4 flex flex-col">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="flex border border-[#8DD3BB] px-4 py-2 rounded">
            <button className="">
              <span className="text-xs">4.2</span>
            </button>

          </div>
          <span className="flex flex-col">
            <p className="text-xs opacity-75">starting from</p>
            <p className="flex place-items-end text-2xl font-semibold text-[#FF8682]">
              ${data.price}
            </p>
          </span>
        </div>

        <span className="flex flex-col">
          <p className="opacity-75 text-xs">starting from</p>
          <p className="text-[#FF8682] place-items-end flex text-2xl font-semibold">
            ${data.price}
          </p>
        </span>
      </div>
      <div className="flex flex-col gap-6 w-full justify-center items-center">
        <div className="flex flex-col gap-4">
          <div className="gap-10 flex">
            <div className="flex gap-3">
              <div className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <span className="">{arrivalTime}</span>
                    <span className="opacity-40 text-sm w-[50px]">
                    <div className="group flex flex-col transition ease-in-out duration-300 relative">
                        <div className="w-max hover:cursor-help">
                          {data.departure_airport.city}
                        </div>
                        <span
                          className="group-hover:block w-max transition-opacity bg-gray-900 px-4 py-4 text-sm text-white rounded-md absolute 
    -translate-x-1/2 visible translate-y-full transition hidden mx-auto transition duration-300 -translate-y-[2px]"
                        >
                          <div>{JSON.stringify(data.departure_airport.name)}</div>
                        </span>
                      </div>
                    </span>
                  </div>
                  <span className="">-</span>
                  <div className="flex flex-col gap-2">
                    <span className="">{departureTime}</span>
                    <span className="opacity-40 text-sm w-[50px]">
                      <div className="group flex flex-col ease-in-out duration-300 relative">
                        <div className="w-max hover:cursor-help">
                          {data.arrival_airport.city}
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
