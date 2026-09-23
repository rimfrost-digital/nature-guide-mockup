import type { LucideIcon } from "lucide-react"

type Props = {
  tierLabel: string
  title: string
  notProducedLabel: string
  description: string
  Icon: LucideIcon
}

/**
 * Staging-only placeholder for a module that exists in the architecture but has
 * not been produced for this species yet. Deliberately dimmed and clearly
 * labelled so missing production is obvious internally and upgrade potential is
 * visible to customers.
 */
export function ModulePlaceholder({ tierLabel, title, notProducedLabel, description, Icon }: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-dashed border-[#5A6B54]/50 bg-[#5A6B54]/5 p-6 sm:p-8">
      <div className="flex items-start gap-4 opacity-70">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#5A6B54]/40 bg-[#F4F1E8]">
          <Icon className="h-6 w-6 text-[#5A6B54]" strokeWidth={1.5} />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-[#B89452]/25 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a6f3c]">
              {tierLabel}
            </span>
            <span className="rounded-md border border-[#b4453a]/40 bg-[#b4453a]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b4453a]">
              {notProducedLabel}
            </span>
          </div>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-[#2f4437]">{title}</h3>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-[#5A6B54]">{description}</p>
        </div>
      </div>
    </div>
  )
}
