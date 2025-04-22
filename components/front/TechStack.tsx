"use client"
import { motion } from "framer-motion"
import { AuroraText } from "../magicui/aurora-text"
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
            I specialize in building robust, modern web applications using a
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

      <div className="w-full lg:max-w-3xl mx-auto items-center pt-10">
        <RevealOnScroll>
          <MarqueeTechStack />
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default TechStack
