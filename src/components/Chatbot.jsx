import React, { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const API_BASE = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
  ? "http://localhost:3000" 
  : "https://portfolio-backend-wpgz.onrender.com"

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'model',
      content: "Hello! I am ArpitBot, Arpit's AI recruiter assistant. Ask me anything about his skills, projects, education, or contact info!"
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const suggestions = [
    "Tell me about Arpit's projects",
    "What is his tech stack?",
    "What is Arpit's CGPA?",
    "How can I contact him?"
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSendMessage = async (text) => {
    if (!text.trim()) return

    const userMessage = { role: 'user', content: text }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      // Map history to the format expected by the backend
      const history = messages.slice(1).map(msg => ({
        role: msg.role === 'model' ? 'model' : 'user',
        content: msg.content
      }))

      const response = await fetch(`${API_BASE}/portfolio/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: text,
          history
        })
      })

      if (!response.ok) throw new Error("Chat service failed.")

      const data = await response.json()
      const reply = data.data?.reply || "Sorry, I ran into an error."
      
      setMessages(prev => [...prev, { role: 'model', content: reply }])
    } catch (err) {
      console.error(err)
      setMessages(prev => [...prev, { 
        role: 'model', 
        content: "I'm having trouble connecting to my brain right now. Feel free to contact Arpit directly at arpitlibono57@gmail.com!" 
      }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="h-14 w-14 rounded-full bg-gradient-to-r from-red-500 to-purple-600 flex justify-center items-center text-white shadow-2xl hover:shadow-purple-500/30 cursor-pointer border border-white/20"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            className="absolute bottom-16 right-0 w-[350px] sm:w-[380px] h-[500px] rounded-3xl bg-black/90 border border-white/20 shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden text-white"
          >
            {/* Header */}
            <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <Bot size={20} className="text-purple-400" />
                <div>
                  <h3 className="font-extrabold text-sm leading-tight text-white">ArpitBot AI</h3>
                  <span className="text-[10px] text-gray-400">Recruiter Assistant</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Display */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 scrollbar-hide">
              {messages.map((msg, idx) => (
                <div 
                  key={idx}
                  className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}
                >
                  <div className={`h-8 w-8 rounded-full flex justify-center items-center shrink-0 border border-white/10 ${
                    msg.role === 'user' ? 'bg-purple-600' : 'bg-white/5'
                  }`}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-purple-500 text-white rounded-tr-none' 
                      : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {/* Loader */}
              {loading && (
                <div className="flex gap-2 self-start max-w-[80%]">
                  <div className="h-8 w-8 rounded-full bg-white/5 flex justify-center items-center shrink-0 border border-white/10">
                    <Bot size={14} />
                  </div>
                  <div className="p-3 bg-white/10 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-purple-400" />
                    <span className="text-xs text-gray-400">Typing...</span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions list */}
            {messages.length === 1 && !loading && (
              <div className="p-3 bg-white/5 border-t border-white/5 flex flex-col gap-2 shrink-0">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-extrabold px-1">Suggestions:</span>
                <div className="flex flex-wrap gap-1.5">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(suggestion)}
                      className="text-xs font-semibold bg-white/10 hover:bg-white/20 text-gray-200 border border-white/10 hover:border-white/25 px-2.5 py-1 rounded-full text-left transition-all active:scale-95 cursor-pointer"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <form 
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage(input)
              }}
              className="p-3 bg-white/5 border-t border-white/10 flex gap-2"
            >
              <input
                type="text"
                placeholder="Ask about Arpit's profile..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 hover:border-white/20 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="h-9 w-9 rounded-full bg-purple-500 hover:bg-purple-600 disabled:bg-gray-700 disabled:text-gray-400 flex justify-center items-center text-white shrink-0 active:scale-95 transition-all cursor-pointer"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Chatbot
