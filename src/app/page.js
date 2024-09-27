import CategorySelector from "@/Components/category-selector/CategorySelector";
import Newsletter from "@/Components/Home/Newsletter";
import TopCreator from "@/Components/Home/TopCreator";
import TrendingContent from "@/Components/Home/TrendingContent";
import TrendingTopic from "@/Components/Home/TrendingTopic";


export default function Home() {
  return (
    <div className="container mx-auto">
      <TrendingTopic></TrendingTopic>
      <TopCreator></TopCreator>
            <TrendingContent></TrendingContent>
            <CategorySelector></CategorySelector>
            <Newsletter></Newsletter>

    </div>
  );
}
