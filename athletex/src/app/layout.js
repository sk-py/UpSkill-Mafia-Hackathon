"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer.jsx";
import { usePathname } from "next/navigation";
import { metadata } from "./Utils/MetaDeta";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        {path !== "/login" && <Navbar />}
        {children}
        {path !== "/login" && <Footer />}
      </body>
    </html>
  );
}
