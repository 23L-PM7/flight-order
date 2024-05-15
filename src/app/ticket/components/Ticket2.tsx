import { FlightIconTest } from "@/components/icons/FlightIconTest";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DoorSlidingOutlinedIcon from "@mui/icons-material/DoorSlidingOutlined";
import AirlineSeatReclineNormalOutlinedIcon from "@mui/icons-material/AirlineSeatReclineNormalOutlined";
import { LinkIcon } from "@/components/icons/LinkIcon";
import { Button } from "@mui/joy";
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

  return (
    <div className="container mx-auto mt-4 flex flex-col justify-center">
      {orderData.map((ticket) => {
        console.log(ticket.FlightTicket);
        return (
          <>
            <div key={ticket._id} className="flex justify-between my-8">
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
                <p className="font-bold text-[32px]">
                  {"$" + ticket.FlightTicket.price}
                </p>
                <div className="flex gap-2">
                  <Button variant="soft">
                    <LinkIcon />
                  </Button>
                  <Button className="bg-[#8DD3BB] hover:bg-[#81cab1] text-black">
                    Download
                  </Button>
                </div>
              </div>
            </div>
            <div
              key={ticket._id}
              className="grid grid-cols-4 mx-auto border h-[300px] w-[950px] justify-center rounded-[15px] mb-4"
            >
              <div className="bg-[#EBF6F2] gap-2 rounded-l-[14px] flex flex-col justify-between py-7 px-6">
                <div>
                  <p className="font-semibold text-2xl">
                    {ticket.FlightTicket.flight.departure_airport.country +
                      " " +
                      ticket.FlightTicket.flight.departure_airport.city}
                  </p>
                  <p className="text-gray-600">
                    {dayjs(ticket.FlightTicket.flight.departure_time).format(
                      "YYYY-MM-DD-hh-A"
                    )}
                  </p>
                </div>
                <FlightIconTest />
                <div>
                  <p className="font-semibold text-2xl">
                    {ticket.FlightTicket.flight.arrival_airport.country +
                      " " +
                      ticket.FlightTicket.flight.arrival_airport.city}
                  </p>
                  <p className="text-gray-600">
                    {dayjs(ticket.FlightTicket.flight.arrival_time).format(
                      "YYYY-MM-DD-hh-A"
                    )}
                  </p>
                </div>
              </div>
              <div className="col-span-3">
                <div className="grid grid-rows-3 h-full">
                  <div className="flex row-span-1 p-4 justify-between items-center bg-[#8ED3BB] rounded-tr-[14px]">
                    <div>
                      <p className="font-semibold text-2xl">
                        {ticket.FlightTicket.passenger.first_name}
                        {ticket.FlightTicket.passenger.last_name}
                      </p>
                      <p className="font-light text-gray-800">
                        Boarding Pass N'{ticket._id}
                      </p>
                    </div>
                    <div className="bg-yellow-200 border border-yellow-600 rounded-md px-3">
                      <p className="font-semibold text-xl">
                        {ticket.FlightTicket.flight.seat.number}
                      </p>
                    </div>
                  </div>
                  <div className="row-span-2 flex flex-col justify-between p-6">
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <div className="bg-[#EBF6F2] p-2 rounded-md text-[#8DD3BB]">
                          <CalendarMonthOutlinedIcon />
                        </div>
                        <div>
                          <p className="font-semibold text-[#707A6F]">Date</p>
                          <p>Newark(EWR)</p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="bg-[#EBF6F2] p-2 rounded-md text-[#8DD3BB]">
                          <AccessTimeOutlinedIcon />
                        </div>
                        <div>
                          <p className="font-semibold text-[#707A6F]">
                            Flight time
                          </p>
                          <p>
                            {dayjs(
                              ticket.FlightTicket.flight.departure_time
                            ).format("YYYY-MM-DD-hh-A")}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="bg-[#EBF6F2] p-2 rounded-md text-[#8DD3BB]">
                          <DoorSlidingOutlinedIcon />
                        </div>
                        <div>
                          <p className="font-semibold text-[#707A6F]">Gate</p>
                          <p>34B</p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="bg-[#EBF6F2] p-2 rounded-md text-[#8DD3BB]">
                          <AirlineSeatReclineNormalOutlinedIcon />
                        </div>
                        <div>
                          <p className="font-semibold text-[#707A6F]">Seat</p>
                          <p>{ticket.FlightTicket.flight.seat.number}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
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
