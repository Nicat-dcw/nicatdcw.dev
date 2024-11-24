"use client";

import React, { useState, useEffect } from "react";
import CustomSelect from "../components/CustomSelect";

const Settings: React.FC = () => {
  const [sidebarColor, setSidebarColor] = useState("Default");
  const [aiEnabled, setAiEnabled] = useState(false);
  const [betaFeaturesEnabled, setBetaFeaturesEnabled] = useState(false);

  useEffect(() => {
    const storedSidebarColor = localStorage.getItem("sidebarColor");
    const storedAiEnabled = localStorage.getItem("aiEnabled");
    const storedBetaFeaturesEnabled = localStorage.getItem("betaFeaturesEnabled");

    if (storedSidebarColor) setSidebarColor(storedSidebarColor);
    if (storedAiEnabled) setAiEnabled(storedAiEnabled === "true");
    if (storedBetaFeaturesEnabled) setBetaFeaturesEnabled(storedBetaFeaturesEnabled === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarColor", sidebarColor);
    localStorage.setItem("aiEnabled", aiEnabled.toString());
    localStorage.setItem("betaFeaturesEnabled", betaFeaturesEnabled.toString());
  }, [sidebarColor, aiEnabled, betaFeaturesEnabled]);

  const handleSidebarColorChange = (newColor: string) => {
    if (newColor === "Default") {
      setSidebarColor("bg-black");
    } else if (newColor === "Glory"){
      setSidebarColor("bg-gradient-to-r from-black via-gray-800 to-gray-800");
    }
  };

  const handleAiToggle = () => setAiEnabled((prev) => !prev);

  const handleBetaFeaturesToggle = () => setBetaFeaturesEnabled((prev) => !prev);

  return (
    <div className="container mx-auto p-8 rounded-lg shadow-md mt-12 ml-12 md:w-1/2 ">
      <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>

      <div className="flex flex-col gap-8">
        <div className="p-6 rounded-lg ">
          <label htmlFor="sidebar-color" className="block text-sm font-medium text-gray-300 mb-2">
            Sidebar Color
          </label>
          <CustomSelect
            id="sidebar-color"
            value={sidebarColor}
            onChange={handleSidebarColorChange}
            options={["Default", "DeathStar", "Glory"]}
          />
        </div>

        <div className="p-6 rounded-lg ">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={aiEnabled ? true : false}
              onChange={handleAiToggle}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:bg-blue-600">
              <span
                className="peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all"
              ></span>
            </div>
            <span className="ms-3 text-sm font-medium text-gray-300">
              {aiEnabled ? "Disable" : "Enable"} AI Features
            </span>
          </label>
        </div>

        <div className="p-6 rounded-lg ">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={betaFeaturesEnabled}
              onChange={handleBetaFeaturesToggle}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:bg-blue-600">
              <span
                className="peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all"
              ></span>
            </div>
            <span className="ms-3 text-sm font-medium text-gray-300">
              {betaFeaturesEnabled ? "Disable" : "Enable"} Beta Features
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;