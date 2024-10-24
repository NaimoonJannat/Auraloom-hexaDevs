import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "@/Components/Provider/AuthProvider/AuthProvider";

import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import { Suspense } from "react";

import ClientLayout from "./ClientLayout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Auraloom",
  description: "Generated by Team HexaDevs",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>

        <Suspense fallback={<div>Loading podcasts...</div>}>
            <Navbar />
        </Suspense>

          <ClientLayout>
            {children}
          </ClientLayout>
 <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
export default RootLayout;