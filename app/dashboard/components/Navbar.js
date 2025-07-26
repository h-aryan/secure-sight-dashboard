"use client";

import { Menu, UserCircle2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full h-16 px-6 bg-[#0D0D0D] border-b border-zinc-800 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold text-white tracking-wide">
          MANDLACX
        </h1>
      </div>

      {/* Center: Navigation Links */}
      <div className="flex gap-6 text-sm text-zinc-400">
        <a href="#" className="hover:text-white transition-colors">
          Dashboard
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Cameras
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Scenes
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Incidents
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Users
        </a>
      </div>

      {/* Right: Profile */}
      <div className="flex items-center gap-3 text-zinc-400">
        <UserCircle2 className="w-6 h-6" />
        <Menu className="w-5 h-5" />
      </div>
    </nav>
  );
}
