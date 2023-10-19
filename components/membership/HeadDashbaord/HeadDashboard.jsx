"use client";

import { useFakeLogin } from "@/zustand/useFakeLogin";

export default function HeadDashboard() {
  const { data: user } = useFakeLogin();

  return (
    <div className="space-y-2 mb-14">
      <h1 className="text-4xl mb-6">Dashboard</h1>
      <p>Halo {user?.fullname},</p>
      <p>Selamat datang di dashboard</p>
    </div>
  );
}
