import { Card, Stack } from "@mui/joy";
import RatingSize from "./RatingSize";
import React, { Suspense } from "react";

export function PriceDetails({ Flight, Passenger }: any) {
  return (

    <Suspense>
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
                    src="https://s3-alpha-sig.figma.com/img/5fa8/e842/23d243db9749cc4ddef95d4c9fdb6c59?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DQzpOYHCMs~E8km1QwLbe~5tKawBgwdwkSmWFDgwMW8dYAJXJm2cCHH4RhxDETDirAnmdgRTFzLjTQDyOw5gavc08sv~nJX4ClW5eiGvLlaMkHm0nN-rpvnm-9y5PTlRhZX4WZHAIQrzZi1ADzdmGKf6pWW7RAAq3tO13lGu7bEg91vHxmSyEoA9HvfILfqwD663QjLGdHXK3QrFQ0H3jh6MDWgCOqtsVSAvypAeDxPmPzyfW9kCcSsYipO1RA3I6qjJzvXpMySgn8sH0eg8Uxy2keky2aKn1WCJRswDu0Hb0glBmXnyVcgt0-KchtSdBvM-ZYywXXeJEK87MKJStQ__"
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
    </Suspense>
  );
}
