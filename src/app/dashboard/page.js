"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-muted/30">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8 space-y-6">
        <div className="text-center space-y-2">
          {session?.user?.image && (
            <img
              src={session.user.image}
              alt={session.user.name || "User"}
              className="w-16 h-16 rounded-full mx-auto border border-border object-cover"
            />
          )}
          <h1 className="text-2xl font-bold tracking-tight text-card-foreground">
            Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Authenticated via NextAuth & JWT
          </p>
        </div>

        <div className="space-y-3 rounded-lg border border-border p-4 bg-background">
          <div>
            <span className="text-xs text-muted-foreground block">Name</span>
            <span className="text-sm font-medium text-foreground">
              {session?.user?.name || "Loading..."}
            </span>
          </div>
          <div className="border-t border-border pt-2">
            <span className="text-xs text-muted-foreground block">Email</span>
            <span className="text-sm font-medium text-foreground">
              {session?.user?.email || "Loading..."}
            </span>
          </div>
          <div className="border-t border-border pt-2">
            <span className="text-xs text-muted-foreground block">Role</span>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              {session?.user?.role || "user"}
            </span>
          </div>
        </div>

        <Button
          type="button"
          variant="destructive"
          className="w-full"
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}
