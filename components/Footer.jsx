"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, ChevronDown } from "lucide-react";

export default function Footer() {
  const [open, setOpen] = useState(null);
  const toggle = (key) => setOpen((v) => (v === key ? null : key));

  return (
    <footer className="w-full border-t border-gray-200 bg-white text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1">
          <div className="block md:hidden">
            <Image
              src="/logo.png"
              alt="Gen-Z Mobile Logo"
              width={50}
              height={50}
              className="h-12 w-12 object-contain"
              priority
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/logo.png"
              alt="Gen-Z Logo"
              width={150}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Premium streetwear for the tech-forward generation. Crafted for everyday comfort and standout style.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>support@genzstore.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 98XX-XX-XXXX</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Prayagraj, India</span>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <Link href="#" aria-label="Instagram" className="p-2 rounded-full border border-gray-200 hover:bg-gray-100">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="#" aria-label="Facebook" className="p-2 rounded-full border border-gray-200 hover:bg-gray-100">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="#" aria-label="YouTube" className="p-2 rounded-full border border-gray-200 hover:bg-gray-100">
              <Youtube className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <button
            onClick={() => toggle("shop")}
            className="w-full flex items-center justify-between md:justify-start md:cursor-default py-3 md:py-0 border-b md:border-none"
          >
            <span className="text-base font-semibold text-gray-900">Shop</span>
            <ChevronDown className={`md:hidden w-4 h-4 transition-transform ${open === "shop" ? "rotate-180" : ""}`} />
          </button>
          <ul className={`mt-3 space-y-2 text-sm ${open === "shop" ? "block" : "hidden"} md:block`}>
            <li><Link href="#" className="hover:text-black">Men’s</Link></li>
            <li><Link href="#" className="hover:text-black">Women’s</Link></li>
            <li><Link href="#" className="hover:text-black">New Arrivals</Link></li>
            <li><Link href="#" className="hover:text-black">Best Sellers</Link></li>
            <li><Link href="#" className="hover:text-black">Sale</Link></li>
          </ul>
        </div>
        <div className="col-span-1">
          <button
            onClick={() => toggle("company")}
            className="w-full flex items-center justify-between md:justify-start md:cursor-default py-3 md:py-0 border-b md:border-none"
          >
            <span className="text-base font-semibold text-gray-900">Company</span>
            <ChevronDown className={`md:hidden w-4 h-4 transition-transform ${open === "company" ? "rotate-180" : ""}`} />
          </button>
          <ul className={`mt-3 space-y-2 text-sm ${open === "company" ? "block" : "hidden"} md:block`}>
            <li><Link href="#" className="hover:text-black">About Us</Link></li>
            <li><Link href="#" className="hover:text-black">Careers</Link></li>
            <li><Link href="#" className="hover:text-black">Stores</Link></li>
            <li><Link href="#" className="hover:text-black">Contact</Link></li>
          </ul>
        </div>
        <div className="col-span-1">
          <span className="text-base font-semibold text-gray-900">Stay in the loop</span>
          <p className="mt-3 text-sm text-gray-500">
            Subscribe for drops, offers, and updates.
          </p>
          <form className="mt-4 flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-14 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Gen‑Z. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="#" className="hover:text-black">Privacy Policy</Link>
            <Link href="#" className="hover:text-black">Terms</Link>
            <Link href="#" className="hover:text-black">Returns</Link>
            <Link href="#" className="hover:text-black">Shipping</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
