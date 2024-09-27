import CategorySelector from "@/Components/category-selector/CategorySelector";
import Newsletter from "@/Components/Home/Newsletter";
import TopCreator from "@/Components/Home/TopContent";
import TrendingContent from "@/Components/Home/TopCreator";
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
