"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Check, X, ChevronRight, ArrowRight } from "lucide-react"
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

  // Scroll to feedback on small screens after answering (respects prefers-reduced-motion)
  useEffect(() => {
    if (!answerIsLocked || !feedbackRef.current) return
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mediaQuery.matches) return
    feedbackRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }, [answerIsLocked])

  const progressPct = ((currentIndex + 1) / total) * 100

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-10 sm:py-16">
      {/* Back link */}
      <button
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-[#5A6B54] transition-colors hover:text-[#2f4437] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f4437] focus-visible:ring-offset-2 rounded"
        aria-label="Tillbaka till quiz"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
            clipRule="evenodd"
          />
        </svg>
        Tillbaka till quiz
      </button>

      {/* Progress header */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-serif text-xl font-semibold text-[#2f4437]">{quiz.title}</span>
          <span className="text-sm text-[#2f4437]/60">
            Fråga {currentIndex + 1} av {total}
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#2f4437]/10" role="progressbar" aria-valuenow={currentIndex + 1} aria-valuemin={1} aria-valuemax={total} aria-label={`Fråga ${currentIndex + 1} av ${total}`}>
          <div
            className="h-full rounded-full bg-[#5A6B54] transition-all duration-300 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="rounded-2xl border border-[#2f4437]/10 bg-white shadow-sm">
        {/* Question image (text questions with image) */}
        {question.type === "text" && (question as TextQuestion).image && (
          <div className="relative h-56 w-full overflow-hidden rounded-t-2xl sm:h-72">
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
          {/* Category */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5A6B54]">
            {question.category}
          </p>

          {/* Question text */}
          <h2 className="font-serif text-2xl font-semibold text-balance text-[#2f4437] sm:text-3xl">
            {question.question}
          </h2>

          {/* Answer options */}
          <div className="mt-8">
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

          {/* Feedback */}
          {answerIsLocked && (
            <div
              ref={feedbackRef}
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className={cn(
                "mt-6 rounded-xl border p-5 transition-all duration-200",
                isCorrect
                  ? "border-[#5A6B54]/30 bg-[#5A6B54]/8"
                  : "border-[#C0392B]/20 bg-[#C0392B]/5",
              )}
            >
              <div className="flex items-start gap-3">
                <span
                  className={cn(
                    "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                    isCorrect ? "bg-[#5A6B54] text-white" : "bg-[#C0392B]/15 text-[#C0392B]",
                  )}
                  aria-hidden="true"
                >
                  {isCorrect ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                </span>
                <div>
                  <p
                    className={cn(
                      "text-sm font-semibold",
                      isCorrect ? "text-[#2f4437]" : "text-[#C0392B]",
                    )}
                  >
                    {isCorrect ? "Rätt svar!" : "Inte riktigt"}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#2f4437]/80">
                    {question.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Next button */}
          {answerIsLocked && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={onNext}
                className="inline-flex items-center gap-2 rounded-xl bg-[#2f4437] px-6 py-3 text-sm font-medium tracking-wide text-[#F4F1E8] transition-colors hover:bg-[#253829] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f4437] focus-visible:ring-offset-2"
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
                "min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f4437] focus-visible:ring-offset-2",
                !answerIsLocked && "hover:border-[#5A6B54] hover:bg-[#5A6B54]/5 cursor-pointer",
                answerIsLocked && "cursor-default",
                // base
                !answerIsLocked && !isSelected && "border-[#2f4437]/15 bg-white text-[#2f4437]",
                // selected before lock
                !answerIsLocked && isSelected && "border-[#5A6B54] bg-[#5A6B54]/8 text-[#2f4437]",
                // correct after lock
                showCorrect && "border-[#5A6B54] bg-[#5A6B54]/10 text-[#2f4437]",
                // wrong after lock
                isWrong && "border-[#C0392B]/40 bg-[#C0392B]/5 text-[#C0392B]",
                // neutral unselected after lock
                answerIsLocked && !isSelected && !isCorrect && "border-[#2f4437]/10 bg-[#F4F1E8]/60 text-[#2f4437]/50",
              )}
            >
              {/* Letter badge */}
              <span
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors",
                  !answerIsLocked && !isSelected && "border-[#2f4437]/20 bg-transparent text-[#2f4437]/60",
                  !answerIsLocked && isSelected && "border-[#5A6B54] bg-[#5A6B54] text-white",
                  showCorrect && "border-[#5A6B54] bg-[#5A6B54] text-white",
                  isWrong && "border-[#C0392B] bg-[#C0392B] text-white",
                  answerIsLocked && !isSelected && !isCorrect && "border-[#2f4437]/15 bg-transparent text-[#2f4437]/40",
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

              {/* Correct indicator for non-selected correct answer */}
              {answerIsLocked && isCorrect && !isSelected && (
                <span className="shrink-0 text-xs font-semibold text-[#5A6B54]">Rätt svar</span>
              )}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

// ---------------------------------------------------------------------------
// Image answer options (tracks / animal question)
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
                "min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f4437] focus-visible:ring-offset-2",
                !answerIsLocked && "hover:border-[#5A6B54] cursor-pointer",
                answerIsLocked && "cursor-default",
                !answerIsLocked && !isSelected && "border-[#2f4437]/15 bg-white",
                !answerIsLocked && isSelected && "border-[#5A6B54] bg-[#5A6B54]/8",
                showCorrect && "border-[#5A6B54] bg-[#5A6B54]/10",
                isWrong && "border-[#C0392B]/40 bg-[#C0392B]/5",
                answerIsLocked && !isSelected && !isCorrect && "border-[#2f4437]/10 bg-[#F4F1E8]/60 opacity-60",
              )}
            >
              {/* Image area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e8e4d6]">
                {hasImage ? (
                  <Image
                    src={option.image}
                    alt={option.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  /* Placeholder when image not yet available */
                  <div className="flex h-full w-full items-center justify-center">
                    <p className="px-4 text-center text-xs text-[#2f4437]/40">
                      {/* TODO: image not yet available */}
                      Bild saknas
                    </p>
                  </div>
                )}
                {/* Correct/wrong overlay icon */}
                {answerIsLocked && (showCorrect || isWrong) && (
                  <div
                    className={cn(
                      "absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full",
                      showCorrect ? "bg-[#5A6B54]" : "bg-[#C0392B]",
                    )}
                    aria-hidden="true"
                  >
                    {showCorrect ? (
                      <Check className="h-3.5 w-3.5 text-white" />
                    ) : (
                      <X className="h-3.5 w-3.5 text-white" />
                    )}
                  </div>
                )}
              </div>

              {/* Label */}
              <div className="flex items-center justify-between px-4 py-3">
                <span
                  className={cn(
                    "text-sm font-semibold",
                    showCorrect && "text-[#2f4437]",
                    isWrong && "text-[#C0392B]",
                    !answerIsLocked && "text-[#2f4437]",
                    answerIsLocked && !isSelected && !isCorrect && "text-[#2f4437]/50",
                  )}
                >
                  {/* Before answer: show only label. After: reveal animal name */}
                  {answerIsLocked ? option.revealLabel : option.label}
                </span>
                {answerIsLocked && showCorrect && !isSelected && (
                  <span className="text-xs font-semibold text-[#5A6B54]">Rätt svar</span>
                )}
              </div>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
