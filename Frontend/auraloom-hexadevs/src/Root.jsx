import { Outlet } from "react-router-dom";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";



const Root = () => {
    return (
        <div>
            <div className="w-full md:w-4/5 mx-auto">
           <Header></Header>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;