import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages/user/Index";
import BlogPage from "../pages/user/Blog";
import ArticlePage from "../pages/user/Blog/Article";
import UserLayout from "../pages/user/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: <IndexPage />,
      },
      {
        path: "blog",
        children: [
          {
            path: "",
            element: <BlogPage />,
          },
          {
            path: ":id",
            element: <ArticlePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
