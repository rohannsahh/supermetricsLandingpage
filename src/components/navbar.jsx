import { FaChevronDown } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className="bg-[#DCEFFF] border border-[#1C0B451A] px-24 h-20 flex justify-between  items-center">
        
      <div className="text-[1.25rem] font-semibold text-[#121B26]">SuperMetrics.com</div>
      <div className="flex text-[1rem]  text-[#42526B] gap-10">
        <div className="relative group">
          <button className="hover:text-blue-600 flex items-center ">Features <span className="mx-2"><FaAngleDown /></span></button>
          {/* Dropdown */}
          <div className="absolute  hidden group-hover:block bg-white shadow-lg p-2 rounded">
            <a href="#" className="block px-2 py-2">Feature 1</a>
            <a href="#" className="block px-2 py-2">Feature 2</a>
          </div>
        </div>
        <div className="relative group">
          <button className="hover:text-blue-600 flex items-center">Resources <span className="mx-2"><FaAngleDown /></span></button>
          {/* Dropdown */}
          <div className="absolute hidden group-hover:block bg-white shadow-lg p-2 rounded">
            <a href="#" className="block px-4 py-2">Resource 1</a>
            <a href="#" className="block px-4 py-2">Resource 2</a>
          </div>
        </div>
        <div className="relative group">
          <button className="hover:text-blue-600 flex items-center">Company <span className="mx-2"><FaAngleDown /></span></button>
          {/* Dropdown */}
          <div className="absolute hidden group-hover:block bg-white shadow-lg p-2 rounded">
            <a href="#" className="block px-4 py-2">About Us</a>
            <a href="#" className="block px-4 py-2">Careers</a>
          </div>
        </div>
        <a href="#" className="hover:text-blue-600">Pricing</a>
      </div>
      <div className="flex text-[1rem] text-[#212F40] font-semibold gap-4">
        <button className="text-gray-700">Log in</button>
        <button className="bg-[#1B91F0] text-white px-4 py-2 rounded-xl hover:bg-blue-600">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
