import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { SpeciesSection } from "@/components/species-section"
import { AboutSection } from "@/components/about-section"
import { MapTeaserSection } from "@/components/map-teaser-section"

export default function Home() {
  return (
    <main className="bg-[#F4F1E8]">
      <HeroSection />
      <CategoriesSection />
      <SpeciesSection />
      <AboutSection />
      <MapTeaserSection />
    </main>
  )
}
