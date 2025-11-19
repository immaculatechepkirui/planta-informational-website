"use client"
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "How It Works", href: "#how" },
  { title: "FAQ", href: "#faq" }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed z-20 top-0 left-0 w-full flex items-center justify-between bg-[#EDECEA] px-8 py-4 shadow-md">
        <a href="#" className="flex items-center gap-3 text-xl font-bold text-planta">
          <Image src="/images/planta-logo.svg" alt="Planta logo" width={36} height={36} />
          <span>Planta</span>
        </a>
        <nav className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-planta hover:text-planta-gold transition"
            >
              {link.title}
            </a>
          ))}
        </nav>
        <a
          href="#"
          className="hidden md:block text-base px-6 py-2 rounded-full font-semibold bg-planta text-white hover:bg-planta-gold hover:text-planta transition text-center"
        >
          Get Started
        </a>
        <button
          className="md:hidden text-3xl text-planta"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu />
        </button>
      </header>
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  );
}