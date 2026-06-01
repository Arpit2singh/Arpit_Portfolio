import React from 'react'
import { Briefcase, GraduationCap, Calendar, User, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const About = ({ onPreview }) => {
  const timelineExperience = [
    {
      role: "Full Stack Developer Intern",
      org: "Divam Technology (Remote)",
      duration: "Mar 2026 - Present",
      details: "Developing and maintaining full-stack web applications using modern JavaScript frameworks. Collaborating on RESTful API design, integration, and testing, and implementing performance tuning."
    },
    {
      role: "Web Development Intern",
      org: "WebLedgers (Remote)",
      duration: "Nov 2025 - Feb 2026",
      details: "Collaborated with cross-functional engineering teams using Vue.js. Resolved 41 frontend and 8 backend tickets to enhance platform performance, reliability, and code quality.",
      link: "https://drive.google.com/file/d/1gEVwJ8lMEEC5DASoCaO0ofbJj25B1xq0/view?usp=sharing"
    },
    {
      role: "Web Developer (Freelance)",
      org: "Aadi Foundation (Remote)",
      duration: "Aug 2024 - Sep 2024",
      details: "Redesigned UI/UX across 3 internal web applications, streamlining navigation workflows and reducing average task completion steps by ~40%.",
      link: "https://drive.google.com/file/d/1VwQbARXEigKSwP1bwTpCnfnw-C2hHx2T/view?usp=sharing"
    }
  ]

  const timelineEducation = [
    {
      degree: "B.Tech in Computer Science (AI & Machine Learning)",
      org: "VIT Bhopal University (Sehore, MP)",
      duration: "2023 - 2027",
      details: "Focusing on full-stack web architectures, database designs, core CS concepts (DSA, DBMS, OS, Computer Networks), and machine learning models. CGPA: 9.04."
    },
    {
      degree: "Class XII (CBSE)",
      org: "Jim Corbett Public School (Agra, UP)",
      duration: "Completed 2023",
      details: "Senior Secondary Education specializing in Science (Physics, Chemistry, Mathematics) and Computer Science."
    },
    {
      degree: "Class X (ICSE)",
      org: "St. George's College (Agra, UP)",
      duration: "Completed 2021",
      details: "Secondary Education with focus on general sciences, mathematics, and computer applications."
    }
  ]

  return (
    <section id="about" className="py-20 px-6 md:px-16 w-full max-w-7xl mx-auto flex flex-col items-center gap-16 min-h-screen">

      {/* Intro Grid: Text + Photo */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-12">

        {/* Bio Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full lg:w-[60%] flex flex-col justify-center items-start gap-4"
        >
          <Badge variant="outline" className="gap-1.5 border-white/20 text-yellow-300 bg-white/5 px-3 py-1 text-xs font-extrabold uppercase tracking-wider">
            <User size={12} /> About Me
          </Badge>

          <p className='text-orange-300 font-mono leading-9 text-base md:text-lg'>
            I am a final-year B.Tech AIML undergraduate student from VIT Bhopal, specializing in full-stack web development and algorithm design. With a strong academic record (9.04 CGPA) and a passion for building user-centric, production-ready systems, I focus on creating high-quality web solutions.
          </p>
          <p className="text-muted-foreground mt-1 leading-relaxed text-sm md:text-base">
            My core expertise lies in the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS) and Vue.js, complemented by daily problem solving in C++ (463+ LeetCode problems, CodeChef 3-Star). I have completed 2 internships and 1 freelance project, delivering agile features, UI redesigns, and API optimizations.
          </p>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-[35%] flex justify-center items-center overflow-hidden p-2 rounded-3xl bg-white/5 border border-white/10 shadow-2xl h-[300px] md:h-[400px]"
        >
          <img
            src="profile.jpg"
            alt="Arpit Singh"
            id="profilePhoto"
            className="h-full w-full object-cover rounded-2xl object-top opacity-90 grayscale contrast-125 brightness-75 hover:grayscale-0 hover:brightness-100 hover:scale-[1.03] transition-all duration-700 ease-out cursor-pointer"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800';
            }}
          />
        </motion.div>
      </div>

      {/* Timeline Grid: Experience & Education */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-4">

        {/* Experience Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-white/8 border-white/20 backdrop-blur-md shadow-xl rounded-2xl h-full">
            <CardHeader className="flex flex-row items-center gap-3 pb-3">
              <Briefcase className="text-yellow-300 shrink-0" size={22} />
              <h3 className="text-xl font-bold text-white">Experience</h3>
            </CardHeader>
            <Separator className="bg-white/10 mb-4 mx-6 w-auto" />
            <CardContent className="flex flex-col gap-6">
              {timelineExperience.map((exp, idx) => (
                <div key={idx} className="flex flex-col gap-2 relative pl-4 border-l-2 border-yellow-300/30">
                  <div className="absolute h-3 w-3 rounded-full bg-yellow-300 -left-[7px] top-[6px] ring-2 ring-black/50" />

                  <div className="flex justify-between items-start gap-4 flex-wrap">
                    <h4 className="font-extrabold text-white text-sm md:text-base leading-tight">{exp.role}</h4>
                    <Badge variant="outline" className="text-[10px] text-yellow-300 border-yellow-300/30 bg-yellow-300/5 gap-1 shrink-0">
                      <Calendar size={10} /> {exp.duration}
                    </Badge>
                  </div>

                  <span className="text-xs font-bold text-muted-foreground">{exp.org}</span>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{exp.details}</p>

                  {exp.link && onPreview && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onPreview(exp.link, exp.role, exp.org)}
                      className="w-fit gap-1.5 text-xs text-yellow-300 border-yellow-300/30 bg-yellow-300/5 hover:bg-yellow-300/15 hover:border-yellow-300/50 rounded-full mt-1"
                    >
                      <ExternalLink size={11} /> Preview Certificate
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="bg-white/8 border-white/20 backdrop-blur-md shadow-xl rounded-2xl h-full">
            <CardHeader className="flex flex-row items-center gap-3 pb-3">
              <GraduationCap className="text-purple-400 shrink-0" size={22} />
              <h3 className="text-xl font-bold text-white">Education</h3>
            </CardHeader>
            <Separator className="bg-white/10 mb-4 mx-6 w-auto" />
            <CardContent className="flex flex-col gap-6">
              {timelineEducation.map((edu, idx) => (
                <div key={idx} className="flex flex-col gap-2 relative pl-4 border-l-2 border-purple-400/30">
                  <div className="absolute h-3 w-3 rounded-full bg-purple-400 -left-[7px] top-[6px] ring-2 ring-black/50" />

                  <div className="flex justify-between items-start gap-4 flex-wrap">
                    <h4 className="font-extrabold text-white text-sm md:text-base leading-tight">{edu.degree}</h4>
                    <Badge variant="outline" className="text-[10px] text-purple-300 border-purple-400/30 bg-purple-400/5 gap-1 shrink-0">
                      <Calendar size={10} /> {edu.duration}
                    </Badge>
                  </div>

                  <span className="text-xs font-bold text-muted-foreground">{edu.org}</span>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  )
}

export default About