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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${arvo.variable} ${lato.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={lato.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
