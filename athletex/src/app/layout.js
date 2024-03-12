import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer.jsx";
// import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AtheleteX",
  description: "Community for Athelete's ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
