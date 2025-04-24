import Footer from "@/components/front/Footer"
import Header from "@/components/front/Header"
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL

export const metadata = {
  title: "Velombe | Full-Stack Developer",
  description:
    "I'm a passionate Full-stack Developer with hands-on experience in building SaaS platforms, AI chatbots integrations, and scalable web applications . Proficient in modern JS and Python stacks with a strong focus on LLM integration, chatbot systems, and web application architecture.",
  applicationName: "Velombe",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Web Developer",
    "AI Chatbot Specialist",
    "Website Designer",
    "SaaS Developer",
    "Velombe",
    "Full-stack Developer",
  ],
  authors: [{ name: "Velombe" }],
  path: "/",
  colorScheme: "light dark",
  creator: "Velombe",

  openGraph: {
    title: "Velombe | Full-Stack Developer",
    description:
      "I'm a passionate Full-stack Developer with hands-on experience in building SaaS platforms, AI chatbots integrations, and scalable web applications . Proficient in modern JS and Python stacks with a strong focus on LLM integration, chatbot systems, and web application architecture.",
    url: "https://velombe.com",
    siteName: "Velombe",
    images: [
      {
        url: `${baseUrl}/img/velombe.jpg`,
        width: 604,
        height: 610,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon-32x32.png",
    },
  },
}

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
