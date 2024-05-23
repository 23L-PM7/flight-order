"use client";

import React from "react";
import { Suspense } from "react";

import FlightList from "./components/FlightList";

export default function Home() {
  return (
    <Suspense>
      <FlightList />
    </Suspense>
  );
}
