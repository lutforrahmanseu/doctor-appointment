"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menu = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Explore", path: "/explore" },
    { id: 3, name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`flex items-center justify-between w-full px-4 md:px-28 py-2 transition-all duration-300 ease-in-out ${
        isSticky ? "sticky top-0 bg-white shadow-lg z-50" : ""
      }`}
    >
      <div className="flex items-center">
        <Link href="/">
          <Image src="/logo.jpg" width={60} height={60} alt="logo" priority />
        </Link>
      </div>

      <nav className="hidden md:flex flex-grow justify-end items-center gap-8">
        {menu.map((item) => (
          <Link href={item.path} key={item.id}>
            <li className="list-none hover:text-primary text-lg hover:scale-105 transition-all ease-in-out">
              {item.name}
            </li>
          </Link>
        ))}
      </nav>

      <div className="md:hidden">
        <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white z-40 shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-4 p-4">
            {menu.map((item) => (
              <Link href={item.path} key={item.id}>
                <li className="hover:text-primary text-lg hover:scale-105 transition-all ease-in-out">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
