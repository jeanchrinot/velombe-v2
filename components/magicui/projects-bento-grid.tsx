import { ArrowRightIcon } from "@radix-ui/react-icons"
import { ComponentPropsWithoutRef, ReactNode } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Box, Github, Link } from "lucide-react"
import { AuroraText } from "./aurora-text"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  //   background: ReactNode
  image: string
  shortDesc: string
  fullDesc: string
  tech: string[]
  links: { website: any; github: any }
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  shortDesc,
  image,
  fullDesc,
  tech,
  links,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl min-h-[400px]",
      // light styles
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props}
  >
    <div className="absolute top-0 h-full w-full">
      {/* <Image
        src={image}
        alt={name}
        width={500}
        height={600}
        className="object-cover top-0 opacity-60 h-1/2"
      /> */}
      <video
        src="https://cdn.llm.report/openai-demo.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="pointer-events-none mx-auto h-40 w-full object-cover object-top opacity-40"
      ></video>
    </div>
    <div className="absolute bottom-0 pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-4 transition-all duration-300 group-hover:-translate-y-50 -translate-y-50 md:translate-0 justify-start text-left">
      {/* <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" /> */}
      <Box className="text-foreground h-12 w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-foreground">
        {/* <AuroraText>{name}</AuroraText> */}
        {name}
      </h3>
      <p className="max-w-lg text-neutral-700 dark:text-neutral-400">
        {shortDesc}
      </p>
    </div>

    <div
      className={cn(
        "absolute bottom-0 z-20 flex w-full translate-y-0 md:translate-y-10 transform-gpu flex-col justify-start text-left p-4 opacity-100 md:opacity-0 transition-all duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100"
      )}
    >
      <p className="max-w-lg text-black-800 dark:text-white text-sm">
        {fullDesc}
      </p>
      {/* <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </a>
      </Button> */}
      <div className="flex flex-wrap gap-1 mt-3 justify-start text-left">
        {tech.map((item, i) => (
          <span
            key={i}
            className="text-[11px] px-2 py-1 bg-gray-800 text-white dark:bg-gray-600 dark:text-white rounded-md"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-2">
        {links.website && (
          <a
            href={links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-gray-800 hover:underline dark:text-gray-200"
          >
            <Link className="w-4 h-4" />
            Website
          </a>
        )}
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-gray-800 hover:underline dark:text-gray-200"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        )}
      </div>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-100/80 group-hover:dark:bg-neutral-800/80" />
    {/* <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 bg-[linear-gradient(135deg,_#38bdf8,_#8b5cf6,_#facc15)] opacity-10 group-hover:opacity-30" /> */}
  </div>
)

export { BentoCard, BentoGrid }
