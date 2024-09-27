import CategorySelector from "@/Components/category-selector/CategorySelector";
import TopCreator from "@/Components/Home/TopCreator";
import TrendingContent from "@/Components/Home/TrendingContent";


export default function Home() {
  return (
    <div className="container mx-auto">
      <TopCreator></TopCreator>
            <TrendingContent></TrendingContent>
            <CategorySelector></CategorySelector>

    </div>
  );
}
