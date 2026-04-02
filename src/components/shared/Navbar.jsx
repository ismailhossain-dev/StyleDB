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
} from "react-icons/io5";
import Logo from "./Logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // স্ক্রল করলে নেভবার শ্যাডো হবে
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Collections", href: "/collections" },
    { name: "New Arrivals", href: "/new" },
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 mb-10 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2 " : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Mobile Menu Toggle & Search (Desktop) */}
          <div className="flex items-center gap-4 flex-1 lg:flex-none">
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-gray-800">
              {open ? <IoClose size={26} /> : <IoMenuSharp size={26} />}
            </button>
            <button className="hidden lg:block text-gray-700 hover:text-black transition-colors">
              <IoSearchOutline size={22} />
            </button>
          </div>

          {/* Center: Logo (Fashion brands often center their logo) */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Logo />
          </div>

          {/* Right: Desktop Links & Icons */}
          <div className="flex-1 flex items-center justify-end gap-2 sm:gap-6">
            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8 mr-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="relative text-[13px] font-bold uppercase tracking-widest text-gray-600 hover:text-black transition-colors group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Utility Icons */}
            <div className="flex items-center gap-3 sm:gap-5 text-gray-700">
              <Link href="/account" className="hidden sm:block hover:text-black transition-all">
                <IoPersonOutline size={22} />
              </Link>
              <Link
                href="/wishlist"
                className="hidden sm:block hover:text-black transition-all relative"
              >
                <IoHeartOutline size={22} />
                <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </Link>
              <Link href="/cart" className="hover:text-black transition-all relative">
                <IoBagOutline size={22} />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  3
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[73px] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-[73px] left-0 w-[75%] h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-bold uppercase tracking-wider text-gray-800 border-b border-gray-50 block pb-2"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="pt-6 flex flex-col gap-4">
            <Link href="/login" className="flex items-center gap-2 text-gray-600 font-medium">
              <IoPersonOutline size={20} /> My Account
            </Link>
            <Link
              href="/signup"
              className="bg-black text-white text-center py-3 rounded-lg font-bold uppercase text-sm tracking-widest shadow-lg"
            >
              Join Now
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
