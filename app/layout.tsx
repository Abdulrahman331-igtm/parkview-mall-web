import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer"; 
import Navbar from "@/components/navbar"; // Importing the new Navbar!

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parkview Mall | Premium Experience",
  description: "Discover shopping, dining, and premium services at Parkview Mall, Nairobi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased flex flex-col min-h-screen`}>
        
        {/* Our new dynamic Navbar */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="pt-20 flex-grow">
          {children}
        </div>

        {/* GLOBAL FOOTER */}
        <Footer />

      </body>
    </html>
  );
}