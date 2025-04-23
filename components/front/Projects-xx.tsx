"use client"
import GridPatternDashed from "./GridPattern"
import { motion } from "framer-motion"
import HighlightWords from "../snippets/HighlightWords"
import { AuroraText } from "../magicui/aurora-text"
import { BentoCard, BentoGrid } from "@/components/magicui/projects-bento-grid"

const projects = [
  {
    name: "AIxFlows",
    shortDesc: "AI Chatbot Builder",
    fullDesc:
      "A platform that allows users to create, customize, and deploy AI chatbots with ease. Includes flow builder, analytics, and multi-channel integration.",
    image: "/img/projects/aixflows.png",
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
    tech: ["Next.js", "Python", "OpenAI", "CNN", "MongoDB", "LangChain"],
    links: {
      github: "https://github.com/jeanchrinot/food-advisor",
      website: "",
    },
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  //   {
  //     name: "AIxFlowss",
  //     shortDesc: "AI Chatbot Builder",
  //     fullDesc:
  //       "A platform that allows users to create, customize, and deploy AI chatbots with ease. Includes flow builder, analytics, and multi-channel integration.",
  //     image: "/img/projects/aixflows.png",
  //     tech: ["Next.js", "Tailwind CSS", "LangChain", "OpenAI", "Supabase"],
  //     links: {
  //       website: "https://aixflows.com",
  //       github: "https://github.com/velombe/aixflows",
  //     },
  //     className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  //   },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 flex flex-col justify-center items-center text-center px-6 py-10 relative overflow-hidden"
    >
      <GridPatternDashed />
      <div className="w-full lg:max-w-3xl mx-auto items-center px-2 md:gap-10 md:px-10 mb-4">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold inline-block rounded-lg bg-blue-600 text-background px-3 py-1 text-sm text-white leading-tight mb-3"
        >
          Projects
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          {"What I've been"} <AuroraText>building.</AuroraText>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-4 text-md text-gray-700 dark:text-gray-100 w-full"
        >
          <HighlightWords>From AI tools to full-stack platforms</HighlightWords>
          , these are the projects where I turn ideas into real-world solutions
          using modern tech like Next.js, Python, and more.
        </motion.p>
      </div>
      <BentoGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[1fr] w-full lg:max-w-5xl">
        {projects.map((feature) => (
          <BentoCard key={feature.name} {...feature}></BentoCard>
        ))}
      </BentoGrid>
    </section>
  )
}
