"use client";
import { Gamepad2, LayoutDashboard, Settings, User, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Profile", path: "/dashboard/profile", icon: User },
  { name: "Settings", path: "/dashboard/settings", icon: Settings },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 z-50 w-72 h-screen bg-white border-r border-gray-200 flex flex-col shadow-sm">
      {/* Logo Section */}
      <div className="p-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-indigo-200 shadow-lg group-hover:scale-105 transition-transform duration-200">
            <Gamepad2 size={22} />
          </div>
          <span className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent tracking-tight">
            Style BD
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-1.5 mt-2">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4 ml-4">
          Main Menu
        </p>
        {MenuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 group ${
                isActive
                  ? "bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon
                size={20}
                className={`${isActive ? "text-indigo-600" : "text-gray-400 group-hover:text-gray-600"}`}
              />
              <span className="text-[15px]">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer / User Profile Section */}
      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 font-medium">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
