"use client"
import { Github, Link } from "lucide-react"
import Image from "next/image"
import GridPatternDashed from "./GridPattern"
import { motion } from "framer-motion"
import HighlightWords from "../snippets/HighlightWords"
import { Lens } from "@/components/magicui/lens"
import { AuroraText } from "../magicui/aurora-text"
import { MagicCard } from "../magicui/magic-card"
import { useTheme } from "next-themes"
import RevealOnScroll from "./animations/RevealOnScroll"

const projects = [
  {
    name: "AIxFlows",
    shortDesc: "AI Chatbot Builder",
    fullDesc:
      "A platform that allows users to create, customize, and deploy AI chatbots with ease. Includes flow builder, analytics, and multi-channel integration.",
    image: "/img/projects/aixflows.png",
    video: "/video/aixflows.mp4",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "LangChain",
      "OpenAI",
      "RAG",
      "LangGraph",
    ],
    links: {
      website: "https://aixflows.snoozebuzz.com",
      github: "https://github.com/jeanchrinot/aixflows",
    },
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-1",
  },
  {
    name: "Chat Widget",
    shortDesc: "Embeddable Chat Widget",
    fullDesc:
      "A customizable chat widget built with React, TypeScript, and Vite, designed to be easily embedded into any website using a simple JavaScript snippet.",
    image: "/img/projects/food-advisor.png",
    video: "/video/chat-widget.mp4",
    tech: ["React", "Tailwind CSS", "Vite", "TypeScript"],
    links: {
      github: "https://github.com/jeanchrinot/chat-widget",
      website: "",
    },
    className: "lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Food Advisor",
    shortDesc: "Smart Diet Recommendations",
    fullDesc:
      "Mobile-first app that helps users analyze food nutrition using image recognition and gives personalized recommendations.",
    image: "/img/projects/food-advisor.png",
    video: "/video/food-advisor.mp4",
    tech: ["Next.js", "Python", "OpenAI", "CNN", "MongoDB", "LangChain"],
    links: {
      github: "https://github.com/jeanchrinot/food-advisor",
      website: "",
    },
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
]

export default function Projects() {
  const { theme } = useTheme()

  return (
    <section
      id="projects"
      className="py-20 flex flex-col justify-center items-center text-center px-6 py-10 relative overflow-hidden"
    >
      <GridPatternDashed />
      <div className="w-full lg:max-w-3xl mx-auto items-center px-2 md:gap-10 md:px-10 mb-4">
        {/* Headline */}
        <RevealOnScroll>
          <motion.h2 className="font-bold inline-block rounded-lg bg-blue-600 text-background px-3 py-1 text-sm text-white leading-tight mb-3">
            Projects
          </motion.h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <motion.h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            What I've been <AuroraText>building.</AuroraText>
          </motion.h3>
        </RevealOnScroll>
        <RevealOnScroll>
          <motion.p className="mt-4 text-md text-gray-700 dark:text-gray-100 w-full">
            <HighlightWords>
              From AI tools to full-stack platforms
            </HighlightWords>
            , these are the projects where I turn ideas into real-world
            solutions using modern tech like Next.js, Python, and more.
          </motion.p>
        </RevealOnScroll>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:max-w-5xl mx-auto mt-4">
        {projects.map((project, index) => (
          <RevealOnScroll
            key={index}
            className="rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden shadow-sm dark:bg-black bg-white z-5 justify-start text-left"
          >
            <MagicCard
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="p-0 w-full h-full"
            >
              {/* <Image
                src={project.image}
                alt={project.name}
                width={600}
                height={300}
                className="w-full object-cover h-36 rounded-none"
              /> */}
              <video
                src={project.video}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
              ></video>
              <div className="py-4 px-5 flex flex-col gap-1 justify-start text-left">
                <h3 className="text-xl font-bolder">
                  <AuroraText>{project.name}</AuroraText> {/* {project.name} */}
                </h3>
                <span className="text-xs font-medium">{project.shortDesc}</span>
                <p className="text-gray-600 dark:text-gray-300 text-xs">
                  {project.fullDesc}
                </p>

                <div className="flex flex-wrap gap-1 mt-3">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-1 bg-gray-800 text-white dark:bg-gray-800 dark:text-white rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-2">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-gray-800 hover:underline dark:text-gray-200"
                    >
                      <Link className="w-4 h-4" />
                      Website
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-gray-800 hover:underline dark:text-gray-200"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </MagicCard>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
