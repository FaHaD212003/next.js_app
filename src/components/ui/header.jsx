"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Menu, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-30 h-16 w-full border-b border-border bg-card/95 backdrop-blur px-4 md:px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
            E
          </div>
          <span className="font-bold text-lg text-foreground tracking-tight hidden sm:inline-block">
            Commerce
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <ThemeToggle />

        <div className="flex items-center gap-2.5">
          {session?.user?.image ? (
            <img
              src={session.user.image}
              alt={session.user.name || "User"}
              className="w-8 h-8 rounded-full border border-border object-cover"
            />
          ) : (
            <div className="w-8 h-8 rounded-full border border-border bg-muted flex items-center justify-center text-muted-foreground">
              <User className="w-4 h-4" />
            </div>
          )}

          <div className="hidden sm:block text-left leading-tight">
            <p className="text-sm font-medium text-foreground truncate max-w-[140px]">
              {session?.user?.name || "User"}
            </p>
            <p className="text-xs text-muted-foreground truncate max-w-[140px]">
              {session?.user?.email}
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="gap-1.5 text-xs text-muted-foreground hover:text-destructive hover:border-destructive/30"
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          <LogOut className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Sign Out</span>
        </Button>
      </div>
    </header>
  );
}
