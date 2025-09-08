import React from "react";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto p-0 flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Feed */}
        <main className="col-span-2 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto max-h-[calc(100vh-64px)] pr-2 hide-scrollbar">
            <Feed />
          </div>
        </main>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
}
