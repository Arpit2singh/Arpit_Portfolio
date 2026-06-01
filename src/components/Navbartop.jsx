import React, { useState, useEffect } from 'react'
import { Contact, Home, Presentation, User, Wrench, BookOpen, Sun, Moon, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Separator } from '@/components/ui/separator'

const navLinks = [
  { href: '#home', icon: Home, label: 'Home' },
  { href: '#about', icon: User, label: 'About' },
  { href: '#projects', icon: Presentation, label: 'Projects' },
  { href: '#skills', icon: Wrench, label: 'Skills' },
  { href: '#blog', icon: BookOpen, label: 'Blog' },
  { href: '#contact', icon: Contact, label: 'Contact' },
]

const Navbartop = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <>
      {/* DESKTOP NAV */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
        className="flex justify-center items-center pt-5 w-full fixed top-0 z-50 px-4"
      >
        <nav className={`flex justify-between items-center h-[60px] w-full max-w-4xl rounded-2xl px-4 transition-all duration-500 ${
          scrolled
            ? 'bg-black/70 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/40'
            : 'bg-white/8 backdrop-blur-xl border border-white/12 shadow-xl shadow-black/20'
        }`}>

          {/* Logo / Name */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-extrabold text-sm">A</span>
            </div>
            <span className="hidden sm:block font-extrabold text-white text-base tracking-tight">
              Arpit<span className="text-yellow-300">.</span>
            </span>
          </a>

          {/* Desktop Links — center */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, icon: Icon, label }) => (
              <Tooltip key={href}>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveLink(href)}
                    className={`font-semibold text-sm gap-1.5 px-3 h-9 rounded-xl transition-all duration-200 ${
                      activeLink === href
                        ? 'text-yellow-300 bg-white/10'
                        : 'text-white/70 hover:text-white hover:bg-white/8'
                    }`}
                  >
                    <a href={href} id={`nav-${label.toLowerCase()}`}>
                      <Icon size={15} className="shrink-0" />
                      {label}
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="text-xs">
                  Go to {label}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          {/* Right: Theme + Mobile burger */}
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="h-9 w-9 rounded-xl text-white/70 hover:text-yellow-300 hover:bg-white/10 transition-all"
                  aria-label="Toggle Theme"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={theme}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {theme === 'dark'
                        ? <Sun size={17} className="text-yellow-300" />
                        : <Moon size={17} />}
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
              </TooltipContent>
            </Tooltip>

            {/* Mobile burger */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden h-9 w-9 rounded-xl text-white/70 hover:text-white hover:bg-white/10"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </nav>
      </motion.div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-[80px] left-4 right-4 z-40 rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/15 shadow-2xl overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-3 gap-1">
              {navLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => { setActiveLink(href); setMobileOpen(false) }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-base transition-all ${
                    activeLink === href
                      ? 'text-yellow-300 bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/8'
                  }`}
                >
                  <Icon size={18} className="shrink-0" />
                  {label}
                </a>
              ))}
              <Separator className="bg-white/10 my-1" />
              <button
                onClick={() => { toggleTheme(); setMobileOpen(false) }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-base text-white/80 hover:text-white hover:bg-white/8 transition-all w-full text-left"
              >
                {theme === 'dark' ? <Sun size={18} className="text-yellow-300" /> : <Moon size={18} />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbartop
