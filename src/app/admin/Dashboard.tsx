"use client";

import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { Button } from "@mui/material";
import EditingModal from "./EditingModal";
import { toast } from "sonner";
import dayjs from "dayjs";

export default function DataTable() {
  const [flightInfo, setFlightInfo]: any = React.useState([]);
  const [editing, setEditing] = useState("");

  const deleteFlightTicket = async (_id: string) => {
    if (confirm("Are you sure delete?")) {
      try {
        await axios.delete(`/api/flightDatas/${_id}`).then(() => {
          toast.success("Successfully deleted.");
        });
        fetchFlight();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const columns: GridColDef[] = [
    { field: "flightNumber", headerName: "Flight Number", width: 150 },
    { field: "airline", headerName: "Airline", width: 150 },
    { field: "aircraft", headerName: "Aircraft", width: 150 },
    { field: "departureCity", headerName: "Departure City", width: 150 },
    { field: "arrivalCity", headerName: "Arrival City", width: 150 },
    { field: "departureTime", headerName: "Departure Time", width: 200 },
    { field: "arrivalTime", headerName: "Arrival Time", width: 200 },
    { field: "duration", headerName: "Duration", width: 100 },
    { field: "price", headerName: "Price", width: 50 },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => (
        <Button onClick={() => deleteFlightTicket(params.row.id)}>
          delete
        </Button>
      ),
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: (params) => (
        <Button onClick={() => setEditing(params.row.id)}>edit</Button>
      ),
    },
  ];

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
      departureTime: dayjs(flight.departure_time).format("YYYY-MM-DD hh-mm"),
      arrivalTime: dayjs(flight.arrival_time).format("YYYY-MM-DD hh-mm"),
      duration: flight.duration,
      price: flight.price,
    };
  });

  return (
    <>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={row}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
        {editing && (
          <EditingModal
            flightId={editing}
            open={true}
            onClose={() => setEditing("")}
            onComplete={fetchFlight}
          />
        )}
      </div>
    </>
  );
}
