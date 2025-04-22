"use client"
import { Sparkles } from "lucide-react"

const SparkleBackground = () => {
  const rows = 5
  const cols = 10
  const sparkleArray = Array.from({ length: rows * cols })

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="grid grid-cols-10 gap-4 w-full h-full opacity-10 animate-pulse-slow">
        {sparkleArray.map((_, i) => (
          <div key={i} className="flex justify-center items-center">
            <Sparkles className="w-4 h-4 text-blue-400 dark:text-blue-300 animate-float" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SparkleBackground
