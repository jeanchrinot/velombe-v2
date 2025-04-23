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
  title: "Velombe",
  description: "Welcome to Velombe's website.",
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
