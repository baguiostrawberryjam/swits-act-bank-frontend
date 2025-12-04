import { useState } from "react";
import SidebarContainer from "../Sidebar/SidebarContainer"; // Adjust path as needed
import MainContent from "./MainContent"; // Adjust path as needed

function LayoutWrapper({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
      {/* Sidebar controls its own width based on props */}
      <SidebarContainer isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content takes remaining width */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
}

export default LayoutWrapper;