import type { Metadata } from "next";
import "./globals.css";
// import { AppConfig } from "@/config/app.config";
import Header from "@/components/common/header";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Notary Nexus",
  description: "Notary Nexus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
