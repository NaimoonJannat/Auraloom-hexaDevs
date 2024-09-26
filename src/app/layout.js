import localFont from "next/font/local";
import "./globals.css";

import TopContent from "@/components/TopContent";
import TrendingContent from "@/components/TrendingContent";

import AuthProvider from "@/Components/Provider/AuthProvider/AuthProvider";


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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <TrendingContent />
        <TopContent />
        {children}

        <AuthProvider>
          {children}
        </AuthProvider>

      </body>
    </html>
  );
}
