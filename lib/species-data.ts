export type CategoryKey =
  | "daggdjur"
  | "faglar"
  | "fiskar"
  | "svampar"
  | "trad"
  | "vaxter"

export type Species = {
  slug: string
  name: string
  latin: string
  badge: string
  category: CategoryKey
  image: string
}

export const categoryFilters: { key: CategoryKey | "alla"; label: string }[] = [
  { key: "alla", label: "Alla arter" },
  { key: "daggdjur", label: "Däggdjur" },
  { key: "faglar", label: "Fåglar" },
  { key: "fiskar", label: "Fiskar" },
  { key: "svampar", label: "Svampar" },
  { key: "trad", label: "Träd" },
  { key: "vaxter", label: "Växter & Bär" },
]

export const species: Species[] = [
  {
    slug: "lodjur",
    name: "Lodjur",
    latin: "Lynx lynx",
    badge: "Däggdjur",
    category: "daggdjur",
    image: "/images/sp-lynx.png",
  },
  {
    slug: "rodrav",
    name: "Rödräv",
    latin: "Vulpes vulpes",
    badge: "Däggdjur",
    category: "daggdjur",
    image: "/images/rodrav-hero.png",
  },
  {
    slug: "alg",
    name: "Älg",
    latin: "Alces alces",
    badge: "Däggdjur",
    category: "daggdjur",
    image: "/images/alg-hero.png",
  },
  {
    slug: "grasal",
    name: "Gråsäl",
    latin: "Halichoerus grypus",
    badge: "Däggdjur",
    category: "daggdjur",
    image: "/images/sp-seal.png",
  },
  {
    slug: "brunbjorn",
    name: "Brunbjörn",
    latin: "Ursus arctos",
    badge: "Däggdjur",
    category: "daggdjur",
    image: "/images/placeholders/ursus_arctos_hero.jpg",
  },
  {
    slug: "varg",
    name: "Varg",
    latin: "Canis lupus",
    badge: "Däggdjur",
    category: "daggdjur",
    image: "/images/placeholders/canis_lupus_hero.jpg",
  },
  {
    slug: "jarv",
    name: "Järv",
    latin: "Gulo gulo",
    badge: "Däggdjur",
    category: "daggdjur",
    image: "/images/placeholders/gulo_gulo_hero.jpg",
  },
  {
    slug: "gravling",
    name: "Grävling",
    latin: "Meles meles",
    badge: "Däggdjur",
    category: "daggdjur",
    image: "/images/placeholders/meles_meles_hero.jpg",
  },
  {
    slug: "radjur",
    name: "Rådjur",
    latin: "Capreolus capreolus",
    badge: "Däggdjur",
    category: "daggdjur",
    image: "/images/placeholders/capreolus_capreolus_hero.jpg",
  },
  {
    slug: "havsorn",
    name: "Havsörn",
    latin: "Haliaeetus albicilla",
    badge: "Fågel",
    category: "faglar",
    image: "/images/species-eagle.png",
  },
  {
    slug: "fiskgjuse",
    name: "Fiskgjuse",
    latin: "Pandion haliaetus",
    badge: "Fågel",
    category: "faglar",
    image: "/images/sp-osprey.png",
  },
  {
    slug: "spillkraka",
    name: "Spillkråka",
    latin: "Dryocopus martius",
    badge: "Fågel",
    category: "faglar",
    image: "/images/sp-woodpecker.png",
  },
  {
    slug: "stromming",
    name: "Strömming",
    latin: "Clupea harengus",
    badge: "Fisk",
    category: "fiskar",
    image: "/images/sp-herring.png",
  },
  {
    slug: "lax",
    name: "Lax",
    latin: "Salmo salar",
    badge: "Fisk",
    category: "fiskar",
    image: "/images/sp-salmon.png",
  },
  {
    slug: "lin",
    name: "Lin",
    latin: "Linum usitatissimum",
    badge: "Växt",
    category: "vaxter",
    image: "/images/sp-flax.png",
  },
  {
    slug: "hjortron",
    name: "Hjortron",
    latin: "Rubus chamaemorus",
    badge: "Bär",
    category: "vaxter",
    image: "/images/sp-cloudberry.png",
  },
  {
    slug: "blabar",
    name: "Blåbär",
    latin: "Vaccinium myrtillus",
    badge: "Bär",
    category: "vaxter",
    image: "/images/species-blueberry.png",
  },
  {
    slug: "havtorn",
    name: "Havtorn",
    latin: "Hippophae rhamnoides",
    badge: "Bär",
    category: "vaxter",
    image: "/images/sp-buckthorn.png",
  },
  {
    slug: "kantarell",
    name: "Kantarell",
    latin: "Cantharellus cibarius",
    badge: "Svamp",
    category: "svampar",
    image: "/images/species-chanterelle.png",
  },
  {
    slug: "karljohan",
    name: "Karljohan",
    latin: "Boletus edulis",
    badge: "Svamp",
    category: "svampar",
    image: "/images/sp-porcini.png",
  },
  {
    slug: "tall",
    name: "Tall",
    latin: "Pinus sylvestris",
    badge: "Träd",
    category: "trad",
    image: "/images/species-pine.png",
  },
  {
    slug: "gran",
    name: "Gran",
    latin: "Picea abies",
    badge: "Träd",
    category: "trad",
    image: "/images/sp-spruce.png",
  },
]
