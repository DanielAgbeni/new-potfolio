'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaMobileAlt } from 'react-icons/fa'
import Image from 'next/image'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const hasMobile = Boolean(project.mobileimg)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="relative bg-dark-200 border border-dark-400 rounded-2xl overflow-hidden hover:border-primary transition-colors"
    >

      {/* Image Preview */}
      <div className="h-64 bg-dark-300 p-4 flex justify-center items-end gap-4">
        {hasMobile && (
          <div className="relative">
            <Image
              src={project.mobileimg}
              alt={`${project.title} mobile preview`}
              width={110}
              height={230}
              className="rounded-lg shadow-lg"
            />
            <FaMobileAlt className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-xs" />
          </div>
        )}

        {/* Desktop View (always shown & prioritized) */}
        <Image
          src={project.pcimg}
          alt={`${project.title} desktop preview`}
          width={hasMobile ? 320 : 380}
          height={200}
          priority={index < 2} // load first 2 cards faster
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* Info */}
      <div className="p-5 pt-6">
        <h3 className="text-xl font-mono font-bold mb-2 text-gradient-green">
          {project.title}
        </h3>

        <p className="text-gray-400 text-xs font-mono mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-primary to-secondary text-dark-100 font-mono text-xs font-semibold rounded-lg flex-1"
          >
            <FaExternalLinkAlt />
            Live
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub repo"
            className="flex items-center justify-center size-9 bg-dark-300 border border-dark-500 text-gray-400 hover:text-white hover:border-primary rounded-lg"
          >
            <FaGithub className="text-lg" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default memo(ProjectCard)
