import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./interactive.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vini Berger | Software Developer — Backend & Full-Stack",
  description:
    "Portfolio of Vini Berger, a Calgary software developer focused on backend APIs and full-stack applications using Go, TypeScript, React, NestJS, PostgreSQL, testing, and CI/CD.",
  metadataBase: new URL("https://viniciusbergerportifolio.vercel.app"),
  openGraph: {
    title: "Vini Berger | Software Developer — Backend & Full-Stack",
    description: "Backend APIs, full-stack applications, secure business workflows, and tested delivery.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
