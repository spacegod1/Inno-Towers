"use client";

import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { FaCar } from "react-icons/fa";
import {
  MdSecurity,
  MdOutlineElectricalServices,
  MdLocalLaundryService,
} from "react-icons/md";
import { GiLift } from "react-icons/gi";
import { ImConnection } from "react-icons/im";

export default function Services() {
  return (
    <section className="bg-[#F3EEEA] flex flex-wrap justify-center px-8 py-14 gap-9 md:gap-12 mt-14 ">
      <div className="w-[27rem]">
        <ImConnection size={27} className="text-[#bc9142]" />
        <div>
          <h3 className="text-[1.125rem] font-medium mb-2">High Speed Wifi</h3>
          <p className="text-justify">
            Stay connected seamlessly on our lightning fast internet
            connectivity that caters to the demands of your modern lifestyle;
            ideal for residents who study and/or work remotely.{" "}
          </p>
        </div>
      </div>
      <div className="w-[27rem]">
        <FaCar size={27} className="text-[#bc9142]" />
        <h3 className="text-[1.125rem] font-medium mb-2">Parking Space</h3>
        <p className="text-justify">
          Our spacious and well-maintained parking facilities ensure a
          stress-free experience, providing you with the peace of mind that
          comes with knowing your vehicle is safe and accessible right at home.{" "}
        </p>
      </div>
      <div className="w-[27rem]">
        <LiaSwimmingPoolSolid size={30} className="text-[#bc9142]" />
        <h3 className="text-[1.125rem] font-medium mb-2">Swimming Pool</h3>
        <p>
          Dive into a world of relaxation and socialization in our inviting pool
          area.{" "}
        </p>
      </div>
      <div className="w-[27rem]">
        <MdSecurity size={27} className="text-[#bc9142] mb-1" />
        <h3 className="text-[1.125rem] font-medium mb-2">24/7 Security</h3>
        <p className="text-justify">
          Your safety is our top priority at Inno Towers, where state-of-the-art
          CCTV surveillance and our vigilant security team blend to provide
          peace of mind.{" "}
        </p>
      </div>
      <div className="w-[27rem]">
        <MdOutlineElectricalServices size={30} className="text-[#bc9142]" />
        <h3 className="text-[1.125rem] font-medium mb-2">Backup Utilities</h3>
        <p className="text-justify">
          We understand that continuity is key, which is why our complex is
          equipped with robust backup systems for power and water supply.{" "}
        </p>
      </div>
      <div className="w-[27rem]">
        <GiLift size={27} className="text-[#bc9142]" />
        <h3 className="text-[1.125rem] font-medium mb-2">Lifts</h3>
        <p className="text-justify">
          Whether you are arriving home with groceries or just tired from work,
          our meticulously maintained elevators promise effortless glides
          between all floors.{" "}
        </p>
      </div>
    </section>
  );
}

{
  /* <div className="w-[27rem]">
        <MdLocalLaundryService size={27} className="text-[#bc9142]" />
        <h3 className="text-[1.125rem] font-medium">Laundry Services</h3>
        <p>
          Our professional laundry services ensure your clothes are cared for
          with the utmost attention, leaving you with more time to enjoy the
          things that matter.{" "}
        </p>
      </div> */
}
