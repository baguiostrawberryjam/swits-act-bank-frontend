import { Link, useLocation } from "react-router";
import { ChevronDown } from "lucide-react";

function SidebarItem({
  to,
  label,
  icon,
  dropdownOpen,
  toggleDropdown,
  subItems,
  onClick,
  isClickable,
  isSidebarOpen, // New prop to handle collapsed state text hiding
}) {
  const location = useLocation();
  const isActive = to && location.pathname === to;

  // Common base classes for layout and transition
  const baseClasses = `
    group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 cursor-pointer
    ${isSidebarOpen ? "justify-start" : "justify-center"} 
  `;

  // Active vs Inactive styling (The "Cleaner" Highlight)
  const colorClasses = isActive
    ? "bg-blue-50 text-blue-600 font-medium shadow-sm" // Active: Light Blue Bg + Dark Blue Text
    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"; // Inactive: Gray text + Light Gray Hover

  // 1. Render Sub-menu Parent
  if (subItems) {
    return (
      <li className="relative">
        <button
          className={`${baseClasses} ${colorClasses} w-full`}
          onClick={toggleDropdown}
        >
          {/* Icon wrapper ensures consistent size */}
          <span className={`flex-shrink-0 ${isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"}`}>
            {icon}
          </span>

          {/* Label - Hidden when collapsed */}
          <div className={`flex flex-1 items-center justify-between overflow-hidden transition-all duration-300 ${isSidebarOpen ? "w-auto opacity-100 ml-0" : "w-0 opacity-0 ml-0"}`}>
            <span className="whitespace-nowrap">{label}</span>
            <ChevronDown
              size={15}
              className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
            />
          </div>
        </button>

        {/* Sub-menu Dropdown */}
        {dropdownOpen && isSidebarOpen && (
          <ul className="mt-1 ml-9 space-y-1 border-l-2 border-gray-100 pl-2">
            {subItems.map((item) => (
              <li key={item}>
                <Link
                  to="#"
                  className="block px-3 py-2 text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  // 2. Render Clickable Button (e.g. for actions)
  if (isClickable && onClick) {
    return (
      <li>
        <button onClick={onClick} className={`${baseClasses} ${colorClasses} w-full`}>
          <span className="flex-shrink-0">{icon}</span>
          <span className={`overflow-hidden transition-all whitespace-nowrap ${isSidebarOpen ? "w-auto opacity-100" : "w-0 opacity-0"}`}>
            {label}
          </span>
        </button>
      </li>
    );
  }

  // 3. Standard Link Item
  return (
    <li>
      <Link to={to} className={`${baseClasses} ${colorClasses}`}>
        <span className={`flex-shrink-0 ${isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"}`}>
          {icon}
        </span>
        <span className={`overflow-hidden transition-all whitespace-nowrap ${isSidebarOpen ? "w-auto opacity-100" : "w-0 opacity-0"}`}>
          {label}
        </span>
      </Link>
    </li>
  );
}

export default SidebarItem;