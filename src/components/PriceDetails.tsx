import { Card, Stack } from "@mui/joy";
import RatingSize from "./RatingSize";
import React from "react";

export function PriceDetails({ Flight }: any) {
  return (
    <Card
      color="neutral"
      invertedColors={false}
      orientation="vertical"
      size="md"
      variant="plain"
    >
      <div className="p-6 shadow-lg bg-white font-mono w-[450px]">
        <Stack display={"flex"} direction={"row"} gap={"24px"}>
          <img
            className="w-[120px] h-[120px] rounded-xl bg-cover"
            src="https://s3-alpha-sig.figma.com/img/5fa8/e842/23d243db9749cc4ddef95d4c9fdb6c59?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DQzpOYHCMs~E8km1QwLbe~5tKawBgwdwkSmWFDgwMW8dYAJXJm2cCHH4RhxDETDirAnmdgRTFzLjTQDyOw5gavc08sv~nJX4ClW5eiGvLlaMkHm0nN-rpvnm-9y5PTlRhZX4WZHAIQrzZi1ADzdmGKf6pWW7RAAq3tO13lGu7bEg91vHxmSyEoA9HvfILfqwD663QjLGdHXK3QrFQ0H3jh6MDWgCOqtsVSAvypAeDxPmPzyfW9kCcSsYipO1RA3I6qjJzvXpMySgn8sH0eg8Uxy2keky2aKn1WCJRswDu0Hb0glBmXnyVcgt0-KchtSdBvM-ZYywXXeJEK87MKJStQ__"
          />
          <div>
            <p className=" font-medium">Economy</p>
            <p className="font-semibold text-2xl mt-1">{Flight.aircraft}</p>
            <div className="text-xs font-medium mt-5">
              <RatingSize />
            </div>
          </div>
        </Stack>
        <div className="bg-[#d2d6d2] font-medium h-[1px] my-4 opacity-6"></div>
        <div>Your booking is protected by golobe</div>
        <div className="bg-[#d2d6d2] font-medium h-[1px] my-4 opacity-6"></div>
        <p className="font-bold">Price Details</p>
        <div className="flex font-medium my-4 justify-between">
          <p>Base rare</p>
          <p className="font-semibold">${Flight.price_details.base_fare}</p>
        </div>

        <div className="flex my-4 font-medium justify-between">
          <p>Taxes</p>
          <p className="font-semibold">${Flight.price_details.taxes}</p>
        </div>
        <div className="flex my-4 font-medium justify-between">
          <p>Service fee</p>
          <p className="font-semibold">${Flight.price_details.fees}</p>
        </div>
        <div className="bg-[#d2d6d2] h-[1px] my-4 opacity-6"></div>
        <div className="flex my-4 font-medium justify-between">
          <p>Total</p>
          <p className="font-semibold">${Flight.price}</p>
        </div>
      </div>
    </Card>
  );
}
