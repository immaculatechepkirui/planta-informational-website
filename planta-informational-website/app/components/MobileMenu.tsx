"use client"
import Image from "next/image";
import { FiX } from "react-icons/fi";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "How It Works", href: "#how" },
  { title: "FAQ", href: "#faq" }
];

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed z-30 inset-0 bg-black bg-opacity-40 flex flex-col">
      <div className="bg-[#EDECEA] w-64 min-h-full flex flex-col py-8 px-6 shadow">
        <div className="flex justify-between items-center mb-8">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-planta">
            <Image src="/images/planta-logo.svg" alt="Planta logo" width={32} height={32} />
            Planta
          </a>
          <button onClick={onClose} className="text-2xl text-planta" aria-label="Close menu">
            <FiX />
          </button>
        </div>
        <nav className="flex flex-col gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-planta hover:text-planta-gold"
              onClick={onClose}
            >
              {link.title}
            </a>
          ))}
        </nav>
        <a
          href="#"
          className="mt-8 block w-full text-center py-2 rounded-full bg-planta text-white font-semibold transition hover:bg-planta-gold hover:text-planta"
          onClick={onClose}
        >
          Get Started
        </a>
      </div>
    </div>
  );
}