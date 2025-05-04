import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages/user/Index";
import BlogPage from "../pages/user/Blog";
import ArticlePage from "../pages/user/Blog/Article";
import UserLayout from "../pages/user/layout";
import AdminLayout from "../pages/admin/layout";
import LoginPage from "../pages/auth/Login";
import PostsPage from "../pages/admin/Posts";
import WritePostPage from "../pages/admin/Posts/Write";
import QuotesPage from "../pages/admin/Quotes";
import ChangePasswordPage from "../pages/auth/ChangePassword";
import App from "../App";
import TimelinePage from "../pages/admin/Timeline";
import InfoPage from "../pages/admin/Info";
import ProjectsPage from "../pages/admin/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "auth",
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "change-password",
            element: <ChangePasswordPage />,
          },
        ],
      },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          { path: "", element: <InfoPage /> },
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
            path: "timeline",
            element: <TimelinePage />,
          },
          {
            "path": "projects",
            element: <ProjectsPage />
          },
          {
            path: "quotes",
            element: <QuotesPage />,
          },
        ],
      },
      {
        path: "",
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
                path: ":blogId",
                element: <ArticlePage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
