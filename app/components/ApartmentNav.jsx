"use client";

import { Nunito_Sans } from "next/font/google";
import { useState } from "react";
import SingleRoom from "./AllTabs/SingleRoom";
import DoubleRoom from "./AllTabs/DoubleRoom";
import PentHouse from "./AllTabs/PentHouse";

const nunito_sans8 = Nunito_Sans({
  subsets: ["latin"],
  weight: "800",
  display: "swap",
});
const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

export default function ApartmentNav() {
  const list = [
    { roomType: "Studio apartment", selectedTab: "tab1" },
    { roomType: "2 - bedroom apartment", selectedTab: "tab2" },
    { roomType: "Penthouse Suite", selectedTab: "tab3" },
  ];

  const listMobile = [
    { roomType: "Studio", selectedTab: "tab1" },
    { roomType: "Double", selectedTab: "tab2" },
    { roomType: "PentHouse", selectedTab: "tab3" },
  ];

  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <nav>
        {/* Tab Component UI for Mobile screens */}

        <ul
          className={`flex md:hidden justify-center items-center gap-8 mx-4 mt-6 ${nunito_sans8.className}`}
          suppressHydrationWarning
        >
          {listMobile.map((item) => {
            return (
              <li
                key={item.selectedTab}
                className={`w-[5rem] h-[2.5rem] border-b-2 flex justify-center items-center text-[#9BA4B5] ${
                  activeTab === item.selectedTab ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab(item.selectedTab)}
              >
                {item.roomType}
              </li>
            );
          })}
        </ul>

        {/* Tab Component UI for Medium and large screens */}

        <ul
          className={`hidden md:flex md:mx-auto justify-center items-center gap-16 mt-9 ${nunito_sans8.className}`}
        >
          {list.map((item) => {
            return (
              <li
                key={item.selectedTab}
                className={`text-[#9BA4B5] cursor-pointer border-b-2 w-[20rem] h-[4rem] flex justify-center items-center ${
                  activeTab === item.selectedTab ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab(item.selectedTab)}
              >
                {item.roomType}
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        className={`outlet p-2 mt-5 md:p-6 md:mx-10 ${nunito_sans.className}`}
      >
        {activeTab === "tab1" && <SingleRoom />}
        {activeTab === "tab2" && <DoubleRoom />}
        {activeTab === "tab3" && <PentHouse />}
      </div>
    </>
  );
}
