import React from "react";
export default function Stories() {
  const stories = [...Array(10)].map((_, i) => `U${i + 1}`);
  return (
    <div className="flex gap-4 overflow-x-auto py-2 hide-scrollbar">
      {stories.map((story, i) => (
           <div key={i} className="flex-shrink-0 w-20 h-20 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:scale-105 transition">

          {story}
        </div>
      ))}
    </div>
  );
}
