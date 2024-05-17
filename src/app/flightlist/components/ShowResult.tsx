import FlightInfo from "./kekw/FlightInfo";
import Recommended from "./kekw/Recommended";
import Soort from "./kekw/Soort";
import React, { useEffect, useState } from "react";

interface Props {
  flightInfo:any;
}

const ShowResult = (props:Props) => {
 
  const { flightInfo } = props

  // function filter() {
  //   let allList = flightInfo || []
  //   if(bigState.from != null && bigState.from != undefined && bigState.from != '') {
  //     allList = allList.filter(x => x.from === bigState.from)
  //   }

  //   if(bigState.to != null && bigState.to != undefined && bigState.to != '') {
  //     allList = allList.filter(x => x.to === bigState.to)
  //   }
  //   return allList
  // }

  return (
    <div className="w-10/12 flex gap-2 mt-[40px] bg-[#FAFBFC]">
      <div className="w-[500px] bg-cyan-100"></div>
      <div className="w-full flex flex-col gap-6">
        <Soort />
        <Recommended />
        {
          flightInfo.length <= 0 ? <p>Loading flight information...</p> :
          <>
           {
              flightInfo.map((data, idx) => {
                return <FlightInfo key={`data-${idx}`} data={data}/>
              })
            }
          </>
        }
        {/* <FlightInfo /> */}
      </div>
    </div>
  );
};

export default ShowResult;
