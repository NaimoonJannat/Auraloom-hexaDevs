import TopContent from "@/Components/Home/TopContent";
import TrendingContent from "@/Components/Home/TrendingContent";
import Navbar from "@/Components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <TrendingContent />
      <TopContent />
    </div>
  );
}
