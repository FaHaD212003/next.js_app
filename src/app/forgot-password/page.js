"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post("/api/forgot-password", { email });
      setMessage(res.data?.message || "Reset link sent!");
      setLoading(false);
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again.",
      );
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4 bg-muted/30">
      <div className="w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <form onSubmit={handleSubmit}>
          <FieldSet>
            <div className="text-center space-y-1 mb-2">
              <h1 className="text-2xl font-bold tracking-tight text-card-foreground">
                Forgot Password
              </h1>
              <FieldDescription>
                Enter your email address to receive a password reset link
              </FieldDescription>
            </div>

            {message && (
              <div className="rounded-lg bg-emerald-500/10 p-3 text-sm text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {message}
              </div>
            )}

            {error && (
              <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive border border-destructive/20">
                {error}
              </div>
            )}

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

              <Button type="submit" className="w-full mt-2" disabled={loading}>
                {loading ? "Sending..." : "Send Reset Link"}
              </Button>
            </FieldGroup>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Remember your password?{" "}
              <Link
                href="/login"
                className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
              >
                Back to login
              </Link>
            </p>
          </FieldSet>
        </form>
      </div>
    </div>
  );
}
