"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  IoMenuSharp,
  IoClose,
  IoSearchOutline,
  IoBagOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoChevronDownOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false); // State for desktop admin dropdown
  const pathname = usePathname();

  // Mock Admin Status - Replace with your auth logic (e.g., const { user } = useAuth())
  const isAdmin = true;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
    { name: "Register", href: "/register" },
  ];

  const adminLinks = [
    { name: "Dashboard", href: "/admin" },
    { name: "Products", href: "/admin/products" },
    { name: "Orders", href: "/admin/orders" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Mobile Menu + Logo */}
          <div className="flex items-center gap-4">
            <button className="lg:hidden" onClick={() => setOpen(!open)}>
              {open ? <IoClose size={24} /> : <IoMenuSharp size={24} />}
            </button>
            <Logo />
          </div>

          {/* Center: Main Menu */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-[13px] font-bold uppercase tracking-widest transition ${
                    pathname === link.href ? "text-red-500" : "text-gray-700 hover:text-black"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Icons + Admin Dropdown */}
          <div className="flex items-center gap-5 text-gray-700">
            <IoSearchOutline size={20} className="cursor-pointer hidden sm:block" />

            {/* Desktop Admin Menu */}
            {isAdmin && (
              <div className="relative hidden lg:block">
                <button
                  onClick={() => setAdminOpen(!adminOpen)}
                  className="flex items-center gap-1 text-[11px] font-black uppercase bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition"
                >
                  Admin <IoChevronDownOutline />
                </button>

                {adminOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl border rounded-md py-2">
                    {adminLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setAdminOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-medium"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            <Link href="/account">
              <IoPersonOutline size={20} />
            </Link>

            <Link href="/wishlist" className="relative">
              <IoHeartOutline size={20} />
              <span className="absolute -top-2 -right-2 text-[10px] bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center font-bold">
                7
              </span>
            </Link>

            <Link href="/cart" className="relative">
              <IoBagOutline size={20} />
              <span className="absolute -top-2 -right-2 text-[10px] bg-black text-white w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-[280px] h-full bg-white shadow-2xl transition-transform duration-300 z-[60] ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b flex justify-between items-center">
            <Logo />
            <button onClick={() => setOpen(false)}>
              <IoClose size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block text-base font-bold uppercase tracking-tight ${
                      pathname === link.href ? "text-red-500" : "text-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Admin Section */}
            {isAdmin && (
              <div className="mt-10">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[2px] mb-4">
                  Admin Management
                </p>
                <ul className="space-y-4">
                  {adminLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 text-gray-700 font-medium"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="p-6 bg-gray-50 space-y-4">
            <Link
              href="/account"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-gray-700 font-bold text-sm uppercase"
            >
              <IoPersonOutline size={18} /> My Account
            </Link>
            <Link
              href="/logout"
              className="block text-center border-2 border-black py-3 rounded-md font-bold uppercase text-xs tracking-widest"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
