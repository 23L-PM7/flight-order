import { Card, Stack } from "@mui/joy";
import RatingSize from "./RatingSize";

export function PriceDetails() {
  return (
    <div className="">
      <Card
        color="neutral"
        invertedColors={false}
        orientation="vertical"
        size="md"
        variant="soft"
      >
        <div className="px-8 py-4">
          <Stack
            display={"flex"}
            justifyContent={"space-between"}
            direction={"row"}
          >
            <img
              className="w-44"
              src="https://s3-alpha-sig.figma.com/img/5fa8/e842/23d243db9749cc4ddef95d4c9fdb6c59?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DQzpOYHCMs~E8km1QwLbe~5tKawBgwdwkSmWFDgwMW8dYAJXJm2cCHH4RhxDETDirAnmdgRTFzLjTQDyOw5gavc08sv~nJX4ClW5eiGvLlaMkHm0nN-rpvnm-9y5PTlRhZX4WZHAIQrzZi1ADzdmGKf6pWW7RAAq3tO13lGu7bEg91vHxmSyEoA9HvfILfqwD663QjLGdHXK3QrFQ0H3jh6MDWgCOqtsVSAvypAeDxPmPzyfW9kCcSsYipO1RA3I6qjJzvXpMySgn8sH0eg8Uxy2keky2aKn1WCJRswDu0Hb0glBmXnyVcgt0-KchtSdBvM-ZYywXXeJEK87MKJStQ__"
            />
            <div>
              <p>Economy</p>
              <p className="font-bold mb-2">Emirates A380 Airbus</p>{" "}
              <RatingSize />{" "}
            </div>
          </Stack>
          <div className="bg-black h-[1px] my-4 opacity-6"></div>
          <div>Your booking is protected by golobe</div>
          <div className="bg-black h-[1px] my-4 opacity-6"></div>
          <p className="font-bold">Price Details</p>
          <div className="flex my-2 justify-between">
            <p>Base rare</p>
            <p>$400</p>
          </div>
          <div className="flex my-2 justify-between">
            <p>Discount</p>
            <p>$400</p>
          </div>
          <div className="flex my-2 justify-between">
            <p>Taxes</p>
            <p>$400</p>
          </div>
          <div className="flex my-2 justify-between">
            <p>Service fee</p>
            <p>$400</p>
          </div>
          <div className="bg-black h-[1px] my-4 opacity-6"></div>
          <div className="flex my-2 justify-between">
            <p>Total</p>
            <p>$400</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
