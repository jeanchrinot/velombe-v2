"use client"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function Logo() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // or a placeholder/logo spinner

  const currentTheme = theme === "system" ? resolvedTheme : theme

  return (
    <>
      {currentTheme === "dark" ? (
        <Image
          src="/velombe-white.png"
          height={60}
          width={160}
          alt="Velombe Logo"
        />
      ) : (
        <Image
          src="/velombe-black.png"
          height={60}
          width={160}
          alt="Velombe Logo"
        />
      )}
    </>
  )
}
