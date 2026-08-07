import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Scale, Beef, PawPrint, MapPin, Ruler, Leaf, Moon } from "lucide-react"
import { SpeciesTopNav } from "@/components/species-top-nav"
import { SpeciesAudioPlayer } from "@/components/species-audio-player"
import { SpeciesGallery } from "@/components/species-gallery"
import { SpeciesTracksSection } from "@/components/species-tracks-section"
import { TalkToNature } from "@/components/talk-to-nature"
import { speciesPagesData, type Lang } from "@/lib/species-pages-data"

// Icons to cycle through for quick facts
const FACT_ICONS = [Scale, Beef, PawPrint, MapPin, Ruler, Leaf, Moon]

type Props = {
  searchParams: Promise<{ namn?: string; lang?: string }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { namn = "lodjur", lang = "sv" } = await searchParams
  const data = speciesPagesData[namn]
  if (!data) return {}
  const l = (["sv", "en", "de"].includes(lang) ? lang : "sv") as Lang
  const m = data.meta[l]
  return { title: m.title, description: m.description }
}

export default async function ArtPage({ searchParams }: Props) {
  const { namn = "lodjur", lang = "sv" } = await searchParams
  const data = speciesPagesData[namn]
  if (!data) notFound()

  const l = (["sv", "en", "de"].includes(lang) ? lang : "sv") as Lang

  const name = data.names[l]
  const category = data.category[l]
  const content = data.content[l]
  const quickFacts = data.quickFacts[l]
  const interactive = data.interactive[l]
  const heroAlt = data.media.heroImage.alt[l]
  const detailAlt = data.media.detailImage?.alt[l] ?? ""
  const galleryImages = data.media.galleryImages
  const relatedHeading = data.relatedSectionHeading[l]
  const relatedLink = data.relatedLinkLabel[l]

  // Localized UI strings
  const audioTitle = data.media.audio[l].title
  const audioSrc = data.media.audio[l].url
  const galleryHeading =
    l === "sv"
      ? "Bilder från närområdet"
      : l === "en"
        ? "Images from the area"
        : "Bilder aus der Umgebung"
  const quickFactsHeading =
    l === "sv" ? "Snabbfakta" : l === "en" ? "Quick Facts" : "Kurzfakten"
  const chatWelcome =
    l === "sv"
      ? `Hej! Jag är ${name}. Vad vill du veta?`
      : l === "en"
        ? `Hi! I'm the ${name}. What would you like to know?`
        : `Hallo! Ich bin der ${name}. Was möchtest du wissen?`
  const chatPlaceholder =
    l === "sv"
      ? "Skriv din fråga här..."
      : l === "en"
        ? "Type your question here..."
        : "Schreib deine Frage hier..."
  const chatAriaLabel =
    l === "sv"
      ? `Skriv din fråga till ${name}`
      : l === "en"
        ? `Type your question to the ${name}`
        : `Schreib deine Frage an den ${name}`
  const tagLabel =
    l === "sv" ? "Prata med naturen" : l === "en" ? "Talk to Nature" : "Mit der Natur sprechen"
  const subNote =
    l === "sv"
      ? `En lekfull guide för barn \u2013 svaren skapas av en digital ${name.toLowerCase()}skompis.`
      : l === "en"
        ? `A playful guide for children \u2013 answers are created by a digital ${name.toLowerCase()} companion.`
        : `Ein spielerischer Guide für Kinder \u2013 Antworten werden von einem digitalen ${name}-Begleiter erstellt.`

  return (
    <main className="bg-[#F4F1E8]">
      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <SpeciesTopNav />
        <Image
          src={data.media.heroImage.url}
          alt={heroAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d2521] via-[#1d2521]/30 to-transparent" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-5 pb-12 sm:px-8">
            <span className="inline-block rounded-md bg-[#B89452] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1d2521]">
              {category}
            </span>
            <h1 className="mt-4 font-serif text-6xl font-semibold leading-none text-[#F4F1E8] sm:text-7xl md:text-8xl">
              {name}
            </h1>
            <p className="mt-2 font-sans text-xl italic text-[#B89452] sm:text-2xl">
              {data.scientificName}
            </p>
          </div>
        </div>
      </section>

      {/* Audio guide */}
      <section className="border-t-4 border-[#B89452] bg-[#F4F1E8]">
        <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
          <SpeciesAudioPlayer audioTitle={audioTitle} audioSrc={audioSrc} />
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-[#F4F1E8]">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-6 sm:px-8">
          <h2 className="mb-6 font-serif text-3xl font-semibold text-[#2f4437]">
            {quickFactsHeading}
          </h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {quickFacts.map((fact, i) => {
              const Icon = FACT_ICONS[i % FACT_ICONS.length]
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

      {/* Talk to nature */}
      <TalkToNature
        title={interactive.title}
        intro={interactive.intro}
        presetQuestions={interactive.presetQuestions}
        avatarImage={data.avatarImage}
        avatarAlt={data.chatAvatarAlt}
        welcomeMessage={chatWelcome}
        inputPlaceholder={chatPlaceholder}
        inputAriaLabel={chatAriaLabel}
        tagLabel={tagLabel}
        subNote={subNote}
        speciesId={namn}
      />

      {/* Main narrative */}
      <section className="bg-[#F4F1E8]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[#2f4437] sm:text-5xl">
              {content.heroSubtitle}
            </h2>
            <p className="mt-6 leading-relaxed text-[#1d2521]">{content.intro}</p>

            {content.sections.map((section) => (
              <div key={section.heading} className="mt-8">
                <h3 className="font-serif text-2xl font-semibold text-[#2f4437]">
                  {section.heading}
                </h3>
                <p className="mt-3 leading-relaxed text-[#1d2521]">{section.body}</p>
              </div>
            ))}
          </div>
          {data.media.detailImage && (
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src={data.media.detailImage.url}
                alt={detailAlt}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Tracks & signs */}
      {data.tracksSigns && (
        <SpeciesTracksSection data={data.tracksSigns} lang={l} />
      )}

      {/* Gallery */}
      <section className="bg-[#1d2521]">

      {/* Related species */}
      <section className="bg-[#2f4437]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="mb-8 font-serif text-4xl font-semibold text-[#F4F1E8]">
            {relatedHeading}
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {data.relatedSpecies.map((sp) => (
              <Link
                key={sp.slug}
                href={`/art?namn=${sp.slug}`}
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
              {relatedLink}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
