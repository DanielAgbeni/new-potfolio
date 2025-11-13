'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MdClose, MdEmail, MdLocationCity, MdSend } from 'react-icons/md'
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6'
import { FormEvent } from 'react'

interface ContactProps {
  onClose: () => void
}

const Contact = ({ onClose }: ContactProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const reason = formData.get('reason')
    const message = formData.get('message')

    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AReason: ${reason}%0AMessage: ${message}`
    const whatsappLink = `https://api.whatsapp.com/send?phone=2349041995875&text=${whatsappMessage}`

    window.open(whatsappLink, '_blank')
  }

  const socialLinks = [
    { icon: FaXTwitter, href: 'https://twitter.com/Agbeni_Daniel', label: 'X' },
    { icon: FaYoutube, href: 'https://youtube.com/@danielagbeni', label: 'YouTube' },
    { icon: FaInstagram, href: 'https://instagram.com/daniel_agbeni', label: 'Instagram' },
    { icon: FaGithub, href: 'https://github.com/DanielAgbeni', label: 'GitHub' },
    { icon: FaDiscord, href: 'https://discordapp.com/users/daniel_agbeni', label: 'Discord' },
    { icon: FaWhatsapp, href: 'https://wa.me/+2349041995875', label: 'WhatsApp' },
  ]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative w-full max-w-4xl bg-dark-200 border border-dark-400 rounded-2xl p-6 md:p-10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-dark-400 rounded-lg transition-colors"
          >
            <MdClose className="text-2xl text-red-500" />
          </button>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Form */}
            <div>
              <h2 className="text-2xl font-mono font-bold text-gradient mb-6">
                Get In Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-dark-300 border border-dark-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors font-mono"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-dark-300 border border-dark-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors font-mono"
                />
                <input
                  type="text"
                  name="reason"
                  placeholder="Reason for Contact"
                  required
                  className="w-full px-4 py-3 bg-dark-300 border border-dark-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors font-mono"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-300 border border-dark-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none font-mono"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-dark-100 font-mono font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Send Message</span>
                  <MdSend className="text-lg" />
                </button>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div>
              <h2 className="text-2xl font-mono font-bold text-gradient mb-6">
                Contact Info
              </h2>
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:danielagbeni12@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group"
                >
                  <MdEmail className="w-6 h-6 text-primary" />
                  <span className="font-mono group-hover:translate-x-1 transition-transform">
                    danielagbeni12@gmail.com
                  </span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <MdLocationCity className="w-6 h-6 text-primary" />
                  <span className="font-mono">Lagos State, Nigeria</span>
                </div>
              </div>

              <h3 className="text-lg font-mono font-semibold text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-dark-300 text-gray-400 hover:text-primary hover:bg-dark-400 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Contact
