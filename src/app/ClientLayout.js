"use client"; 

import { usePathname } from "next/navigation"; 
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import { Suspense } from "react";


const ClientLayout = ({ children }) => {
  const pathname = usePathname();

  const hideNavbarFooterPaths = ['/dashboard']; 

  return (
    <>
      {!hideNavbarFooterPaths.includes(pathname) && <Suspense> <Navbar /> </Suspense>}
      {children}
      {!hideNavbarFooterPaths.includes(pathname) && <Footer />}
    </>
  );
};

export default ClientLayout;
