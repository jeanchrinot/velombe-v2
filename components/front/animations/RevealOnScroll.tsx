import { ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface RevealOnScrollProps {
  children: ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  className?: string
}

const RevealOnScroll = ({
  children,
  delay = 0,
  duration = 0.7,
  yOffset = 100,
  className = "",
}: RevealOnScrollProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default RevealOnScroll
