const Navbar = () => (
  <nav className="shadow-lg" data-aos="fade-down">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-24">
        <div className="flex-shrink-0 flex items-center">
          <img
            className="h-[80px] w-auto"
            src="/bd-logo.png"
            alt="BlueDiamond Logo"
          />
          <h1 className="logo-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-blue-600 tracking-tight">
            Blue<span className="text-blue-400">Diamond</span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-outline">Sign Up</button>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
