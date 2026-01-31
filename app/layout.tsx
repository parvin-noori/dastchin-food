import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./_components/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dastchin",
  description: "dastchin food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        <Header></Header>
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
