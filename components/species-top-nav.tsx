"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, ChevronDown } from "lucide-react"

const LANGS = [
  { code: "SV", label: "🇸🇪 SV" },
  { code: "EN", label: "🇬🇧 EN" },
  { code: "DE", label: "🇩🇪 DE" },
]

export function SpeciesTopNav() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(LANGS[0])

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link
          href="/artsida"
          className="flex items-center gap-2 rounded-full bg-[#1d2521]/30 px-4 py-2 text-sm font-medium text-[#F4F1E8] backdrop-blur-md transition-colors hover:bg-[#1d2521]/50"
        >
          <ArrowLeft className="h-4 w-4" />
          Alla arter
        </Link>

        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-1.5 rounded-full bg-[#1d2521]/30 px-4 py-2 text-sm font-medium text-[#F4F1E8] backdrop-blur-md transition-colors hover:bg-[#1d2521]/50"
            aria-haspopup="listbox"
            aria-expanded={open}
          >
            {current.label}
            <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>

          {open && (
            <ul
              role="listbox"
              className="absolute right-0 mt-2 w-32 overflow-hidden rounded-xl bg-[#F4F1E8] py-1 shadow-xl ring-1 ring-[#2f4437]/10"
            >
              {LANGS.map((lang) => (
                <li key={lang.code}>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrent(lang)
                      setOpen(false)
                    }}
                    className={`flex w-full items-center px-4 py-2 text-sm transition-colors hover:bg-[#2f4437]/5 ${
                      current.code === lang.code ? "text-[#2f4437] font-semibold" : "text-[#5A6B54]"
                    }`}
                  >
                    {lang.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}
