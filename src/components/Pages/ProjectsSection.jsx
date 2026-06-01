import React, { useState, useContext } from 'react'
import { Universalcontext } from '../Context/UniversalDataContext'
import { Github, Globe, ExternalLink, Code2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectsSection = () => {
  const projects = useContext(Universalcontext) || []
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', 'Fullstack', 'Frontend', 'Backend', 'AI']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category && project.category.includes(activeFilter))

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }
  }

  return (
    <section id="projects" className="py-20 px-6 md:px-16 w-full max-w-7xl mx-auto flex flex-col items-center min-h-screen">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
          What I've Been Working On
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore a showcase of my projects, ranging from AI-powered networking tools to robust backend platforms and modern user interfaces.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-md">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
              activeFilter === category
                ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-md shadow-purple-500/20'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/10 border border-white/20 rounded-4xl overflow-hidden backdrop-blur-md shadow-xl flex flex-col justify-between h-[450px]"
            >
              {/* Project Image Panel */}
              <div className="h-[200px] w-full overflow-hidden relative group">
                {project.img ? (
                  <img 
                    src={project.img} 
                    alt={project.text}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30 flex items-center justify-center">
                    <Code2 size={48} className="text-white/40" />
                  </div>
                )}
                {/* Overlay with categories */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {project.category && project.category.map((cat) => (
                    <span key={cat} className="text-[10px] uppercase tracking-wider font-extrabold bg-black/60 text-yellow-300 px-2.5 py-1 rounded-full border border-yellow-300/30">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {project.text.split('—')[0].trim()}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-3">
                    {project.text.split('—')[1]?.trim() || project.text}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech && project.tech.map((techItem) => (
                    <span key={techItem} className="text-[11px] font-semibold bg-white/5 border border-white/10 text-gray-200 px-2 py-0.5 rounded-md">
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* CTA Links */}
                <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-2">
                  {project.links.live ? (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-bold text-yellow-300 hover:text-yellow-400 hover:underline transition-all"
                    >
                      <Globe size={16} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-gray-500 text-xs italic flex items-center gap-1">
                      <Code2 size={14} /> Backend API Only
                    </span>
                  )}

                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-bold text-purple-300 hover:text-purple-400 hover:underline transition-all"
                  >
                    <Github size={16} />
                    GitHub Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default ProjectsSection
