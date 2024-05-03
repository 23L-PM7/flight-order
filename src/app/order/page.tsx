import { FlightDetailsCard } from "@/components/FlightDetailsCard";
import { FlightData } from "./FlightData";
import { PriceDetails } from "@/components/PriceDetails";
import { PayCard } from "@/components/PayCard";
import { AddCard } from "@/components/AddCard";
import CardModal from "@/components/CardModal";
export default function home() {
  return (
    <div className="container mx-auto">
      <div className="flex gap-10 mt-10">
        <div className="">
          <FlightDetailsCard Flight={FlightData} />
        </div>
        <div className="">
          <PriceDetails Flight={FlightData} />
        </div>
      </div>
      <div className="w-7/12 ">
        <PayCard />
      </div>
      <div className="w-7/12 mt-10">
        <AddCard />
      </div>
    </div>
  );
}
