"use client"
import { motion } from "framer-motion"
import { AuroraText } from "../magicui/aurora-text"
import GridPatternDashed from "./GridPattern"
import MarqueeTechnicalSkills from "./MarqueeTechStack"
import {
  Code,
  ServerCog,
  BrainCircuit,
  FileSearch,
  Bot,
  Paintbrush,
  Boxes,
  Cloud,
  LineChart,
} from "lucide-react"
import { MagicCard } from "../magicui/magic-card"
import { useTheme } from "next-themes"
import RevealOnScroll from "./animations/RevealOnScroll"
import HighlightWords from "../snippets/HighlightWords"

const skills = [
  {
    title: "Web Development",
    description:
      "Building responsive, performant websites with modern frameworks.",
    icon: Code,
  },
  {
    title: "SaaS Development",
    description:
      "Creating scalable SaaS products with robust user and billing systems.",
    icon: ServerCog,
  },
  {
    title: "AI Integration",
    description: "Embedding intelligent features using LLMs and AI APIs.",
    icon: BrainCircuit,
  },
  {
    title: "Retrieval Augmented Generation",
    description:
      "Boosting LLM output with external data sources and vector search.",
    icon: FileSearch,
  },
  {
    title: "Chatbot Flow Design",
    description:
      "Designing effective conversation logic and flows for chatbots.",
    icon: Bot,
  },
  {
    title: "Web Design",
    description:
      "Crafting visually appealing, user-friendly interface designs.",
    icon: Paintbrush,
  },
  {
    title: "Project Architecture",
    description:
      "Structuring full-stack apps with clean, scalable architecture.",
    icon: Boxes,
  },
  {
    title: "Cloud Deployments",
    description:
      "Deploying and managing apps on DigitalOcean and cloud platforms.",
    icon: Cloud,
  },
  {
    title: "ML/DL Fundamentals",
    description:
      "Understanding core ML/DL concepts for intelligent app development.",
    icon: LineChart,
  },
]

const TechnicalSkills = () => {
  const { theme } = useTheme()

  return (
    <section
      id="tech-stack"
      className="py-20 flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      <GridPatternDashed />
      <div className="w-full lg:max-w-3xl mx-auto items-center px-2 md:gap-10 md:px-10">
        {/* <GridPatternDashed /> */}
        <RevealOnScroll>
          <motion.h2 className="font-bold inline-block rounded-lg bg-blue-600 text-background px-3 py-1 text-sm text-white leading-tight mb-3">
            Skills
          </motion.h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <motion.h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            My technical <AuroraText>skills.</AuroraText>
          </motion.h3>
        </RevealOnScroll>

        {/* Subheadline */}
        <RevealOnScroll>
          <motion.p className="mt-4 text-md text-foreground w-full">
            I specialize in building robust,{" "}
            <HighlightWords>modern web applications</HighlightWords> using a
            powerful combination of tools and frameworks. On the frontend, I
            craft smooth user experiences with Next.js, React, and Tailwind CSS.
            On the backend, I rely on the versatility of Python, Node.js, and
            Laravel to power scalable APIs and logic. Whether it's designing
            responsive UIs or developing efficient server-side architectures, I
            enjoy working across the full stack to deliver high-quality
            solutions.
          </motion.p>
        </RevealOnScroll>
      </div>

      {/* Right Column – Icons/Logos */}
      <div className="w-full lg:max-w-4xl mx-auto items-center pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  z-50">
          {skills.map(({ title, description, icon: Icon }, index) => (
            <RevealOnScroll
              key={index}
              className={`z-10 flex flex-col gap-y-2 rounded-xl items-center justify-center transition-colors hover:bg-secondary last:border-b-0
            min-h-50`}
            >
              <MagicCard
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                className="p-6 w-full h-full"
              >
                <div className="flex flex-col gap-y-2 items-center">
                  <div className=" bg-blue-600 p-2 rounded-lg text-white transition-colors group-hover:from-secondary group-hover:to-secondary/80">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg font-medium text-card-foreground text-center">
                    {title}
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground text-center max-w-md mx-auto">
                  {description}
                </p>
              </MagicCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills
