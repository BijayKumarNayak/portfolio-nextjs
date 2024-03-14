import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body >
        <Navbar />
    
        {children}</body>
    </html>
  );
}