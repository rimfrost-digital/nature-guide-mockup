"use client"

import Link from "next/link"
import { RotateCcw, ChevronRight } from "lucide-react"
import type { Quiz, ResultText } from "@/lib/quiz-data"

interface QuizResultProps {
  quiz: Quiz
  otherQuiz: Quiz
  score: number
  resultText: ResultText
  onRestart: () => void
  onSwitchQuiz: (id: "easy" | "challenge") => void
}

export function QuizResult({
  quiz,
  otherQuiz,
  score,
  resultText,
  onRestart,
  onSwitchQuiz,
}: QuizResultProps) {
  const total = quiz.questions.length
  const pct = Math.round((score / total) * 100)

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
      <div className="rounded-2xl border border-[#2f4437]/10 bg-white p-8 shadow-sm sm:p-12">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A6B54]">
          Quizet är klart
        </p>

        <h2 className="mt-2 font-serif text-3xl font-semibold text-[#2f4437] sm:text-4xl">
          {quiz.title}
        </h2>

        {/* Score display */}
        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-10">
          {/* Arc indicator */}
          <div className="relative shrink-0" aria-hidden="true">
            <svg viewBox="0 0 120 120" className="h-28 w-28 -rotate-90">
              {/* Background track */}
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#2f4437"
                strokeOpacity="0.1"
                strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 52}`}
                strokeLinecap="round"
              />
              {/* Progress arc */}
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#5A6B54"
                strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 52}`}
                strokeDashoffset={`${2 * Math.PI * 52 * (1 - pct / 100)}`}
                strokeLinecap="round"
                className="transition-all duration-700 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-serif text-2xl font-semibold text-[#2f4437]">{score}</span>
              <span className="text-xs text-[#2f4437]/50">av {total}</span>
            </div>
          </div>

          {/* Text result */}
          <div>
            <p className="font-serif text-2xl font-semibold text-[#2f4437]">
              {score} av {total} rätt
            </p>
            <p className="mt-1 text-sm font-semibold text-[#5A6B54]">{resultText.title}</p>
            <p className="mt-2 max-w-sm text-pretty text-sm leading-relaxed text-[#2f4437]/70">
              {resultText.text}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            onClick={onRestart}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2f4437] px-6 py-3 text-sm font-medium tracking-wide text-[#F4F1E8] transition-colors hover:bg-[#253829] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f4437] focus-visible:ring-offset-2"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Gör quizet igen
          </button>

          <button
            onClick={() => onSwitchQuiz(otherQuiz.id)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#2f4437]/20 bg-transparent px-6 py-3 text-sm font-medium tracking-wide text-[#2f4437] transition-colors hover:bg-[#2f4437]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f4437] focus-visible:ring-offset-2"
          >
            {quiz.id === "easy" ? "Testa Naturutmaningen" : "Testa Lilla naturquizet"}
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6">
          <Link
            href="/quiz"
            className="text-sm text-[#5A6B54] underline-offset-4 transition-colors hover:text-[#2f4437] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f4437] focus-visible:ring-offset-2 rounded"
          >
            Tillbaka till quiz
          </Link>
        </div>
      </div>
    </section>
  )
}
