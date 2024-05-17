"use client";

import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { MdFlightTakeoff } from "react-icons/md";

import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import {
  Passengers,
  passengersQuantityStore,
} from "@/components/home/Passengers";

const fromTo = ["Ulaanbaatar - Beijing", "Ulaanbaatar - Seoul"];
const tripType = ["One way", "Round trip"];
const classType = ["Economy", "Business", "First"];

export default function FindFlight() {
  const searchParams = useSearchParams();

  const initialCountry = searchParams.get("country");
  const initialTrip = searchParams.get("trip");
  const initialStartDate = searchParams.get("startDate");
  const initialEndDate = searchParams.get("endDate");
  const initialEconomy = searchParams.get("economy");
  const initialAdultQuantity = searchParams.get("adultQuantity");
  const initialChildQuantity = searchParams.get("childQuantity");
  const initialInfantQuantity = searchParams.get("infantQuantity");

  const [country, setCountry] = React.useState<string | null>(initialCountry);
  const [firstInput, setFirstInput] = React.useState("");
  const [trip, setTrip] = React.useState<string | null>(initialTrip);
  const [secondInput, setSecondInput] = React.useState("");
  const [value, setValue] = React.useState<[Dayjs, Dayjs]>([
    dayjs(initialStartDate),
    dayjs(initialEndDate),
  ]);
  const startDate = value[0].format("YYYY-MM-DD");
  const endDate = value[1].format("YYYY-MM-DD");

  const [economy, setEconomy] = React.useState<string | null>(initialEconomy);
  const [thirdInput, setThirdInput] = React.useState("");

  const {
    adultQuantity,
    setAdultQuantity,
    childQuantity,
    setChildQuantity,
    infantQuantity,
    setInfantQuantity,
  } = passengersQuantityStore();

  useEffect(() => {
    setAdultQuantity(Number(initialAdultQuantity));
    setChildQuantity(Number(initialChildQuantity));
    setInfantQuantity(Number(initialInfantQuantity));
  }, []);

    // useEffect(() => {
    //   SearchFlight();
    // }, []);
   
    // const SearchFlight = () => {
    //   fetch("/api/flightData")
    //     .then((data) => setCountry(data));
    // };

  // const findFlights = async () => {


  //   try {
  //     await axios.get("/api/flightData", {

  //     })
  //     return Response.data;
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occured while creating the new articles");
  //   }

  return (
    <>
      <div className="mt-[40px] flex flex-col w-10/12 items-center bg-white py-8 px-6 rounded-2xl">
        <div className="flex justify-end">
          <Passengers />
        </div>
        <div className="flex items-center justify-center gap-8">
          <Autocomplete
            value={country}
            onChange={(event, newValue) => {
              setCountry(newValue);
            }}
            inputValue={firstInput}
            onInputChange={(event, newInputValue) => {
              setFirstInput(newInputValue);
            }}
            id="1"
            options={fromTo}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="From - To" />
            )}
          />

          <Autocomplete
            value={trip}
            onChange={(event, newValue) => {
              setTrip(newValue);
            }}
            inputValue={secondInput}
            onInputChange={(event, newInputValue) => {
              setSecondInput(newInputValue);
            }}
            id="2"
            options={tripType}
            sx={{ width: 164 }}
            renderInput={(params) => <TextField {...params} label="Trip" />}
          />

          <div className="-translate-y-1">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DateRangePicker", "DateRangePicker"]}
              >
                <DemoItem>
                  <DateRangePicker
                    value={value}
                    onChange={(newValue: any) => setValue(newValue)}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <Autocomplete
            value={economy}
            onChange={(event, newValue) => {
              setEconomy(newValue);
            }}
            inputValue={thirdInput}
            onInputChange={(event, newInputValue) => {
              setThirdInput(newInputValue);
            }}
            id="3"
            options={classType}
            sx={{ width: 324 }}
            renderInput={(params) => <TextField {...params} label="Class" />}
          />
          <button className="bg-[#8DD3BB] px-[16px] py-[16px] rounded">
            <img src="./Search.svg" alt="search" />
          </button>
        </div>
      </div>
    </>
  );
}
