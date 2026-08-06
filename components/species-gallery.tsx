"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

type GalleryItem = {
  src: string
  alt: string
  tall?: boolean
  video?: string
  poster?: string
}

export function SpeciesGallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
      {items.map((item) =>
        item.video ? (
          <VideoTile key={item.src} item={item} />
        ) : (
          <div key={item.src} className="overflow-hidden rounded-2xl break-inside-avoid">
            <Image
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              width={600}
              height={item.tall ? 800 : 600}
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ),
      )}
    </div>
  )
}

function VideoTile({ item }: { item: GalleryItem }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  function handlePlay() {
    const video = videoRef.current
    if (!video) return
    video.play()
    setPlaying(true)
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl break-inside-avoid">
      <video
        ref={videoRef}
        src={item.video}
        poster={item.poster || item.src}
        controls={playing}
        playsInline
        preload="none"
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        className="h-auto w-full object-cover"
      />
      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={`Spela upp video: ${item.alt}`}
          className="absolute inset-0 flex items-center justify-center bg-[#1d2521]/30 transition-colors hover:bg-[#1d2521]/15"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B89452] text-[#1d2521] shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-1 h-7 w-7" fill="currentColor" strokeWidth={0} />
          </span>
          <span className="absolute bottom-4 left-4 rounded-md bg-[#1d2521]/70 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#F4F1E8]">
            Video
          </span>
        </button>
      )}
    </div>
  )
}
