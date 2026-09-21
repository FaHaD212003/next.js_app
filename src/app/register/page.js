"use client";

import { useState } from "react";
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
import { registerUser } from "@/actions/auth";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const res = await registerUser(formData);

    if (res?.error) {
      setError(res.error);
      setLoading(false);
    } else {
      if (res?.token) {
        localStorage.setItem("token", res.token);
      }
      if (res?.user) {
        localStorage.setItem("user", JSON.stringify(res.user));
      }
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4 bg-muted/30">
      <div className="w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <form onSubmit={handleSubmit}>
          <FieldSet>
            <div className="text-center space-y-1 mb-2">
              <h1 className="text-2xl font-bold tracking-tight text-card-foreground">
                Create an account
              </h1>
              <FieldDescription>
                Enter your details below to create your account
              </FieldDescription>
            </div>

            {error && (
              <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive border border-destructive/20">
                {error}
              </div>
            )}

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  disabled={loading}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  disabled={loading}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  disabled={loading}
                />
                <FieldDescription>
                  Must be at least 6 characters long.
                </FieldDescription>
              </Field>

              <Button type="submit" className="w-full mt-2" disabled={loading}>
                {loading ? "Creating account..." : "Sign Up"}
              </Button>
            </FieldGroup>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
              >
                Login
              </Link>
            </p>
          </FieldSet>
        </form>
      </div>
    </div>
  );
}
