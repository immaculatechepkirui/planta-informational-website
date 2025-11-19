import Image from "next/image";
import { FiInstagram, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-planta text-white pt-12 px-4 pb-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-0 md:justify-between">
        <div className="mb-8 md:mb-0 flex-1">
          <div className="flex items-center gap-3 mb-2">
            <Image src="/images/planta-logo.svg" alt="Planta logo" width={28} height={28} />
            <span className="text-lg font-bold">Planta</span>
          </div>
          <p className="text-sm max-w-xs">
            Data-driven AI for Africa&apos;s rice farmers. Boost yields, streamline your field, and make farming smarter.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2 text-planta-gold">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#home" className="hover:text-planta-gold transition">Home</a></li>
            <li><a href="#about" className="hover:text-planta-gold transition">About</a></li>
            <li><a href="#how" className="hover:text-planta-gold transition">How It Works</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2 text-planta-gold">Contact</h3>
          <div className="flex items-center gap-3 mb-2">
            <FiInstagram className="text-xl" />
            <span>@she.be.immah</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <FaWhatsapp className="text-xl" />
            <span>0725210078</span>
          </div>
          <div className="flex items-center gap-3">
            <FiMail className="text-xl" />
            <span>chepkiruiimmaculatekogo@gmail.com</span>
          </div>
        </div>
      </div>
      <hr className="border-t border-planta-gold my-6"/>
      <div className="text-center text-sm text-planta-gold tracking-wide">
        &copy; {new Date().getFullYear()} Planta. All rights reserved.
      </div>
    </footer>
  )
}