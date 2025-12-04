import { useState } from "react";
import SidebarSection from "./SidebarSection";
import {
  LayoutDashboard,
  FolderOpen,
  PanelRight,
} from "lucide-react";

function SidebarContainer({ isOpen, toggleSidebar }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [projectsCollapsed, setProjectsCollapsed] = useState(false);
  const [favoritesCollapsed, setFavoritesCollapsed] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className={`w-64 bg-gray-100 text-black transition-all duration-300 ${isOpen ? "" : "-translate-x-64"} flex flex-col h-screen overflow-y-auto`}>
      <div className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-400">atom</span>
        </div>

        <button onClick={toggleSidebar} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <PanelRight size={20} />
        </button>
      </div>

      {/* Menu Section */}
      <div className="flex-1 px-4 py-6 space-y-6">
        <SidebarSection
          title="Menu"
          id="menu"
          items={[
            { to: "/account", label: "Account", icon: <LayoutDashboard size={20} /> },
            { to: "/transactions", label: "Transactions", icon: <FolderOpen size={20} /> },
          ]}
        />
      </div>
    </nav>
  );
}

export default SidebarContainer;
