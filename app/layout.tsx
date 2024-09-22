import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ['latin'] })
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Ezz Mohamed",
  description: "Made with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
