import { FlightDetailsCard } from "@/components/FlightDetailsCard";
import { FlightData } from "./FlightData";
import { PriceDetails } from "@/components/PriceDetails";
import { PayCard } from "@/components/PayCard";
import { AddCard } from "@/components/AddCard";

export default function home() {
  return (
    <div className="bg-[#fafafa]">
      <div className="container mx-auto pt-10 flex pb-[120px] gap-10">
        <div className="w-2/3 flex flex-col gap-5">
          <FlightDetailsCard Flight={FlightData} />
          <div className="drop-shadow-md bg-[#fafafa]">
            <PayCard />
          </div>
          <div className="drop-shadow-lg">
            <AddCard Flight={FlightData} />
          </div>
        </div>
        <div className="w-1/3 ">
          <PriceDetails Flight={FlightData} />
        </div>
      </div>
    </div>
  );
}
