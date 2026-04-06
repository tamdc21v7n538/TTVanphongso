import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./context/AppContext";
import Image from "next/image";
import AuthProvider from "../components/AuthProvider"; 
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Văn phòng số",
  description: "Hệ thống quản lý nội bộ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}>
        
        {/* Lớp nền Background */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/bg.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
        </div>

       
        <AuthProvider>
          <AppProvider>
          
            <Navbar /> 

            <main className="relative z-10">
              {children}
            </main>
          </AppProvider>
        </AuthProvider>

      </body>
    </html>
  );
}