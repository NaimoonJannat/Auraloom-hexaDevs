import Banner1 from "@/Components/Banners/Banner1";
import Banner2 from "@/Components/Banners/Banner2";
import Footer from "@/Components/Footer/Footer";
import TopContent from "@/Components/Home/TopContent";
import TrendingContent from "@/Components/Home/TrendingContent";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <Banner2></Banner2>
        <TrendingContent></TrendingContent>
        <Banner1></Banner1>
        <TopContent></TopContent>
      </div>
      <Footer></Footer>
    </div>
  );
}
