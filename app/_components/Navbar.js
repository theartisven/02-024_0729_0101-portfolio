"use client"; // Ensure this component is treated as a client component
import "../globals.css";
import Link from "next/link";
import Linkies from "./Linkies";
import { useState } from "react";
import { RiCloseFill, RiMenuLine } from "react-icons/ri";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close state
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <nav className="flex flex-row justify-between items-center  h-[6.66%] md:rounded-md overflow-hidden w-full lg:max-w-[992px] xl:max-w-[1200px] relative min-h-[3rem]">
      <Link href="/">
        <img
          src="../img/asset/logo.webp"
          width="44"
          height="44"
          alt="Sven Hero Kaufmann's Personal Logo"
          className="hover:rotate-[120deg] transition-all duration-1000 origin-center"
        />
      </Link>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? (
            <RiCloseFill size={30} className="text-violet-500" />
          ) : (
            <RiMenuLine size={30} className="text-violet-500" />
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-2 flex-row">
        <Linkies name="curated" href="/" onClick={closeMenu} />
        <div className="text-violet-500 font-medium px-1 py-2">\\</div>
        <Linkies name="other-uiux" href="/other-uiux" onClick={closeMenu} />
        <div className="text-violet-500 font-medium px-1 py-2">\\</div>
        <Linkies name="about-me" href="/about-me" onClick={closeMenu} />
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-zinc-50 dark:bg-zinc-900  bg-opacity-75  z-50 flex flex-col items-center justify-center md:hidden">
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-violet-500 font-medium px-1 py-2"
          >
            <RiCloseFill size={30} />
          </button>
          <Link href="/" onClick={closeMenu}>
            <img
              src="../img/asset/logo.png"
              width="88"
              height="88"
              alt="Sven Hero Kaufmann's Personal Logo"
              className="pb-8"
            />
          </Link>

          <Linkies name="curated" href="/" onClick={closeMenu} />
          <Linkies name="other works" href="/other-uiux" onClick={closeMenu} />
          <Linkies name="about-me" href="/about-me" onClick={closeMenu} />
        </div>
      )}
    </nav>
  );
}
