import Mainnav from "./Mainnav";  
import Logo from "./Logo";

function Sidebar({ className, onCloseSidebar }) {
  return (
    <div className={`fixed inset-y-0 left-0 z-10 w-64 bg-white shadow-lg lg:static ${className}`}>
      <Logo />
      <Mainnav onCloseSidebar={onCloseSidebar} />
    </div>
  );
}

export default Sidebar;