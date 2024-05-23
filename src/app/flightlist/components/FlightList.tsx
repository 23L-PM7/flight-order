import React, { Suspense, useEffect, useState } from "react";
import FlightSearch from "@/app/flightlist/components/FlightSearch";
import ShowResult from "./ShowResult";
import { useRouter, useSearchParams } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";
import {
  Passengers,
  passengersQuantityStore,
} from "@/components/home/Passengers";

const FlightList = () => {
  const [flightInfo, setFlightInfo]: any = useState<any[]>([]);

  const searchParams = useSearchParams();
  const router = useRouter();

  const country = searchParams.get("fromTo");

  const trip = searchParams.get("trip");

  // const [trip, setTrip] = React.useState<string | null>(initialTrip);
  const initialStartDate = searchParams.get("startDate");
  const initialEndDate = searchParams.get("endDate");
  const economy = searchParams.get("class");
  const initialAdultQuantity = searchParams.get("adultQuantity");
  const initialChildQuantity = searchParams.get("childQuantity");
  const initialInfantQuantity = searchParams.get("infantQuantity");

  const [value, setValue] = React.useState<[Dayjs, Dayjs]>([
    dayjs(initialStartDate),
    dayjs(initialEndDate),
  ]);
  const startDate = value[0].format("YYYY-MM-DD");
  const endDate = value[1].format("YYYY-MM-DD");

  const {
    adultQuantity,
    setAdultQuantity,
    childQuantity,
    setChildQuantity,
    infantQuantity,
    setInfantQuantity,
  } = passengersQuantityStore();


  const params = new URLSearchParams({
    fromTo: country || "",
    trip: trip || "",
    startDate: startDate || "",
    endDate: endDate || "",
    class: economy || "",
    adultQuantity: adultQuantity.toString(),
    childQuantity: childQuantity.toString(),
    infantQuantity: infantQuantity.toString(),
  }).toString();

  console.log(params)

  useEffect(() => {
    console.log("---------------")
    const getFlightData = async () => {
      try {
        const response = await fetch(`/api/flightDatas?${params}`);
        if (!response.ok) {
          throw new Error("Failed to fetch flight information");
        }
        const data = await response.json();
        setFlightInfo(data);
      } catch (error) {
        console.error("Error fetching flight information:", error);
      }
    };

    getFlightData();

    return () => { };
  }, [params]);

  return (
    <Suspense>
      <div className="flex flex-col items-center justify-center bg-[#FAFBFC]">
        <FlightSearch />
        <ShowResult flightInfo={flightInfo} />
      </div>
    </Suspense>
  );
};

export default FlightList;
