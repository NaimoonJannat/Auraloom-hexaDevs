import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Root from "../Root";
import LogInPage from "../components/LogIn";

import Register from "../Pages/Register";

import Home from "../Pages/Home/Home";
import Root from "../layouts/Root";

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
          path: '/register',
          element: <Register/>,

        },
        {
            path: "/login",
            element: <LogInPage></LogInPage>
        },
    ]
    }, 
   ]); 

   export default router;