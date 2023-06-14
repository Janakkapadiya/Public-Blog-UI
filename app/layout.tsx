"use client";
import Header from "@/components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import NextNProgress from "nextjs-progressbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="4itmoiUB049oQ9RalavHA_d9122esgKQOlaPYm1XGSI"
      />
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
