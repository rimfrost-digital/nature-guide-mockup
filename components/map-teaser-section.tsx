export function MapTeaserSection() {
  return (
    <section id="karta" className="bg-[#F4F1E8] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="/images/map-coastline.png"
            alt="Flygvy över en nordisk kustlinje med skog och hav"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2f4437]/75" aria-hidden="true" />
          <div className="relative flex flex-col items-center px-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-3xl font-semibold text-balance text-white sm:text-5xl">
              Hitta våra naturplatser
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-white/80">
              Utforska var våra fysiska skyltar är utplacerade.
            </p>
            <a
              href="#"
              className="mt-8 rounded-full bg-[#2f4437] px-8 py-3.5 text-sm font-medium tracking-wide text-[#F4F1E8] ring-1 ring-[#F4F1E8]/30 transition-colors hover:bg-[#3a5445]"
            >
              Öppna interaktiv karta
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
