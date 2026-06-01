import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Trophy, BookOpen } from 'lucide-react'

const ScrollShowcase = () => {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const currentFrameRef = useRef(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)

  const TOTAL_FRAMES = 240
  const PRELOAD_MIN = 30 // Start playing once 30 frames are ready

  const slides = [
    {
      title: "Building Real-World Apps",
      subtitle: "MERN Stack · React · Node.js",
      desc: "I enjoy turning ideas into working products — from AI-powered platforms like UniBridge to practical tools like Expenser. Still learning every day, one project at a time.",
      icon: <Cpu className="text-yellow-400 animate-pulse" size={28} />
    },
    {
      title: "Consistent Problem Solver",
      subtitle: "LeetCode · CodeChef · Daily Practice",
      desc: "Not a genius, just consistent. 463+ LeetCode problems solved, CodeChef 3-Star rating, and a habit of showing up daily. Competitive programming keeps my thinking sharp.",
      icon: <Trophy className="text-yellow-400 animate-pulse" size={28} />
    },
    {
      title: "Curious About Research & Tech",
      subtitle: "Hackathons · Published Paper · Exploration",
      desc: "Got a Scopus-indexed paper published and reached the Grand Finale at HackCulture (Hyderabad). I explore things that interest me — whether it's deep learning, vision APIs, or just cool experiments.",
      icon: <BookOpen className="text-yellow-400 animate-pulse" size={28} />
    }
  ]

  // Preload Image Sequence
  useEffect(() => {
    let loadedCount = 0
    const loadedImages = []

    const preloadImages = async () => {
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image()
        const paddedIndex = String(i).padStart(3, '0')
        img.src = `/ezgif-1776a89545f873f8-jpg/ezgif-frame-${paddedIndex}.jpg`
        
        img.onload = () => {
          loadedCount++
          setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100))
          if (loadedCount >= PRELOAD_MIN) {
            setImagesLoaded(true)
          }
        }
        loadedImages.push(img)
      }
      imagesRef.current = loadedImages
    }

    preloadImages()
  }, [])

  // Canvas drawing cover/contain helper
  const drawFrame = (img) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const imgRatio = img.width / img.height
    const canvasRatio = canvas.width / canvas.height
    let dWidth, dHeight, dx, dy

    // Use contain logic for cinematic model centering
    if (imgRatio > canvasRatio) {
      dWidth = canvas.width
      dHeight = canvas.width / imgRatio
      dx = 0
      dy = (canvas.height - dHeight) / 2
    } else {
      dHeight = canvas.height
      dWidth = canvas.height * imgRatio
      dx = (canvas.width - dWidth) / 2
      dy = 0
    }

    ctx.drawImage(img, dx, dy, dWidth, dHeight)
  }

  // Handle scroll events and draw frame
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !canvasRef.current || imagesRef.current.length === 0) return

      const rect = containerRef.current.getBoundingClientRect()
      const scrollHeight = rect.height - window.innerHeight
      const progress = Math.max(0, Math.min(1, -rect.top / scrollHeight))

      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progress * TOTAL_FRAMES)
      )

      if (imagesRef.current[frameIndex] && imagesRef.current[frameIndex].complete) {
        currentFrameRef.current = frameIndex
        requestAnimationFrame(() => drawFrame(imagesRef.current[frameIndex]))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [imagesLoaded])

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      canvas.width = canvas.parentElement.clientWidth
      canvas.height = canvas.parentElement.clientHeight
      
      const currentFrame = currentFrameRef.current
      if (imagesRef.current[currentFrame]) {
        drawFrame(imagesRef.current[currentFrame])
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [imagesLoaded])

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-transparent">
      
      {/* STICKY BACKGROUND SEQUENCE PANEL */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0 pointer-events-none">
        
        {/* Loading Overlay */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-neutral-950/90 z-20 pointer-events-auto">
            <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            <div className="text-center">
              <p className="text-white font-extrabold text-sm uppercase tracking-wide">
                Initializing UI Upgrade 2.0...
              </p>
              <p className="text-xs text-gray-500 font-semibold mt-1">
                Preloaded {loadProgress}% of 240 frames
              </p>
            </div>
          </div>
        )}

        {/* 3D Canvas rendering directly in the background */}
        <div className="w-[85%] h-[80vh] md:w-[70%] md:h-[80vh] max-w-4xl relative flex items-center justify-center opacity-45 mix-blend-screen filter blur-[2px] drop-shadow-[0_0_35px_rgba(245,158,11,0.25)] transition-opacity duration-300">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>
      </div>

      {/* PARALLAX SCROLL CONTENT LAYERS */}
      <div className="absolute inset-x-0 top-0 flex flex-col z-10">
        {slides.map((slide, idx) => (
          <div key={idx} className="h-screen w-full flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-150px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-lg bg-neutral-900/70 dark:bg-black/60 border border-white/20 dark:border-white/10 backdrop-blur-xl p-6 md:p-8 rounded-4xl shadow-2xl flex flex-col gap-4 text-left hover:scale-[1.02] active:scale-95 transition-all duration-300 pointer-events-auto"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-400/10 border border-yellow-400/20 rounded-2xl shrink-0">
                  {slide.icon}
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-extrabold text-white leading-tight">
                    {slide.title}
                  </h4>
                  <span className="text-[10px] sm:text-xs text-yellow-300 font-extrabold tracking-wider uppercase">
                    {slide.subtitle}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {slide.desc}
              </p>
            </motion.div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default ScrollShowcase
