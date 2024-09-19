import Banner from "../../components/Banner/Banner";
import Newsletter from "./OtherSections/Newsletter";
import TopCreator from "./OtherSections/TopCreator";

const Home = () => {
    return (
        <div className="w-full space-y-12 md:w-4/5 mx-auto">

            <Banner></Banner>
            <TopCreator></TopCreator>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;