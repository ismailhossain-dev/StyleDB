"use client";
import { Gamepad2, LayoutDashboard, Settings, User, LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuItems = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard }, // Path check korun
  { name: "Profile", path: "/dashboard/profile", icon: User },
  { name: "Settings", path: "/dashboard/settings", icon: Settings },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[45] lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 z-50 w-72 h-screen bg-white border-r border-slate-200/60 flex flex-col shadow-xl shadow-slate-200/50 transition-all duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Brand Logo */}
        <div className="h-20 flex items-center px-8 border-b border-slate-50">
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 group-hover:rotate-6 transition-transform duration-300">
              <Gamepad2 size={22} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">
              Style <span className="text-indigo-600">BD</span>
            </span>
          </Link>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto custom-scrollbar">
          <p className="px-4 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">
            Management
          </p>

          {MenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 shadow-sm shadow-indigo-100/50"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon
                  size={20}
                  className={`transition-colors duration-200 ${
                    isActive ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User / Footer Section */}
        <div className="p-4 bg-slate-50/50 border-t border-slate-100">
          <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-bold text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all duration-200">
            <LogOut size={20} className="rotate-180" />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
