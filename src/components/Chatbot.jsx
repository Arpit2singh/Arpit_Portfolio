import React, { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

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
    if (isOpen) scrollToBottom()
  }, [messages, isOpen])

  const handleSendMessage = async (text) => {
    if (!text.trim()) return

    const userMessage = { role: 'user', content: text }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const history = messages.slice(1).map(msg => ({
        role: msg.role === 'model' ? 'model' : 'user',
        content: msg.content
      }))

      const response = await fetch(`${API_BASE}/portfolio/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history })
      })

      if (!response.ok) throw new Error("Chat service failed.")
      const data = await response.json()
      const reply = data.data?.reply || "Sorry, I ran into an error."
      setMessages(prev => [...prev, { role: 'model', content: reply }])
    } catch (err) {
      console.error(err)
      setMessages(prev => [...prev, {
        role: 'model',
        content: "I'm having trouble connecting right now. Contact Arpit at arpitlibono57@gmail.com!"
      }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-14 w-14 rounded-full bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white shadow-2xl hover:shadow-purple-500/30 border border-white/20"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            className="absolute bottom-16 right-0 w-[350px] sm:w-[390px] h-[520px] rounded-2xl bg-black/90 border border-white/15 shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden text-white"
          >
            {/* Header */}
            <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <Avatar className="h-8 w-8 border border-purple-400/30 bg-purple-500/20">
                  <AvatarFallback className="bg-purple-500/20 text-purple-300 text-xs">
                    <Bot size={14} />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-extrabold text-sm leading-tight text-white">ArpitBot AI</h3>
                  <span className="text-[10px] text-muted-foreground">Recruiter Assistant · Online</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-7 w-7 text-muted-foreground hover:text-white hover:bg-white/10 rounded-full"
              >
                <X size={15} />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 px-4 py-3">
              <div className="flex flex-col gap-3">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-2.5 max-w-[88%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}
                  >
                    <Avatar className={`h-7 w-7 shrink-0 border border-white/10 ${msg.role === 'user' ? 'bg-purple-600' : 'bg-white/5'}`}>
                      <AvatarFallback className={`text-xs ${msg.role === 'user' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-300'}`}>
                        {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                      </AvatarFallback>
                    </Avatar>

                    <div className={`px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-purple-500 text-white rounded-tr-none'
                        : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}

                {/* Typing loader */}
                {loading && (
                  <div className="flex gap-2.5 self-start max-w-[80%]">
                    <Avatar className="h-7 w-7 shrink-0 border border-white/10 bg-white/5">
                      <AvatarFallback className="bg-white/5 text-gray-300 text-xs">
                        <Bot size={12} />
                      </AvatarFallback>
                    </Avatar>
                    <div className="px-3 py-2.5 bg-white/10 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-2">
                      <Loader2 size={14} className="animate-spin text-purple-400" />
                      <span className="text-xs text-muted-foreground">Typing...</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Suggestions */}
            {messages.length === 1 && !loading && (
              <>
                <Separator className="bg-white/5" />
                <div className="px-4 py-2.5 bg-white/5 flex flex-col gap-2 shrink-0">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-extrabold">Quick questions:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {suggestions.map((s, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSendMessage(s)}
                        className="text-xs font-semibold bg-white/5 border-white/10 hover:bg-white/15 hover:border-white/20 text-gray-300 hover:text-white rounded-full px-3 py-1 h-auto"
                      >
                        {s}
                      </Button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Input */}
            <Separator className="bg-white/10" />
            <form
              onSubmit={(e) => { e.preventDefault(); handleSendMessage(input) }}
              className="p-3 bg-white/5 flex gap-2 shrink-0"
            >
              <Input
                type="text"
                placeholder="Ask about Arpit's profile..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                className="flex-1 bg-white/5 border-white/10 hover:border-white/20 focus:border-purple-500 text-white placeholder:text-muted-foreground rounded-full px-4 text-sm h-9"
              />
              <Button
                type="submit"
                size="icon"
                disabled={loading || !input.trim()}
                className="h-9 w-9 rounded-full bg-purple-500 hover:bg-purple-600 disabled:bg-white/10 disabled:text-muted-foreground shrink-0"
              >
                <Send size={15} />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Chatbot
