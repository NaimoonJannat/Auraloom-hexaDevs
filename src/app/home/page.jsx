
import CategorySelector from "@/Components/category-selector/CategorySelector";
import TopContent from "@/Components/Home/TopContent";
import TrendingContent from "@/Components/Home/TrendingContent";

const page = () => {
    return (
        <div>
            <TopContent></TopContent>
            <TrendingContent></TrendingContent>
            <CategorySelector></CategorySelector>

        </div>
    );
};

export default page;