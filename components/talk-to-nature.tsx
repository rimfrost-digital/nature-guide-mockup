"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Send } from "lucide-react"

const SUGGESTED = [
  "Hur mycket väger du?",
  "Kan du klättra i träd?",
  "Vad äter du?",
  "Hur snabbt springer du?",
  "Var bor du på vintern?",
]

function getText(message: { parts?: Array<{ type: string; text?: string }> }) {
  return (
    message.parts
      ?.filter((p) => p.type === "text")
      .map((p) => p.text ?? "")
      .join("") || ""
  )
}

export function TalkToNature() {
  const [input, setInput] = useState("")
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/prata-med-naturen" }),
  })
  const scrollRef = useRef<HTMLDivElement>(null)
  const isBusy = status === "submitted" || status === "streaming"

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, status])

  function ask(text: string) {
    if (!text.trim() || isBusy) return
    sendMessage({ text })
    setInput("")
  }

  return (
    <section className="bg-[#F4F1E8]">
      <div className="mx-auto max-w-6xl px-5 pb-14 sm:px-8">
        <div className="rounded-3xl bg-[#2f4437] p-6 sm:p-10">
          {/* Header */}
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B89452]">
            <span aria-hidden="true">🐾</span> Prata med naturen
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#F4F1E8] sm:text-5xl">
            Fråga lodjuret
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-[#F4F1E8]/80">
            Undrar du något speciellt? Ställ en fråga direkt till mig och lär dig mer om hur jag lever här
            längs Kustvägen.
          </p>
          <p className="mt-2 text-sm italic text-[#B89452]">
            En lekfull guide för barn &ndash; svaren skapas av en digital lodjurskompis.
          </p>

          {/* Chat window */}
          <div className="mt-6 overflow-hidden rounded-2xl bg-[#F4F1E8] shadow-inner">
            <div
              ref={scrollRef}
              className="flex max-h-96 min-h-[16rem] flex-col gap-4 overflow-y-auto p-5"
            >
              {/* Welcome message */}
              <div className="flex items-end gap-3">
                <Image
                  src="/images/lynx-face.png"
                  alt="Lodjurets ansikte"
                  width={40}
                  height={40}
                  className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                />
                <div className="relative max-w-[80%] rounded-2xl rounded-bl-sm bg-[#E8E5DA] px-4 py-3 text-[#1d2521]">
                  Hej! Jag är lodjuret. Vad vill du veta?
                </div>
              </div>

              {/* Conversation */}
              {messages.map((message) => {
                const text = getText(message)
                if (!text) return null
                if (message.role === "user") {
                  return (
                    <div key={message.id} className="flex justify-end">
                      <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-[#2f4437] px-4 py-3 text-[#F4F1E8]">
                        {text}
                      </div>
                    </div>
                  )
                }
                return (
                  <div key={message.id} className="flex items-end gap-3">
                    <Image
                      src="/images/lynx-face.png"
                      alt="Lodjurets ansikte"
                      width={40}
                      height={40}
                      className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                    />
                    <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-[#E8E5DA] px-4 py-3 text-[#1d2521]">
                      {text}
                    </div>
                  </div>
                )
              })}

              {/* Typing indicator */}
              {status === "submitted" && (
                <div className="flex items-end gap-3">
                  <Image
                    src="/images/lynx-face.png"
                    alt="Lodjurets ansikte"
                    width={40}
                    height={40}
                    className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  />
                  <div className="flex gap-1 rounded-2xl rounded-bl-sm bg-[#E8E5DA] px-4 py-4">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-[#5A6B54] [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-[#5A6B54] [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-[#5A6B54]" />
                  </div>
                </div>
              )}

              {/* Suggested questions */}
              <div className="mt-1 flex flex-wrap gap-2">
                {SUGGESTED.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => ask(q)}
                    disabled={isBusy}
                    className="rounded-full border border-[#5A6B54] px-3 py-1.5 text-sm text-[#2f4437] transition-colors hover:bg-[#5A6B54] hover:text-[#F4F1E8] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                ask(input)
              }}
              className="flex items-center gap-2 border-t border-[#5A6B54]/30 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Skriv din fråga här..."
                aria-label="Skriv din fråga till lodjuret"
                className="flex-1 rounded-full border border-[#5A6B54] bg-[#F4F1E8] px-4 py-2.5 text-[#1d2521] outline-none placeholder:text-[#5A6B54]/70 focus:border-[#B89452]"
              />
              <button
                type="submit"
                disabled={isBusy || !input.trim()}
                aria-label="Skicka fråga"
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#B89452] text-[#1d2521] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send className="h-5 w-5" strokeWidth={2} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
