import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Layout, Database, Cloud } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'

const levelMap = {
  'Expert': { value: 92, color: 'bg-green-400' },
  'Intermediate-Advanced': { value: 78, color: 'bg-yellow-400' },
  'Intermediate': { value: 62, color: 'bg-blue-400' },
  'Beginner-Intermediate': { value: 45, color: 'bg-orange-400' },
  'Beginner': { value: 30, color: 'bg-red-400' },
}

const levelBadgeVariant = {
  'Expert': 'bg-green-400/15 text-green-300 border-green-400/30',
  'Intermediate-Advanced': 'bg-yellow-400/15 text-yellow-300 border-yellow-400/30',
  'Intermediate': 'bg-blue-400/15 text-blue-300 border-blue-400/30',
  'Beginner-Intermediate': 'bg-orange-400/15 text-orange-300 border-orange-400/30',
  'Beginner': 'bg-red-400/15 text-red-300 border-red-400/30',
}

const SkillsSection = ({ cardsData }) => {
  const categories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code2 className="text-yellow-400" size={22} />,
      skills: cardsData.filter(s => ['C / C++', 'Java', 'JavaScript'].includes(s.company))
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Layout className="text-blue-400" size={22} />,
      skills: cardsData.filter(s => ['HTML & CSS', 'ReactJS', 'TailwindCSS'].includes(s.company))
    },
    {
      id: 'backend',
      title: 'Backend & Database',
      icon: <Database className="text-green-400" size={22} />,
      skills: cardsData.filter(s => ['NodeJS / ExpressJS', 'MongoDB', 'Authentication', 'API Testing'].includes(s.company))
    },
    {
      id: 'devops',
      title: 'DevOps & AI Tools',
      icon: <Cloud className="text-purple-400" size={22} />,
      skills: cardsData.filter(s =>
        ['Git / GitHub', 'Deployment', 'Google ADK'].includes(s.company) ||
        s.title.includes('AI') ||
        s.company.includes('Git') ||
        s.company.includes('Vercel')
      )
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
  }

  return (
    <section id="skills" className="py-20 px-6 md:px-16 w-full max-w-7xl mx-auto flex flex-col items-center">

      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
          Skills & Tech Stack
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Technologies, tools, and languages I use to build robust, scalable applications.
        </p>
      </div>

      {/* Grid of Categories */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
      >
        {categories.map((category) => (
          <motion.div key={category.id} variants={itemVariants}>
            <Card className="bg-white/8 border-white/20 backdrop-blur-md shadow-xl rounded-2xl h-full hover:border-white/30 transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-3 pb-3">
                {category.icon}
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </CardHeader>
              <Separator className="bg-white/10 mb-4 mx-6 w-auto" />
              <CardContent className="flex flex-col gap-5">
                {category.skills.length > 0 ? (
                  category.skills.map((skill) => {
                    const lvl = levelMap[skill.level] || { value: 50, color: 'bg-gray-400' }
                    const badgeClass = levelBadgeVariant[skill.level] || 'bg-gray-400/15 text-gray-300 border-gray-400/30'
                    return (
                      <div key={skill.company} className="flex flex-col gap-2">
                        {/* Skill name row */}
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            {skill.imgsrc && (
                              <img
                                src={skill.imgsrc}
                                alt={skill.company}
                                className="w-5 h-5 rounded-full object-cover border border-white/20"
                              />
                            )}
                            <span className="text-white font-bold text-sm">{skill.company}</span>
                          </div>
                          <Badge
                            variant="outline"
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${badgeClass}`}
                          >
                            {skill.level}
                          </Badge>
                        </div>

                        {/* Progress Bar */}
                        <Progress
                          value={lvl.value}
                          className="h-1.5 bg-white/10 [&>div]:transition-all [&>div]:duration-700"
                          style={{ '--progress-bar': lvl.color }}
                        />

                        {/* Skill meta */}
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{skill.title}</span>
                          <span>{skill.posted}</span>
                        </div>
                      </div>
                    )
                  })
                ) : (
                  <p className="text-muted-foreground text-sm italic">Coming soon...</p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default SkillsSection
