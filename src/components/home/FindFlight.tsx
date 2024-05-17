"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import { useRouter } from "next/navigation";
import { Passengers, passengersQuantityStore } from "./Passengers";

// Material UI
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

// Joy UI
import Button from "@mui/joy/Button";
import CircularProgress from "@mui/joy/CircularProgress";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

interface FlightData {
  departure_airport: { city: string };
  arrival_airport: { city: string };
}

const tripType = ["One way", "Round trip"];
const classType = ["Economy", "Business", "First"];

export function FindFlight() {
  const router = useRouter();
  const [flightData, setFlightData] = useState<FlightData[]>([]);
  const [selectedFromTo, setSelectedFromTo] = useState<string | null>(null);
  const [selectedTrip, setSelectedTrip] = useState<string | null>(tripType[0]);
  const [selectedDates, setSelectedDates] = useState<[Dayjs, Dayjs]>([
    dayjs("2024-05-01"),
    dayjs("2024-05-31"),
  ]);
  const [selectedClass, setSelectedClass] = useState<string | null>(
    classType[0],
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { adultQuantity, childQuantity, infantQuantity } =
    passengersQuantityStore();

  const startDate = selectedDates[0].format("YYYY-MM-DD");
  const endDate = selectedDates[1].format("YYYY-MM-DD");

  useEffect(() => {
    fetchCountry();
  }, []);

  const fetchCountry = async () => {
    try {

      const { data } = await axios.get<FlightData[]>("/api/flightDatas");
      setFlightData(data);
      setSelectedFromTo(
        `${data[0].departure_airport.city} - ${data[0].arrival_airport.city}`,
      );
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  const findFlights = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        fromTo: selectedFromTo || "",
        trip: selectedTrip || "",
        startDate: startDate || "",
        endDate: endDate || "",
        class: selectedClass || "",
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
    <div className="flex w-full -translate-y-1/3 flex-col gap-6 border bg-white p-4 sm:mx-3 sm:rounded-md md:w-3/4">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold">Where are you flying?</p>
      </div>
      <div className="flex gap-2">
        <Select
          variant="soft"
          placeholder="Select trip type..."
          value={selectedTrip}
          onChange={(event, newValue) => {
            setSelectedTrip(newValue);
          }}
          indicator={<KeyboardArrowDown />}
          sx={{
            width: 240,
            [`& .${selectClasses.indicator}`]: {
              transition: "0.2s",
              [`&.${selectClasses.expanded}`]: {
                transform: "rotate(-180deg)",
              },
            },
          }}
        >
          {tripType.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>

        <Select
          variant="soft"
          placeholder="Select class type..."
          value={selectedClass}
          onChange={(event, newValue) => {
            setSelectedClass(newValue);
          }}
          indicator={<KeyboardArrowDown />}
          sx={{
            width: 240,
            [`& .${selectClasses.indicator}`]: {
              transition: "0.2s",
              [`&.${selectClasses.expanded}`]: {
                transform: "rotate(-180deg)",
              },
            },
          }}
        >
          {classType.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
        <Passengers />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Autocomplete
          fullWidth
          value={selectedFromTo}
          onChange={(event, newValue) => {
            setSelectedFromTo(newValue);
          }}
          options={flightData.map(
            (flight) =>
              `${flight.departure_airport.city} - ${flight.arrival_airport.city}`,
          )}
          renderInput={(params) => <TextField {...params} label="From - To" />}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangePicker
            sx={{ width: "100%" }}
            value={selectedDates}
            onChange={(newValue: any) => setSelectedDates(newValue)}
          />
        </LocalizationProvider>
        <div className="hidden sm:flex">
          <Button
            onClick={findFlights}
            loading={isLoading}
            disabled={isLoading}
            sx={{ width: 120, borderRadius: 30, height: "100%" }}
            loadingPosition="start"
            loadingIndicator={<CircularProgress />}
          >
            {isLoading ? "Loading..." : "Search"}
          </Button>
        </div>
      </div>
      <div className="sm:hidden">
        <Button
          onClick={findFlights}
          sx={{ height: 56, borderRadius: 30 }}
          loading={isLoading}
          disabled={isLoading}
          fullWidth
          loadingPosition="start"
          loadingIndicator={<CircularProgress />}
        >
          {isLoading ? "Loading..." : "Search"}
        </Button>
      </div>
    </div>
  );
}
