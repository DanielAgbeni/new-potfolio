'use client'

import { motion } from 'framer-motion'
import {
  FaCode,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaDownload,
  FaGraduationCap,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiMongodb,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiTypescript,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io5'
import { MdWork, MdWorkHistory } from 'react-icons/md'
import type { Metadata } from 'next'

const technologies = [
  { icon: FaCode, color: 'text-white', title: 'Programming' },
  { icon: FaReact, color: 'text-primary', title: 'React' },
  { icon: FaGithub, color: 'text-white', title: 'GitHub' },
  { icon: FaGitAlt, color: 'text-orange-500', title: 'Git' },
  { icon: FaNodeJs, color: 'text-green-500', title: 'Node.js' },
  { icon: FaPython, color: 'text-yellow-400', title: 'Python' },
  { icon: FaJava, color: 'text-blue-500', title: 'Java' },
  { icon: IoLogoJavascript, color: 'text-yellow-500', title: 'JavaScript' },
  { icon: SiTailwindcss, color: 'text-secondary', title: 'Tailwind CSS' },
  { icon: SiMongodb, color: 'text-green-600', title: 'MongoDB' },
  { icon: FaAws, color: 'text-orange-400', title: 'AWS' },
  { icon: SiGooglecloud, color: 'text-blue-500', title: 'Google Cloud' },
  { icon: SiDocker, color: 'text-sky-500', title: 'Docker' },
  { icon: SiKubernetes, color: 'text-blue-600', title: 'Kubernetes' },
  { icon: SiTypescript, color: 'text-blue-500', title: 'TypeScript' },
]

const skills = [
  {
    label: 'Frontend Development',
    value: 'HTML, CSS, JavaScript, React, Next.js, TypeScript, Responsive Design',
  },
  {
    label: 'Backend Development',
    value: 'Node.js, Express, MongoDB, RESTful APIs, Database Design',
  },
  {
    label: 'Cloud Engineering',
    value: 'AWS, Google Cloud, Docker, Kubernetes, CI/CD, Infrastructure as Code',
  },
  {
    label: 'Soft Skills',
    value: 'Communication, Teamwork, Critical Thinking, Problem Solving, Leadership',
  },
  {
    label: 'Teaching & Mentoring',
    value: 'Curriculum Development, Student Mentoring, Technical Instruction',
  },
]

const experiences = [
  {
    title: 'Computer Trainer and Coding Instructor',
    company: 'Barry Tech',
    period: 'September 2024 – January 2025',
    description:
      'Led the development and delivery of a web development curriculum focused on React JS, mentoring over 50 students.',
  },
  {
    title: 'Coding Instructor',
    company: 'Swebs Coding Institute',
    period: 'March 2024 – August 2024',
    description:
      'Taught JavaScript and React JS, achieving a 90% student success rate through hands-on projects.',
  },
  {
    title: 'Control Room Operator (SIWES)',
    company: 'Dux FM 94.7',
    period: 'November 2022 – March 2023',
    description:
      'Managed control room equipment for live radio broadcasts, ensuring seamless transmission.',
  },
  {
    title: 'Church Media Technician (Voluntary)',
    company: 'Christian Ministry of Reconciliation (CMR)',
    period: '2016 – Present',
    description:
      'Led technical support for media services and expanded live streaming capabilities.',
  },
]

const education = [
  {
    degree: 'Higher National Diploma (HND) in Computer Science',
    institution: 'Federal Polytechnic Ado-Ekiti',
    period: '2024 – Present',
    status: 'Ongoing',
  },
  {
    degree: 'National Diploma (ND) in Computer Science',
    institution: 'Federal Polytechnic Ado-Ekiti',
    period: '2021 – 2023',
    status: 'Completed',
  },
  {
    degree: 'WASSCE & NECO',
    institution: 'River of Life Royal School',
    period: '2014 – 2020',
    status: 'Completed',
  },
]

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-mono mb-6">
            <span className="text-gradient">About Me</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed mb-8 font-mono">
            I am Daniel Agbeni Oluwafemi, a skilled Full Stack Developer and Cloud Engineer.
            I specialize in creating scalable web solutions with modern technologies,
            while inspiring the next generation of developers as a coding instructor.
          </p>
          <a href="/Agbeni Daniel Oluwafemi - CV.pdf" download>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark-100 font-mono font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Download CV <FaDownload />
            </motion.button>
          </a>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold font-mono text-center mb-12">
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <div className="flex justify-center items-center flex-wrap gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                variants={itemVariants}
                className="group relative flex flex-col items-center"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-dark-300 group-hover:bg-dark-400 transition-all">
                  <tech.icon className={`text-4xl ${tech.color}`} />
                </div>
                <span className="mt-2 text-sm text-gray-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-dark-200 border border-dark-400 rounded-2xl p-8 hover:border-primary transition-all"
          >
            <h3 className="text-2xl font-bold font-mono mb-6 flex items-center gap-3">
              <MdWork className="text-primary" />
              <span className="text-gradient-green">Skills</span>
            </h3>
            <ul className="space-y-4">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="border-b border-dark-400 pb-4 last:border-none"
                >
                  <strong className="text-primary font-mono">{skill.label}:</strong>
                  <p className="text-gray-400 text-sm mt-1 font-mono">{skill.value}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-dark-200 border border-dark-400 rounded-2xl p-8 hover:border-secondary transition-all"
          >
            <h3 className="text-2xl font-bold font-mono mb-6 flex items-center gap-3">
              <MdWorkHistory className="text-secondary" />
              <span className="text-gradient-green">Experience</span>
            </h3>
            <ul className="space-y-4">
              {experiences.map((exp, index) => (
                <li
                  key={index}
                  className="bg-dark-300 rounded-lg p-4 hover:bg-dark-400 transition-all"
                >
                  <div className="font-bold text-primary font-mono text-sm">
                    {exp.title}
                  </div>
                  <div className="text-secondary text-xs mt-1 font-mono">
                    {exp.company}
                  </div>
                  <div className="text-gray-500 text-xs mb-2 font-mono">
                    {exp.period}
                  </div>
                  <p className="text-gray-400 text-sm font-mono">{exp.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-dark-200 border border-dark-400 rounded-2xl p-8 hover:border-accent transition-all"
          >
            <h3 className="text-2xl font-bold font-mono mb-6 flex items-center gap-3">
              <FaGraduationCap className="text-accent" />
              <span className="text-gradient-green">Education</span>
            </h3>
            <ul className="space-y-4">
              {education.map((edu, index) => (
                <li
                  key={index}
                  className="bg-dark-300 rounded-lg p-4 hover:bg-dark-400 transition-all"
                >
                  <div className="font-bold text-primary font-mono text-sm">
                    {edu.degree}
                  </div>
                  <div className="text-gray-400 text-xs mt-1 font-mono">
                    {edu.institution}
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-500 text-xs font-mono">{edu.period}</span>
                    <span
                      className={`text-xs font-mono px-2 py-1 rounded ${
                        edu.status === 'Ongoing'
                          ? 'bg-secondary/20 text-secondary'
                          : 'bg-primary/20 text-primary'
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
