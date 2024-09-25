import { Outlet } from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";



const Root = () => {
    return (
        <div>
            <div className="w-full md:w-4/5 mx-auto">
           <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;