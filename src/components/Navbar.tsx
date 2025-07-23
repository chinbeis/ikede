"use client";
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex w-full justify-between bg-environmental-green text-white p-4">
      <Link href="/" className="text-2xl font-bold">
        Ikede Construction
      </Link>
      <NavigationMenu.List className="center m-0 flex list-none items-center space-x-4">
        <NavigationMenu.Item>
          <Link
            className="hover:text-navy-blue focus:text-navy-blue transition-colors"
            href="#"
          >
            Home
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link
            className="hover:text-navy-blue focus:text-navy-blue transition-colors"
            href="#"
          >
            About Us
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link
            className="hover:text-navy-blue focus:text-navy-blue transition-colors"
            href="#"
          >
            Our Services
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link
            className="hover:text-navy-blue focus:text-navy-blue transition-colors"
            href="#"
          >
            Blog
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link
            className="hover:text-navy-blue focus:text-navy-blue transition-colors"
            href="#"
          >
            Contact
          </Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
export default Navbar;
