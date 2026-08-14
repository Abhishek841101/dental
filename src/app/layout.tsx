import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "DentalCare | Modern Dental Clinic",
  description:
    "Professional dental care, experienced doctors and easy online appointment booking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-[#1A1A1A] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}