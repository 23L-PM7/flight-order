"use client";
import React, { useEffect, useState } from "react";

import { passengersQuantityStore } from "@/components/home/Passengers";
import { Card, SelectChangeEvent } from "@mui/material";
import { Button, Input, Option, Select, selectClasses } from "@mui/joy";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { usePassengerQuantity } from "./Utils";
import { Fullscreen } from "@mui/icons-material";
import SeatMenu from "@/components/SeatMenu";
export function TicketQuantity({ number, data, onChange }: any) {
  const tripType = ["Adult", "Child", "Infant"];
  const [first, setFirst] = useState<any>();
  const [date, setDate] = useState<any>();
  const [gender, setGender] = useState<string | null>(tripType[0]);
  const [last, setLast] = useState<any>();
  const [selectedSeat, setSelectedSeat] = React.useState<any>();
  // useEffect(() => {
  //   saveData();
  // }, []);
  function saveData() {
    if (last && date && first && selectedSeat && gender) {
      onChange({ first, date, last, gender, selectedSeat });
    } else {
      alert("Fill All Option");
    }
  }
  return (
    <div className="my-10">
      <div>
        <Card
          variant="outlined"
          sx={{
            backgroundColor: "#fffff",
            borderColor: "#EAEDED",
            padding: "10px",
            marginTop: "30px",
          }}
        >
          <p className="font-bold">Passenger {number}</p>
          <Select
            variant="outlined"
            placeholder="Select trip type..."
            value={gender}
            onChange={(event, newValue) => {
              setGender(newValue);
            }}
            sx={{
              width: 1,
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
          <div className="my-3 flex gap-3">
            <Input
              placeholder="First Name"
              className="flex w-1/2"
              onChange={(e) => setFirst(e.target.value)}
            />
            <Input
              placeholder="last Name"
              className="w-1/2"
              onChange={(e) => setLast(e.target.value)}
            />
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateField", "DatePicker"]}>
              <DatePicker
                value={date}
                onChange={(newValue) => setDate(newValue)}
                label="Birth Date"
                slotProps={{ textField: { size: "small" } }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <div className="mt-5">
            <SeatMenu onChange={(value) => setSelectedSeat(value)} />
          </div>
          <Button
            onClick={saveData}
            className="mt-2 w-full bg-[#8DD3BB] hover:bg-[#B5E9CE] hover:text-black"
          >
            Save
          </Button>
        </Card>
      </div>
    </div>
  );
}
