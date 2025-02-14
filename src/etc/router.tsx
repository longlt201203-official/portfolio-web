import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages/user/Index";
import BlogPage from "../pages/user/Blog";
import ArticlePage from "../pages/user/Blog/Article";
import UserLayout from "../pages/user/layout";
import AdminLayout from "../pages/admin/layout";
import DashboardPage from "../pages/admin/Dashboard";
import LoginPage from "../pages/auth/Login";
import PostsPage from "../pages/admin/Posts";
import WritePostPage from "../pages/admin/Posts/Write";
import QuotesPage from "../pages/admin/Quotes";

const router = createBrowserRouter([
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <DashboardPage /> },
      {
        path: "posts",
        children: [
          {
            path: "",
            element: <PostsPage />,
          },
          {
            path: "write/:postId?",
            element: <WritePostPage />,
          },
        ],
      },
      {
        path: "quotes",
        element: <QuotesPage />,
      },
    ],
  },
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
