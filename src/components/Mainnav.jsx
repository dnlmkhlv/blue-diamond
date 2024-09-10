import { NavLink } from "react-router-dom";
import {
    HiOutlineSquares2X2,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

function Mainnav() {
  return (
    <nav>
      <ul className="flex flex-col gap-2"> {/* Replaced NavList */}
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 text-gray-600 text-lg font-medium p-3 transition-all ${
                isActive ? "text-gray-800 bg-gray-50 rounded-sm" : ""
              }`
            }
          >
            <HiOutlineSquares2X2 className="w-6 h-6 text-gray-400 transition-all" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              `flex items-center gap-3 text-gray-600 text-lg font-medium p-3 transition-all ${
                isActive ? "text-gray-800 bg-gray-50 rounded-sm" : ""
              }`
            }
          >
            <HiOutlineCalendarDays className="w-6 h-6 text-gray-400 transition-all" />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cabins"
            className={({ isActive }) =>
              `flex items-center gap-3 text-gray-600 text-lg font-medium p-3 transition-all ${
                isActive ? "text-gray-800 bg-gray-50 rounded-sm" : ""
              }`
            }
          >
            <HiOutlineHomeModern className="w-6 h-6 text-gray-400 transition-all" />
            <span>Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex items-center gap-3 text-gray-600 text-lg font-medium p-3 transition-all ${
                isActive ? "text-gray-800 bg-gray-50 rounded-sm" : ""
              }`
            }
          >
            <HiOutlineUsers className="w-6 h-6 text-gray-400 transition-all" />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 text-gray-600 text-lg font-medium p-3 transition-all ${
                isActive ? "text-gray-800 bg-gray-50 rounded-sm" : ""
              }`
            }
          >
            <HiOutlineCog6Tooth className="w-6 h-6 text-gray-400 transition-all" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Mainnav;