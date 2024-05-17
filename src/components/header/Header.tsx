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
      <div className="container mx-auto font-medium font-sans flex justify-between items-center ">
        <div className="flex gap-[32px] cursor-pointer">
          <Link
            href={"/"}
            className="flex py-[27px] items-center gap-1 hover:border-b-4 hover:border-[#8DD3BB]"
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
              className="py-4 px-6 rounded-lg hover:bg-black hover:text-white"
            >
              Login
            </a>
          )}
          {/* <a
            href="/api/auth/logout"
            className="py-4 px-6 rounded-lg hover:bg-black hover:text-white"
          >
            Log Out
          </a> */}
          <a
            href="/ticket"
            className="py-2 px-3 rounded-lg hover:bg-black hover:text-white"
          >
            Your Ticket
          </a>
          <a>{user && <Avatar alt="Remy Sharp" src={`${user.picture}`} />}</a>
        </div>
      </div>
    </div>
  );
}
