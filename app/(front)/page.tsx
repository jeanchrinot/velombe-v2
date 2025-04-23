import { Metadata } from "next"
import Hero from "@/components/front/Hero"
import AboutMe from "@/components/front/AboutMe"
import TechStack from "@/components/front/TechStack"
import WorkExperience from "@/components/front/WorkExperience"
import Projects from "@/components/front/Projects"
import Contact from "@/components/front/Contact"
import DockMenu from "@/components/front/Dock"
import TechnicalSkills from "@/components/front/TechnicalSkills"

export const metadata: Metadata = {
  title: "Velombe | Full-Stack Developer",
  description:
    "I'm a passionate Full-stack Developer with hands-on experience in building SaaS platforms, AI chatbots integrations, and scalable web applications . Proficient in modern JS and Python stacks with a strong focus on LLM integration, chatbot systems, and web application architecture.",
}

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <WorkExperience />
      <TechnicalSkills />
      <TechStack />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
      <DockMenu />
    </>
  )
}

export default Home
