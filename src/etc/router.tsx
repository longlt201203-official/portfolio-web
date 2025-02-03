import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
]);

export default router;
