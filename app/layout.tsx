import Header from "@/components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Header />
         {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
