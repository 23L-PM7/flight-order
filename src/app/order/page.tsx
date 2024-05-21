"use client";
import React, { useEffect } from "react";
import { FlightDetailsCard } from "@/components/FlightDetailsCard";
import { FlightData } from "./FlightData";
import { PriceDetails } from "@/components/PriceDetails";
import { PayCard } from "@/components/PayCard";
import { AddCard } from "@/components/AddCard";
import { Toaster } from "sonner";

import { TicketQuantity } from "./TicketQuantity";
import { usePassengerStore } from "./Utils";

export default function Home() {
  const {
    quantity,
    setQuantity,
    passengerData,
    setPassengerData,
    updatePassengerData,
  }: any = usePassengerStore();
  useEffect(() => {
    const savedQuantity = Number(localStorage.getItem("quantity")) || 1;
    setQuantity(savedQuantity);
  }, [setQuantity]);

  const handleChange = (value, index) => {
    updatePassengerData(value, index);
    console.log(value);
  };

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
            <PriceDetails Flight={FlightData} Passenger={quantity} />
          </div>

          {[...Array(quantity)].map((_, index) => (
            <TicketQuantity
              onChange={(value) => handleChange(value, index)}
              key={index}
              number={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
