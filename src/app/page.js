export const dynamic = "force-dynamic";
import Banner1 from "@/Components/Banners/Banner1";
import Banner2 from "@/Components/Banners/Banner2";
import CategorySelector from "@/Components/category-selector/CategorySelector";
import FrequentlyAskedQuestions from "@/Components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import Newsletter from "@/Components/Home/Newsletter";
import TopCreator from "@/Components/Home/TopContent";
import TrendingContent from "@/Components/Home/TopCreator";
import TrendingTopic from "@/Components/Home/TrendingTopic";
import TrendingPodcasts from "@/Components/StrimingNow/TrendingPodcasts";
import SupscriptionSlide from "@/Components/Supscription/SupscriptionSlide";

export default function Home() {
  return (
    <div>
      <Banner2></Banner2>
      <div className="container mx-auto">
        <TrendingPodcasts></TrendingPodcasts>
        <TrendingTopic></TrendingTopic>
        <TopCreator></TopCreator>
        <Banner1></Banner1>
        <TrendingContent></TrendingContent>
        <CategorySelector></CategorySelector>
        <Newsletter></Newsletter>
        <SupscriptionSlide></SupscriptionSlide>
        <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
      </div>
    </div>
  );
}
