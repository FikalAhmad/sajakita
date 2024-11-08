import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const PlusJakarta = localFont({
  src: "./fonts/PlusJakartaSans-VariableFont_wght.ttf",
  variable: "--font-plus-jakarta",
  weight: "100 900",
});
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Sajakita",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PlusJakarta.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
