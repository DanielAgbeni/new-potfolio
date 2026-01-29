'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import { Project } from '@/data/projects'
import { db } from '@/utils/firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'))
        const querySnapshot = await getDocs(q)
        const fetchedProjects: Project[] = []
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          fetchedProjects.push({
            id: data.id,
            title: data.title,
            link: data.link,
            githubLink: data.githubLink,
            description: data.description,
            mobileimg: data.mobileimg,
            pcimg: data.pcimg,
          })
        })
        setProjects(fetchedProjects)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])
console.log(projects)
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-mono mb-6">
            <span className="text-gradient">My Projects</span>
          </h1>
          <p className="text-text-300 max-w-3xl mx-auto text-lg leading-relaxed font-mono">
            A showcase of my recent work in web development, from full-stack applications
            to modern frontend designs. Each project demonstrates my expertise in React,
            Next.js, Node.js, and cloud technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-text-300 font-mono mb-6">
            Interested in working together?
          </p>
          <a href="mailto:danielagbeni12@gmail.com">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-500 text-background-950 font-mono font-semibold rounded-lg shadow-lg hover:bg-primary-600 hover:shadow-xl transition-all"
            >
              Get In Touch
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
