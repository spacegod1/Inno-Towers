import { EB_Garamond, Nunito_Sans } from "next/font/google";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { FaCar } from "react-icons/fa";
import {
  MdSecurity,
  MdOutlineElectricalServices,
  MdLocalLaundryService,
  MdCable,
} from "react-icons/md";
import { GiLift } from "react-icons/gi";

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  weight: "500",
  style: "italic",
  display: "swap",
});

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

export default function Amenities() {
  return (
    <section className="mt-[9.5rem]">
      <div className="hero-bg h-[250px] md:h-[470px] text-white flex flex-col gap-4 justify-center items-center text-center px-6">
        <p className={`${eb_garamond.className} text-[1.58rem] md:text-5xl`}>
          You Can Have It All Here
        </p>
        <p className={`${nunito_sans.className}`}>
          Our commitment to exceptional living extends beyond the confines of
          your residence, thus bringing convienience and comfort to your
          fingertips.
        </p>
      </div>
    </section>
  );
}
