"use client"
import { motion } from "framer-motion"
import { AuroraText } from "../magicui/aurora-text"
import RevealOnScroll from "./animations/RevealOnScroll"
import GridPatternDashed from "./GridPattern"
import MarqueeTestimonials from "./MarqueeTestimonials"

const Testimonials = () => {
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
            Testimonials
          </motion.h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <motion.h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            They put their <AuroraText>trust in me.</AuroraText>
          </motion.h3>
        </RevealOnScroll>

        {/* Subheadline */}
        <RevealOnScroll>
          <motion.p className="mt-4 text-md text-foreground w-full">
            Here's what clients, collaborators, and colleagues have said about
            working with me — honest feedback, real results.
          </motion.p>
        </RevealOnScroll>
      </div>
      <div className="w-full lg:max-w-3xl mx-auto items-center pt-10">
        <RevealOnScroll>
          <MarqueeTestimonials />
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default Testimonials
