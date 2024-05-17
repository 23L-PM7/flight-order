"use client";
import React, { useEffect, useState } from "react";
import { FlightDetailsCard } from "@/components/FlightDetailsCard";
import { FlightData } from "./FlightData";
import { PriceDetails } from "@/components/PriceDetails";
import { PayCard } from "@/components/PayCard";
import { AddCard } from "@/components/AddCard";
import { Toaster } from "sonner";
import SeatMenu from "@/components/SeatMenu";
import { passengersQuantityStore } from "@/components/home/Passengers";
import { TicketQuantity } from "./TicketQuantity";

export default function home() {
  const [quantity, setQuantity]: any = useState();
  useEffect(() => {
    setQuantity(localStorage.getItem("quantity"));
  });
  const array: number[] = [];
  for (let i = 1; i < Number(quantity) + 1; i++) {
    array.push(i);
  }
  return (
    <div className="">
      <Toaster position="top-right" richColors />
      <div className="container mx-auto flex gap-10 pb-[120px] pt-[94px] ">
        <div className="flex w-2/3 flex-col gap-[50px]">
          <FlightDetailsCard Flight={FlightData} />
          <PayCard />
          <AddCard Flight={FlightData} />
        </div>
        <div className="w-1/3">
          <div className="mb-8">
            <PriceDetails Flight={FlightData} />
          </div>
          <SeatMenu />
          {array.map((index) => (
            <TicketQuantity key={index} number={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
