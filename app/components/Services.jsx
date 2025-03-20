"use client";

import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { FaCar } from "react-icons/fa";
import { MdSecurity, MdOutlineElectricalServices } from "react-icons/md";
import { GiLift } from "react-icons/gi";
import { ImConnection } from "react-icons/im";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: "400", display: "swap" });

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
      {/* High Speed Wifi */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#F3EEEA] p-4 rounded-full mb-6">
            <ImConnection size={32} className="text-[#bc9142]" />
          </div>
          <h3 className={`${cinzel.className} text-xl font-medium mb-3 text-gray-800`}>
            High Speed Wifi
          </h3>
          <p className="text-gray-600 text-sm">
            Stay connected with our high-speed fiber optic internet
          </p>
        </div>
      </div>

      {/* Security */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#F3EEEA] p-4 rounded-full mb-6">
            <MdSecurity size={32} className="text-[#bc9142]" />
          </div>
          <h3 className={`${cinzel.className} text-xl font-medium mb-3 text-gray-800`}>
            24/7 Security & CCTV
          </h3>
          <p className="text-gray-600 text-sm">
            Round-the-clock security with advanced surveillance systems
          </p>
        </div>
      </div>

      {/* Backup Utilities */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#F3EEEA] p-4 rounded-full mb-6">
            <MdOutlineElectricalServices size={32} className="text-[#bc9142]" />
          </div>
          <h3 className={`${cinzel.className} text-xl font-medium mb-3 text-gray-800`}>
            Backup Utilities
          </h3>
          <p className="text-gray-600 text-sm">
            Uninterrupted power supply with backup generators
          </p>
        </div>
      </div>

      {/* Lifts */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#F3EEEA] p-4 rounded-full mb-6">
            <GiLift size={32} className="text-[#bc9142]" />
          </div>
          <h3 className={`${cinzel.className} text-xl font-medium mb-3 text-gray-800`}>
            Modern Lifts
          </h3>
          <p className="text-gray-600 text-sm">
            High-speed elevators for convenient access
          </p>
        </div>
      </div>
    </div>
  );
}
