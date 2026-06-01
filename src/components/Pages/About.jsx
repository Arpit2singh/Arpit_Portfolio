import React from 'react'
import { Briefcase, GraduationCap, Calendar, User, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const About = ({ onPreview }) => {
  const aboutVariants = {
    hidden: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

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
          variants={aboutVariants} 
          initial="hidden" 
          whileInView="animate" 
          viewport={{ once: true }} 
          className="w-full lg:w-[60%] flex flex-col justify-center items-start text-lg md:text-xl font-medium leading-relaxed"
        >
          <div className="flex items-center gap-2 mb-4 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-yellow-300">
            <User size={14} /> About Me
          </div>
          <p className='text-orange-300 font-["IBM_PLEX_MONO"] leading-9'>
            I am a final-year B.Tech AIML undergraduate student from VIT Bhopal, specializing in full-stack web development and algorithm design. With a strong academic record (9.04 CGPA) and a passion for building user-centric, production-ready systems, I focus on creating high-quality web solutions.
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            My core expertise lies in the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS) and Vue.js, complemented by daily problem solving in C++ (463+ LeetCode problems, CodeChef 3-Star). I have completed 2 internships and 1 freelance project, delivering agile features, UI redesigns, and API optimizations.
          </p>
        </motion.div>

        {/* Profile Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}  
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }} 
          className="w-full lg:w-[35%] flex justify-center items-center overflow-hidden p-2 rounded-4xl bg-white/5 border border-white/10 shadow-2xl h-[300px] md:h-[400px]"
        >
          <img 
            src="profile.jpg" 
            alt="Arpit Singh" 
            id="profilePhoto" 
            className="h-full w-full object-cover rounded-3xl object-top opacity-90 grayscale contrast-125 brightness-75 hover:grayscale-0 hover:brightness-100 hover:scale-[1.03] transition-all duration-700 ease-out cursor-pointer" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800';
            }}
          />
        </motion.div>
      </div>

      {/* Timeline Grid: Experience & Education */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full mt-8">
        
        {/* Experience Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 border border-white/20 rounded-4xl p-6 md:p-8 backdrop-blur-md shadow-xl flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 border-b border-white/15 pb-3">
            <Briefcase className="text-yellow-300" size={22} />
            <h3 className="text-xl font-bold text-white">Experience</h3>
          </div>

          <div className="flex flex-col gap-6">
            {timelineExperience.map((exp, idx) => (
              <div key={idx} className="flex flex-col gap-2 relative pl-4 border-l border-yellow-300/30">
                <div className="absolute h-3 w-3 rounded-full bg-yellow-300 -left-[6px] top-[6px]" />
                <div className="flex justify-between items-start gap-4 flex-wrap">
                  <h4 className="font-extrabold text-white text-base md:text-lg leading-tight">{exp.role}</h4>
                  <span className="text-xs text-yellow-300 font-semibold bg-yellow-300/10 px-2 py-0.5 rounded border border-yellow-300/20 flex items-center gap-1">
                    <Calendar size={12} /> {exp.duration}
                  </span>
                </div>
                <span className="text-xs font-bold text-gray-400">{exp.org}</span>
                <p className="text-gray-300 text-xs md:text-sm mt-1 leading-relaxed">{exp.details}</p>
                {exp.link && onPreview && (
                  <button
                    onClick={() => onPreview(exp.link, exp.role, exp.org)}
                    className="flex items-center gap-1 text-xs text-yellow-300 border border-yellow-300/30 px-3 py-1.5 rounded-full hover:bg-yellow-300/10 active:scale-95 transition-all font-semibold shrink-0 w-fit mt-2 cursor-pointer"
                  >
                    <ExternalLink size={12} />
                    Preview Certificate
                  </button>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/10 border border-white/20 rounded-4xl p-6 md:p-8 backdrop-blur-md shadow-xl flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 border-b border-white/15 pb-3">
            <GraduationCap className="text-purple-400" size={22} />
            <h3 className="text-xl font-bold text-white">Education</h3>
          </div>

          <div className="flex flex-col gap-6">
            {timelineEducation.map((edu, idx) => (
              <div key={idx} className="flex flex-col gap-2 relative pl-4 border-l border-purple-400/30">
                <div className="absolute h-3 w-3 rounded-full bg-purple-400 -left-[6px] top-[6px]" />
                <div className="flex justify-between items-start gap-4 flex-wrap">
                  <h4 className="font-extrabold text-white text-base md:text-lg leading-tight">{edu.degree}</h4>
                  <span className="text-xs text-purple-300 font-semibold bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 flex items-center gap-1">
                    <Calendar size={12} /> {edu.duration}
                  </span>
                </div>
                <span className="text-xs font-bold text-gray-400">{edu.org}</span>
                <p className="text-gray-300 text-xs md:text-sm mt-1 leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About