import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Shared/Navbar";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;