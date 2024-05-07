import { FaCar } from "react-icons/fa6";
import { Flight } from "../icons/Flight";
import * as React from "react";
import Link from "next/link";

export function Header() {
  return (
    <div className="container mx-auto font-medium font-sans flex justify-between items-center">
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
        <button className="py-4 px-6 rounded-lg hover:bg-black hover:text-white">
          Login
        </button>
        <button className="p-4 px-6 rounded-lg hover:bg-black hover:text-white">
          Sign up
        </button>
      </div>
    </div>
  );
}