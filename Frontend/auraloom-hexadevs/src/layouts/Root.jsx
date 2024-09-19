import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar"
import Footer from "../components/Shared/Footer"




const Root = () => {
    return (
        <div>
            <div className="container mx-auto">
           <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;