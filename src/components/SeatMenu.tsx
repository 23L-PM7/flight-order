"use client";

import * as React from "react";
import MenuButton from "@mui/joy/MenuButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import { Divider } from "@mui/joy";
import { useOrder, useSeat } from "@/app/order/Utils";

export default function SeatMenu({ onChange }: any) {
  const [selectedSeat, setSelectedSeat] = React.useState<any>();
  const [seat, setSeat] = React.useState<any>();
  // const { seat, setSeat }: any = useSeat();
  const { order, fetchOrders }: any = useOrder();

  React.useEffect(() => {
    fetchOrders();
    onChange(seat);
  }, [seat]);
  const arrayWith100: number[] = [];
  for (let i = 1; i < 25 + 1; i++) {
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

  return (
    <Dropdown>
      <MenuButton size="sm" fullWidth={true}>
        Seat
      </MenuButton>
      <Menu className="w-1/4" size="sm">
        <div className="grid-center grid grid-cols-4 gap-2">
          {arrayWith100.map((seatNumber) => {
            return (
              <button
                disabled={selectedSeats.includes(seatNumber)}
                key={seatNumber}
                className={`border text-center hover:bg-green-500 ${selectedSeat == seatNumber ? "bg-green-500" : "bg-white"} ${selectedSeats.includes(seatNumber) ? "bg-slate-600 text-slate-300  " : ""}`}
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
          className="flex w-full justify-center bg-[#8DD3BB]"
        >
          <p className="text-md">Submit</p>
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}
