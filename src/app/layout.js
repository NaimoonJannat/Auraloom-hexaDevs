import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "@/Components/Provider/AuthProvider/AuthProvider";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Head from "next/head";  // Ensure the Head component is imported

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Auraloom</title>
        <meta name="description" content="Generated by Team HexaDevs" />
        <link rel="icon" href="/auraloom-logo.png" type="image/png" />
  {/* <link rel="apple-touch-icon" sizes="180x180" href="./auraloom-logo.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="./auraloom-logo.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="./auraloom-logo.png" /> */}
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
