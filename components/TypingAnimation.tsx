'use client'

import { useState, useEffect } from 'react'

const TypingAnimation = () => {
  const phrases = [
    'Full Stack Developer',
    'Frontend Engineer',
    'Backend Developer',
    'Cloud Engineer',
    'React Specialist',
    'Next.js Developer',
    'Node.js Expert',
    'MongoDB Enthusiast',
    'AWS Certified',
    'DevOps Engineer',
    'Problem Solver',
    'Tech Innovator',
  ]

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentPhrase, setCurrentPhrase] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const phrase = phrases[currentPhraseIndex]
      const typedText = phrase.slice(0, currentPhrase.length + 1)

      setCurrentPhrase(typedText)

      if (typedText === phrase) {
        setIsTyping(false)
        clearInterval(typingInterval)

        setTimeout(() => {
          setCurrentPhrase('')
          setIsTyping(true)
          setCurrentPhraseIndex((prevIndex) =>
            prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
          )
        }, 1500)
      }
    }, 100)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [currentPhrase, currentPhraseIndex])

  return (
    <div className="font-mono text-2xl md:text-3xl lg:text-4xl">
      <span className="text-gradient">{currentPhrase}</span>
      {showCursor && (
        <span className="text-primary animate-pulse">|</span>
      )}
    </div>
  )
}

export default TypingAnimation
