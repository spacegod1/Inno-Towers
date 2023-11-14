"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import logo from "../../public/InnoLogo-white.svg";
import logoBlack from "../../public/InnoLogo.svg";
import Link from "next/link";
import { TfiClose } from "react-icons/tfi";
import { CgMenuGridO } from "react-icons/cg";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/apartments", label: "Apartments" },
    { href: "/features", label: "Features" },
    { href: "/contact_us", label: "Contact Us" },
  ];

  useEffect(() => {
    const changeNavBackground = () => {
      if (window.scrollY >= 115) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", changeNavBackground);
  }, []);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`flex justify-between ease duration-300 items-center ${
        pathName === "/" && "text-white"
      } z-40 m-auto p-4 absolute w-full top-0 ${
        pathName !== "/" && isScrolled && "active"
      }`}
    >
      <div>
        <Link href="/" prefetch>
          <Image
            src={pathName === "/" ? logo : logoBlack}
            alt="Inno Towers Logo"
            height={62}
            width={62}
          />
        </Link>
      </div>

      <ul
        className={`hidden gap-7 uppercase mx-3 ${montserrat.className} tracking-wider md:flex `}
      >
        {links.map((link) => {
          return (
            <Link key={link.href} href={link.href} prefetch>
              <li
                className={`${
                  pathName === link.href && "underline underline-offset-2"
                }`}
              >
                {link.label}
              </li>
            </Link>
          );
        })}
      </ul>
      <div onClick={handleIsOpen} className="block md:hidden">
        {isOpen ? (
          <TfiClose size={25} className="font-bold" />
        ) : (
          <CgMenuGridO size={40} className="font-bold" />
        )}
      </div>
      <div
        className={
          isOpen
            ? "fixed h-full w-[55%] bg-[#232D3F] top-0 left-0 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul
          className={`flex flex-col gap-7 mt-[15rem] ml-11 text-white uppercase ${montserrat.className}`}
        >
          {links.map((link) => {
            return (
              <Link key={link.href} href={link.href} prefetch>
                <li onClick={handleIsOpen}>{link.label}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
