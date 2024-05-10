"use client";

import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useRouter } from "next/navigation";
import axios from "axios";
import { MdFlightTakeoff } from "react-icons/md";

import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Passengers, passengersQuantityStore } from "./Passengers";

const fromTo = [
  "Ulaanbaatar - Beijing",
  "Ulaanbaatar - Seoul",
  "Ulaanbaatar - Istanbul",
];
const tripType = ["One way", "Round trip"];
const classType = ["Economy", "Business", "First"];

export function FindFlight() {
  const router = useRouter();
  // const [flighDatas, setFlightDatas]: any = useState([]);
  const [country, setCountry] = React.useState<string | null>(fromTo[0]);
  const [firstInput, setFirstInput] = React.useState("");
  const [trip, setTrip] = React.useState<string | null>(tripType[0]);
  const [secondInput, setSecondInput] = React.useState("");
  const [value, setValue] = React.useState<[Dayjs, Dayjs]>([
    dayjs("2024-05-01"),
    dayjs("2024-05-31"),
  ]);

  const startDate = value[0].format("YYYY-MM-DD");
  const endDate = value[1].format("YYYY-MM-DD");

  const [economy, setEconomy] = React.useState<string | null>(classType[0]);
  const [thirdInput, setThirdInput] = React.useState("");

  const { adultQuantity, childQuantity, infantQuantity } =
    passengersQuantityStore();

  // useEffect(() => {
  //   findFlights();
  // }, []);

  const findFlights = async () => {
    // try {
    //   await axios.get("/api/flightData").then((data) => {
    //     setFlightDatas(data);

    //     console.log(data);
    //   });
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert("An error occured while creating the new articles");
    // }

    const params = new URLSearchParams({
      country: country || "",
      trip: trip || "",
      startDate: startDate || "",
      endDate: endDate || "",
      economy: economy || "",
      adultQuantity: String(adultQuantity),
      childQuantity: String(childQuantity),
      infantQuantity: String(infantQuantity),
    }).toString();

    router.push(`/flightlist?${params}`);
  };

  return (
    <div className="w-9/12 rounded-2xl px-6 py-8 bg-white drop-shadow-xl -translate-y-1/3">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-xl">Where are you flying?</p>
        <Passengers />
      </div>
      <div className="flex gap-6">
        <div className="mt-8 font-mono">
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
        </div>
        <div className="mt-8">
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
        </div>
        <div className="mt-6">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateRangePicker", "DateRangePicker"]}>
              <DemoItem>
                <DateRangePicker
                  value={value}
                  onChange={(newValue: any) => setValue(newValue)}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className="mt-8">
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
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={findFlights}
          className="p-4 px-4 rounded bg-[#8DD3BB] mt-8 flex items-center gap-1"
        >
          <MdFlightTakeoff />
          <span>Show Flights</span>
        </button>
      </div>
    </div>
  );
}
