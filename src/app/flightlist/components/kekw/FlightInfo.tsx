import React, { useState } from "react";
import Checkbox from "@mui/joy/Checkbox";
import Button from "@mui/joy/Button";
import { useEffect } from "react";
import Skeleton from "@mui/joy/Skeleton";
import { FlightData } from "@/app/order/FlightData";

const FlightInfo = () => {
  const [flightInfo, setFlightInfo]: any = useState(null);

  useEffect(() => {
    const getFlightData = async () => {
      try {
        const response = await fetch("/api/flightDatas");
        if (!response.ok) {
          throw new Error("Failed to fetch flight information");
        }
        const data = await response.json();
        setFlightInfo(data);
      } catch (error) {
        console.error("Error fetching flight information:", error);
      }
    };

    getFlightData();

    return () => {};
  }, []);

  if (!flightInfo) {
    return <p>Loading flight information...</p>;
  }

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
              ${FlightData.price}
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
                      <span className="">{FlightData.departure_time}</span>
                      <span className="opacity-40 text-sm">
                        <div className="w-[60px] hover:cursor-help">
                          {FlightData.departure_airport.code}
                        </div>
                      </span>
                    </div>
                    <span className="">-</span>
                    <div className="flex flex-col gap-2">
                      <span className="">{FlightData.arrival_time}</span>
                      <span className="opacity-40 text-sm">
                        <div className="group flex flex-col ease-in-out duration-300 relative">
                          <div className="w-[60px] hover:cursor-help">
                            {FlightData.arrival_airport.code}
                          </div>
                          <span
                            className="group-hover:opacity-100 bg-white w-max transition-opacity bg-gray-800 px-4 py-4 text-sm text-gray-100 rounded-md absolute 
    -translate-x-1/2 translate-y-full opacity-0 mx-auto -translate-y-[2px]"
                          >
                            John F. Kennedy International Airport
                          </span>
                        </div>
                        {/* <div className="group flex relative">
                          <span className="bg-red-400 text-white px-2 py-1">
                            Button
                          </span>
                          <span
                            className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                          >
                            Tooltip
                          </span>
                        </div> */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="opacity-68 text-sm leading-5">non stop</span>
              <div className="flex flex-col gap-1">
                <span className="opacity-78">{FlightData.duration}</span>
                <span className="opacity-40 text-sm font-light">
                  {FlightData.flight_number}
                </span>
              </div>
            </div>
          </div>
        </div>
        <img src="./bruh.svg" alt="" />
        <div className="flex gap-4">
          <button className="flex gap-[10px] duration-100 border rounded px-4 py-4 border-[#8DD3BB] hover:bg-[#8DD3BB]">
            <img src="./heart.svg" alt="" />
          </button>
          <button className="flex gap-[10px] duration-100 border rounded px-4 py-4 border-[#8DD3BB] hover:bg-[#8DD3BB]">
            <img src="./Share.png" alt="" />
          </button>
          <button className="bg-[#8DD3BB] duration-100 hover:bg-slate-100 rounded w-full">
            <span className="text-sm font-medium">Book now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightInfo;
