"use client";

import * as React from "react";
import MenuButton from "@mui/joy/MenuButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import ListDivider from "@mui/joy/ListDivider";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Check from "@mui/icons-material/Check";
import { Button, Divider, Typography } from "@mui/joy";
import { useOrder, useSeat } from "@/app/order/Utils";

export default function SeatMenu() {
  const [selectedSeat, setSelectedSeat] = React.useState<any>();
  const { seat, setSeat }: any = useSeat();
  const { order, fetchOrders }: any = useOrder();

  React.useEffect(() => {
    fetchOrders();
  }, []);
  const arrayWith100: number[] = [];
  for (let i = 1; i < 100; i++) {
    arrayWith100.push(i);
  }

  function saveSeat() {
    setSeat(selectedSeat);
  }

  const selectedSeats: number[] = [];
  if (order) {
    order.map((seats) => {
      selectedSeats.push(seats.FlightTicket.flight.seat.number);
    });
  }

  console.log({ selectedSeats, arrayWith100 });

  return (
    <Dropdown>
      <MenuButton size="sm" fullWidth={true}>
        Seat
      </MenuButton>
      <Menu className="w-1/4" size="sm">
        <div className="grid grid-cols-4 grid-center gap-2">
          {arrayWith100.map((seatNumber) => {
            return (
              <button
                disabled={selectedSeats.includes(seatNumber)}
                key={seatNumber}
                className={`text-center border ${selectedSeat == seatNumber ? "bg-green-500" : "bg-white"} ${selectedSeats.includes(seatNumber) ? "bg-red-400  text-black opacity-5" : ""}`}
                onClick={() => setSelectedSeat(seatNumber)}
              >
                {seatNumber}
              </button>
            );
          })}
        </div>
        <Divider />
        <MenuItem
          onClick={saveSeat}
          className="w-full flex justify-center bg-[#8DD3BB]"
        >
          <p className="text-md">Submit</p>
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}
