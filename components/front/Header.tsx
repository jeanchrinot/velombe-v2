"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Handshake } from "lucide-react"
import Logo from "./Logo"
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"
import { RainbowButton } from "@/components/magicui/rainbow-button"
import { Separator } from "../ui/separator"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`top-0 z-50 transition-all duration-300 
    md:sticky sm:top-0
    ${
      isScrolled
        ? "md:bg-white/80 md:dark:bg-white/10 md:backdrop-blur md:shadow-sm"
        : "bg-transparent"
    }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between md:h-16 py-10 md:py-0">
          {/* Left: Logo + Menu */}
          <div className="flex items-center space-x-10">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          {/* <NavBar /> */}
          {/* Right: CTA */}
          <div className="flex items-center text-center md:text-left mb-4 md:mb-0">
            <AnimatedGradientText className="text-sm">
              🚀 On the lookout for my next big adventure in tech. Got a role
              where I can make an impact?{" "}
              <a href="#contact" className="underline">
                {`Let's connect`}
              </a>
              .
            </AnimatedGradientText>
          </div>
          <div className="flex">
            {/* <Link
              href="/#contact"
              className="flex items-center bg-blue-600 text-white px-5 py-2 h-9 rounded-md font-normal text-sm hover:bg-blue-700 transition"
            >

            </Link> */}
            <Link href="/#contact">
              <RainbowButton className=" px-4 py-1 h-9 rounded-md text-sm font-normal">
                Hire Me
                <Handshake className="ml-2 w-4 h-4" />
              </RainbowButton>
            </Link>
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
            Hire Me
          </Link>
        </div>
      )}
      <Separator className="md:hidden my-4 max-w-[200px] mx-auto" />
    </div>
  )
}

export default Header
