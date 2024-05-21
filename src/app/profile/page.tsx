"use client";
// pages/profile.js

import { useState } from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const { user, isLoading } = useUser();
  console.log(user);
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br p-6">
      <div className="w-full max-w-md transform rounded-lg bg-white p-8 shadow-2xl transition-transform hover:scale-105">
        <div className="mb-6 flex justify-center">
          <div className="relative h-24 w-24">
            <img
              src={`${user?.picture}`}
              alt="Profile Picture"
              className="rounded-full"
            />
          </div>
        </div>
        <h2 className="mb-2 text-center text-3xl font-bold">{user?.name}</h2>
        <p className="mb-4 text-center text-gray-600">{user?.email}</p>
        <div className="mb-6 flex justify-center">
          <a
            href="/api/auth/logout"
            className="rounded-lg px-6 py-4 hover:bg-black hover:text-white"
          >
            Log Out
          </a>
          <a
            href="/ticket"
            className="rounded-lg px-6 py-4 hover:bg-black hover:text-white"
          >
            Your Ticket
          </a>
        </div>
      </div>
    </div>
  );
}
