import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Layout, Database, Cloud } from 'lucide-react'

const SkillsSection = ({ cardsData }) => {
  // Group skills by category
  const categories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code2 className="text-yellow-400" size={24} />,
      skills: cardsData.filter(s => ['C / C++', 'Java', 'JavaScript'].includes(s.company))
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Layout className="text-blue-400" size={24} />,
      skills: cardsData.filter(s => ['HTML & CSS', 'ReactJS', 'TailwindCSS'].includes(s.company))
    },
    {
      id: 'backend',
      title: 'Backend & Database',
      icon: <Database className="text-green-400" size={24} />,
      skills: cardsData.filter(s => ['NodeJS / ExpressJS', 'MongoDB', 'Authentication', 'API Testing'].includes(s.company))
    },
    {
      id: 'devops',
      title: 'DevOps & AI Tools',
      icon: <Cloud className="text-purple-400" size={24} />,
      skills: cardsData.filter(s => ['Git / GitHub', 'Deployment', 'Google ADK'].includes(s.company) || s.title.includes('AI') || s.company.includes('Git') || s.company.includes('Vercel'))
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
  }

  return (
    <section id="skills" className="py-20 px-6 md:px-16 w-full max-w-7xl mx-auto flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
          Skills & Tech Stack
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Here is a breakdown of the technologies, tools, and languages I use to build robust, scalable applications.
        </p>
      </div>

      {/* Grid of Categories */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={itemVariants}
            className="bg-white/10 border border-white/20 rounded-4xl p-6 backdrop-blur-md shadow-xl flex flex-col gap-6"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 border-b border-white/15 pb-3">
              {category.icon}
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>

            {/* Skills List */}
            <div className="flex flex-col gap-4">
              {category.skills.length > 0 ? (
                category.skills.map((skill) => (
                  <div key={skill.company} className="flex flex-col gap-1.5">
                    {/* Skill Info */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {skill.imgsrc && (
                          <img 
                            src={skill.imgsrc} 
                            alt={skill.company} 
                            className="w-5 h-5 rounded-full object-cover border border-white/25"
                          />
                        )}
                        <span className="text-white font-bold text-sm md:text-base">{skill.company}</span>
                      </div>
                      <span className="text-[11px] font-bold text-yellow-300 bg-black/30 px-2 py-0.5 rounded-full border border-yellow-300/20">
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Meta Detail */}
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>{skill.title}</span>
                      <span>{skill.posted}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm italic">Coming soon...</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default SkillsSection
