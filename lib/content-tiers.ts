// Content tier model from the "Proposed content levels" slides.
//
//   CORE  – description, quick facts, a small curated image set
//   RICH  – Core + video, richer image set, category-relevant details (all animals are minimum Rich)
//   FULL  – Rich + Listen to the Guide, species sound, Ask the Species (Lynx is the completed reference)
//
// Staging vs live: the SAME components render everywhere. Visibility is decided
// by the species tier + whether content exists + the environment/mode.
//   live     – no content = no component (finished content only)
//   staging  – unproduced higher-tier modules show as labelled placeholders

export type Tier = "core" | "rich" | "full"
export type ContentMode = "live" | "staging"
export type ModuleState = "live" | "placeholder" | "hidden"

export const TIER_LEVEL: Record<Tier, number> = { core: 0, rich: 1, full: 2 }
export const TIER_DISPLAY: Record<Tier, string> = { core: "Core", rich: "Rich", full: "Full" }

// Per-species overrides win first. Everything else falls back to a category default.
// This is intentionally the single place to finalize "which species become Rich or Full".
const TIER_OVERRIDES: Record<string, Tier> = {
  lodjur: "full",
  "lodjur-v2": "full",
}

// Keyed by the Swedish category label used in the species page data.
const CATEGORY_TIER: Record<string, Tier> = {
  Däggdjur: "rich",
  Fågel: "rich",
  Fåglar: "rich",
  Fisk: "rich",
  Fiskar: "rich",
  Svamp: "core",
  Svampar: "core",
  Träd: "core",
  Växt: "core",
  Bär: "core",
  Växter: "core",
  "Växter & Bär": "core",
}

export function getSpeciesTier(slug: string, categorySv: string): Tier {
  return TIER_OVERRIDES[slug] ?? CATEGORY_TIER[categorySv] ?? "core"
}

export function moduleState(
  moduleTier: Tier,
  speciesTier: Tier,
  hasContent: boolean,
  mode: ContentMode,
): ModuleState {
  const qualifies = TIER_LEVEL[speciesTier] >= TIER_LEVEL[moduleTier]
  if (qualifies && hasContent) return "live"
  return mode === "staging" ? "placeholder" : "hidden"
}
