"use client";

import Header from "@/components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import React from "react";
import NextTopLoader from "nextjs-toploader";
import { SessionProvider } from "next-auth/react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="4itmoiUB049oQ9RalavHA_d9122esgKQOlaPYm1XGSI"
      />
      <body>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={1000}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <SessionProvider>
          <Header />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
