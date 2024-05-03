"use client";

import { Header } from "../components/header/Header";
import { Hero } from "../components/home/Hero";
import { FindFlight } from "../components/home/FindFlight";

export default function Home() {
  return (
    <main className="bg-[#FAFBFC] relative">
      <Header />
      <Hero />
      <div className=" absolute top-[80%] left-[17%]">
        <FindFlight />
      </div>
    </main>
  );
}
