"use client";

import Image from "next/image";
import pent from "../../../public/Pent.png";
import { Play } from "next/font/google";
import { EB_Garamond } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: "400", display: "swap" });
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function PentHouse() {
  return (
    <div className="flex gap-8 flex-col lg:flex-row lg:ml-9">
      <Image
        src={pent}
        alt="Plan for PentHouse Suite"
        width={600}
        className="h-[30rem]"
      />
      <div className="flex flex-col justify-center mx-2 lg:mx-[4rem] text-[1.3rem] leading-8">
        <p className={`${eb_garamond.className}`}>
          Ascend to unparalleled luxury in our flagship penthouse suite. Revel
          in a generously spacious master bedroom, unwind in the chic living
          area, and embrace the allure of a private terrace offering a panoramic
          view of the Burma Hills.
        </p>
        <h1 className={`mt-12 ${play.className}`}>FROM $600,000 **</h1>
        <small>1 available unit</small>
      </div>
    </div>
  );
}
