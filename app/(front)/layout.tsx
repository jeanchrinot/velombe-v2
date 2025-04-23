import Footer from "@/components/front/Footer"
import Header from "@/components/front/Header"

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
