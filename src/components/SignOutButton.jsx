"use client";

import { logoutUser } from "@/actions/auth";
import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    await logoutUser();
  };

  return (
    <Button
      type="button"
      variant="destructive"
      className="w-full"
      onClick={handleLogout}
    >
      Sign Out
    </Button>
  );
}
