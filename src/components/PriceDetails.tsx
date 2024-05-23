import { Card, Stack } from "@mui/joy";
import RatingSize from "./RatingSize";
import React from "react";

export function PriceDetails({ Flight, Passenger }: any) {
  console.log(Flight, "Asdf");
  return (
    <Card
      sx={{ backgroundColor: "#ffff", borderColor: "#EAEDED" }}
      invertedColors={false}
      orientation="vertical"
      size="md"
      variant="outlined"
    >
      {Flight &&
        Flight.map((Flight) => {
          return (
            <div className="w-full font-mono">
              <Stack display={"flex"} direction={"row"} gap={"24px"}>
                <img
                  className="h-[120px] w-[120px] rounded-xl bg-cover object-cover"
                  src="https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg"
                />
                <div>
                  <p className=" font-medium">Economy</p>
                  <p className="mt-1 text-2xl font-semibold">
                    {Flight.aircraft}
                  </p>
                  <div className="mt-5 text-xs font-medium">
                    <RatingSize />
                  </div>
                </div>
              </Stack>
              <div className="opacity-6 my-4 h-[1px] bg-[#d2d6d2] font-medium"></div>
              <div>Your booking is protected by golobe</div>
              <div className="opacity-6 my-4 h-[1px] bg-[#d2d6d2] font-medium"></div>
              <p className="font-bold">Price Details</p>
              <div className="my-4 flex justify-between font-medium">
                <p>Base rare</p>
                <p className="font-semibold">
                  ${Flight.price_details.base_fare}
                </p>
              </div>

              <div className="my-4 flex justify-between font-medium">
                <p>Taxes</p>
                <p className="font-semibold">${Flight.price_details.taxes}</p>
              </div>
              <div className="my-4 flex justify-between font-medium">
                <p>Service fee</p>
                <p className="font-semibold">${Flight.price_details.fees}</p>
              </div>
              <div className="my-4 flex justify-between font-medium">
                <p>Passenger</p>
                <p className="font-semibold">{Passenger}</p>
              </div>
              <div className="opacity-6 my-4 h-[1px] bg-[#d2d6d2]"></div>
              <div className="my-4 flex justify-between font-medium">
                <p>Total</p>
                <p className="font-semibold">${Flight.price * Passenger}</p>
              </div>
            </div>
          );
        })}
    </Card>
  );
}
