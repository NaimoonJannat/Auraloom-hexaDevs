export const dynamic = "force-dynamic";
import Banner1 from "@/Components/Banners/Banner1";
import Banner2 from "@/Components/Banners/Banner2";
import CategorySelector from "@/Components/category-selector/CategorySelector";
import Newsletter from "@/Components/Home/Newsletter";
import TopCreator from "@/Components/Home/TopContent";
import TrendingContent from "@/Components/Home/TopCreator";
import TrendingTopic from "@/Components/Home/TrendingTopic";

export default function Home() {
  return (
    <div>
      <Banner2></Banner2>
      <div className="container mx-auto">
        <TrendingTopic></TrendingTopic>
        <TopCreator></TopCreator>
        <Banner1></Banner1>
        <TrendingContent></TrendingContent>
        <CategorySelector></CategorySelector>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
}
