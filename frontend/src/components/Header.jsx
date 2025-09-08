import React from "react";
import { Home, Compass, Bell, User, PlusCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 sticky top-0 backdrop-blur-md bg-white/30 dark:bg-gray-800/30 z-50 shadow">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        POPZI
      </h1>
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-purple-400 w-1/3"
      />
      <div className="flex gap-6 text-gray-700 dark:text-gray-200">
        <Home size={24} />
        <Compass size={24} />
        <PlusCircle size={24} />
        <Bell size={24} />
        <User size={24} />
      </div>
    </header>
  );
}
