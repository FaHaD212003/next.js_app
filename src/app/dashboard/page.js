import { redirect } from "next/navigation";
import { getSession } from "@/actions/auth";
import SignOutButton from "@/components/SignOutButton";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-muted/30">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8 space-y-6">
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-card-foreground">
            Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Authenticated via Server Actions & JWT
          </p>
        </div>

        <div className="space-y-3 rounded-lg border border-border p-4 bg-background">
          <div>
            <span className="text-xs text-muted-foreground block">Name</span>
            <span className="text-sm font-medium text-foreground">
              {session.name}
            </span>
          </div>
          <div className="border-t border-border pt-2">
            <span className="text-xs text-muted-foreground block">Email</span>
            <span className="text-sm font-medium text-foreground">
              {session.email}
            </span>
          </div>
          <div className="border-t border-border pt-2">
            <span className="text-xs text-muted-foreground block">Role</span>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              {session.role || "user"}
            </span>
          </div>
        </div>

        <SignOutButton />
      </div>
    </div>
  );
}
