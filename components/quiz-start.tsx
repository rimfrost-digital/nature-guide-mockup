"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import type { Quiz } from "@/lib/quiz-data"
import type { Lang } from "@/lib/species-pages-data"

interface QuizStartProps {
  onStart: (quizId: "easy" | "challenge") => void
  quizzes: Quiz[]
  lang?: Lang
}

const CARD_CONFIG: Record<
  "easy" | "challenge",
  { src: string; alt: string; bg: string; buttonBg: string; buttonHover: string }
> = {
  easy: {
    src: "/images/quiz-easy-thumb.png",
    alt: "2D-illustration av älg och räv i sommaräng",
    bg: "bg-[#3B6E8F]",
    buttonBg: "bg-[#F4F1E8]",
    buttonHover: "hover:bg-[#e8e5d8]",
  },
  challenge: {
    src: "/images/quiz-challenge-thumb.png",
    alt: "2D-illustration av lodjur framför barrskog",
    bg: "bg-[#C46A2B]",
    buttonBg: "bg-[#F4F1E8]",
    buttonHover: "hover:bg-[#e8e5d8]",
  },
}

const LABELS: Record<Lang, { startEasy: string; startChallenge: string; questions: string; intro: string; heading: string; footer: string }> = {
  sv: {
    heading: "Hur bra koll har du på naturen?",
    intro: "Testa dina kunskaper",
    startEasy: "Starta enkelt quiz",
    startChallenge: "Starta avancerat quiz",
    questions: "frågor",
    footer: "En fråga i taget · Direkt återkoppling · Ingen inloggning behövs",
  },
  en: {
    heading: "How well do you know nature?",
    intro: "Test your knowledge",
    startEasy: "Start easy quiz",
    startChallenge: "Start advanced quiz",
    questions: "questions",
    footer: "One question at a time · Instant feedback · No login needed",
  },
  de: {
    heading: "Wie gut kennst du die Natur?",
    intro: "Teste dein Wissen",
    startEasy: "Einfaches Quiz starten",
    startChallenge: "Erweitertes Quiz starten",
    questions: "Fragen",
    footer: "Eine Frage auf einmal · Sofortiges Feedback · Keine Anmeldung nötig",
  },
}

export function QuizStart({ onStart, quizzes, lang = "sv" }: QuizStartProps) {
  const easy = quizzes.find((q) => q.id === "easy")!
  const challenge = quizzes.find((q) => q.id === "challenge")!
  const t = LABELS[lang]

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      {/* Hero text */}
      <div className="mb-12 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A6B54]">
          {t.intro}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-balance text-[#2f4437] sm:text-5xl">
          {t.heading}
        </h1>
      </div>

      {/* Quiz level cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {([easy, challenge] as Quiz[]).map((quiz) => {
          const cfg = CARD_CONFIG[quiz.id]
          const buttonLabel = quiz.id === "easy" ? t.startEasy : t.startChallenge

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
                {/* Question count — bare, no background */}
                <span className="absolute right-4 top-4 text-xl font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                  {quiz.questionCount} {t.questions}
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h2 className="font-serif text-3xl font-semibold text-[#F4F1E8] sm:text-4xl">
                  {quiz.title}
                </h2>

                <div className="mt-auto pt-2">
                  <button
                    onClick={() => onStart(quiz.id)}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl ${cfg.buttonBg} px-6 py-3 text-sm font-semibold tracking-wide text-[#2f4437] transition-colors ${cfg.buttonHover} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4F1E8] focus-visible:ring-offset-2`}
                  >
                    {buttonLabel}
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
        {t.footer}
      </p>
    </section>
  )
}
