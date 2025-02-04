import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages/Index";
import BlogPage from "../pages/Blog";

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
        element: <BlogPage />,
      },
    ],
  },
]);

export default router;
