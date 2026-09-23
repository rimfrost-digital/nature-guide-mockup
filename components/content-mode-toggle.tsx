import Link from "next/link"
import type { ContentMode } from "@/lib/content-tiers"

type Props = {
  mode: ContentMode
  liveHref: string
  stagingHref: string
  liveLabel: string
  stagingLabel: string
}

export function ContentModeToggle({ mode, liveHref, stagingHref, liveLabel, stagingLabel }: Props) {
  const pill = (active: boolean) =>
    `rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
      active ? "bg-[#2f4437] text-[#F4F1E8]" : "text-[#2f4437] hover:bg-[#2f4437]/10"
    }`

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-1 rounded-full border border-[#5A6B54]/40 bg-[#F4F1E8]/95 p-1 shadow-lg backdrop-blur">
      <Link
        href={liveHref}
        className={pill(mode === "live")}
        aria-current={mode === "live" ? "page" : undefined}
      >
        {liveLabel}
      </Link>
      <Link
        href={stagingHref}
        className={pill(mode === "staging")}
        aria-current={mode === "staging" ? "page" : undefined}
      >
        {stagingLabel}
      </Link>
    </div>
  )
}
