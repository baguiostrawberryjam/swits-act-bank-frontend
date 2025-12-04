import { useState } from "react";
import SidebarContainer from "../Sidebar/SidebarContainer";
import MainContent from "./MainContent";

function LayoutWrapper({ children, user, userData, logOut }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarContainer isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col">
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
}

export default LayoutWrapper;