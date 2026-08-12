import Image from "next/image"
import { Leaf } from "lucide-react"

export default function OmOssPage() {
  return (
    <main className="bg-[#F4F1E8]">
      {/* Page hero */}
      <section className="relative flex h-[35vh] min-h-[280px] items-center justify-center overflow-hidden">
        <Image
          src="/images/archive-hero-lake.png"
          alt="Dimhöljd nordisk sjö i gryningen"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1d2521]/55" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-balance font-serif text-4xl font-semibold text-[#F4F1E8] sm:text-5xl md:text-6xl">
            Om oss
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty font-sans text-base leading-relaxed text-[#F4F1E8]/80 md:text-lg">
            Berättelsen bakom Natur Info kommer snart.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8">
        <Leaf className="mx-auto h-8 w-8 text-[#5A6B54]" aria-hidden="true" />
        <h2 className="mt-6 font-serif text-2xl font-semibold text-[#2f4437] sm:text-3xl">Vi förbereder denna sida</h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-[#1d2521]/70">
          Här kommer du snart att kunna läsa mer om projektet Natur Info, samarbetet med Kustvägen och teamet
          bakom naturguiden. Kom tillbaka snart!
        </p>
      </section>
    </main>
  )
}
