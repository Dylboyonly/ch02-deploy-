import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "../Views/Login";
import BaseLayout from "../Views/BaseLayout";
import HomePage from "../Views/Home";
import AddArticle from "../Views/Add-Articles";
import AddUser from "../Views/Add-User";
import Categories from "../Views/Categories";
import ArticleEdit from "../Views/Edit-Articles";
import Toastify from "toastify-js";
import PatchImage from "../Views/Patch-image";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.access_token) {
        Toastify({
          text: "You already logged in",
          duration: 2000,
          newWindow: true,
          close: true,
          gravity: "top",
          position: "left",
          stopOnFocus: true,
          style: {
            background: "#EF4C54",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold",
          },
        }).showToast();
        return redirect("/");
      }
      return null;
    },
  },

  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/edit/:id",
        element: <ArticleEdit  />,
      },
      {
        path: "/add",
        element: <AddArticle name={"Add Article"} button={"Add"}/>,
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
      {
        path: "/patch/:id",
        element: <PatchImage />,
      },
    ],
  },
]);

export default router;
