import { Play } from "lucide-react"

type Props = {
  title: string
  note: string
  tone?: "light" | "dark"
}

/**
 * Staging-only stand-in for an audio module that has not been produced yet.
 * Mirrors the real player's layout so the final page structure can be previewed,
 * but is visibly marked STAGING / DEMO and cannot be played.
 */
export function StagingDemoPlayer({ title, note, tone = "light" }: Props) {
  const isDark = tone === "dark"

  return (
    <div
      className={`flex w-full items-center gap-5 rounded-2xl border-2 border-dashed px-5 py-4 sm:px-6 ${
        isDark ? "border-[#B89452]/60 bg-[#1d2521]/40" : "border-[#B89452]/70 bg-[#2f4437]/5"
      }`}
    >
      <button
        type="button"
        disabled
        aria-disabled="true"
        aria-label={`${title} – staging demo, inget ljud`}
        className={`flex h-14 w-14 flex-shrink-0 cursor-not-allowed items-center justify-center rounded-full opacity-40 ${
          isDark ? "bg-[#B89452] text-[#1d2521]" : "bg-[#2f4437] text-[#F4F1E8]"
        }`}
      >
        <Play className="ml-0.5 h-6 w-6" fill="currentColor" aria-hidden="true" />
      </button>

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded bg-[#B89452] px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-[#1d2521]">
              Staging / Demo
            </span>
            <span
              className={`font-serif text-lg font-medium sm:text-xl ${
                isDark ? "text-[#F4F1E8]" : "text-[#2f4437]"
              }`}
            >
              {title}
            </span>
          </div>
          <span
            className={`font-mono text-xs tabular-nums sm:text-sm ${
              isDark ? "text-[#F4F1E8]/60" : "text-[#5A6B54]"
            }`}
          >
            0:00 / --:--
          </span>
        </div>

        <div
          className={`h-1.5 w-full rounded-full ${isDark ? "bg-[#F4F1E8]/20" : "bg-[#5A6B54]/25"}`}
          aria-hidden="true"
        />

        <p className={`text-sm italic ${isDark ? "text-[#B89452]" : "text-[#8a6f3c]"}`}>{note}</p>
      </div>
    </div>
  )
}
