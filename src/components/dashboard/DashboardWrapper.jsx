"use client";
import React, { useState } from "react";
import { Bell, Menu, Search, ChevronDown } from "lucide-react";
import Sidebar from "./Sidebar";

const DashboardWrapper = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area - lg:pl-72 fixes the overlapping issue */}
      <div className={`flex flex-col min-h-screen transition-all duration-300 lg:pl-72`}>
        {/* Top Header */}
        <header className="sticky top-0 z-40 h-20 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 px-4 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-50 lg:hidden shadow-sm"
            >
              <Menu size={20} />
            </button>

            <div className="hidden md:flex items-center gap-3 bg-slate-100/80 px-4 py-2.5 rounded-2xl border border-transparent focus-within:border-indigo-200 focus-within:bg-white transition-all duration-300">
              <Search size={18} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search analytics..."
                className="bg-transparent outline-none text-sm text-slate-600 w-64 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Notification */}
            <button className="relative p-2.5 text-slate-500 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-200">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600 border-2 border-white"></span>
              </span>
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 ml-2 group cursor-pointer">
              <div className="flex flex-col items-end hidden sm:flex">
                <span className="text-sm font-bold text-slate-800">Admin User</span>
                <span className="text-[11px] font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                  PRO
                </span>
              </div>
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-slate-200 to-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-bold overflow-hidden shadow-inner">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="avatar" />
              </div>
              <ChevronDown
                size={16}
                className="text-slate-400 group-hover:text-slate-600 transition-transform"
              />
            </div>
          </div>
        </header>

        {/* Page Content Container */}
        <main className="flex-1 p-4 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-screen-2xl">
            {/* Senior Tip: children wrapper should handle spacing 
              so content doesn't hit the screen edges.
            */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardWrapper;
