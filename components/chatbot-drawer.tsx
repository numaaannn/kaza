"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Send, X, Sparkles, RotateCcw, User, AlertCircle } from "lucide-react"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function ChatbotDrawer() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi there! Welcome to **Numaans Silver Shop** AI assistant. ✨\n\nI can help you browse our certified 925 Sterling Silver collection, look up shipping details, find your ring size, or guide you through creating custom-engraved name jewelry. How can I help you today?",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Set mounted on client load
  useEffect(() => {
    setMounted(true)
  }, [])

  // Scroll to bottom on new messages
  useEffect(() => {
    if (isOpen && mounted) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isLoading, isOpen, mounted])

  if (!mounted) return null

  const handleSend = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)
    setError(null)

    try {
      // Map state messages to the format the API expects
      const payloadMessages = [...messages, userMessage].map((msg) => ({
        role: msg.role,
        content: msg.content,
      }))

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: payloadMessages }),
      })

      let data
      try {
        data = await response.json()
      } catch {
        throw new Error("Failed to parse response from server")
      }

      if (!response.ok) {
        let errorMsg = data?.details?.error?.message || data?.error || "Failed to get response from assistant"
        if (data?.availableModels && data.availableModels.length > 0) {
          errorMsg += "\n\nAvailable models: " + data.availableModels.map((m: string) => m.replace("models/", "")).join(", ")
        }
        throw new Error(errorMsg)
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.response,
        },
      ])
    } catch (err: any) {
      console.error(err)
      setError("Unable to reach assistant. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    if (window.confirm("Are you sure you want to clear this conversation?")) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: "Hi there! Welcome to **Numaans Silver Shop** AI assistant. ✨\n\nI can help you browse our certified 925 Sterling Silver collection, look up shipping details, find your ring size, or guide you through creating custom-engraved name jewelry. How can I help you today?",
        },
      ])
      setError(null)
    }
  }

  const suggestions = [
    { label: "💍 Ring Size Guide", prompt: "How do I find my ring size?" },
    { label: "✨ Custom Jewelry", prompt: "How can I order custom jewelry like engraved name rings?" },
    { label: "📦 Shipping Info", prompt: "What are your shipping rates and delivery times?" },
    { label: "🔄 Return Policy", prompt: "What is your return and exchange policy?" },
  ]

  // Parse custom bold markdown formatting in code
  const renderMessageContent = (content: string) => {
    return content.split("\n").map((line, idx) => {
      const boldRegex = /\*\*(.*?)\*\*/g
      const parts = []
      let lastIndex = 0
      let match

      while ((match = boldRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index))
        }
        parts.push(
          <strong key={match.index} className="font-semibold text-foreground dark:text-white">
            {match[1]}
          </strong>
        )
        lastIndex = boldRegex.lastIndex
      }

      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex))
      }

      return (
        <p key={idx} className={idx > 0 ? "mt-2" : ""}>
          {parts.length > 0 ? parts : line}
        </p>
      )
    })
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-4 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border border-border"
          aria-label="Open AI Assistant"
        >
          {/* Subtle animated border glow */}
          <span className="absolute inset-0 rounded-full bg-primary/20 blur-md group-hover:scale-110 transition-transform duration-300 -z-10 animate-pulse-soft" />

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                className="flex items-center gap-1"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageSquare className="w-6 h-6" />
                <Sparkles className="w-3.5 h-3.5 absolute -top-0.5 -right-0.5 text-accent animate-bounce" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed bottom-24 right-6 w-[400px] h-[600px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-8rem)] bg-card border border-border shadow-2xl rounded-2xl flex flex-col overflow-hidden z-50 sm:w-[400px] sm:h-[600px] w-full h-[calc(100vh-2rem)] bottom-4 right-4 sm:bottom-24 sm:right-6 sm:rounded-2xl rounded-xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-border bg-muted/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                    Numaans AI Assistant
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </h3>
                  <p className="text-[11px] text-muted-foreground">Certified 925 Sterling Silver Guide</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  title="Clear conversation"
                  aria-label="Clear conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors sm:hidden block"
                  aria-label="Close assistant"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                    }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border text-xs ${msg.role === "user"
                      ? "bg-secondary text-secondary-foreground border-border"
                      : "bg-primary/10 text-primary border-primary/25"
                      }`}
                  >
                    {msg.role === "user" ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                  </div>

                  <div
                    className={`p-3 rounded-2xl text-[13px] leading-relaxed shadow-sm ${msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-none"
                      : "bg-card border border-border rounded-tl-none text-card-foreground"
                      }`}
                  >
                    {renderMessageContent(msg.content)}
                  </div>
                </div>
              ))}

              {/* Suggestions for user when chat starts */}
              {messages.length === 1 && !isLoading && (
                <div className="pt-2 space-y-2 animate-fade-in">
                  <p className="text-[11px] text-muted-foreground font-medium px-1">Common Questions:</p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {suggestions.map((sug, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(sug.prompt)}
                        className="text-left text-xs p-2.5 rounded-lg border border-border bg-card hover:bg-muted/50 hover:border-primary/40 transition-all text-foreground/80 hover:text-foreground shadow-sm"
                      >
                        {sug.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Loading State */}
              {isLoading && (
                <div className="flex gap-3 max-w-[85%] mr-auto">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border bg-primary/10 text-primary border-primary/25">
                    <Sparkles className="w-4 h-4 animate-spin-slow" />
                  </div>
                  <div className="p-3 bg-card border border-border rounded-2xl rounded-tl-none flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-destructive/10 border border-destructive/20 text-destructive text-xs rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend(inputValue)
              }}
              className="p-3 border-t border-border bg-card"
            >
              <div className="relative flex items-center rounded-xl border border-border bg-background focus-within:ring-1 focus-within:ring-primary focus-within:border-primary transition-all">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  disabled={isLoading}
                  className="flex-1 min-w-0 bg-transparent py-2.5 pl-4 pr-12 text-sm text-foreground focus:outline-none disabled:opacity-55"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="absolute right-1.5 p-1.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
