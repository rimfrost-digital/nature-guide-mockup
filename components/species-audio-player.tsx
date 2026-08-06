"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause } from "lucide-react"

function formatTime(seconds: number) {
  if (!isFinite(seconds)) return "0:00"
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

interface SpeciesAudioPlayerProps {
  audioTitle?: string
  audioSrc?: string
}

export function SpeciesAudioPlayer({
  audioTitle = "Lyssna på guiden",
  audioSrc,
}: SpeciesAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [duration, setDuration] = useState(0)

  // Sync duration once metadata loads
  useEffect(() => {
    const el = audioRef.current
    if (!el) return
    const onLoaded = () => setDuration(el.duration)
    el.addEventListener("loadedmetadata", onLoaded)
    if (el.readyState >= 1) setDuration(el.duration)
    return () => el.removeEventListener("loadedmetadata", onLoaded)
  }, [audioSrc])

  // Sync elapsed time
  useEffect(() => {
    const el = audioRef.current
    if (!el) return
    const onTime = () => setElapsed(el.currentTime)
    const onEnded = () => { setPlaying(false); setElapsed(0) }
    el.addEventListener("timeupdate", onTime)
    el.addEventListener("ended", onEnded)
    return () => {
      el.removeEventListener("timeupdate", onTime)
      el.removeEventListener("ended", onEnded)
    }
  }, [])

  function toggle() {
    const el = audioRef.current
    if (!el || !audioSrc) return
    if (playing) {
      el.pause()
    } else {
      el.play()
    }
    setPlaying((p) => !p)
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const el = audioRef.current
    if (!el || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    el.currentTime = ratio * duration
  }

  const progress = duration > 0 ? (elapsed / duration) * 100 : 0
  const hasAudio = !!audioSrc

  return (
    <div className="flex w-full items-center gap-5 rounded-2xl bg-[#2f4437]/5 px-5 py-4 sm:px-6">
      {/* Hidden real audio element */}
      {hasAudio && (
        <audio ref={audioRef} src={audioSrc} preload="metadata" />
      )}

      <button
        type="button"
        onClick={toggle}
        disabled={!hasAudio}
        aria-label={playing ? "Pausa guiden" : "Spela upp guiden"}
        className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#2f4437] text-[#F4F1E8] transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
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
            {formatTime(elapsed)} / {duration > 0 ? formatTime(duration) : "--:--"}
          </span>
        </div>

        {/* Seekable progress bar */}
        <div className="flex items-center gap-3">
          <div
            role="progressbar"
            aria-valuenow={Math.round(elapsed)}
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
            onClick={hasAudio ? seek : undefined}
            className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-[#5A6B54]/25 cursor-pointer"
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-[#B89452] transition-[width] duration-300 ease-linear"
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
