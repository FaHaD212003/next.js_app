import { Arvo, Lato } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

const arvo = Arvo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-arvo",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Next.js Auth App",
  description: "Authentication with NextAuth and MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${arvo.variable} ${lato.variable}`}>
      <body className={lato.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
