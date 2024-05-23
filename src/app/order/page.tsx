"use client";

import React, { useEffect, useState } from "react";
import { FlightDetailsCard } from "@/components/FlightDetailsCard";
// import { FlightData } from "./FlightData";
import { PriceDetails } from "@/components/PriceDetails";
import { PayCard } from "@/components/PayCard";
import { AddCard } from "@/components/AddCard";
import { Toaster } from "sonner";
import { TicketQuantity } from "./TicketQuantity";
import { useBookingStore, usePassengerStore } from "./Utils";
import { TicketLoader } from "@/components/loader/TicketLoader";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { count } from "console";

export default function Home() {
  const {
    quantity,
    setQuantity,
    passengerData,
    setPassengerData,
    updatePassengerData,
  }: any = usePassengerStore();
  const { bookingStore }: any = useBookingStore();
  const [flightData, setFlightData]: any = useState();
  const searchParams = useSearchParams();
  const id = searchParams.get("fromTo");

  const getFlightData = async () => {
    try {
      const response = await fetch(`/api/flightDatas/filter?Id=${id}`);
      const data = await response.json();
      setFlightData(data);
    } catch (error) {
      console.error("Error fetching flight information:", error);
    }
  };
  console.log(flightData);

  useEffect(() => {
    const savedQuantity = Number(localStorage.getItem("quantity")) || 1;
    // const bookingId = localStorage.getItem("selectedBooking");
    setQuantity(savedQuantity);
    getFlightData();
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
          <FlightDetailsCard Flight={flightData} />
          <TicketLoader />
          <PayCard />
          <AddCard Flight={flightData} />
        </div>
        <div className="w-1/3">
          <div className="mb-8">
            <PriceDetails Flight={flightData} Passenger={quantity} />
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
