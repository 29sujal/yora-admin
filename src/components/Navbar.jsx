// components/Navbar.jsx
import { Menu, Search, User } from "lucide-react";

const Navbar = ({ onMenuClick }) => {
  return (
    <div className="w-full h-[60px] bg-white shadow-md flex items-center justify-between px-4 fixed top-0 z-50">
      {/* Left Side */}
      <div className="flex items-center gap-2">
        <button className="md:hidden" onClick={onMenuClick}>
          <Menu size={24} />
        </button>
        <h1 className="text-lg font-bold">YORAA</h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <Search size={20} />
        <User size={20} />
      </div>
    </div>
  );
};

export default Navbar;
