"use client";
import Header from "@/components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import NextNProgress from "nextjs-progressbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <NextNProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
