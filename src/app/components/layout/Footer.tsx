"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "../ui/Container";
import { Menu, X } from "lucide-react";
import logo from "../../assets/image/svgviewer-png-output.png";
import Image from "next/image";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="py-4  bg-[#f6fffe] backdrop-blur-lg sticky top-0 z-50 pt-18">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <Image
            quality={100}
            width={136}
            height={100}
            src={logo}
            alt="flowrise"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#pricing" className="hover:text-gray-700">
            About
          </Link>
          <Link href="#features" className="hover:text-gray-700">
            Features
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <Container className="flex flex-col py-4 gap-4">
            <Link href="#pricing">About</Link>
            <Link href="#features">Features</Link>
          </Container>
        </div>
      )}
    </nav>
  );
}
