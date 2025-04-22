"use client"

import Link from "next/link"
import { ReactNode } from "react"

type ButtonLinkProps = {
  href: string
  text: string
  icon?: ReactNode
  //   onClick?: () => void
}

const ButtonLink = ({ href, text, icon }: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center bg-blue-600 text-white px-6 py-4 h-10 rounded-md shadow hover:bg-blue-700 transition font-normal text-sm"
    >
      <span>{text}</span>
      {icon}
    </Link>
  )
}

export default ButtonLink
