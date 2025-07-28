"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills & Experience", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#home" 
              className="text-xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              Sadaqat.AI
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            mobileMenuOpen ? "max-h-64" : "max-h-0"
          )}
        >
          <div className="space-y-1 py-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}