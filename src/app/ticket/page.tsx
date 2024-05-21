"use client";

import { TermsAndConditions } from "./components/TermsAndConditions";
import Ticket2 from "./components/Ticket2";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <p className=" mt-5 text-2xl font-bold">Your Ticket</p>
        <Ticket2 />
        <TermsAndConditions />
      </div>
    </>
  );
}
