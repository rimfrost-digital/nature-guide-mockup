import { MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <img
        src="/images/hero-moose-banner.png"
        alt="Älg i en dimhöljd nordisk skog i morgonljuset"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1d2521]/65" />
      <div
        className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#1d2521]/90 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1d2521]/90 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <p className="mb-6 flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-[#B89452]">
          <MapPin className="h-4 w-4" />
          Hälsingland &amp; Västernorrland
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-balance text-white sm:text-6xl lg:text-7xl">
          Upptäck naturen längs Kustvägen
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">
          Utforska djur, fåglar, fiskar, svampar, träd och växter i Hälsingland och Västernorrland.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#kategorier"
            className="rounded-full bg-[#B89452] px-8 py-3.5 text-sm font-medium tracking-wide text-[#1d2521] transition-colors hover:bg-[#c9a566]"
          >
            Utforska naturguiden
          </a>
          <a
            href="#karta"
            className="rounded-full border border-white/70 px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-white/10"
          >
            Visa kartan
          </a>
        </div>
      </div>
    </section>
  )
}
