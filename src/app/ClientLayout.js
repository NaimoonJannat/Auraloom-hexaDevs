"use client"; 

import { usePathname } from "next/navigation"; 
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";


const ClientLayout = ({ children }) => {
  const pathname = usePathname();

  const hideNavbarFooterPaths = ['/dashboard']; 

  return (
    <>
      {!hideNavbarFooterPaths.includes(pathname) && <Navbar />}
      {children}
      {!hideNavbarFooterPaths.includes(pathname) && <Footer />}
    </>
  );
};

export default ClientLayout;
