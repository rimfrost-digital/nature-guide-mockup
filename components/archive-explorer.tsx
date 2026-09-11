"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Search, QrCode } from "lucide-react"
import {
  species as allSpecies,
  categoryFilters,
  type CategoryKey,
} from "@/lib/species-data"

export function ArchiveExplorer() {
  const [query, setQuery] = useState("")
  const [active, setActive] = useState<CategoryKey | "alla">("alla")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return allSpecies.filter((s) => {
      const matchesCategory = active === "alla" || s.category === active
      const matchesQuery =
        q === "" ||
        s.name.toLowerCase().includes(q) ||
        s.latin.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, active])

  return (
    <div className="bg-[#F4F1E8]">
      {/* Sticky search & filter bar */}
      <div className="sticky top-16 z-30 border-b border-[#5A6B54]/40 bg-[#F4F1E8]/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-5 md:px-8">
          {/* Search */}
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#5A6B54]"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Sök på svenskt eller latinskt namn..."
              aria-label="Sök art"
              className="w-full rounded-full border border-[#5A6B54]/40 bg-white py-3 pl-12 pr-4 font-sans text-[#2f4437] outline-none transition focus:border-[#2f4437] focus:ring-2 focus:ring-[#2f4437]/20"
            />
          </div>

          {/* Category pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {categoryFilters.map((c) => {
              const isActive = active === c.key
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setActive(c.key)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-1.5 font-sans text-sm transition ${
                    isActive
                      ? "border-[#2f4437] bg-[#2f4437] text-[#F4F1E8]"
                      : "border-[#5A6B54] bg-transparent text-[#5A6B54] hover:bg-[#5A6B54]/10"
                  }`}
                >
                  {c.label}
                </button>
              )
            })}
          </div>

          <p className="mt-3 font-sans text-sm text-[#5A6B54]">
            Visar {filtered.length} arter
          </p>
        </div>
      </div>

      {/* Master grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        {filtered.length === 0 ? (
          <p className="py-20 text-center font-serif text-2xl text-[#2f4437]">
            Inga arter matchade din sökning.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {filtered.map((s) => (
                <SpeciesCard key={s.slug} species={s} />
              ))}
            </div>

            {/* Informational banner */}
            <InfoBanner />
          </>
        )}

        {/* Load more */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="rounded-full bg-[#2f4437] px-10 py-4 font-sans text-base font-medium text-[#F4F1E8] transition hover:bg-[#2f4437]/90"
          >
            Ladda fler arter
          </button>
        </div>
      </div>
    </div>
  )
}

function SpeciesCard({
  species,
}: {
  species: (typeof allSpecies)[number]
}) {
  return (
    <a
      href={`/art?namn=${species.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-[#1d2521] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={species.image || "/placeholder.svg"}
          alt={`${species.name} (${species.latin})`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute left-3 top-3 rounded bg-[#B89452] px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-[#1d2521]">
          {species.badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-serif text-2xl leading-tight text-[#F4F1E8]">
          {species.name}
        </h3>
        <p className="font-sans text-sm italic text-[#5A6B54]">
          {species.latin}
        </p>
      </div>
    </a>
  )
}

function InfoBanner() {
  return (
    <div className="my-8 flex items-center gap-5 rounded-xl bg-[#B89452] p-6 md:p-8">
      <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-white md:size-20">
        <QrCode className="size-10 text-black md:size-12" aria-hidden="true" />
      </div>
      <p className="font-sans text-base leading-relaxed text-[#1d2521] md:text-lg">
        Ute i naturen? Skanna QR-koden på våra fysiska skyltar längs Kustvägen
        för att läsa mer om arten direkt i din telefon.
      </p>
    </div>
  )
}
