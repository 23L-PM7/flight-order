import { WeatherLoader } from "@/components/loader/WeatherLoader";
import FlightInfo from "./kekw/FlightInfo";
import Recommended from "./kekw/Recommended";
import Soort from "./kekw/Soort";
import React, { useEffect, useState } from "react";
import Skeleton from "@mui/joy/Skeleton";

interface Props {
  flightInfo: any;
}

const ShowResult = (props: Props) => {
  const { flightInfo } = props;

  return (
    <div className="mt-[40px] flex w-10/12 gap-2 bg-[#FAFBFC]">
      <WeatherLoader />
      <div className="flex w-full flex-col gap-6">
        <Soort />
        <Recommended />
        {flightInfo.length <= 0 ? (
          <p>Loading flight information...</p>
        ) : (
          <>
            {flightInfo.map((data, idx) => {
              return <FlightInfo key={`data-${idx}`} data={data} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default ShowResult;
