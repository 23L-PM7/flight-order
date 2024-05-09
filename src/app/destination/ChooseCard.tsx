import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { MdFlightTakeoff } from "react-icons/md";

export default function ChooseCard() {
  return (
    <>
      <div className="flex justify-around gap-6 mt-20 ">
        <div className="relative opacity-95 hover:opacity-100 cursor-pointer">
          <img src="/Flight.png" alt="flight" />
          <div className="text-center mt-2 text-white absolute left-[9%] top-[63%]">
            <div className="text-[40px] font-bold">Flights</div>
            <div>
              Search Flights, Cars & Places Hire to our most popular
              destinations.
            </div>
            <div className="flex justify-center">
              <button className="text-black p-4 rounded bg-[#8DD3BB] mt-8 flex items-center gap-1">
                <MdFlightTakeoff />
                <div> Show Flights</div>
              </button>
            </div>
          </div>
        </div>
        <div className="relative opacity-95 hover:opacity-100 cursor-pointer">
          <img
            className="max-h-[560px] rounded-2xl"
            src="/Cars.jpg"
            alt="car"
          />
          <div className="text-center mt-2 text-white absolute left-[21%] top-[63%]">
            <div className="text-[40px] font-bold">Cars</div>
            <div>Search Flights, Cars & Places.</div>
            <div className="flex justify-center">
              <button className="text-black p-4 rounded bg-[#8DD3BB] mt-8 flex items-center gap-1">
                <MdFlightTakeoff />
                <div> Show Rentcars</div>
              </button>
            </div>
          </div>
        </div>
        <div className="relative opacity-95 hover:opacity-100 cursor-pointer">
          <img src="/Hotels.png" alt="hotel" />
          <div className="text-center mt-2 text-white absolute left-[9%] top-[63%]">
            <div className="text-[40px] font-bold">Hotels</div>
            <div>
              Search Flights, Cars & Places Hire to our most popular
              destinations.
            </div>
            <div className="flex justify-center">
              <button className="text-black p-4 rounded bg-[#8DD3BB] mt-8 flex items-center gap-1">
                <MdFlightTakeoff />
                <div> Show Hotels</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
