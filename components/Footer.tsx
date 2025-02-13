import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 w-full py-6">
      {/* Divider */}
      <div className="bg-white/30 w-full h-[1px] mb-6" />

      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="font-bold text-3xl text-white">Tech</h1>
        </div>

        {/* Contact Link */}
        <div className="text-right">
          <Link href="/Contact" className="text-gray-400 hover:text-white transition duration-300">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-right sm:text-center text-xs sm:-mt-7 text-gray-400">
        © {new Date().getFullYear()} Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
