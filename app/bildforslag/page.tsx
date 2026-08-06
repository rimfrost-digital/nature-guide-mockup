import Image from "next/image"

const pairs = [
  {
    title: "Startsida – hero (älg)",
    a: "/images/proposals/hero-forest-moose-a.png",
    b: "/images/proposals/hero-forest-moose-b.png",
  },
  {
    title: "Artsida – hero (lodjur)",
    a: "/images/proposals/lynx-hero-a.png",
    b: "/images/proposals/lynx-hero-b.png",
  },
  {
    title: "Om oss – skogsstig",
    a: "/images/proposals/about-forest-path-a.png",
    b: "/images/proposals/about-forest-path-b.png",
  },
  {
    title: "Arkivsida – skogssjö",
    a: "/images/proposals/archive-hero-lake-a.png",
    b: "/images/proposals/archive-hero-lake-b.png",
  },
  {
    title: "Karta – kustlinje",
    a: "/images/proposals/map-coastline-a.png",
    b: "/images/proposals/map-coastline-b.png",
  },
]

export default function BildforslagPage() {
  return (
    <main className="min-h-screen bg-[#F4F1E8] text-[#2f4437]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#5A6B54]">Bildförslag</p>
          <h1 className="text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Ljusare, mer naturtrogna bilder
          </h1>
          <p className="mt-4 text-pretty leading-relaxed text-[#2f4437]/70">
            Layout och formgivning är låsta. Här jämför vi två ljussättningar för fotografiet – samma stämning och
            mystik som tidigare, men ljusare och med en mer äkta, filmisk känsla i stället för det AI-genererade
            uttrycket. Välj den riktning ni föredrar så rullar vi ut den över alla bilder.
          </p>
        </header>

        <div className="mb-10 flex flex-wrap gap-4">
          <div className="rounded-2xl border border-[#2f4437]/10 bg-white/50 px-5 py-4">
            <p className="font-serif text-lg font-semibold">Version A</p>
            <p className="text-sm text-[#2f4437]/70">Mjukt mulet dagsljus – luftigt, ljust, dimmigt lugn.</p>
          </div>
          <div className="rounded-2xl border border-[#2f4437]/10 bg-white/50 px-5 py-4">
            <p className="font-serif text-lg font-semibold">Version B</p>
            <p className="text-sm text-[#2f4437]/70">Gyllene morgonljus – varmt, inbjudande, låg sol.</p>
          </div>
        </div>

        <div className="space-y-16">
          {pairs.map((pair) => (
            <section key={pair.title}>
              <h2 className="mb-4 font-serif text-2xl font-semibold">{pair.title}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {(["a", "b"] as const).map((v) => (
                  <figure key={v} className="overflow-hidden rounded-3xl border border-[#2f4437]/10 bg-white/40">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={pair[v] || "/placeholder.svg"}
                        alt={`${pair.title} – version ${v.toUpperCase()}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="flex items-center justify-between px-5 py-3">
                      <span className="font-serif text-lg font-semibold">Version {v.toUpperCase()}</span>
                      <span className="text-sm text-[#2f4437]/60">
                        {v === "a" ? "Mulet dagsljus" : "Gyllene morgonljus"}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
