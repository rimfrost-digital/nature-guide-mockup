import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { SpeciesSection } from "@/components/species-section"
import { AboutSection } from "@/components/about-section"
import { QuizClient } from "@/components/quiz-client"
import { MapTeaserSection } from "@/components/map-teaser-section"

export default function Home() {
  return (
    <main className="bg-[#F4F1E8]">
      <HeroSection />
      <CategoriesSection />
      <SpeciesSection />
      <AboutSection />
      <div id="quiz" className="scroll-mt-20">
        <QuizClient lang="sv" />
      </div>
      <MapTeaserSection />
    </main>
  )
}
