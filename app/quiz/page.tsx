"use client"

import { useCallback, useRef, useState } from "react"
import {
  quizzes,
  getEasyResultText,
  getChallengeResultText,
  type Quiz,
} from "@/lib/quiz-data"
import { QuizStart } from "@/components/quiz-start"
import { QuizQuestion } from "@/components/quiz-question"
import { QuizResult } from "@/components/quiz-result"

type View = "start" | "question" | "result"

export default function QuizPage() {
  const [view, setView] = useState<View>("start")
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answerIsLocked, setAnswerIsLocked] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const quizTopRef = useRef<HTMLDivElement>(null)

  const scrollToTop = useCallback(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mediaQuery.matches) {
      quizTopRef.current?.scrollIntoView()
    } else {
      quizTopRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  // Start a quiz by id — resets all state
  const handleStart = useCallback(
    (quizId: "easy" | "challenge") => {
      const quiz = quizzes.find((q) => q.id === quizId)!
      setSelectedQuiz(quiz)
      setCurrentQuestionIndex(0)
      setSelectedAnswer(null)
      setAnswerIsLocked(false)
      setScore(0)
      setQuizCompleted(false)
      setView("question")
      scrollToTop()
    },
    [scrollToTop],
  )

  // User selects an answer — lock it immediately to prevent double-scoring
  const handleAnswer = useCallback(
    (index: number) => {
      if (answerIsLocked || !selectedQuiz) return
      setSelectedAnswer(index)
      setAnswerIsLocked(true)
      if (index === selectedQuiz.questions[currentQuestionIndex].correctIndex) {
        setScore((s) => s + 1)
      }
    },
    [answerIsLocked, selectedQuiz, currentQuestionIndex],
  )

  // Advance to next question or show result
  const handleNext = useCallback(() => {
    if (!selectedQuiz) return
    const isLast = currentQuestionIndex === selectedQuiz.questions.length - 1
    if (isLast) {
      setQuizCompleted(true)
      setView("result")
      scrollToTop()
    } else {
      setCurrentQuestionIndex((i) => i + 1)
      setSelectedAnswer(null)
      setAnswerIsLocked(false)
      scrollToTop()
    }
  }, [selectedQuiz, currentQuestionIndex, scrollToTop])

  // Back to start screen
  const handleBack = useCallback(() => {
    setView("start")
    setSelectedQuiz(null)
    scrollToTop()
  }, [scrollToTop])

  // Restart the current quiz
  const handleRestart = useCallback(() => {
    if (!selectedQuiz) return
    handleStart(selectedQuiz.id)
  }, [selectedQuiz, handleStart])

  const otherQuiz =
    selectedQuiz ? quizzes.find((q) => q.id !== selectedQuiz.id)! : quizzes[1]

  const resultText = selectedQuiz
    ? selectedQuiz.id === "easy"
      ? getEasyResultText(score)
      : getChallengeResultText(score)
    : { title: "", text: "" }

  return (
    <main className="min-h-screen bg-[#F4F1E8]">
      {/* Scroll anchor at the very top of the quiz area */}
      <div ref={quizTopRef} aria-hidden="true" />

      {view === "start" && (
        <QuizStart onStart={handleStart} quizzes={quizzes} />
      )}

      {view === "question" && selectedQuiz && (
        <QuizQuestion
          quiz={selectedQuiz}
          currentIndex={currentQuestionIndex}
          selectedAnswer={selectedAnswer}
          answerIsLocked={answerIsLocked}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {view === "result" && selectedQuiz && (
        <QuizResult
          quiz={selectedQuiz}
          otherQuiz={otherQuiz}
          score={score}
          resultText={resultText}
          onRestart={handleRestart}
          onSwitchQuiz={handleStart}
        />
      )}
    </main>
  )
}
