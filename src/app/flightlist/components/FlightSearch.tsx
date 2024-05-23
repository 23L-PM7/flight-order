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

interface FlightData {
  departure_airport: { city: string };
  arrival_airport: { city: string };
}

const fromTo = ["Ulaanbaatar - Beijing", "Ulaanbaatar - Seoul"];
const tripType = ["One way", "Round trip"];
const classType = ["Economy", "Business", "First"];

export default function FindFlight() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCountry = searchParams.get("fromTo");
  const initialTrip = searchParams.get("trip");
  const initialStartDate = searchParams.get("startDate");
  const initialEndDate = searchParams.get("endDate");
  const initialEconomy = searchParams.get("class");
  const initialAdultQuantity = searchParams.get("adultQuantity");
  const initialChildQuantity = searchParams.get("childQuantity");
  const initialInfantQuantity = searchParams.get("infantQuantity");
  const [flightData, setFlightData] = React.useState<FlightData[]>([]);
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

  useEffect(() => {
    fetchCountry();
  }, []);

  const fetchCountry = async () => {
    try {
      const { data } = await axios.get<FlightData[]>("/api/flightDatas");
      setFlightData(data);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  const findFlights = async () => {
    try {
      const params = new URLSearchParams({
        fromTo: country || "",
        trip: trip || "",
        startDate: startDate || "",
        endDate: endDate || "",
        class: economy || "",
        adultQuantity: adultQuantity.toString(),
        childQuantity: childQuantity.toString(),
        infantQuantity: infantQuantity.toString(),
      }).toString();

      await router.push(`/flightlist?${params}`);
    } catch (error) {
      console.error("Failed to navigate:", error);
    }
  };

  return (
    <>
      <div className="mt-[40px] flex w-10/12 flex-col items-center rounded-2xl bg-white px-6 py-8">
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
            options={flightData.map(
              (flight) =>
                `${flight.departure_airport.city} - ${flight.arrival_airport.city}`,
            )}
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
          <button
            onClick={findFlights}
            className="rounded bg-[#8DD3BB] px-[16px] py-[16px] hover:bg-gray-200"
          >
            <img src="./Search.svg" alt="search" />
          </button>
        </div>
      </div>
    </>
  );
}
