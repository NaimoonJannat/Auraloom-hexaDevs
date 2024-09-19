import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Root";
import LogInPage from "../components/LogIn";

const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Root></Root>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <LogInPage></LogInPage>
        },
    ]
    }, 
   ]); 

   export default router;