"use client"

import { motion } from "framer-motion"
import GridPatternDashed from "./GridPattern"
import HighlightWords from "../snippets/HighlightWords"
import { AuroraText } from "../magicui/aurora-text"
import RevealOnScroll from "./animations/RevealOnScroll"

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="py-20 flex flex-col justify-center items-center text-center px-6 relative"
    >
      <GridPatternDashed />
      <div className="w-full lg:max-w-3xl mx-auto items-center px-2 md:gap-10 md:px-10">
        {/* Headline */}
        <RevealOnScroll>
          <motion.h2 className="font-bold inline-block rounded-lg bg-blue-600 text-background px-3 py-1 text-sm text-white leading-tight mb-3">
            About Me
          </motion.h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <motion.h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Passion meets <AuroraText>purpose.</AuroraText>
          </motion.h3>
        </RevealOnScroll>

        {/* Subheadline */}
        <RevealOnScroll>
          <motion.p className="mt-4 text-md text-gray-700 dark:text-gray-100 w-full">
            {`My full name is Jean Chrinot Velombe, but I like to be called by my
            last name. I'm originally from Madagascar — the world's 4th largest
            island 🌴 and a place full of natural wonder, culture, and
            creativity. Currently, I'm pursuing a `}
            <HighlightWords>
              {"Master's Degree in Computer Engineering"}
            </HighlightWords>{" "}
            at Kocaeli University, in Türkiye, diving deep into both the
            theoretical and practical sides of building powerful software
            systems.
            <br />
          </motion.p>
        </RevealOnScroll>

        {/* Subheadline */}
        <RevealOnScroll>
          <motion.p className="mt-4 text-md text-gray-700 dark:text-gray-100 max-w-[90%]">
            {`My journey into tech started with curiosity and a laptop, and today,
            I bring together the power of JavaScript and Python stacks to craft
            everything from sleek frontends to robust backends. Whether it's
            creating an AI chatbot, designing a SaaS product, or integrating
            complex APIs — I thrive on turning problems into elegant digital
            tools.`}
          </motion.p>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default AboutMe
