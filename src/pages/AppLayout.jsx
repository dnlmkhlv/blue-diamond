import { useState } from "react";
import { Outlet } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import Sidebar from "../components/Sidebar";
import { Menu, X } from "lucide-react";

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar 
        className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`} 
        onCloseSidebar={closeSidebar}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center p-4 bg-white">
          <button
            className="lg:hidden z-30"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="ml-auto">
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonAvatarBox: "w-10 h-10",
                },
              }}
              afterSignOutUrl="/"
            />
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-gray-100">
          <div className="max-w-[120rem] mx-auto p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;