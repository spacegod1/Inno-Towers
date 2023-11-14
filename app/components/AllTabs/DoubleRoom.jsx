"use client";

import Image from "next/image";
import twobedroom from "../../../public/double.jpg";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: "400", display: "swap" });

export default function DoubleRoom() {
  return (
    <div className="flex gap-8 flex-col lg:flex-row lg:ml-9">
      <Image
        src={twobedroom}
        alt="Plan for 2 - bedroom"
        width={600}
        height={670}
      />
      <div className="flex flex-col justify-center mx-2 lg:mx-[5rem] text-[1.3rem] leading-8">
        <p>
          Discover the perfect balance of space and versatility, ideal for small
          families or individuals seeking functionality. With two comfortable en
          suite bedrooms, offering flexibility for a cozy home and a productive
          office space, along with a modern living area, this apartment is
          designed to accommodate your dynamic lifestyle with ease.
        </p>
        <h1 className={`mt-12 ${play.className}`}>FROM $245,000 **</h1>
        <small>8 available units</small>
      </div>
    </div>
  );
}
