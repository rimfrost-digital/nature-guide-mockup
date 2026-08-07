"use client"

import Image from "next/image"
import type { TracksSignsData, Lang } from "@/lib/species-pages-data"

interface Props {
  data: TracksSignsData
  lang: Lang
}

export function SpeciesTracksSection({ data, lang }: Props) {
  return (
    <section className="bg-[#F4F1E8]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="mb-10 font-serif text-4xl font-semibold text-[#2f4437]">
          {data.heading[lang]}
        </h2>

        <div className="grid gap-10 sm:grid-cols-2">
          {data.items.map((item) => (
            <div key={item.label[lang]} className="flex flex-col">
              {/* Image */}
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Caption */}
              <div className="mt-5">
                <h3 className="font-serif text-2xl font-semibold text-[#2f4437]">
                  {item.label[lang]}
                </h3>
                <p className="mt-3 leading-relaxed text-[#1d2521]">
                  {item.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
