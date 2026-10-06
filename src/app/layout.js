import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vini Berger | Full-Stack Software Developer",
  description:
    "Portfolio of Vini Berger, a full-stack software developer building production web applications, APIs, integrations, and business systems.",
  metadataBase: new URL("https://viniciusbergerportifolio.vercel.app"),
  openGraph: {
    title: "Vini Berger | Full-Stack Software Developer",
    description: "Production web applications, APIs, integrations, and business systems.",
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
