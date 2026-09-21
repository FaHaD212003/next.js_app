import "./globals.css";

export const metadata = {
  title: "Next.js Auth App",
  description: "Authentication with Server Actions and JWT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
