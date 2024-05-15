"use client";

import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { MdOutlineDelete } from "react-icons/md";

const columns: GridColDef[] = [
  { field: "flightNumber", headerName: "Flight Number", width: 150 },
  { field: "airline", headerName: "Airline", width: 150 },
  { field: "aircraft", headerName: "Aircraft", width: 150 },
  { field: "departureCity", headerName: "Departure City", width: 150 },
  { field: "arrivalCity", headerName: "Arrival City", width: 150 },
  { field: "departureTime", headerName: "Departure Time", width: 150 },
  { field: "arrivalTime", headerName: "Arrival Time", width: 150 },
  { field: "duration", headerName: "Duration", width: 150 },
  { field: "price", headerName: "Price", width: 150 },
  { field: "delete", headerName: "Delete", width: 150 },
];

export default function DataTable() {
  const [flightInfo, setFlightInfo]: any = React.useState([]);

  useEffect(() => {
    fetchFlight();
  }, []);

  const fetchFlight = async () => {
    try {
      await axios.get("/api/flightDatas").then(({ data }) => {
        setFlightInfo(data);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const row = flightInfo.map((flight: any) => {
    return {
      id: flight._id,
      flightNumber: flight.flight_number,
      airline: flight.airline,
      aircraft: flight.aircraft,
      departureCity: flight.departure_airport.city,
      arrivalCity: flight.arrival_airport.city,
      departureTime: flight.departure_time,
      arrivalTime: flight.arrival_time,
      duration: flight.duration,
      price: flight.price,
      // delete: `${(
      //   <div>
      //     <MdOutlineDelete />
      //   </div>
      // )}`,
      delete: "delete",
    };
  });

  console.log(row);
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={row}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}
