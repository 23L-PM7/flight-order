import React, { useEffect, useState } from 'react'
import FlightSearch from "@/app/flightlist/components/FlightSearch"
import ShowResult from './ShowResult';

const FlightList = () => {
   const [flightInfo, setFlightInfo]: any = useState<any[]>([]);

  // useEffect(() => {
  //   const getFlightData = async () => {
  //     try {
  //       const response = await fetch("/api/flightDatas");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch flight information");
  //       }
        
  //       const data = await response.json();
  //       console.log("data ==>", data)
  //       setFlightInfo(data);
  //     } catch (error) {
  //       console.error("Error fetching flight information:", error);
  //     }
  //   };

  //   getFlightData();

  //   return () => {};
  // }, []);

  useEffect(() => {
    const getFlightData = async () => {
      try {
        const response = await fetch("/api/flightDatas");
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

    return () => {};
  }, []);

  return (
    <div className='bg-[#FAFBFC] flex flex-col justify-center items-center'>
      <FlightSearch />
      <ShowResult flightInfo={flightInfo}/>
    </div>
  )
}

export default FlightList;
