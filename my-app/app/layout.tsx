import "./globals.css";
import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chrinsley James | Full-Stack & AI Developer",
  description:
    "Portfolio of Cocotte Chrinsley James — Software Engineering Student focused on full-stack development and AI / ML.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-surface text-white font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
