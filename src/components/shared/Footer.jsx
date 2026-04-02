"use client";
import React from "react";
import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 1. Brand Info */}
          <div className="space-y-6">
            <Logo />
            <p className="text-primary text-sm leading-relaxed max-w-xs">
              Experience the perfect blend of modern elegance and urban streetwear. Quality that
              speaks for itself.
            </p>
            <div className="flex gap-4 text-primary">
              <Link href="#" className="hover:text-black transition-colors">
                <IoLogoFacebook size={20} />
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                <IoLogoInstagram size={20} />
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                <IoLogoTwitter size={20} />
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                <IoLogoYoutube size={20} />
              </Link>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-[13px] font-black uppercase tracking-[2px] text-gray-900 mb-6">
              Shopping
            </h4>
            <ul className="space-y-4 text-sm text-primary">
              <li>
                <Link href="/collections" className="hover:text-black transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/new" className="hover:text-black transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/men" className="hover:text-black transition-colors">
                  Men's Fashion
                </Link>
              </li>
              <li>
                <Link href="/women" className="hover:text-black transition-colors">
                  Women's Fashion
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Support */}
          <div>
            <h4 className="text-[13px] font-black uppercase tracking-[2px] text-gray-900 mb-6">
              Customer Care
            </h4>
            <ul className="space-y-4 text-sm text-primary font-medium">
              <li className="flex items-center gap-3">
                <IoCallOutline size={18} /> +880 1619408991
              </li>
              <li className="flex items-center gap-3">
                <IoMailOutline size={18} /> support@yourbrand.com
              </li>
              <li className="flex items-center gap-3">
                <IoLocationOutline size={18} /> Banani, Dhaka, Bangladesh
              </li>
              <li>
                <Link href="/track" className="hover:text-black transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h4 className="text-[13px] font-black uppercase tracking-[2px] text-gray-900 mb-6">
              Newsletter
            </h4>
            <p className="text-primary text-sm mb-4">
              Subscribe to get special offers and once-in-a-lifetime deals.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-sm outline-none focus:border-black transition-all"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full bg-black text-white px-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-primary uppercase tracking-widest font-bold">
          <p>© {currentYear} Your Brand Name. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-black">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
