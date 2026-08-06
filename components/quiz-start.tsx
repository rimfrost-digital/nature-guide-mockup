"use client"

import Image from "next/image"
import { Clock, ChevronRight } from "lucide-react"
import type { Quiz } from "@/lib/quiz-data"

interface QuizStartProps {
  onStart: (quizId: "easy" | "challenge") => void
  quizzes: Quiz[]
}

const CARD_IMAGES: Record<"easy" | "challenge", { src: string; alt: string }> = {
  easy: { src: "/images/hero-forest-moose.png", alt: "Älg i nordisk skog" },
  challenge: { src: "/images/archive-hero-lake.png", alt: "Dimhöljd sjö i Hälsingland" },
}

export function QuizStart({ onStart, quizzes }: QuizStartProps) {
  const easy = quizzes.find((q) => q.id === "easy")!
  const challenge = quizzes.find((q) => q.id === "challenge")!

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      {/* Hero text */}
      <div className="mb-12 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A6B54]">
          Testa dina kunskaper
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-balance text-[#2f4437] sm:text-5xl">
          Hur bra koll har du på naturen?
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-[#2f4437]/70">
          Välj nivå och testa vad du kan om djuren, växterna, svamparna och livet längs Kustvägen.
        </p>
      </div>

      {/* Quiz level cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {([easy, challenge] as Quiz[]).map((quiz) => {
          const img = CARD_IMAGES[quiz.id]
          return (
            <div
              key={quiz.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#2f4437]/10 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Image strip */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                {/* Subtle gradient at bottom for text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/60 to-transparent" />
                {/* Question count badge */}
                <span className="absolute left-4 top-4 rounded-full border border-[#2f4437]/20 bg-[#F4F1E8]/90 px-3 py-1 text-xs font-semibold tracking-wide text-[#2f4437] backdrop-blur-sm">
                  {quiz.questionCount} frågor
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-[#2f4437]">{quiz.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#2f4437]/70">{quiz.description}</p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#5A6B54]">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{quiz.estimatedTime}</span>
                </div>

                <div className="mt-auto">
                  <button
                    onClick={() => onStart(quiz.id)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2f4437] px-6 py-3 text-sm font-medium tracking-wide text-[#F4F1E8] transition-colors hover:bg-[#253829] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f4437] focus-visible:ring-offset-2"
                  >
                    {quiz.id === "easy" ? "Starta enkelt quiz" : "Starta naturutmaningen"}
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Discrete info row */}
      <p className="mt-8 text-center text-sm text-[#2f4437]/50">
        En fråga i taget · Direkt återkoppling · Ingen inloggning behövs
      </p>

      <p className="mt-4 text-center text-xs text-[#2f4437]/40">
        Frågorna bygger på material från Kustvägen Naturguide.
      </p>
    </section>
  )
}
