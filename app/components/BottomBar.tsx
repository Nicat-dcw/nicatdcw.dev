"use client";

import { Home, Code, Github } from "lucide-react";

export default function BottomBar() {
  return (
    <nav className="fixed bottom-1 left-0 right-0 z-10 md:hidden backdrop-filter-blur backdrop-blur-3xl bg-opacity-15 bg-gray-700  shadow-md rounded-md mx-4">
      <ul className="flex justify-around items-center py-3">
        <li>
          <a href="#" className="text-gray-400 hover:text-[#4EC9B0]">
            <Home size={24} />
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-[#4EC9B0]">
            <Code size={24} />
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-[#4EC9B0]">
            <Github size={24} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
