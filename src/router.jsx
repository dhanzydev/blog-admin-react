import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import AdminLayout from "./Layout/AdminLayout";
import Category from "./Pages/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/categories",
        element: <Category />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
