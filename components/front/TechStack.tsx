"use client"
import { motion } from "framer-motion"
import { AuroraText } from "../magicui/aurora-text"
import HighlightWords from "../snippets/HighlightWords"
import RevealOnScroll from "./animations/RevealOnScroll"
import GridPatternDashed from "./GridPattern"
import MarqueeTechStack from "./MarqueeTechStack"

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="py-20 flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      <GridPatternDashed />
      <div className="w-full lg:max-w-3xl mx-auto items-center px-2 md:gap-10 md:px-10">
        <RevealOnScroll>
          <motion.h2 className="font-bold inline-block rounded-lg bg-blue-600 text-background px-3 py-1 text-sm text-white leading-tight mb-3">
            Tech Stack
          </motion.h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <motion.h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Tools I trust <AuroraText>to build.</AuroraText>
          </motion.h3>
        </RevealOnScroll>

        {/* Subheadline */}
        <RevealOnScroll>
          <motion.p className="mt-4 text-md text-foreground w-full">
            My tech stack includes{" "}
            <HighlightWords>a blend of modern tools</HighlightWords> and
            languages that I use to build efficient and maintainable software. I
            work with React, Next.js, and Tailwind CSS on the frontend to build
            responsive, interactive UIs. On the backend, I use Python and
            Node.js to develop APIs and application logic. I also integrate
            databases like PostgreSQL, MySQL, and MongoDB, and use cloud
            services like DigitalOcean for seamless deployment. For AI-powered
            applications, I work with LLM frameworks such as LangChain and
            LangGraph to build intelligent, context-aware systems.
          </motion.p>
        </RevealOnScroll>
      </div>

      <div className="w-full lg:max-w-3xl mx-auto items-center pt-10">
        <RevealOnScroll>
          <MarqueeTechStack />
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default TechStack
