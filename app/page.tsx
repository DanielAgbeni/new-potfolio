'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6'
import TypingAnimation from '@/components/TypingAnimation'

export default function Home() {
  const [isPreviewVisible, setPreviewVisible] = useState(false)

  const socialLinks = [
    {
      href: 'https://wa.me//+2349041995875',
      icon: FaWhatsapp,
      label: 'WhatsApp',
      color: 'hover:text-green-400',
    },
    {
      href: 'https://www.youtube.com/@danielagbeni',
      icon: FaYoutube,
      label: 'YouTube',
      color: 'hover:text-red-500',
    },
    {
      href: 'https://www.instagram.com/daniel_agbeni/',
      icon: FaInstagram,
      label: 'Instagram',
      color: 'hover:text-pink-500',
    },
    {
      href: 'https://github.com/DanielAgbeni',
      icon: FaGithub,
      label: 'GitHub',
      color: 'hover:text-white',
    },
    {
      href: 'https://twitter.com/Agbeni_Daniel',
      icon: FaXTwitter,
      label: 'Twitter',
      color: 'hover:text-sky-400',
    },
    {
      href: 'https://www.linkedin.com/in/daniel-agbeni-5461ab297/',
      icon: FaLinkedinIn,
      label: 'LinkedIn',
      color: 'hover:text-blue-500',
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-bg opacity-20" />

        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="relative mx-auto mb-8 w-48 h-48 md:w-56 md:h-56"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-gradient p-1">
            <div className="w-full h-full bg-dark-100 rounded-full p-2">
              <Image
                src="/Daniel Agbeni.jpg"
                alt="Daniel Agbeni"
                width={224}
                height={224}
                className="w-full h-full object-cover rounded-full cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setPreviewVisible(true)}
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-white">Hi, I&apos;m </span>
          <span className="text-gradient">Daniel Agbeni</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <TypingAnimation />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-mono"
        >
          Crafting scalable web applications with modern technologies.
          Specializing in React, Next.js, Node.js, and Cloud Infrastructure.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-4 mb-8 flex-wrap"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + index * 0.1, type: 'spring' }}
              className={`w-14 h-14 flex items-center justify-center rounded-lg bg-dark-300 text-gray-400 ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
            >
              <link.icon className="text-2xl" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/about">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark-100 font-mono font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              About Me
            </button>
          </Link>
          <Link href="/portfolio">
            <button className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-mono font-semibold rounded-lg hover:bg-primary hover:text-dark-100 transition-all duration-300">
              View Projects
            </button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {isPreviewVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setPreviewVisible(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative p-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/Daniel Agbeni.jpg"
                alt="Daniel Agbeni"
                width={500}
                height={500}
                className="rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
