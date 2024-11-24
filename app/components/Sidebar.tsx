"use client";

import { Home, Code, Github, Settings } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [sidebarColor, setSidebarColor] = useState("black"); // Default color

  // Fetch color from localStorage on component mount
  useEffect(() => {
    const storedColor = localStorage.getItem("sidebarColor");
    if (storedColor) {
     
      setSidebarColor(storedColor);
    }
  }, []);

  // Update color in localStorage when color changes
  const updateSidebarColor = (color:string) => {
    setSidebarColor(color);
    localStorage.setItem("sidebarColor", color);
  };

  return (
    <aside
      className={`hidden z-5 ${sidebarColor} shadow-sm md:flex md:flex-col md:w-12 h-screen md:fixed md:inset-y-0`}
      style={{ backgroundColor: sidebarColor }}
    >
      <div className="flex mt-12 mr-12 flex-col md:mx-auto justify-center items-center p-4 space-y-6">
        <Link
          href="/"
          className={`text-lg font-bold flex items-center pr-1.5 pl-1 pb-12 ${
            pathname === "/" ? "text-blue-500" : "text-[#4EC9B0]"
          }`}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/59221034?v=4"
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full -ml-0.5 hover:border-2 hover:border-gray-700 hover:animation-ping"
          />
        </Link>
        <Link
          href="/"
          className={`text-lg font-bold flex items-center pr-1.5 pt-8 ${
            pathname === "/" ? "text-blue-500" : "text-[#4EC9B0]"
          }`}
        >
          <Home size={24} />
        </Link>
        <nav className="flex-1">
          <ul className="space-y-6">
            <li>
              <Link
                href="/code"
                className={`text-gray-400 hover:text-white flex items-center pr-1.5 pt-8 ${
                  pathname === "/code" ? "text-blue-500" : ""
                }`}
              >
                <Code size={24} />
              </Link>
            </li>
            <li>
              <Link
                href="/github"
                className={`text-gray-400 hover:text-white flex items-center pr-1.5 pt-8 ${
                  pathname === "/github" ? "text-blue-500" : ""
                }`}
              >
                <Github size={24} />
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="text-gray-400 bottom-0 hover:text-white flex items-center pr-1.5 pt-8"
              >
                <Settings size={24} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      
    </aside>
  );
}