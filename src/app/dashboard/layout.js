"use client";

import { useState } from "react";
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import Footer from "@/components/ui/footer";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 relative">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 flex flex-col min-w-0 md:pl-64">
          <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
