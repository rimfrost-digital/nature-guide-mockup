"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Leaf } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Startsida" },
  { href: "/arkiv", label: "Arkivsida" },
  { href: "/art", label: "Artsida" },
  { href: "/quiz", label: "Quiz" },
]

export function SiteNav() {
  const pathname = usePathname()

  // The species page is an immersive QR-landing experience with its own floating nav.
  if (pathname.startsWith("/art")) return null

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
        </ul>
      </nav>
    </header>
  )
}
