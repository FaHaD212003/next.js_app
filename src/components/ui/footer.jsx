import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card py-4 px-4 md:px-6 mt-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} NextApp. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/dashboard" className="hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link href="/dashboard" className="hover:text-foreground transition-colors">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}