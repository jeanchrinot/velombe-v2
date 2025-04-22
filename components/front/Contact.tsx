"use client"
import { motion } from "framer-motion"
import { AuroraText } from "../magicui/aurora-text"
import HighlightWords from "../snippets/HighlightWords"
import RevealOnScroll from "./animations/RevealOnScroll"
import ContactForm from "./forms/ContactForm"
import GridPatternDashed from "./GridPattern"

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      <GridPatternDashed />
      <div className="w-full lg:max-w-3xl mx-auto items-center px-2 md:gap-10 md:px-10">
        <RevealOnScroll>
          <motion.h2 className="font-bold inline-block rounded-lg bg-blue-600 text-background px-3 py-1 text-sm text-white leading-tight mb-3">
            Contact
          </motion.h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <motion.h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Let's get <AuroraText>in touch.</AuroraText>
          </motion.h3>
        </RevealOnScroll>

        {/* Subheadline */}
        <RevealOnScroll>
          <motion.p className="mt-4 text-md text-foreground w-full">
            I'm always open to new opportunities and collaborations — whether
            it's a freelance gig, a full-time role, or just a cool side project.
            Drop me a message at{" "}
            <HighlightWords>hello@velombe.com</HighlightWords> or using the form
            below and I'll get back to you as soon as I can.
          </motion.p>
        </RevealOnScroll>
      </div>

      <div className="w-full lg:max-w-[50%] mx-auto items-center pt-10">
        <RevealOnScroll>
          <ContactForm />
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default Contact
