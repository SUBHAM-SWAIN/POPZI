import React from "react";
export default function RightSidebar() {
  return (
    <aside className="hidden md:block col-span-1 space-y-4">
     
      <div className="p-4 rounded-xl shadow-lg bg-white/20 dark:bg-gray-800/20 backdrop-blur-md">
        <h2 className="font-semibold mb-2">Suggested</h2>
        {["@friend1", "@friend2", "@friend3"].map((f) => (
          <p key={f} className="hover:text-purple-500 cursor-pointer">{f}</p>
        ))}
      </div>
       <div className="p-4 rounded-xl shadow-lg bg-white/20 dark:bg-gray-800/20 backdrop-blur-md">
        <h2 className="font-semibold mb-2">Trending</h2>
        {["#ReactJS", "#WebDev", "#UIUX"].map((t) => (
          <p key={t} className="hover:text-purple-500 cursor-pointer">{t}</p>
        ))}
      </div>
    </aside>
  );
}
