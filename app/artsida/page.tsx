import { Suspense } from "react"
import Image from "next/image"
import { ArchiveExplorer } from "@/components/archive-explorer"

export default function ArtsidaPage() {
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
            Utforska naturguiden
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty font-sans text-base leading-relaxed text-[#F4F1E8]/80 md:text-lg">
            Sök och filtrera bland Kustvägens rika djur- och växtliv.
          </p>
        </div>
      </section>

      <Suspense fallback={<div className="min-h-[50vh] bg-[#F4F1E8]" />}>
        <ArchiveExplorer />
      </Suspense>
    </main>
  )
}
