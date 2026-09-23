"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError(res.error);
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="text-gray-800 flex min-h-screen w-full items-center justify-center p-4 bg-muted/30">
      <div className="text-gray-800 w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <form onSubmit={handleSubmit}>
          <FieldSet>
            <div className="text-center space-y-1.5 mb-1 mt-1">
              <h1 className="text-2xl font-bold tracking-tight text-card-foreground">
                Login
              </h1>
              <FieldDescription className="text-gray-800 text-center">
                Enter your credentials to access your account
              </FieldDescription>
              {error && (
                <div className="text-center rounded-lg  mt-1 bg-destructive/10 p-2 text-sm text-destructive border border-destructive/20">
                  {error}
                </div>
              )}
            </div>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </Field>

              <Field>
                <div className="flex flex-row justify-between">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Link
                    href="/forgot-password"
                    className="text-gray-700 text-xs text-right text-muted-foreground hover:text-primary underline underline-offset-4"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </Field>

              <Button type="submit" className="w-full h-10 mt-2" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </FieldGroup>

            <div className="relative my-2 text-center text-xs after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
              <span className="text-gray-700 relative z-10 bg-card px-2 ">
                Or continue with
              </span>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full h-10 gap-2"
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            >
              <img
                src="/google.png"
                alt="Google Logo"
                className="w-4 h-4 object-contain"
              />
              Continue with Google
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
              >
                Sign up
              </Link>
            </p>
          </FieldSet>
        </form>
      </div>
    </div>
  );
}
