import { useContext } from "react";
import { SidebarOpen } from "../context/SidebarContext";
import SidebarList from "../Items/SidebarList";

const Sidebar = () => {
  const { isOpen } = useContext(SidebarOpen);
  return (
    <>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform sm:translate-x-0 ${
          isOpen ? `transform-none` : "-translate-x-full"
        }  border-r  bg-gray-800 border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2 font-medium">
            <SidebarList />
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
