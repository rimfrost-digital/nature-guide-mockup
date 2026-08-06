"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import type { Quiz } from "@/lib/quiz-data"

interface QuizStartProps {
  onStart: (quizId: "easy" | "challenge") => void
  quizzes: Quiz[]
}

const CARD_CONFIG: Record<
  "easy" | "challenge",
  { src: string; alt: string; bg: string; pill: string; pillText: string; accent: string }
> = {
  easy: {
    src: "/images/quiz-easy-thumb.png",
    alt: "2D-illustration av älg och räv i sommaräng",
    bg: "bg-[#7A9E7E]",
    pill: "bg-[#2f4437] text-[#F4F1E8]",
    pillText: "Nybörjare",
    accent: "hover:bg-[#253829]",
  },
  challenge: {
    src: "/images/quiz-challenge-thumb.png",
    alt: "2D-illustration av lodjur framför mörk barrskog",
    bg: "bg-[#2f4437]",
    pill: "bg-[#F4F1E8] text-[#2f4437]",
    pillText: "Utmaning",
    accent: "hover:bg-[#3d5847]",
  },
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
          const cfg = CARD_CONFIG[quiz.id]
          return (
            <div
              key={quiz.id}
              className={`group flex flex-col overflow-hidden rounded-2xl ${cfg.bg} shadow-sm transition-shadow hover:shadow-lg`}
            >
              {/* Square illustrated thumbnail */}
              <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                <Image
                  src={cfg.src}
                  alt={cfg.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Level pill */}
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${cfg.pill}`}
                >
                  {cfg.pillText}
                </span>
                {/* Question count badge */}
                <span className="absolute right-4 top-4 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {quiz.questionCount} frågor
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-[#F4F1E8]">{quiz.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#F4F1E8]/70">{quiz.description}</p>
                </div>

                <div className="mt-auto pt-2">
                  <button
                    onClick={() => onStart(quiz.id)}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F4F1E8] px-6 py-3 text-sm font-medium tracking-wide text-[#2f4437] transition-colors ${cfg.accent} hover:bg-[#e8e5d8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4F1E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2f4437]`}
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
