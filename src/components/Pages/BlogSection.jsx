import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Calendar, Tag, ArrowLeft, Loader2, BookOpen } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription } from '@/components/ui/alert'

const API_BASE = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
  ? "http://localhost:3000"
  : "https://portfolio-backend-wpgz.onrender.com"

const BlogSection = () => {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)
  const [loadingList, setLoadingList] = useState(true)
  const [loadingDetail, setLoadingDetail] = useState(false)
  const [error, setError] = useState(null)

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
            className="w-full"
          >
            <Card className="bg-white/8 border-white/20 backdrop-blur-md shadow-2xl rounded-2xl text-white">
              <CardHeader>
                {/* Back Button */}
                <Button
                  variant="ghost"
                  onClick={handleBackToList}
                  className="w-fit gap-2 text-yellow-300 hover:text-yellow-400 hover:bg-yellow-400/10 font-bold mb-2 group px-2"
                >
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  Back to Articles
                </Button>

                {/* Post Header */}
                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent mt-2">
                  {selectedPost.title}
                </h1>

                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground items-center mt-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {new Date(selectedPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  {selectedPost.tags && selectedPost.tags.length > 0 && (
                    <span className="flex items-center gap-2">
                      <Tag size={14} />
                      <div className="flex gap-1.5 flex-wrap">
                        {selectedPost.tags.map(t => (
                          <Badge key={t} variant="secondary" className="text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </span>
                  )}
                </div>
              </CardHeader>

              <Separator className="bg-white/10 mx-6 w-auto" />

              <CardContent className="pt-6">
                {loadingDetail ? (
                  <div className="flex flex-col items-center justify-center py-20 gap-4">
                    <Loader2 size={40} className="animate-spin text-yellow-400" />
                    <p className="text-muted-foreground font-medium">Fetching article content...</p>
                  </div>
                ) : (
                  <article className="prose prose-invert prose-yellow max-w-none leading-relaxed text-gray-200">
                    <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
                  </article>
                )}
              </CardContent>
            </Card>
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
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Sharing thoughts, guides, and developer stories — pulled from GitHub markdown files.
              </p>
            </div>

            {/* Error alert */}
            {error && (
              <Alert variant="destructive" className="w-full mb-8 bg-red-500/10 border-red-500/30 text-red-300 rounded-2xl">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Loading */}
            {loadingList ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <Loader2 size={40} className="animate-spin text-yellow-400" />
                <p className="text-muted-foreground font-medium">Loading articles...</p>
              </div>
            ) : posts.length > 0 ? (
              <div className="flex flex-col gap-5 w-full">
                {posts.map((post, idx) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => handleViewPost(post.slug)}
                    className="cursor-pointer"
                  >
                    <Card className="bg-white/8 border-white/20 backdrop-blur-md shadow-xl rounded-2xl hover:border-white/35 transition-all duration-300 group">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge variant="outline" className="text-xs text-yellow-300 border-yellow-300/30 bg-yellow-300/5 gap-1">
                            <Calendar size={11} />
                            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                          </Badge>
                          {post.tags && post.tags.slice(0, 3).map(tag => (
                            <Badge key={tag} variant="secondary" className="text-[10px] bg-white/5 text-gray-300 border border-white/10">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors leading-snug mt-1">
                          {post.title}
                        </h3>
                      </CardHeader>

                      <CardContent className="pt-0 pb-2">
                        <p className="text-muted-foreground text-sm line-clamp-2">{post.description}</p>
                      </CardContent>

                      <Separator className="bg-white/10 mx-6 w-auto" />

                      <CardFooter className="pt-3 pb-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1.5 text-sm font-extrabold text-yellow-300 border-yellow-300/30 bg-black/30 hover:bg-yellow-300/10 hover:border-yellow-300 rounded-full pointer-events-none"
                        >
                          <BookOpen size={14} /> Read Post
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <Card className="w-full bg-white/5 border-white/10 rounded-2xl">
                <CardContent className="py-16 text-center text-muted-foreground italic">
                  No blog posts found. Add markdown files in the "/blog" folder to display them here!
                </CardContent>
              </Card>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default BlogSection
