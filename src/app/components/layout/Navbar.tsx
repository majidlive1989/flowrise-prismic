"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "../ui/Container";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="py-4 border-b bg-white/70 backdrop-blur-lg sticky top-0 z-50">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Flowrise
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="hover:text-gray-700">
            Features
          </Link>

          <Link href="#pricing" className="hover:text-gray-700">
            Pricing
          </Link>

          <Link href="#testimonials" className="hover:text-gray-700">
            Testimonials
          </Link>

          <Button>Get Started</Button>
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
            <Link href="#features">Features</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Button>Get Started</Button>
          </Container>
        </div>
      )}
    </nav>
  );
}
