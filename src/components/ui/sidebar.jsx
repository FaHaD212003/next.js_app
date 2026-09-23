"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, User, X } from "lucide-react";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Profile", href: "/dashboard/profile", icon: User },
  ];

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-card border-r border-border p-4 transition-transform duration-300 md:top-16 md:z-20 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between pb-4 md:hidden border-b border-border">
          <span className="font-bold text-foreground">Menu</span>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="p-1 rounded-md text-muted-foreground hover:bg-accent"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="space-y-1 mt-2">
          {navItems.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
