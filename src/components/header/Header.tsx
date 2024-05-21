"use client";

import { FaCar } from "react-icons/fa6";
import { Flight } from "../icons/Flight";
import * as React from "react";
import Link from "next/link";
import { Avatar } from "@mui/material";
import { useUser } from "@auth0/nextjs-auth0/client";
import { CircularProgress } from "@mui/joy";

export function Header() {
  const { user, error, isLoading } = useUser();
  console.log(user);

  return (
    <div className="bg-white">
      <div className="container mx-auto flex items-center justify-between font-sans font-medium ">
        <div className="flex cursor-pointer gap-[32px]">
          <Link
            href={"/"}
            className="flex items-center gap-1 py-[27px] hover:border-b-4 hover:border-[#8DD3BB]"
          >
            <Flight />
            <div>Find flight</div>
          </Link>
          <div className="flex items-center gap-1 py-[27px] hover:border-b-4 hover:border-[#8DD3BB]">
            <FaCar />
            <div>Find rentcars</div>
          </div>
        </div>
        <Link href={"/"} className="object-cover py-[27px]">
          <img src="/Logo.png" alt="logo" />
        </Link>
        <div className="flex items-center gap-2 py-[27px]">
          {!user && (
            <a
              href="/api/auth/login"
              className="rounded-lg px-6 py-4 hover:bg-black hover:text-white"
            >
              Login
            </a>
          )}

          <a
            href="/ticket"
            className="rounded-lg px-3 py-2 hover:bg-black hover:text-white"
          >
            Your Ticket
          </a>
          <a href="/profile">
            {user && <Avatar alt="Remy Sharp" src={`${user.picture}`} />}
          </a>
        </div>
      </div>
    </div>
  );
}
