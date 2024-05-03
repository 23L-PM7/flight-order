import { FlightIconTest } from "@/components/icons/FlightIconTest";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DoorSlidingOutlinedIcon from "@mui/icons-material/DoorSlidingOutlined";
import AirlineSeatReclineNormalOutlinedIcon from "@mui/icons-material/AirlineSeatReclineNormalOutlined";
import { LinkIcon } from "@/components/icons/LinkIcon";
import { Button } from "@mui/joy";
import { LocationIcon } from "@/components/icons/LocationIcon";

type ticketInfo = {
  id: number;
  from_location: string;
  to_location: string;
  user_firstname: string;
  user_lastname: string;
  seat_status: string;
  departure_time: string;
  arrival_time: string;
  flight: string;
  flight_number: string;
  airport_address: string;
  price: string;
  gate: string;
  seat: string;
};

const tickets: ticketInfo[] = [
  {
    id: 123456,
    from_location: "Tokyo",
    to_location: "UB",
    user_firstname: "Jane",
    user_lastname: "Doe",
    seat_status: "Business Class",
    departure_time: "2024-05-05 12:00 PM",
    arrival_time: "2024-05-06 08:00 AM",
    flight: "Emirates A380 Airbus",
    flight_number: "NH204",
    airport_address: "1-1 Furugome, Narita, Chiba 282-0004, Japan",
    price: "$240",
    gate: "34B",
    seat: "12A",
  },
];

export default function Ticket2() {
  return (
    <div className="container mx-auto mt-4 flex flex-col justify-center">
      {tickets.map((ticket) => (
        <>
          <div className="flex justify-between my-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">{ticket.flight}</h1>
              <p className="flex items-center gap-2">
                <LocationIcon />
                {ticket.airport_address}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="font-bold text-xl">{ticket.price}</p>
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
            key={ticket.id}
            className="grid grid-cols-4 mx-auto border h-[300px] w-[950px] justify-center rounded-[15px] mb-4"
          >
            <div className="bg-[#EBF6F2] gap-2 rounded-l-[14px] flex flex-col justify-between py-7 px-6">
              <div>
                <p className="font-semibold text-2xl">{ticket.from_location}</p>
                <p className="text-gray-600">{ticket.departure_time}</p>
              </div>
              <FlightIconTest />
              <div>
                <p className="font-semibold text-2xl">{ticket.to_location}</p>
                <p className="text-gray-600">{ticket.arrival_time}</p>
              </div>
            </div>
            <div className="col-span-3">
              <div className="grid grid-rows-3 h-full">
                <div className="flex row-span-1 p-4 justify-between items-center bg-[#8ED3BB] rounded-tr-[14px]">
                  <div>
                    <p className="font-semibold text-2xl">
                      {ticket.user_firstname} {ticket.user_lastname}
                    </p>
                    <p className="font-light text-gray-800">
                      Boarding Pass N'{ticket.id}
                    </p>
                  </div>
                  <div className="bg-yellow-200 border border-yellow-600 rounded-md px-3">
                    <p className="font-semibold text-xl">
                      {ticket.seat_status}
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
                        <p>{ticket.departure_time.split(" ")[1]}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="bg-[#EBF6F2] p-2 rounded-md text-[#8DD3BB]">
                        <DoorSlidingOutlinedIcon />
                      </div>
                      <div>
                        <p className="font-semibold text-[#707A6F]">Gate</p>
                        <p>{ticket.gate}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="bg-[#EBF6F2] p-2 rounded-md text-[#8DD3BB]">
                        <AirlineSeatReclineNormalOutlinedIcon />
                      </div>
                      <div>
                        <p className="font-semibold text-[#707A6F]">Seat</p>
                        <p>{ticket.seat}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-3xl font-bold">
                        {ticket.flight_number}
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
      ))}
    </div>
  );
}
