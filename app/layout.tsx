import type { Metadata } from "next";
import "./globals.css";
import { AppConfig } from "@/config/app.config";
import Header from "@/components/common/header";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan,
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
      </body>
    </html>
  );
}
