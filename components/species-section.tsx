import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Featured species — images and slugs mirror the actual species pages (artsida),
// so each card shows the same hero image and links to /art?namn=<slug>.
const species = [
  { title: "Älg", slug: "alg", image: "/images/hero-forest-moose.png", category: "Däggdjur" },
  { title: "Havsörn", slug: "havsorn", image: "/images/havsorn-hero.png", category: "Fåglar" },
  { title: "Gädda", slug: "gadda", image: "/images/fiskar/Gadda_Huvudbild_01.png", category: "Fiskar" },
  { title: "Kantarell", slug: "kantarell", image: "/images/kantarell-hero.png", category: "Svampar" },
  { title: "Tall", slug: "tall", image: "/images/tall-hero.png", category: "Träd" },
  {
    title: "Lingon",
    slug: "lingon",
    image: "/images/vaxter_bar/Lingon_Huvudbild_01.png",
    category: "Växter & Bär",
  },
]

export function SpeciesSection() {
  return (
    <section id="utvalda" className="bg-[#1d2521] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-3xl font-semibold text-balance text-[#F4F1E8] sm:text-5xl">
          Utvalda arter
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-pretty text-[#F4F1E8]/60">
          Sex arter från skog, sjö och kust — utforska var och en på nära håll.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {species.map((item) => (
            <Link
              key={item.slug}
              href={`/art?namn=${item.slug}`}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl ring-1 ring-[#F4F1E8]/10 transition-all duration-500 hover:ring-[#B89452]/40 hover:-translate-y-1"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              {/* Bottom scrim for legible overlaid text */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#12180F] via-[#12180F]/50 to-transparent transition-opacity duration-500 group-hover:from-[#12180F] group-hover:via-[#12180F]/60"
                aria-hidden="true"
              />

              {/* Floating category chip */}
                <span className="absolute left-5 top-5 rounded bg-[#B89452] px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-[#1d2521]">
                {item.category}
              </span>

              <div className="relative p-6">
                <h3 className="font-serif text-3xl font-medium leading-tight text-[#F4F1E8] drop-shadow-sm">
                  {item.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#E4C989] opacity-0 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  Läs mer
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                {/* Animated underline accent */}
                <span
                  className="mt-4 block h-px w-12 origin-left scale-x-100 bg-[#B89452] transition-transform duration-500 group-hover:scale-x-[3]"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
