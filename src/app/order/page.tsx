import { FlightDetailsCard } from "@/components/FlightDetailsCard";
import { FlightData } from "./FlightData";
import { PriceDetails } from "@/components/PriceDetails";
import { PayCard } from "@/components/PayCard";
import { AddCard } from "@/components/AddCard";
import CardModal from "@/components/CardModal";
export default function home() {
  return (
    <div className="bg-[#fafafa]">
      <div className="container mx-auto flex pt-[94px] pb-[120px] gap-10">
        <div className="w-2/3 flex flex-col bg-white drop-shadow-lg gap-[40px]">
          <FlightDetailsCard Flight={FlightData} />
          <div className="drop-shadow-lg">
            <PayCard />
          </div>
          <div className="drop-shadow-lg">
            <AddCard />
          </div>
        </div>
        <div className="w-1/3">
          <PriceDetails Flight={FlightData} />
        </div>
      </div>
    </div>
  );
}
