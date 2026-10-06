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
  videoPlaceholder?: boolean
}

export function SpeciesGallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
      {items.map((item) =>
        item.videoPlaceholder ? (
          <VideoPlaceholderTile key={item.src} />
        ) : item.video ? (
          <VideoTile key={item.src} item={item} />
        ) : (
          <div
            key={item.src}
            className={`overflow-hidden rounded-2xl break-inside-avoid ${item.tall ? "aspect-[3/4]" : ""}`}
          >
            <Image
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              width={600}
              height={item.tall ? 800 : 600}
              className={`w-full transition-transform duration-500 hover:scale-105 ${
                item.tall ? "h-full object-cover" : "h-auto object-cover"
              }`}
            />
          </div>
        ),
      )}
    </div>
  )
}

function VideoPlaceholderTile() {
  return (
    <div className="flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-[#B89452]/50 bg-white break-inside-avoid">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#B89452]/20 text-[#B89452]">
        <Play className="ml-1 h-6 w-6" fill="currentColor" strokeWidth={0} />
      </span>
      <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1d2521]">Här går video</span>
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
    <div
      className={`group relative overflow-hidden rounded-2xl break-inside-avoid ${
        item.tall ? "aspect-[3/4]" : "aspect-square"
      }`}
    >
      <video
        ref={videoRef}
        src={item.poster ? item.video : `${item.video}#t=0.1`}
        {...(item.poster ? { poster: item.poster } : {})}
        controls={playing}
        playsInline
        preload="metadata"
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover"
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
