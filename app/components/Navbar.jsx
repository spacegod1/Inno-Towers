"use client";

import Image from "next/image";
import logo from "../../public/InnoLogo-white.svg";
import logoBlack from "../../public/InnoLogo.svg";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { poiretOne } from "../styles/fonts";
import { Squeeze as Hamburger } from 'hamburger-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/apartments", label: "Apartments" },
    { href: "/amenities", label: "Amenities" },
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
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", changeNavBackground);
    };
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
        className={`hidden gap-7 uppercase mx-3 ${poiretOne.className} tracking-wider font-semibold md:flex `}
      >
        {links.map((link) => {
          const isActive = pathName === link.href;
          const activeColorClass = isScrolled && pathName !== "/" 
            ? "text-white" 
            : "text-[#bc9142]";
          
          return (
            <Link key={link.href} href={link.href} prefetch>
              <li
                className={`transition-colors duration-300 ${
                  isActive ? activeColorClass : "hover:text-[#bc9142]"
                }`}
              >
                {link.label}
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="block md:hidden">
        <Hamburger 
          toggled={isOpen} 
          toggle={setIsOpen}
          size={24}
          duration={0.4}
          color="currentColor"
        />
      </div>
      <div
        className={
          isOpen
            ? "fixed h-full w-[55%] bg-[#232D3F] top-0 left-0 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul
          className={`flex flex-col gap-7 mt-[15rem] ml-11 uppercase font-medium ${poiretOne.className}`}
        >
          {links.map((link) => {
            const isActive = pathName === link.href;
            
            return (
              <Link key={link.href} href={link.href} prefetch>
                <li 
                  onClick={handleIsOpen}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-[#bc9142]" : "text-white hover:text-[#bc9142]"
                  }`}
                >
                  {link.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
