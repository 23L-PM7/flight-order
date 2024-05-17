import { FlightIconTest } from "@/components/icons/FlightIconTest";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DoorSlidingOutlinedIcon from "@mui/icons-material/DoorSlidingOutlined";
import AirlineSeatReclineNormalOutlinedIcon from "@mui/icons-material/AirlineSeatReclineNormalOutlined";
import { LinkIcon } from "@/components/icons/LinkIcon";
import { Button, CircularProgress, Stack } from "@mui/joy";
import { LocationIcon } from "@/components/icons/LocationIcon";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Ticket2() {
  const [orderData, setOrderData]: any = useState([]);
  const { user, isLoading } = useUser();
  const userId: any = user?.sub;

  useEffect(() => {
    fetch(`/api/order?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setOrderData(data));
  }, [user]);
  if (orderData.length == 0) {
    return (
      <Stack height={300} justifyContent="center" alignItems="center">
        <CircularProgress />
      </Stack>
    );
  }
  console.log(orderData);
  return (
    <div className="container mx-auto mt-4 flex flex-col justify-center">
      {orderData &&
        orderData.map((ticket) => {
          console.log(ticket.FlightTicket);
          return (
            <>
              <div key={ticket._id} className="my-8 flex justify-between">
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold">
                    {ticket.FlightTicket.flight.airline +
                      " " +
                      ticket.FlightTicket.flight.aircraft}
                  </h1>
                  <p className="flex items-center gap-2">
                    <LocationIcon />
                    {ticket.FlightTicket.flight.departure_airport.name}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <p className="text-[32px] font-bold">
                    {"$" + ticket.FlightTicket.price}
                  </p>
                  <div className="flex gap-2">
                    <Button variant="soft">
                      <LinkIcon />
                    </Button>
                    <Button className="bg-[#8DD3BB] text-black hover:bg-[#81cab1]">
                      Download
                    </Button>
                  </div>
                </div>
              </div>
              <div
                key={ticket._id}
                className="mx-auto mb-4 grid h-[300px] w-[950px] grid-cols-4 justify-center rounded-[15px] border"
              >
                <div className="flex flex-col justify-between gap-2 rounded-l-[14px] bg-[#EBF6F2] px-6 py-7">
                  <div>
                    <p className="text-2xl font-semibold">
                      {ticket.FlightTicket.flight.departure_airport.country +
                        " " +
                        ticket.FlightTicket.flight.departure_airport.city}
                    </p>
                    <p className="text-gray-600">
                      {dayjs(ticket.FlightTicket.flight.departure_time).format(
                        "YYYY-MM-DD-hh-A",
                      )}
                    </p>
                  </div>
                  <FlightIconTest />
                  <div>
                    <p className="text-2xl font-semibold">
                      {ticket.FlightTicket.flight.arrival_airport.country +
                        " " +
                        ticket.FlightTicket.flight.arrival_airport.city}
                    </p>
                    <p className="text-gray-600">
                      {dayjs(ticket.FlightTicket.flight.arrival_time).format(
                        "YYYY-MM-DD-hh-A",
                      )}
                    </p>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="grid h-full grid-rows-3">
                    <div className="row-span-1 flex items-center justify-between rounded-tr-[14px] bg-[#8ED3BB] p-4">
                      <div>
                        <p className="text-2xl font-semibold">
                          {ticket.FlightTicket.passenger.first_name}
                          {ticket.FlightTicket.passenger.last_name}
                        </p>
                        <p className="font-light text-gray-800">
                          Boarding Pass N'{ticket._id}
                        </p>
                      </div>
                      <div className="rounded-md border border-yellow-600 bg-yellow-200 px-3">
                        <p className="text-xl font-semibold">
                          {ticket.FlightTicket.flight.seat.number}
                        </p>
                      </div>
                    </div>
                    <div className="row-span-2 flex flex-col justify-between p-6">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-md bg-[#EBF6F2] p-2 text-[#8DD3BB]">
                            <CalendarMonthOutlinedIcon />
                          </div>
                          <div>
                            <p className="font-semibold text-[#707A6F]">Date</p>
                            <p>Newark(EWR)</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="rounded-md bg-[#EBF6F2] p-2 text-[#8DD3BB]">
                            <AccessTimeOutlinedIcon />
                          </div>
                          <div>
                            <p className="font-semibold text-[#707A6F]">
                              Flight time
                            </p>
                            <p>
                              {dayjs(
                                ticket.FlightTicket.flight.departure_time,
                              ).format("YYYY-MM-DD-hh-A")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="rounded-md bg-[#EBF6F2] p-2 text-[#8DD3BB]">
                            <DoorSlidingOutlinedIcon />
                          </div>
                          <div>
                            <p className="font-semibold text-[#707A6F]">Gate</p>
                            <p>34B</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="rounded-md bg-[#EBF6F2] p-2 text-[#8DD3BB]">
                            <AirlineSeatReclineNormalOutlinedIcon />
                          </div>
                          <div>
                            <p className="font-semibold text-[#707A6F]">Seat</p>
                            <p>{ticket.FlightTicket.flight.seat.number}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-3xl font-bold">
                            {ticket.FlightTicket.flight.number}
                          </p>
                          <p className="text-gray-700">Flight Number</p>
                        </div>
                        <div>AAAA</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}
