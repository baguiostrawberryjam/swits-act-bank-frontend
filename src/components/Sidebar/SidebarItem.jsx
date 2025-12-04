import { Link, useLocation } from "react-router";

function SidebarItem({
  to,
  label,
  icon,
  dropdownOpen,
  toggleDropdown,
  subItems,
  onClick,
  isClickable,
}) {
  const location = useLocation();
  const isActive = to && location.pathname === to;

  if (subItems) {
    return (
      <li>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-200 transition-colors" onClick={toggleDropdown}>
          <span className="flex-shrink-0">{icon}</span>
          <span className="flex-1 text-left">{label}</span>
        </button>
        {dropdownOpen && (
          <ul className="ml-6 mt-1 space-y-1 border-l border-gray-700 pl-3">
            {subItems.map((item) => (
              <li key={item}>
                <Link to="#" className="block px-3 py-1 text-sm text-gray-400 hover:text-white rounded transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  // If clickable (for projects), render as button
  if (isClickable && onClick) {
    return (
      <li>
        <button onClick={onClick} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          <span className="flex-shrink-0">{icon}</span>
          <span className="flex-1 text-left">{label}</span>
        </button>
      </li>
    );
  }

  return (
    <li>
      <Link to={to} className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"}`}>
        <span className="flex-shrink-0">{icon}</span>
        <span className="flex-1">{label}</span>
      </Link>
    </li>
  );
}

export default SidebarItem;
