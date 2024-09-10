import { NavLink } from "react-router-dom";
import {
  HiOutlineSquares2X2,
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

function Mainnav({ onCloseSidebar }) {
  const handleClick = () => {
    if (window.innerWidth < 1024) { // Only close sidebar on mobile
      onCloseSidebar();
    }
  };

  return (
    <nav className="p-4">
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink
            to="/app/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 text-gray-600 text-lg font-medium p-3 transition-all ${
                isActive ? "text-sky-400 bg-sky-50 rounded-sm" : ""
              }`
            }
            onClick={handleClick}
          >
            <HiOutlineSquares2X2 className="w-6 h-6 text-blue-400 transition-all" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/book-service"
            className={({ isActive }) =>
              `flex items-center gap-3 text-gray-600 text-lg font-medium p-3 transition-all ${
                isActive ? "text-sky-600 bg-sky-100 rounded-sm" : ""
              }`
            }
            onClick={handleClick}
          >
            <HiOutlineCalendarDays className="w-6 h-6 text-blue-600 transition-all" />
            <span>Book a service</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 text-gray-600 text-lg font-medium p-3 transition-all ${
                isActive ? "text-sky-800 bg-sky-200 rounded-sm" : ""
              }`
            }
            onClick={handleClick}
          >
            <HiOutlineCog6Tooth className="w-6 h-6 text-blue-800 transition-all" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Mainnav;