import Footer from "@/Components/Footer/Footer";
import TopContent from "@/Components/Home/TopContent";
import TrendingContent from "@/Components/Home/TrendingContent";
import Navbar from "@/Components/Navbar/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <TrendingContent></TrendingContent>
        <TopContent></TopContent>
      </div>
      <Footer></Footer>
    </div>
  );
}
