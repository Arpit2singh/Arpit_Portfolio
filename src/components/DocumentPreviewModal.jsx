import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, ShieldAlert, Award, FileText } from 'lucide-react'

const DocumentPreviewModal = ({ data, onClose }) => {
  // data: { url, title, issuer }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (data) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden' // Lock background scrolling
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [data, onClose])

  if (!data) return null

  // Extract Google Drive ID if exists
  const getGoogleDriveEmbedUrl = (url) => {
    if (!url) return null
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`
    }
    return null
  }

  const driveEmbedUrl = getGoogleDriveEmbedUrl(data.url)
  const isGoogleDrive = !!driveEmbedUrl

  // Determine platform/issuer name for fallback
  const getPlatformName = (url) => {
    if (url.includes('coursera.org')) return 'Coursera (Stanford)'
    if (url.includes('taylorfrancis.com')) return 'Taylor & Francis (Scopus)'
    if (url.includes('credly.com')) return 'Credly (Google IT Support)'
    if (url.includes('ijaresm.com')) return 'IJARESM International Journal'
    return 'External Secure Domain'
  }

  const platform = getPlatformName(data.url)

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal content container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-4xl h-[80vh] md:h-[85vh] bg-neutral-900/90 border border-white/10 rounded-4xl shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Header block */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-neutral-950/40">
            <div className="flex flex-col">
              <span className="text-[10px] text-yellow-300 font-extrabold uppercase tracking-wider flex items-center gap-1">
                {isGoogleDrive ? <Award size={12} /> : <FileText size={12} />}
                Verified Credential Preview
              </span>
              <h3 className="text-base md:text-lg font-bold text-white leading-tight mt-0.5 max-w-[280px] sm:max-w-md md:max-w-xl truncate">
                {data.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body content block */}
          <div className="flex-1 w-full bg-neutral-950/20 p-4 flex flex-col justify-center items-center overflow-hidden">
            {isGoogleDrive ? (
              // Embed Drive Preview PDF/Image
              <div className="w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-black/40 relative">
                {/* Loader animation underneath the iframe */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 z-0">
                  <div className="w-8 h-8 border-4 border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <iframe
                  src={driveEmbedUrl}
                  className="w-full h-full relative z-10 border-0"
                  allow="autoplay"
                  title={data.title}
                />
              </div>
            ) : (
              // Fallback Screen for External Pages
              <div className="w-full max-w-lg p-6 md:p-8 rounded-3xl bg-neutral-900/50 border border-white/10 shadow-xl flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-300">
                  <ShieldAlert size={32} />
                </div>
                
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-bold text-white">{data.title}</h4>
                  <span className="text-xs text-gray-400 font-semibold">{data.issuer}</span>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-left flex gap-3 text-xs md:text-sm text-gray-300 leading-relaxed max-w-md">
                  <span className="shrink-0 text-yellow-300 font-bold">ℹ️</span>
                  <span>
                    To protect user security, <strong>{platform}</strong> restricts embedding pages directly inside iframes. 
                    Click below to open and verify this credential on the official issuer website.
                  </span>
                </div>

                <a
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 hover:from-yellow-300 hover:to-red-400 text-neutral-950 font-extrabold rounded-2xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all text-sm uppercase tracking-wide cursor-pointer"
                >
                  Open Official Link <ExternalLink size={16} />
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default DocumentPreviewModal
