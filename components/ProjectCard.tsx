'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-dark-200 border border-dark-400 rounded-2xl overflow-hidden hover:border-primary transition-all group"
    >
      {/* Project Images */}
      <div className="relative h-64 bg-dark-300 p-4">
        <div className="flex justify-center items-end gap-4 h-full">
          {/* Mobile View */}
          <div className="relative group/img">
            <Image
              src={project.mobileimg}
              alt={`${project.title} mobile view`}
              width={120}
              height={240}
              className="rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
            />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 font-mono whitespace-nowrap">
              Mobile
            </span>
          </div>

          {/* PC View */}
          <div className="relative group/img">
            <Image
              src={project.pcimg}
              alt={`${project.title} PC view`}
              width={200}
              height={150}
              className="rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
            />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 font-mono whitespace-nowrap">
              Desktop
            </span>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 mt-4">
        <h3 className="text-xl font-bold font-mono mb-3 text-gradient-green">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm font-mono mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-dark-100 font-mono text-sm font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all flex-1 justify-center"
          >
            <FaExternalLinkAlt className="text-sm" />
            <span>Live Demo</span>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-dark-300 border border-dark-500 text-gray-400 hover:text-white hover:border-primary font-mono text-sm font-semibold rounded-lg transition-all"
            aria-label="View on GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all pointer-events-none" />
    </motion.div>
  )
}

export default ProjectCard
