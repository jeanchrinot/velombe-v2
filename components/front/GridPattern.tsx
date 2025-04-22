"use client"

import { cn } from "@/lib/utils"
import { GridPattern } from "@/components/magicui/grid-pattern"

export default function GridPatternDashed() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  )
}
