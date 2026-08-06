"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Check, X, ChevronRight, ArrowRight, ArrowLeft } from "lucide-react"
import type { Question, TextQuestion, ImageChoiceQuestion } from "@/lib/quiz-data"
import { cn } from "@/lib/utils"

interface QuizQuestionProps {
  quiz: { id: string; title: string; questions: Question[] }
  currentIndex: number
  selectedAnswer: number | null
  answerIsLocked: boolean
  onAnswer: (index: number) => void
  onNext: () => void
  onBack: () => void
}

export function QuizQuestion({
  quiz,
  currentIndex,
  selectedAnswer,
  answerIsLocked,
  onAnswer,
  onNext,
  onBack,
}: QuizQuestionProps) {
  const question = quiz.questions[currentIndex]
  const total = quiz.questions.length
  const isLast = currentIndex === total - 1
  const feedbackRef = useRef<HTMLDivElement>(null)
  const isCorrect = answerIsLocked && selectedAnswer === question.correctIndex

  useEffect(() => {
    if (!answerIsLocked || !feedbackRef.current) return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) return
    feedbackRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }, [answerIsLocked])

  const progressPct = ((currentIndex + 1) / total) * 100

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-8 sm:py-14">
      {/* Progress header */}
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between gap-4">
          {/* Back */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 rounded text-sm text-[#5A6B54] transition-colors hover:text-[#193C2C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193C2C] focus-visible:ring-offset-2"
            aria-label="Tillbaka till quiz"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Tillbaka</span>
          </button>

          <span className="font-serif text-base font-semibold text-[#193C2C]">{quiz.title}</span>

          <span className="text-sm tabular-nums text-[#2f4437]/50">
            {currentIndex + 1} / {total}
          </span>
        </div>

        {/* Colorful segmented progress bar */}
        <div
          className="h-2 w-full overflow-hidden rounded-full bg-[#193C2C]/10"
          role="progressbar"
          aria-valuenow={currentIndex + 1}
          aria-valuemin={1}
          aria-valuemax={total}
          aria-label={`Fråga ${currentIndex + 1} av ${total}`}
        >
          <div
            className="h-full rounded-full bg-[#2B6E4E] transition-all duration-500 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="overflow-hidden rounded-2xl border border-[#193C2C]/10 bg-white shadow-sm">
        {/* Optional question image */}
        {question.type === "text" && (question as TextQuestion).image && (
          <div className="relative h-52 w-full overflow-hidden sm:h-64">
            <Image
              src={(question as TextQuestion).image!}
              alt={(question as TextQuestion).imageAlt ?? ""}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        <div className="p-6 sm:p-8">
          {/* Category eyebrow */}
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#5A6B54]">
            {question.category}
          </p>

          {/* Question text */}
          <h2 className="font-serif text-2xl font-semibold text-balance text-[#193C2C] sm:text-3xl">
            {question.question}
          </h2>

          {/* Answer options */}
          <div className="mt-7">
            {question.type === "text" ? (
              <TextOptions
                question={question as TextQuestion}
                selectedAnswer={selectedAnswer}
                answerIsLocked={answerIsLocked}
                onAnswer={onAnswer}
              />
            ) : (
              <ImageOptions
                question={question as ImageChoiceQuestion}
                selectedAnswer={selectedAnswer}
                answerIsLocked={answerIsLocked}
                onAnswer={onAnswer}
              />
            )}
          </div>

          {/* Feedback banner */}
          {answerIsLocked && (
            <div
              ref={feedbackRef}
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className={cn(
                "mt-6 rounded-xl border p-4",
                isCorrect
                  ? "border-[#2B6E4E]/25 bg-[#E8F5EE]"
                  : "border-[#B8473A]/20 bg-[#FDF0EE]",
              )}
            >
              <div className="flex items-start gap-3">
                <span
                  className={cn(
                    "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white",
                    isCorrect ? "bg-[#2B6E4E]" : "bg-[#B8473A]",
                  )}
                  aria-hidden="true"
                >
                  {isCorrect ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                </span>
                <div>
                  <p className={cn("text-sm font-semibold", isCorrect ? "text-[#1A4A30]" : "text-[#8A2E23]")}>
                    {isCorrect ? "Rätt svar!" : "Inte riktigt"}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#2f4437]/80">
                    {question.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Next / finish button */}
          {answerIsLocked && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={onNext}
                className="inline-flex items-center gap-2 rounded-xl bg-[#193C2C] px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#102618] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193C2C] focus-visible:ring-offset-2"
              >
                {isLast ? "Se mitt resultat" : "Nästa fråga"}
                {isLast ? (
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Text answer options
// ---------------------------------------------------------------------------

interface TextOptionsProps {
  question: TextQuestion
  selectedAnswer: number | null
  answerIsLocked: boolean
  onAnswer: (i: number) => void
}

function TextOptions({ question, selectedAnswer, answerIsLocked, onAnswer }: TextOptionsProps) {
  return (
    <ul className="flex flex-col gap-3" role="list">
      {question.options.map((option, i) => {
        const isSelected = selectedAnswer === i
        const isCorrect = i === question.correctIndex
        const isWrong = answerIsLocked && isSelected && !isCorrect
        const showCorrect = answerIsLocked && isCorrect

        return (
          <li key={i}>
            <button
              onClick={() => !answerIsLocked && onAnswer(i)}
              disabled={answerIsLocked}
              aria-pressed={isSelected}
              className={cn(
                "group flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left text-sm font-medium transition-all duration-150",
                "min-h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193C2C] focus-visible:ring-offset-2",
                // idle
                !answerIsLocked && !isSelected &&
                  "border-[#193C2C]/12 bg-[#F2F7F4] text-[#193C2C] hover:border-[#2B6E4E]/50 hover:bg-[#E8F5EE] cursor-pointer",
                // selected pre-lock
                !answerIsLocked && isSelected &&
                  "border-[#2B6E4E] bg-[#E8F5EE] text-[#193C2C] cursor-pointer",
                // correct revealed
                showCorrect &&
                  "border-[#2B6E4E] bg-[#E8F5EE] text-[#193C2C] cursor-default",
                // wrong
                isWrong &&
                  "border-[#B8473A]/40 bg-[#FDF0EE] text-[#8A2E23] cursor-default",
                // dimmed unselected after lock
                answerIsLocked && !isSelected && !isCorrect &&
                  "border-[#193C2C]/8 bg-[#F7F9F8] text-[#193C2C]/40 cursor-default",
              )}
            >
              {/* Letter badge */}
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors",
                  !answerIsLocked && !isSelected &&
                    "border-[#193C2C]/20 bg-white text-[#193C2C]/60",
                  !answerIsLocked && isSelected &&
                    "border-[#2B6E4E] bg-[#2B6E4E] text-white",
                  showCorrect &&
                    "border-[#2B6E4E] bg-[#2B6E4E] text-white",
                  isWrong &&
                    "border-[#B8473A] bg-[#B8473A] text-white",
                  answerIsLocked && !isSelected && !isCorrect &&
                    "border-[#193C2C]/12 bg-transparent text-[#193C2C]/30",
                )}
                aria-hidden="true"
              >
                {answerIsLocked && showCorrect ? (
                  <Check className="h-3.5 w-3.5" />
                ) : answerIsLocked && isWrong ? (
                  <X className="h-3.5 w-3.5" />
                ) : (
                  String.fromCharCode(65 + i)
                )}
              </span>

              <span className="flex-1">{option}</span>

              {/* Correct label on non-selected correct answer */}
              {answerIsLocked && isCorrect && !isSelected && (
                <span className="shrink-0 text-xs font-semibold text-[#2B6E4E]">Rätt svar</span>
              )}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

// ---------------------------------------------------------------------------
// Image answer options
// ---------------------------------------------------------------------------

interface ImageOptionsProps {
  question: ImageChoiceQuestion
  selectedAnswer: number | null
  answerIsLocked: boolean
  onAnswer: (i: number) => void
}

function ImageOptions({ question, selectedAnswer, answerIsLocked, onAnswer }: ImageOptionsProps) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3" role="list">
      {question.options.map((option, i) => {
        const isSelected = selectedAnswer === i
        const isCorrect = i === question.correctIndex
        const isWrong = answerIsLocked && isSelected && !isCorrect
        const showCorrect = answerIsLocked && isCorrect
        const hasImage = Boolean(option.image)

        return (
          <li key={i}>
            <button
              onClick={() => !answerIsLocked && onAnswer(i)}
              disabled={answerIsLocked}
              aria-pressed={isSelected}
              className={cn(
                "group flex w-full flex-col overflow-hidden rounded-xl border transition-all duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193C2C] focus-visible:ring-offset-2",
                !answerIsLocked && !isSelected &&
                  "border-[#193C2C]/12 bg-white hover:border-[#2B6E4E]/50 cursor-pointer",
                !answerIsLocked && isSelected &&
                  "border-[#2B6E4E] bg-[#E8F5EE] cursor-pointer",
                showCorrect && "border-[#2B6E4E] bg-[#E8F5EE] cursor-default",
                isWrong && "border-[#B8473A]/40 bg-[#FDF0EE] cursor-default",
                answerIsLocked && !isSelected && !isCorrect &&
                  "border-[#193C2C]/8 bg-[#F7F9F8] opacity-55 cursor-default",
              )}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E8F0EB]">
                {hasImage ? (
                  <Image
                    src={option.image}
                    alt={option.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <p className="px-4 text-center text-xs text-[#2f4437]/40">Bild saknas</p>
                  </div>
                )}
                {answerIsLocked && (showCorrect || isWrong) && (
                  <div
                    className={cn(
                      "absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-white",
                      showCorrect ? "bg-[#2B6E4E]" : "bg-[#B8473A]",
                    )}
                    aria-hidden="true"
                  >
                    {showCorrect ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                  </div>
                )}
              </div>

              {/* Label */}
              <div className="flex items-center justify-between px-4 py-3">
                <span
                  className={cn(
                    "text-sm font-semibold",
                    showCorrect && "text-[#193C2C]",
                    isWrong && "text-[#8A2E23]",
                    !answerIsLocked && "text-[#193C2C]",
                    answerIsLocked && !isSelected && !isCorrect && "text-[#193C2C]/40",
                  )}
                >
                  {answerIsLocked ? option.revealLabel : option.label}
                </span>
                {answerIsLocked && isCorrect && !isSelected && (
                  <span className="text-xs font-semibold text-[#2B6E4E]">Rätt svar</span>
                )}
              </div>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
