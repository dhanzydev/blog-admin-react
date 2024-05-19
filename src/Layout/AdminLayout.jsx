import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const AdminLayout = () => {
  const token = Cookies.get("token");
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="sm:ml-64 mt-14 flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-800">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
