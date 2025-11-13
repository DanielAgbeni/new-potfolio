'use client'

import { motion } from 'framer-motion'
import {
  FaChrome,
  FaCode,
  FaCss3,
  FaFigma,
  FaGit,
  FaHtml5,
  FaJsSquare,
  FaLaptopCode,
  FaReact,
  FaTerminal,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaAws,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiNextdotjs,
  SiTypescript,
} from 'react-icons/si'
import { MdCloud } from 'react-icons/md'

const services = [
  {
    icon: FaLaptopCode,
    title: 'Frontend Development',
    description:
      'Creating responsive and interactive user interfaces using modern frontend technologies like React, Next.js, and Tailwind CSS.',
    color: 'from-primary to-secondary',
    iconColor: 'text-primary',
  },
  {
    icon: FaServer,
    title: 'Backend Development',
    description:
      'Building scalable server-side applications with Node.js, Express, and MongoDB for efficient data management and API development.',
    color: 'from-secondary to-accent',
    iconColor: 'text-secondary',
  },
  {
    icon: MdCloud,
    title: 'Cloud Engineering',
    description:
      'Deploying and managing cloud infrastructure on AWS, Google Cloud with containerization using Docker and Kubernetes for scalability.',
    color: 'from-accent to-primary',
    iconColor: 'text-accent',
  },
]

const frontendSkills = [
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'React.js', icon: FaReact, color: 'text-primary' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-secondary' },
  { name: 'Git', icon: FaGit, color: 'text-orange-600' },
]

const frontendTools = [
  { name: 'VS Code', icon: FaCode, color: 'text-blue-500' },
  { name: 'Git Bash', icon: FaGit, color: 'text-orange-600' },
  { name: 'Terminal', icon: FaTerminal, color: 'text-white' },
  { name: 'Figma', icon: FaFigma, color: 'text-purple-500' },
  { name: 'Chrome DevTools', icon: FaChrome, color: 'text-yellow-500' },
]

const backendSkills = [
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Express.js', icon: SiExpress, color: 'text-white' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'REST APIs', icon: FaServer, color: 'text-blue-500' },
  { name: 'Database Design', icon: FaDatabase, color: 'text-orange-500' },
]

const backendTools = [
  { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
  { name: 'MongoDB Compass', icon: SiMongodb, color: 'text-green-600' },
  { name: 'Terminal', icon: FaTerminal, color: 'text-white' },
  { name: 'Git', icon: FaGit, color: 'text-orange-600' },
]

const cloudSkills = [
  { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
  { name: 'Google Cloud', icon: SiGooglecloud, color: 'text-blue-500' },
  { name: 'Docker', icon: SiDocker, color: 'text-secondary' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600' },
  { name: 'CI/CD', icon: FaServer, color: 'text-primary' },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

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
            <span className="text-gradient">Services I Offer</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-mono">
            I specialize in full-stack web development and cloud engineering,
            delivering visually stunning frontends, robust backend solutions, and
            scalable cloud infrastructure that align with your business goals.
          </p>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-dark-200 border border-dark-400 rounded-2xl p-8 hover:border-primary transition-all group"
            >
              <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:animate-pulse`}>
                <service.icon className="text-4xl text-dark-100" />
              </div>
              <h3 className="text-2xl font-bold font-mono mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 font-mono text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills & Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-200 border border-dark-400 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold font-mono mb-6 text-gradient-green">
              Frontend Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4 font-mono">
                  Skills
                </h4>
                <ul className="space-y-3">
                  {frontendSkills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors font-mono text-sm group"
                    >
                      <skill.icon className={`${skill.color} text-xl group-hover:scale-110 transition-transform`} />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4 font-mono">
                  Tools
                </h4>
                <ul className="space-y-3">
                  {frontendTools.map((tool) => (
                    <li
                      key={tool.name}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors font-mono text-sm group"
                    >
                      <tool.icon className={`${tool.color} text-xl group-hover:scale-110 transition-transform`} />
                      {tool.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-200 border border-dark-400 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold font-mono mb-6 text-gradient-green">
              Backend Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-secondary mb-4 font-mono">
                  Skills
                </h4>
                <ul className="space-y-3">
                  {backendSkills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors font-mono text-sm group"
                    >
                      <skill.icon className={`${skill.color} text-xl group-hover:scale-110 transition-transform`} />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-secondary mb-4 font-mono">
                  Tools
                </h4>
                <ul className="space-y-3">
                  {backendTools.map((tool) => (
                    <li
                      key={tool.name}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors font-mono text-sm group"
                    >
                      <tool.icon className={`${tool.color} text-xl group-hover:scale-110 transition-transform`} />
                      {tool.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Cloud Engineering - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-dark-200 border border-dark-400 rounded-2xl p-8 md:col-span-2"
          >
            <h3 className="text-2xl font-bold font-mono mb-6 text-gradient-green text-center">
              Cloud Engineering & DevOps
            </h3>
            <div className="flex justify-center">
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {cloudSkills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                  >
                    <div className="w-16 h-16 rounded-lg bg-dark-300 flex items-center justify-center group-hover:bg-dark-400 transition-all">
                      <skill.icon className={`${skill.color} text-3xl group-hover:scale-110 transition-transform`} />
                    </div>
                    <span className="font-mono text-sm">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
