import React from "react";
import { Home, Compass, MessageCircle, Bookmark, Settings, LogOut } from "lucide-react";

const navLinks = [
  { name: "Home", icon: <Home size={18} /> },
  { name: "Explore", icon: <Compass size={18} /> },
  { name: "Messages", icon: <MessageCircle size={18} /> },
  { name: "Bookmarks", icon: <Bookmark size={18} /> },
  { name: "Settings", icon: <Settings size={18} /> },
];

export default function LeftSidebar() {
  return (
    <aside
      className="hidden md:flex flex-col justify-between col-span-1 p-3"
      style={{ height: "calc(100vh - 100px)" }}
    >
      {/* Top Section: Profile + Nav */}
      <div className="space-y-4">
        {/* Profile Card */}
        <div className="p-3 rounded-xl shadow-md bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="avatar"
                className="w-12 h-12 rounded-full border-2 border-purple-500"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></span>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white text-base">@username</p>
              <p className="text-gray-400 text-xs">245 followers</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="flex items-center gap-2.5 p-2.5 rounded-lg cursor-pointer hover:bg-purple-500/20 hover:text-purple-500 transition-colors duration-200"
            >
              <span className="text-gray-700 dark:text-gray-300">{link.icon}</span>
              <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">{link.name}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Section: Logout Button */}
      <div>
        <button className="w-full py-2.5 rounded-lg bg-red-500 text-white font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 text-sm">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </aside>
  );
}
