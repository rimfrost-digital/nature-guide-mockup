"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ChevronDown, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Startsida" },
  { href: "/artsida", label: "Artsida" },
  { href: "/om-oss", label: "Om oss" },
]

const moreLinks = [{ href: "/quiz", label: "Quiz" }]

export function SiteNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [moreOpen, setMoreOpen] = useState(false)
  const moreRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false)
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [])

  // The species page is an immersive QR-landing experience with its own floating nav.
  if (pathname === "/art") return null

  const isMoreActive = moreLinks.some((link) => pathname.startsWith(link.href))

  return (
    <header className="sticky top-0 z-50 border-b border-[#2f4437]/10 bg-[#F4F1E8]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-[#5A6B54]" />
          <span className="font-serif text-xl font-semibold tracking-tight text-[#2f4437]">Natur Info</span>
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors",
                    isActive
                      ? "bg-[#2f4437] text-[#F4F1E8]"
                      : "text-[#2f4437] hover:bg-[#2f4437]/10",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}

          <li ref={moreRef} className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen((o) => !o)}
              aria-haspopup="listbox"
              aria-expanded={moreOpen}
              className={cn(
                "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors",
                isMoreActive || moreOpen
                  ? "bg-[#2f4437] text-[#F4F1E8]"
                  : "text-[#2f4437] hover:bg-[#2f4437]/10",
              )}
            >
              Mer
              <ChevronDown className={cn("h-4 w-4 transition-transform", moreOpen && "rotate-180")} />
            </button>

            {moreOpen && (
              <ul
                role="listbox"
                className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl bg-[#F4F1E8] py-1 shadow-xl ring-1 ring-[#2f4437]/10"
              >
                {moreLinks.map((link) => {
                  const isCurrentQuiz = link.href === "/quiz" && pathname === "/quiz"
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          setMoreOpen(false)
                          if (isCurrentQuiz) {
                            e.preventDefault()
                            router.push(`/quiz?reset=${Date.now()}`)
                          }
                        }}
                        className={cn(
                          "block px-4 py-2 text-sm transition-colors hover:bg-[#2f4437]/5",
                          pathname.startsWith(link.href) ? "font-semibold text-[#2f4437]" : "text-[#5A6B54]",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}
