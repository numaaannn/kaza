"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag, Search } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Shop", href: "/shop" },
    { label: "Collections", href: "/collections" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border transition-all duration-300 ease-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-foreground tracking-wider hover:text-primary transition-colors duration-300">
              KAZA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-300 hover:shadow-lg hover:-translate-y-1">
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-300 hover:shadow-lg hover:-translate-y-1 relative">
              <ShoppingBag className="w-5 h-5 text-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full animate-pulse-soft"></span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors duration-300"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-foreground animate-scale-up" />
              ) : (
                <Menu className="w-5 h-5 text-foreground animate-scale-up" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border animate-slide-up">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors duration-300 stagger-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
