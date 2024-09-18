import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register";
import Home from "../pages/Home/Home";
import Root from "../Root";

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
    ]
    }, 
   ]); 

   export default router;