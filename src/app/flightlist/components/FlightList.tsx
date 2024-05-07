import React from 'react'
import FlightSearch from "@/app/flightlist/components/FlightSearch"
import ShowResult from './ShowResult';

const FlightList = () => {
  return (
    <div className='bg-[#FAFBFC] flex flex-col justify-center items-center'>
      <FlightSearch />
      <ShowResult />
    </div>
  )
}

export default FlightList;
