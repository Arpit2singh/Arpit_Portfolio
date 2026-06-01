import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Calendar, Tag, ArrowLeft, Loader2, BookOpen } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const API_BASE = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
  ? "http://localhost:3000" 
  : "https://portfolio-backend-wpgz.onrender.com"

const BlogSection = () => {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)
  const [loadingList, setLoadingList] = useState(true)
  const [loadingDetail, setLoadingDetail] = useState(false)
  const [error, setError] = useState(null)

  // Fetch list of all blog posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoadingList(true)
        const response = await fetch(`${API_BASE}/portfolio/blog`)
        if (!response.ok) throw new Error("Failed to load blog posts list.")
        const resData = await response.json()
        setPosts(resData.data || [])
      } catch (err) {
        console.error(err)
        setError("Could not load blog posts. Please make sure the backend is running.")
      } finally {
        setLoadingList(false)
      }
    }
    fetchPosts()
  }, [])

  // Fetch a specific post content when clicked
  const handleViewPost = async (slug) => {
    try {
      setLoadingDetail(true)
      setError(null)
      const response = await fetch(`${API_BASE}/portfolio/blog/${slug}`)
      if (!response.ok) throw new Error(`Failed to load article '${slug}'.`)
      const resData = await response.json()
      setSelectedPost(resData.data)
    } catch (err) {
      console.error(err)
      setError("Could not load full article content. Please try again.")
    } finally {
      setLoadingDetail(false)
    }
  }

  const handleBackToList = () => {
    setSelectedPost(null)
    setError(null)
  }

  return (
    <section id="blog" className="py-20 px-6 md:px-16 w-full max-w-5xl mx-auto min-h-screen flex flex-col justify-start items-center">
      <AnimatePresence mode="wait">
        {selectedPost ? (
          /* ---------- ARTICLE READER VIEW ---------- */
          <motion.div
            key="post-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full bg-white/10 border border-white/20 rounded-4xl p-6 md:p-10 backdrop-blur-md shadow-2xl text-white"
          >
            {/* Back Button */}
            <button
              onClick={handleBackToList}
              className="flex items-center gap-2 text-yellow-300 hover:text-yellow-400 font-bold mb-6 group transition-colors"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Articles
            </button>

            {/* Post Header */}
            <div className="border-b border-white/15 pb-6 mb-8">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
                {selectedPost.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-300 items-center">
                <span className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  {new Date(selectedPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                
                {selectedPost.tags && selectedPost.tags.length > 0 && (
                  <span className="flex items-center gap-2">
                    <Tag size={16} />
                    <div className="flex gap-1.5">
                      {selectedPost.tags.map(t => (
                        <span key={t} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30">
                          {t}
                        </span>
                      ))}
                    </div>
                  </span>
                )}
              </div>
            </div>

            {/* Post Content */}
            {loadingDetail ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <Loader2 size={40} className="animate-spin text-yellow-400" />
                <p className="text-gray-300 font-medium">Fetching article content...</p>
              </div>
            ) : (
              <article className="prose prose-invert prose-yellow max-w-none leading-relaxed text-gray-200">
                <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
              </article>
            )}
          </motion.div>
        ) : (
          /* ---------- BLOG POSTS LIST VIEW ---------- */
          <motion.div
            key="posts-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full flex flex-col items-center"
          >
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
                Developer Blog
              </h2>
              <p className="text-gray-300 text-lg max-w-xl mx-auto">
                Sharing my thoughts, guides, and developer stories. Pulling content directly from GitHub markdown files.
              </p>
            </div>

            {/* Errors display */}
            {error && (
              <div className="w-full p-4 mb-8 bg-red-500/10 border border-red-500/30 text-red-300 text-sm rounded-2xl text-center">
                {error}
              </div>
            )}

            {/* Posts Cards list */}
            {loadingList ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <Loader2 size={40} className="animate-spin text-yellow-400" />
                <p className="text-gray-300 font-medium">Loading articles...</p>
              </div>
            ) : posts.length > 0 ? (
              <div className="flex flex-col gap-6 w-full">
                {posts.map((post, idx) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    className="p-6 bg-white/10 border border-white/20 rounded-4xl backdrop-blur-md shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 cursor-pointer hover:border-white/40 transition-colors"
                    onClick={() => handleViewPost(post.slug)}
                  >
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-yellow-300 font-bold flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </span>
                        
                        <div className="flex gap-1">
                          {post.tags && post.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white hover:text-yellow-300 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-300 text-sm line-clamp-2">
                        {post.description}
                      </p>
                    </div>

                    <button 
                      className="shrink-0 flex items-center gap-1.5 text-sm font-extrabold text-yellow-300 hover:text-yellow-400 active:scale-95 transition-all bg-black/40 border border-yellow-300/30 hover:border-yellow-300 px-4 py-2 rounded-full"
                    >
                      <BookOpen size={16} />
                      Read Post
                    </button>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-400 italic bg-white/5 border border-white/10 rounded-4xl w-full">
                No blog posts found. Add markdown files in the "/blog" folder of your repo to display them here!
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default BlogSection
