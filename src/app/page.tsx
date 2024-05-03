"use client";

import { Header } from "@/components/header/Header";
import { Hero } from "../components/home/Hero";
import Trip from "./destination/Trip";

export default function Home() {
  return (
    <main className="bg-[#FAFBFC]">
      <Hero />
      <Trip />
    </main>
  );
}
