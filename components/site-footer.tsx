"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Leaf, ArrowUpRight, ShoppingBag, BedDouble, UtensilsCrossed, Compass } from "lucide-react"

const KUSTVAGEN_URL = "https://www.xn--kustvgen-4za.se/"

const highlights = [
  { icon: BedDouble, label: "Boende", description: "Campingar, stugor, hotell och vandrarhem vid havet." },
  { icon: ShoppingBag, label: "Shopping", description: "Konst, hantverk, hem & trädgård och loppisar." },
  { icon: UtensilsCrossed, label: "Mat & dryck", description: "Restauranger, vägkrogar och mysiga caféer." },
  { icon: Compass, label: "Se & göra", description: "Trolska Skogen, sandstränder och äventyr för hela familjen." },
]

const footerLinks = [
  { href: "/", label: "Startsida" },
  { href: "/artsida", label: "Artsida" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/quiz", label: "Quiz" },
  { href: "#karta", label: "Karta" },
]

export function SiteFooter() {
  const pathname = usePathname()

  // The species page is an immersive QR-landing experience with its own layout.
  if (pathname === "/art") return null

  return (
    <>
      {/* Kustvägen promo — the partner funding this project */}
      <section className="bg-[#F4F1E8] pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-[#2f4437]">
            <img
              src="/images/kustvagen-coast.png"
              alt="Sommarkväll längs Kustvägen med rött fiskeläge vid havet"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#2f4437]/80" aria-hidden="true" />
            <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#F4F1E8]/70">
                I samarbete med Kustvägen
              </p>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold text-balance text-[#F4F1E8] sm:text-5xl">
                Upptäck mer längs Kustvägen
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-[#F4F1E8]/80">
                Naturen är bara början. När du utforskat djuren och växterna, ta vägen längs kusten genom
                Hälsingland och Medelpad — här väntar boende, shopping, god mat och upplevelser för hela familjen.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {highlights.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-[#F4F1E8]/10 p-5 ring-1 ring-[#F4F1E8]/15 backdrop-blur-sm"
                    >
                      <Icon className="h-6 w-6 text-[#F4F1E8]" aria-hidden="true" />
                      <h3 className="mt-4 font-serif text-xl font-semibold text-[#F4F1E8]">{item.label}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#F4F1E8]/75">{item.description}</p>
                    </div>
                  )
                })}
              </div>

              <a
                href={KUSTVAGEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#F4F1E8] px-8 py-3.5 text-sm font-medium tracking-wide text-[#2f4437] transition-colors hover:bg-white"
              >
                Besök Kustvägen
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2f4437]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-sm">
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-[#5A6B54]" aria-hidden="true" />
                <span className="font-serif text-xl font-semibold tracking-tight text-[#F4F1E8]">Natur Info</span>
              </div>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-[#F4F1E8]/70">
                Din digitala guide till djur, fåglar, fiskar, svampar, träd och växter i Hälsingland och
                Västernorrland. Skanna QR-koderna ute i naturen och kom närmare.
              </p>
            </div>

            <nav aria-label="Sidfot" className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F4F1E8]/60">Utforska</h3>
              <ul className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#F4F1E8]/80 transition-colors hover:text-[#F4F1E8]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F4F1E8]/60">Partner</h3>
              <a
                href={KUSTVAGEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[#F4F1E8]/80 transition-colors hover:text-[#F4F1E8]"
              >
                Kustvägen
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-[#F4F1E8]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#F4F1E8]/60">
              © {new Date().getFullYear()} Natur Info. Alla rättigheter förbehållna.
            </p>
            <p className="text-xs text-[#F4F1E8]/60">Ett projekt i samarbete med Kustvägen.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
