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
    <section
      className={`bg-[#F3EEEA] flex flex-wrap justify-center px-9 py-12 gap-6 md:gap-10 mt-14 amenities ${cinzel.className}`}
    >
      <div className="w-[25rem]">
        <ImConnection size={27} className="text-[#bc9142]" />
        <div>
          <h3 className="text-[1.3rem] font-medium mb-2">High Speed Wifi</h3>
        </div>
      </div>
      <div className="w-[25rem]">
        <FaCar size={27} className="text-[#bc9142]" />
        <h3 className="text-[1.3rem] font-medium mb-2">
          Wide-Area Parking Space
        </h3>
      </div>
      <div className="w-[25rem]">
        <LiaSwimmingPoolSolid size={30} className="text-[#bc9142]" />
        <h3 className="text-[1.3rem] font-medium mb-2">Swimming Pool</h3>
      </div>
      <div className="w-[25rem]">
        <MdSecurity size={27} className="text-[#bc9142] mb-1" />
        <h3 className="text-[1.3rem] font-medium mb-2">24/7 Security & CCTV</h3>
      </div>
      <div className="w-[25rem]">
        <MdOutlineElectricalServices size={30} className="text-[#bc9142]" />
        <h3 className="text-[1.3rem] font-medium mb-2">Backup Utilities</h3>
      </div>
      <div className="w-[25rem]">
        <GiLift size={27} className="text-[#bc9142]" />
        <h3 className="text-[1.3rem] font-medium mb-2">Lifts</h3>
      </div>
    </section>
  );
}
