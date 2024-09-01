import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  const menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact",
    },
  ];
  return (
    <div className="flex justify-between items-center p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" width={200} height={200} alt="logo" priority />
        <ul className="hidden md:flex gap-8">
          {menu.map((item) => (
            <Link href={item.path} key={item.id}>
              <li className=" hover:text-primary hover:scale-105 transition-all ease-in-out">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button >
        Get Started
      </Button>
    </div>
  );
}
