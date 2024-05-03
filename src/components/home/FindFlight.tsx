"use client";

import React from "react";
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
import { Passengers } from "./Passengers";

const fromTo = ["Ulaanbaatar - Beijing", "Ulaanbaatar - Seoul"];
const tripType = ["One way", "Round trip"];
const classType = ["Economy", "Business", "First"];

export function FindFlight() {
  const router = useRouter();
  const [country, setCountry] = React.useState<string | null>(fromTo[0]);
  const [firstInput, setFirstInput] = React.useState("");
  const [trip, setTrip] = React.useState<string | null>(tripType[0]);
  const [secondInput, setSecondInput] = React.useState("");
  const [value, setValue] = React.useState<[Dayjs, Dayjs]>([
    dayjs("2022-04-17"),
    dayjs("2022-04-21"),
  ]);

  const startDate = value[0].format("YYYY-MM-DD");
  const endDate = value[1].format("YYYY-MM-DD");

  // const [quantity, setQuantity] = React.useState<string | null>(passangers[0]);
  // const [thirdInput, setThirdInput] = React.useState("");
  const [economy, setEconomy] = React.useState<string | null>(classType[0]);
  const [thirdInput, setThirdInput] = React.useState("");

  const findFlights = async () => {
    if (!country || !trip || !value || !economy) {
      alert("Бүх талбарыг бөглөнө үү!");
      return;
    }
    // try {
    //   await axios.post("http://localhost:3000/flights", {
    //     country,
    //     trip,
    //     value,
    //     economy,
    //   });
    //   router.push("/login");
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert("An error occured while creating the new articles");
    // }
    console.log(country, trip, startDate, endDate, economy);
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
          <div> Show Flights</div>
        </button>
      </div>
    </div>
  );
}
