"use client"

import { CircleCheck } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type HighlightWordsProps = {
  children: React.ReactNode
}

export default function SuccessAlert({ children }: HighlightWordsProps) {
  return (
    <Alert variant="destructive">
      <CircleCheck className="h-4 w-4" />
      <AlertTitle>Thank You!</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}
