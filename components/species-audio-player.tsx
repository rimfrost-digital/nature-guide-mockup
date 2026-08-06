"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause } from "lucide-react"

const TOTAL_SECONDS = 105 // 1:45

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export function SpeciesAudioPlayer({ audioTitle = "Lyssna på guiden" }: { audioTitle?: string }) {
  const [playing, setPlaying] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => {
          if (prev >= TOTAL_SECONDS) {
            setPlaying(false)
            return TOTAL_SECONDS
          }
          return prev + 1
        })
      }, 1000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [playing])

  const progress = (elapsed / TOTAL_SECONDS) * 100

  function toggle() {
    if (elapsed >= TOTAL_SECONDS) setElapsed(0)
    setPlaying((p) => !p)
  }

  return (
    <div className="flex w-full items-center gap-5 rounded-2xl bg-[#2f4437]/5 px-5 py-4 sm:px-6">
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pausa guiden" : "Spela upp guiden"}
        className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#2f4437] text-[#F4F1E8] transition-transform hover:scale-105"
      >
        {playing ? (
          <Pause className="h-6 w-6" fill="currentColor" />
        ) : (
          <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
        )}
      </button>

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <span className="font-serif text-lg font-medium text-[#2f4437] sm:text-xl">
            {audioTitle}
          </span>
          <span className="font-mono text-xs text-[#5A6B54] tabular-nums sm:text-sm">
            {formatTime(elapsed)} / 1:45
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Progress bar */}
          <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-[#5A6B54]/25">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-[#B89452] transition-[width] duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Soundwave animation */}
          <div className="flex h-5 items-end gap-0.5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="w-0.5 rounded-full bg-[#B89452]"
                style={{
                  height: playing ? undefined : "30%",
                  animation: playing
                    ? `soundwave 0.9s ease-in-out ${i * 0.12}s infinite`
                    : undefined,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
