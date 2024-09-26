import Navbar from "@/Components/Navbar/Navbar";
import TopContent from "@/Components/TopContent";
import TrendingContent from "@/Components/TrendingContent";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <TrendingContent />
      <TopContent />
    </div>
  );
}
