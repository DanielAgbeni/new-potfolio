'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdClose, MdMenu } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa6'
import Contact from './Contact'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-100/95 backdrop-blur-lg border-b border-dark-400'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative group">
            <span className="text-2xl font-mono font-bold">
              <span className="text-white">Daniel</span>
              <span className="text-gradient"> Agbeni</span>
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`relative font-mono text-lg transition-colors duration-300 ${
                    pathname === link.path
                      ? 'text-primary'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button - Desktop */}
          <button
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-dark-100 font-mono font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 glow-primary"
          >
            <FaPhone />
            <span>Contact</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-3xl text-primary hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-20 left-4 right-4 bg-dark-200 border border-dark-400 rounded-lg shadow-xl overflow-hidden"
            >
              <ul className="py-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-6 py-3 font-mono text-lg transition-colors ${
                        pathname === link.path
                          ? 'text-primary bg-dark-300'
                          : 'text-gray-400 hover:text-white hover:bg-dark-300'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false)
                      setIsContactOpen(true)
                    }}
                    className="w-full text-left px-6 py-3 font-mono text-lg text-gray-400 hover:text-white hover:bg-dark-300 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Contact Modal */}
      {isContactOpen && <Contact onClose={() => setIsContactOpen(false)} />}
    </header>
  )
}

export default Header
