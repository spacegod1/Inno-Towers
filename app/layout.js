import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AOSInit from "./components/aos";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Inno Towers",
  description: "Luxury in the heart of Tse Addo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AOSInit />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
