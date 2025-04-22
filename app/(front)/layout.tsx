import Footer from "@/components/front/Footer"
import Header from "@/components/front/Header"
import Navbar from "@/components/front/Navbar"
import { ThemeToggle } from "@/components/themeToggle"

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      {/* <ThemeToggle /> */}
      <Footer />
    </>
  )
}
