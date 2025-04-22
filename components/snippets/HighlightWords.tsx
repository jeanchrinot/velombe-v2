"use client"

type HighlightWordsProps = {
  children: React.ReactNode
}

const HighlightWords = ({ children }: HighlightWordsProps) => {
  return (
    <span className="bg-blue-600 text-white px-1 rounded italic font-light">
      {children}
    </span>
  )
}

export default HighlightWords
