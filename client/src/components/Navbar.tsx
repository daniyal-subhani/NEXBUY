"use client";
import Image from "next/image";
import Link from "next/link";
import { Bell, House, ShoppingCartIcon } from "lucide-react";
import { SearchBar } from "@/components";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="NEXBUY Logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-xl font-bold">NEXBUY</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="">
              <SearchBar  />
            </div>
            <div className="flex items-center space-x-2">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                <House className="w-4 h-4" />
              </Link>
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                <Bell className="w-4 h-4" />
              </Link>
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                <ShoppingCartIcon className="w-4 h-4" />
              </Link>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
