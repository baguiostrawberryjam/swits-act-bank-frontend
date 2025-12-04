import SidebarItem from "./SidebarItem";
import { ChevronDown } from "lucide-react";

export default function SidebarSection({ 
  title, 
  items, 
  isCollapsed, 
  onToggleCollapse, 
  isSidebarOpen // Received from Container
}) {
  return (
    <div className="mb-6">
      {/* Title - Only show if sidebar is open AND title exists */}
      {title && isSidebarOpen && (
        <div
          className="flex items-center justify-between px-3 mb-2 cursor-pointer group"
          onClick={onToggleCollapse}
        >
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-gray-600 transition-colors">
            {title}
          </h4>
          
          {onToggleCollapse && (
            <button
              className="p-1 hover:bg-gray-200 rounded text-gray-400 transition-colors"
            >
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-200 ${isCollapsed ? "-rotate-90" : ""}`} 
              />
            </button>
          )}
        </div>
      )}

      {/* Render Items */}
      {!isCollapsed && (
        <ul className="space-y-1">
          {items.map((item, index) => (
            <SidebarItem
              key={index} // improved key
              {...item} // spread all item props (to, label, icon)
              isSidebarOpen={isSidebarOpen} // Pass down state
            />
          ))}
        </ul>
      )}
    </div>
  );
}