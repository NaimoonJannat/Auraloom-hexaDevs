import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register";
import MainLayout from "../layouts/MainLayout";
const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <MainLayout/>, 
    children: [
        {
          path: '/register',
          element: <Register/>,
        },
      ]
    }, 
   ]); 

   export default router;