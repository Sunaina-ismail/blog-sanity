"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="bg-[#e6d2c9] items-center justify-center w-full">
        <div className="container mx-auto flex justify-between items-center px-2 md:px-8 py-4 md:py-5">
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex text-3xl sm:hidden focus:outline-none items-center justify-center z-50"
            >
              {menuOpen ? (
                <IoClose className="text-3xl z-50 text-black" />
              ) : (
                <GiHamburgerMenu className="text-2xl text-black" />
              )}
            </button>
            <Link href={'/'}> 
              <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-medium md:font-semibold text-gray-800">
                Face The Future
              </h1>
            </Link>
          </div>

          <nav>
            <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
              <li>
                <Link href="#skincare" className="hover:border-b-red-950 hover:border-b-2">
                  SkinCare
                </Link>
              </li>
              <li>
                <Link href="#products-&-brands" className="hover:border-b-red-950 hover:border-b-2">
                  Products & Brands
                </Link>
              </li>
              <li>
                <Link href="#health-&-advice" className="hover:border-b-red-950 hover:border-b-2">
                  Health & Advice
                </Link>
              </li>
              <li>
                <Link href="#clinic" className="hover:border-b-red-950 hover:border-b-2">
                  Clinic
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden z-50">
            <nav className="flex flex-col px-3 py-4">
              <Link href="#skincare" className="hover:bg-[#e6d2c9] px-4 py-3 rounded-md">
                SkinCare
              </Link>
              <Link href="#products" className="hover:bg-[#e6d2c9] px-4 py-3 rounded-md">
                Products & Brands
              </Link>
              <Link href="#health" className="hover:bg-[#e6d2c9] px-4 py-3 rounded-md">
                Health & Advice
              </Link>
              <Link href="#clinic" className="hover:bg-[#e6d2c9] px-4 py-3 rounded-md">
                Clinic
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
