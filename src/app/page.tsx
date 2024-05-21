"use client";

import { Hero } from "../components/home/Hero";
import Trip from "./destination/Trip";
import { useUser } from "@auth0/nextjs-auth0/client";
export default function Home() {
  return (
    <main>
      <Hero />
      <Trip />
    </main>
  );
}
