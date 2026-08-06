const categories = [
  { title: "Däggdjur", image: "/images/cat-mammal.png" },
  { title: "Fåglar", image: "/images/cat-bird.png" },
  { title: "Fiskar", image: "/images/cat-fish.png" },
  { title: "Svampar", image: "/images/cat-mushroom.png" },
  { title: "Träd", image: "/images/cat-tree.png" },
  { title: "Växter & Bär", image: "/images/cat-berry.png" },
]

export function CategoriesSection() {
  return (
    <section id="kategorier" className="bg-[#F4F1E8] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-3xl font-semibold text-balance text-[#2f4437] sm:text-5xl">
          Upptäck våra kategorier
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.title}
              href="#utvalda"
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#1d2521]/90 via-[#1d2521]/20 to-transparent"
                aria-hidden="true"
              />
              <h3 className="absolute bottom-5 left-5 right-5 font-serif text-2xl font-medium text-white sm:text-3xl">
                {category.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
