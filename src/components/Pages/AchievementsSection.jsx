import React, { useState, useEffect } from 'react'
import { Award, GraduationCap, FileText, ExternalLink, Activity, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'

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
      desc: "Earned 200-Days, 100-Days, and 50-Days consistency badges — demonstrating disciplined, long-term DSA commitment.",
      year: "Active",
    },
    {
      title: "CodeChef: 3-Star Rated Coder",
      desc: "Consistent performance across competitive programming contests.",
      year: "3-Star",
    },
    {
      title: "HackCulture Hackathon Grand Finalist",
      desc: "Selected as Grand Finalist at HackCulture Hackathon (T-Works, Hyderabad) — built an end-to-end GenAI pipeline.",
      year: "2026",
    }
  ]

  const certifications = [
    { name: "Web Development Specialization", issuer: "Microsoft, DevTown", link: "https://drive.google.com/file/d/1aOYyUtSsL4CsTdxTBjIciw9B2mI1xr0S/view?usp=sharing" },
    { name: "DSA: GFG 160 Days Challenge Certificate", issuer: "GeeksforGeeks", link: "https://drive.google.com/file/d/1fdR6bNbY6z_r4yU_Tf9DFb0Q4Yd-_dWf/view?usp=drive_link" },
    { name: "Python Coding Specialization", issuer: "Vityarthi", link: "https://drive.google.com/file/d/10b3HpO-CsqsersultptdBYJtHbJe9TOO/view?usp=drive_link" },
    { name: "ReactJS Development Certification", issuer: "VIT Projects Study", link: "https://drive.google.com/file/d/16alFjjV4GEsGXPqo_hy1gt7n0RagFhKy/view?usp=drive_link" },
    { name: "Machine Learning Certificate", issuer: "Stanford / Coursera", link: "https://coursera.org/share/cdacdcaf5514df64d43e4b4606a0ccd8" },
    { name: "Google IT Support Professional Badge", issuer: "Google / Credly", link: "https://www.credly.com/badges/9d80ab65-b70a-45f0-9157-f51c8959e3d3" }
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
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
          Achievements & Publications
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Milestones, certifications, research publications, and competitive programming stats.
        </p>
      </div>

      {/* Tabbed Layout */}
      <Tabs defaultValue="achievements" className="w-full">
        <TabsList className="w-full flex flex-wrap sm:flex-nowrap justify-center bg-white/5 border border-white/15 backdrop-blur-md rounded-2xl p-2 mb-8 h-auto gap-2">
          <TabsTrigger value="achievements" className="rounded-xl flex-1 gap-2 font-extrabold text-sm md:text-base py-3 px-4
            data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500
            data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-yellow-500/20
            text-white/60 hover:text-white transition-all duration-200">
            <Award size={17} /> <span className="hidden sm:inline">Achievements</span><span className="sm:hidden">Awards</span>
          </TabsTrigger>
          <TabsTrigger value="certifications" className="rounded-xl flex-1 gap-2 font-extrabold text-sm md:text-base py-3 px-4
            data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500
            data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/20
            text-white/60 hover:text-white transition-all duration-200">
            <GraduationCap size={17} /> <span className="hidden sm:inline">Certifications</span><span className="sm:hidden">Certs</span>
          </TabsTrigger>
          <TabsTrigger value="publications" className="rounded-xl flex-1 gap-2 font-extrabold text-sm md:text-base py-3 px-4
            data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500
            data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/20
            text-white/60 hover:text-white transition-all duration-200">
            <FileText size={17} /> <span className="hidden sm:inline">Publications</span><span className="sm:hidden">Papers</span>
          </TabsTrigger>
          <TabsTrigger value="stats" className="rounded-xl flex-1 gap-2 font-extrabold text-sm md:text-base py-3 px-4
            data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500
            data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-green-500/20
            text-white/60 hover:text-white transition-all duration-200">
            <Activity size={17} /> Stats
          </TabsTrigger>
        </TabsList>

        {/* Tab: Achievements */}
        <TabsContent value="achievements">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Card className="bg-white/8 border-white/20 backdrop-blur-md shadow-xl rounded-2xl">
              <CardHeader className="flex flex-row items-center gap-3 pb-3">
                <Award className="text-yellow-400" size={24} />
                <h3 className="text-xl font-bold text-white">Competitive Programming & Hackathons</h3>
              </CardHeader>
              <Separator className="bg-white/10 mb-4 mx-6 w-auto" />
              <CardContent className="flex flex-col gap-5">
                {achievements.map((ach, idx) => (
                  <div key={idx} className="flex gap-4 items-start border-l-2 border-yellow-400/40 pl-4 py-1">
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-base">{ach.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{ach.desc}</p>
                    </div>
                    <Badge variant="outline" className="bg-yellow-400/10 text-yellow-300 border-yellow-400/30 shrink-0 font-bold">
                      {ach.year}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Tab: Certifications */}
        <TabsContent value="certifications">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Card className="bg-white/8 border-white/20 backdrop-blur-md shadow-xl rounded-2xl">
              <CardHeader className="flex flex-row items-center gap-3 pb-3">
                <GraduationCap className="text-blue-400" size={24} />
                <h3 className="text-xl font-bold text-white">Certifications & Credentials</h3>
              </CardHeader>
              <Separator className="bg-white/10 mb-4 mx-6 w-auto" />
              <CardContent className="flex flex-col divide-y divide-white/5">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex justify-between items-center gap-4 py-3 first:pt-0 last:pb-0">
                    <div>
                      <h4 className="font-bold text-white text-sm">{cert.name}</h4>
                      <span className="text-xs text-muted-foreground">{cert.issuer}</span>
                    </div>
                    {onPreview ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onPreview(cert.link, cert.name, cert.issuer)}
                        className="text-xs text-yellow-300 border-yellow-300/30 bg-yellow-300/5 hover:bg-yellow-300/15 rounded-full gap-1.5 shrink-0"
                      >
                        <ExternalLink size={11} /> Preview
                      </Button>
                    ) : (
                      <Button asChild variant="outline" size="sm" className="text-xs text-yellow-300 border-yellow-300/30 bg-yellow-300/5 hover:bg-yellow-300/15 rounded-full gap-1.5 shrink-0">
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={11} /> Verify
                        </a>
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Tab: Publications */}
        <TabsContent value="publications">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex flex-col gap-5">
              {publications.map((pub, idx) => (
                <Card key={idx} className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border-purple-500/30 backdrop-blur-md shadow-xl rounded-2xl">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className={`text-[10px] font-extrabold uppercase tracking-wider border ${idx === 0 ? 'bg-purple-500/20 text-purple-300 border-purple-500/40' : 'bg-blue-500/20 text-blue-300 border-blue-500/40'}`}
                      >
                        {pub.tag}
                      </Badge>
                      {onPreview ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onPreview(pub.doi, pub.title, pub.journal)}
                          className="text-xs font-bold text-yellow-300 hover:text-yellow-400 gap-1 px-2"
                        >
                          Preview Publication <ExternalLink size={12} />
                        </Button>
                      ) : (
                        <Button asChild variant="ghost" size="sm" className="text-xs font-bold text-yellow-300 hover:text-yellow-400 gap-1 px-2">
                          <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                            Publication Link <ExternalLink size={12} />
                          </a>
                        </Button>
                      )}
                    </div>
                    <h4 className="font-extrabold text-white text-sm md:text-base leading-tight">{pub.title}</h4>
                    <span className="text-xs text-muted-foreground font-semibold">{pub.journal}</span>
                    <p className="text-muted-foreground text-xs leading-relaxed">{pub.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </TabsContent>

        {/* Tab: Stats */}
        <TabsContent value="stats">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex flex-col gap-6">
              {/* LeetCode Chart */}
              {leetdata && (
                <Card className="bg-white/8 border-white/20 backdrop-blur-md shadow-xl rounded-2xl">
                  <CardHeader className="flex flex-row items-center gap-3 pb-3">
                    <Trophy className="text-yellow-400" size={22} />
                    <h3 className="text-lg font-bold text-white">LeetCode Solve Statistics</h3>
                  </CardHeader>
                  <Separator className="bg-white/10 mb-4 mx-6 w-auto" />
                  <CardContent>
                    <div className="h-[180px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={leetChartData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff15" />
                          <XAxis dataKey="name" stroke="#a1a1aa" tick={{ fill: '#a1a1aa', fontSize: 12 }} />
                          <YAxis stroke="#a1a1aa" tick={{ fill: '#a1a1aa', fontSize: 12 }} />
                          <Tooltip contentStyle={{ backgroundColor: '#000000d0', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)' }} />
                          <Bar dataKey="count" radius={[8, 8, 0, 0]} barSize={40} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center gap-6 text-sm font-semibold text-gray-200 mt-3">
                      <span>Total Solved: <strong className="text-yellow-300">{leetdata.totalSolved}</strong></span>
                      <span>Ranking: <strong className="text-purple-300">{leetdata.ranking}</strong></span>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* GitHub Stats */}
              <Card className="bg-white/8 border-white/20 backdrop-blur-md shadow-xl rounded-2xl">
                <CardHeader className="flex flex-row items-center gap-3 pb-3">
                  <Activity className="text-green-400" size={24} />
                  <h3 className="text-xl font-bold text-white">GitHub Activity & Stats</h3>
                </CardHeader>
                <Separator className="bg-white/10 mb-4 mx-6 w-auto" />
                <CardContent className="flex flex-col gap-4 items-center">
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=Arpit2singh&show_icons=true&theme=transparent&text_color=ffffff&icon_color=ffdd67&title_color=facc15&hide_border=true"
                    alt="GitHub Stats"
                    className="w-full max-w-md object-contain rounded-xl bg-black/20 p-2 border border-white/5"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                  <img
                    src="https://github-readme-streak-stats.herokuapp.com/?user=Arpit2singh&theme=transparent&currStreakNum=ffffff&currStreakLabel=facc15&sideNums=ffffff&sideLabels=a855f7&hide_border=true"
                    alt="GitHub Streak"
                    className="w-full max-w-md object-contain rounded-xl bg-black/20 p-2 border border-white/5"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default AchievementsSection
