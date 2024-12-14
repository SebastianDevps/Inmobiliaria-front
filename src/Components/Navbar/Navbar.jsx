import React, { useState } from "react";
import { Link as Anchor, useLocation } from "react-router-dom";
import InputSearch from "../InputSerach/InputSearchs";
import logo from "../../images/logo.png";
import { navLinks } from "../data";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Componente NavLink personalizado
const NavLink = ({ to, children, className = "", onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Anchor
      to={to}
      onClick={onClick}
      className={`relative ${className} ${
        isActive ? "text-[var(--color1)]" : "hover:text-[var(--color1)]"
      }`}
    >
      {children}
      {/* {isActive && (
        <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-[var(--color1)] rounded-full" />
      )} */}
    </Anchor>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full z-50 fixed">
      <nav className="flex items-center justify-around p-2 h-[10vh] shadow-md bg-white">
        {/* Logo */}
        <Anchor to="/" className="flex items-center p-2 gap-2">
          <img src={logo} alt="logo" className="w-[50px] lg:w-[30px]" />
          <h1 className="text-2xl font-bold text-[var(--color1)] hidden lg:block">
            {/* Inmobiliaria */}
            <Skeleton className="animate-pulse" width={160} height={25} />
          </h1>
        </Anchor>

        <div className="w-full lg:hidden max-w-md px-8">
          <InputSearch />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex w-[55%] items-center justify-between">
          <div className="flex gap-4">
            {navLinks.map(({ path, label }) => (
              <NavLink className="lg:text-lg" key={path} to={path}>
                {label}
              </NavLink>
            ))}
          </div>
          <InputSearch />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col p-2 gap-1.5 z-50"
        >
          <span
            className={`block w-7 h-1 bg-[var(--color1)] transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-7 h-1 bg-[var(--color1)] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-7 h-1 bg-[var(--color1)] transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Login Button (Desktop) */}
        <NavLink
          to="/login"
          className="hidden lg:block bg-[var(--color1)] px-4 py-2 rounded-full font-semibold text-white hover:bg-white hover:text-[var(--color1)] hover:border hover:border-[var(--color1)] transition-all duration-300"
        >
          Inicia Sesión
        </NavLink>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-full lg:hidden bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-5 h-full">
            <div className="flex flex-col items-center gap-6 mt-10">
              <Anchor to="/" className="flex flex-col items-center p-2 gap-2">
                <img src={logo} alt="logo" className="w-[50px] lg:w-[30px]" />
                <h1 className="text-2xl font-bold text-[var(--color1)]">
                  {/* Inmobiliaria */}
                  <Skeleton className="animate-pulse" width={160} height={25} />
                </h1>
              </Anchor>

              {navLinks.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  className="text-lg"
                  onClick={toggleMenu}
                >
                  {label}
                </NavLink>
              ))}

              <NavLink
                to="/login"
                className="bg-[var(--color1)] px-6 py-2 rounded-full font-semibold text-white mt-4"
                onClick={toggleMenu}
              >
                Inicia Sesión
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
