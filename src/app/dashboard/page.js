"use client";

import { useSession } from "next-auth/react";
import Hero from "@/components/ui/hero";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      <Hero />
    </div>
  );
}
