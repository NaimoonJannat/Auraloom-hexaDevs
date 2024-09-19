import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register";

import Home from "../Pages/Home/Home";
import LogInPage from "../Pages/LogInPage/LogInPage";
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