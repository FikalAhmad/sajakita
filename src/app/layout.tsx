import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const PlusJakarta = localFont({
  src: "./fonts/PlusJakartaSans-VariableFont_wght.ttf",
  variable: "--font-plus-jakarta",
  weight: "100 900",
});
import Navbar from "./components/Navbar"; // Change the import statement to use lowercase 'navbar'
import Footer from "./components/Footer";

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
        <div className="mx-5 md:mx-10 lg:mx-20">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
