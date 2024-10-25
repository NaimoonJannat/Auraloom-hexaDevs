"use client"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname } from "next/navigation"; 
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import { Suspense } from "react";


const ClientLayout = ({ children }) => {
  const pathname = usePathname();
  const queryClient = new QueryClient()
  const hideNavbarFooterPaths = ['/dashboard']; 

  return (
    <>
       <QueryClientProvider client={queryClient}>
      {!hideNavbarFooterPaths.includes(pathname) && <Suspense> <Navbar /> </Suspense>}
      {children}
      {!hideNavbarFooterPaths.includes(pathname) && <Footer />}
      </QueryClientProvider>
    </>
  );
};

export default ClientLayout;
