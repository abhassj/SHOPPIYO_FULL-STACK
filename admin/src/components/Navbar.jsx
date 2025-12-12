import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between px-[4%] py-3 bg-white border-b border-[#ffe0b8] shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          className="w-44 sm:w-52 h-auto object-contain"
          src={assets.logo}
          alt="Shoppiyo Admin"
        />
        <span className="hidden sm:inline text-xs tracking-[0.25em] uppercase text-[#ff8a00]">
          Admin Panel
        </span>
      </div>

      {/* Logout button */}
      <button
        onClick={() => setToken("")}
        className="bg-[#111111] hover:bg-[#ff8a00] transition-colors text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
