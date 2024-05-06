import { FlightDetailsCard } from "@/components/FlightDetailsCard";
import { FlightData } from "./FlightData";
import { PriceDetails } from "@/components/PriceDetails";
import { PayCard } from "@/components/PayCard";
import { AddCard } from "@/components/AddCard";
import CardModal from "@/components/CardModal";
export default function home() {
  return (
    <div className="bg-[#fafafa]">
      <div className="container mx-auto pt-[94px] pb-[120px]">
        <div className="flex justify-between">
          <FlightDetailsCard Flight={FlightData} />
          <PriceDetails Flight={FlightData} />
        </div>
        <div className="w-[900px] bg-white shadow-xl">
          <PayCard />
        </div>
        <div className="w-[900px] mt-10 bg-white shadow-xl">
          <AddCard />
        </div>
      </div>
    </div>
  );
}
