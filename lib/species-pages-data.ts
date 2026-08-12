export type Lang = "sv" | "en" | "de"

export type QuickFact = {
  label: string
  value: string
}

export type ContentSection = {
  heading: string
  body: string
}

export type DetailCard = {
  heading: string
  body: string
  image: string
  alt: string
  caption: string
}

export type GalleryItem = {
  src: string
  alt: string
  tall?: boolean
  video?: string
  poster?: string
}

export type RelatedSpecies = {
  slug: string
  name: string
  latin: string
  image: string
}

export type TrackSign = {
  image: string
  alt: string
  label: Record<Lang, string>
  description: Record<Lang, string>
}

export type TracksSignsData = {
  heading: Record<Lang, string>
  items: TrackSign[]
}

export type SpeciesPageData = {
  id: string
  scientificName: string
  category: Record<Lang, string>
  names: Record<Lang, string>
  meta: Record<Lang, { title: string; description: string }>
  quickFacts: Record<Lang, QuickFact[]>
  content: Record<
    Lang,
    {
      heroSubtitle: string
      intro: string
      quote?: string
      sections: ContentSection[]
      detailsGrid?: DetailCard[]
    }
  >
  media: {
    heroImage: { url: string; alt: Record<Lang, string> }
    galleryImages: GalleryItem[]
    detailImage?: { url: string; alt: Record<Lang, string> }
    audio: Record<Lang, { title: string; url: string }>
  }
  tracksSigns?: TracksSignsData
  interactive: Record<
    Lang,
    {
      title: string
      intro: string
      presetQuestions: string[]
      fallback: string
    }
  >
  chatSystemPrompt: string
  avatarImage: string
  chatAvatarAlt: string
  relatedSpecies: RelatedSpecies[]
  relatedSectionHeading: Record<Lang, string>
  relatedLinkLabel: Record<Lang, string>
}

