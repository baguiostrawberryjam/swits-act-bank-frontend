import { useState } from "react";
import SidebarSection from "./SidebarSection";
import { LayoutDashboard, FolderOpen, PanelLeftClose, PanelLeftOpen } from "lucide-react";

function SidebarContainer({ isOpen, toggleSidebar }) {
  // State for internal section collapsing
  const [sectionsCollapsed, setSectionsCollapsed] = useState({
    menu: false,
    projects: false
  });

  const toggleSection = (section) => {
    setSectionsCollapsed(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <aside 
      className={`
        h-screen bg-white text-gray-800 border-r border-gray-200 shadow-sm
        transition-all duration-300 ease-in-out flex flex-col z-50
        ${isOpen ? "w-64" : "w-20"} 
      `}
    >
      {/* Header / Logo */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-100">
        <div className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${isOpen ? "w-auto opacity-100" : "w-0 opacity-0"}`}>
          {/* You can put an <img> logo here */}
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="text-xl font-bold text-gray-800 tracking-tight">atom</span>
        </div>

        {/* Toggle Button */}
        <button 
          onClick={toggleSidebar} 
          className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
        >
          {isOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-6 px-3 custom-scrollbar">
        
        <SidebarSection
          title="Menu"
          isSidebarOpen={isOpen}
          isCollapsed={sectionsCollapsed.menu}
          onToggleCollapse={() => toggleSection('menu')}
          items={[
            { to: "/account", label: "Account", icon: <LayoutDashboard size={20} /> },
            { to: "/transactions", label: "Transactions", icon: <FolderOpen size={20} /> },
          ]}
        />
        
        {/* Example of another section */}
        {/* <SidebarSection
          title="Projects"
          isSidebarOpen={isOpen}
          items={[...]}
        /> 
        */}

      </div>

      {/* Footer / User Profile (Optional) */}
      <div className="p-4 border-t border-gray-100">
        <div className={`flex items-center gap-3 ${isOpen ? "" : "justify-center"}`}>
           <div className="w-8 h-8 rounded-full bg-gray-200"></div>
           {isOpen && (
             <div className="overflow-hidden">
                <p className="text-sm font-medium text-gray-700">John Doe</p>
                <p className="text-xs text-gray-500">Admin</p>
             </div>
           )}
        </div>
      </div>
    </aside>
  );
}

export default SidebarContainer;