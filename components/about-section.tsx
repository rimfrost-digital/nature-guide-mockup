export function AboutSection() {
  return (
    <section className="bg-[#2f4437]">
      <div className="grid lg:grid-cols-2">
        <div className="flex items-center px-6 py-20 sm:px-12 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-xl">
            <h2 className="font-serif text-3xl font-semibold text-balance text-[#F4F1E8] sm:text-5xl">
              Din guide till naturen
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-[#F4F1E8]/80">
              Kustvägen Naturguide är en digital förlängning av naturen själv. Skanna QR-koderna på våra
              informationsskyltar ute i landskapet och kom närmare djuren och växterna som lever här. Vi bjuder
              in till äkthet, lugn och upptäckarglädje i norra Sveriges vackra kustlandskap.
            </p>
          </div>
        </div>
        <div className="relative min-h-[320px] lg:min-h-full">
          <img
            src="/images/about-forest-path.png"
            alt="Mossbelagd skogsstig genom en dimhöljd nordisk skog"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
