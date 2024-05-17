"use client";
import React, { useEffect, useState } from "react";

import { passengersQuantityStore } from "@/components/home/Passengers";
import { Card, SelectChangeEvent } from "@mui/material";
import { Input, Option, Select } from "@mui/joy";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { usePassengerQuantity } from "./Utils";
export function TicketQuantity({ number }: any) {
  const [first, setFirst] = useState<any>();
  const [date, setDate] = useState<any>();
  const [gender, setGender] = useState<any>();
  const [last, setLast] = useState<any>();
  const { passenger, setPassenger }: any = usePassengerQuantity();
  console.log(last, gender, date, first);

  const handleChange = (event) => {
    setGender(event.target.value);
  };

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
            placeholder="Choose one…"
            className=""
            value={gender}
            onChange={handleChange}
          >
            <Option value="Child">Child</Option>
            <Option value="Infants">Infants</Option>
            <Option value="Adult">Adult</Option>
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
        </Card>
      </div>
    </div>
  );
}
