"use client";
import React from "react";

import { Hero } from "../components/home/Hero";
import Trip from "./destination/Trip";
import { useUser } from "@auth0/nextjs-auth0/client";
export default function Home() {
  const { user, error, isLoading } = useUser();

  console.log(user);
  return (
    <main>
      <Hero />
      <Trip />
    </main>
  );
}
