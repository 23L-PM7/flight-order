"use client";

import AdminDashboard from "./AdminDashboard";
import Dashboard from "./Dashboard";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto mt-8 flex justify-end">
        <AdminDashboard />
      </div>
      <div className="container mx-auto mt-8">
        <Dashboard />
      </div>
    </div>
  );
}
