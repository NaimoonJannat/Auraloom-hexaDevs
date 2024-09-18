
import { Outlet } from "react-router-dom";
const MainLayout = () => {
    return (
        <div>
        <div className=" mx-auto container ">
            <Outlet />
        </div>
       
    </div>
    );
};

export default MainLayout;