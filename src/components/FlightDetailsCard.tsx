"use client";

import Card from "@mui/joy/Card";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { FaPlane } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import dayjs from "dayjs";
import { IoFastFoodSharp } from "react-icons/io5";
import { useFlight } from "@/app/order/Utils";
import { useEffect } from "react";

export function FlightDetailsCard({ Flight }: any) {
  const { setFlight }: any = useFlight();
  useEffect(() => {
    setFlight(Flight);
  }, []);
  console.log(Flight, "asdf");
  return (
    <Card
      variant="outlined"
      sx={{ borderColor: "#EAEDED" }}
      className="bg-white px-6 py-8 font-mono"
    >
      {Flight &&
        Flight.map((Flight) => {
          return (
            <>
              <div className="flex justify-between">
                <p className="text-2xl font-bold">{Flight.aircraft}</p>
                <p className="text-3xl font-bold text-red-400">
                  ${Flight.price}
                </p>
              </div>
              <div className="flex justify-between  ">
                <p className="font-bold">
                  {dayjs(Flight.arrival_time).format("YYYY/MM/DD")}
                </p>
                <p className="text-xl font-medium">{Flight.duration}</p>
              </div>
              <div className="my-6 flex justify-between px-8 py-4">
                <div className="flex items-center gap-6 text-2xl font-bold">
                  <img className="w-14" src="/airlineLogo.png" />
                  {Flight.airline}
                </div>
                <div className="flex justify-between gap-4">
                  <FaPlane size={23} />
                  <div className="h-[23px] w-[1px] bg-slate-400"></div>
                  <FaWifi size={23} />
                  <div className="h-[23px] w-[1px] bg-slate-400"></div>
                  <IoFastFoodSharp size={23} />
                  <div className="h-[23px] w-[1px] bg-slate-400"></div>
                  <MdOutlineAirlineSeatReclineExtra size={23} />
                </div>
              </div>
              <div className="flex items-center justify-center gap-10 text-center">
                <div className="text-2xl font-semibold">
                  {dayjs(Flight.departure_time).format("hA")}
                </div>
                <div className="font-medium">
                  {" "}
                  {Flight.departure_airport.country +
                    " > " +
                    Flight.departure_airport.city}
                </div>
                <div className="h-[2px] w-20 bg-slate-700"></div>
                <div className="">
                  <FaPlane size={50} />
                </div>
                <div className="h-[2px] w-20 bg-slate-700"></div>
                <div className="text-2xl font-semibold">
                  {dayjs(Flight.arrival_time).format("hA")}
                </div>
                <p className="font-medium ">
                  {Flight.arrival_airport.country +
                    " > " +
                    Flight.arrival_airport.city}
                </p>
              </div>
            </>
          );
        })}
    </Card>
  );
}
