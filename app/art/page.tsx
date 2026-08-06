import Link from "next/link"
import Image from "next/image"
import { Scale, Beef, PawPrint, MapPin } from "lucide-react"
import { SpeciesTopNav } from "@/components/species-top-nav"
import { SpeciesAudioPlayer } from "@/components/species-audio-player"
import { SpeciesGallery } from "@/components/species-gallery"
import { TalkToNature } from "@/components/talk-to-nature"

const quickFacts = [
  { icon: Scale, label: "Vikt", value: "15–30 kg" },
  { icon: Beef, label: "Föda", value: "Köttätare (främst rådjur & hare)" },
  { icon: PawPrint, label: "Spår", value: "Runda, utan klomärken" },
  { icon: MapPin, label: "Livsmiljö", value: "Tät skog och bergig terräng" },
]

const gallery = [
  {
    src: "/images/lynx-rock.png",
    alt: "Lodjur som rör sig genom skogen",
    tall: true,
    video: "https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4",
    poster: "/images/lynx-rock.png",
  },
  { src: "/images/lynx-face.png", alt: "Närbild på ett lodjurs ansikte" },
  { src: "/images/lynx-tracks.png", alt: "Lodjursspår i snön" },
  { src: "/images/sp-lynx.png", alt: "Lodjur i vinterskog" },
]

const related = [
  { slug: "alg", name: "Älg", latin: "Alces alces", image: "/images/species-moose.png" },
  { slug: "skogshare", name: "Skogshare", latin: "Lepus timidus", image: "/images/sp-hare.png" },
  { slug: "gravling", name: "Grävling", latin: "Meles meles", image: "/images/sp-badger.png" },
]

export default function ArtPage() {
  return (
    <main className="bg-[#F4F1E8]">
      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <SpeciesTopNav />
        <Image
          src="/images/lynx-hero.png"
          alt="Lodjur i en snötäckt nordisk skog"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d2521] via-[#1d2521]/30 to-transparent" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-5 pb-12 sm:px-8">
            <span className="inline-block rounded-md bg-[#B89452] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1d2521]">
              Däggdjur
            </span>
            <h1 className="mt-4 font-serif text-6xl font-semibold leading-none text-[#F4F1E8] sm:text-7xl md:text-8xl">
              Lodjur
            </h1>
            <p className="mt-2 font-sans text-xl italic text-[#B89452] sm:text-2xl">Lynx lynx</p>
          </div>
        </div>
      </section>

      {/* Audio guide */}
      <section className="border-t-4 border-[#B89452] bg-[#F4F1E8]">
        <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
          <SpeciesAudioPlayer />
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-[#F4F1E8]">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-6 sm:px-8">
          <h2 className="mb-6 font-serif text-3xl font-semibold text-[#2f4437]">Snabbfakta</h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {quickFacts.map((fact) => {
              const Icon = fact.icon
              return (
                <div
                  key={fact.label}
                  className="flex flex-col gap-3 rounded-2xl border border-[#5A6B54]/40 bg-transparent p-5"
                >
                  <Icon className="h-7 w-7 text-[#5A6B54]" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#5A6B54]">
                      {fact.label}
                    </p>
                    <p className="mt-1 font-serif text-lg font-medium leading-snug text-[#1d2521]">
                      {fact.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Talk to nature (for children) */}
      <TalkToNature />

      {/* Main narrative */}
      <section className="bg-[#F4F1E8]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[#2f4437] sm:text-5xl">
              Hälsinglands mystiska landskapsdjur
            </h2>
            <p className="mt-6 leading-relaxed text-[#1d2521]">
              Ett möte med lodjuret är en sällsynt och magisk upplevelse. Det är norra Europas största
              kattdjur, känt för sina karakteristiska tofsar på öronen och sin korta svans. Lodjuret smyger
              ljudlöst fram genom de djupa skogarna längs Kustvägen och är en mästare på att undvika
              upptäckt. Den trivs bäst i oländig terräng där den kan ligga i bakhåll.
            </p>
            <blockquote className="mt-8 border-l-4 border-[#B89452] pl-5 font-serif text-xl italic leading-relaxed text-[#5A6B54]">
              &ldquo;Att få se ett vilt lodjur i dess naturliga miljö är som att få en skymt av själva
              skogens själ.&rdquo;
            </blockquote>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/lynx-paw-snow.png"
              alt="Närbild på ett lodjurs tass i snön"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#1d2521]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="mb-8 font-serif text-4xl font-semibold text-[#F4F1E8]">Bilder från närområdet</h2>
          <SpeciesGallery items={gallery} />
        </div>
      </section>

      {/* Related species */}
      <section className="bg-[#2f4437]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="mb-8 font-serif text-4xl font-semibold text-[#F4F1E8]">Upptäck fler däggdjur</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((sp) => (
              <Link
                key={sp.slug}
                href="/art"
                className="group overflow-hidden rounded-2xl bg-[#1d2521]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={sp.image || "/placeholder.svg"}
                    alt={sp.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-2xl font-semibold text-[#F4F1E8]">{sp.name}</h3>
                  <p className="mt-1 text-sm italic text-[#B89452]">{sp.latin}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/arkiv"
              className="rounded-full border border-[#F4F1E8] px-8 py-3 text-sm font-medium tracking-wide text-[#F4F1E8] transition-colors hover:bg-[#F4F1E8] hover:text-[#2f4437]"
            >
              Visa alla däggdjur
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
