
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Views/HomePage";
import BaseLayout from "../Views/BaseLayout";
import NewsDetail from "../Views/Details";




  const router = createBrowserRouter([
    {
      element: <BaseLayout />,
      children:[
        {
            path: "/",
            element : <HomePage />
        },
        {
            path: "/detail/:id",
            element : <NewsDetail />
        }
      ]
    },
  ]);


  export default router