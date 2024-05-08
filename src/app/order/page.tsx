import { FlightDetailsCard } from "@/components/FlightDetailsCard";
import { FlightData } from "./FlightData";
import { PriceDetails } from "@/components/PriceDetails";
import { PayCard } from "@/components/PayCard";
import { AddCard } from "@/components/AddCard";

export default function home() {
  return (
    <div className="">
      <div className="container mx-auto flex pt-[94px] pb-[120px] gap-10 ">
        <div className="w-2/3 flex flex-col drop-shadow-md gap-[50px] bg-[#fafafa]">
          <FlightDetailsCard Flight={FlightData} />
          <PayCard />
          <AddCard />
        </div>
        <div className="w-1/3 ">
          <PriceDetails Flight={FlightData} />
        </div>
      </div>
    </div>
  );
}
