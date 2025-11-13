'use client'

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/DanielAgbeni', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/danielagbeni', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/danielagbeni', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:danielagbeni12@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="relative bg-dark-100 border-t border-dark-400 mt-20">
      {/* Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-mono font-bold mb-4">
              <span className="text-white">Daniel</span>
              <span className="text-gradient"> Agbeni</span>
            </h3>
            <p className="text-gray-400 font-mono text-sm">
              Full Stack Developer & Cloud Engineer
            </p>
            <p className="text-gray-500 font-mono text-sm mt-2">
              Building modern web applications with cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-mono font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio'].map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary font-mono text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-mono font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-dark-300 text-gray-400 hover:text-primary hover:bg-dark-400 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 font-mono text-sm">
              Lagos State, Nigeria
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 font-mono text-sm">
              &copy; {currentYear} Daniel Agbeni. All rights reserved.
            </p>
            <p className="text-gray-500 font-mono text-sm">
              Built with <span className="text-primary">Next.js</span> &{' '}
              <span className="text-secondary">TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
