"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Profile
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage your account information
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 shadow-xs space-y-4">
        <div>
          <span className="text-xs text-muted-foreground block font-medium">
            Name
          </span>
          <span className="text-sm font-semibold text-foreground mt-1 block">
            {session?.user?.name || "Loading..."}
          </span>
        </div>
        <div className="border-t border-border pt-4">
          <span className="text-xs text-muted-foreground block font-medium">
            Email
          </span>
          <span className="text-sm font-semibold text-foreground mt-1 block">
            {session?.user?.email || "Loading..."}
          </span>
        </div>
      </div>
    </div>
  );
}
