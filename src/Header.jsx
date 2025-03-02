import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md p-4 fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Mashop</div>

        <div className="relative w-1/3 hidden md:block">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <Search
            className="h-6 w-6 cursor-pointer text-gray-700 md:hidden"
            onClick={() => setSearchOpen(true)}
          />
          <ShoppingCart className="h-6 w-6 cursor-pointer text-gray-700" />
          <User className="h-6 w-6 cursor-pointer text-gray-700" />
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
          searchOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSearchOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 w-full bg-white p-4 shadow-md z-50 transform transition-transform ${
          searchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Search Products</h2>
          <X
            className="h-6 w-6 cursor-pointer"
            onClick={() => setSearchOpen(false)}
          />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
        </div>
      </div>

      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } md:block md:relative absolute lg:top-0 md:top-0 top-16 left-0 w-full bg-white md:bg-transparent z-50 p-4 lg:shadow-none md:shadow-none shadow-md`}
      >
        <ul className="flex flex-col md:flex-row md:justify-center space-y-3 md:space-y-0 md:space-x-6 text-gray-900 font-medium">
          <li className="cursor-pointer hover:text-orange-400 duration-500 ease-out transition">
            <Link to="/home">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-400 duration-500 ease-out transition">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-400 duration-500 ease-out transition">
            <Link to="/deals">Deals</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-400 duration-500 ease-out transition">
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
