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
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {species.map((item) => (
            <Link
              key={item.slug}
              href={`/art?namn=${item.slug}`}
              className="group overflow-hidden rounded-2xl bg-[#5A6B54]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#F4F1E8]/60">
                  {item.category}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-medium text-[#F4F1E8]">
                  {item.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B89452]">
                  Läs mer
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
