"use client"

import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ChevronsDown, Sparkles } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"
import SparkleBackground from "./SparkleBackground"
import GridPatternDashed from "./GridPattern"
import ButtonLink from "../snippets/ButtonLink"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"
import { Particles } from "@/components/magicui/particles"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { AuroraText } from "@/components/magicui/aurora-text"
import { BorderBeam } from "@/components/magicui/border-beam"
import RevealOnScroll from "./animations/RevealOnScroll"

const Hero = () => {
  const { resolvedTheme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000")
  }, [resolvedTheme])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden py-10 md:py-2">
      {/* <SparkleBackground /> */}
      <GridPatternDashed />
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={80}
        color={color}
        refresh
      />
      <div className="w-full mx-auto flex flex-col-reverse md:flex-row items-center px-2 md:gap-10 md:px-10">
        <div className="flex justify-center items-center w-full md:w-1/3 mt-10 md:mt-0">
          <div className="flex relative w-[80%] max-w-[250px] aspect-square rounded-2xl overflow-hidden justify-center items-center rounded-full">
            <Image
              src="/img/velombe.jpg"
              alt="Velombe"
              fill
              className="object-cover w-20 h-20 rounded-full"
              priority
            />
            <BorderBeam duration={8} size={150} className="rounded-full" />
          </div>
        </div>
        {/* Subtle background sparkles */}
        {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <Image
          className="w-full h-full object-cover"
          src="/img/arrow-slide1.jpg"
          alt="Velombe"
          width={1920}
          height={1080}
        />
      </motion.div> */}

        <div className="w-full md:w-2/3 text-center md:text-left">
          <div className="z-10 md:max-w-3xl">
            {/* Headline */}
            <motion.h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white leading-tight tracking-wide">
              Hello!👋 I'm{" "}
              <span className="font-extrabold">
                <AuroraText>Velombe.</AuroraText>
              </span>
            </motion.h2>

            <motion.h1 className="mt-2 text-2xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              {/* <span className="mr-3">I'm</span> */}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  // "I'm Velombe.",
                  1000,
                  "A Full-Stack Developer.",
                  1000,
                  "An AI Chatbot Specialist.",
                  1000,
                  "A Tech Passionate.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontWeight: "bolder" }}
                repeat={Infinity}
              />
            </motion.h1>

            {/* Subheadline */}
            <motion.p className="mt-10 text-md text-gray-700 dark:text-gray-100 md:max-w-[80%] text-center md:text-left">
              I'm a passionate{" "}
              <span className="bg-blue-600 text-white px-1 rounded italic font-light">
                Full-stack Developer
              </span>{" "}
              with hands-on experience in building{" "}
              <span className="px-1 rounded italic font-light">
                SaaS platforms, AI chatbots integrations, and scalable web
                applications
              </span>{" "}
              . Proficient in modern JS and Python stacks with a strong focus on
              LLM integration, chatbot systems, and web application
              architecture.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
