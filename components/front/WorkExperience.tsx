// WorkExperience.tsx
"use client"
import Image from "next/image"
import GridPatternDashed from "./GridPattern"
import { motion } from "framer-motion"
import HighlightWords from "../snippets/HighlightWords"
import { BriefcaseBusiness } from "lucide-react"
import { AuroraText } from "../magicui/aurora-text"
import { MagicCard } from "@/components/magicui/magic-card"
import { useTheme } from "next-themes"
import RevealOnScroll from "./animations/RevealOnScroll"

const experiences = [
  {
    company: "Sayhey Inc.",
    logo: "/img/companies/sayhey.png",
    url: "https://sayheyinc.com/",
    years: "2022 - Present",
    location: "Remote | Romania",
    position: "Lead Developer",
    responsibilities: [
      "Built chatbot builder platform with Next.js + Django.",
      "Designed React Flow-based drag-and-drop chatbot UI.",
      "Integrated OpenAI models via LangChain for LLM-powered bots.",
      "Led sprint planning & dev roadmap",
    ],
  },
  {
    company: "Snooze Buzz",
    logo: "/img/companies/snoozebuzz.png",
    url: "https://www.snoozebuzz.com/",
    years: "2020 - 2022",
    location: "Remote | Romania",
    position: "Full-stack Web Developer",
    responsibilities: [
      "Developed web apps using Laravel, React, Django REST API.",
      "Designed DB schemas for producitivy tools web app with PosgreSQL.",
      "Played a DevOps role and handled the deployment of web applications on Digital Ocean.",
      "Integrated Meta platforms such as Facebook Messenger and Whatsapp into the web app.",
    ],
  },
  {
    company: "Yasa Medya",
    logo: "/img/companies/yasamedya.png",
    url: "https://yasamedya.com/",
    years: "2019",
    location: "Kocaeli | Türkiye",
    position: "PHP Developer",
    responsibilities: [
      "Designed websites frontend with HTML and CSS.",
      "Developed websites backend and database with PHP and MySQL.",
      "Built online stores with e-commerce CMS like OpenCart.",
    ],
  },
]

const WorkExperience = () => {
  const { theme } = useTheme()

  return (
    <section
      id="work-experience"
      className="py-20 flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      <GridPatternDashed />
      <div className="w-full lg:max-w-3xl mx-auto items-center px-2 md:gap-10 md:px-10 mb-4">
        {/* Headline */}
        <RevealOnScroll>
          <motion.h2 className="font-bold inline-block rounded-lg bg-blue-600 text-background px-3 py-1 text-sm text-white leading-tight mb-3">
            Work Experience
          </motion.h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <motion.h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            {"Where I've built"} <AuroraText>and grown.</AuroraText>
          </motion.h3>
        </RevealOnScroll>
        <RevealOnScroll>
          <motion.p className="mt-4 text-md text-gray-700 dark:text-gray-100 w-full">
            With{" "}
            <HighlightWords>
              over 6 years of professional experience
            </HighlightWords>{" "}
            {`as a Full-Stack Developer, I specialize in building modern, scalable
            web applications using JavaScript (Next.js, React) and Python
            (Django). I've contributed to SaaS platforms, AI chatbot
            integrations, and customer support automation tools—crafting both
            frontend interfaces and backend architectures. My work spans from
            startup environments to academic research projects, combining clean
            code, user-centered design, and automation to deliver impactful
            solutions.`}
          </motion.p>
        </RevealOnScroll>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 w-full lg:max-w-5xl mx-auto">
        {experiences.map((job, idx) => (
          <RevealOnScroll
            key={idx}
            className="relative block rounded-xl border border-gray-200 dark:border-white/10  shadow-sm dark:bg-black bg-white z-5 justify-start text-left overflow-hidden"
          >
            {/* <BorderBeam duration={8} size={200} className="rounded-xl" /> */}
            <MagicCard
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="p-6 w-full h-full"
            >
              <div className="w-full relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <a href={job.url} target="_blank">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </a>
                  <div>
                    <a href={job.url} target="_blank">
                      <h3 className="text-lg font-semibold">{job.company}</h3>
                    </a>
                    <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                      {job.location}
                      <span className="inline-flex w-2 h-2 bg-blue-600 rounded-full mx-2"></span>
                      {job.years}
                    </p>
                  </div>
                </div>
                <h4 className="flex items-center text-md font-medium mb-2">
                  <BriefcaseBusiness className="w-4 h-4 mr-2" /> {job.position}
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700 dark:text-gray-300">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </MagicCard>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
