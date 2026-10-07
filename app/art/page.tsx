import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Scale, Beef, PawPrint, MapPin, Ruler, Leaf, Moon, Headphones, MessagesSquare, LayoutGrid } from "lucide-react"
import { SpeciesTopNav } from "@/components/species-top-nav"
import { SpeciesAudioPlayer } from "@/components/species-audio-player"
import { SpeciesGallery } from "@/components/species-gallery"
import { TalkToNature } from "@/components/talk-to-nature"
import { ModulePlaceholder } from "@/components/module-placeholder"
import { StagingDemoPlayer } from "@/components/staging-demo-player"
import { getSpeciesTier, moduleState, TIER_DISPLAY, type ContentMode } from "@/lib/content-tiers"
import { speciesPagesData, type Lang } from "@/lib/species-pages-data"

// Icons to cycle through for quick facts
const FACT_ICONS = [Scale, Beef, PawPrint, MapPin, Ruler, Leaf, Moon]

type Props = {
  searchParams: Promise<{ namn?: string; lang?: string; mode?: string }>
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
  const { namn = "lodjur", lang = "sv", mode: modeParam } = await searchParams
  const data = speciesPagesData[namn]
  if (!data) notFound()

  const l = (["sv", "en", "de"].includes(lang) ? lang : "sv") as Lang

  const name = data.names[l]
  const category = data.category[l]
  const content = data.content[l]
  const quickFacts = data.quickFacts[l]
  const interactive = data.interactive[l]
  const heroAlt = data.media.heroImage.alt[l]
  const CREATURE_SOUNDS: Record<string, { src: string; label: string }> = {
    lodjur: { src: "/audio/what-does-the-lynx-say.mp3", label: "Så här låter lodjuret" },
    "lodjur-v2": { src: "/audio/what-does-the-lynx-say.mp3", label: "Så här låter lodjuret" },
    havsorn: { src: "/audio/havsorn_ljud.mp3", label: "Så här låter djuret" },
    fiskgjuse: { src: "", label: "Så här låter fiskgjusen" },
    alg: { src: "/audio/alg_ljud.mp3", label: "Så här låter älgen" },
    grasal: { src: "/audio/grasal_ljud.mp3", label: "Så här låter gråsälen" },
    brunbjorn: { src: "/audio/brunbjorn_ljud.mp3", label: "Så här låter brunbjörnen (exempel)" },
    varg: { src: "/audio/varg_ljud.mp3", label: "Så här låter vargen (exempel)" },
    jarv: { src: "/audio/jarv_ljud.mp3", label: "Så här låter järven (exempel)" },
    gravling: { src: "/audio/gravling_ljud.mp3", label: "Så här låter grävlingen (exempel)" },
    radjur: { src: "/audio/radjur_ljud.mp3", label: "Så här låter rådjuret (exempel)" },
    rodrav: { src: "/audio/rodrav_ljud.mp3", label: "Så här låter rödräven" },
    ronn: { src: "", label: "Så här låter rönnen" },
    salg: { src: "", label: "Så här låter sälgen" },
    graal: { src: "", label: "Så här låter gråalen" },
    bjork: { src: "", label: "Så här låter björken" },
    asp: { src: "", label: "Så här låter aspen" },
  }
  const creatureSound = CREATURE_SOUNDS[namn]
  const soundDisabled = creatureSound !== undefined && !creatureSound.src
  const detailAlt = data.media.detailImage?.alt[l] ?? ""
  const galleryImages = data.media.galleryImages
  const relatedHeading = data.relatedSectionHeading[l]
  const relatedLink = data.relatedLinkLabel[l]
  const hasDetailsGrid = Boolean(content.detailsGrid && content.detailsGrid.length > 0)

  // Content tier + staging/live mode
  const mode: ContentMode = modeParam === "staging" ? "staging" : "live"
  const speciesTier = getSpeciesTier(namn, data.category.sv)
  const hideMammalGuide = data.category.sv === "Däggdjur" && namn !== "lodjur"
  const audioState = hideMammalGuide
    ? "hidden"
    : moduleState("full", speciesTier, Boolean(data.media.audio[l].url) && namn !== "lodjur-v2", mode)
  const askState = moduleState("full", speciesTier, namn !== "lodjur-v2", mode)
  const detailsState = moduleState("rich", speciesTier, hasDetailsGrid, mode)
  const showDetailsBlock = detailsState !== "hidden"

  const notProducedLabel =
    l === "sv" ? "Ej producerad" : l === "en" ? "Not produced" : "Nicht produziert"
  const stagingLabel = "Staging"
  const levelLabel = l === "sv" ? "Nivå" : l === "en" ? "Level" : "Stufe"
  const stagingNote =
    l === "sv"
      ? "Ej producerade moduler visas som platshållare."
      : l === "en"
        ? "Unproduced modules are shown as placeholders."
        : "Nicht produzierte Module werden als Platzhalter angezeigt."
  const audioPlaceholderDesc =
    l === "sv"
      ? "En inläst guide och dokumentärljud produceras för arter på Full-nivå."
      : l === "en"
        ? "A narrated guide and documentary audio are produced for Full-level species."
        : "Ein gesprochener Guide und Dokumentaraudio werden für Full-Arten produziert."
  const askPlaceholderDesc =
    l === "sv"
      ? "Interaktiv AI-dialog och artens läte produceras för arter på Full-nivå."
      : l === "en"
        ? "Interactive AI dialogue and species sound are produced for Full-level species."
        : "Interaktiver KI-Dialog und Tierstimme werden für Full-Arten produziert."
  const detailsTitle =
    l === "sv" ? "Fördjupning & kännetecken" : l === "en" ? "In-depth details" : "Vertiefte Details"
  const detailsPlaceholderDesc =
    l === "sv"
      ? "Fördjupande kort med bilder och kännetecken produceras för arter på Rich-nivå."
      : l === "en"
        ? "In-depth cards with images and characteristics are produced for Rich-level species."
        : "Vertiefende Karten mit Bildern und Merkmalen werden für Rich-Arten produziert."

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

      {/* Staging notice */}
      {mode === "staging" && (
        <div className="bg-[#2f4437] text-[#F4F1E8]">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-1 px-5 py-3 text-sm sm:px-8">
            <span className="rounded-md bg-[#B89452] px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#1d2521]">
              {stagingLabel}
            </span>
            <span className="font-medium">
              {levelLabel}: {TIER_DISPLAY[speciesTier]}
            </span>
            <span className="text-[#c9b98e]">{stagingNote}</span>
          </div>
        </div>
      )}

      {/* Audio guide — Full module */}
      {audioState !== "hidden" && (
        <section className="bg-[#F4F1E8]">
          <div className="mx-auto max-w-6xl px-5 pt-8 sm:px-8 sm:pt-10">
            {audioState === "live" ? (
              <SpeciesAudioPlayer audioTitle={audioTitle} audioSrc={audioSrc} />
            ) : speciesTier === "full" ? (
              <StagingDemoPlayer
                title={audioTitle}
                note="Staging example – guide audio will be added here."
              />
            ) : (
              <ModulePlaceholder
                tierLabel="Full"
                title={audioTitle}
                notProducedLabel={notProducedLabel}
                description={audioPlaceholderDesc}
                Icon={Headphones}
              />
            )}
          </div>
        </section>
      )}

      {/* Quick facts */}
      <section className="bg-[#F4F1E8]">
        <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-20">
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

      {/* Talk to nature — Full module */}
      {askState === "live" ? (
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
          audioSrc={creatureSound?.src}
          audioLabel={creatureSound?.label}
          soundDisabled={soundDisabled}
          stagingSoundDemo={mode === "staging" && !creatureSound?.src}
        />
      ) : askState === "placeholder" ? (
        <section className="bg-[#F4F1E8]">
          <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-20">
            <ModulePlaceholder
              tierLabel="Full"
              title={interactive.title}
              notProducedLabel={notProducedLabel}
              description={askPlaceholderDesc}
              Icon={MessagesSquare}
            />
          </div>
        </section>
      ) : null}

      {/* Main narrative */}
      <section className="bg-[#F4F1E8]">
        <div
          className={`mx-auto grid max-w-6xl items-start gap-10 px-5 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-2 ${
            showDetailsBlock ? "" : "pb-16 sm:pb-20"
          }`}
        >
          <div>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[#2f4437] sm:text-5xl">
              {content.heroSubtitle}
            </h2>
            {content.intro.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mt-6 leading-relaxed text-[#1d2521]">
                {paragraph}
              </p>
            ))}

            {content.quote && (
              <blockquote className="mt-8 border-l-4 border-[#B89452] pl-6">
                <p className="font-serif text-lg italic leading-relaxed text-[#5A6B54]">
                  &ldquo;{content.quote}&rdquo;
                </p>
              </blockquote>
            )}
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

      {/* Details grid — Rich module */}
      {detailsState !== "hidden" && (
        <section className="bg-[#F4F1E8]">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            {detailsState === "placeholder" ? (
              <ModulePlaceholder
                tierLabel="Rich"
                title={detailsTitle}
                notProducedLabel={notProducedLabel}
                description={detailsPlaceholderDesc}
                Icon={LayoutGrid}
              />
            ) : (
            <div className="grid gap-8 sm:grid-cols-3">
              {content.detailsGrid?.map((card) => (
                <div key={card.heading} className="flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={card.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-[#2f4437]">
                    {card.heading}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#1d2521]">{card.body}</p>
                  <p className="mt-3 text-sm italic leading-relaxed text-[#5A6B54]">
                    {card.caption}
                  </p>
                </div>
              ))}
            </div>
            )}
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="bg-[#1d2521]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="mb-8 font-serif text-4xl font-semibold text-[#F4F1E8]">
            {galleryHeading}
          </h2>
          <SpeciesGallery items={galleryImages} />
        </div>
      </section>

      {/* Related species */}
      <section className="bg-[#2f4437]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
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
              href="/artsida"
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
