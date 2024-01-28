// Navbar.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="desktop-nav bg-dark-blue sm:flex sm:items-center sm:justify-between py-3 px-8 hidden">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="w-auto md:h-16 h-12" />
        </Link>
        <div className="flex">
          <ul className="flex md:space-x-10 space-x-8">
            <li className="nav-link text-white md:text-lg text-md font-semibold hover:text-dark-yellow relative">
              <Link href="/tickets">Ticket Booking</Link>
            </li>
            <li className="nav-link text-white md:text-lg text-md font-semibold hover:text-dark-yellow relative">
              <Link href="/plan">Trip Planner</Link>
            </li>
            <li className="nav-link text-white md:text-lg text-md font-semibold hover:text-dark-yellow relative">
              <Link href="">Contact us</Link>
            </li>
            <li className="nav-link text-white md:text-lg text-md font-semibold hover:text-dark-yellow relative">
              <Link href="">About us</Link>
            </li>
          </ul>
        </div>
        <div className="flex md:space-x-4 space-x-2">
          <Link href="/login">
            <button className="bg-maize-crayola text-dark-blue font-semibold md:py-2 md:px-5 px-3 py-2 rounded-3xl bg-orange">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-maize-crayola text-dark-blue font-semibold md:py-2 md:px-5 px-3 py-2 rounded-3xl bg-orange">
              Register
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar Button */}
      <div className="bg-dark-blue p-3 sm:hidden flex justify-between items-center">
        <Image src={Logo} alt="Logo" className="w-auto md:h-16 h-12" />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-3xl z-50"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out sm:hidden`}
      >
        <nav className="bg-dark-blue flex flex-col items-center w-full h-screen">
          <div className="flex flex-col items-center space-y-6 pt-32 bg-dark-blue w-full">
            <Link href="#">
              <p className="text-white text-lg font-semibold">Ticket Booking</p>
            </Link>
            <Link href="#">
              <p className="text-white text-lg font-semibold">Trip Planner</p>
            </Link>
            <Link href="#">
              <p className="text-white text-lg font-semibold">Contact us</p>
            </Link>
            <Link href="#">
              <p className="text-white text-lg font-semibold">About us</p>
            </Link>
            <Link href="/login">
              <button className="bg-maize-crayola text-dark-blue font-semibold py-3 px-6 rounded-full bg-dark-yellow">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-maize-crayola text-dark-blue font-semibold py-3 px-6 rounded-full bg-dark-yellow">
               Register
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