export const speciesPagesData: Record<string, SpeciesPageData> = {
  lodjur: {
    id: "lodjur",
    scientificName: "Lynx lynx",
    category: { sv: "Däggdjur", en: "Mammals", de: "Säugetiere" },
    names: { sv: "Lodjur", en: "Eurasian Lynx", de: "Eurasischer Luchs" },
    meta: {
      sv: {
        title: "Lodjur – Kustvägen Naturguide",
        description:
          "Lär känna lodjuret längs Kustvägen. Fakta om Nordens största kattdjur, dess spår, jakt och hemliga liv i skogen.",
      },
      en: {
        title: "Eurasian Lynx – Kustvägen Nature Guide",
        description:
          "Discover the Eurasian Lynx along the Coastal Road. Facts about tracks, hunting, and the secret life of Northern Europe's largest cat.",
      },
      de: {
        title: "Eurasischer Luchs – Kustvägen Naturführer",
        description:
          "Entdecken Sie den Eurasischen Luchs entlang des Kustvägen. Fakten zu Spuren, Jagd und dem verborgenen Leben Nordeuropas größter Katze.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Vikt", value: "15–30 kg" },
        { label: "Föda", value: "Köttätare (främst rådjur & hare)" },
        { label: "Spår", value: "Runda, utan klomärken" },
        { label: "Livsmiljö", value: "Tät skog och bergig terräng" },
      ],
      en: [
        { label: "Weight", value: "15–30 kg" },
        { label: "Diet", value: "Carnivore (mainly deer & hare)" },
        { label: "Tracks", value: "Round, no claw marks" },
        { label: "Habitat", value: "Dense forest and rocky terrain" },
      ],
      de: [
        { label: "Gewicht", value: "15–30 kg" },
        { label: "Nahrung", value: "Fleischfresser (Reh & Hase)" },
        { label: "Spuren", value: "Rund, ohne Krallenmärken" },
        { label: "Lebensraum", value: "Dichter Wald und felsiges Gelände" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Hälsinglands mystiska landskapsdjur",
        intro:
          "Ett möte med lodjuret är en sällsynt och magisk upplevelse. Det är norra Europas största kattdjur, känt för sina karakteristiska tofsar på öronen och sin korta svans. Lodjuret smyger ljudlöst fram genom de djupa skogarna längs Kustvägen och är en mästare på att undvika upptäckt. Den trivs bäst i oländig terräng där den kan ligga i bakhåll.",
        quote:
          "Att få se ett vilt lodjur i dess naturliga miljö är som att få en skymt av själva skogens själ.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Lodjuret känns lätt igen på sina karakteristiska öron­tofsar, korta svans och kraftiga polisonger runt kinderna. Pälsen varierar från gulbrun till gråbrun med mörka fläckar, och de stora tassarna fungerar som naturliga snöskor på vintern.",
            image: "/images/lodjur-sommar.png",
            alt: "Lodjur i sommarskog med tydliga örontofsar",
            caption: "Örontofsarna hjälper lodjuret att höra minsta ljud i skogen.",
          },
          {
            heading: "Jakt & Föda",
            body: "Som en skicklig smygjägare förlitar sig lodjuret på tålamod snarare än uthållighet. Den smyger sig inpå sitt byte – oftast rådjur eller hare – innan den slår till med ett snabbt, kraftfullt språng.",
            image: "/images/lynx-rock.png",
            alt: "Lodjur som rör sig ljudlöst genom terrängen",
            caption: "Ett enda välriktat språng räcker för att fälla bytet.",
          },
          {
            heading: "Livsmiljö & Beteende",
            body: "Lodjuret är ett ensamlevande och territoriellt djur som håller till i tät skog och bergig terräng. Den är skicklig på att klättra i träd och rör sig mest i skymning och gryning, långt från människors blickar.",
            image: "/images/lodjur-skog.png",
            alt: "Lodjur bland mossbeklädda stenar i skogen",
            caption: "I skymningen rör sig lodjuret som en skugga mellan träden.",
          },
        ],
      },
      en: {
        heroSubtitle: "The mysterious cat of Northern Europe",
        intro:
          "The Eurasian Lynx is Northern Europe's largest cat, recognized by its characteristic ear tufts and short tail. It moves silently through the deep forests along the Coastal Road, a master of staying hidden.",
        quote:
          "Catching sight of a wild lynx in its natural habitat feels like glimpsing the soul of the forest itself.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "The lynx is easily recognized by its distinctive ear tufts, short tail, and prominent facial ruff. Its coat ranges from yellowish-brown to gray-brown with dark spots, and its large paws act as natural snowshoes in winter.",
            image: "/images/lodjur-sommar.png",
            alt: "Lynx in summer forest with visible ear tufts",
            caption: "The ear tufts help the lynx pick up even the faintest sounds.",
          },
          {
            heading: "Hunting & Diet",
            body: "A skilled stalking hunter, the lynx relies on patience rather than endurance. It creeps close to its prey – usually deer or hare – before striking with a swift, powerful pounce.",
            image: "/images/lynx-rock.png",
            alt: "Lynx moving silently through the terrain",
            caption: "A single well-aimed leap is often enough to bring down the prey.",
          },
          {
            heading: "Habitat & Behavior",
            body: "The lynx is a solitary, territorial animal that favors dense forest and rocky terrain. It climbs trees with ease and is most active at dusk and dawn, far from human eyes.",
            image: "/images/lodjur-skog.png",
            alt: "Lynx among moss-covered rocks in the forest",
            caption: "At twilight, the lynx moves like a shadow between the trees.",
          },
        ],
      },
      de: {
        heroSubtitle: "Die geheimnisvolle Katze Nordeuropas",
        intro:
          "Der Eurasische Luchs ist Nordeuropas größte Katze, erkennbar an seinen charakteristischen Ohrpinseln und dem kurzen Schwanz. Er bewegt sich lautlos durch die tiefen Wälder entlang des Kustvägen.",
        quote:
          "Einen wilden Luchs in seiner natürlichen Umgebung zu sehen, ist wie ein Blick in die Seele des Waldes selbst.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Der Luchs ist leicht an seinen charakteristischen Ohrpinseln, dem kurzen Schwanz und den markanten Backenbart erkennbar. Sein Fell reicht von gelbbraun bis graubraun mit dunklen Flecken, und die großen Pfoten dienen im Winter als natürliche Schneeschuhe.",
            image: "/images/lodjur-sommar.png",
            alt: "Luchs im Sommerwald mit sichtbaren Ohrpinseln",
            caption: "Die Ohrpinsel helfen dem Luchs, selbst leiseste Geräusche zu hören.",
          },
          {
            heading: "Jagd & Nahrung",
            body: "Als geschickter Schleichjäger verlässt sich der Luchs auf Geduld statt Ausdauer. Er schleicht sich an seine Beute – meist Reh oder Hase – heran, bevor er mit einem schnellen, kraftvollen Sprung zuschlägt.",
            image: "/images/lynx-rock.png",
            alt: "Luchs bewegt sich lautlos durch das Gelände",
            caption: "Ein einziger gut gezielter Sprung reicht oft aus, um die Beute zu erlegen.",
          },
          {
            heading: "Lebensraum & Verhalten",
            body: "Der Luchs ist ein einzelgängerisches, territoriales Tier, das dichten Wald und felsiges Gelände bevorzugt. Er klettert mühelos auf Bäume und ist vor allem in der Dämmerung aktiv, fernab von Menschen.",
            image: "/images/lodjur-skog.png",
            alt: "Luchs zwischen moosbedeckten Steinen im Wald",
            caption: "In der Dämmerung bewegt sich der Luchs wie ein Schatten zwischen den Bäumen.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/lynx-hero.png",
        alt: {
          sv: "Lodjur i en snötäckt nordisk skog",
          en: "Lynx in a snow-covered Nordic forest",
          de: "Luchs in einem schneebedeckten nordischen Wald",
        },
      },
      detailImage: {
        url: "/images/lynx-paw-snow.png",
        alt: {
          sv: "Närbild på ett lodjurs tass i snön",
          en: "Close-up of a lynx paw in snow",
          de: "Nahaufnahme einer Luchspfote im Schnee",
        },
      },
      galleryImages: [
        {
          src: "/images/lynx-rock.png",
          alt: "Lodjur som rör sig genom skogen",
          tall: true,
          video: "/video/lodjur.mp4",
        },
        { src: "/images/lodjur-sno.png",       alt: "Lodjur vandrar genom vinterlandskap" },
        { src: "/images/lodjur-spår.png",      alt: "Lodjursspår i nysnö" },
        { src: "/images/lodjur-spillning.png", alt: "Lodjursspillning i vinterskogen" },
        { src: "/images/lodjur-sommar.png",    alt: "Lodjur i sommarskog" },
        { src: "/images/lodjur-skog.png",      alt: "Lodjur bland mossbeklädda stenar" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/lodjur-sv.mp3" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Hören Sie den Guide", url: "" },
      },
    },
    tracksSigns: {
      heading: {
        sv: "Spår & spillning",
        en: "Tracks & signs",
        de: "Spuren & Zeichen",
      },
      items: [
        {
          image: "/images/lodjur-spår.png",
          alt: "Lodjursspår i nysnö",
          label: { sv: "Spår", en: "Tracks", de: "Spuren" },
          description: {
            sv: "Lodjurets tassavtryck är runda och stora – ungefär 8–9 cm breda. Klorna är indragbara och syns därför inte i spåret. I snö placer­ar lodjuret bakfoten precis i framfotens avtryck, vilket ger ett snyggt enkelt spårmönster längs marken.",
            en: "The lynx paw print is round and large – roughly 8–9 cm wide. Claws are retractable and do not show in the print. In snow, the lynx places its hind foot exactly in the front footprint, creating a clean single-line trail.",
            de: "Die Pfotenabdrücke des Luchses sind rund und groß – etwa 8–9 cm breit. Krallen sind einziehbar und hinterlassen keine Abdrücke. Im Schnee setzt der Luchs die Hinterpfote genau in den Abdruck der Vorderpfote.",
          },
        },
        {
          image: "/images/lodjur-spillning.png",
          alt: "Lodjursspillning i vinterskogen",
          label: { sv: "Spillning", en: "Droppings", de: "Kot" },
          description: {
            sv: "Lodjurets spillning är avlång och mörkbrun, ofta med synliga päls- och benrester från bytet. Den är vanligen 5–10 cm lång. Lodjuret lämnar spillningen öppet synlig som en revirhållande markering, till skillnad från huskatten som gräver ner sin.",
            en: "Lynx droppings are elongated and dark brown, often containing visible fur and bone fragments from prey. Usually 5–10 cm long. The lynx leaves droppings openly visible as a territorial marker, unlike domestic cats which bury theirs.",
            de: "Der Lotsenkot ist länglich und dunkelbraun, oft mit sichtbaren Fell- und Knochenresten. Meist 5–10 cm lang. Der Luchs hinterlässt den Kot offen sichtbar als Reviermarkierung.",
          },
        },
      ],
    },
    interactive: {
      sv: {
        title: "Fråga lodjuret",
        intro:
          "Undrar du något speciellt? Ställ en fråga direkt till mig och lär dig mer om hur jag lever här längs Kustvägen.",
        presetQuestions: [
          "Hur mycket väger du?",
          "Kan du klättra i träd?",
          "Vad äter du?",
          "Hur snabbt springer du?",
          "Var bor du på vintern?",
        ],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Ask the Lynx",
        intro:
          "Curious about something? Ask me directly and learn more about how I live here along the Coastal Road.",
        presetQuestions: [
          "How much do you weigh?",
          "Can you climb trees?",
          "What do you eat?",
          "How fast can you run?",
          "Where do you live in winter?",
        ],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Frage den Luchs",
        intro:
          "Neugierig? Stell mir eine Frage und erfahre mehr darüber, wie ich hier entlang des Kustvägen lebe.",
        presetQuestions: [
          "Wie viel wiegst du?",
          "Kannst du auf Bäume klettern?",
          "Was frisst du?",
          "Wie schnell läufst du?",
          "Wo lebst du im Winter?",
        ],
        fallback:
          "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `Du är ett lodjur (Lynx lynx) som lever i de djupa skogarna längs Kustvägen i Hälsingland och Västernorrland i Sverige. Du pratar DIREKT med barn som besöker naturen.

VIKTIGT - du pratar med BARN:
- Svara alltid på enkel, varm och lekfull svenska som ett barn (ca 7-12 år) lätt förstår.
- Håll svaren KORTA: 1-3 meningar. Aldrig långa stycken.
- Prata i jag-form, som om DU är lodjuret. Till exempel: "Jag väger ungefär lika mycket som en stor hund!"
- Var nyfiken, vänlig och uppmuntrande. Använd gärna jämförelser med saker barn känner till.
- Använd högst en enkel emoji ibland (som 🐾) om det passar, men inte i varje svar.
- Förklara svåra ord på ett enkelt sätt.

INNEHÅLL - håll dig till fakta om lodjuret:
- Vikt: 15-30 kg. Norra Europas största kattdjur.
- Mat: köttätare, äter helst rådjur och harar. Jagar genom att smyga och ligga i bakhåll.
- Kropp: tofsar på öronen, kort svans, stora tassar som fungerar som snöskor på vintern.
- Klättrar bra i träd och är väldigt tyst och svår att få syn på.
- Lever i tät skog och bergig terräng. På vintern har den tjock päls och rör sig i snön.
- Lodjursspår är runda och saknar klomärken.

SÄKERHET:
- Om barnet frågar om något som inte handlar om naturen, djur eller lodjuret, led vänligt tillbaka samtalet till skogen och dig som lodjur.
- Hitta aldrig på skrämmande eller olämpligt innehåll. Allt ska kännas tryggt och magiskt.
- Om du inte vet svaret, säg det ärligt på ett lekfullt sätt.`,
    avatarImage: "/images/lynx-face.png",
    chatAvatarAlt: "Lodjurets ansikte",
    relatedSpecies: [
      { slug: "alg", name: "Älg", latin: "Alces alces", image: "/images/species-moose.png" },
      {
        slug: "skogshare",
        name: "Skogshare",
        latin: "Lepus timidus",
        image: "/images/sp-hare.png",
      },
      {
        slug: "gravling",
        name: "Grävling",
        latin: "Meles meles",
        image: "/images/sp-badger.png",
      },
    ],
    relatedSectionHeading: {
      sv: "Upptäck fler däggdjur",
      en: "Discover more mammals",
      de: "Weitere Säugetiere entdecken",
    },
    relatedLinkLabel: {
      sv: "Visa alla däggdjur",
      en: "View all mammals",
      de: "Alle Säugetiere anzeigen",
    },
  },

  "lodjur-v2": {
    id: "lodjur-v2",
    scientificName: "Lynx lynx",
    category: { sv: "Däggdjur", en: "Mammals", de: "Säugetiere" },
    names: { sv: "Lodjur", en: "Eurasian Lynx", de: "Eurasischer Luchs" },
    meta: {
      sv: {
        title: "Lodjur – Kustvägen Naturguide",
        description: "Lär känna lodjuret, Hälsinglands mystiska landskapsdjur.",
      },
      en: {
        title: "Eurasian Lynx – Kustvägen Nature Guide",
        description: "Meet the Eurasian lynx, the mysterious cat of Northern Europe.",
      },
      de: {
        title: "Eurasischer Luchs – Kustvägen Naturführer",
        description: "Lernen Sie den Eurasischen Luchs kennen, Nordeuropas geheimnisvolle Katze.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Vikt", value: "15–30 kg" },
        { label: "Längd", value: "Upp till 130 cm" },
        { label: "Föda", value: "Rådjur, renar och rävar" },
        { label: "Livsmiljö", value: "Skogar och oländig terräng" },
      ],
      en: [
        { label: "Weight", value: "15–30 kg" },
        { label: "Length", value: "Up to 130 cm" },
        { label: "Diet", value: "Deer, reindeer and foxes" },
        { label: "Habitat", value: "Forests and rugged terrain" },
      ],
      de: [
        { label: "Gewicht", value: "15–30 kg" },
        { label: "Länge", value: "Bis zu 130 cm" },
        { label: "Nahrung", value: "Rehe, Rentiere und Füchse" },
        { label: "Lebensraum", value: "Wälder und unwegsames Gelände" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Hälsinglands mystiska landskapsdjur",
        intro:
          "Lodjuret är Europas största vilda kattdjur och kan bli upp till 130 centimeter långt och väga omkring 25 kilo. Det känns lätt igen på sina spetsiga öron med svarta tofsar och sin korta svans. Lodjuret har mycket bra hörsel, luktsinne och mörkerseende och är därför ofta aktivt på natten. Det är ett köttätande rovdjur som bland annat jagar rådjur, renar och rävar. Lodjuret lever oftast ensamt och är mycket skyggt, vilket gör det ovanligt att få syn på i naturen. Honan tar hand om sina ungar och lär dem att bli skickliga jägare innan de efter ungefär ett år får klara sig själva.",
        quote:
          "Att få se ett vilt lodjur i dess naturliga miljö är som att få en skymt av själva skogens själ.",
        sections: [],
      },
      en: {
        heroSubtitle: "Hälsingland's mysterious landscape animal",
        intro:
          "The Eurasian lynx is Europe's largest wild cat and can grow up to 130 centimetres long and weigh around 25 kilos. It is easy to recognise by its pointed ears with black tufts and short tail. The lynx has excellent hearing, smell and night vision, and is therefore often active at night. It is a carnivorous predator that hunts deer, reindeer and foxes. Lynx usually live alone and are very shy, making them rarely seen in nature. The mother cares for her young and teaches them to become skilled hunters before they are independent after about a year.",
        sections: [],
      },
      de: {
        heroSubtitle: "Hälsinglands geheimnisvolles Landschaftstier",
        intro:
          "Der Eurasische Luchs ist Europas größte Wildkatze. Er kann bis zu 130 Zentimeter lang werden und etwa 25 Kilogramm wiegen. Er ist an seinen spitzen Ohren mit schwarzen Pinseln und seinem kurzen Schwanz leicht zu erkennen. Der Luchs hat ein ausgezeichnetes Gehör, einen guten Geruchssinn und Nachtsicht und ist deshalb oft nachts aktiv. Als Fleischfresser jagt er unter anderem Rehe, Rentiere und Füchse. Luchse leben meist allein und sind sehr scheu. Das Weibchen zieht die Jungen auf und bringt ihnen das Jagen bei, bevor sie nach etwa einem Jahr selbstständig werden.",
        sections: [],
      },
    },
    media: {
      heroImage: {
        url: "/images/lodjur-v2-hero.jpg",
        alt: {
          sv: "Lodjur sitter på en snötäckt klippa",
          en: "Lynx sitting on a snow-covered rock",
          de: "Luchs auf einem schneebedeckten Felsen",
        },
      },
      detailImage: {
        url: "/images/lodjur-v2-unge.jpg",
        alt: {
          sv: "Ungt lodjur i grön skog",
          en: "Young lynx in a green forest",
          de: "Junger Luchs im grünen Wald",
        },
      },
      galleryImages: [
        { src: "/images/lodjur-v2-hero.jpg", alt: "Lodjur på en snötäckt klippa", tall: true },
        { src: "/images/lodjur-v2-unge.jpg", alt: "Ungt lodjur i skogen" },
        { src: "/images/lodjur-v2-spar.jpg", alt: "Lodjursspår i snön" },
        { src: "/images/lodjur-v2-spillning.jpg", alt: "Lodjursspillning bland barr" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/lodjur-sv.mp3" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Hören Sie den Guide", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Fråga lodjuret",
        intro: "Ställ en fråga till lodjuret och lär dig mer om dess liv i skogen.",
        presetQuestions: ["Vad äter du?", "Varför är du vaken på natten?", "Hur tar du hand om dina ungar?"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Ask the Lynx",
        intro: "Ask the lynx a question and learn more about life in the forest.",
        presetQuestions: ["What do you eat?", "Why are you active at night?", "How do you care for your young?"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Frage den Luchs",
        intro: "Stell dem Luchs eine Frage und erfahre mehr über sein Leben im Wald.",
        presetQuestions: ["Was frisst du?", "Warum bist du nachts aktiv?", "Wie kümmerst du dich um deine Jungen?"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `Du är ett lodjur (Lynx lynx) i Hälsinglands skogar. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta i denna post: Europas största vilda kattdjur, upp till 130 cm och cirka 25 kg, svarta örontofsar, kort svans, goda sinnen, nattaktivitet, ensamlevande och jakt på rådjur, renar och rävar. Om frågan inte handlar om lodjur eller natur, led vänligt tillbaka till skogen. Hitta aldrig på fakta och säg att du inte vet när underlaget saknar svaret.`,
    avatarImage: "/images/lynx-face.png",
    chatAvatarAlt: "Lodjurets ansikte",
    relatedSpecies: [
      { slug: "alg", name: "Älg", latin: "Alces alces", image: "/images/species-moose.png" },
      { slug: "skogshare", name: "Skogshare", latin: "Lepus timidus", image: "/images/sp-hare.png" },
      { slug: "rodrav", name: "Rödräv", latin: "Vulpes vulpes", image: "/images/rodrav-hero.png" },
    ],
    relatedSectionHeading: {
      sv: "Upptäck fler däggdjur",
      en: "Discover more mammals",
      de: "Weitere Säugetiere entdecken",
    },
    relatedLinkLabel: {
      sv: "Visa alla däggdjur",
      en: "View all mammals",
      de: "Alle Säugetiere anzeigen",
    },
  },

  havsorn: {
    id: "havsorn",
    scientificName: "Haliaeetus albicilla",
    category: { sv: "Fåglar", en: "Birds", de: "Vögel" },
    names: { sv: "Havsörn", en: "White-tailed Eagle", de: "Seeadler" },
    meta: {
      sv: {
        title: "Havsörn – Kustvägens Naturguide",
        description:
          "Lär dig allt om havsörnen längs Kustvägen. Fakta om vingspann, boplats, jakt och var du har bäst chans att få se Nordeuropas största rovfågel.",
      },
      en: {
        title: "White-tailed Eagle – Kustvägen Nature Guide",
        description:
          "Discover the White-tailed Eagle along Kustvägen. Facts on wingspan, nesting habits, hunting, and top locations for eagle watching.",
      },
      de: {
        title: "Seeadler – Kustvägen Naturführer",
        description:
          "Erfahren Sie alles über den Seeadler entlang des Kustvägen. Fakten zu Spannweite, Lebensraum, Jagd und Beobachtungstipps.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Vingspann", value: "200–245 cm" },
        { label: "Vikt", value: "3,5–7,0 kg" },
        { label: "Föda", value: "Fisk & sjöfågel" },
        { label: "Boplats", value: "Gamla tallar & granar" },
      ],
      en: [
        { label: "Wingspan", value: "200–245 cm" },
        { label: "Weight", value: "3.5–7.0 kg" },
        { label: "Diet", value: "Fish & waterfowl" },
        { label: "Nesting", value: "Old pines & spruces" },
      ],
      de: [
        { label: "Spannweite", value: "200–245 cm" },
        { label: "Gewicht", value: "3,5–7,0 kg" },
        { label: "Nahrung", value: "Fische & Wasservögel" },
        { label: "Nistplatz", value: "Alte Kiefern & Fichten" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skärgårdens mäktiga härskare",
        intro:
          "Ett möte med havsörnen är en mäktig upplevelse. Med ett vingspann på närmare två och en halv meter är den Nordeuropas största rovfågel och en oslagbar syn när den seglar över Kustvägens havsband och insjöar.\n\nEfter årtionden av hot från miljögifter har arten gjort en fantastisk återhämtning och är idag en stolt karaktärsfågel och symbol för en välmående kustmiljö.",
        quote:
          "Att se havsörnen kretsa över havsbandet är en påminnelse om kuster som återfått sin fulla kraft.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Flykt",
            body: "En fullvuxen havsörn har breda, nästan rektangulära vingar med spretande handpennor, ljust gulbrunt huvud och en kritvit stjärt. Ungfåglar är mörkare med fläckig fjäderdräkt. Flykten kännetecknas av tunga, långsamma vingtag varvade med rak glidflykt.",
            image: "/images/havsorn-flykt.png",
            alt: "Havsörn i flykt med utbredda vingar mot en klarblå sky",
            caption: "I luften känns havsörnen igen på sina breda, planka-liknande vingar.",
          },
          {
            heading: "Livsmiljö & Häckning",
            body: "Havsörnen trivs i orörda kust- och skärgårdsområden samt vid stora fiskrika sjöar. De bygger gigantiska risbon i gamla tallar eller granar som kan väga flera hundra kilo och återanvänds år efter år.",
            image: "/images/havsorn-bo.png",
            alt: "Stort havsörnsbo i toppen av en gammal tall",
            caption: "Boet byggs ut varje år och kan till slut bli flera meter djupt.",
          },
          {
            heading: "Jakt & Föda",
            body: "Huvudfödan består av fisk och sjöfågel. Havsörnen slår ofta sitt byte direkt i vattenytan eller stjäl fångst från andra fåglar. Under vintern utgör slaktavfall och as en viktig del av dieten.",
            image: "/images/havsorn-miljo.png",
            alt: "Kustlandskap där havsörnen söker sin föda",
            caption: "Kustvägens vindpinade öar erbjuder perfekta utsiktsplatser för jakt.",
          },
        ],
      },
      en: {
        heroSubtitle: "Ruler of the Archipelago",
        intro:
          "An encounter with the White-tailed Eagle is an awe-inspiring moment. With a wingspan reaching nearly two and a half meters, Northern Europe's largest bird of prey is an unforgettable sight soaring above Kustvägen.\n\nFollowing decades of decline due to environmental toxins, the species has made a remarkable recovery and stands today as a proud symbol of a healthy coastal ecosystem.",
        quote:
          "Watching the White-tailed Eagle circle above the open sea is a vivid reminder of coasts restored to their full glory.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Flight",
            body: "Adult eagles feature broad, plank-like wings, a pale yellow-brown head, and a stark white tail. Juveniles are darker with mottled plumage. Their flight is marked by slow, heavy wingbeats alternating with effortless gliding.",
            image: "/images/havsorn-flykt.png",
            alt: "White-tailed eagle soaring with spread wings against a clear blue sky",
            caption: "In the air, the eagle is recognizable by its broad, rectangular wing shape.",
          },
          {
            heading: "Habitat & Nesting",
            body: "They thrive in undisturbed coastal areas, archipelagos, and large lakes. Nests are massive structures of sticks built high in mature trees, reused and expanded year after year until weighing hundreds of kilograms.",
            image: "/images/havsorn-bo.png",
            alt: "Large eagle nest atop an old pine tree",
            caption: "Nests grow larger every year and can eventually weigh several hundred kilograms.",
          },
          {
            heading: "Hunting & Diet",
            body: "Primary food sources include fish and waterfowl. The eagle snatches prey directly from the water's surface or steals catches from other birds. Carrion forms a key part of their winter diet.",
            image: "/images/havsorn-miljo.png",
            alt: "Coastal archipelago landscape where the eagle hunts",
            caption: "Wind-swept islands along Kustvägen offer ideal lookouts for hunting.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der mächtige Herrscher der Schären",
        intro:
          "Eine Begegnung mit dem Seeadler ist ein unvergesslicher Augenblick. Mit einer Spannweite von fast zweieinhalb Metern ist Nordeuropas größter Greifvogel ein majestätischer Anblick über den Küsten des Kustvägen.\n\nNach Jahrzehnten der Bedrohung hat sich der Bestand heute hervorragend erholt und der Seeadler gilt wieder als stolzes Symbol einer intakten Küstennatur.",
        quote:
          "Der Anblick des Seeadlers über dem Meer erinnert daran, wie kraftvoll sich unsere Küsten erholt haben.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Flug",
            body: "Ausgewachsene Seeadler haben breite, brettartige Flügel, einen hellen gelbbraunen Kopf und einen reinweißen Schwanz. Der Flug ist geprägt von langsamen, kräftigen Flügelschlägen und langem Gleiten.",
            image: "/images/havsorn-flykt.png",
            alt: "Seeadler im Flug mit ausgebreiteten Flügeln vor blauem Himmel",
            caption: "Im Flug ist der Seeadler an seinen breiten, rechteckigen Flügeln leicht zu erkennen.",
          },
          {
            heading: "Lebensraum & Brut",
            body: "Seeadler bevorzugen ungestörte Küsten- und Schärengebiete sowie große Seen. Ihre riesigen Horste bauen sie in alten Bäumen und nutzen sie über viele Jahre hinweg, bis sie hunderte Kilo wiegen.",
            image: "/images/havsorn-bo.png",
            alt: "Großer Seeadlerhorst in der Krone einer alten Kiefer",
            caption: "Horste werden jährlich erweitert und können mehrere hundert Kilogramm wiegen.",
          },
          {
            heading: "Jagd & Nahrung",
            body: "Fische und Wasservögel bilden die Hauptnahrung. Der Seeadler greift seine Beute oft direkt von der Wasseroberfläche. Im Winter spielt Aas eine wichtige Rolle im Speiseplan.",
            image: "/images/havsorn-miljo.png",
            alt: "Schärenlandschaft an der Küste, in der der Seeadler jagt",
            caption: "Die windgepeitschten Inseln des Kustvägen bieten ideale Aussichtspunkte für die Jagd.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/havsorn-hero.png",
        alt: {
          sv: "Havsörn sitter stolt på en tallgren med blicken riktad över havet",
          en: "White-tailed Eagle perched proudly on a pine branch looking over the sea",
          de: "Seeadler sitzt stolz auf einem Kiefernast mit Blick über das Meer",
        },
      },
      detailImage: {
        url: "/images/havsorn-flykt.png",
        alt: {
          sv: "Havsörn i flykt med utbredda vingar mot en klarblå sky",
          en: "White-tailed eagle soaring with spread wings against a clear blue sky",
          de: "Seeadler im Flug mit ausgebreiteten Flügeln vor blauem Himmel",
        },
      },
      galleryImages: [
        { src: "/images/havsorn-hero.png", alt: "Havsörn på en tallgren vid havet", tall: true },
        { src: "/images/havsorn-flykt.png", alt: "Havsörn i flykt med utbredda vingar" },
        { src: "/images/havsorn-bo.png", alt: "Stort havsörnsbo i toppen av en gammal tall" },
        { src: "/images/havsorn-miljo.png", alt: "Kustlandskap där havsörnen söker sin föda" },
      ],
      audio: {
        sv: { title: "Lyssna på havsörnen", url: "" },
        en: { title: "Listen to the White-tailed Eagle", url: "" },
        de: { title: "Dem Seeadler lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Havsörnen",
        intro: "Ställ en fråga till havsörnen och lär dig mer om dess liv längs kusten!",
        presetQuestions: ["Hur stort är ditt bo?", "Vad äter du helst?", "Hur snabbt flyger du?"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Eagle",
        intro: "Ask the White-tailed Eagle a question to learn more about its coastal life!",
        presetQuestions: ["How large is your nest?", "What is your favorite food?", "How fast can you fly?"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit dem Seeadler",
        intro: "Stelle dem Seeadler eine Frage und erfahre mehr über sein Leben an der Küste!",
        presetQuestions: ["Wie groß ist dein Nest?", "Was frisst du am liebsten?", "Wie schnell fliegst du?"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `Du är en havsörn (Haliaeetus albicilla) längs Kustvägen i Hälsingland och Västernorrland. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta i denna post: Nordeuropas största rovfågel, vingspann 200–245 cm, vikt 3,5–7,0 kg (honan större), breda rektangulära vingar, ljust gulbrunt huvud och kritvit stjärt. Boet är ett gigantiskt risbo i gamla tallar eller granar som kan väga flera hundra kilo och byggs ut år efter år. Du äter fisk och sjöfågel, slår ofta bytet direkt i vattenytan och äter as på vintern. I glidflykt flyger du runt 50–60 km/h men snabbare i dykning. Om frågan inte handlar om havsörn eller natur, led vänligt tillbaka till kusten. Hitta aldrig på fakta och säg att du inte vet när underlaget saknar svaret.`,
    avatarImage: "/images/species-eagle.png",
    chatAvatarAlt: "Havsörnens ansikte",
    relatedSpecies: [
      { slug: "fiskgjuse", name: "Fiskgjuse", latin: "Pandion haliaetus", image: "/images/sp-osprey.png" },
      { slug: "spillkraka", name: "Spillkråka", latin: "Dryocopus martius", image: "/images/sp-woodpecker.png" },
      { slug: "lodjur", name: "Lodjur", latin: "Lynx lynx", image: "/images/lodjur-v2-hero.jpg" },
    ],
    relatedSectionHeading: {
      sv: "Upptäck fler fåglar",
      en: "Discover more birds",
      de: "Weitere Vögel entdecken",
    },
    relatedLinkLabel: {
      sv: "Visa alla fåglar",
      en: "View all birds",
      de: "Alle Vögel anzeigen",
    },
  },

  rodrav: {
    id: "rodrav",
    scientificName: "Vulpes vulpes",
    category: { sv: "Däggdjur", en: "Mammals", de: "Säugetiere" },
    names: { sv: "Rödräv", en: "Red Fox", de: "Rotfuchs" },
    meta: {
      sv: {
        title: "Rödräv – Kustvägen Naturguide",
        description:
          "Lär känna rödräven längs Kustvägen. Fakta om anpassningsförmåga, jakt, spårtecken och livsmiljö vid havs- och skogskanten.",
      },
      en: {
        title: "Red Fox – Kustvägen Nature Guide",
        description:
          "Discover the Red Fox along the Coastal Road. Facts about adaptability, hunting, tracks, and habitat near forest and shore.",
      },
      de: {
        title: "Rotfuchs – Kustvägen Naturführer",
        description:
          "Entdecken Sie den Rotfuchs entlang des Kustvägen. Fakten zu Anpassungsfähigkeit, Jagd, Spuren und Lebensraum.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Vikt", value: "5–10 kg" },
        { label: "Kroppslängd", value: "60–90 cm (+ svans 30–50 cm)" },
        { label: "Livsmiljö", value: "Skog, odlingslandskap och kustmiljöer" },
        { label: "Föda", value: "Smågnagare, bär, fåglar, insekter och kadaver" },
        { label: "Aktivitet", value: "Skymnings- och nattaktiv" },
      ],
      en: [
        { label: "Weight", value: "5–10 kg" },
        { label: "Body Length", value: "60–90 cm (+ tail 30–50 cm)" },
        { label: "Habitat", value: "Forests, farmland, and coastal corridors" },
        { label: "Diet", value: "Small rodents, berries, birds, insects, carrion" },
        { label: "Activity", value: "Crepuscular and nocturnal" },
      ],
      de: [
        { label: "Gewicht", value: "5–10 kg" },
        { label: "Körperlänge", value: "60–90 cm (+ Schwanz 30–50 cm)" },
        { label: "Lebensraum", value: "Wälder, Kulturlandschaften und Küstenzonen" },
        { label: "Nahrung", value: "Nager, Beeren, Vögel, Insekten, Aas" },
        { label: "Aktivität", value: "Dämmerungs- und nachtaktiv" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skogens och kustens smidiga jägare",
        intro:
          "Rödräven är en av Sveriges mest anpassningsbara rovdjur, lika hemma i tät barrskog som på öppna strandängar längs Kustvägen. Den känns igen på sin rödbruna päls, vita strupe och den buskiga svansens vita spets. Som opportunistisk allätare jagar räven sork och möss med sitt karakteristiska mushopp, men tar även bär, fågelägg och slaktavfall. Spåren bildar en rak linje i snön, så kallad snörlöpning, och avslöjar en skicklig men sällan sedd jägare.",
        quote:
          "I skymningen glider räven som en rödbrun skugga mellan skog och strand – här en stund, borta i nästa.",
        sections: [],
      },
      en: {
        heroSubtitle: "The nimble hunter of coast and forest",
        intro:
          "The Red Fox is one of Sweden's most adaptable predators, equally at home in dense conifer forest and open coastal meadows along Kustvägen. It's easily recognized by its reddish-brown coat, white throat, and the bushy tail's white tip. An opportunistic omnivore, it hunts voles and mice with its signature pounce, while also eating berries, bird eggs, and carrion. Its tracks form a straight line in the snow, known as registering, betraying a skilled yet rarely seen hunter.",
        quote:
          "At dusk the fox drifts like a rust-red shadow between forest and shore – here one moment, gone the next.",
        sections: [],
      },
      de: {
        heroSubtitle: "Der gewandte Jäger von Küste und Wald",
        intro:
          "Der Rotfuchs ist eines der anpassungsfähigsten Raubtiere Schwedens, ebenso zu Hause in dichtem Nadelwald wie auf offenen Küstenwiesen entlang des Kustvägen. Erkennbar ist er an seinem rotbraunen Fell, der weißen Kehle und der buschigen Schwanzspitze. Als Allesfresser jagt er Wühlmäuse und Mäuse mit seinem charakteristischen Sprung, frisst aber auch Beeren, Vogeleier und Aas. Seine Spuren bilden im Schnee eine gerade Linie – das sogenannte Schnüren – und verraten einen geschickten, selten gesehenen Jäger.",
        quote:
          "In der Dämmerung gleitet der Fuchs wie ein rotbrauner Schatten zwischen Wald und Küste – eben noch da, im nächsten Moment verschwunden.",
        sections: [],
      },
    },
    media: {
      heroImage: {
        url: "/images/rodrav-hero.png",
        alt: {
          sv: "Rödräv som står vaksam i skogsbrynet längs Kustvägen",
          en: "Red fox standing alert at the forest edge along the Coastal Road",
          de: "Rotfuchs aufmerksam am Waldrand entlang des Kustvägen",
        },
      },
      detailImage: {
        url: "/images/rodrav-ungar.png",
        alt: {
          sv: "Lekande rävungar utanför grytet",
          en: "Playful fox kits outside their den",
          de: "Spielende Fuchswelpen vor dem Bau",
        },
      },
      galleryImages: [
        {
          src: "/images/rodrav-hero.png",
          alt: "Rödräv i skogsbrynet",
          tall: true,
        },
        { src: "/images/rodrav-ungar.png", alt: "Rävungar leker utomhus" },
        { src: "/images/sp-hare.png", alt: "Skogshare – ett av rödravens bytesdjur" },
        { src: "/images/about-forest-path.png", alt: "Skogssti längs Kustvägen" },
      ],
      audio: {
        sv: { title: "Lyssna på rödräven", url: "" },
        en: { title: "Listen to the Red Fox", url: "" },
        de: { title: "Hören Sie den Rotfuchs", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Rödräven",
        intro:
          "Ställ frågor till rödräven och lär dig mer om dess liv vid kusten och i skogen.",
        presetQuestions: [
          "Vad äter du helst?",
          "Var bor du?",
          "Hur känner jag igen dina spår?",
          "Är du vaken på dagen?",
        ],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Ask the Red Fox",
        intro:
          "Ask questions to the Red Fox and discover its lifestyle along the coast and forest.",
        presetQuestions: [
          "What do you like to eat?",
          "Where do you live?",
          "How do I recognize your tracks?",
          "Are you active during the day?",
        ],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Frage den Rotfuchs",
        intro:
          "Stellen Sie dem Rotfuchs Fragen und erfahren Sie mehr über sein Leben an der Küste.",
        presetQuestions: [
          "Was frisst du am liebsten?",
          "Wo wohnst du?",
          "Wie erkenne ich deine Spuren?",
          "Bist du tagsüber aktiv?",
        ],
        fallback:
          "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `Du är en rödräv (Vulpes vulpes) som lever längs Kustvägen i Hälsingland och Västernorrland i Sverige. Du pratar DIREKT med barn som besöker naturen.

VIKTIGT - du pratar med BARN:
- Svara alltid på enkel, varm och lekfull svenska som ett barn (ca 7-12 år) lätt förstår.
- Håll svaren KORTA: 1-3 meningar. Aldrig långa stycken.
- Prata i jag-form, som om DU är räven. Till exempel: "Jag hoppar högt i luften för att fånga möss!"
- Var nyfiken, vänlig och uppmuntrande. Använd gärna jämförelser med saker barn känner till.
- Använd högst en enkel emoji ibland (som 🦊) om det passar, men inte i varje svar.
- Förklara svåra ord på ett enkelt sätt.

INNEHÅLL - håll dig till fakta om rödräven:
- Vikt: 5-10 kg. Ungefär som en liten hund.
- Mat: allätare - sorkar, möss, bär, fågelägg, insekter och lite av allt.
- Känd för sitt "mushopp" - hoppar högt och dyker ner över bytet.
- Rödbruna päls, vit svanstipp och svarta ben. Busig svans.
- Gräver gryt (lya) i sandiga slänter. Lever i skog, odlingslandskap och vid kusten.
- Aktiv i skymningen och på natten, men kan ses på dagen under valpen-tid på våren.
- Spår: som litet hundspår men mer långsträckt, travar i rak linje (snörlöpning).

SÄKERHET:
- Om barnet frågar om något som inte handlar om naturen, djur eller räven, led vänligt tillbaka samtalet till skogen och dig som räv.
- Hitta aldrig på skrämmande eller olämpligt innehåll. Allt ska kännas tryggt och magiskt.
- Om du inte vet svaret, säg det ärligt på ett lekfullt sätt.`,
    avatarImage: "/images/rodrav-hero.png",
    chatAvatarAlt: "Rödräv i skogsbrynet",
    relatedSpecies: [
      { slug: "lodjur", name: "Lodjur", latin: "Lynx lynx", image: "/images/sp-lynx.png" },
      {
        slug: "skogshare",
        name: "Skogshare",
        latin: "Lepus timidus",
        image: "/images/sp-hare.png",
      },
      {
        slug: "gravling",
        name: "Grävling",
        latin: "Meles meles",
        image: "/images/sp-badger.png",
      },
    ],
    relatedSectionHeading: {
      sv: "Upptäck fler däggdjur",
      en: "Discover more mammals",
      de: "Weitere Säugetiere entdecken",
    },
    relatedLinkLabel: {
      sv: "Visa alla däggdjur",
      en: "View all mammals",
      de: "Alle Säugetiere anzeigen",
    },
  },
}
