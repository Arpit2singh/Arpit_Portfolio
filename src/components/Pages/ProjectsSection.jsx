import React, { useState, useContext } from 'react'
import { Universalcontext } from '../Context/UniversalDataContext'
import { Github, Globe, Code2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const ProjectsSection = () => {
  const projects = useContext(Universalcontext) || []
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', 'Fullstack', 'Frontend', 'Backend', 'AI']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category && project.category.includes(activeFilter))

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 md:px-16 w-full max-w-7xl mx-auto flex flex-col items-center min-h-screen">

      {/* Section Title */}
      <div className="text-center mb-10 w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
          What I've Been Working On
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Explore a showcase of my projects — from AI-powered networking tools to robust backend platforms and modern UIs.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="w-full flex justify-center mb-10">
        <div className="flex items-center gap-2 bg-white/5 border border-white/15 backdrop-blur-md rounded-full px-3 py-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`
                relative px-6 py-2.5 rounded-full text-sm md:text-base font-bold tracking-wide
                transition-all duration-300 whitespace-nowrap
                ${activeFilter === cat
                  ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                  : 'text-white/50 hover:text-white/90 hover:bg-white/8'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid — proper responsive */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 w-full"
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
              whileHover={{ y: -5, scale: 1.015 }}
              className="flex"
            >
              <Card className="bg-white/8 border-white/15 backdrop-blur-md shadow-xl rounded-2xl flex flex-col overflow-hidden w-full hover:border-white/30 hover:shadow-2xl transition-all duration-300 group">

                {/* Project Image */}
                <div className="h-[180px] w-full overflow-hidden relative shrink-0">
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
                      <Code2 size={44} className="text-white/30" />
                    </div>
                  )}
                  {/* Category badges */}
                  <div className="absolute top-2.5 left-2.5 flex gap-1.5 flex-wrap">
                    {project.category && project.category.map((cat) => (
                      <Badge
                        key={cat}
                        className="text-[10px] uppercase tracking-wider font-extrabold bg-black/75 text-yellow-300 border border-yellow-300/30 backdrop-blur-sm"
                      >
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Card Body */}
                <CardHeader className="pb-1 px-4 pt-4">
                  <h3 className="text-base font-bold text-white leading-tight line-clamp-1">
                    {project.text.split('—')[0].trim()}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mt-1 leading-relaxed">
                    {project.text.split('—')[1]?.trim() || project.text}
                  </p>
                </CardHeader>

                <CardContent className="px-4 pb-2 flex-1 flex flex-col justify-end">
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tech && project.tech.slice(0, 5).map((techItem) => (
                      <Badge
                        key={techItem}
                        variant="outline"
                        className="text-[11px] font-semibold bg-white/5 border-white/12 text-gray-300 rounded-md py-0"
                      >
                        {techItem}
                      </Badge>
                    ))}
                    {project.tech && project.tech.length > 5 && (
                      <Badge variant="outline" className="text-[11px] bg-white/5 border-white/12 text-gray-400 rounded-md py-0">
                        +{project.tech.length - 5}
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <Separator className="bg-white/8 mx-4 w-auto" />

                <CardFooter className="px-4 py-3 flex justify-between items-center gap-2">
                  {project.links.live ? (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-yellow-300 hover:text-yellow-400 hover:bg-yellow-400/10 gap-1.5 px-2 font-bold h-8 text-xs"
                    >
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <Globe size={13} /> Live Demo
                      </a>
                    </Button>
                  ) : (
                    <span className="text-muted-foreground text-xs italic flex items-center gap-1">
                      <Code2 size={12} /> API Only
                    </span>
                  )}

                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-purple-300 hover:text-purple-400 hover:bg-purple-400/10 gap-1.5 px-2 font-bold h-8 text-xs"
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github size={13} /> GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-muted-foreground italic w-full bg-white/5 rounded-2xl border border-white/10">
          No projects found for "{activeFilter}" category.
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
