"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        <div className="flex items-center">
          <Image
            src="/logo-mobile.png"
            alt="Gen-Z Mobile Logo"
            width={50}
            height={50}
            className="block md:hidden cursor-pointer"
            priority
          />

          <Image
            src="/logo.png"
            alt="Gen-Z Logo"
            width={150}
            height={40}
            className="hidden md:block cursor-pointer"
          />
        </div>

        <ul className="hidden md:flex gap-8 text-[15px] font-medium text-gray-700">
          <li className="hover:text-black cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-black cursor-pointer">
            <Link href="/mens">Men’s</Link>
          </li>
          <li className="hover:text-black cursor-pointer"><Link href="/womens">Women’s</Link></li>
          <li className="hover:text-black cursor-pointer">About Us</li>
        </ul>

        <div className="flex items-center gap-5">
          <Search className="w-5 h-5 text-gray-700 cursor-pointer" />
          <Heart className="w-5 h-5 text-gray-700 cursor-pointer" />
          <ShoppingBag className="w-5 h-5 text-gray-700 cursor-pointer" />

          <Link href="/signup">
            <button className="hidden md:inline-block px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
              Sign Up
            </button>
          </Link>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-6 pb-4 pt-2 text-[15px] font-medium text-gray-700">
          <li className="font-semibold text-black py-2 border-b border-gray-100">
            Home
          </li>
          <Link href="/mens">
            <li className="hover:text-black py-2 border-b border-gray-100">
              Men’s
            </li>
          </Link>
          <Link href="/womens">
            <li className="hover:text-black py-2 border-b border-gray-100">
              Women’s
            </li>
          </Link>
          <li className="hover:text-black py-2">About Us</li>
          <li className="pt-3">
            <Link href="/signup">
              <button className="w-full px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
                Sign Up
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
