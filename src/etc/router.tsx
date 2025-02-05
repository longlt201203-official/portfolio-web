import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages/Index";
import BlogPage from "../pages/Blog";
import ArticlePage from "../pages/Blog/Article";

const router = createBrowserRouter([
  {
    path: "/",
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
