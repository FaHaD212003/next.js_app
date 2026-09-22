import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Next.js Auth App",
  description: "Authentication with NextAuth and MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
