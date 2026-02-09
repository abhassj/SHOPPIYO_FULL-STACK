import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisble] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { setShowSearch, navigate, getCartCount, token, logout } =
    useContext(ShopContext);

  const handleProfileIconClick = () => {
    if (!token) navigate("/login");
  };

  const handleLogout = () => logout();

  // Detect scroll for shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fade-in animation
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]
        transition-all duration-300
        backdrop-blur-xl
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}

        ${
          isScrolled
            ? "h-[60px] bg-white/40 border-b border-white/30 shadow-lg"
            : "h-[80px] bg-white/20"
        }
      `}
    >
      {/* Logo */}
      <Link to="/">
        <img
          className={`transition-all duration-300 ${
            isScrolled ? "w-40" : "w-48"
          }`}
          src={assets.logo}
          alt="Shoppiyo Logo"
        />
      </Link>

      {/* Desktop navigation */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1 text-shippiyo-orange">
          <p>COLLECTION</p>
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1 text-shippiyo-orange">
          <p>CONTACT</p>
        </NavLink>
      </ul>

      {/* Right section */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <img
          onClick={() => {
            setShowSearch(true);
            navigate("/collection");
          }}
          className="w-5 cursor-pointer"
          src={assets.search_icon}
          alt="search"
        />

        {/* Profile */}
        <div className="group relative">
          <img
            onClick={handleProfileIconClick}
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="profile"
          />

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-white/70 backdrop-blur-xl text-gray-700 rounded shadow-md border border-white/40">
              {token ? (
                <>
                  <p onClick={() => navigate("/profile")} className="cursor-pointer hover:text-black">My Profile</p>
                  <p onClick={() => navigate("/orders")} className="cursor-pointer hover:text-black">Orders</p>
                  <p onClick={handleLogout} className="cursor-pointer hover:text-black">Logout</p>
                </>
              ) : (
                <p onClick={() => navigate("/login")} className="cursor-pointer hover:text-black">
                  Login / Signup
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img className="w-5 min-w-5" src={assets.cart_icon} alt="cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile menu */}
        <img
          onClick={() => setVisble(true)}
          className="w-5 cursor-pointer sm:hidden"
          src={assets.menu_icon}
          alt="menu"
        />
      </div>

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen bg-white transition-all duration-500 z-[100] ${
          visible ? "w-full opacity-100" : "w-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col text-gray-700 h-full">
            {/* Header / Back Button */}
            <div onClick={() => setVisble(false)} className="flex items-center gap-4 p-6 cursor-pointer hover:text-shippiyo-orange transition-colors">
                <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
                <p className="font-medium tracking-wide">BACK</p>
            </div>

            {/* Navigation Links - Premium Style */}
            <div className="flex flex-col mt-10 px-8 gap-8">
                <NavLink 
                    onClick={() => setVisble(false)} 
                    to="/" 
                    className="text-3xl font-light tracking-wide hover:text-black transition-colors"
                >
                    HOME
                </NavLink>
                <NavLink 
                    onClick={() => setVisble(false)} 
                    to="/collection" 
                    className="text-3xl font-light tracking-wide hover:text-black transition-colors"
                >
                    COLLECTION
                </NavLink>
                <NavLink 
                    onClick={() => setVisble(false)} 
                    to="/about" 
                    className="text-3xl font-light tracking-wide hover:text-black transition-colors"
                >
                    ABOUT
                </NavLink>
                <NavLink 
                    onClick={() => setVisble(false)} 
                    to="/contact" 
                    className="text-3xl font-light tracking-wide hover:text-black transition-colors"
                >
                    CONTACT
                </NavLink>
            </div>

            {/* Sidebar Footer */}
            <div className="mt-auto p-10 border-t border-gray-100">
                <p className="text-xl font-medium mb-4">FOLLOW US</p>
                <div className="flex gap-4 text-gray-500 text-sm tracking-widest uppercase">
                    <p className="cursor-pointer hover:text-black transition-colors">Instagram</p>
                    <p className="cursor-pointer hover:text-black transition-colors">Facebook</p>
                    <p className="cursor-pointer hover:text-black transition-colors">Pinterest</p>
                </div>
                <p className="mt-8 text-xs text-gray-400">© 2025 Shoppiyo</p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
