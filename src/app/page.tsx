"use client";

import React from "react";
import { Hero } from "../components/home/Hero";
import Trip from "./destination/Trip";
import { useUser } from "@auth0/nextjs-auth0/client";
import { LottieLoader } from "@/components/loader/LottieLoader";
import { OrderLoader } from "@/components/loader/OrderLoader";

export default function Home() {
  return (
    <main>
      <Hero />
      <OrderLoader />
      <Trip />
    </main>
  );
}
