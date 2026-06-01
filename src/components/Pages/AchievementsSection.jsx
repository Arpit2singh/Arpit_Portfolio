import React, { useState, useEffect } from 'react'
import { Award, GraduationCap, FileText, ExternalLink, Activity, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const AchievementsSection = ({ onPreview }) => {
  const [leetdata, setLeetdata] = useState(null)

  useEffect(() => {
    const fetchLeetData = async () => {
      try {
        const response = await fetch("https://leetcode-api-faisalshohag.vercel.app/arpitlibono57")
        if (response.ok) {
          const data = await response.json()
          setLeetdata(data)
        }
      } catch (err) {
        console.error("Failed to fetch LeetCode data:", err)
      }
    }
    fetchLeetData()
  }, [])

  const achievements = [
    {
      title: "LeetCode: 463+ Problems Solved",
      desc: "Earned 200-Days, 100-Days, and 50-Days consistency badges—demonstrating disciplined, long-term DSA commitment.",
      year: "Active",
    },
    {
      title: "CodeChef: 3-Star Rated Coder",
      desc: "Consistent performance across competitive programming contests.",
      year: "3-Star",
    },
    {
      title: "HackCulture Hackathon Grand Finalist",
      desc: "Selected as Grand Finalist at HackCulture Hackathon (T-Works, Hyderabad)—built an end-to-end GenAI pipeline.",
      year: "2026",
    }
  ]

  const certifications = [
    {
      name: "Web Development Specialization",
      issuer: "Microsoft, DevTown",
      link: "https://drive.google.com/file/d/1aOYyUtSsL4CsTdxTBjIciw9B2mI1xr0S/view?usp=sharing",
    },
    {
      name: "DSA: GFG 160 Days Challenge Certificate",
      issuer: "GeeksforGeeks",
      link: "https://drive.google.com/file/d/1fdR6bNbY6z_r4yU_Tf9DFb0Q4Yd-_dWf/view?usp=drive_link",
    },
    {
      name: "Python Coding Specialization",
      issuer: "Vityarthi",
      link: "https://drive.google.com/file/d/10b3HpO-CsqsersultptdBYJtHbJe9TOO/view?usp=drive_link",
    },
    {
      name: "ReactJS Development Certification",
      issuer: "VIT Projects Study",
      link: "https://drive.google.com/file/d/16alFjjV4GEsGXPqo_hy1gt7n0RagFhKy/view?usp=drive_link",
    },
    {
      name: "Machine Learning Certificate",
      issuer: "Stanford / Coursera",
      link: "https://coursera.org/share/cdacdcaf5514df64d43e4b4606a0ccd8",
    },
    {
      name: "Google IT Support Professional Badge",
      issuer: "Google / Credly",
      link: "https://www.credly.com/badges/9d80ab65-b70a-45f0-9157-f51c8959e3d3",
    }
  ]

  const publications = [
    {
      title: "Hybrid Attention Network with TabNet Benchmarking for Breast Cancer and Heart Disease Classification",
      journal: "Routledge / Scopus (Accepted, March 12, 2026)",
      desc: "Designed a hybrid deep learning model combining attention mechanisms with TabNet, achieving high classification accuracy on medical benchmark datasets.",
      doi: "https://www.taylorfrancis.com/books/edit/10.1201/9781003666929/smart-technologies-intelligent-computing-jaskaran-singh-meenu-gupta-rakesh-kumar",
      tag: "Scopus-Indexed"
    },
    {
      title: "Research Paper: EchoVIT-Enhanced Platform",
      journal: "IJARESM Journal (Published, Jan 2024)",
      desc: "Authored and published research on web platform performance enhancement using MongoDB, contributing to the knowledge base in full-stack web systems.",
      doi: "https://www.ijaresm.com/echovit-an-efficient-platform-for-seamless-communication-at-your-fingertip-using-mongodb",
      tag: "International Journal"
    }
  ]

  const leetChartData = leetdata ? [
    { name: 'Easy', count: leetdata.easySolved, fill: '#4ade80' },
    { name: 'Medium', count: leetdata.mediumSolved, fill: '#facc15' },
    { name: 'Hard', count: leetdata.hardSolved, fill: '#f87171' }
  ] : []

  return (
    <section id="achievements" className="py-20 px-6 md:px-16 w-full max-w-7xl mx-auto flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
          Achievements & Publications
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Highlighting academic milestones, professional certifications, scientific research publications, and open-source contribution statistics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* Column 1: Achievements & Certifications */}
        <div className="flex flex-col gap-8">
          {/* CP / Hackathons / Milestones */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/20 rounded-4xl p-6 backdrop-blur-md shadow-xl flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 border-b border-white/15 pb-3">
              <Award className="text-yellow-400" size={24} />
              <h3 className="text-xl font-bold text-white">Competitive Programming & Hackathons</h3>
            </div>

            <div className="flex flex-col gap-5">
              {achievements.map((ach, idx) => (
                <div key={idx} className="flex gap-4 items-start border-l-2 border-yellow-400/40 pl-4 py-1">
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-base md:text-lg">{ach.title}</h4>
                    <p className="text-gray-300 text-xs md:text-sm">{ach.desc}</p>
                  </div>
                  <span className="text-xs bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 px-2 py-0.5 rounded font-bold shrink-0">
                    {ach.year}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 border border-white/20 rounded-4xl p-6 backdrop-blur-md shadow-xl flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 border-b border-white/15 pb-3">
              <GraduationCap className="text-blue-400" size={24} />
              <h3 className="text-xl font-bold text-white">Certifications & Responsibilities</h3>
            </div>

            <div className="flex flex-col gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex justify-between items-center gap-4 py-1">
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base">{cert.name}</h4>
                    <span className="text-xs text-gray-400">{cert.issuer}</span>
                  </div>
                  {onPreview ? (
                    <button 
                      onClick={() => onPreview(cert.link, cert.name, cert.issuer)}
                      className="flex items-center gap-1 text-xs text-yellow-300 border border-yellow-300/30 px-3 py-1.5 rounded-full hover:bg-yellow-300/10 active:scale-95 transition-all font-semibold shrink-0 cursor-pointer"
                    >
                      <ExternalLink size={12} />
                      Preview
                    </button>
                  ) : (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-yellow-300 border border-yellow-300/30 px-3 py-1.5 rounded-full hover:bg-yellow-300/10 active:scale-95 transition-all font-semibold shrink-0"
                    >
                      <ExternalLink size={12} />
                      Verify
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Column 2: Research & GitHub Activity */}
        <div className="flex flex-col gap-8">
          {/* Research & Publications */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-500/30 rounded-4xl p-6 backdrop-blur-md shadow-xl flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 border-b border-purple-500/30 pb-3">
              <FileText className="text-purple-400" size={24} />
              <h3 className="text-xl font-bold text-white">Research Papers</h3>
            </div>

            <div className="flex flex-col gap-5">
              {publications.map((pub, idx) => (
                <div key={idx} className="bg-black/30 p-4 rounded-2xl border border-white/5 flex flex-col gap-2">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <span className="text-[10px] bg-purple-500/30 text-purple-300 border border-purple-500/40 px-2 py-0.5 rounded font-extrabold uppercase tracking-wider">
                      {pub.tag}
                    </span>
                    {onPreview ? (
                      <button 
                        onClick={() => onPreview(pub.doi, pub.title, pub.journal)}
                        className="flex items-center gap-1 text-xs font-bold text-yellow-300 hover:text-yellow-400 cursor-pointer"
                      >
                        Preview Publication <ExternalLink size={12} />
                      </button>
                    ) : (
                      <a 
                        href={pub.doi} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-bold text-yellow-300 hover:text-yellow-400"
                      >
                        Publication Link <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                  <h4 className="font-extrabold text-white text-sm md:text-base leading-tight mt-1">
                    {pub.title}
                  </h4>
                  <span className="text-[11px] text-gray-400 font-semibold">{pub.journal}</span>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {pub.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* LeetCode Live Chart */}
          {leetdata && (
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 rounded-4xl p-6 backdrop-blur-md shadow-xl flex flex-col gap-4"
            >
              <div className="flex items-center gap-3 border-b border-white/15 pb-2">
                <Trophy className="text-yellow-400" size={22} />
                <h3 className="text-lg font-bold text-white">LeetCode Solve Statistics</h3>
              </div>
              <div className="h-[160px] w-full mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={leetChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff15" />
                    <XAxis dataKey="name" stroke="#a1a1aa" tick={{ fill: '#a1a1aa', fontSize: 12 }} />
                    <YAxis stroke="#a1a1aa" tick={{ fill: '#a1a1aa', fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#000000d0', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)' }} />
                    <Bar dataKey="count" radius={[10, 10, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center text-sm font-semibold text-gray-200 mt-1 gap-4">
                <span>Total Solved: <strong className="text-yellow-300">{leetdata.totalSolved}</strong></span>
                <span>Ranking: <strong className="text-purple-300">{leetdata.ranking}</strong></span>
              </div>
            </motion.div>
          )}

          {/* GitHub Activity */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 border border-white/20 rounded-4xl p-6 backdrop-blur-md shadow-xl flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 border-b border-white/15 pb-3">
              <Activity className="text-green-400" size={24} />
              <h3 className="text-xl font-bold text-white">GitHub Activity & Stats</h3>
            </div>

            <div className="flex flex-col gap-4 items-center justify-center">
              {/* GitHub Stats Card */}
              <img 
                src="https://github-readme-stats.vercel.app/api?username=Arpit2singh&show_icons=true&theme=transparent&text_color=ffffff&icon_color=ffdd67&title_color=facc15&hide_border=true"
                alt="GitHub Stats"
                className="w-full max-w-md object-contain rounded-2xl bg-black/20 p-2 border border-white/5"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              
              {/* Streak Stats */}
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=Arpit2singh&theme=transparent&currStreakNum=ffffff&currStreakLabel=facc15&sideNums=ffffff&sideLabels=a855f7&hide_border=true"
                alt="GitHub Streak"
                className="w-full max-w-md object-contain rounded-2xl bg-black/20 p-2 border border-white/5"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
