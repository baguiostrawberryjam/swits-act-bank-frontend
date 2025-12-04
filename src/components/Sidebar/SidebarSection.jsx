import SidebarItem from "./SidebarItem";
import { ChevronDown } from "lucide-react";

export default function SidebarSection({ title, items, isCollapsed, onToggleCollapse, id }) {
  return (
    <div id={id}>
      {title && (
        <div
          className="flex items-center justify-between mb-3 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={onToggleCollapse}
        >
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">{title}</h4>
          {onToggleCollapse && (
            <button
              className="p-1 hover:bg-gray-800 rounded transition-colors"
              aria-label="Toggle section"
              tabIndex={-1}
            >
              <ChevronDown size={16} className={`transition-transform ${isCollapsed ? "-rotate-90" : ""}`} />
            </button>
          )}
        </div>
      )}
      {!isCollapsed && (
        <ul className="space-y-1">
          {items.map((item) => (
            <SidebarItem
              key={item.label}
              to={item.to}
              label={item.label}
              icon={item.icon}
              subItems={item.subItems}
              dropdownOpen={item.dropdownOpen}
              toggleDropdown={item.toggleDropdown}
              onClick={item.onClick}
              isClickable={item.isClickable}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
