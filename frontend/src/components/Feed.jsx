import React from "react";
import Stories from "./Stories";

export default function Feed() {
  return (
<div className="space-y-6 overflow-y-auto max-h-[calc(100vh-80px)] pr-2 hide-scrollbar">
      <Stories />
      {[...Array(5)].map((_, i) => (
    <div key={i} className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md p-4 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-semibold">User {i + 1}</p>
              <p className="text-sm text-gray-400">2h ago</p>
            </div>
          </div>
          <div className="w-full h-64 bg-gray-300 rounded-lg mb-3"></div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            This is a premium style post card with gradient & glass effects.
          </p>
          <div className="flex gap-6 text-gray-700 dark:text-gray-300">
            <span>❤️ Like</span>
            <span>💬 Comment</span>
            <span>🔄 Share</span>
            <span>🔖 Save</span>
          </div>
        </div>
      ))}
    </div>
  );
}
