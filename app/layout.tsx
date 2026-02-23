import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Footer from "./_components/footer";
import Header from "./_components/header";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "700"],
  variable: "--font-vazirmatn",
});

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
    <html lang="fa" dir="rtl">
      <body className={`${vazir.className}  antialiased bg-gray-100`}>
        <ToastContainer autoClose={8000} closeButton={false} />
        <Header />
        <div className="container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
