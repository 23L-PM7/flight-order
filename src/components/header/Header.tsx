"use client";

import * as React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FaCar } from "react-icons/fa6";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import Avatar from "@mui/joy/Avatar";
import Button from "@mui/joy/Button";
import { Typography } from "@mui/joy";
import { Flight } from "@mui/icons-material";

export function Header() {
  const { user, error, isLoading } = useUser();
  console.log(user);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-3 font-sans font-medium md:py-4">
          <div className="flex cursor-pointer gap-[32px]">
            <Link
              href="/flightlist"
              className="flex items-center gap-2 border-b-4 border-white py-2  hover:border-b-4 hover:border-[#8DD3BB]"
              aria-label="Find Flights"
            >
              <AirplanemodeActiveIcon />
              <p>Find flight</p>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 border-b-4 border-white py-3  hover:border-b-4 hover:border-[#8DD3BB]"
              aria-label="Find Rent Cars"
            >
              <FaCar />
              <p>Find rent cars</p>
            </Link>
          </div>
          <Link href="/" className="object-cover" aria-label="Home">
            <img src="/Logo.png" alt="Company Logo" />
          </Link>
          <div className="flex items-center gap-3">
            {!user ? (
              <>
                <Button
                  href="/api/auth/login"
                  component="a"
                  variant="outlined"
                  color="neutral"
                >
                  Login
                </Button>
                <Button
                  href="/api/auth/signup"
                  component="a"
                  sx={{ color: "black" }}
                  className="hover:bg-[#8DD3BB]"
                  variant="soft"
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <Link
                href="/profile"
                className="flex items-center gap-3 rounded-md px-4 py-2 hover:bg-slate-200"
              >
                <Typography>{user.name}</Typography>
                <Avatar
                  alt={`Username ${user.name}`}
                  src={`${user.picture}`}
                  size="sm"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
