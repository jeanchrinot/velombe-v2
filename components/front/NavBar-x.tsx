"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Menu */}
          <div className="flex items-center space-x-10">
            <Link href="/">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                velombe<span className="text-blue-500">.com</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {["About", "Projects", "Services", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          <div className="hidden md:flex">
            <Link
              href="/#contact"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              🚀 Let’s Talk
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 pt-2 space-y-2 shadow-sm">
          {["About", "Projects", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="block text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="block bg-blue-600 text-white text-center px-4 py-2 rounded-md font-medium hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            {"🚀 Let's Talk"}
          </Link>
        </div>
      )}
    </div>
  )
}

export default Header
