import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function AppLayout() {
  return (
    <div className="grid grid-cols-[20rem_1fr] h-screen">
      <Sidebar className="row-span-2 col-start-1" /> {/* Sidebar on the left, full height */}
      <main className="bg-gray-200 p-16 overflow-auto col-start-2">
        <div className="max-w-[120rem] mx-auto flex flex-col gap-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;