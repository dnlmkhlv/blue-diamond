function Logo() {
    return (
      <div className="text-center my-4">
        <img
          className="h-20 w-auto mx-auto" // Changed h-[80px] to h-20, added mx-auto
          src="/bd-logo.png"
          alt="BlueDiamond Logo"
        />
        <h1 className="logo-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-blue-600 tracking-tight">
          Blue<span className="text-blue-400">Diamond</span>
        </h1>
      </div>
    );
  }
  
  export default Logo;