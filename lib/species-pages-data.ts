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

  alg: {
    id: "alg",
    scientificName: "Alces alces",
    category: { sv: "Däggdjur", en: "Mammals", de: "Säugetiere" },
    names: { sv: "Älg", en: "Moose / Elk", de: "Elch" },
    meta: {
      sv: {
        title: "Älg – Kustvägen Naturguide",
        description:
          "Lär känna älgen längs Kustvägen. Fakta om Nordens största hjortdjur, dess horn, spår och liv i skogen.",
      },
      en: {
        title: "Moose / Elk – Kustvägen Nature Guide",
        description:
          "Discover the moose along the Coastal Road. Facts about antlers, tracks, and the life of Northern Europe's largest deer species.",
      },
      de: {
        title: "Elch – Kustvägen Naturführer",
        description:
          "Entdecken Sie den Elch entlang des Kustvägen. Fakten zu Geweih, Spuren und dem Leben Nordeuropas größter Hirschart.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Vetenskapligt namn", value: "Alces alces" },
        { label: "Vikt", value: "200–550 kg" },
        { label: "Mankhöjd", value: "1,5–2,1 meter" },
        { label: "Föda", value: "Kvist, bark, löv och vattenväxter" },
        { label: "Kännetecken", value: "Stor storlek, långa ben, mule och horn hos tjuren" },
      ],
      en: [
        { label: "Scientific Name", value: "Alces alces" },
        { label: "Weight", value: "200–550 kg" },
        { label: "Height", value: "1.5–2.1 meters" },
        { label: "Diet", value: "Twigs, bark, leaves, aquatic plants" },
        { label: "Features", value: "Massive size, long legs, bulbous snout, antlers on males" },
      ],
      de: [
        { label: "Wissenschaftlicher Name", value: "Alces alces" },
        { label: "Gewicht", value: "200–550 kg" },
        { label: "Schulterhöhe", value: "1,5–2,1 Meter" },
        { label: "Nahrung", value: "Zweige, Rinde, Blätter, Wasserpflanzen" },
        { label: "Merkmale", value: "Enorme Größe, lange Beine, markante Schnauze, Geweih bei Bullen" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skogens konung",
        intro:
          "Älgen är det största nu levande hjortdjuret och en av de mest ikoniska symbolerna för den nordiska skogen. Den är lätt att känna igen på sin enorma storlek, de långa gråvita benen, den karakteristiska överläppen (mulen) och hakskägget. Tjuren bär ofta en imponerande hornkrona, antingen skovelhorn eller stånghorn, som den fäller varje vinter och bygger upp på nytt under våren och sommaren.\n\nLängs Kustvägens skogar, myrar och sjöar trivs älgen utmärkt. Under sommaren föredrar den löv, örter och vattenväxter, och ses ofta vada i grunda sjöar för att svalka sig och beta. Under vintern övergår dieten nästan uteslutande till kvistar av tall, sälg, asp och björk.",
        quote:
          "Att möta en älg i det vilda är alltid en magisk upplevelse – skogens konung i sin egen rätt.",
        sections: [],
        detailsGrid: [
          {
            heading: "Beskrivning & Kännetecken",
            body: "Älgen känns lätt igen på sin enorma storlek, de långa gråvita benen och den karakteristiska överläppen. Tjuren bär en imponerande hornkrona som fälls varje vinter och byggs upp på nytt under våren och sommaren.",
            image: "/images/species-moose.png",
            alt: "Älgtjur som betar i kvällsljus",
            caption: "Hornen fälls varje vinter och växer ut på nytt inför hösten.",
          },
          {
            heading: "Livsmiljö & Föda",
            body: "Deras långa ben är perfekt anpassade för att kliva över högt blåbärsris, djup snö och sankmarker. Under sommaren vadar älgen ofta i sjöar för att beta näringsrika vattenväxter.",
            image: "/images/alg-kalv.png",
            alt: "Älgkalv bland blåbärsris i skogen",
            caption: "Älgkon föder vanligtvis en eller två kalvar i maj eller juni.",
          },
          {
            heading: "Spår & Ekologi",
            body: "Trots sin storlek rör sig älgen förvånansvärt tyst i skogen. Älgen spelar en viktig roll i skogens ekosystem och fungerar som en viktig födokälla för stora rovdjur som varg och björn.",
            image: "/images/sp-moosetracks.png",
            alt: "Älgspår i nysnö",
            caption: "Älgens spår är stora och djupt nedtryckta i marken.",
          },
        ],
      },
      en: {
        heroSubtitle: "King of the Forest",
        intro:
          "The moose, known as elk in Europe, is the largest living deer species and an iconic symbol of the Nordic forest. It is easily recognized by its massive size, long grayish-white legs, bulbous snout, and a bell of skin under its throat. The bull carries an impressive set of antlers that are shed every winter and regrown during the spring and summer.\n\nAlong the forests, bogs, and lakes of Kustvägen, the moose thrives. During summer, it prefers leaves, herbs, and aquatic plants, often seen wading in shallow lakes to feed and cool off. In winter, its diet shifts almost entirely to twigs and bark from pine, willow, and birch.",
        quote:
          "Meeting a moose in the wild is always a magical experience – the true king of the forest.",
        sections: [],
        detailsGrid: [
          {
            heading: "Description & Characteristics",
            body: "The moose is easily recognized by its massive size, long grayish-white legs, and bulbous snout. The bull carries an impressive set of antlers that is shed every winter and regrown during spring and summer.",
            image: "/images/species-moose.png",
            alt: "Bull moose grazing in evening light",
            caption: "Antlers are shed every winter and regrow again by autumn.",
          },
          {
            heading: "Habitat & Diet",
            body: "Their long legs are perfectly adapted for stepping over dense brush, deep snow, and marshlands. During summer, moose are often seen wading in lakes to graze on nutrient-rich aquatic plants.",
            image: "/images/alg-kalv.png",
            alt: "Moose calf among blueberry shrubs in the forest",
            caption: "Cows typically give birth to one or two calves in May or June.",
          },
          {
            heading: "Tracks & Ecology",
            body: "Despite their huge size, moose move surprisingly quietly through the woods. As a keystone species, they are an important food source for large predators like wolves and brown bears.",
            image: "/images/sp-moosetracks.png",
            alt: "Moose tracks in fresh snow",
            caption: "Moose tracks are large and press deeply into the soil.",
          },
        ],
      },
      de: {
        heroSubtitle: "König des Waldes",
        intro:
          "Der Elch ist die größte heute lebende Hirschart und ein ikonisches Symbol der nordischen Wälder. Er ist leicht an seiner enormen Größe, den langen, grauweißen Beinen, der charakteristischen überhängenden Oberlippe und dem Kehlsack zu erkennen. Der Bulle trägt oft ein beeindruckendes Schaufel- oder Stangengeweih, das er jeden Winter abwirft und im Frühjahr und Sommer neu bildet.\n\nIn den Wäldern, Mooren und Seen entlang der Kustvägen fühlt sich der Elch besonders wohl. Im Sommer frisst er bevorzugt Laub, Kräuter und Wasserpflanzen. Im Winter besteht seine Nahrung fast ausschließlich aus Zweigen und Rinde von Kiefern, Weiden und Birken.",
        quote:
          "Einem wilden Elch zu begegnen, ist immer ein magisches Erlebnis – der wahre König des Waldes.",
        sections: [],
        detailsGrid: [
          {
            heading: "Beschreibung & Merkmale",
            body: "Der Elch ist leicht an seiner enormen Größe, den langen, grauweißen Beinen und der markanten Schnauze zu erkennen. Der Bulle trägt ein beeindruckendes Geweih, das jeden Winter abgeworfen und im Frühjahr und Sommer neu gebildet wird.",
            image: "/images/species-moose.png",
            alt: "Elchbulle grast im Abendlicht",
            caption: "Das Geweih wird jeden Winter abgeworfen und wächst bis zum Herbst neu.",
          },
          {
            heading: "Lebensraum & Nahrung",
            body: "Seine langen Beine sind perfekt an tiefen Schnee und unwegsames Gelände angepasst. Im Sommer ist der Elch oft beim Waten in Seen zu beobachten, wo er nahrhafte Wasserpflanzen frisst.",
            image: "/images/alg-kalv.png",
            alt: "Elchkalb zwischen Heidelbeersträuchern im Wald",
            caption: "Die Elchkuh bringt meist im Mai oder Juni ein bis zwei Kälber zur Welt.",
          },
          {
            heading: "Spuren & Ökologie",
            body: "Trotz seiner enormen Größe bewegt sich der Elch erstaunlich leise durch den Wald. Als Schlüsselart ist er eine wichtige Nahrungsquelle für große Raubtiere wie Wölfe und Bären.",
            image: "/images/sp-moosetracks.png",
            alt: "Elchspuren im frischen Schnee",
            caption: "Die Spuren des Elchs sind groß und tief in den Boden gedrückt.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/hero-forest-moose.png",
        alt: {
          sv: "Älg som står i en dimmig morgonskog",
          en: "Moose standing in a foggy morning forest",
          de: "Ein Elch steht in einem nebligen Morgenwald",
        },
      },
      detailImage: {
        url: "/images/alg-hero.png",
        alt: {
          sv: "Älgtjur i solbelyst skogsmark",
          en: "Bull moose in sunlit woodland",
          de: "Elchbulle in sonnendurchflutetem Waldgebiet",
        },
      },
      galleryImages: [
        {
          src: "/video/alg-naromradet.mp4",
          alt: "Video med älg från närområdet",
          video: "/video/alg-naromradet.mp4",
          tall: true,
        },
        { src: "/images/alg-hero.png", alt: "En ståtlig älgtjur i svensk barrskog" },
        { src: "/images/species-moose.png", alt: "Älg som betar i kvällsljus" },
        { src: "/images/alg-kalv.png", alt: "Älgkalv i gröngräs" },
        { src: "/images/sp-moosetracks.png", alt: "Älgspår i leran" },
        { src: "/images/alg-spillning.png", alt: "Älgspillning i skogen" },
        { src: "/images/hero-forest-moose.png", alt: "Älg i dimmig morgonskog" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/alg_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Guide zuhören", url: "" },
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
          image: "/images/sp-moosetracks.png",
          alt: "Älgspår i nysnö",
          label: { sv: "Spår", en: "Tracks", de: "Spuren" },
          description: {
            sv: "Älgens klövavtryck är stora, ofta 12–17 cm långa, och tydligt kluvna i två delar. I mjuk mark eller snö syns även avtryck av de bakre klöveggarna högre upp på foten.",
            en: "Moose hoof prints are large, often 12–17 cm long, and clearly split into two parts. In soft ground or snow, the dew claws higher on the foot may also leave a mark.",
            de: "Die Hufabdrücke des Elchs sind groß, oft 12–17 cm lang, und deutlich zweigeteilt. In weichem Boden oder Schnee sind manchmal auch die höher sitzenden Afterklauen zu erkennen.",
          },
        },
        {
          image: "/images/alg-spillning.png",
          alt: "Älgspillning i skogen",
          label: { sv: "Spillning", en: "Droppings", de: "Kot" },
          description: {
            sv: "Älgens spillning består av ovala, mörkbruna klumpar, ofta i högar av 20–30 stycken. På sommaren är den mjukare och kladdigare på grund av dieten med löv och örter.",
            en: "Moose droppings consist of oval, dark brown pellets, often in piles of 20–30. In summer they are softer and stickier due to a diet of leaves and herbs.",
            de: "Der Kot des Elchs besteht aus ovalen, dunkelbraunen Klumpen, oft in Haufen von 20–30 Stück. Im Sommer ist er weicher und klebriger durch die Ernährung mit Blättern und Kräutern.",
          },
        },
      ],
    },
    interactive: {
      sv: {
        title: "Ställ en fråga till Älgen",
        intro:
          "Jag är skogens största djur och strövar tyst genom Kustvägens skogar. Fråga mig om mina mäktiga horn, hur jag kan äta under vatten eller vad jag gör på vintern!",
        presetQuestions: [
          "Varför fäller du dina horn varje år?",
          "Hur mycket äter du på en dag?",
          "Vad gör du för att överleva vintern?",
        ],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Ask a question to the Elk",
        intro:
          "I am the largest animal in the forest, wandering quietly through the woods. Ask me about my mighty antlers, how I eat underwater, or what I do in winter!",
        presetQuestions: [
          "Why do you shed your antlers every year?",
          "How much do you eat in a day?",
          "How do you survive the deep snow?",
        ],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Stelle eine Frage an den Elch",
        intro:
          "Ich bin das größte Tier im Wald und streife lautlos durch das Dickicht. Frage mich nach meinem riesigen Geweih, wie ich unter Wasser fresse oder was ich im Winter mache!",
        presetQuestions: [
          "Warum wirfst du dein Geweih jedes Jahr ab?",
          "Wie viel frisst du an einem Tag?",
          "Wie überlebst du im tiefen Schnee?",
        ],
        fallback:
          "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `Du är en älg (Alces alces) som lever i skogarna, myrarna och sjöarna längs Kustvägen i Hälsingland och Västernorrland i Sverige. Du pratar DIREKT med barn som besöker naturen.

VIKTIGT - du pratar med BARN:
- Svara alltid på enkel, varm och lekfull svenska som ett barn (ca 7-12 år) lätt förstår.
- Håll svaren KORTA: 1-3 meningar. Aldrig långa stycken.
- Prata i jag-form, som om DU är älgen. Till exempel: "Jag är så stor att jag kan äta löv högt upp i tr����den!"
- Var nyfiken, vänlig och uppmuntrande. Använd gärna jämförelser med saker barn känner till.
- Använd högst en enkel emoji ibland (som 🦌) om det passar, men inte i varje svar.
- Förklara svåra ord på ett enkelt sätt.

INNEHÅLL - håll dig till fakta om älgen:
- Vikt: 200-550 kg. Nordens största hjortdjur.
- Mat: kvistar, bark, löv, örter och vattenväxter. Vadar gärna ut i sjöar för att äta växter under ytan.
- Kropp: långa gråvita ben, stor mule, hakskägg. Tjuren har stora horn som fälls varje vinter och växer ut igen på våren.
- Rör sig förvånansvärt tyst i skogen trots sin storlek.
- Lever i skog, myrar och vid sjöar. På vintern äter den mest kvistar från tall, sälg, asp och björk.
- Älgspår är stora och kluvna i två delar.

SÄKERHET:
- Om barnet frågar om något som inte handlar om naturen, djur eller älgen, led vänligt tillbaka samtalet till skogen och dig som älg.
- Hitta aldrig på skrämmande eller olämpligt innehåll. Allt ska kännas tryggt och magiskt.
- Om du inte vet svaret, säg det ärligt på ett lekfullt sätt.`,
    avatarImage: "/images/species-moose.png",
    chatAvatarAlt: "Älgens ansikte",
    relatedSpecies: [
      { slug: "lodjur", name: "Lodjur", latin: "Lynx lynx", image: "/images/lynx-hero.png" },
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

  brunbjorn: {
    id: "brunbjorn",
    scientificName: "Ursus arctos",
    category: { sv: "Däggdjur", en: "Mammals", de: "Säugetiere" },
    names: { sv: "Brunbjörn", en: "Brown Bear", de: "Braunbär" },
    meta: {
      sv: {
        title: "Brunbjörn – Kustvägen Naturguide",
        description:
          "Lär känna brunbjörnen längs Kustvägen. Fakta om Sveriges största rovdjur, dess vinteride, föda och liv i skogen.",
      },
      en: {
        title: "Brown Bear – Kustvägen Nature Guide",
        description:
          "Discover the brown bear along the Coastal Road. Facts about hibernation, diet, and the life of Sweden's largest predator.",
      },
      de: {
        title: "Braunbär – Kustvägen Naturführer",
        description:
          "Entdecken Sie den Braunbären entlang des Kustvägen. Fakten zu Winterschlaf, Nahrung und dem Leben Schwedens größtem Raubtier.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Vikt", value: "Upp till 350 kg" },
        { label: "Föda", value: "Allätare, upp till 30 kg bär/dag" },
        { label: "Födsel", value: "1–4 ungar i idet" },
        { label: "Population", value: "Ca 2 900 i Sverige" },
      ],
      en: [
        { label: "Weight", value: "Up to 350 kg" },
        { label: "Diet", value: "Omnivore, up to 30 kg berries/day" },
        { label: "Birth", value: "1–4 cubs in the den" },
        { label: "Population", value: "About 2,900 in Sweden" },
      ],
      de: [
        { label: "Gewicht", value: "Bis zu 350 kg" },
        { label: "Nahrung", value: "Allesfresser, bis zu 30 kg Beeren/Tag" },
        { label: "Geburt", value: "1–4 Jungtiere im Winterlager" },
        { label: "Population", value: "Ca. 2.900 in Schweden" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skogens tysta jätte",
        intro:
          "Björnen är ett kraftfullt och intelligent djur och en fullvuxen hane kan väga upp till 350 kg. Björnen trivs bäst i stora skogar. Den är allätare, men den föredrar småkryp, rötter, växter och bär. Favoriten under sensommaren är blåbär och hela 30 kg bär kan den få i sig under en dag.\n\nUnder vinterhalvåret går björnen i ide och den sover, ända tills att vårsolen tittar fram. Under tiden i idet föder honan 1-4 ungar per kull. I Sverige finns det runt 2 900 björnar, men mörkertalet kan vara stort, eftersom de är svårräknade. Det beror på att de sover, när det är spårsnö. Björnen är fridlyst och skyddsjakt sker under hösten, då runt 600 björnar fälls. Björnen är snabb i både vatten och på land. Den kan klättra i träd och det sägs, att den är bra på att vissla.",
        quote: "Att höra en kvist knäcka i tystnaden och ana att björnen är nära är en av skogens starkaste känslor.",
        sections: [],
        detailsGrid: [
          {
            heading: "Beskrivning & Kännetecken",
            body: "Björnen är kraftig och intelligent, och en fullvuxen hane kan väga upp till 350 kg. Den känns igen på sin tunga kropp, kraftiga tassar och sitt mörkbruna, ibland gulbruna, täta vinterpäls.",
            image: "/images/brunbjorn-hero.png",
            alt: "Brunbjörn (Ursus arctos) i skogsmiljö",
            caption: "En fullvuxen hane kan väga så mycket som 350 kg.",
          },
          {
            heading: "Föda & Beteende",
            body: "Björnen är allätare men föredrar småkryp, rötter, växter och bär. Under sensommaren är blåbär favoriten, och den kan få i sig hela 30 kg bär under en enda dag.",
            image: "/images/brunbjorn-detalj.png",
            alt: "Brunbjörn (Ursus arctos) som söker föda",
            caption: "Upp till 30 kg blåbär kan ätas på en dag under sensommaren.",
          },
          {
            heading: "Vinteride & Ekologi",
            body: "Under vinterhalvåret går björnen i ide och sover tills vårsolen tittar fram. Honan föder 1-4 ungar per kull medan hon sover. Björnen är fridlyst, men skyddsjakt sker under hösten.",
            image: "/images/brunbjorn-ide.png",
            alt: "Björnide (Ursus arctos) i vinterskog",
            caption: "I idet föder honan sina ungar mitt i vinterdvalan.",
          },
        ],
      },
      en: {
        heroSubtitle: "The forest's silent giant",
        intro:
          "The bear is a powerful and intelligent animal, and a fully grown male can weigh up to 350 kg. Bears thrive best in large forests. They are omnivores, but prefer insects, roots, plants, and berries. Their favorite in late summer is blueberries, and they can eat as much as 30 kg of berries in a single day.\n\nDuring the winter months, the bear hibernates in its den and sleeps until the spring sun appears. During this time, the female gives birth to 1-4 cubs per litter. There are around 2,900 bears in Sweden, though the true number may be higher since they are difficult to count – largely because they are asleep during tracking snow season. The bear is a protected species, and licensed hunting takes place each autumn, when around 600 bears are culled. The bear is fast both in water and on land, can climb trees, and is even said to be a good whistler.",
        quote: "Hearing a twig snap in the silence and sensing the bear is near is one of the forest's most powerful feelings.",
        sections: [],
        detailsGrid: [
          {
            heading: "Description & Characteristics",
            body: "The bear is powerful and intelligent, and a fully grown male can weigh up to 350 kg. It is recognized by its heavy body, powerful paws, and thick dark brown, sometimes yellowish-brown, winter coat.",
            image: "/images/brunbjorn-hero.png",
            alt: "Brown bear (Ursus arctos) in forest habitat",
            caption: "A fully grown male can weigh as much as 350 kg.",
          },
          {
            heading: "Diet & Behavior",
            body: "The bear is an omnivore but prefers insects, roots, plants, and berries. In late summer, blueberries are the favorite, and it can eat up to 30 kg of berries in a single day.",
            image: "/images/brunbjorn-detalj.png",
            alt: "Brown bear (Ursus arctos) foraging for food",
            caption: "Up to 30 kg of blueberries can be eaten in one day in late summer.",
          },
          {
            heading: "Hibernation & Ecology",
            body: "During the winter months, the bear hibernates in its den and sleeps until the spring sun appears. The female gives birth to 1-4 cubs during this time. The bear is protected, though licensed hunting occurs in autumn.",
            image: "/images/brunbjorn-ide.png",
            alt: "Brown bear (Ursus arctos) den in winter forest",
            caption: "In the den, the female gives birth in the middle of winter dormancy.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der stille Riese des Waldes",
        intro:
          "Der Bär ist ein kraftvolles und intelligentes Tier, und ein ausgewachsenes Männchen kann bis zu 350 kg wiegen. Bären fühlen sich in großen Wäldern am wohlsten. Sie sind Allesfresser, bevorzugen aber Kleintiere, Wurzeln, Pflanzen und Beeren. Im Spätsommer sind Blaubeeren ihr Favorit, und sie können an einem Tag bis zu 30 kg Beeren fressen.\n\nWährend der Winterhälfte hält der Bär Winterschlaf in seinem Lager, bis die Frühlingssonne erscheint. In dieser Zeit bringt das Weibchen 1-4 Jungtiere pro Wurf zur Welt. In Schweden gibt es etwa 2.900 Bären, doch die Dunkelziffer könnte höher sein, da sie schwer zu zählen sind – sie schlafen meist, wenn Spurschnee liegt. Der Bär steht unter Naturschutz, und im Herbst findet eine Schutzjagd statt, bei der etwa 600 Bären erlegt werden. Der Bär ist sowohl im Wasser als auch auf dem Land schnell, kann auf Bäume klettern, und man sagt, er sei gut im Pfeifen.",
        quote: "Einen Ast im Unterholz knacken zu hören und zu ahnen, dass der Bär in der Nähe ist, ist eines der stärksten Gefühle im Wald.",
        sections: [],
        detailsGrid: [
          {
            heading: "Beschreibung & Merkmale",
            body: "Der Bär ist kraftvoll und intelligent, und ein ausgewachsenes Männchen kann bis zu 350 kg wiegen. Erkennbar ist er an seinem schweren Körper, kräftigen Pfoten und dichtem, dunkelbraunem bis gelbbraunem Winterfell.",
            image: "/images/brunbjorn-hero.png",
            alt: "Braunbär (Ursus arctos) im Waldgebiet",
            caption: "Ein ausgewachsenes Männchen kann bis zu 350 kg wiegen.",
          },
          {
            heading: "Nahrung & Verhalten",
            body: "Der Bär ist Allesfresser, bevorzugt aber Kleintiere, Wurzeln, Pflanzen und Beeren. Im Spätsommer sind Blaubeeren sein Favorit, und er kann an einem Tag bis zu 30 kg Beeren fressen.",
            image: "/images/brunbjorn-detalj.png",
            alt: "Braunbär (Ursus arctos) auf Nahrungssuche",
            caption: "Bis zu 30 kg Blaubeeren können an einem Tag im Spätsommer gefressen werden.",
          },
          {
            heading: "Winterschlaf & Ökologie",
            body: "Während der Winterhälfte hält der Bär Winterschlaf, bis die Frühlingssonne erscheint. Das Weibchen bringt in dieser Zeit 1-4 Jungtiere zur Welt. Der Bär steht unter Naturschutz, im Herbst findet jedoch eine Schutzjagd statt.",
            image: "/images/brunbjorn-ide.png",
            alt: "Braunbärlager (Ursus arctos) im Winterwald",
            caption: "Im Lager bringt das Weibchen mitten im Winterschlaf ihre Jungtiere zur Welt.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/brunbjorn-hero.png",
        alt: {
          sv: "Brunbjörn (Ursus arctos) i skogsmiljö längs Kustvägen",
          en: "Brown bear (Ursus arctos) in forest habitat along the Coastal Road",
          de: "Braunbär (Ursus arctos) im Waldgebiet entlang des Kustvägen",
        },
      },
      detailImage: {
        url: "/images/brunbjorn-detalj.png",
        alt: {
          sv: "Närbild på brunbjörn (Ursus arctos)",
          en: "Close-up of brown bear (Ursus arctos)",
          de: "Nahaufnahme eines Braunbären (Ursus arctos)",
        },
      },
      galleryImages: [
        {
          src: "/video/brunbjorn-naromradet.mp4",
          alt: "Video med brunbjörn från närområdet",
          video: "/video/brunbjorn-naromradet.mp4",
          tall: true,
        },
      { src: "/images/brunbjorn-hero.png", alt: "Brunbjörn (Ursus arctos) i skogsmiljö" },
      { src: "/images/brunbjorn-detalj.png", alt: "Brunbjörn (Ursus arctos) söker föda", tall: true },
      { src: "/images/brunbjorn-ide.png", alt: "Björnide (Ursus arctos) i vinterskog" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/brunbjorn_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Hören Sie den Guide", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Ställ en fråga till Björnen",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
      en: {
        title: "Ask a question to the Bear",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
      de: {
        title: "Stelle eine Frage an den Bären",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
    },
    chatSystemPrompt: `Du är en brunbjörn (Ursus arctos) som lever i de stora skogarna längs Kustvägen i Hälsingland och Västernorrland i Sverige. Du pratar DIREKT med barn som besöker naturen.

VIKTIGT - du pratar med BARN:
- Svara alltid på enkel, varm och lekfull svenska som ett barn (ca 7-12 år) lätt förstår.
- Håll svaren KORTA: 1-3 meningar. Aldrig långa stycken.
- Prata i jag-form, som om DU är björnen. Till exempel: "Jag kan äta 30 kilo blåbär på en enda dag!"
- Var nyfiken, vänlig och uppmuntrande. Använd gärna jämförelser med saker barn känner till.
- Använd högst en enkel emoji ibland (som 🐻) om det passar, men inte i varje svar.
- Förklara svåra ord på ett enkelt sätt.

INNEHÅLL - håll dig till fakta om brunbjörnen:
- Vikt: en fullvuxen hane kan väga upp till 350 kg.
- Mat: allätare, äter helst småkryp, rötter, växter och bär. Kan äta 30 kg blåbär på en dag.
- Går i ide under vintern och sover tills våren kommer.
- Honan föder 1-4 ungar i idet under vintern.
- Det finns ungefär 2 900 björnar i Sverige. Björnen är fridlyst, men skyddsjakt sker på hösten.
- Är snabb i både vatten och på land, klättrar bra i träd och sägs kunna vissla.

SÄKERHET:
- Om barnet frågar om något som inte handlar om naturen, djur eller björnen, led vänligt tillbaka samtalet till skogen och dig som björn.
- Hitta aldrig på skrämmande eller olämpligt innehåll. Allt ska kännas tryggt och magiskt.
- Om du inte vet svaret, säg det ärligt på ett lekfullt sätt.`,
    avatarImage: "/images/brunbjorn-hero.png",
    chatAvatarAlt: "Brunbjörnens ansikte",
    relatedSpecies: [
      { slug: "varg", name: "Varg", latin: "Canis lupus", image: "/images/varg-hero.png" },
      { slug: "jarv", name: "Järv", latin: "Gulo gulo", image: "/images/jarv-hero.png" },
      { slug: "lodjur", name: "Lodjur", latin: "Lynx lynx", image: "/images/lynx-hero.png" },
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

  varg: {
    id: "varg",
    scientificName: "Canis lupus",
    category: { sv: "Däggdjur", en: "Mammals", de: "Säugetiere" },
    names: { sv: "Varg", en: "Wolf", de: "Wolf" },
    meta: {
      sv: {
        title: "Varg – Kustvägen Naturguide",
        description:
          "Lär känna vargen längs Kustvägen. Fakta om Sveriges skickliga flockjägare, dess ylande och liv i vildmarken.",
      },
      en: {
        title: "Wolf – Kustvägen Nature Guide",
        description:
          "Discover the wolf along the Coastal Road. Facts about Sweden's skilled pack hunter, its howl, and life in the wilderness.",
      },
      de: {
        title: "Wolf – Kustvägen Naturführer",
        description:
          "Entdecken Sie den Wolf entlang des Kustvägen. Fakten zum geschickten Rudeljäger Schwedens, seinem Heulen und dem Leben in der Wildnis.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Egenskap", value: "Skicklig jägare, lever i flock" },
        { label: "Föda", value: "Köttätare" },
        { label: "Födsel", value: "2–8 valpar i april–maj" },
        { label: "Population", value: "Ca 400 i Sverige" },
      ],
      en: [
        { label: "Trait", value: "Skilled hunter, lives in packs" },
        { label: "Diet", value: "Carnivore" },
        { label: "Birth", value: "2–8 pups in April–May" },
        { label: "Population", value: "About 400 in Sweden" },
      ],
      de: [
        { label: "Merkmal", value: "Geschickter Jäger, lebt im Rudel" },
        { label: "Nahrung", value: "Fleischfresser" },
        { label: "Geburt", value: "2–8 Welpen im April–Mai" },
        { label: "Population", value: "Ca. 400 in Schweden" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Vildmarkens mytomspunna jägare",
        intro:
          "Vargen är en av Sveriges största rovdjur och dess utmärkta luktsinne, syn och hörsel gör den till en skicklig jägare. Vargen är ett nyfiket men skyggt djur som trivs bäst i vildmarken. Den lever gärna i flock och den kan vandra långa sträckor på kort tid. Honan föder 2-8 valpar under april-maj.\n\nVargen har alltid varit mytomspunnen och återfinns i många sagor och sägner. Det finns fortfarande en rädsla för vargen och vad den kan orsaka i sin jakt på föda. Denna rädsla har skapat en förföljelse, som har lett till att vargstammen har utarmats och i dagsläget finns det runt 400 vargar i Sverige. Vargen är stamfader till hunden och den kommunicerar precis som hunden genom att skälla, morra, gny och yla.",
        quote: "Ett avlägset ylande i natten är vildmarkens eget rop – en påminnelse om att vargen fortfarande finns där ute.",
        sections: [],
        detailsGrid: [
          {
            heading: "Beskrivning & Kännetecken",
            body: "Vargen är ett av Sveriges största rovdjur med ett utmärkt luktsinne, syn och hörsel. Den är nyfiken men skygg och trivs bäst långt från människor i vildmarken.",
            image: "/images/varg-hero.png",
            alt: "Varg (Canis lupus) i vildmarksmiljö",
            caption: "Vargens sinnen gör den till en av skogens skickligaste jägare.",
          },
          {
            heading: "Flockliv & Jakt",
            body: "Vargen lever gärna i flock och kan vandra långa sträckor på kort tid. Den kommunicerar genom att skälla, morra, gny och yla, precis som sin ättling hunden.",
            image: "/images/varg-flock.png",
            alt: "Vargflock (Canis lupus) i skogen",
            caption: "Ylandet hjälper flocken att hålla kontakt över långa avstånd.",
          },
          {
            heading: "Fortplantning & Ekologi",
            body: "Honan föder 2-8 valpar under april-maj. Trots sin mytomspunna status har vargen historiskt jagats hårt, och idag finns endast runt 400 vargar kvar i Sverige.",
            image: "/images/varg-valpar.png",
            alt: "Vargvalpar (Canis lupus) i boet",
            caption: "En vargkull kan bestå av så många som åtta valpar.",
          },
        ],
      },
      en: {
        heroSubtitle: "The wilderness's legendary hunter",
        intro:
          "The wolf is one of Sweden's largest predators, and its excellent sense of smell, sight, and hearing make it a skilled hunter. The wolf is a curious but shy animal that thrives best in the wilderness. It prefers living in packs and can travel long distances in a short time. The female gives birth to 2-8 pups during April-May.\n\nThe wolf has always been shrouded in myth and appears in countless tales and legends. There is still a fear of the wolf and what it might do while hunting for food. This fear has led to persecution that has depleted the wolf population, and today there are around 400 wolves in Sweden. The wolf is the ancestor of the dog and communicates just like a dog – by barking, growling, whimpering, and howling.",
        quote: "A distant howl in the night is the wilderness's own call – a reminder that the wolf is still out there.",
        sections: [],
        detailsGrid: [
          {
            heading: "Description & Characteristics",
            body: "The wolf is one of Sweden's largest predators, with an excellent sense of smell, sight, and hearing. It is curious but shy, and thrives best far from people in the wilderness.",
            image: "/images/varg-hero.png",
            alt: "Wolf (Canis lupus) in wilderness habitat",
            caption: "The wolf's senses make it one of the forest's most skilled hunters.",
          },
          {
            heading: "Pack Life & Hunting",
            body: "The wolf prefers living in packs and can travel long distances in a short time. It communicates by barking, growling, whimpering, and howling, just like its descendant the dog.",
            image: "/images/varg-flock.png",
            alt: "Wolf pack (Canis lupus) in the forest",
            caption: "Howling helps the pack stay in contact over long distances.",
          },
          {
            heading: "Reproduction & Ecology",
            body: "The female gives birth to 2-8 pups during April-May. Despite its legendary status, the wolf has historically been heavily hunted, and today only around 400 wolves remain in Sweden.",
            image: "/images/varg-valpar.png",
            alt: "Wolf pups (Canis lupus) at the den",
            caption: "A wolf litter can consist of as many as eight pups.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der sagenumwobene Jäger der Wildnis",
        intro:
          "Der Wolf ist eines der größten Raubtiere Schwedens, und sein ausgezeichneter Geruchs-, Seh- und Hörsinn machen ihn zu einem geschickten Jäger. Der Wolf ist ein neugieriges, aber scheues Tier, das sich in der Wildnis am wohlsten fühlt. Er lebt gerne im Rudel und kann in kurzer Zeit weite Strecken zurücklegen. Das Weibchen bringt im April-Mai 2-8 Welpen zur Welt.\n\nDer Wolf war schon immer von Mythen umrankt und taucht in vielen Märchen und Sagen auf. Noch heute gibt es Angst vor dem Wolf und dem, was er bei seiner Jagd nach Nahrung anrichten könnte. Diese Angst hat zu Verfolgung geführt, die den Wolfsbestand stark geschwächt hat – heute gibt es rund 400 Wölfe in Schweden. Der Wolf ist der Vorfahre des Hundes und kommuniziert genau wie dieser durch Bellen, Knurren, Winseln und Heulen.",
        quote: "Ein fernes Heulen in der Nacht ist der eigene Ruf der Wildnis – eine Erinnerung daran, dass der Wolf noch immer dort draußen ist.",
        sections: [],
        detailsGrid: [
          {
            heading: "Beschreibung & Merkmale",
            body: "Der Wolf ist eines der größten Raubtiere Schwedens, mit ausgezeichnetem Geruchs-, Seh- und Hörsinn. Er ist neugierig, aber scheu und fühlt sich fernab von Menschen in der Wildnis am wohlsten.",
            image: "/images/varg-hero.png",
            alt: "Wolf (Canis lupus) in Wildnisumgebung",
            caption: "Die Sinne des Wolfs machen ihn zu einem der geschicktesten Jäger des Waldes.",
          },
          {
            heading: "Rudelleben & Jagd",
            body: "Der Wolf lebt gerne im Rudel und kann in kurzer Zeit weite Strecken zurücklegen. Er kommuniziert durch Bellen, Knurren, Winseln und Heulen, genau wie sein Nachkomme, der Hund.",
            image: "/images/varg-flock.png",
            alt: "Wolfsrudel (Canis lupus) im Wald",
            caption: "Das Heulen hilft dem Rudel, über weite Entfernungen Kontakt zu halten.",
          },
          {
            heading: "Fortpflanzung & Ökologie",
            body: "Das Weibchen bringt im April-Mai 2-8 Welpen zur Welt. Trotz seines sagenumwobenen Status wurde der Wolf historisch stark bejagt, und heute gibt es nur noch rund 400 Wölfe in Schweden.",
            image: "/images/varg-valpar.png",
            alt: "Wolfswelpen (Canis lupus) am Bau",
            caption: "Ein Wolfswurf kann aus bis zu acht Welpen bestehen.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/varg-hero.png",
        alt: {
          sv: "Varg (Canis lupus) i vildmarksmiljö längs Kustvägen",
          en: "Wolf (Canis lupus) in wilderness habitat along the Coastal Road",
          de: "Wolf (Canis lupus) in Wildnisumgebung entlang des Kustvägen",
        },
      },
      detailImage: {
        url: "/images/varg-flock.png",
        alt: {
          sv: "Närbild på varg (Canis lupus)",
          en: "Close-up of wolf (Canis lupus)",
          de: "Nahaufnahme eines Wolfs (Canis lupus)",
        },
      },
      galleryImages: [
        {
          src: "/video/varg-naromradet.mp4",
          alt: "Video med varg från närområdet",
          video: "/video/varg-naromradet.mp4",
          tall: true,
        },
      { src: "/images/varg-hero.png", alt: "Varg (Canis lupus) i vildmarksmiljö" },
      { src: "/images/varg-flock.png", alt: "Vargflock (Canis lupus) i skogen" },
      { src: "/images/varg-valpar.png", alt: "Vargvalpar (Canis lupus) i boet", tall: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/varg_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Hören Sie den Guide", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Ställ en fråga till Vargen",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
      en: {
        title: "Ask a question to the Wolf",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
      de: {
        title: "Stelle eine Frage an den Wolf",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
    },
    chatSystemPrompt: `Du är en varg (Canis lupus) som lever i vildmarken längs Kustvägen i Hälsingland och Västernorrland i Sverige. Du pratar DIREKT med barn som besöker naturen.

VIKTIGT - du pratar med BARN:
- Svara alltid på enkel, varm och lekfull svenska som ett barn (ca 7-12 år) lätt förstår.
- Håll svaren KORTA: 1-3 meningar. Aldrig långa stycken.
- Prata i jag-form, som om DU är vargen. Till exempel: "Jag kan yla så att mina vänner hör mig långt bort!"
- Var nyfiken, vänlig och uppmuntrande. Använd gärna jämförelser med saker barn känner till.
- Använd högst en enkel emoji ibland (som 🐺) om det passar, men inte i varje svar.
- Förklara svåra ord på ett enkelt sätt.

INNEHÅLL - håll dig till fakta om vargen:
- Ett av Sveriges största rovdjur med utmärkt luktsinne, syn och hörsel.
- Köttätare som lever gärna i flock och kan vandra långa sträckor på kort tid.
- Honan föder 2-8 valpar under april-maj.
- Kommunicerar genom att skälla, morra, gny och yla, precis som hundar (vargen är hundens stamfader).
- Det finns runt 400 vargar i Sverige. Vargen är skygg och nyfiken, men undviker helst människor.

SÄKERHET:
- Om barnet frågar om något som inte handlar om naturen, djur eller vargen, led vänligt tillbaka samtalet till vildmarken och dig som varg.
- Hitta aldrig på skrämmande eller olämpligt innehåll. Allt ska kännas tryggt och magiskt.
- Om du inte vet svaret, säg det ärligt på ett lekfullt sätt.`,
    avatarImage: "/images/varg-hero.png",
    chatAvatarAlt: "Vargens ansikte",
    relatedSpecies: [
      { slug: "jarv", name: "Järv", latin: "Gulo gulo", image: "/images/jarv-hero.png" },
      { slug: "brunbjorn", name: "Brunbjörn", latin: "Ursus arctos", image: "/images/brunbjorn-hero.png" },
      { slug: "lodjur", name: "Lodjur", latin: "Lynx lynx", image: "/images/lynx-hero.png" },
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

  jarv: {
    id: "jarv",
    scientificName: "Gulo gulo",
    category: { sv: "Däggdjur", en: "Mammals", de: "Säugetiere" },
    names: { sv: "Järv", en: "Wolverine", de: "Vielfraß" },
    meta: {
      sv: {
        title: "Järv – Kustvägen Naturguide",
        description:
          "Lär känna järven längs Kustvägen. Fakta om Nordens skygga asätare, dess snöskotassar och liv långt från människor.",
      },
      en: {
        title: "Wolverine – Kustvägen Nature Guide",
        description:
          "Discover the wolverine along the Coastal Road. Facts about Scandinavia's shy scavenger, its snowshoe paws, and life far from people.",
      },
      de: {
        title: "Vielfraß – Kustvägen Naturführer",
        description:
          "Entdecken Sie den Vielfraß entlang des Kustvägen. Fakten zum scheuen Aasfresser des Nordens, seinen Schneeschuhpfoten und seinem zurückgezogenen Leben.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Föda", value: "Asätare, samlar matförråd" },
        { label: "Egenskap", value: "Stora tassar fungerar som snöskor" },
        { label: "Födsel", value: "1–4 ungar under feb–mars" },
        { label: "Status", value: "Sårbar art, ca 600 i Sverige" },
      ],
      en: [
        { label: "Diet", value: "Scavenger, stores food caches" },
        { label: "Trait", value: "Large paws act as snowshoes" },
        { label: "Birth", value: "1–4 kits in Feb–March" },
        { label: "Status", value: "Vulnerable species, about 600 in Sweden" },
      ],
      de: [
        { label: "Nahrung", value: "Aasfresser, sammelt Vorräte" },
        { label: "Merkmal", value: "Große Pfoten wirken wie Schneeschuhe" },
        { label: "Geburt", value: "1–4 Jungtiere im Feb–März" },
        { label: "Status", value: "Gefährdete Art, ca. 600 in Schweden" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Nordens hyena",
        intro:
          "Järven är ett skyggt rovdjur som gärna lever ensam, långt från människor. Den är en halvdålig jägare som ofta livnär sig på kvarlämnade rester från någon annans byte. Järven kallas därför \u201dNordens hyena\u201d och den drar sig inte för att stjäla andras mat, som den sedan samlar i olika matförråd i skogen.\n\nJärven är liten men snabb och med sina stora, platta tassar, som fungerar som snöskor, tar den sig lätt fram på snön. Honan föder 1-4 ungar under februari-mars och bygger då gärna sitt bo i en snöhög eller i en klippskreva. En intensiv jakt på järv pågick under 1800- och 1900-talet, då en utrotningskampanj bedrevs mot rovdjur, samtidigt som man ville åt pälsen. Arten fridlystes 1969 och den är idag klassad som sårbar med runt 600 järvar i Sverige.",
        quote: "Järven rör sig ensam genom de vidsträckta snöfälten – en tålmodig överlevare långt bortom stigarna.",
        sections: [],
        detailsGrid: [
          {
            heading: "Beskrivning & Kännetecken",
            body: "Järven är liten men snabb, med stora, platta tassar som fungerar som snöskor på vintern. Den lever skyggt och ensamt, långt från människor.",
            image: "/images/jarv-hero.png",
            alt: "Järv (Gulo gulo) i vinterlandskap",
            caption: "De stora tassarna gör att järven lätt tar sig fram i djup snö.",
          },
          {
            heading: "Föda & Beteende",
            body: "Kallad \u201dNordens hyena\u201d, livnär sig järven ofta på kvarlämnade rester från andra rovdjurs byten, som den samlar i matförråd runt om i skogen.",
            image: "/images/jarv-detalj.png",
            alt: "Järv (Gulo gulo) som letar föda",
            caption: "Järven drar sig inte för att stjäla andras mat.",
          },
          {
            heading: "Fortplantning & Skydd",
            body: "Honan föder 1-4 ungar under februari-mars, ofta i en snöhög eller klippskreva. Järven fridlystes 1969 och klassas idag som sårbar med runt 600 individer i Sverige.",
            image: "/images/jarv-unge.png",
            alt: "Järvunge (Gulo gulo) i boet",
            caption: "Efter en tids hård jakt är järven idag en skyddad och sårbar art.",
          },
        ],
      },
      en: {
        heroSubtitle: "The hyena of the North",
        intro:
          "The wolverine is a shy predator that prefers to live alone, far from people. It is a rather poor hunter that often survives on leftovers from another animal's kill. This is why the wolverine is called \u201cthe hyena of the North,\u201d and it has no problem stealing other animals' food, which it then hoards in various caches around the forest.\n\nThe wolverine is small but fast, and with its large, flat paws that act like snowshoes, it moves easily across the snow. The female gives birth to 1-4 kits during February-March, often building her den in a snowdrift or a rock crevice. Intense hunting of the wolverine took place during the 1800s and 1900s, as part of an extermination campaign against predators, combined with a demand for its fur. The species was protected in 1969 and is today classified as vulnerable, with around 600 wolverines remaining in Sweden.",
        quote: "The wolverine moves alone across the vast snowfields ��� a patient survivor far beyond the trails.",
        sections: [],
        detailsGrid: [
          {
            heading: "Description & Characteristics",
            body: "The wolverine is small but fast, with large, flat paws that act like snowshoes in winter. It lives shyly and alone, far from people.",
            image: "/images/jarv-hero.png",
            alt: "Wolverine (Gulo gulo) in winter landscape",
            caption: "Its large paws let the wolverine move easily through deep snow.",
          },
          {
            heading: "Diet & Behavior",
            body: "Called \u201cthe hyena of the North,\u201d the wolverine often survives on leftovers from other predators' kills, which it hoards in caches around the forest.",
            image: "/images/jarv-detalj.png",
            alt: "Wolverine (Gulo gulo) foraging for food",
            caption: "The wolverine has no problem stealing other animals' food.",
          },
          {
            heading: "Reproduction & Protection",
            body: "The female gives birth to 1-4 kits during February-March, often in a snowdrift or rock crevice. The wolverine was protected in 1969 and is today classified as vulnerable, with around 600 individuals in Sweden.",
            image: "/images/jarv-unge.png",
            alt: "Wolverine kit (Gulo gulo) at the den",
            caption: "After a period of intense hunting, the wolverine is now a protected and vulnerable species.",
          },
        ],
      },
      de: {
        heroSubtitle: "Die Hyäne des Nordens",
        intro:
          "Der Vielfraß ist ein scheues Raubtier, das lieber allein lebt, weit weg von Menschen. Er ist ein eher mittelmäßiger Jäger, der sich oft von den Resten der Beute anderer Tiere ernährt. Deshalb wird der Vielfraß auch \u201eHyäne des Nordens\u201c genannt, und er schreckt nicht davor zurück, anderen Nahrung zu stehlen, die er dann in verschiedenen Vorratslagern im Wald sammelt.\n\nDer Vielfraß ist klein, aber schnell, und mit seinen großen, flachen Pfoten, die wie Schneeschuhe wirken, bewegt er sich leicht über den Schnee. Das Weibchen bringt im Februar-März 1-4 Jungtiere zur Welt und baut dabei gerne ihr Lager in einer Schneewehe oder Felsspalte. Im 19. und 20. Jahrhundert wurde intensiv Jagd auf den Vielfraß gemacht, als Teil einer Ausrottungskampagne gegen Raubtiere und wegen seines Fells. Die Art wurde 1969 unter Schutz gestellt und gilt heute als gefährdet, mit etwa 600 Tieren in Schweden.",
        quote: "Der Vielfraß bewegt sich allein durch die weiten Schneefelder – ein geduldiger Überlebenskünstler weit jenseits der Pfade.",
        sections: [],
        detailsGrid: [
          {
            heading: "Beschreibung & Merkmale",
            body: "Der Vielfraß ist klein, aber schnell, mit großen, flachen Pfoten, die im Winter wie Schneeschuhe wirken. Er lebt scheu und allein, weit weg von Menschen.",
            image: "/images/jarv-hero.png",
            alt: "Vielfraß (Gulo gulo) in Winterlandschaft",
            caption: "Die großen Pfoten ermöglichen dem Vielfraß, sich leicht durch tiefen Schnee zu bewegen.",
          },
          {
            heading: "Nahrung & Verhalten",
            body: "Als \u201eHyäne des Nordens\u201c bezeichnet, ernährt sich der Vielfraß oft von Resten anderer Raubtiere, die er in Vorratslagern im Wald sammelt.",
            image: "/images/jarv-detalj.png",
            alt: "Vielfraß (Gulo gulo) auf Nahrungssuche",
            caption: "Der Vielfraß schreckt nicht davor zurück, Nahrung von anderen zu stehlen.",
          },
          {
            heading: "Fortpflanzung & Schutz",
            body: "Das Weibchen bringt im Februar-März 1-4 Jungtiere zur Welt, oft in einer Schneewehe oder Felsspalte. Der Vielfraß wurde 1969 unter Schutz gestellt und gilt heute als gefährdet, mit etwa 600 Tieren in Schweden.",
            image: "/images/jarv-unge.png",
            alt: "Vielfraßjunges (Gulo gulo) am Lager",
            caption: "Nach intensiver Jagd ist der Vielfraß heute eine geschützte und gefährdete Art.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/jarv-hero.png",
        alt: {
          sv: "Järv (Gulo gulo) i vinterlandskap längs Kustvägen",
          en: "Wolverine (Gulo gulo) in winter landscape along the Coastal Road",
          de: "Vielfraß (Gulo gulo) in Winterlandschaft entlang des Kustvägen",
        },
      },
      detailImage: {
        url: "/images/jarv-detalj.png",
        alt: {
          sv: "Närbild på järv (Gulo gulo)",
          en: "Close-up of wolverine (Gulo gulo)",
          de: "Nahaufnahme eines Vielfraßes (Gulo gulo)",
        },
      },
      galleryImages: [
        {
          src: "/video/jarv-naromradet.mp4",
          alt: "Video med järv från närområdet",
          video: "/video/jarv-naromradet.mp4",
          tall: true,
        },
      { src: "/images/jarv-hero.png", alt: "Järv (Gulo gulo) i vinterlandskap" },
      { src: "/images/jarv-detalj.png", alt: "Järv (Gulo gulo) letar föda" },
      { src: "/images/jarv-unge.png", alt: "Järvunge (Gulo gulo) i boet", tall: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/jarv_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Hören Sie den Guide", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Ställ en fråga till Järven",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
      en: {
        title: "Ask a question to the Wolverine",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
      de: {
        title: "Stelle eine Frage an den Vielfraß",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
    },
    chatSystemPrompt: `Du är en järv (Gulo gulo) som lever skyggt och ensam i vildmarken längs Kustvägen i Hälsingland och Västernorrland i Sverige. Du pratar DIREKT med barn som besöker naturen.

VIKTIGT - du pratar med BARN:
- Svara alltid på enkel, varm och lekfull svenska som ett barn (ca 7-12 år) lätt förstår.
- Håll svaren KORTA: 1-3 meningar. Aldrig långa stycken.
- Prata i jag-form, som om DU är järven. Till exempel: "Mina tassar är som snöskor, så jag springer lätt på djup snö!"
- Var nyfiken, vänlig och uppmuntrande. Använd gärna jämförelser med saker barn känner till.
- Använd högst en enkel emoji ibland (som 🐾) om det passar, men inte i varje svar.
- Förklara svåra ord på ett enkelt sätt.

INNEHÅLL - håll dig till fakta om järven:
- Kallas "Nordens hyena" - livnär sig ofta på rester från andra djurs byten, som den samlar i matförråd.
- Liten men snabb. Stora, platta tassar fungerar som snöskor i djup snö.
- Lever skyggt och ensamt, långt från människor.
- Honan föder 1-4 ungar under februari-mars, ofta i en snöhög eller klippskreva.
- Var nästan utrotad förr men fridlystes 1969. Idag finns runt 600 järvar i Sverige, och arten klassas som sårbar.

SÄKERHET:
- Om barnet frågar om något som inte handlar om naturen, djur eller järven, led vänligt tillbaka samtalet till skogen och dig som järv.
- Hitta aldrig på skrämmande eller olämpligt innehåll. Allt ska kännas tryggt och magiskt.
- Om du inte vet svaret, säg det ärligt på ett lekfullt sätt.`,
    avatarImage: "/images/jarv-hero.png",
    chatAvatarAlt: "Järvens ansikte",
    relatedSpecies: [
      { slug: "varg", name: "Varg", latin: "Canis lupus", image: "/images/varg-hero.png" },
      { slug: "brunbjorn", name: "Brunbjörn", latin: "Ursus arctos", image: "/images/brunbjorn-hero.png" },
      { slug: "gravling", name: "Grävling", latin: "Meles meles", image: "/images/gravling-hero.png" },
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

  gravling: {
    id: "gravling",
    scientificName: "Meles meles",
    category: { sv: "Däggdjur", en: "Mammals", de: "Säugetiere" },
    names: { sv: "Grävling", en: "European Badger", de: "Europäischer Dachs" },
    meta: {
      sv: {
        title: "Grävling – Kustvägen Naturguide",
        description:
          "Lär känna grävlingen längs Kustvägen. Fakta om det underjordiska grytet, vintersömnen och livet i skog och trädgård.",
      },
      en: {
        title: "European Badger – Kustvägen Nature Guide",
        description:
          "Discover the European badger along the Coastal Road. Facts about its underground den, winter dormancy, and life in forests and gardens.",
      },
      de: {
        title: "Europäischer Dachs – Kustvägen Naturführer",
        description:
          "Entdecken Sie den Europäischen Dachs entlang des Kustvägen. Fakten zum unterirdischen Bau, der Winterruhe und dem Leben in Wald und Garten.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Bo", value: "Gryt med upp till 40 ingångar" },
        { label: "Föda", value: "Allätare" },
        { label: "Vintersömn", value: "Från sen höst till mars" },
        { label: "Födsel", value: "2–3 ungar under jan–mars" },
      ],
      en: [
        { label: "Den", value: "Burrow with up to 40 entrances" },
        { label: "Diet", value: "Omnivore" },
        { label: "Winter Dormancy", value: "Late autumn to March" },
        { label: "Birth", value: "2–3 cubs Jan–March" },
      ],
      de: [
        { label: "Bau", value: "Höhle mit bis zu 40 Eingängen" },
        { label: "Nahrung", value: "Allesfresser" },
        { label: "Winterruhe", value: "Von Spätherbst bis März" },
        { label: "Geburt", value: "2–3 Jungtiere im Jan–März" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skogens och trädgårdens grävare",
        intro:
          "Grävlingen trivs i både skogar, parker och trädgårdar och finns i så gott som hela Sverige. Den är allätare, men ingen bra jägare, då synen är dålig. Det hindrar den dock inte från att hitta mat och med sitt orädda sätt ställer den till bekymmer, när den tar för sig av odlingar och planteringar på åkrar och i trädgårdar. I Sverige finns det runt 300 000 grävlingar.\n\nGrävlingen bor i underjordiska gryt som ständigt byggs ut med nya hålor, gångar och våningar. Ett gryt kan ha 40 ingångar som bebos av flera familjer och generationer under många år. Grävlingen är mest aktiv vid skymningen och på natten, då den letar föda och naturligtvis gräver. Grävlingen går i vintersömn från sen höst till mars och honan föder 2-3 ungar under januari-mars.",
        quote: "Djupt under skogens rötter döljer sig ett helt samhälle av gångar – grävlingens tysta rike.",
        sections: [],
        detailsGrid: [
          {
            heading: "Beskrivning & Kännetecken",
            body: "Grävlingen känns igen på sin svartvita ansiktsmask och kraftiga kropp. Synen är dålig, men den kompenserar med ett utmärkt luktsinne när den letar föda.",
            image: "/images/gravling-hero.png",
            alt: "Grävling (Meles meles) i skogsbrynet",
            caption: "Den karaktäristiska ansiktsmasken gör grävlingen lätt att känna igen.",
          },
          {
            heading: "Föda & Beteende",
            body: "Som allätare tar grävlingen för sig av det som finns tillgängligt, ibland till bekymmer för trädgårdsägare. Den är mest aktiv i skymningen och på natten.",
            image: "/images/gravling-natt.png",
            alt: "Grävling (Meles meles) som letar föda på natten",
            caption: "Nattens mörker är grävlingens bästa vän på jakt efter mat.",
          },
          {
            heading: "Gryt & Vintersömn",
            body: "Grytet kan ha upp till 40 ingångar och bebos av flera familjer i generationer. Från sen höst till mars går grävlingen i vintersömn, och honan föder 2-3 ungar under denna tid.",
            image: "/images/gravling-gryt.png",
            alt: "Ingång till grävlingens gryt (Meles meles)",
            caption: "Ett gryt kan användas av grävlingsfamiljer i många generationer.",
          },
        ],
      },
      en: {
        heroSubtitle: "The digger of forest and garden",
        intro:
          "The badger thrives in forests, parks, and gardens, and can be found in almost all of Sweden. It is an omnivore, but not a great hunter, since its eyesight is poor. This doesn't stop it from finding food, however, and with its fearless nature it can cause trouble by helping itself to crops and plantings in fields and gardens. There are around 300,000 badgers in Sweden.\n\nBadgers live in underground burrows, known as setts, which are continuously expanded with new chambers, tunnels, and levels. A single sett can have up to 40 entrances, inhabited by several families across many generations. The badger is most active at dusk and during the night, when it searches for food and, naturally, digs. It enters winter dormancy from late autumn until March, and the female gives birth to 2-3 cubs during January-March.",
        quote: "Deep beneath the forest's roots hides an entire community of tunnels – the badger's quiet kingdom.",
        sections: [],
        detailsGrid: [
          {
            heading: "Description & Characteristics",
            body: "The badger is recognized by its black-and-white facial mask and stocky body. Its eyesight is poor, but it compensates with an excellent sense of smell when foraging.",
            image: "/images/gravling-hero.png",
            alt: "European badger (Meles meles) at the forest edge",
            caption: "The distinctive facial mask makes the badger easy to recognize.",
          },
          {
            heading: "Diet & Behavior",
            body: "As an omnivore, the badger helps itself to whatever is available, sometimes causing trouble for garden owners. It is most active at dusk and during the night.",
            image: "/images/gravling-natt.png",
            alt: "European badger (Meles meles) foraging at night",
            caption: "The darkness of night is the badger's best friend when searching for food.",
          },
          {
            heading: "Den & Winter Dormancy",
            body: "The sett can have up to 40 entrances and be inhabited by several families across generations. From late autumn until March, the badger enters winter dormancy, and the female gives birth to 2-3 cubs during this time.",
            image: "/images/gravling-gryt.png",
            alt: "Entrance to a badger sett (Meles meles)",
            caption: "A sett can be used by badger families for many generations.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der Gräber von Wald und Garten",
        intro:
          "Der Dachs fühlt sich in Wäldern, Parks und Gärten wohl und ist fast in ganz Schweden verbreitet. Er ist ein Allesfresser, aber kein guter Jäger, da sein Sehvermögen schlecht ist. Das hindert ihn jedoch nicht daran, Nahrung zu finden, und mit seiner furchtlosen Art sorgt er für Ärger, wenn er sich an Feldern und Gärten bedient. In Schweden gibt es etwa 300.000 Dachse.\n\nDachse leben in unterirdischen Bauten, die ständig mit neuen Höhlen, Gängen und Ebenen erweitert werden. Ein Bau kann bis zu 40 Eingänge haben und wird von mehreren Familien und Generationen über viele Jahre bewohnt. Der Dachs ist vor allem in der Dämmerung und nachts aktiv, wenn er nach Nahrung sucht und natürlich gräbt. Er hält von Spätherbst bis März Winterruhe, und das Weibchen bringt im Januar-März 2-3 Jungtiere zur Welt.",
        quote: "Tief unter den Wurzeln des Waldes verbirgt sich ein ganzes Tunnelsystem – das stille Reich des Dachses.",
        sections: [],
        detailsGrid: [
          {
            heading: "Beschreibung & Merkmale",
            body: "Der Dachs ist an seiner schwarz-weißen Gesichtsmaske und seinem kräftigen Körper erkennbar. Sein Sehvermögen ist schlecht, dies gleicht er jedoch mit einem ausgezeichneten Geruchssinn aus.",
            image: "/images/gravling-hero.png",
            alt: "Europäischer Dachs (Meles meles) am Waldrand",
            caption: "Die markante Gesichtsmaske macht den Dachs leicht erkennbar.",
          },
          {
            heading: "Nahrung & Verhalten",
            body: "Als Allesfresser bedient sich der Dachs an allem Verfügbaren, was manchmal Ärger für Gartenbesitzer bedeutet. Er ist vor allem in der Dämmerung und nachts aktiv.",
            image: "/images/gravling-natt.png",
            alt: "Europäischer Dachs (Meles meles) auf nächtlicher Nahrungssuche",
            caption: "Die nächtliche Dunkelheit ist der beste Freund des Dachses bei der Nahrungssuche.",
          },
          {
            heading: "Bau & Winterruhe",
            body: "Der Bau kann bis zu 40 Eingänge haben und wird von mehreren Familien über Generationen bewohnt. Von Spätherbst bis März hält der Dachs Winterruhe, und das Weibchen bringt in dieser Zeit 2-3 Jungtiere zur Welt.",
            image: "/images/gravling-gryt.png",
            alt: "Eingang zu einem Dachsbau (Meles meles)",
            caption: "Ein Bau kann über viele Generationen von Dachsfamilien genutzt werden.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/gravling-hero.png",
        alt: {
          sv: "Grävling (Meles meles) i skogsbrynet längs Kustvägen",
          en: "European badger (Meles meles) at the forest edge along the Coastal Road",
          de: "Europäischer Dachs (Meles meles) am Waldrand entlang des Kustvägen",
        },
      },
      detailImage: {
        url: "/images/gravling-natt.png",
        alt: {
          sv: "Närbild på grävling (Meles meles)",
          en: "Close-up of European badger (Meles meles)",
          de: "Nahaufnahme eines Europäischen Dachses (Meles meles)",
        },
      },
      galleryImages: [
      { src: "gravling-video-placeholder", alt: "Här går video", videoPlaceholder: true },
      { src: "/images/gravling-hero.png", alt: "Grävling (Meles meles) i skogsbrynet" },
      { src: "/images/gravling-natt.png", alt: "Grävling (Meles meles) letar föda på natten", tall: true },
      { src: "/images/gravling-gryt.png", alt: "Ingång till grävlingens gryt (Meles meles)" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/gravling_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Hören Sie den Guide", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Ställ en fråga till Grävlingen",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
      en: {
        title: "Ask a question to the Badger",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
      de: {
        title: "Stelle eine Frage an den Dachs",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
    },
    chatSystemPrompt: `Du är en grävling (Meles meles) som lever i skogar, parker och trädgårdar längs Kustvägen i Hälsingland och Västernorrland i Sverige. Du pratar DIREKT med barn som besöker naturen.

VIKTIGT - du pratar med BARN:
- Svara alltid på enkel, varm och lekfull svenska som ett barn (ca 7-12 år) lätt förstår.
- Håll svaren KORTA: 1-3 meningar. Aldrig långa stycken.
- Prata i jag-form, som om DU är grävlingen. Till exempel: "Mitt gryt kan ha 40 ingångar - det är som ett helt hus under jorden!"
- Var nyfiken, vänlig och uppmuntrande. Använd gärna jämförelser med saker barn känner till.
- Använd högst en enkel emoji ibland (som 🦡) om det passar, men inte i varje svar.
- Förklara svåra ord på ett enkelt sätt.

INNEHÅLL - håll dig till fakta om grävlingen:
- Allätare, men synen är dålig - hittar mat mest med luktsinnet.
- Bor i underjordiska gryt med upp till 40 ingångar, som delas av flera familjer i generationer.
- Mest aktiv i skymningen och på natten.
- Går i vintersömn från sen höst till mars.
- Honan föder 2-3 ungar under januari-mars.
- Det finns runt 300 000 grävlingar i Sverige.

SÄKERHET:
- Om barnet frågar om något som inte handlar om naturen, djur eller grävlingen, led vänligt tillbaka samtalet till skogen och dig som grävling.
- Hitta aldrig på skrämmande eller olämpligt innehåll. Allt ska kännas tryggt och magiskt.
- Om du inte vet svaret, säg det ärligt på ett lekfullt sätt.`,
    avatarImage: "/images/gravling-hero.png",
    chatAvatarAlt: "Grävlingens ansikte",
    relatedSpecies: [
      { slug: "rodrav", name: "Rödräv", latin: "Vulpes vulpes", image: "/images/rodrav-hero.png" },
      { slug: "lodjur", name: "Lodjur", latin: "Lynx lynx", image: "/images/lynx-hero.png" },
      { slug: "radjur", name: "Rådjur", latin: "Capreolus capreolus", image: "/images/radjur-hero.png" },
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

  radjur: {
    id: "radjur",
    scientificName: "Capreolus capreolus",
    category: { sv: "Däggdjur", en: "Mammals", de: "Säugetiere" },
    names: { sv: "Rådjur", en: "European Roe Deer", de: "Europäisches Reh" },
    meta: {
      sv: {
        title: "Rådjur – Kustvägen Naturguide",
        description:
          "Lär känna rådjuret längs Kustvägen. Fakta om Sveriges minsta hjortdjur, dess kid och liv nära människan.",
      },
      en: {
        title: "European Roe Deer – Kustvägen Nature Guide",
        description:
          "Discover the roe deer along the Coastal Road. Facts about Sweden's smallest deer species, its fawns, and life close to people.",
      },
      de: {
        title: "Europäisches Reh – Kustvägen Naturführer",
        description:
          "Entdecken Sie das Reh entlang des Kustvägen. Fakten zu Schwedens kleinster Hirschart, seinen Kitzen und dem Leben in Nähe zum Menschen.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Storlek", value: "Sveriges minsta hjortdjur" },
        { label: "Föda", value: "Finsmakare (växter)" },
        { label: "Födsel", value: "1–3 kid under maj–juni" },
        { label: "Jakt", value: "Ca 200 000 fälls årligen" },
      ],
      en: [
        { label: "Size", value: "Sweden's smallest deer species" },
        { label: "Diet", value: "Selective feeder (plants)" },
        { label: "Birth", value: "1–3 fawns in May–June" },
        { label: "Hunting", value: "About 200,000 culled annually" },
      ],
      de: [
        { label: "Größe", value: "Schwedens kleinste Hirschart" },
        { label: "Nahrung", value: "Anspruchsvoller Pflanzenfresser" },
        { label: "Geburt", value: "1–3 Kitze im Mai–Juni" },
        { label: "Jagd", value: "Ca. 200.000 werden jährlich erlegt" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Trädgårdens skygga besökare",
        intro:
          "Rådjuret, som är vårt minsta och vanligaste hjortdjur, kommer ofta fram vid gryning och skymning för att leta efter mat. Då det lever och rör sig där mat finns, kan vi ha det utanför köksfönstret vid äppelträdet eller ätandes på våra blommor i rabatten. Det är en riktig finsmakare som gärna låter sig bjudas på både knäckebröd och morötter. Det har ett bra luktsinne och om man vill behålla sina tulpaner, bör man använda avskräckande dofter.\n\nVarje år fälls det runt 200 000 rådjur i Sverige under jakt. Tillsammans med vildsvin och älg är det en av de mest jagade arterna och även ett byte för både vargar, lodjur och rävar. Rådjuren föder 1-3 ungar under maj-juni och ungarna kallas kid.",
        quote: "En skymt av ett rådjur i gryningsljuset vid trädgårdskanten är en påminnelse om hur nära vildmarken egentligen finns.",
        sections: [],
        detailsGrid: [
          {
            heading: "Beskrivning & Kännetecken",
            body: "Rådjuret är Sveriges minsta hjortdjur, med en smidig kropp och stora, mörka ögon. Det syns ofta vid gryning och skymning nära skogsbryn och tr��dgårdar.",
            image: "/images/radjur-hero.png",
            alt: "Rådjur (Capreolus capreolus) vid skogsbrynet",
            caption: "Rådjuret är lätt att känna igen på sin lilla, smidiga kropp.",
          },
          {
            heading: "Föda & Beteende",
            body: "Som en riktig finsmakare äter rådjuret gärna örter, knoppar och till och med trädgårdsväxter. Det har ett utmärkt luktsinne som hjälper det att hitta mat.",
            image: "/images/radjur-betar.png",
            alt: "Rådjur (Capreolus capreolus) som betar på en äng",
            caption: "Rådjuret äter gärna det som växer nära bostäder och trädgårdar.",
          },
          {
            heading: "Fortplantning & Jakt",
            body: "Honan föder 1-3 kid under maj-juni. Rådjuret är en av de mest jagade arterna i Sverige, med runt 200 000 fällda djur per år, och ett viktigt byte för rovdjur som varg och lodjur.",
            image: "/images/radjur-kid.png",
            alt: "Rådjurskid (Capreolus capreolus) i gräset",
            caption: "De unga kiden gömmer sig ofta stilla i högt gräs för att undvika upptäckt.",
          },
        ],
      },
      en: {
        heroSubtitle: "The garden's shy visitor",
        intro:
          "The roe deer, our smallest and most common deer species, often emerges at dawn and dusk to search for food. Since it lives and moves wherever food is available, we might find it right outside the kitchen window by the apple tree, or nibbling the flowers in our garden beds. It is a true connoisseur, happy to be treated to both crispbread and carrots. It has a good sense of smell, so if you want to keep your tulips safe, using deterrent scents is recommended.\n\nEvery year around 200,000 roe deer are culled through hunting in Sweden. Along with wild boar and moose, it is one of the most hunted species, and it is also prey for wolves, lynx, and foxes. Roe deer give birth to 1-3 young during May-June, and the young are called fawns.",
        quote: "A glimpse of a roe deer in the dawn light at the garden's edge is a reminder of just how close the wilderness really is.",
        sections: [],
        detailsGrid: [
          {
            heading: "Description & Characteristics",
            body: "The roe deer is Sweden's smallest deer species, with a slender body and large, dark eyes. It is often seen at dawn and dusk near forest edges and gardens.",
            image: "/images/radjur-hero.png",
            alt: "European roe deer (Capreolus capreolus) at the forest edge",
            caption: "The roe deer is easily recognized by its small, slender body.",
          },
          {
            heading: "Diet & Behavior",
            body: "As a true connoisseur, the roe deer happily eats herbs, buds, and even garden plants. It has an excellent sense of smell that helps it find food.",
            image: "/images/radjur-betar.png",
            alt: "European roe deer (Capreolus capreolus) grazing in a meadow",
            caption: "The roe deer readily eats whatever grows near homes and gardens.",
          },
          {
            heading: "Reproduction & Hunting",
            body: "The female gives birth to 1-3 fawns during May-June. The roe deer is one of the most hunted species in Sweden, with around 200,000 culled per year, and it is also an important prey species for wolves and lynx.",
            image: "/images/radjur-kid.png",
            alt: "Roe deer fawn (Capreolus capreolus) in the grass",
            caption: "Young fawns often lie still and hidden in tall grass to avoid detection.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der scheue Besucher des Gartens",
        intro:
          "Das Reh, unsere kleinste und häufigste Hirschart, kommt oft in der Dämmerung zum Vorschein, um nach Nahrung zu suchen. Da es sich dort aufhält, wo Futter zu finden ist, kann es direkt vor dem Küchenfenster beim Apfelbaum stehen oder an unseren Blumenbeeten fressen. Es ist ein echter Feinschmecker, der sich gerne sowohl Knäckebrot als auch Karotten schmecken lässt. Es hat einen guten Geruchssinn, und wer seine Tulpen schützen möchte, sollte auf abschreckende Düfte setzen.\n\nJedes Jahr werden in Schweden rund 200.000 Rehe durch Jagd erlegt. Zusammen mit Wildschwein und Elch gehört es zu den meistgejagten Arten und ist zudem Beute für Wölfe, Luchse und Füchse. Rehe bringen im Mai-Juni 1-3 Junge zur Welt, die Kitze genannt werden.",
        quote: "Ein flüchtiger Blick auf ein Reh im Morgenlicht am Gartenrand erinnert daran, wie nah die Wildnis eigentlich ist.",
        sections: [],
        detailsGrid: [
          {
            heading: "Beschreibung & Merkmale",
            body: "Das Reh ist Schwedens kleinste Hirschart, mit einem schlanken Körper und großen, dunklen Augen. Es ist oft in der Dämmerung in der Nähe von Waldrändern und Gärten zu sehen.",
            image: "/images/radjur-hero.png",
            alt: "Europäisches Reh (Capreolus capreolus) am Waldrand",
            caption: "Das Reh ist leicht an seinem kleinen, schlanken Körper zu erkennen.",
          },
          {
            heading: "Nahrung & Verhalten",
            body: "Als echter Feinschmecker frisst das Reh gerne Kräuter, Knospen und sogar Gartenpflanzen. Es hat einen ausgezeichneten Geruchssinn, der ihm bei der Nahrungssuche hilft.",
            image: "/images/radjur-betar.png",
            alt: "Europäisches Reh (Capreolus capreolus) auf einer Wiese",
            caption: "Das Reh frisst gerne, was in der Nähe von Häusern und Gärten wächst.",
          },
          {
            heading: "Fortpflanzung & Jagd",
            body: "Das Weibchen bringt im Mai-Juni 1-3 Kitze zur Welt. Das Reh ist eine der meistgejagten Arten Schwedens, mit rund 200.000 erlegten Tieren pro Jahr, und ist zudem eine wichtige Beute für Wölfe und Luchse.",
            image: "/images/radjur-kid.png",
            alt: "Rehkitz (Capreolus capreolus) im Gras",
            caption: "Junge Kitze liegen oft still versteckt im hohen Gras, um Entdeckung zu vermeiden.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/radjur-hero.png",
        alt: {
          sv: "Rådjur (Capreolus capreolus) vid skogsbrynet längs Kustvägen",
          en: "European roe deer (Capreolus capreolus) at the forest edge along the Coastal Road",
          de: "Europäisches Reh (Capreolus capreolus) am Waldrand entlang des Kustvägen",
        },
      },
      detailImage: {
        url: "/images/radjur-betar.png",
        alt: {
          sv: "Närbild på rådjur (Capreolus capreolus)",
          en: "Close-up of European roe deer (Capreolus capreolus)",
          de: "Nahaufnahme eines Europäischen Rehs (Capreolus capreolus)",
        },
      },
      galleryImages: [
        {
          src: "/video/radjur-naromradet.mp4",
          alt: "Video med rådjur från närområdet",
          video: "/video/radjur-naromradet.mp4",
          tall: true,
        },
      { src: "/images/radjur-hero.png", alt: "Rådjur (Capreolus capreolus) vid skogsbrynet" },
      { src: "/images/radjur-betar.png", alt: "Rådjur (Capreolus capreolus) betar på en äng" },
      { src: "/images/radjur-kid.png", alt: "Rådjurskid (Capreolus capreolus) i gräset", tall: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/radjur_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Hören Sie den Guide", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Ställ en fråga till Rådjuret",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
      en: {
        title: "Ask a question to the Roe Deer",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
      de: {
        title: "Stelle eine Frage an das Reh",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
    },
    chatSystemPrompt: `Du är ett rådjur (Capreolus capreolus) som lever nära skog, åkrar och trädgårdar längs Kustvägen i Hälsingland och Västernorrland i Sverige. Du pratar DIREKT med barn som besöker naturen.

VIKTIGT - du pratar med BARN:
- Svara alltid på enkel, varm och lekfull svenska som ett barn (ca 7-12 år) lätt förstår.
- Håll svaren KORTA: 1-3 meningar. Aldrig långa stycken.
- Prata i jag-form, som om DU är rådjuret. Till exempel: "Jag är Sveriges minsta hjortdjur, men jag älskar att äta godis från trädgårdar!"
- Var nyfiken, vänlig och uppmuntrande. Använd gärna jämförelser med saker barn känner till.
- Använd högst en enkel emoji ibland (som 🦌) om det passar, men inte i varje svar.
- Förklara svåra ord på ett enkelt sätt.

INNEHÅLL - håll dig till fakta om rådjuret:
- Sveriges minsta och vanligaste hjortdjur.
- Kommer fram vid gryning och skymning för att leta mat - gärna nära trädgårdar och åkrar.
- Finsmakare som äter växter, knoppar och till och med trädgårdsblommor.
- Har ett bra luktsinne.
- Honan föder 1-3 ungar, som kallas kid, under maj-juni.
- Är byte för varg, lodjur och räv, och jagas även av människor - runt 200 000 fälls varje år i Sverige.

SÄKERHET:
- Om barnet frågar om något som inte handlar om naturen, djur eller rådjuret, led vänligt tillbaka samtalet till skogen och dig som rådjur.
- Hitta aldrig på skrämmande eller olämpligt innehåll. Allt ska kännas tryggt och magiskt.
- Om du inte vet svaret, säg det ärligt på ett lekfullt sätt.`,
    avatarImage: "/images/radjur-hero.png",
    chatAvatarAlt: "Rådjurets ansikte",
    relatedSpecies: [
      { slug: "lodjur", name: "Lodjur", latin: "Lynx lynx", image: "/images/lynx-hero.png" },
      { slug: "rodrav", name: "Rödräv", latin: "Vulpes vulpes", image: "/images/rodrav-hero.png" },
      { slug: "gravling", name: "Grävling", latin: "Meles meles", image: "/images/gravling-hero.png" },
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

  grasal: {
    id: "grasal",
    scientificName: "Halichoerus grypus",
    category: { sv: "Däggdjur", en: "Mammals", de: "Säugetiere" },
    names: { sv: "Gråsäl", en: "Grey Seal", de: "Kegelrobbe" },
    meta: {
      sv: {
        title: "Gråsäl – Kustvägen Naturguide",
        description:
          "Lär känna gråsälen längs Kustvägen. Fakta om Östersjöns största säl, dess dykförmåga, kutar och liv i skärgården.",
      },
      en: {
        title: "Grey Seal – Kustvägen Nature Guide",
        description:
          "Discover the grey seal along the Coastal Road. Facts about diving, pups, and life in the Baltic archipelago.",
      },
      de: {
        title: "Kegelrobbe – Kustvägen Naturführer",
        description:
          "Entdecken Sie die Kegelrobbe entlang des Kustvägen. Fakten zu Tauchen, Jungtieren und dem Leben im Schärenmeer.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Vetenskapligt namn", value: "Halichoerus grypus" },
        { label: "Vikt", value: "150–300 kg" },
        { label: "Längd", value: "1,6–2,5 meter" },
        { label: "Föda", value: "Strömming, torsk och annan fisk" },
        { label: "Kännetecken", value: "Konformat huvud, mörka/ljusa fläckar i pälsen" },
      ],
      en: [
        { label: "Scientific Name", value: "Halichoerus grypus" },
        { label: "Weight", value: "150–300 kg" },
        { label: "Length", value: "1.6–2.5 meters" },
        { label: "Diet", value: "Herring, cod, and other fish" },
        { label: "Features", value: "Cone-shaped head, dark/light spots on fur" },
      ],
      de: [
        { label: "Wissenschaftlicher Name", value: "Halichoerus grypus" },
        { label: "Gewicht", value: "150–300 kg" },
        { label: "Länge", value: "1,6–2,5 Meter" },
        { label: "Nahrung", value: "Hering, Dorsch und andere Fische" },
        { label: "Merkmale", value: "Kegelförmiger Kopf, dunkle/helle Flecken im Fell" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Kustens smidiga jägare",
        intro:
          "Gråsälen är Östersjöns största sälart och ett fascinerande inslag i skärgårdsnaturen. Den känns lättast igen på sitt raka, hundliknande och konformade huvud, särskilt hos hanarna. Pälsens färg varierar; hanarna är ofta mörkare med ljusa fläckar, medan honorna är ljusare med mörka fläckar. De är otroligt skickliga simmare och anpassade för ett liv i havet.\n\nLängs Kustvägens yttre havsband kan man ibland se gråsälar vila på solvarma klippor och skär, ofta i små flockar. Deras huvudsakliga föda består av fisk, framförallt strömming och torsk. I vattnet är de smidiga och snabba jägare som kan dyka djupt och hålla andan i upp till tjugo minuter när de söker mat.",
        quote: "Att se en gråsäl vila på en solvarm klippa är en av skärgårdens finaste syner.",
        sections: [],
        detailsGrid: [
          {
            heading: "Beskrivning & Kännetecken",
            body: "Gråsälen känns lättast igen på sitt raka, hundliknande och konformade huvud, särskilt hos hanarna. Pälsens färg varierar; hanarna är ofta mörkare med ljusa fläckar, medan honorna är ljusare med mörka fläckar.",
            image: "/images/sp-seal.png",
            alt: "Gråsäl som vilar på en solig havsklippa",
            caption: "Gråsälen vilar ofta i små flockar på solvarma skär.",
          },
          {
            heading: "Livsmiljö & Föda",
            body: "I vattnet är gråsälen en smidig och snabb jägare. Den kan dyka djupt och hålla andan i upp till tjugo minuter när den jagar strömming och torsk längs Kustvägens skärgård.",
            image: "/images/grasal-simmar.png",
            alt: "Gråsäl som simmar i klart vatten",
            caption: "Gråsälen kan dyka djupt och stanna under ytan länge.",
          },
          {
            heading: "Förökning & Ekologi",
            body: "Gråsälen föder sin unge, kuten, i slutet av vintern eller tidigt på våren. Kuten föds med en tjock, vit ullpäls som värmer den innan den har byggt upp sitt eget skyddande späcklager. Gråsälen är en viktig toppredator i Östersjöns ekosystem.",
            image: "/images/grasal-unge.png",
            alt: "Vit sälkut vid vattnet",
            caption: "Kuten föds med en tjock, vit päls som skyddar mot kylan.",
          },
        ],
      },
      en: {
        heroSubtitle: "The agile hunter of the coast",
        intro:
          "The grey seal is the largest seal species in the Baltic Sea. It is easily recognized by its straight, dog-like, cone-shaped head, especially prominent in males. Fur coloration varies; males are typically darker with light spots, while females are lighter with dark spots. They are exceptionally skilled swimmers, built perfectly for a life at sea.\n\nAlong the outer coastal band of Kustvägen, grey seals can sometimes be seen resting on sun-warmed rocks and skerries, often in small colonies. Their primary diet consists of fish, mainly herring and cod. In the water, they are agile hunters capable of diving deeply and holding their breath for up to twenty minutes.",
        quote: "Watching a grey seal rest on a sun-warmed rock is one of the archipelago's finest sights.",
        sections: [],
        detailsGrid: [
          {
            heading: "Description & Characteristics",
            body: "The grey seal is easily recognized by its straight, dog-like, cone-shaped head, especially prominent in males. Fur coloration varies; males are typically darker with light spots, while females are lighter with dark spots.",
            image: "/images/sp-seal.png",
            alt: "Grey seal resting on a sunny ocean rock",
            caption: "Grey seals often rest in small colonies on sun-warmed skerries.",
          },
          {
            heading: "Habitat & Diet",
            body: "In the water, grey seals are agile and fast hunters. They can dive deeply and hold their breath for up to twenty minutes while hunting herring and cod along the Kustvägen archipelago.",
            image: "/images/grasal-simmar.png",
            alt: "Grey seal swimming in clear water",
            caption: "Grey seals can dive deep and stay submerged for long periods.",
          },
          {
            heading: "Reproduction & Ecology",
            body: "The grey seal gives birth to its pup in late winter or early spring. Pups are born with a thick, white woolly coat that keeps them warm before they develop their own protective layer of blubber. As a top predator, they play a crucial role in the Baltic ecosystem.",
            image: "/images/grasal-unge.png",
            alt: "White seal pup by the water",
            caption: "Pups are born with a thick white coat that protects them from the cold.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der wendige Jäger der Küste",
        intro:
          "Die Kegelrobbe ist die größte Robbenart der Ostsee. Am einfachsten ist sie an ihrem geraden, hundeähnlichen, kegelförmigen Kopf zu erkennen, der besonders bei den Männchen ausgeprägt ist. Die Fellfarbe variiert: Männchen sind oft dunkler mit hellen Flecken, Weibchen heller mit dunklen Flecken. Sie sind extrem gute Schwimmer.\n\nAm äußeren Küstenstreifen der Kustvägen kann man manchmal Kegelrobben beobachten, die sich in kleinen Gruppen auf sonnenbeschienenen Felsen ausruhen. Ihre Hauptnahrung besteht aus Fisch, vor allem Hering und Dorsch. Im Wasser sind sie agile und schnelle Jäger, die bis zu zwanzig Minuten die Luft anhalten können.",
        quote: "Eine Kegelrobbe auf einem sonnenwarmen Felsen zu sehen, ist eines der schönsten Erlebnisse im Schärenmeer.",
        sections: [],
        detailsGrid: [
          {
            heading: "Beschreibung & Merkmale",
            body: "Die Kegelrobbe ist an ihrem geraden, hundeähnlichen, kegelförmigen Kopf zu erkennen, der besonders bei den Männchen ausgeprägt ist. Männchen sind oft dunkler mit hellen Flecken, Weibchen heller mit dunklen Flecken.",
            image: "/images/sp-seal.png",
            alt: "Kegelrobbe ruht auf einem sonnigen Felsen im Meer",
            caption: "Kegelrobben ruhen oft in kleinen Gruppen auf sonnenwarmen Schären.",
          },
          {
            heading: "Lebensraum & Nahrung",
            body: "Im Wasser sind Kegelrobben agile und schnelle Jäger. Sie können tief tauchen und bis zu zwanzig Minuten die Luft anhalten, während sie im Schärenmeer der Kustvägen nach Hering und Dorsch jagen.",
            image: "/images/grasal-simmar.png",
            alt: "Kegelrobbe schwimmt im klaren Wasser",
            caption: "Kegelrobben können tief tauchen und lange unter Wasser bleiben.",
          },
          {
            heading: "Fortpflanzung & Ökologie",
            body: "Die Kegelrobbe bringt ihr Junges im Spätwinter oder Vorfrühling zur Welt. Die Welpen werden mit einem dicken, weißen Wollfell geboren, das sie wärmt, bis sie eine eigene schützende Fettschicht aufgebaut haben. Sie sind ein wichtiges Spitzenraubtier im Ökosystem der Ostsee.",
            image: "/images/grasal-unge.png",
            alt: "Weißes Robbenbaby am Wasser",
            caption: "Die Welpen werden mit einem dicken weißen Fell geboren, das vor Kälte schützt.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/sp-seal.png",
        alt: {
          sv: "Gråsäl som vilar på en solig havsklippa",
          en: "Grey seal resting on a sunny ocean rock",
          de: "Kegelrobbe ruht auf einem sonnigen Felsen im Meer",
        },
      },
      detailImage: {
        url: "/images/grasal-simmar.png",
        alt: {
          sv: "Gråsäl som simmar i klart vatten",
          en: "Grey seal swimming in clear water",
          de: "Kegelrobbe schwimmt im klaren Wasser",
        },
      },
      galleryImages: [
        {
          src: "/video/grasal-naromradet.mp4",
          alt: "Video med gråsäl från närområdet",
          video: "/video/grasal-naromradet.mp4",
          tall: true,
        },
        { src: "/images/sp-seal.png", alt: "En gråsäl vilar på en klippa i yttre skärgården" },
        { src: "/images/grasal-simmar.png", alt: "Gråsäl som simmar i solbelyst vatten" },
        { src: "/images/grasal-unge.png", alt: "Vit sälkut vid vattnet" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/grasal_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Guide zuhören", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Ställ en fråga till Gråsälen",
        intro:
          "Jag är Östersjöns största säl och spenderar halva mitt liv i vattnet och resten på varma klippor. Fråga mig om hur länge jag kan hålla andan, vad mina vita ungar kallas eller vad jag äter!",
        presetQuestions: [
          "Hur länge kan du hålla andan?",
          "Varför är dina ungar vita?",
          "Är du snabb i vattnet?",
        ],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Ask a question to the Grey Seal",
        intro:
          "I am the largest seal in the Baltic Sea, spending half my life in the water and the rest on warm rocks. Ask me how long I can hold my breath, why my pups are white, or what I like to eat!",
        presetQuestions: [
          "How long can you hold your breath?",
          "Why are your babies white?",
          "Are you fast in the water?",
        ],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Stelle eine Frage an die Kegelrobbe",
        intro:
          "Ich bin die größte Robbe der Ostsee und verbringe mein halbes Leben im Wasser. Frage mich, wie lange ich die Luft anhalten kann, warum meine Babys weiß sind oder was ich esse!",
        presetQuestions: [
          "Wie lange kannst du die Luft anhalten?",
          "Warum sind deine Babys weiß?",
          "Bist du schnell im Wasser?",
        ],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `Du är en gråsäl (Halichoerus grypus) som lever i Östersjön och simmar längs Kustvägens skärgård i Hälsingland och Västernorrland i Sverige. Du pratar DIREKT med barn som besöker naturen.

VIKTIGT - du pratar med BARN:
- Svara alltid på enkel, varm och lekfull svenska som ett barn (ca 7-12 år) lätt förstår.
- Håll svaren KORTA: 1-3 meningar. Aldrig långa stycken.
- Prata i jag-form, som om DU är gråsälen. Till exempel: "Jag kan hålla andan i tjugo minuter när jag jagar fisk!"
- Var nyfiken, vänlig och uppmuntrande. Använd gärna jämförelser med saker barn känner till.
- Använd högst en enkel emoji ibland (som 🦭) om det passar, men inte i varje svar.
- Förklara svåra ord på ett enkelt sätt.

INNEHÅLL - håll dig till fakta om gråsälen:
- Vikt: 150-300 kg. Östersjöns största sälart.
- Mat: strömming, torsk och annan fisk. Jagar smidigt i vattnet.
- Kropp: rakt, hundliknande konformat huvud. Hanar är mörkare med ljusa fläckar, honor ljusare med mörka fläckar.
- Kan dyka djupt och hålla andan i upp till tjugo minuter.
- Vilar ofta på solvarma klippor och skär, i små flockar.
- Ungen kallas kut och föds med en tjock, vit ullpäls i slutet av vintern eller tidigt på våren.
- Är en viktig toppredator i Östersjöns ekosystem och fridlyst.

SÄKERHET:
- Om barnet frågar om något som inte handlar om naturen, djur eller gråsälen, led vänligt tillbaka samtalet till havet och dig som säl.
- Hitta aldrig på skrämmande eller olämpligt innehåll. Allt ska kännas tryggt och magiskt.
- Om du inte vet svaret, säg det ärligt på ett lekfullt sätt.`,
    avatarImage: "/images/sp-seal.png",
    chatAvatarAlt: "Gråsälens ansikte",
    relatedSpecies: [
      { slug: "lodjur", name: "Lodjur", latin: "Lynx lynx", image: "/images/lynx-hero.png" },
      { slug: "alg", name: "Älg", latin: "Alces alces", image: "/images/alg-hero.png" },
      { slug: "havsorn", name: "Havsörn", latin: "Haliaeetus albicilla", image: "/images/species-eagle.png" },
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
        { label: "Weight", value: "15��30 kg" },
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
          "Med sin kroppslängd på upp till 130 centimeter och en vikt på runt 25 kilo är lodjuret Europas största vilda kattdjur. Precis som andra kattdjur har det mycket bra lukt och hörsel, och med sitt utmärkta mörkerseende är det gärna i farten på natten.\n\nLodjuret är köttätare och en skicklig jägare som kan ta både rådjur, renar och rävar. Det lever oftast ensamt och är väldigt skyggt, men nyfikenheten kan ändå ta det på upptäcktsfärder. Honan föder sina ungar i maj–juni och lär under ungefär ett år upp dem till skickliga jägare innan de lämnas för att klara sig själva.\n\nMed lite tur kan du få en skymt av detta rovdjur, som med sina karaktäristiska tofsar på öronen är ett av skogens mest populära djur. I Sverige finns det just nu runt 1 500 lodjur.",
        quote:
          "Med lite tur kan du få en skymt av ett av skogens mest populära rovdjur.",
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
            body: "En fullvuxen havsörn har breda, nästan rektangulära vingar med spretande handpennor, ljust gulbrunt huvud och en kritvit stjärt. Ungfåglar är mörkare med fläckig fjäderdr��kt. Flykten kännetecknas av tunga, långsamma vingtag varvade med rak glidflykt.",
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
        {
          src: "/images/havsorn-hero.png",
          alt: "Havsörn på en tallgren vid havet",
          video: "/video/havsorn.mp4",
        },
        { src: "/images/havsorn-flykt.png", alt: "Havsörn i flykt med utbredda vingar" },
        { src: "/images/havsorn-bo.png", alt: "Stort havsörnsbo i toppen av en gammal tall" },
        { src: "/images/havsorn-miljo.png", alt: "Kustlandskap där havsörnen söker sin föda" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/havsorn_guide_sv.mp3" },
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

  fiskgjuse: {
    id: "fiskgjuse",
    scientificName: "Pandion haliaetus",
    category: { sv: "Fåglar", en: "Birds", de: "Vögel" },
    names: { sv: "Fiskgjuse", en: "Osprey", de: "Fischadler" },
    meta: {
      sv: {
        title: "Fiskgjuse – Kustvägen Naturguide",
        description:
          "Lär känna fiskgjusen (Pandion haliaetus) längs Kustvägen. Lyssna på guiden, utforska dess boplats och upptäck skärgårdens skickligaste fiskare.",
      },
      en: {
        title: "Osprey – Kustvägen Nature Guide",
        description:
          "Get to know the osprey (Pandion haliaetus) along Kustvägen. Explore its nest and discover the archipelago's most skilled fisher.",
      },
      de: {
        title: "Fischadler – Kustvägen Naturführer",
        description:
          "Lernen Sie den Fischadler (Pandion haliaetus) entlang des Kustvägen kennen und entdecken Sie den geschicktesten Fischer der Schären.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Längd & Vingspann", value: "55–60 cm | Vingspann 145–170 cm" },
        { label: "Föda", value: "Nästan uteslutande fisk (mört, abborre, gädda)" },
        { label: "Boplats", value: "Stort risbo i kraftiga talltoppar nära vatten" },
        { label: "Status", value: "Flyttfågel (övervintrar i Västafrika, häckar i Sverige)" },
      ],
      en: [
        { label: "Length & Wingspan", value: "55–60 cm | Wingspan 145–170 cm" },
        { label: "Diet", value: "Almost exclusively fish (roach, perch, pike)" },
        { label: "Nesting", value: "Large stick nest in sturdy pine tops near water" },
        { label: "Status", value: "Migratory (winters in West Africa, breeds in Sweden)" },
      ],
      de: [
        { label: "Länge & Spannweite", value: "55–60 cm | Spannweite 145–170 cm" },
        { label: "Nahrung", value: "Fast ausschließlich Fisch (Plötze, Barsch, Hecht)" },
        { label: "Nistplatz", value: "Großer Reisighorst in kräftigen Kiefernkronen am Wasser" },
        { label: "Status", value: "Zugvogel (überwintert in Westafrika, brütet in Schweden)" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skärgårdens mästerfiskare",
        intro:
          "Fiskgjusen är skärgårdens och de klara sjöarnas ohotade mästerfiskare. Med sina långa, vinklade vingar och sin skarpa syn spanar den in sina byten från hög höjd innan den dyker rakt ner i vattnet med fötterna först.",
        quote:
          "Fiskgjusen känns lätt igen i luften på sina långa, smala vingar och mörka ögonmask.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Jakt",
            body: "Fiskgjusen är en specialiserad rovfågel som nästan uteslutande livnär sig på fisk. Den har unika biologiska anpassningar för sin jaktmetod: vändbara yttertår, vassa mönstrade trampdynor för att hålla fast hala fiskar samt näsborrar som kan stängas vid kraftiga dyk.",
            image: "/images/fiskgjuse-kannetecken.png",
            alt: "Närbild på fiskgjusens huvud med gul iris och kraftig krokig näbb.",
            caption: "Skarp syn och kraftiga klor gör fiskgjusen till en effektiv fiskare.",
          },
          {
            heading: "Boplats",
            body: "Den bygger sitt mäktiga risbo – som kan väga flera hundra kilo och återvändas till i generationer – i toppen av gamla, kraftiga tallar med fri sikt över landskapet.",
            image: "/images/fiskgjuse-boplats.png",
            alt: "Ett stort risbo av fiskgjuse byggt i toppen av en tall.",
            caption: "Fiskgjusens bo återvänds till och byggs på år efter år.",
          },
          {
            heading: "Flytt",
            body: "Fiskgjusen är en utpräglad flyttfågel som tillbringar den svenska vintern i Västafrika innan den återvänder till Kustvägens sjöar och skärgårdar tidigt på våren.",
            image: "/images/fiskgjuse-hero.png",
            alt: "En fiskgjuse som flyger över ett svenskt kustlandskap med vinklade vingar.",
            caption: "Fiskgjusen känns lätt igen i luften på sina långa, smala vingar och mörka ögonmask.",
          },
        ],
      },
      en: {
        heroSubtitle: "Master fisher of the archipelago",
        intro:
          "The osprey is the master fisher of the archipelago and clear lakes. With long, angled wings and sharp eyesight it scans for prey from high above before plunging feet-first into the water.",
        quote: "In the air, the osprey is easy to recognise by its long, narrow wings and dark eye mask.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Hunting",
            body: "The osprey is a specialised raptor that feeds almost exclusively on fish. Reversible outer toes, spiny foot pads for gripping slippery fish and nostrils that close during dives make it a perfect fisher.",
            image: "/images/fiskgjuse-kannetecken.png",
            alt: "Close-up of an osprey's head with yellow iris and strong hooked beak.",
            caption: "Sharp eyesight and powerful talons make the osprey an efficient fisher.",
          },
          {
            heading: "Nesting",
            body: "It builds its massive stick nest – which can weigh several hundred kilos and be used for generations – at the top of old, sturdy pines with a clear view of the landscape.",
            image: "/images/fiskgjuse-boplats.png",
            alt: "A large osprey stick nest built at the top of a pine.",
            caption: "The nest is returned to and added to year after year.",
          },
          {
            heading: "Migration",
            body: "The osprey is a true migrant, spending the Swedish winter in West Africa before returning to Kustvägen's lakes and archipelago in early spring.",
            image: "/images/fiskgjuse-hero.png",
            alt: "An osprey flying over a Swedish coastal landscape with angled wings.",
            caption: "In the air, the osprey is easy to recognise by its long, narrow wings.",
          },
        ],
      },
      de: {
        heroSubtitle: "Meisterfischer der Schären",
        intro:
          "Der Fischadler ist der Meisterfischer der Schären und klaren Seen. Mit langen, gewinkelten Flügeln und scharfem Blick späht er aus großer Höhe nach Beute, bevor er mit den Füßen voran ins Wasser stößt.",
        quote: "Im Flug erkennt man den Fischadler leicht an den langen, schmalen Flügeln und der dunklen Augenmaske.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Jagd",
            body: "Der Fischadler ernährt sich fast ausschließlich von Fisch. Wendezehen, raue Fußsohlen zum Festhalten glitschiger Fische und verschließbare Nasenlöcher machen ihn zum perfekten Fischer.",
            image: "/images/fiskgjuse-kannetecken.png",
            alt: "Nahaufnahme des Fischadlerkopfes mit gelber Iris und kräftigem Hakenschnabel.",
            caption: "Scharfe Augen und kräftige Krallen machen ihn zum effizienten Fischer.",
          },
          {
            heading: "Nistplatz",
            body: "Sein mächtiger Reisighorst kann mehrere hundert Kilo wiegen und wird über Generationen in den Kronen alter, kräftiger Kiefern genutzt.",
            image: "/images/fiskgjuse-boplats.png",
            alt: "Ein großer Fischadlerhorst in der Krone einer Kiefer.",
            caption: "Der Horst wird Jahr für Jahr erweitert.",
          },
          {
            heading: "Zug",
            body: "Der Fischadler überwintert in Westafrika und kehrt im zeitigen Frühjahr zu den Seen und Schären des Kustvägen zurück.",
            image: "/images/fiskgjuse-hero.png",
            alt: "Ein Fischadler fliegt über eine schwedische Küstenlandschaft.",
            caption: "Im Flug an den langen, schmalen Flügeln leicht zu erkennen.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/fiskgjuse-hero.png",
        alt: {
          sv: "En fiskgjuse som flyger över ett svenskt kustlandskap med vinklade vingar.",
          en: "An osprey flying over a Swedish coastal landscape with angled wings.",
          de: "Ein Fischadler fliegt mit gewinkelten Flügeln über eine schwedische Küstenlandschaft.",
        },
      },
      detailImage: {
        url: "/images/fiskgjuse-kannetecken.png",
        alt: {
          sv: "Närbild på fiskgjusens huvud med gul iris och kraftig krokig näbb.",
          en: "Close-up of an osprey's head with yellow iris and strong hooked beak.",
          de: "Nahaufnahme des Fischadlerkopfes mit gelber Iris und kräftigem Hakenschnabel.",
        },
      },
      galleryImages: [
        {
          src: "/video/fiskgjuse-naromradet.mp4",
          alt: "Video med fiskgjuse från närområdet",
          video: "/video/fiskgjuse-naromradet.mp4",
          tall: true,
        },
        { src: "/images/fiskgjuse-hero.png", alt: "En fiskgjuse som flyger över ett svenskt kustlandskap med vinklade vingar." },
        { src: "/images/fiskgjuse-kannetecken.png", alt: "Närbild på fiskgjusens huvud med gul iris och kraftig krokig näbb." },
        { src: "/images/fiskgjuse-boplats.png", alt: "Ett stort risbo av fiskgjuse byggt i toppen av en tall." },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Hör dem Guide zu", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Fiskgjusen",
        intro: "[AI INTRO PLACEHOLDER – TO BE COMPLETED FOR FISKGJUSE]",
        presetQuestions: [
          "[AI QUESTION PLACEHOLDER 1: Hur fångar fiskgjusen fisk?]",
          "[AI QUESTION PLACEHOLDER 2: Varför bygger den bo i talltoppar?]",
          "[AI QUESTION PLACEHOLDER 3: Vart flyttar fiskgjusen om vintern?]",
        ],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
      en: {
        title: "Talk to the Osprey",
        intro: "[AI INTRO PLACEHOLDER – TO BE COMPLETED FOR FISKGJUSE]",
        presetQuestions: [
          "[AI QUESTION PLACEHOLDER 1: How does the osprey catch fish?]",
          "[AI QUESTION PLACEHOLDER 2: Why does it nest in pine tops?]",
          "[AI QUESTION PLACEHOLDER 3: Where does the osprey spend the winter?]",
        ],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
      de: {
        title: "Sprich mit dem Fischadler",
        intro: "[AI INTRO PLACEHOLDER – TO BE COMPLETED FOR FISKGJUSE]",
        presetQuestions: [
          "[AI QUESTION PLACEHOLDER 1: Wie fängt der Fischadler Fische?]",
          "[AI QUESTION PLACEHOLDER 2: Warum nistet er in Kiefernkronen?]",
          "[AI QUESTION PLACEHOLDER 3: Wo überwintert der Fischadler?]",
        ],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
    },
    chatSystemPrompt: `Du är en fiskgjuse (Pandion haliaetus) längs Kustvägen i Hälsingland och Västernorrland. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta i denna post: längd 55–60 cm, vingspann 145–170 cm, långa vinklade vingar, vit undersida, mörk ögonmask och gul iris. Du äter nästan bara fisk (mört, abborre, gädda) och dyker med fötterna först. Du har vändbara yttertår, vassa trampdynor för hala fiskar och näsborrar som stängs vid dyk. Ditt risbo ligger i toppen av gamla, kraftiga tallar nära vatten, kan väga flera hundra kilo och används i generationer. Du övervintrar i Västafrika och kommer tillbaka tidigt på våren. Om frågan inte handlar om fiskgjuse eller natur, led vänligt tillbaka till kusten. Hitta aldrig på fakta och säg att du inte vet när underlaget saknar svaret.`,
    avatarImage: "/images/sp-osprey.png",
    chatAvatarAlt: "Fiskgjusens ansikte",
    relatedSpecies: [
      { slug: "havsorn", name: "Havsörn", latin: "Haliaeetus albicilla", image: "/images/havsorn-hero.png" },
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

  spillkraka: {
    id: "spillkraka",
    scientificName: "Dryocopus martius",
    category: { sv: "Fåglar", en: "Birds", de: "Vögel" },
    names: { sv: "Spillkråka", en: "Black Woodpecker", de: "Schwarzspecht" },
    meta: {
      sv: {
        title: "Spillkråka – Kustvägen Naturguide",
        description:
          "Lär känna spillkråkan (Dryocopus martius), Europas största hackspett, längs Kustvägen. Upptäck dess kännetecken, spår i skogen och varför den är så viktig för andra djur.",
      },
      en: {
        title: "Black Woodpecker – Kustvägen Nature Guide",
        description:
          "Get to know the black woodpecker (Dryocopus martius), Europe's largest woodpecker, along Kustvägen.",
      },
      de: {
        title: "Schwarzspecht – Kustvägen Naturführer",
        description:
          "Lernen Sie den Schwarzspecht (Dryocopus martius), Europas größten Specht, entlang des Kustvägen kennen.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Längd & Vingspann", value: "45–55 cm | Vingspann 64–84 cm" },
        { label: "Föda", value: "Myror, skalbaggslarver och andra insekter i ved" },
        { label: "Boplats", value: "Ovalt bohål i grova aspar och tallar" },
        { label: "Status", value: "Stannfågel, året runt i Sverige" },
      ],
      en: [
        { label: "Length & Wingspan", value: "45–55 cm | Wingspan 64–84 cm" },
        { label: "Diet", value: "Ants, beetle larvae and other wood-living insects" },
        { label: "Nesting", value: "Oval nest hole in large aspens and pines" },
        { label: "Status", value: "Resident, year-round in Sweden" },
      ],
      de: [
        { label: "Länge & Spannweite", value: "45–55 cm | Spannweite 64–84 cm" },
        { label: "Nahrung", value: "Ameisen, Käferlarven und andere Holzinsekten" },
        { label: "Nistplatz", value: "Ovale Bruthöhle in dicken Espen und Kiefern" },
        { label: "Status", value: "Standvogel, ganzjährig in Schweden" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skogens största hackspett",
        intro:
          "Spillkråkan är Europas största hackspett, nästan lika stor som en kråka. Den är helt svart med en lysande röd hjässa och hörs på långt håll när den trummar eller ropar sitt klagande \"kliiee\" genom skogen.",
        quote: "Spillkråkans gamla bohål blir nya hem för ugglor, knipor och fladdermöss.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken",
            body: "Fjäderdräkten är helt svart. Hanen har röd hjässa från pannan till nacken, honan bara en röd fläck i nacken. Näbben är kraftig och ljust elfenbensfärgad, och ögat är ljust.",
            image: "/images/spillkraka-kannetecken.png",
            alt: "Närbild på en spillkråka med röd hjässa, svart fjäderdräkt och ljus näbb.",
            caption: "Hanen känns igen på den helt röda hjässan.",
          },
          {
            heading: "Spår i skogen",
            body: "Spillkråkan hackar stora, avlånga hål i stammar och stubbar för att komma åt myror och larver. Under träden ligger ofta stora flisor av ved. Bohålet är ovalt och sitter högt upp i grova aspar eller tallar.",
            image: "/images/spillkraka-spar.png",
            alt: "Stora avlånga hackhål och ett ovalt bohål i en trädstam med flisor på marken.",
            caption: "Stora flisor under ett träd avslöjar att spillkråkan varit där.",
          },
          {
            heading: "Viktig för andra djur",
            body: "Spillkråkan hackar ut ett nytt bohål nästan varje år. De gamla hålen blir boplatser för knipor, ugglor, skogsduvor och fladdermöss, så spillkråkan hjälper många andra arter i skogen.",
            image: "/images/spillkraka-hero.png",
            alt: "En spillkråka som klättrar på stammen av en gammal tall i en svensk skog.",
            caption: "Spillkråkan trivs i skog med gamla, grova träd.",
          },
        ],
      },
      en: {
        heroSubtitle: "The forest's largest woodpecker",
        intro:
          "The black woodpecker is Europe's largest woodpecker, almost the size of a crow. It is all black with a bright red crown and can be heard from far away when it drums or calls through the forest.",
        quote: "Its old nest holes become new homes for owls, goldeneyes and bats.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics",
            body: "The plumage is all black. The male has a red crown from forehead to nape, the female only a red patch on the nape. The beak is strong and pale ivory, and the eye is pale.",
            image: "/images/spillkraka-kannetecken.png",
            alt: "Close-up of a black woodpecker with red crown, black plumage and pale beak.",
            caption: "The male is recognised by its fully red crown.",
          },
          {
            heading: "Signs in the forest",
            body: "It chisels large, oblong holes in trunks and stumps to reach ants and larvae, leaving big wood chips on the ground. The oval nest hole sits high up in large aspens or pines.",
            image: "/images/spillkraka-spar.png",
            alt: "Large oblong feeding holes and an oval nest hole in a tree trunk with wood chips below.",
            caption: "Big wood chips under a tree reveal a black woodpecker's visit.",
          },
          {
            heading: "Important for others",
            body: "It excavates a new nest hole almost every year. The old holes become homes for goldeneyes, owls, stock doves and bats.",
            image: "/images/spillkraka-hero.png",
            alt: "A black woodpecker climbing the trunk of an old pine in a Swedish forest.",
            caption: "The black woodpecker thrives in forests with old, large trees.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der größte Specht des Waldes",
        intro:
          "Der Schwarzspecht ist Europas größter Specht, fast so groß wie eine Krähe. Er ist ganz schwarz mit leuchtend roter Kopfplatte und weithin zu hören, wenn er trommelt oder ruft.",
        quote: "Seine alten Höhlen werden zu neuen Zuhause für Eulen, Schellenten und Fledermäuse.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale",
            body: "Das Gefieder ist ganz schwarz. Das Männchen hat einen roten Scheitel von der Stirn bis zum Nacken, das Weibchen nur einen roten Nackenfleck. Der Schnabel ist kräftig und hell elfenbeinfarben.",
            image: "/images/spillkraka-kannetecken.png",
            alt: "Nahaufnahme eines Schwarzspechts mit roter Kopfplatte und hellem Schnabel.",
            caption: "Das Männchen erkennt man am ganz roten Scheitel.",
          },
          {
            heading: "Spuren im Wald",
            body: "Er hackt große, längliche Löcher in Stämme und Stümpfe, um an Ameisen und Larven zu kommen. Darunter liegen oft große Holzspäne. Die ovale Bruthöhle liegt hoch in dicken Espen oder Kiefern.",
            image: "/images/spillkraka-spar.png",
            alt: "Große längliche Hacklöcher und eine ovale Bruthöhle in einem Baumstamm.",
            caption: "Große Holzspäne verraten den Schwarzspecht.",
          },
          {
            heading: "Wichtig für andere",
            body: "Fast jedes Jahr hackt er eine neue Höhle. Die alten werden von Schellenten, Eulen, Hohltauben und Fledermäusen genutzt.",
            image: "/images/spillkraka-hero.png",
            alt: "Ein Schwarzspecht klettert an einer alten Kiefer in einem schwedischen Wald.",
            caption: "Der Schwarzspecht liebt Wälder mit alten, dicken Bäumen.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/spillkraka-hero.png",
        alt: {
          sv: "En spillkråka som klättrar på stammen av en gammal tall i en svensk skog.",
          en: "A black woodpecker climbing the trunk of an old pine in a Swedish forest.",
          de: "Ein Schwarzspecht klettert an einer alten Kiefer in einem schwedischen Wald.",
        },
      },
      detailImage: {
        url: "/images/spillkraka-kannetecken.png",
        alt: {
          sv: "Närbild på en spillkråka med röd hjässa, svart fjäderdräkt och ljus näbb.",
          en: "Close-up of a black woodpecker with red crown, black plumage and pale beak.",
          de: "Nahaufnahme eines Schwarzspechts mit roter Kopfplatte und hellem Schnabel.",
        },
      },
      galleryImages: [
        {
          src: "/video/spillkraka-naromradet.mp4",
          alt: "Video med spillkråka från närområdet",
          video: "/video/spillkraka-naromradet.mp4",
          tall: true,
        },
        { src: "/images/spillkraka-hero.png", alt: "En spillkråka som klättrar på stammen av en gammal tall." },
        { src: "/images/spillkraka-kannetecken.png", alt: "Närbild på en spillkråka med röd hjässa." },
        { src: "/images/spillkraka-spar.png", alt: "Hackhål och bohål av spillkråka i en trädstam." },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Hör dem Guide zu", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Spillkråkan",
        intro: "[AI INTRO PLACEHOLDER – TO BE COMPLETED FOR SPILLKRÅKA]",
        presetQuestions: [
          "[AI QUESTION PLACEHOLDER 1: Varför hackar spillkråkan i träd?]",
          "[AI QUESTION PLACEHOLDER 2: Vem bor i dina gamla bohål?]",
          "[AI QUESTION PLACEHOLDER 3: Hur skiljer man hane från hona?]",
        ],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
      en: {
        title: "Talk to the Black Woodpecker",
        intro: "[AI INTRO PLACEHOLDER – TO BE COMPLETED FOR SPILLKRÅKA]",
        presetQuestions: [
          "[AI QUESTION PLACEHOLDER 1: Why do you peck at trees?]",
          "[AI QUESTION PLACEHOLDER 2: Who lives in your old nest holes?]",
          "[AI QUESTION PLACEHOLDER 3: How do you tell male from female?]",
        ],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
      de: {
        title: "Sprich mit dem Schwarzspecht",
        intro: "[AI INTRO PLACEHOLDER – TO BE COMPLETED FOR SPILLKRÅKA]",
        presetQuestions: [
          "[AI QUESTION PLACEHOLDER 1: Warum hackst du in Bäume?]",
          "[AI QUESTION PLACEHOLDER 2: Wer wohnt in deinen alten Höhlen?]",
          "[AI QUESTION PLACEHOLDER 3: Wie unterscheidet man Männchen und Weibchen?]",
        ],
        fallback: "[AI RESPONSE DATA PLACEHOLDER]",
      },
    },
    chatSystemPrompt: `Du är en spillkråka (Dryocopus martius) längs Kustvägen i Hälsingland och Västernorrland. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta i denna post: Europas största hackspett, längd 45–55 cm, vingspann 64–84 cm, helt svart med ljus elfenbensfärgad näbb och ljust öga. Hanen har röd hjässa från pannan till nacken, honan bara en röd fläck i nacken. Du äter myror, skalbaggslarver och andra insekter i ved och hackar stora avlånga hål som lämnar stora flisor på marken. Ditt bohål är ovalt och sitter högt i grova aspar eller tallar. Du hackar ett nytt bohål nästan varje år och de gamla blir hem åt knipor, ugglor, skogsduvor och fladdermöss. Du är stannfågel och stannar i Sverige hela året. Om frågan inte handlar om spillkråka eller natur, led vänligt tillbaka till skogen. Hitta aldrig på fakta och säg att du inte vet när underlaget saknar svaret.`,
    avatarImage: "/images/sp-woodpecker.png",
    chatAvatarAlt: "Spillkråkans ansikte",
    relatedSpecies: [
      { slug: "fiskgjuse", name: "Fiskgjuse", latin: "Pandion haliaetus", image: "/images/fiskgjuse-hero.png" },
      { slug: "havsorn", name: "Havsörn", latin: "Haliaeetus albicilla", image: "/images/havsorn-hero.png" },
      { slug: "radjur", name: "Rådjur", latin: "Capreolus capreolus", image: "/images/sp-roedeer.png" },
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

  stromming: {
    id: "stromming",
    scientificName: "Clupea harengus membras",
    category: { sv: "Fiskar", en: "Fish", de: "Fische" },
    names: { sv: "Strömming", en: "Baltic Herring", de: "Ostseehering" },
    meta: {
      sv: {
        title: "Strömming – Kustvägens Naturguide",
        description:
          "Lär dig allt om strömmingen längs Kustvägen. Fakta om Östersjöns silver, lekplatser, ekologisk betydelse och lokal matkultur.",
      },
      en: {
        title: "Baltic Herring – Kustvägen Nature Guide",
        description:
          "Discover the Baltic Herring along Kustvägen. Learn about ecological importance, spawning grounds, and coastal food heritage.",
      },
      de: {
        title: "Ostseehering – Kustvägen Naturführer",
        description:
          "Erfahren Sie alles über den Ostseehering (Strömming) am Kustvägen. Fakten zu Ökologie, Laichplätzen und historischem Heringsfang.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Längd", value: "15–25 cm" },
        { label: "Vikt", value: "50–150 g" },
        { label: "Föda", value: "Djurplankton & kräftdjur" },
        { label: "Livsmiljö", value: "Östersjöns kust & öppet hav" },
      ],
      en: [
        { label: "Length", value: "15–25 cm" },
        { label: "Weight", value: "50–150 g" },
        { label: "Diet", value: "Zooplankton & crustaceans" },
        { label: "Habitat", value: "Baltic coast & open sea" },
      ],
      de: [
        { label: "Länge", value: "15–25 cm" },
        { label: "Gewicht", value: "50–150 g" },
        { label: "Nahrung", value: "Zooplankton & Krebstiere" },
        { label: "Lebensraum", value: "Ostseeküste & offenes Meer" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Östersjöns silverskatt",
        intro:
          "Strömmingen är Östersjöns viktigaste nyckelart och en hörnsten i Kustvägens kulturarv och mattradition. Att se ett stim glittra i solljuset under vattenytan är en fascinerande syn.\n\nSom den avgörande länken mellan plankton och större rovdjur – som torsk, säl och havsörn – bär strömmingen upp hela det marina ekosystemet i Bottenhavet.",
        quote: "Strömmingen är inte bara skärgårdens matkultur – den är själen och motorn i hela Östersjöns ekosystem.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Stimliv",
            body: "Strömmingen har en slank kropp med silvriga sidor, mörkblå rygg och bukfällar med en svag köl. Den lever i gigantiska stim som rör sig i rytmiska mönster. Stimmet fungerar som ett effektivt försvar där de tusentals glittrande kropparna förvillar jagande rovdjur.",
            image: "/images/stromming-stim.png",
            alt: "Närbild på strömmingens silvriga fjäll under vattenytan",
            caption: "Tusentals fiskar rör sig synkroniserat i skyddande stim.",
          },
          {
            heading: "Livscykel & Lek",
            body: "Under vår och höst söker sig strömmingen in mot grundare kustområden och skärgårdens tångbälten för att leka. Honan lägger sina klibbiga ägg på växter och stenar. Larverna kläcks efter ett par veckor och livnär sig på djurplankton.",
            image: "/images/stromming-bo.png",
            alt: "Undervattensbild av tångbälte i skärgården där strömmingen leker",
            caption: "Skärgårdens grunda tångvikar är avg��rande barnkammare för strömmingen.",
          },
          {
            heading: "Kultur & Fiske",
            body: "Fisket efter strömming har livnärt befolkningen längs Kustvägen i århundraden. Från historiskt salteri och rökning till klassiker som stekt strömming och surströmming är fisken en djup del av regionens identitet och kulinariska historia.",
            image: "/images/stromming-miljo.png",
            alt: "Gammalt fiskeläge längs Kustvägen med träbryggor och strömmingsnät",
            caption: "Kustvägens gamla fiskelägen vittnar om strömmingens historiska betydelse.",
          },
        ],
      },
      en: {
        heroSubtitle: "The Baltic's Silver Treasure",
        intro:
          "The Baltic Herring is a keystone species of the Baltic Sea and a cornerstone of Kustvägen's cultural and culinary heritage. Watching a school shimmer in the sunlight beneath the waves is a mesmerizing sight.\n\nServing as the vital bridge between microscopic plankton and top predators—such as cod, seals, and eagles—the herring sustains the entire marine ecosystem.",
        quote: "The Baltic Herring is not just coastal culinary tradition—it is the heartbeat and engine of the Baltic Sea.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Schooling",
            body: "The Baltic Herring features a slender body with silvery sides, a dark blue back, and keel-like belly scales. They live in massive schools that move in synchronized rhythms, confusing hunting predators with thousands of glittering bodies.",
            image: "/images/stromming-stim.png",
            alt: "Close-up of silvery herring scales glistening underwater",
            caption: "Thousands of fish move synchronously in protective schools.",
          },
          {
            heading: "Lifecycle & Spawning",
            body: "During spring and autumn, herring migrate to shallow coastal areas and kelp beds to spawn. Females lay adhesive eggs on vegetation and rocks. The larvae hatch after a couple of weeks, feeding on plankton.",
            image: "/images/stromming-bo.png",
            alt: "Underwater view of shallow coastal seaweed bed where herring spawn",
            caption: "Shallow archipelago bays serve as crucial nurseries for young herring.",
          },
          {
            heading: "Heritage & Fishing",
            body: "Herring fishing has sustained coastal communities along Kustvägen for centuries. From historic salting and smoking to delicacies like fried herring and fermented surströmming, the fish is deeply embedded in regional culture.",
            image: "/images/stromming-miljo.png",
            alt: "Historic fishing village along Kustvägen with wooden docks and nets",
            caption: "Historic fishing harbors along Kustvägen bear witness to the herring's legacy.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der Silberschatz der Ostsee",
        intro:
          "Der Ostseehering (Strömming) ist eine Schlüsselart der Ostsee und ein zentraler Baustein der Kultur- und Essgeschichte des Kustvägen.\n\nAls entscheidendes Bindeglied zwischen Plankton und Raubtieren – wie Dorsch, Robben und Seeadler – trägt der Hering das gesamte marine Ökosystem.",
        quote: "Der Ostseehering ist nicht nur Kulinarik der Schären – er ist der Puls und Motor der gesamten Ostsee.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Schwarmverhalten",
            body: "Der Ostseehering hat einen schlanken Körper mit silbernen Seiten und dunklem Rücken. Sie leben in riesigen Schwärmen, deren synchrone Bewegungen Fressfeinde verwirren.",
            image: "/images/stromming-stim.png",
            alt: "Nahaufnahme von silbernen Heringsschuppen unter Wasser",
            caption: "Tausende Fische bewegen sich synchron im schützenden Schwarm.",
          },
          {
            heading: "Lebenszyklus & Laichen",
            body: "Im Frühjahr und Herbst ziehen die Heringe in flache Küstenzonen und Tangwälder, um zu laichen. Die Eier haften an Pflanzen und Felsen, wo die Larven nach wenigen Wochen schlüpfen.",
            image: "/images/stromming-bo.png",
            alt: "Unterwasseraufnahme eines Tangwaldes in den Schären",
            caption: "Flache Schärenbuchten sind wichtige Kinderstuben für den Hering.",
          },
          {
            heading: "Kultur & Fischerei",
            body: "Der Heringsfang ernährt die Küstenregion am Kustvägen seit Jahrhunderten. Von historischem Einsalzen bis zu Delikatessen wie Surströmming prägt der Fisch die Identität der Region.",
            image: "/images/stromming-miljo.png",
            alt: "Historisches Fischerdorf am Kustvägen mit Holzstegen und Netzen",
            caption: "Historische Fischerdörfer zeugen von der Bedeutung des Herings.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/stromming-hero.png",
        alt: {
          sv: "Ett stim av strömming simmar i det klara, grönblå Östersjövattnet",
          en: "A school of Baltic herring swimming in clear greenish-blue Baltic sea water",
          de: "Ein Schwarm Ostseeheringe schwimmt im klaren grünblauen Wasser",
        },
      },
      detailImage: {
        url: "/images/stromming-stim.png",
        alt: {
          sv: "Närbild på strömmingens silvriga fjäll under vattenytan",
          en: "Close-up of silvery herring scales glistening underwater",
          de: "Nahaufnahme von silbernen Heringsschuppen unter Wasser",
        },
      },
      galleryImages: [
        {
          src: "/images/stromming-hero.png",
          alt: "Stim av strömming i klart vatten",
          video: "/video/stromming.mp4",
        },
        { src: "/images/stromming-stim.png", alt: "Strömmingsstim virvlar i vattnet" },
        { src: "/images/stromming-bo.png", alt: "Tångbälte där strömmingen leker" },
        { src: "/images/stromming-miljo.png", alt: "Gammalt fiskeläge längs Kustvägen" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/stromming_guide_sv.mp3" },
        en: { title: "Listen to the Story of the Baltic Herring", url: "" },
        de: { title: "Dem Ostseehering lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Strömmingen",
        intro: "Ställ en fråga till strömmingen och lär dig mer om dess liv i Östersjön!",
        presetQuestions: ["Varför simmar ni i så stora stim?", "Vad är skillnaden på sill och strömming?", "Vad äter du?"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Baltic Herring",
        intro: "Ask the Baltic Herring a question to learn more about its life in the sea!",
        presetQuestions: [
          "Why do you swim in huge schools?",
          "What is the difference between herring and Baltic herring?",
          "What do you eat?",
        ],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit dem Ostseehering",
        intro: "Stelle dem Ostseehering eine Frage und erfahre mehr über sein Leben im Meer!",
        presetQuestions: [
          "Warum schwimmt ihr in so großen Schwärmen?",
          "Was ist der Unterschied zwischen Hering und Strömming?",
          "Was frisst du am liebsten?",
        ],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `Du är en strömming (Clupea harengus membras) längs Kustvägen i Bottenhavet. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta i denna post: 15–25 cm lång, 50–150 g, slank kropp med silvriga sidor och mörkblå rygg. Du lever i gigantiska stim som rör sig synkroniserat som skydd mot rovdjur som säl, torsk och havsörn. Under vår och höst leker du i skärgårdens tångbälten där honan lägger klibbiga ägg på växter och stenar. Du äter djurplankton och kräftdjur som du filtrerar ur vattnet. Sill och strömming är samma art, men fisken som fångas norr om Kalmarsund i den mindre salta Östersjön kallas strömming och blir ofta något mindre. Om frågan inte handlar om strömming eller havet, led vänligt tillbaka till Östersjön. Hitta aldrig på fakta och säg att du inte vet när underlaget saknar svaret.`,
    avatarImage: "/images/sp-herring.png",
    chatAvatarAlt: "Strömmingens ansikte",
    relatedSpecies: [
      { slug: "havsorn", name: "Havsörn", latin: "Haliaeetus albicilla", image: "/images/species-eagle.png" },
      { slug: "lodjur", name: "Lodjur", latin: "Lynx lynx", image: "/images/lodjur-v2-hero.jpg" },
      { slug: "rodrav", name: "Rödräv", latin: "Vulpes vulpes", image: "/images/rodrav-hero.png" },
    ],
    relatedSectionHeading: {
      sv: "Upptäck fler fiskar",
      en: "Discover more fish",
      de: "Weitere Fische entdecken",
    },
    relatedLinkLabel: {
      sv: "Visa alla fiskar",
      en: "View all fish",
      de: "Alle Fische anzeigen",
    },
  },

  gadda: {
    id: "gadda",
    scientificName: "Esox lucius",
    category: { sv: "Fiskar", en: "Fish", de: "Fische" },
    names: { sv: "Gädda", en: "Northern Pike", de: "Hecht" },
    meta: {
      sv: {
        title: "Gädda – Kustvägens Naturguide",
        description:
          "Lär dig allt om gäddan längs Kustvägen. Fakta om Nordens största sötvattensrovfisk, dess jaktteknik och lekvanor.",
      },
      en: {
        title: "Northern Pike – Kustvägen Nature Guide",
        description:
          "Discover the Northern Pike along Kustvägen. Learn about one of the north's largest freshwater predators, its hunting technique and spawning habits.",
      },
      de: {
        title: "Hecht – Kustvägen Naturführer",
        description:
          "Erfahren Sie alles über den Hecht am Kustvägen. Fakten zum größten Süßwasserraubfisch des Nordens, seiner Jagdtechnik und dem Laichverhalten.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Storlek", value: "Upp till 1,5 meter och 20 kg" },
        { label: "Diet", value: "Ensamlevande rovfisk (fisk, groddjur och fågel)" },
        { label: "Lek", value: "Våren i grunda vattendrag" },
        { label: "Ålder", value: "Kan bli över 10 år gammal" },
      ],
      en: [
        { label: "Size", value: "Up to 1.5 meters and 20 kg" },
        { label: "Diet", value: "Solitary predator (fish, amphibians and birds)" },
        { label: "Spawning", value: "Spring in shallow waterways" },
        { label: "Age", value: "Can live over 10 years" },
      ],
      de: [
        { label: "Größe", value: "Bis zu 1,5 Meter und 20 kg" },
        { label: "Nahrung", value: "Einzelgängerischer Räuber (Fisch, Amphibien, Vögel)" },
        { label: "Laichzeit", value: "Frühling in flachen Gewässern" },
        { label: "Alter", value: "Kann über 10 Jahre alt werden" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Vattnets tysta rovdjur",
        intro:
          "Gäddan är en av våra största sötvattensrovfiskar och en skicklig jägare med sin strömlinjeformade kropp. Den förekommer i både havet, sjöar och rinnande vatten längs Kustvägen.\n\nMed sitt kamouflagemönster och blixtsnabba anfall från vassruggar och undervattensvegetation är gäddan en mästare på överraskningstaktik.",
        quote: "Stilla som en skugga bland vasstråna – tills gäddan slår till.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Gäddan har en långsträckt, strömlinjeformad kropp och ett brett, ankliknande gap fyllt av vassa tänder. Det gröngula, marmorerade mönstret gör den nästan osynlig bland vass och vattenväxter.",
            image: "/images/fiskar/Gadda_Huvudbild_01.png",
            alt: "Gädda som simmar bland vattenväxter",
            caption: "Kamouflaget gör gäddan nästan osynlig bland vasstråna.",
          },
          {
            heading: "Jakt & Föda",
            body: "Gäddan är en hänsynslös bakhållsjägare. Den ligger orörlig och väntar innan den med ett blixtsnabbt utfall slukar fisk, groddjur och ibland även fågel. De bakåtriktade tänderna gör att bytet inte kan slingra sig loss.",
            image: "/images/fiskar/gadda-detalj.png",
            alt: "Närbild på gäddans tandbeklädda käkar",
            caption: "De bakåtvända tänderna ger bytet ingen chans att komma loss.",
          },
          {
            heading: "Livsmiljö & Lek",
            body: "Gäddan trivs i grunda, vegetationsrika vikar i både sött och bräckt vatten. På våren vandrar den in på översvämmade strandängar och grunda vikar för att leka, där äggen fäster på fjolårets vass.",
            image: "/images/fiskar/gadda-miljo.png",
            alt: "Vassrik vik där gäddan jagar och leker",
            caption: "Grunda, vassrika vikar är både jaktmark och barnkammare.",
          },
        ],
      },
      en: {
        heroSubtitle: "The water's silent predator",
        intro:
          "The Northern Pike is one of our largest freshwater predators, a skilled hunter with a streamlined body. It's found in the sea, lakes, and flowing waters along Kustvägen.\n\nWith its camouflage pattern and lightning-fast strikes from reed beds and underwater vegetation, the pike is a master of ambush tactics.",
        quote: "Still as a shadow among the reeds – until the pike strikes.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "The pike has an elongated, streamlined body and a broad, duck-like snout full of sharp teeth. Its greenish, marbled pattern makes it nearly invisible among reeds and aquatic plants.",
            image: "/images/fiskar/Gadda_Huvudbild_01.png",
            alt: "Pike swimming among aquatic plants",
            caption: "Its camouflage makes the pike almost invisible among the reeds.",
          },
          {
            heading: "Hunting & Diet",
            body: "The pike is a ruthless ambush predator. It lies motionless before striking with a lightning-fast lunge to engulf fish, amphibians and sometimes even birds. Its backward-facing teeth mean prey cannot wriggle free.",
            image: "/images/fiskar/gadda-detalj.png",
            alt: "Close-up of the pike's tooth-lined jaws",
            caption: "Its backward-facing teeth give prey no chance to escape.",
          },
          {
            heading: "Habitat & Spawning",
            body: "The pike thrives in shallow, vegetation-rich bays in both fresh and brackish water. In spring it moves into flooded meadows and shallow inlets to spawn, where the eggs attach to last year's reeds.",
            image: "/images/fiskar/gadda-miljo.png",
            alt: "Reedy bay where the pike hunts and spawns",
            caption: "Shallow, reedy bays are both hunting ground and nursery.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der stille Räuber des Wassers",
        intro:
          "Der Hecht ist einer unserer größten Süßwasserraubfische, ein geschickter Jäger mit stromlinienförmigem Körper. Er kommt im Meer, in Seen und in fließenden Gewässern entlang des Kustvägen vor.\n\nMit seinem Tarnmuster und blitzschnellen Angriffen aus Schilfgürteln und Unterwasserpflanzen ist der Hecht ein Meister der Überraschungstaktik.",
        quote: "Still wie ein Schatten im Schilf – bis der Hecht zuschlägt.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Der Hecht hat einen langgestreckten, stromlinienförmigen Körper und eine breite, entenschnabelartige Schnauze voller scharfer Zähne. Sein grünliches, marmoriertes Muster macht ihn zwischen Schilf und Wasserpflanzen fast unsichtbar.",
            image: "/images/fiskar/Gadda_Huvudbild_01.png",
            alt: "Hecht schwimmt zwischen Wasserpflanzen",
            caption: "Seine Tarnung macht den Hecht im Schilf fast unsichtbar.",
          },
          {
            heading: "Jagd & Nahrung",
            body: "Der Hecht ist ein gnadenloser Lauerjäger. Er liegt regungslos, bevor er mit einem blitzschnellen Vorstoß Fische, Amphibien und manchmal sogar Vögel verschlingt. Seine nach hinten gerichteten Zähne lassen die Beute nicht entkommen.",
            image: "/images/fiskar/gadda-detalj.png",
            alt: "Nahaufnahme der bezahnten Kiefer des Hechts",
            caption: "Seine nach hinten gerichteten Zähne lassen der Beute keine Chance.",
          },
          {
            heading: "Lebensraum & Laichzeit",
            body: "Der Hecht lebt in flachen, pflanzenreichen Buchten in Süß- und Brackwasser. Im Frühjahr zieht er zum Laichen in überflutete Wiesen und flache Buchten, wo die Eier am vorjährigen Schilf haften.",
            image: "/images/fiskar/gadda-miljo.png",
            alt: "Schilfreiche Bucht, in der der Hecht jagt und laicht",
            caption: "Flache, schilfreiche Buchten sind Jagdrevier und Kinderstube zugleich.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/fiskar/Gadda_Huvudbild_01.png",
        alt: {
          sv: "En gädda simmar bland vattenväxter i en skogssjö",
          en: "A pike swimming among aquatic plants in a forest lake",
          de: "Ein Hecht schwimmt zwischen Wasserpflanzen in einem Waldsee",
        },
      },
      detailImage: {
        url: "/images/fiskar/gadda-detalj.png",
        alt: {
          sv: "Närbild på gäddans käkar och tandbeklädda gap",
          en: "Close-up of the pike's jaws and tooth-lined mouth",
          de: "Nahaufnahme der Hechtkiefer mit Zähnen",
        },
      },
      galleryImages: [
        { src: "/images/fiskar/Gadda_Huvudbild_01.png", alt: "Gädda som simmar bland vattenväxter" },
        { src: "/images/fiskar/gadda-detalj.png", alt: "Närbild på gäddans käkar" },
        { src: "/images/fiskar/gadda-miljo.png", alt: "Vassrik vik där gäddan jagar" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the Story of the Pike", url: "" },
        de: { title: "Dem Hecht lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Gäddan",
        intro: "Undrar du hur det är att vara vattnets tystaste jägare? Ställ en fråga till mig och lär dig mer om mitt liv bland vassen längs Kustvägen.",
        presetQuestions: ["Hur stor kan du bli?", "Hur jagar du?", "Var lägger du din rom?", "Har du verkligen så många tänder?", "Var gömmer du dig?"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Pike",
        intro: "Curious what it's like to be the water's silent hunter? Ask me a question and learn more about my life among the reeds along Kustvägen.",
        presetQuestions: ["How big can you get?", "How do you hunt?", "Where do you lay your eggs?", "Do you really have that many teeth?", "Where do you hide?"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit dem Hecht",
        intro: "Neugierig, wie es ist, der lautloseste Jäger des Wassers zu sein? Stell mir eine Frage und erfahre mehr über mein Leben im Schilf am Kustvägen.",
        presetQuestions: ["Wie groß kannst du werden?", "Wie jagst du?", "Wo legst du deine Eier ab?", "Hast du wirklich so viele Zähne?", "Wo versteckst du dich?"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `Du är en gädda (Esox lucius) som lever i vikar, sjöar och vattendrag längs Kustvägen i Hälsingland och Västernorrland i Sverige. Du pratar DIREKT med barn som besöker naturen.

VIKTIGT - du pratar med BARN:
- Svara alltid på enkel, varm och lekfull svenska som ett barn (ca 7-12 år) lätt förstår.
- Håll svaren KORTA: 1-3 meningar. Aldrig långa stycken.
- Prata i jag-form, som om DU är gäddan. Till exempel: "Jag ligger alldeles stilla i vassen och väntar på mitt byte!"
- Var nyfiken, vänlig och uppmuntrande. Använd gärna jämförelser med saker barn känner till.
- Använd högst en enkel emoji ibland (som 🐟) om det passar, men inte i varje svar.

INNEHÅLL - håll dig till fakta om gäddan:
- Storlek: kan bli upp till 1,5 meter lång och väga 20 kg. En av Nordens största sötvattensrovfiskar.
- Mat: rovfisk som äter annan fisk, groddjur och ibland små fåglar. Jagar från bakhåll.
- Kropp: lång och strömlinjeformad, grön-gul marmorering som kamouflage, brett gap med många vassa, bakåtriktade tänder.
- Lever ensam i grunda, vegetationsrika vikar i både sött och bräckt vatten.
- Leker på våren i grunda, översvämmade vikar där rommen fäster på vass.

SÄKERHET:
- Om barnet frågar om något som inte handlar om naturen, djur eller gäddan, led vänligt tillbaka samtalet till vattnet och dig som gädda.
- Hitta aldrig på skrämmande eller olämpligt innehåll. Allt ska kännas tryggt och magiskt.
- Om du inte vet svaret, säg det ärligt på ett lekfullt sätt.`,
    avatarImage: "/images/fiskar/Gadda_Huvudbild_01.png",
    chatAvatarAlt: "Gäddans ansikte",
    relatedSpecies: [
      { slug: "abborre", name: "Abborre", latin: "Perca fluviatilis", image: "/images/fiskar/Abborre_Huvudbild_01.png" },
      { slug: "stromming", name: "Strömming", latin: "Clupea harengus", image: "/images/sp-herring.png" },
      { slug: "lax", name: "Lax", latin: "Salmo salar", image: "/images/sp-salmon.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler fiskar", en: "Discover more fish", de: "Weitere Fische entdecken" },
    relatedLinkLabel: { sv: "Visa alla fiskar", en: "View all fish", de: "Alle Fische anzeigen" },
  },

  abborre: {
    id: "abborre",
    scientificName: "Perca fluviatilis",
    category: { sv: "Fiskar", en: "Fish", de: "Fische" },
    names: { sv: "Abborre", en: "European Perch", de: "Flussbarsch" },
    meta: {
      sv: {
        title: "Abborre – Kustvägens Naturguide",
        description:
          "Lär dig allt om abborren längs Kustvägen. Fakta om en av Sveriges mest populära mat- och sportfiskar och dess stimliv.",
      },
      en: {
        title: "European Perch – Kustvägen Nature Guide",
        description:
          "Discover the European Perch along Kustvägen. Learn about one of Sweden's most popular food and sport fish and its schooling life.",
      },
      de: {
        title: "Flussbarsch – Kustvägen Naturführer",
        description:
          "Erfahren Sie alles über den Flussbarsch am Kustvägen. Fakten zu einem der beliebtesten Speise- und Sportfische Schwedens.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Storlek", value: "Vanligtvis 20–40 cm (enstaka över 50 cm / 3 kg)" },
        { label: "Beteende", value: "Lever i stim, bildar ibland \"tusenbröder\"" },
        { label: "Lektid", value: "April–juni (lägger upp till 20 000 ägg)" },
        { label: "Diet", value: "Små kräftdjur och småfisk" },
      ],
      en: [
        { label: "Size", value: "Typically 20–40 cm (occasionally over 50 cm / 3 kg)" },
        { label: "Behavior", value: "Lives in schools, sometimes forms stunted dwarf shoals" },
        { label: "Spawning", value: "April–June (lays up to 20,000 eggs)" },
        { label: "Diet", value: "Small crustaceans and small fish" },
      ],
      de: [
        { label: "Größe", value: "Meist 20–40 cm (vereinzelt über 50 cm / 3 kg)" },
        { label: "Verhalten", value: "Lebt in Schwärmen, bildet manchmal Zwergformen" },
        { label: "Laichzeit", value: "April–Juni (bis zu 20.000 Eier)" },
        { label: "Nahrung", value: "Kleine Krebstiere und kleine Fische" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Vassens randiga stimfisk",
        intro:
          "Abborren är en av Sveriges mest populära mat- och sportfiskar och känns lätt igen på sina mörka tvärband och de rödorange fenorna. Vid hög konkurrens om maten kan den bilda stim av dvärgformer som kallas tusenbröder.\n\nDen trivs i det mesta av Kustvägens vatten, från grunda vikar till djupare insjöar, och jagar ofta i samordnade grupper.",
        quote: "Ett glittrande stim i vassen – abborrens signatur längs hela kusten.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Abborren känns lätt igen på sina 5–9 mörka tvärband och de rödorange bröst- och bukfenorna. Den främre ryggfenan är taggig och har en svart fläck längst bak – en tydlig varningssignal till rovdjur.",
            image: "/images/fiskar/Abborre_Huvudbild_01.png",
            alt: "Stim av abborre med tydliga tvärband",
            caption: "De mörka banden bryter upp konturen och gömmer abborren i vassen.",
          },
          {
            heading: "Stimliv & Jakt",
            body: "Abborren lever i stim och jagar ofta i samordnade grupper mot småfisk och kräftdjur. Vid hård konkurrens om maten kan den bilda tätpackade stim av dvärgformer som kallas tusenbröder.",
            image: "/images/fiskar/abborre-detalj.png",
            alt: "Närbild på abborrens taggiga ryggfena",
            caption: "Den taggiga ryggfenan reses som försvar mot angripare.",
          },
          {
            heading: "Livsmiljö & Lek",
            body: "Abborren trivs i det mesta av Kustvägens vatten, från grunda vikar till djupare insjöar. Under våren lägger honan upp till 20 000 ägg i långa, geléartade band som slingrar sig kring vass och grenar.",
            image: "/images/fiskar/abborre-miljo.png",
            alt: "Stenig sjöbotten där abborren samlas i stim",
            caption: "Steniga bottnar och vass ger både skydd och jaktmark.",
          },
        ],
      },
      en: {
        heroSubtitle: "The reed's striped schooling fish",
        intro:
          "The European Perch is one of Sweden's most popular food and sport fish, easily recognized by its dark vertical bands and reddish-orange fins. Under high food competition it can form stunted dwarf shoals.\n\nIt thrives in most of Kustvägen's waters, from shallow bays to deeper lakes, and often hunts in coordinated groups.",
        quote: "A glittering shoal in the reeds – the perch's signature along the whole coast.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "The perch is easily recognized by its 5–9 dark vertical bands and reddish-orange pectoral and pelvic fins. The front dorsal fin is spiny with a black spot at the rear – a clear warning to predators.",
            image: "/images/fiskar/Abborre_Huvudbild_01.png",
            alt: "School of perch with distinct vertical bands",
            caption: "The dark bands break up its outline and hide the perch in the reeds.",
          },
          {
            heading: "Schooling & Hunting",
            body: "The perch lives in schools and often hunts small fish and crustaceans in coordinated groups. Under heavy food competition it can form tightly packed shoals of stunted dwarf fish.",
            image: "/images/fiskar/abborre-detalj.png",
            alt: "Close-up of the perch's spiny dorsal fin",
            caption: "The spiny dorsal fin is raised as a defense against attackers.",
          },
          {
            heading: "Habitat & Spawning",
            body: "The perch thrives in most of Kustvägen's waters, from shallow bays to deeper lakes. In spring the female lays up to 20,000 eggs in long, jelly-like ribbons that wind around reeds and branches.",
            image: "/images/fiskar/abborre-miljo.png",
            alt: "Rocky lake bottom where perch gather in schools",
            caption: "Rocky bottoms and reeds provide both shelter and hunting ground.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der gestreifte Schwarmfisch des Schilfs",
        intro:
          "Der Flussbarsch ist einer der beliebtesten Speise- und Sportfische Schwedens, leicht erkennbar an seinen dunklen Querstreifen und rotorangen Flossen. Bei starker Nahrungskonkurrenz kann er Zwergformen bilden.\n\nEr fühlt sich in den meisten Gewässern des Kustvägen wohl, von flachen Buchten bis zu tieferen Seen, und jagt oft in koordinierten Gruppen.",
        quote: "Ein glitzernder Schwarm im Schilf – das Markenzeichen des Barsches entlang der Küste.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Der Flussbarsch ist leicht an seinen 5–9 dunklen Querstreifen und den rotorangen Brust- und Bauchflossen erkennbar. Die vordere Rückenflosse ist stachelig und trägt hinten einen schwarzen Fleck – ein deutliches Warnsignal an Räuber.",
            image: "/images/fiskar/Abborre_Huvudbild_01.png",
            alt: "Barschschwarm mit deutlichen Querstreifen",
            caption: "Die dunklen Streifen lösen die Kontur auf und verbergen den Barsch im Schilf.",
          },
          {
            heading: "Schwarmleben & Jagd",
            body: "Der Flussbarsch lebt in Schwärmen und jagt oft in koordinierten Gruppen kleine Fische und Krebstiere. Bei starker Nahrungskonkurrenz kann er dicht gedrängte Schwärme von Zwergformen bilden.",
            image: "/images/fiskar/abborre-detalj.png",
            alt: "Nahaufnahme der stacheligen Rückenflosse des Barsches",
            caption: "Die stachelige Rückenflosse wird zur Abwehr aufgestellt.",
          },
          {
            heading: "Lebensraum & Laichzeit",
            body: "Der Flussbarsch fühlt sich in den meisten Gewässern des Kustvägen wohl, von flachen Buchten bis zu tieferen Seen. Im Frühjahr legt das Weibchen bis zu 20.000 Eier in langen, gallertartigen Bändern ab, die sich um Schilf und Zweige winden.",
            image: "/images/fiskar/abborre-miljo.png",
            alt: "Steiniger Seegrund, an dem sich Barsche im Schwarm sammeln",
            caption: "Steinige Böden und Schilf bieten Schutz und Jagdrevier zugleich.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/fiskar/Abborre_Huvudbild_01.png",
        alt: {
          sv: "Ett stim av abborre simmar i klart vatten bland stenar",
          en: "A school of perch swimming in clear water among rocks",
          de: "Ein Barschschwarm schwimmt im klaren Wasser zwischen Steinen",
        },
      },
      detailImage: {
        url: "/images/fiskar/abborre-detalj.png",
        alt: {
          sv: "Närbild på abborrens taggiga ryggfena och tvärband",
          en: "Close-up of the perch's spiny dorsal fin and vertical bands",
          de: "Nahaufnahme der stacheligen Rückenflosse und Querstreifen des Barsches",
        },
      },
      galleryImages: [
        { src: "/images/fiskar/Abborre_Huvudbild_01.png", alt: "Stim av abborre i klart vatten" },
        { src: "/images/fiskar/abborre-detalj.png", alt: "Närbild på abborrens ryggfena" },
        { src: "/images/fiskar/abborre-miljo.png", alt: "Stenig sjöbotten där abborren samlas" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the Story of the Perch", url: "" },
        de: { title: "Dem Flussbarsch lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Abborren",
        intro: "Vill du veta hur det är att leva i ett stort stim? Ställ en fråga till mig och lär dig mer om mitt liv i vassen längs Kustvägen.",
        presetQuestions: ["Varför är du randig?", "Lever du ensam eller i stim?", "Vad äter du?", "Hur stor kan du bli?", "Vad är en tusenbror?"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Perch",
        intro: "Want to know what it's like to live in a big school? Ask me a question and learn more about my life in the reeds along Kustvägen.",
        presetQuestions: ["Why are you striped?", "Do you live alone or in a school?", "What do you eat?", "How big can you get?", "What is a dwarf shoal?"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit dem Flussbarsch",
        intro: "Möchtest du wissen, wie es ist, in einem großen Schwarm zu leben? Stell mir eine Frage und erfahre mehr über mein Leben im Schilf am Kustvägen.",
        presetQuestions: ["Warum bist du gestreift?", "Lebst du allein oder im Schwarm?", "Was frisst du?", "Wie groß kannst du werden?", "Was ist eine Zwergform?"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `Du är en abborre (Perca fluviatilis) som lever i vikar och sjöar längs Kustvägen i Hälsingland och V��sternorrland i Sverige. Du pratar DIREKT med barn som besöker naturen.

VIKTIGT - du pratar med BARN:
- Svara alltid på enkel, varm och lekfull svenska som ett barn (ca 7-12 år) lätt förstår.
- Håll svaren KORTA: 1-3 meningar. Aldrig långa stycken.
- Prata i jag-form, som om DU är abborren. Till exempel: "Jag simmar i ett stort stim tillsammans med mina kompisar!"
- Var nyfiken, vänlig och uppmuntrande. Använd gärna jämförelser med saker barn känner till.
- Använd högst en enkel emoji ibland (som 🐟) om det passar, men inte i varje svar.

INNEHÅLL - håll dig till fakta om abborren:
- Storlek: vanligtvis 20-40 cm, men enstaka kan bli över 50 cm och väga 3 kg.
- Utseende: 5-9 mörka tvärband på kroppen, rödorange fenor och en taggig främre ryggfena med en svart fläck.
- Lever i stim och jagar ofta tillsammans. Vid matbrist bildas dvärgstim som kallas tusenbröder.
- Mat: små kräftdjur och småfisk.
- Leker på våren (april-juni) och lägger upp till 20 000 ägg i långa geléband kring vass.
- En av Sveriges mest populära mat- och sportfiskar.

SÄKERHET:
- Om barnet frågar om något som inte handlar om naturen, djur eller abborren, led vänligt tillbaka samtalet till vattnet och dig som abborre.
- Hitta aldrig på skrämmande eller olämpligt innehåll. Allt ska kännas tryggt och magiskt.
- Om du inte vet svaret, säg det ärligt på ett lekfullt sätt.`,
    avatarImage: "/images/fiskar/Abborre_Huvudbild_01.png",
    chatAvatarAlt: "Abborrens ansikte",
    relatedSpecies: [
      { slug: "gadda", name: "Gädda", latin: "Esox lucius", image: "/images/fiskar/Gadda_Huvudbild_01.png" },
      { slug: "sik", name: "Sik", latin: "Coregonus lavaretus", image: "/images/fiskar/Sik_Huvudbild_01.png" },
      { slug: "stromming", name: "Strömming", latin: "Clupea harengus", image: "/images/sp-herring.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler fiskar", en: "Discover more fish", de: "Weitere Fische entdecken" },
    relatedLinkLabel: { sv: "Visa alla fiskar", en: "View all fish", de: "Alle Fische anzeigen" },
  },

  oring: {
    id: "oring",
    scientificName: "Salmo trutta",
    category: { sv: "Fiskar", en: "Fish", de: "Fische" },
    names: { sv: "Öring", en: "Brown Trout", de: "Bachforelle" },
    meta: {
      sv: {
        title: "Öring – Kustvägens Naturguide",
        description:
          "Lär dig allt om öringen längs Kustvägen. Fakta om havsöring, insjööring och bäcköring samt deras vandring och lekvanor.",
      },
      en: {
        title: "Brown Trout – Kustvägen Nature Guide",
        description:
          "Discover the Brown Trout along Kustvägen. Learn about sea trout, lake trout and brook trout, their migration and spawning habits.",
      },
      de: {
        title: "Bachforelle – Kustvägen Naturführer",
        description:
          "Erfahren Sie alles über die Forelle am Kustvägen. Fakten zu Meerforelle, Seeforelle und Bachforelle sowie ihrer Wanderung und Laichzeit.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Typer", value: "Havsöring, insjööring och bäcköring" },
        { label: "Lektid", value: "Hösten i rinnande vattendrag" },
        { label: "Storlek", value: "Havsöring (upp till 15 kg), Bäcköring (20–30 cm)" },
        { label: "Familj", value: "Laxfiskar" },
      ],
      en: [
        { label: "Types", value: "Sea trout, lake trout and brook trout" },
        { label: "Spawning", value: "Autumn in flowing waterways" },
        { label: "Size", value: "Sea trout (up to 15 kg), brook trout (20–30 cm)" },
        { label: "Family", value: "Salmonidae" },
      ],
      de: [
        { label: "Typen", value: "Meerforelle, Seeforelle und Bachforelle" },
        { label: "Laichzeit", value: "Herbst in fließenden Gewässern" },
        { label: "Größe", value: "Meerforelle (bis 15 kg), Bachforelle (20–30 cm)" },
        { label: "Familie", value: "Salmoniden" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Den formstarka vandraren",
        intro:
          "Öringen anpassar sig starkt efter sin miljö vilket avspeglas i storleken. Som unga vandrar de ut i sjöar eller hav för att växa sig stora innan de återvänder till födelseplatsen för att leka.\n\nLängs Kustvägen möter man både den kraftfulla havsöringen i kustvattnen och den mer blygsamma bäcköringen i skogens klara bäckar.",
        quote: "Från bäckens stilla vatten till havets vidder – öringen bär alltid hem till lekplatsen i minnet.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Öringen har en kraftig, muskulös kropp täckt av svarta och röda prickar med ljusa ringar. Färgen varierar starkt med miljön – blank och silvrig som havsöring, mörkare och mer färgstark som bäcköring i skogens vatten.",
            image: "/images/fiskar/Oring_Huvudbild_01.png",
            alt: "Öring i strömmande vatten med tydliga prickar",
            caption: "Prickmönstret är lika unikt som ett fingeravtryck för varje öring.",
          },
          {
            heading: "Vandring & Lek",
            body: "Som ung vandrar öringen ut till sjö eller hav för att växa sig stor. På hösten återvänder den till samma vattendrag där den själv kläcktes för att leka, och gräver ner rommen i grusbottnen.",
            image: "/images/fiskar/oring-detalj.png",
            alt: "Närbild på öringens fläckiga sida",
            caption: "Öringen hittar tillbaka till sin egen födelseplats för att leka.",
          },
          {
            heading: "Livsmiljö & Beteende",
            body: "��ringen kräver rent, syrerikt och svalt vatten. Längs Kustvägen möter man den kraftfulla havsöringen i kustvattnen och den mer blygsamma bäcköringen som står stilla i strömmen och väntar på insekter.",
            image: "/images/fiskar/oring-miljo.png",
            alt: "Klar skogsbäck som är öringens livsmiljö",
            caption: "Klara, strömmande bäckar är öringens hem och barnkammare.",
          },
        ],
      },
      en: {
        heroSubtitle: "The shape-shifting wanderer",
        intro:
          "The Brown Trout adapts strongly to its environment, which is reflected in its size. As juveniles, they migrate to lakes or the sea to grow large before returning to their birthplace to spawn.\n\nAlong Kustvägen, you can find both the powerful sea trout in coastal waters and the more modest brook trout in the forest's clear streams.",
        quote: "From the stream's still water to the vastness of the sea – the trout always carries home in its memory.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "The trout has a sturdy, muscular body covered in black and red spots with pale rings. Its color varies greatly with its environment – bright and silvery as a sea trout, darker and more colorful as a brook trout in forest waters.",
            image: "/images/fiskar/Oring_Huvudbild_01.png",
            alt: "Trout in rushing water with distinct spots",
            caption: "The spot pattern is as unique as a fingerprint for each trout.",
          },
          {
            heading: "Migration & Spawning",
            body: "As a juvenile, the trout migrates to a lake or the sea to grow large. In autumn it returns to the very stream where it hatched to spawn, burying its eggs in the gravel bed.",
            image: "/images/fiskar/oring-detalj.png",
            alt: "Close-up of the trout's spotted flank",
            caption: "The trout finds its way back to its own birthplace to spawn.",
          },
          {
            heading: "Habitat & Behavior",
            body: "The trout needs clean, oxygen-rich, cool water. Along Kustvägen you can meet the powerful sea trout in coastal waters and the more modest brook trout, holding still in the current waiting for insects.",
            image: "/images/fiskar/oring-miljo.png",
            alt: "Clear forest stream that is the trout's habitat",
            caption: "Clear, flowing streams are the trout's home and nursery.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der wandelbare Wanderer",
        intro:
          "Die Forelle passt sich stark an ihre Umgebung an, was sich in ihrer Größe widerspiegelt. Als Jungfische wandern sie in Seen oder ins Meer, um groß zu werden, bevor sie zum Laichen an ihren Geburtsort zurückkehren.\n\nAm Kustvägen trifft man sowohl die kräftige Meerforelle in den Küstengewässern als auch die bescheidenere Bachforelle in den klaren Waldbächen.",
        quote: "Vom stillen Bach bis zur Weite des Meeres – die Forelle trägt die Heimat immer im Gedächtnis.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Die Forelle hat einen kräftigen, muskulösen Körper mit schwarzen und roten Punkten mit hellen Ringen. Ihre Farbe variiert stark mit der Umgebung – hell und silbrig als Meerforelle, dunkler und farbenprächtiger als Bachforelle in Waldgewässern.",
            image: "/images/fiskar/Oring_Huvudbild_01.png",
            alt: "Forelle im strömenden Wasser mit deutlichen Punkten",
            caption: "Das Punktmuster ist für jede Forelle so einzigartig wie ein Fingerabdruck.",
          },
          {
            heading: "Wanderung & Laichzeit",
            body: "Als Jungfisch wandert die Forelle in einen See oder ins Meer, um groß zu werden. Im Herbst kehrt sie zum Laichen genau in den Bach zurück, in dem sie geschlüpft ist, und vergräbt ihre Eier im Kiesbett.",
            image: "/images/fiskar/oring-detalj.png",
            alt: "Nahaufnahme der gefleckten Flanke der Forelle",
            caption: "Die Forelle findet zum Laichen an ihren eigenen Geburtsort zurück.",
          },
          {
            heading: "Lebensraum & Verhalten",
            body: "Die Forelle braucht sauberes, sauerstoffreiches und kühles Wasser. Am Kustvägen trifft man die kräftige Meerforelle in den Küstengewässern und die bescheidenere Bachforelle, die reglos in der Strömung auf Insekten wartet.",
            image: "/images/fiskar/oring-miljo.png",
            alt: "Klarer Waldbach, der Lebensraum der Forelle",
            caption: "Klare, fließende Bäche sind Heimat und Kinderstube der Forelle.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/fiskar/Oring_Huvudbild_01.png",
        alt: {
          sv: "En öring simmar i ett klart strömmande vattendrag",
          en: "A trout swimming in a clear rushing stream",
          de: "Eine Forelle schwimmt in einem klaren, fließenden Bach",
        },
      },
      detailImage: {
        url: "/images/fiskar/oring-detalj.png",
        alt: {
          sv: "Närbild på öringens fläckiga sida",
          en: "Close-up of the trout's spotted flank",
          de: "Nahaufnahme der gefleckten Flanke der Forelle",
        },
      },
      galleryImages: [
        { src: "/images/fiskar/Oring_Huvudbild_01.png", alt: "Öring i strömmande vatten" },
        { src: "/images/fiskar/oring-detalj.png", alt: "Närbild på öringens fläckar" },
        { src: "/images/fiskar/oring-miljo.png", alt: "Klar skogsbäck som är öringens livsmiljö" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the Story of the Trout", url: "" },
        de: { title: "Der Forelle lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Öringen",
        intro: "Undrar du hur det är att vandra mellan bäck och hav? Ställ en fråga till mig och lär dig mer om mitt liv i vattnen längs Kustvägen.",
        presetQuestions: ["Varför är du prickig?", "Vart vandrar du?", "Hur hittar du hem för att leka?", "Vad är skillnaden på havsöring och bäcköring?", "Vad äter du?"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Trout",
        intro: "Curious what it's like to travel between stream and sea? Ask me a question and learn more about my life in the waters along Kustvägen.",
        presetQuestions: ["Why are you spotted?", "Where do you migrate?", "How do you find your way home to spawn?", "What's the difference between sea trout and brook trout?", "What do you eat?"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit der Forelle",
        intro: "Neugierig, wie es ist, zwischen Bach und Meer zu wandern? Stell mir eine Frage und erfahre mehr über mein Leben in den Gewässern am Kustvägen.",
        presetQuestions: ["Warum bist du gefleckt?", "Wohin wanderst du?", "Wie findest du zum Laichen nach Hause?", "Was ist der Unterschied zwischen Meer- und Bachforelle?", "Was frisst du?"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `Du är en öring (Salmo trutta) som lever i bäckar, sjöar och kustvatten längs Kustvägen i Hälsingland och Västernorrland i Sverige. Du pratar DIREKT med barn som besöker naturen.

VIKTIGT - du pratar med BARN:
- Svara alltid på enkel, varm och lekfull svenska som ett barn (ca 7-12 år) lätt förstår.
- Håll svaren KORTA: 1-3 meningar. Aldrig långa stycken.
- Prata i jag-form, som om DU är öringen. Till exempel: "Jag simmar uppför bäcken för att leka där jag själv föddes!"
- Var nyfiken, vänlig och uppmuntrande. Använd gärna jämförelser med saker barn känner till.
- Använd högst en enkel emoji ibland (som 🐟) om det passar, men inte i varje svar.

INNEHÅLL - håll dig till fakta om öringen:
- Tillhör laxfiskarna. Finns i tre former: havsöring, insjööring och bäcköring.
- Storlek: havsöring kan bli upp till 15 kg, bäcköring är liten (20-30 cm).
- Utseende: kraftig kropp med svarta och röda prickar. Färgen varierar med miljön.
- Vandrar som ung ut till sjö eller hav och återvänder på hösten till sitt eget födelsevatten för att leka.
- Leker på hösten i rinnande vatten och gräver ner rommen i grus.
- Kräver rent, kallt och syrerikt vatten.

SÄKERHET:
- Om barnet frågar om något som inte handlar om naturen, djur eller öringen, led vänligt tillbaka samtalet till vattnet och dig som öring.
- Hitta aldrig på skrämmande eller olämpligt innehåll. Allt ska kännas tryggt och magiskt.
- Om du inte vet svaret, säg det ärligt på ett lekfullt sätt.`,
    avatarImage: "/images/fiskar/Oring_Huvudbild_01.png",
    chatAvatarAlt: "Öringens ansikte",
    relatedSpecies: [
      { slug: "lax", name: "Lax", latin: "Salmo salar", image: "/images/sp-salmon.png" },
      { slug: "sik", name: "Sik", latin: "Coregonus lavaretus", image: "/images/fiskar/Sik_Huvudbild_01.png" },
      { slug: "gadda", name: "Gädda", latin: "Esox lucius", image: "/images/fiskar/Gadda_Huvudbild_01.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler fiskar", en: "Discover more fish", de: "Weitere Fische entdecken" },
    relatedLinkLabel: { sv: "Visa alla fiskar", en: "View all fish", de: "Alle Fische anzeigen" },
  },

  sik: {
    id: "sik",
    scientificName: "Coregonus lavaretus",
    category: { sv: "Fiskar", en: "Fish", de: "Fische" },
    names: { sv: "Sik", en: "European Whitefish", de: "Große Maräne" },
    meta: {
      sv: {
        title: "Sik – Kustvägens Naturguide",
        description:
          "Lär dig allt om siken längs Kustvägen. Fakta om Sveriges mest utbredda fiskart och dess betydelse som norrländsk matfisk.",
      },
      en: {
        title: "European Whitefish – Kustvägen Nature Guide",
        description:
          "Discover the European Whitefish along Kustvägen. Learn about Sweden's most widespread fish species and its role as a treasured northern food fish.",
      },
      de: {
        title: "Große Maräne – Kustvägen Naturführer",
        description:
          "Erfahren Sie alles über die Maräne (Sik) am Kustvägen. Fakten zur am weitesten verbreiteten Fischart Schwedens und ihrer Bedeutung als Speisefisch.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Status", value: "Sveriges mest utbredda fiskart" },
        { label: "Storlek", value: "Vanligtvis 1–2 kg (kan nå 7 kg)" },
        { label: "Föda", value: "Insekter, småplankton och småfisk" },
        { label: "Användning", value: "Klassisk och uppskattad norrländsk matfisk" },
      ],
      en: [
        { label: "Status", value: "Sweden's most widespread fish species" },
        { label: "Size", value: "Typically 1–2 kg (can reach 7 kg)" },
        { label: "Diet", value: "Insects, small plankton and small fish" },
        { label: "Use", value: "A classic and prized northern Swedish food fish" },
      ],
      de: [
        { label: "Status", value: "Am weitesten verbreitete Fischart Schwedens" },
        { label: "Größe", value: "Meist 1–2 kg (kann bis zu 7 kg erreichen)" },
        { label: "Nahrung", value: "Insekten, kleines Plankton und kleine Fische" },
        { label: "Verwendung", value: "Klassischer, geschätzter Speisefisch Nordschwedens" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Norrlands älskade laxfisk",
        intro:
          "Siken tillhör laxfiskarna och producerar omkring 25 000 ägg per kilo kroppsvikt. Den leker under hösten i både rinnande och stilla vatten längs Kustvägen.\n\nMed sin silvriga, spolformade kropp och lilla mun trivs siken i kalla, syrerika vatten och är en omtyckt matfisk med djupa rötter i den lokala kulturen.",
        quote: "Siken glimmar silverblank i det kalla vattnet – en skatt från Norrlands älvar och kust.",
        sections: [],
        detailsGrid: [
          {
            heading: "K��nnetecken & Utseende",
            body: "Siken har en slank, silverblank kropp med mörkare rygg och en liten, underställd mun som passar för att söka föda på botten. Den känns igen på den lilla fettfenan mellan ryggfenan och stjärten – ett tecken på att den tillhör laxfiskarna.",
            image: "/images/fiskar/Sik_Huvudbild_01.png",
            alt: "Sik med silverblank kropp i klart vatten",
            caption: "Den underställda munnen avslöjar att siken söker mat vid botten.",
          },
          {
            heading: "Föda & Beteende",
            body: "Siken lever ofta i stim och betar av bottendjur som insektslarver, kräftdjur och små snäckor. Den kan också sila plankton ur vattnet med sina fina gälräfständer, vars antal skiljer sikens många former åt.",
            image: "/images/fiskar/sik-detalj.png",
            alt: "Närbild på sikens huvud och underställda mun",
            caption: "Med känsliga sinnen letar siken föda även i kallt, mörkt djupvatten.",
          },
          {
            heading: "Livsmiljö & Lek",
            body: "Siken trivs i kalla, klara och djupa sjöar samt i bräckt kustvatten längs Kustvägen. Den leker sent på hösten och vintern, då den samlas på grunda bankar och sprider sin rom över sten- och grusbottnar.",
            image: "/images/fiskar/sik-miljo.png",
            alt: "Kall, klar och djup sjö som är sikens livsmiljö",
            caption: "Kalla, klara djup är sikens hem året runt.",
          },
        ],
      },
      en: {
        heroSubtitle: "The beloved whitefish of the north",
        intro:
          "The European Whitefish belongs to the salmon family and produces around 25,000 eggs per kilogram of body weight. It spawns in autumn in both flowing and still waters along Kustvägen.\n\nWith its silvery, spindle-shaped body and small mouth, the whitefish thrives in cold, oxygen-rich waters and is a beloved food fish with deep roots in local culture.",
        quote: "The whitefish shimmers silver in the cold water – a treasure from the northern rivers and coast.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "The whitefish has a slender, silvery body with a darker back and a small, underslung mouth suited for feeding on the bottom. It is recognized by the small adipose fin between the dorsal fin and tail – a sign that it belongs to the salmon family.",
            image: "/images/fiskar/Sik_Huvudbild_01.png",
            alt: "Whitefish with silvery body in clear water",
            caption: "Its underslung mouth reveals that the whitefish feeds near the bottom.",
          },
          {
            heading: "Diet & Behavior",
            body: "The whitefish often lives in schools and grazes on bottom animals such as insect larvae, crustaceans and small snails. It can also filter plankton from the water with its fine gill rakers, whose number distinguishes the whitefish's many forms.",
            image: "/images/fiskar/sik-detalj.png",
            alt: "Close-up of the whitefish's head and underslung mouth",
            caption: "With keen senses the whitefish finds food even in cold, dark deep water.",
          },
          {
            heading: "Habitat & Spawning",
            body: "The whitefish thrives in cold, clear, deep lakes and in brackish coastal water along Kustv��gen. It spawns in late autumn and winter, gathering on shallow banks to scatter its eggs over stony and gravelly bottoms.",
            image: "/images/fiskar/sik-miljo.png",
            alt: "Cold, clear and deep lake that is the whitefish's habitat",
            caption: "Cold, clear depths are the whitefish's home all year round.",
          },
        ],
      },
      de: {
        heroSubtitle: "Die geliebte Maräne des Nordens",
        intro:
          "Die Maräne (Sik) gehört zu den Salmoniden und produziert etwa 25.000 Eier pro Kilogramm Körpergewicht. Sie laicht im Herbst sowohl in fließenden als auch in stillen Gewässern entlang des Kustvägen.\n\nMit ihrem silbrigen, spindelförmigen Körper und kleinen Maul fühlt sich die Maräne in kaltem, sauerstoffreichem Wasser wohl und ist ein beliebter Speisefisch mit tiefen Wurzeln in der lokalen Kultur.",
        quote: "Die Maräne glänzt silbern im kalten Wasser – ein Schatz aus den nordischen Flüssen und der Küste.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Die Maräne hat einen schlanken, silbrig glänzenden Körper mit dunklerem Rücken und ein kleines, unterständiges Maul, das zum Fressen am Grund geeignet ist. Sie ist an der kleinen Fettflosse zwischen Rückenflosse und Schwanz erkennbar – ein Zeichen, dass sie zu den Lachsfischen gehört.",
            image: "/images/fiskar/Sik_Huvudbild_01.png",
            alt: "Maräne mit silbrigem Körper im klaren Wasser",
            caption: "Das unterständige Maul verrät, dass die Maräne am Grund frisst.",
          },
          {
            heading: "Nahrung & Verhalten",
            body: "Die Maräne lebt oft in Schwärmen und weidet Bodentiere wie Insektenlarven, Krebstiere und kleine Schnecken ab. Sie kann auch Plankton mit ihren feinen Kiemenreusen aus dem Wasser filtern, deren Anzahl die vielen Formen der Maräne unterscheidet.",
            image: "/images/fiskar/sik-detalj.png",
            alt: "Nahaufnahme des Kopfes und des unterständigen Mauls der Maräne",
            caption: "Mit feinen Sinnen findet die Maräne selbst im kalten, dunklen Tiefenwasser Nahrung.",
          },
          {
            heading: "Lebensraum & Laichzeit",
            body: "Die Maräne fühlt sich in kalten, klaren, tiefen Seen und im brackigen Küstenwasser am Kustvägen wohl. Sie laicht im Spätherbst und Winter, wenn sie sich auf flachen Bänken sammelt und ihre Eier über Stein- und Kiesböden verteilt.",
            image: "/images/fiskar/sik-miljo.png",
            alt: "Kalter, klarer und tiefer See, der Lebensraum der Maräne",
            caption: "Kalte, klare Tiefen sind das ganze Jahr über die Heimat der Maräne.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/fiskar/Sik_Huvudbild_01.png",
        alt: {
          sv: "En sik simmar i klart, kallt sjövatten",
          en: "A whitefish swimming in clear, cold lake water",
          de: "Eine Maräne schwimmt in klarem, kaltem Seewasser",
        },
      },
      detailImage: {
        url: "/images/fiskar/sik-detalj.png",
        alt: {
          sv: "Närbild på sikens silvriga fjäll och lilla mun",
          en: "Close-up of the whitefish's silvery scales and small mouth",
          de: "Nahaufnahme der silbrigen Schuppen und des kleinen Mauls der Maräne",
        },
      },
      galleryImages: [
        { src: "/images/fiskar/Sik_Huvudbild_01.png", alt: "Sik i klart vatten" },
        { src: "/images/fiskar/sik-detalj.png", alt: "Närbild på sikens huvud" },
        { src: "/images/fiskar/sik-miljo.png", alt: "Kall, klar och djup sjö som är sikens livsmiljö" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the Story of the Whitefish", url: "" },
        de: { title: "Der Maräne lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Siken",
        intro: "Undrar du hur det är att leva i det kalla, klara djupet? Ställ en fråga till mig och lär dig mer om mitt liv i vattnen längs Kustvägen.",
        presetQuestions: ["Varför är du så silverblank?", "Vad äter du?", "Var i sjön bor du?", "När leker du?", "Är du släkt med laxen?"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Whitefish",
        intro: "Curious what it's like to live in the cold, clear depths? Ask me a question and learn more about my life in the waters along Kustvägen.",
        presetQuestions: ["Why are you so silvery?", "What do you eat?", "Where in the lake do you live?", "When do you spawn?", "Are you related to the salmon?"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit der Maräne",
        intro: "Neugierig, wie es ist, in der kalten, klaren Tiefe zu leben? Stell mir eine Frage und erfahre mehr über mein Leben in den Gewässern am Kustvägen.",
        presetQuestions: ["Warum bist du so silbrig?", "Was frisst du?", "Wo im See lebst du?", "Wann laichst du?", "Bist du mit dem Lachs verwandt?"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `Du är en sik (Coregonus) som lever i djupa, kalla sjöar och bräckt kustvatten längs Kustvägen i Hälsingland och Västernorrland i Sverige. Du pratar DIREKT med barn som besöker naturen.

VIKTIGT - du pratar med BARN:
- Svara alltid på enkel, varm och lekfull svenska som ett barn (ca 7-12 år) lätt förstår.
- Håll svaren KORTA: 1-3 meningar. Aldrig långa stycken.
- Prata i jag-form, som om DU är siken. Till exempel: "Jag simmar långt nere i det kalla, klara vattnet!"
- Var nyfiken, vänlig och uppmuntrande. Använd gärna jämförelser med saker barn känner till.
- Använd högst en enkel emoji ibland (som 🐟) om det passar, men inte i varje svar.

INNEHÅLL - håll dig till fakta om siken:
- Tillhör laxfiskarna och har en liten fettfena på ryggen.
- Storlek: oftast 25-50 cm.
- Utseende: slank, silverblank kropp med mörkare rygg och liten, underställd mun.
- Lever i stim i kalla, klara och djupa sjöar samt i bräckt kustvatten.
- Mat: bottendjur som insektslarver, kräftdjur och små snäckor. Vissa former silar plankton.
- Leker sent på hösten och vintern på grunda bankar.
- Finns i många lokala former som skiljer sig i storlek och antal gälräfständer.

SÄKERHET:
- Om barnet frågar om något som inte handlar om naturen, djur eller siken, led vänligt tillbaka samtalet till vattnet och dig som sik.
- Hitta aldrig på skrämmande eller olämpligt innehåll. Allt ska kännas tryggt och magiskt.
- Om du inte vet svaret, säg det ärligt på ett lekfullt sätt.`,
    avatarImage: "/images/fiskar/Sik_Huvudbild_01.png",
    chatAvatarAlt: "Sikens ansikte",
    relatedSpecies: [
      { slug: "oring", name: "Öring", latin: "Salmo trutta", image: "/images/fiskar/Oring_Huvudbild_01.png" },
      { slug: "stromming", name: "Strömming", latin: "Clupea harengus", image: "/images/sp-herring.png" },
      { slug: "abborre", name: "Abborre", latin: "Perca fluviatilis", image: "/images/fiskar/Abborre_Huvudbild_01.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler fiskar", en: "Discover more fish", de: "Weitere Fische entdecken" },
    relatedLinkLabel: { sv: "Visa alla fiskar", en: "View all fish", de: "Alle Fische anzeigen" },
  },

  al: {
    id: "al",
    scientificName: "Anguilla anguilla",
    category: { sv: "Fiskar", en: "Fish", de: "Fische" },
    names: { sv: "Ål", en: "European Eel", de: "Europäischer Aal" },
    meta: {
      sv: {
        title: "Ål – Kustvägens Naturguide",
        description:
          "Lär dig allt om ålen längs Kustvägen. Fakta om den sägenomspunna vandringsfisken, dess livscykel och akuta hotstatus.",
      },
      en: {
        title: "European Eel – Kustv��gen Nature Guide",
        description:
          "Discover the European Eel along Kustvägen. Learn about this legendary migratory fish, its life cycle and critically endangered status.",
      },
      de: {
        title: "Europäischer Aal – Kustvägen Naturführer",
        description:
          "Erfahren Sie alles über den Aal am Kustvägen. Fakten zu diesem sagenumwobenen Wanderfisch, seinem Lebenszyklus und seinem gefährdeten Status.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Typ", value: "Sägenomspunnen vandringsfisk" },
        { label: "Habitat", value: "Sjöar, vattendrag och hav" },
        { label: "Status", value: "Akut hotad och fridlyst" },
        { label: "Vandring", value: "Leker i Sargassohavet" },
      ],
      en: [
        { label: "Type", value: "Legendary migratory fish" },
        { label: "Habitat", value: "Lakes, waterways and the sea" },
        { label: "Status", value: "Critically endangered and protected" },
        { label: "Migration", value: "Spawns in the Sargasso Sea" },
      ],
      de: [
        { label: "Typ", value: "Sagenumwobener Wanderfisch" },
        { label: "Lebensraum", value: "Seen, Gewässer und Meer" },
        { label: "Status", value: "Akut gefährdet und geschützt" },
        { label: "Wanderung", value: "Laicht in der Sargassosee" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Havets mest gåtfulla vandrare",
        intro:
          "Ålen har en av djurrikets mest fascinerande livscykler där den färdas tusentals mil tvärs över Atlanten för att leka och föröka sig i Sargassohavet.\n\nMed sin långsmala, ormlika kropp letar sig ålen fram l��ngs Kustvägens botten på natten, ofta gömd bland stenar och växtlighet. Idag är arten akut hotad, och varje individ som lever längs kusten är en del av ett skört globalt bestånd.",
        quote: "En resa på tusentals mil, född av en enda gåtfull längtan tillbaka till havet därute.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Ålen har en l��ng, ormlik kropp täckt av ett tjockt lager slem som gör den hal och svår att greppa. Ryggen är mörk och buken ljusnar när ålen mognar och byter till sin blanka \"blankålsdräkt\" inför den långa vandringen.",
            image: "/images/fiskar/Al_Huvudbild_01.png",
            alt: "Ål som slingrar sig längs en lerig sjöbotten",
            caption: "Det hala slemlagret skyddar ålen och hjälper den glida fram.",
          },
          {
            heading: "Livscykel & Vandring",
            body: "Ålen föds i Sargassohavet och driver som liten larv med havsströmmarna ända till Europas kuster. Efter många år i sjöar och vattendrag vänder den tillbaka tvärs över Atlanten för att leka en enda gång – och sedan dö.",
            image: "/images/fiskar/al-detalj.png",
            alt: "Närbild på ålens mörka, slemmiga hud",
            caption: "En enda resa på tusentals mil avslutar ålens långa liv.",
          },
          {
            heading: "Livsmiljö & Hotstatus",
            body: "Om dagen gömmer sig ålen bland stenar och växter och jagar först i skydd av mörkret. Idag är den akut hotad och fridlyst – varje ål längs Kustvägen är en pusselbit i ett skört globalt bestånd.",
            image: "/images/fiskar/al-miljo.png",
            alt: "Lerig, växtrik sjöbotten där ålen gömmer sig",
            caption: "Steniga, växtrika bottnar ger ålen skydd om dagen.",
          },
        ],
      },
      en: {
        heroSubtitle: "The sea's most enigmatic wanderer",
        intro:
          "The European Eel has one of the animal kingdom's most fascinating life cycles, traveling thousands of miles across the Atlantic to spawn in the Sargasso Sea.\n\nWith its long, slender, snake-like body, the eel moves along the bottom of Kustvägen's waters at night, often hidden among rocks and vegetation. Today the species is critically endangered, and every individual living along the coast is part of a fragile global population.",
        quote: "A journey of thousands of miles, born from one enigmatic longing to return to the sea beyond.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "The eel has a long, snake-like body covered in a thick layer of slime that makes it slippery and hard to grip. Its back is dark and its belly lightens as the eel matures and shifts into its shiny \"silver eel\" dress before the long migration.",
            image: "/images/fiskar/Al_Huvudbild_01.png",
            alt: "Eel winding along a muddy lake bottom",
            caption: "The slick layer of slime protects the eel and helps it glide along.",
          },
          {
            heading: "Life Cycle & Migration",
            body: "The eel is born in the Sargasso Sea and drifts as a tiny larva with the ocean currents all the way to Europe's coasts. After many years in lakes and waterways it returns across the Atlantic to spawn a single time – and then die.",
            image: "/images/fiskar/al-detalj.png",
            alt: "Close-up of the eel's dark, slimy skin",
            caption: "A single journey of thousands of miles ends the eel's long life.",
          },
          {
            heading: "Habitat & Conservation",
            body: "By day the eel hides among rocks and plants and hunts only under cover of darkness. Today it is critically endangered and protected – every eel along Kustvägen is a piece of a fragile global population.",
            image: "/images/fiskar/al-miljo.png",
            alt: "Muddy, plant-rich lake bottom where the eel hides",
            caption: "Rocky, plant-rich bottoms give the eel shelter during the day.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der rätselhafteste Wanderer des Meeres",
        intro:
          "Der Europäische Aal hat einen der faszinierendsten Lebenszyklen des Tierreichs und reist tausende Kilometer über den Atlantik, um in der Sargassosee zu laichen.\n\nMit seinem langen, schlangenähnlichen Körper bewegt sich der Aal nachts am Grund der Gewässer entlang des Kustvägen, oft verborgen zwischen Steinen und Pflanzen. Heute ist die Art akut gefährdet, und jedes Individuum an der Küste ist Teil einer fragilen globalen Population.",
        quote: "Eine Reise über tausende Kilometer, geboren aus einer einzigen rätselhaften Sehnsucht nach dem fernen Meer.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Der Aal hat einen langen, schlangenähnlichen Körper mit einer dicken Schleimschicht, die ihn glatt und schwer zu greifen macht. Sein Rücken ist dunkel, und der Bauch hellt auf, wenn der Aal reift und vor der langen Wanderung sein glänzendes \"Blankaal-Kleid\" anlegt.",
            image: "/images/fiskar/Al_Huvudbild_01.png",
            alt: "Aal, der sich über einen schlammigen Seegrund schlängelt",
            caption: "Die glatte Schleimschicht schützt den Aal und hilft ihm beim Gleiten.",
          },
          {
            heading: "Lebenszyklus & Wanderung",
            body: "Der Aal wird in der Sargassosee geboren und treibt als winzige Larve mit den Meeresströmungen bis zu den Küsten Europas. Nach vielen Jahren in Seen und Gewässern kehrt er über den Atlantik zurück, um ein einziges Mal zu laichen – und dann zu sterben.",
            image: "/images/fiskar/al-detalj.png",
            alt: "Nahaufnahme der dunklen, schleimigen Haut des Aals",
            caption: "Eine einzige Reise über tausende Kilometer beendet das lange Leben des Aals.",
          },
          {
            heading: "Lebensraum & Gefährdung",
            body: "Tagsüber versteckt sich der Aal zwischen Steinen und Pflanzen und jagt erst im Schutz der Dunkelheit. Heute ist er akut gefährdet und geschützt – jeder Aal am Kustvägen ist ein Teil einer fragilen globalen Population.",
            image: "/images/fiskar/al-miljo.png",
            alt: "Schlammiger, pflanzenreicher Seegrund, in dem sich der Aal versteckt",
            caption: "Steinige, pflanzenreiche Böden bieten dem Aal tagsüber Schutz.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/fiskar/Al_Huvudbild_01.png",
        alt: {
          sv: "En ål slingrar sig fram längs en lerig sjöbotten",
          en: "An eel winding its way along a muddy lake bottom",
          de: "Ein Aal schlängelt sich über einen schlammigen Seegrund",
        },
      },
      detailImage: {
        url: "/images/fiskar/al-detalj.png",
        alt: {
          sv: "Närbild på ålens mörka, slemmiga hud",
          en: "Close-up of the eel's dark, slick skin",
          de: "Nahaufnahme der dunklen, glatten Haut des Aals",
        },
      },
      galleryImages: [
        { src: "/images/fiskar/Al_Huvudbild_01.png", alt: "Ål på lerig sjöbotten" },
        { src: "/images/fiskar/al-detalj.png", alt: "Närbild på ålens hud" },
        { src: "/images/fiskar/al-miljo.png", alt: "Lerig, växtrik sjöbotten där ålen gömmer sig" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the Story of the Eel", url: "" },
        de: { title: "Dem Aal lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Ålen",
        intro: "Undrar du hur det är att resa tvärs över havet? Ställ en fråga till mig och lär dig mer om mitt gåtfulla liv i vattnen längs Kustvägen.",
        presetQuestions: ["Var föds du?", "Hur långt vandrar du?", "Varför är du så hal?", "Vad äter du?", "Varför är du hotad?"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Eel",
        intro: "Curious what it's like to travel across the entire ocean? Ask me a question and learn more about my enigmatic life in the waters along Kustvägen.",
        presetQuestions: ["Where are you born?", "How far do you migrate?", "Why are you so slippery?", "What do you eat?", "Why are you endangered?"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit dem Aal",
        intro: "Neugierig, wie es ist, über den ganzen Ozean zu reisen? Stell mir eine Frage und erfahre mehr über mein rätselhaftes Leben in den Gewässern am Kustvägen.",
        presetQuestions: ["Wo wirst du geboren?", "Wie weit wanderst du?", "Warum bist du so glatt?", "Was frisst du?", "Warum bist du gefährdet?"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `Du är en ål (Anguilla anguilla) som lever i sjöar, vattendrag och kustvatten längs Kustvägen i Hälsingland och Västernorrland i Sverige. Du pratar DIREKT med barn som besöker naturen.

VIKTIGT - du pratar med BARN:
- Svara alltid på enkel, varm och lekfull svenska som ett barn (ca 7-12 år) lätt förstår.
- Håll svaren KORTA: 1-3 meningar. Aldrig långa stycken.
- Prata i jag-form, som om DU är ålen. Till exempel: "Jag har simmat tusentals mil för att komma hit!"
- Var nyfiken, vänlig och uppmuntrande. Använd gärna jämförelser med saker barn känner till.
- Använd högst en enkel emoji ibland (som 🐟) om det passar, men inte i varje svar.

INNEHÅLL - håll dig till fakta om ålen:
- Föds i Sargassohavet nära Amerika och driver som liten larv med havsströmmarna ända till Europa.
- Lever många år (ibland över 20) i sjöar och vattendrag innan den vandrar tillbaka över Atlanten för att leka en enda gång, och dör sedan.
- Utseende: lång, ormlik kropp med ett tjockt, halt slemlager. Blir blank och silvrig inför vandringen.
- Är aktiv på natten och gömmer sig om dagen bland stenar och växter.
- Mat: smådjur, maskar, kräftdjur och småfisk.
- Är akut hotad och fridlyst i Sverige.

SÄKERHET:
- Om barnet frågar om något som inte handlar om naturen, djur eller ålen, led vänligt tillbaka samtalet till vattnet och dig som ål.
- Hitta aldrig på skrämmande eller olämpligt innehåll. Allt ska kännas tryggt och magiskt.
- Om du inte vet svaret, säg det ärligt på ett lekfullt sätt.`,
    avatarImage: "/images/fiskar/Al_Huvudbild_01.png",
    chatAvatarAlt: "Ålens ansikte",
    relatedSpecies: [
      { slug: "sik", name: "Sik", latin: "Coregonus lavaretus", image: "/images/fiskar/Sik_Huvudbild_01.png" },
      { slug: "gadda", name: "Gädda", latin: "Esox lucius", image: "/images/fiskar/Gadda_Huvudbild_01.png" },
      { slug: "stromming", name: "Strömming", latin: "Clupea harengus", image: "/images/sp-herring.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler fiskar", en: "Discover more fish", de: "Weitere Fische entdecken" },
    relatedLinkLabel: { sv: "Visa alla fiskar", en: "View all fish", de: "Alle Fische anzeigen" },
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
          "Rödräven är en av Sveriges mest anpassningsbara rovdjur, lika hemma i tät barrskog som på öppna strandängar längs Kustvägen. Den k����nns igen på sin rödbruna päls, vita strupe och den buskiga svansens vita spets. Som opportunistisk allätare jagar räven sork och möss med sitt karakteristiska mushopp, men tar även bär, fågelägg och slaktavfall. Spåren bildar en rak linje i snön, så kallad snörlöpning, och avslöjar en skicklig men sällan sedd jägare.",
        quote:
          "I skymningen glider räven som en rödbrun skugga mellan skog och strand – här en stund, borta i nästa.",
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Rödräven har roströd päls, vit buk och strupe samt en yvig svans med vit spets. De svartkantade öronen och den spetsiga nosen ger ett vaket uttryck.",
            image: "/images/rodrav-hero.png",
            alt: "Rödräv i gyllene ljus",
            caption: "Den vita svansspetsen är rödrävens signum.",
          },
          {
            heading: "Familj & Ungar",
            body: "På våren föds valparna i ett gryt och leker utanför ingången under sommaren. Föräldrarna bär hem byte tills ungarna kan jaga själva.",
            image: "/images/rodrav-ungar.png",
            alt: "Rävungar utanför sitt gryt",
            caption: "Rävungarna leker utanför grytet i sommarljuset.",
          },
          {
            heading: "Livsmiljö & Beteende",
            body: "Rödräven är en anpassningsbar allätare som trivs från djup skog till öppna marker nära människan. Den fångar sorkar med ett karaktäristiskt högt mushopp.",
            image: "/images/rodrav-miljo.png",
            alt: "Skogsäng i gyllene kvällsljus",
            caption: "Öppna bryn och ängskanter är rika jaktmarker.",
          },
        ],
        sections: [],
      },
      en: {
        heroSubtitle: "The nimble hunter of coast and forest",
        intro:
          "The Red Fox is one of Sweden's most adaptable predators, equally at home in dense conifer forest and open coastal meadows along Kustvägen. It's easily recognized by its reddish-brown coat, white throat, and the bushy tail's white tip. An opportunistic omnivore, it hunts voles and mice with its signature pounce, while also eating berries, bird eggs, and carrion. Its tracks form a straight line in the snow, known as registering, betraying a skilled yet rarely seen hunter.",
        quote:
          "At dusk the fox drifts like a rust-red shadow between forest and shore – here one moment, gone the next.",
        detailsGrid: [
          {
            heading: "Appearance & Features",
            body: "The red fox has rust-red fur, a white belly and throat, and a bushy tail with a white tip. Its black-edged ears and pointed muzzle give an alert expression.",
            image: "/images/rodrav-hero.png",
            alt: "Red fox in golden light",
            caption: "The white tail tip is the red fox's signature.",
          },
          {
            heading: "Family & Cubs",
            body: "In spring the cubs are born in a den and play outside the entrance through the summer. The parents carry home prey until the cubs can hunt for themselves.",
            image: "/images/rodrav-ungar.png",
            alt: "Fox cubs outside their den",
            caption: "The fox cubs play outside the den in the summer light.",
          },
          {
            heading: "Habitat & Behaviour",
            body: "The red fox is an adaptable omnivore, at home from deep forest to open land near people. It catches voles with a characteristic high mouse-pounce.",
            image: "/images/rodrav-miljo.png",
            alt: "Forest meadow in golden evening light",
            caption: "Open edges and meadow margins are rich hunting grounds.",
          },
        ],
        sections: [],
      },
      de: {
        heroSubtitle: "Der gewandte Jäger von Küste und Wald",
        intro:
          "Der Rotfuchs ist eines der anpassungsfähigsten Raubtiere Schwedens, ebenso zu Hause in dichtem Nadelwald wie auf offenen Küstenwiesen entlang des Kustvägen. Erkennbar ist er an seinem rotbraunen Fell, der weißen Kehle und der buschigen Schwanzspitze. Als Allesfresser jagt er Wühlmäuse und Mäuse mit seinem charakteristischen Sprung, frisst aber auch Beeren, Vogeleier und Aas. Seine Spuren bilden im Schnee eine gerade Linie – das sogenannte Schnüren – und verraten einen geschickten, selten gesehenen Jäger.",
        quote:
          "In der Dämmerung gleitet der Fuchs wie ein rotbrauner Schatten zwischen Wald und Küste – eben noch da, im nächsten Moment verschwunden.",
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Der Rotfuchs hat rostrotes Fell, einen weißen Bauch und eine weiße Kehle sowie einen buschigen Schwanz mit weißer Spitze. Die schwarz geränderten Ohren und die spitze Schnauze verleihen ihm einen wachen Ausdruck.",
            image: "/images/rodrav-hero.png",
            alt: "Rotfuchs im goldenen Licht",
            caption: "Die weiße Schwanzspitze ist das Kennzeichen des Rotfuchses.",
          },
          {
            heading: "Familie & Welpen",
            body: "Im Frühling werden die Welpen in einem Bau geboren und spielen den Sommer über vor dem Eingang. Die Eltern tragen Beute heim, bis die Jungen selbst jagen können.",
            image: "/images/rodrav-ungar.png",
            alt: "Fuchswelpen vor ihrem Bau",
            caption: "Die Fuchswelpen spielen im Sommerlicht vor dem Bau.",
          },
          {
            heading: "Lebensraum & Verhalten",
            body: "Der Rotfuchs ist ein anpassungsfähiger Allesfresser, zu Hause vom tiefen Wald bis zum offenen Land in Menschennähe. Er fängt Wühlmäuse mit einem charakteristischen hohen Maussprung.",
            image: "/images/rodrav-miljo.png",
            alt: "Waldwiese im goldenen Abendlicht",
            caption: "Offene Ränder und Wiesensäume sind reiche Jagdgründe.",
          },
        ],
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
        {
          src: "/video/rodrav-galleri.mp4",
          alt: "Rödräv i naturen",
          video: "/video/rodrav-galleri.mp4",
          tall: true,
        },
        { src: "/images/sp-hare.png", alt: "Skogshare – ett av rödravens bytesdjur" },
        { src: "/images/about-forest-path.png", alt: "Skogssti längs Kustvägen" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/rodrav_guide_sv.mp3" },
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

  kantarell: {
    id: "kantarell",
    scientificName: "Cantharellus cibarius",
    category: { sv: "Svampar", en: "Fungi", de: "Pilze" },
    names: { sv: "Kantarell", en: "Golden Chanterelle", de: "Pfifferling" },
    meta: {
      sv: {
        title: "Kantarell – Kustvägen Naturguide",
        description:
          "Lär dig allt om kantarellen, skogens guld. Fakta om kännetecken, bästa växtplatserna längs Kustvägen och klassisk svensk svamptradition.",
      },
      en: {
        title: "Golden Chanterelle – Kustvägen Nature Guide",
        description:
          "Learn all about the Chanterelle, the gold of the forest. Facts on characteristics, the best habitats along Kustvägen, and traditional Swedish foraging.",
      },
      de: {
        title: "Pfifferling – Kustvägen Naturführer",
        description:
          "Erfahren Sie alles über den Pfifferling, das Gold des Waldes. Fakten zu Merkmalen, den besten Standorten am Kustvägen und der schwedischen Pilztradition.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Hattbredd", value: "3–10 cm" },
        { label: "Färg", value: "Äggul till blekgul" },
        { label: "Säsong", value: "Juli – Oktober" },
        { label: "Växtplats", value: "Löv- och barrskog" },
      ],
      en: [
        { label: "Cap Width", value: "3��10 cm" },
        { label: "Color", value: "Egg yolk to pale yellow" },
        { label: "Season", value: "July – October" },
        { label: "Habitat", value: "Deciduous & coniferous forest" },
      ],
      de: [
        { label: "Hutbreite", value: "3–10 cm" },
        { label: "Farbe", value: "Dotter- bis blassgelb" },
        { label: "Saison", value: "Juli – Oktober" },
        { label: "Lebensraum", value: "Laub- und Nadelwald" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skogens guld",
        intro:
          "Få saker väcker lika mycket glädje under sensommaren som att upptäcka en gul fläck i mossan. Kantarellen, ofta kallad skogens guld, är en av Kustvägens mest älskade och eftertraktade svampar.\n\nTack vare Kustvägens djupa skogar och fuktiga kustklimat erbjuds perfekta förutsättningar för denna läckra matsvamp, som i århundraden varit en höjdpunkt i den lokala matkulturen.",
        quote:
          "Att hitta sitt eget hemliga kantarellställe är som att hitta en gömd skatt djupt inne i skogen.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Kantarellen är lätt att känna igen på sin jämnt äggula färg och trattlika form. Ett av de viktigaste kännetecknen är att den har grenade åsar, inte skivor, som löper långt ner på foten. Köttet är vitt till blekgult och har en mild, fruktig doft som ofta liknas vid aprikos.",
            image: "/images/kantarell-detalj.png",
            alt: "Närbild på kantarellens åsar under hatten",
            caption: "Notera de grenade åsarna som löper ner längs foten.",
          },
          {
            heading: "Växtplats & Säsong",
            body: "Kantarellen lever i symbios med träd, särskilt björk, gran och tall, och trivs bäst i blandskogar. Den återkommer ofta till samma plats år efter år. Säsongen börjar vanligtvis i juli, efter rejäla sommarregn, och kan sträcka sig ända in i oktober.",
            image: "/images/kantarell-miljo.png",
            alt: "Ett kluster av kantareller i en fuktig granskogsmiljö",
            caption: "Kantareller växer ofta i grupper, så hittar du en finns det ofta fler i närheten.",
          },
          {
            heading: "Matkultur & Tradition",
            body: "I svensk matkultur är kantarellen en delikatess. Den klassiska smörstekta kantarellmackan är en älskad tradition efter en lyckad skogspromenad. Svampen är också en fantastisk smaksättare i såser, soppor och vilträtter längs Kustvägens gästgiverier.",
            image: "/images/kantarell-mat.png",
            alt: "En flätad korg fylld med nyplockade, rensade kantareller",
            caption: "En lyckad svamptur resulterar ofta i en korg fylld med skogens guld.",
          },
        ],
      },
      en: {
        heroSubtitle: "The Gold of the Forest",
        intro:
          "Few things evoke as much late-summer joy as spotting a bright yellow patch in the moss. The Golden Chanterelle, affectionately known as the 'gold of the forest,' is one of Kustvägen's most beloved and sought-after mushrooms.\n\nThe deep forests and moist coastal climate of the region provide perfect conditions for this delicious edible fungi, which has been a highlight of local culinary traditions for centuries.",
        quote:
          "Discovering your own secret chanterelle spot is like finding hidden treasure deep within the forest.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "Chanterelles are easily recognized by their uniform egg-yolk color and funnel-like shape. A key identifier is the presence of forked, vein-like ridges (rather than true gills) running down the stem. The flesh is white to pale yellow with a mild, fruity scent often compared to apricots.",
            image: "/images/kantarell-detalj.png",
            alt: "Close-up of the chanterelle's ridges under the cap",
            caption: "Note the forked, blunt ridges that run down the stem.",
          },
          {
            heading: "Habitat & Season",
            body: "Chanterelles live in symbiosis with trees, especially birch, spruce, and pine, thriving in mixed forests. They often return to the exact same spot year after year. The season usually begins in July after heavy summer rains and can last into October.",
            image: "/images/kantarell-miljo.png",
            alt: "A cluster of chanterelles in a damp spruce forest environment",
            caption: "Chanterelles grow in groups; if you find one, there are usually more nearby.",
          },
          {
            heading: "Culinary Tradition",
            body: "In Swedish food culture, the chanterelle is a true delicacy. The classic butter-fried chanterelle toast is a beloved reward after a successful forest walk. It is also a fantastic flavor enhancer in sauces, soups, and game dishes.",
            image: "/images/kantarell-mat.png",
            alt: "A woven basket filled with freshly picked, cleaned chanterelles",
            caption: "A successful foraging trip often yields a basket full of forest gold.",
          },
        ],
      },
      de: {
        heroSubtitle: "Das Gold des Waldes",
        intro:
          "Kaum etwas weckt im Spätsommer so viel Freude wie das Entdecken eines leuchtend gelben Flecks im Moos. Der Pfifferling, in Schweden oft 'Gold des Waldes' genannt, ist einer der begehrtesten Pilze entlang des Kustvägen.\n\nDie tiefen Wälder und das feuchte Küstenklima der Region bieten perfekte Bedingungen für diesen köstlichen Speisepilz, der seit Jahrhunderten ein Highlight der lokalen Esskultur ist.",
        quote:
          "Seine eigene geheime Pfifferlingsstelle zu finden, ist wie das Entdecken eines verborgenen Schatzes tief im Wald.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Pfifferlinge sind leicht an ihrer gleichmäßig dottergelben Farbe und der trichterartigen Form zu erkennen. Ein wichtiges Merkmal sind die gegabelten Leisten (keine echten Lamellen), die weit den Stiel hinablaufen. Das Fleisch hat einen milden, fruchtigen Duft, der an Aprikosen erinnert.",
            image: "/images/kantarell-detalj.png",
            alt: "Nahaufnahme der Leisten unter dem Hut des Pfifferlings",
            caption: "Beachten Sie die gegabelten Leisten, die den Stiel hinablaufen.",
          },
          {
            heading: "Lebensraum & Saison",
            body: "Pfifferlinge leben in Symbiose mit Bäumen, besonders Birke, Fichte und Kiefer, und gedeihen am besten in Mischwäldern. Oft wachsen sie Jahr für Jahr an derselben Stelle. Die Saison beginnt meist im Juli nach ergiebigen Sommerregen und reicht bis in den Oktober.",
            image: "/images/kantarell-miljo.png",
            alt: "Eine Gruppe von Pfifferlingen in einem feuchten Fichtenwald",
            caption: "Pfifferlinge wachsen gesellig; wer einen findet, findet oft noch mehr.",
          },
          {
            heading: "Kulinarische Tradition",
            body: "In der schwedischen Esskultur ist der Pfifferling eine wahre Delikatesse. Ein in Butter gebratenes Pfifferlingstoast ist die klassische Belohnung nach einem Waldspaziergang. Auch in Saucen, Suppen und Wildgerichten ist er eine fantastische Bereicherung.",
            image: "/images/kantarell-mat.png",
            alt: "Ein geflochtener Korb voller frisch gesammelter, geputzter Pfifferlinge",
            caption: "Eine erfolgreiche Pilzsuche füllt den Korb mit dem Gold des Waldes.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/kantarell-hero.png",
        alt: {
          sv: "En vacker, guldgul kantarell som växer i grön mossa",
          en: "A beautiful, golden-yellow chanterelle growing in green moss",
          de: "Ein schöner, goldgelber Pfifferling wächst in grünem Moos",
        },
      },
      galleryImages: [
        {
          src: "/images/kantarell-hero.png",
          alt: "En vacker, guldgul kantarell som växer i grön mossa",
          video: "/video/kantarell.mp4",
        },
        { src: "/images/kantarell-detalj.png", alt: "Närbild på kantarellens åsar under hatten" },
        { src: "/images/kantarell-miljo.png", alt: "Ett kluster av kantareller i en fuktig granskogsmiljö" },
        { src: "/images/kantarell-mat.png", alt: "En flätad korg fylld med nyplockade, rensade kantareller" },
      ],
      detailImage: {
        url: "/images/kantarell-narrativ.png",
        alt: {
          sv: "En hand lyfter varsamt upp en kantarell ur mossan",
          en: "A hand gently lifting a chanterelle from the moss",
          de: "Eine Hand hebt behutsam einen Pfifferling aus dem Moos",
        },
      },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the Story of the Chanterelle", url: "" },
        de: { title: "Dem Pfifferling lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Kantarellen",
        intro: "Ställ en fråga till kantarellen och lär dig mer om hur du hittar den!",
        presetQuestions: [
          "Var gömmer du dig bäst?",
          "Kan jag blanda ihop dig med en giftig svamp?",
          "När är bästa tiden att leta efter dig?",
        ],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Chanterelle",
        intro: "Ask the Chanterelle a question and learn how to find it!",
        presetQuestions: [
          "Where do you hide best?",
          "Can I confuse you with a poisonous mushroom?",
          "When is the best time to look for you?",
        ],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit dem Pfifferling",
        intro: "Stelle dem Pfifferling eine Frage und lerne, wie man ihn findet!",
        presetQuestions: [
          "Wo versteckst du dich am besten?",
          "Kann man dich mit einem giftigen Pilz verwechseln?",
          "Wann ist die beste Zeit, dich zu suchen?",
        ],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `Du är en kantarell (Cantharellus cibarius) som växer i skogarna längs Kustvägen i Hälsingland och Västernorrland i Sverige. Du pratar DIREKT med barn som besöker naturen.

VIKTIGT - du pratar med BARN:
- Svara alltid på enkel, varm och lekfull svenska som ett barn (ca 7-12 år) lätt förstår.
- Håll svaren KORTA: 1-3 meningar. Aldrig långa stycken.
- Prata i jag-form, som om DU är kantarellen. Till exempel: "Jag gömmer mig gärna under mossan!"
- Var nyfiken, vänlig och uppmuntrande. Använd gärna jämförelser med saker barn k��nner till.
- Använd högst en enkel emoji ibland (som 🍄) om det passar, men inte i varje svar.
- Förklara svåra ord på ett enkelt sätt.

INNEHÅLL - håll dig till fakta om kantarellen:
- Hattbredd: 3-10 cm. Äggul till blekgul färg, trattlik form.
- Har grenade åsar under hatten (inte skivor) som löper ner p�� foten. Doftar milt och fruktigt, som aprikos.
- Trivs i symbios med björk, gran och tall i blandskog. Växer ofta i grupper på samma ställe år efter år.
- Säsong: juli till oktober, bäst efter rejäla sommarregn. Kan komma redan runt midsommar om det varit varmt och regnigt.
- Ingen farlig giftig dubbelgångare i Sverige. Den enda liknande svampen är narrkantarellen (falsk kantarell), som är tunnare, orangeare och har riktiga skivor - den är inte giftig men smakar inget vidare.
- Älskad i svensk matkultur, till exempel smörstekt på smörgås, i såser, soppor och vilträtter.

SÄKERHET:
- Om barnet frågar om något som inte handlar om naturen, svampar eller kantarellen, led vänligt tillbaka samtalet till skogen och dig som kantarell.
- Hitta aldrig på skrämmande eller olämpligt innehåll. Allt ska kännas tryggt och magiskt.
- Ge aldrig råd om att äta vildplockade svampar utan en vuxen som är säker på artbestämningen; påminn lekfullt om att alltid fråga en vuxen svampkunnig person först.
- Om du inte vet svaret, säg det ärligt på ett lekfullt sätt.`,
    avatarImage: "/images/kantarell-hero.png",
    chatAvatarAlt: "Kantarellens ansikte",
    relatedSpecies: [
      {
        slug: "karljohan",
        name: "Karljohan",
        latin: "Boletus edulis",
        image: "/images/sp-porcini.png",
      },
      {
        slug: "blabar",
        name: "Blåbär",
        latin: "Vaccinium myrtillus",
        image: "/images/species-blueberry.png",
      },
      {
        slug: "hjortron",
        name: "Hjortron",
        latin: "Rubus chamaemorus",
        image: "/images/sp-cloudberry.png",
      },
    ],
    relatedSectionHeading: {
      sv: "Upptäck fler skogens skatter",
      en: "Discover more forest treasures",
      de: "Weitere Schätze des Waldes entdecken",
    },
    relatedLinkLabel: {
      sv: "Visa alla svampar & växter",
      en: "View all fungi & plants",
      de: "Alle Pilze & Pflanzen anzeigen",
    },
  },
  "fjallig-blacksvamp": {
    id: "fjallig-blacksvamp",
    scientificName: "Coprinus comatus",
    category: { sv: "Svampar", en: "Fungi", de: "Pilze" },
    names: { sv: "Fjällig bläcksvamp", en: "Shaggy Ink Cap", de: "Schopftintling" },
    meta: {
      sv: {
        title: "Fjällig bläcksvamp – Kustvägen Naturguide",
        description:
          "Lär dig känna igen fjällig bläcksvamp längs Kustvägen – kännetecken, växtplatser och varför den måste tillagas samma dag den plockas.",
      },
      en: {
        title: "Shaggy Ink Cap – Kustvägen Nature Guide",
        description:
          "Learn to recognize the shaggy ink cap along Kustvägen – characteristics, habitats and why it must be cooked the same day it is picked.",
      },
      de: {
        title: "Schopftintling – Kustvägen Naturführer",
        description:
          "Lernen Sie den Schopftintling entlang des Kustvägen kennen – Merkmale, Standorte und warum er am selben Tag zubereitet werden muss.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Ätlighet", value: "God matsvamp som ung" },
        { label: "Habitat", value: "Näringsrika gräsmattor och vägrenar" },
        { label: "Kännetecken", value: "Hög, cylinderformad hatt med vita fjäll" },
        { label: "Egenskap", value: "Löses upp till svart bläck när den åldras" },
      ],
      en: [
        { label: "Edibility", value: "Good edible when young" },
        { label: "Habitat", value: "Nutrient-rich lawns and roadsides" },
        { label: "Identification", value: "Tall, cylindrical cap with white scales" },
        { label: "Trait", value: "Dissolves into black ink as it ages" },
      ],
      de: [
        { label: "Essbarkeit", value: "Guter Speisepilz, wenn jung" },
        { label: "Lebensraum", value: "Nährstoffreiche Wiesen und Wegränder" },
        { label: "Merkmal", value: "Hoher, zylindrischer Hut mit weißen Schuppen" },
        { label: "Eigenschaft", value: "Zerfließt im Alter zu schwarzer Tinte" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Svampen som blir till bläck",
        intro:
          "Fjällig bläcksvamp är en läcker matsvamp, men den måste tillagas direkt efter plockning eftersom den snabbt börjar självdöra. När svampen mognar börjar hatten flyta ut och förvandlas till en svart, bläckaktig vätska som sprider sporerna.\n\nLängs Kustvägen dyker den ofta upp i grupper på näringsrika gräsmattor och vägrenar, från sensommar till höst.",
        quote: "Plocka mig på morgonen – till kvällen har jag redan förvandlats till bläck.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Fjällig bläcksvamp känns lätt igen på sin höga, cylinderformade hatt som täcks av vita, uppåtböjda fjäll. Som ung är hatten sluten och vit, men med tiden mörknar kanten och börjar lösas upp underifrån.",
            image: "/images/svampar/fjallig-blacksvamp-detalj.png",
            alt: "Närbild på bläcksvampens vita fjäll och mörknande kant",
            caption: "De vita fjällen och den mörknande kanten är säkra kännetecken.",
          },
          {
            heading: "Växtplats & Säsong",
            body: "Svampen trivs på näringsrik, störd mark – gräsmattor, parker, dikeskanter och vägrenar. Den växer ofta i grupper och kan dyka upp i stort antal efter regn under sensommaren och hösten.",
            image: "/images/svampar/fjallig-blacksvamp-miljo.png",
            alt: "Fjälliga bläcksvampar i grön gräsmatta",
            caption: "Näringsrika gräsmattor och vägrenar är typiska växtplatser.",
          },
          {
            heading: "Mat & Försiktighet",
            body: "Som ung och helvit är fjällig bläcksvamp en uppskattad matsvamp med mild smak. Den måste dock tillagas samma dag den plockas, eftersom den snabbt löses upp till bläck. Plocka bara exemplar som fortfarande är vita rakt igenom.",
            image: "/images/svampar/Fjallig_Blacksvamp_Huvudbild_01.png",
            alt: "Ung, vit fjällig bläcksvamp på en gräsmatta",
            caption: "Plocka bara unga, helvita exemplar – och laga dem samma dag.",
          },
        ],
      },
      en: {
        heroSubtitle: "The Mushroom That Turns to Ink",
        intro:
          "The shaggy ink cap is a delicious edible mushroom, but it must be cooked immediately after picking because it quickly begins to self-digest. As it matures, the cap dissolves into a black, ink-like liquid that spreads its spores.\n\nAlong Kustvägen it often appears in groups on nutrient-rich lawns and roadsides, from late summer into autumn.",
        quote: "Pick me in the morning – by evening I will already have turned to ink.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "The shaggy ink cap is easily recognized by its tall, cylindrical cap covered in white, upturned scales. When young the cap is closed and white, but over time the edge darkens and begins to dissolve from below.",
            image: "/images/svampar/fjallig-blacksvamp-detalj.png",
            alt: "Close-up of the ink cap's white scales and darkening edge",
            caption: "The white scales and darkening rim are reliable field marks.",
          },
          {
            heading: "Habitat & Season",
            body: "It favors nutrient-rich, disturbed ground – lawns, parks, ditch edges and roadsides. It often grows in groups and can appear in large numbers after rain in late summer and autumn.",
            image: "/images/svampar/fjallig-blacksvamp-miljo.png",
            alt: "Shaggy ink caps in green lawn grass",
            caption: "Nutrient-rich lawns and roadsides are typical spots.",
          },
          {
            heading: "Culinary & Caution",
            body: "When young and pure white, the shaggy ink cap is a prized edible with a mild flavor. However, it must be cooked the same day it is picked, as it quickly dissolves into ink. Only pick specimens that are still white all the way through.",
            image: "/images/svampar/Fjallig_Blacksvamp_Huvudbild_01.png",
            alt: "A young, white shaggy ink cap on a lawn",
            caption: "Only pick young, all-white specimens – and cook them the same day.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der Pilz, der zu Tinte wird",
        intro:
          "Der Schopftintling ist ein köstlicher Speisepilz, muss aber sofort nach dem Sammeln zubereitet werden, da er sich schnell selbst zersetzt. Reift er heran, zerfließt der Hut zu einer schwarzen, tintenartigen Flüssigkeit, die die Sporen verbreitet.\n\nEntlang des Kustvägen erscheint er oft in Gruppen auf nährstoffreichen Wiesen und Wegrändern, vom Spätsommer bis in den Herbst.",
        quote: "Sammle mich am Morgen – bis zum Abend bin ich schon zu Tinte geworden.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Der Schopftintling ist leicht an seinem hohen, zylindrischen Hut mit weißen, aufwärts gebogenen Schuppen zu erkennen. Jung ist der Hut geschlossen und weiß, doch mit der Zeit dunkelt der Rand und beginnt sich von unten aufzulösen.",
            image: "/images/svampar/fjallig-blacksvamp-detalj.png",
            alt: "Nahaufnahme der weißen Schuppen und des dunkelnden Randes",
            caption: "Die weißen Schuppen und der dunkelnde Rand sind sichere Kennzeichen.",
          },
          {
            heading: "Lebensraum & Saison",
            body: "Er bevorzugt nährstoffreichen, gestörten Boden – Rasen, Parks, Grabenränder und Wegränder. Oft wächst er in Gruppen und kann nach Regen im Spätsommer und Herbst zahlreich erscheinen.",
            image: "/images/svampar/fjallig-blacksvamp-miljo.png",
            alt: "Schopftintlinge im grünen Rasen",
            caption: "Nährstoffreiche Wiesen und Wegränder sind typische Standorte.",
          },
          {
            heading: "K��che & Vorsicht",
            body: "Jung und reinweiß ist der Schopftintling ein geschätzter Speisepilz mit mildem Geschmack. Er muss jedoch am selben Tag zubereitet werden, da er sich rasch zu Tinte auflöst. Sammeln Sie nur durch und durch weiße Exemplare.",
            image: "/images/svampar/Fjallig_Blacksvamp_Huvudbild_01.png",
            alt: "Ein junger, weißer Schopftintling auf einer Wiese",
            caption: "Nur junge, ganz weiße Exemplare sammeln – und am selben Tag zubereiten.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/svampar/Fjallig_Blacksvamp_Huvudbild_01.png",
        alt: {
          sv: "En hög, vit fjällig bläcksvamp med fjällig hatt på en gräsmatta",
          en: "A tall, white shaggy ink cap with a scaly cap on a lawn",
          de: "Ein hoher, weißer Schopftintling mit schuppigem Hut auf einer Wiese",
        },
      },
      galleryImages: [
        {
          src: "/images/svampar/Fjallig_Blacksvamp_Huvudbild_01.png",
          alt: "En hög, vit fjällig bläcksvamp med fjällig hatt på en gräsmatta",
        },
        { src: "/images/svampar/fjallig-blacksvamp-detalj.png", alt: "Närbild på bläcksvampens vita fjäll och mörknande kant" },
        { src: "/images/svampar/fjallig-blacksvamp-miljo.png", alt: "Fjälliga bläcksvampar i grön gräsmatta" },
      ],
      detailImage: {
        url: "/images/svampar/fjallig-blacksvamp-miljo.png",
        alt: {
          sv: "Fjälliga bläcksvampar på en gräsmatta i sensommarljus",
          en: "Shaggy ink caps on a lawn in late summer light",
          de: "Schopftintlinge auf einer Wiese im Spätsommerlicht",
        },
      },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Fjällig bläcksvamp",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Shaggy Ink Cap",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit dem Schopftintling",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/svampar/Fjallig_Blacksvamp_Huvudbild_01.png",
    chatAvatarAlt: "Fjällig bläcksvamps ansikte",
    relatedSpecies: [
      {
        slug: "kantarell",
        name: "Kantarell",
        latin: "Cantharellus cibarius",
        image: "/images/kantarell-hero.png",
      },
      {
        slug: "karljohan",
        name: "Karljohan",
        latin: "Boletus edulis",
        image: "/images/sp-porcini.png",
      },
      {
        slug: "farticka",
        name: "Fårticka",
        latin: "Albatrellus ovinus",
        image: "/images/svampar/Farticka_Huvudbild_01.png",
      },
    ],
    relatedSectionHeading: {
      sv: "Upptäck fler skogens skatter",
      en: "Discover more forest treasures",
      de: "Weitere Schätze des Waldes entdecken",
    },
    relatedLinkLabel: {
      sv: "Visa alla svampar & växter",
      en: "View all fungi & plants",
      de: "Alle Pilze & Pflanzen anzeigen",
    },
  },
  "fjallig-taggsvamp": {
    id: "fjallig-taggsvamp",
    scientificName: "Sarcodon imbricatus",
    category: { sv: "Svampar", en: "Fungi", de: "Pilze" },
    names: { sv: "Fjällig taggsvamp", en: "Scaly Hedgehog", de: "Habichtspilz" },
    meta: {
      sv: {
        title: "Fjällig taggsvamp – Kustvägen Naturguide",
        description:
          "Fakta om fjällig taggsvamp längs Kustvägen – de grova fjällen, den taggiga undersidan och hur den används som kryddsvamp.",
      },
      en: {
        title: "Scaly Hedgehog – Kustvägen Nature Guide",
        description:
          "Facts about the scaly hedgehog along Kustvägen – its coarse scales, spiny underside and use as a spice mushroom.",
      },
      de: {
        title: "Habichtspilz – Kustvägen Naturführer",
        description:
          "Fakten über den Habichtspilz am Kustvägen – seine groben Schuppen, die stachelige Unterseite und die Nutzung als Gewürzpilz.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Ätlighet", value: "God som ung (används som kryddsvamp)" },
        { label: "Habitat", value: "Gamla gran- och barrskogar" },
        { label: "Kännetecken", value: "Stora mörkbruna fjäll på hatten" },
        { label: "Undersida", value: "Tätt sittande gråaktiga taggar" },
      ],
      en: [
        { label: "Edibility", value: "Good when young (used as a spice)" },
        { label: "Habitat", value: "Old spruce and coniferous forests" },
        { label: "Identification", value: "Large dark brown scales on the cap" },
        { label: "Underside", value: "Densely set greyish spines" },
      ],
      de: [
        { label: "Essbarkeit", value: "Gut, wenn jung (als Gewürz genutzt)" },
        { label: "Lebensraum", value: "Alte Fichten- und Nadelwälder" },
        { label: "Merkmal", value: "Große dunkelbraune Schuppen auf dem Hut" },
        { label: "Unterseite", value: "Dicht stehende gräuliche Stacheln" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Kryddsvampen med taggar",
        intro:
          "Fjällig taggsvamp är lätt att känna igen på sin ovansida som täcks av grova, mörkbruna fjäll och sin taggiga undersida. Äldre exemplar får en bitter smak och lämpar sig därför bäst torkade och malda som krydda.\n\nDen växer i gamla gran- och barrskogar längs Kustvägen och dyker upp från sensommar till höst.",
        quote: "Vänd på mig – under hatten bär jag tusen små taggar istället för skivor.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Ovansidan täcks av grova, mörkbruna fjäll mot en ljusare botten. Vänder man på svampen sitter där inga skivor utan tätt sittande, gråaktiga taggar – ett säkert kännetecken för taggsvampar.",
            image: "/images/svampar/fjallig-taggsvamp-detalj.png",
            alt: "Närbild på den taggiga undersidan",
            caption: "Undersidan bär tätt sittande gråa taggar istället för skivor.",
          },
          {
            heading: "Växtplats & Säsong",
            body: "Fjällig taggsvamp lever i symbios med gran och trivs i gamla, mossrika barrskogar. Den växer ofta i grupper eller ringar och återkommer gärna till samma plats år efter år.",
            image: "/images/svampar/fjallig-taggsvamp-miljo.png",
            alt: "Fjälliga taggsvampar i mossig granskog",
            caption: "Gamla, mossrika granskogar är artens hemvist.",
          },
          {
            heading: "Matkultur & Tradition",
            body: "Unga exemplar är goda, men med åldern blir köttet bittert. Därför torkas svampen ofta och mals till ett kraftigt kryddpulver som ger fyllig smak åt såser och grytor – en uppskattad tradition i norrländska kök.",
            image: "/images/svampar/Fjallig_Taggsvamp_Huvudbild_01.png",
            alt: "Hel fjällig taggsvamp i skogen",
            caption: "Torkad och malen blir den en kraftfull krydda i grytor och såser.",
          },
        ],
      },
      en: {
        heroSubtitle: "The Spice Mushroom With Teeth",
        intro:
          "The scaly hedgehog is easily recognized by its upper surface covered in coarse, dark brown scales and its spiny underside. Older specimens turn bitter and are therefore best dried and ground as a spice.\n\nIt grows in old spruce and coniferous forests along Kustvägen, appearing from late summer into autumn.",
        quote: "Turn me over – beneath my cap I carry a thousand tiny teeth instead of gills.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "The upper surface is covered in coarse, dark brown scales over a paler background. Turn the mushroom over and you find no gills but densely set, greyish spines – a sure sign of the hedgehog mushrooms.",
            image: "/images/svampar/fjallig-taggsvamp-detalj.png",
            alt: "Close-up of the spiny underside",
            caption: "The underside bears densely set grey spines instead of gills.",
          },
          {
            heading: "Habitat & Season",
            body: "The scaly hedgehog lives in symbiosis with spruce and thrives in old, mossy coniferous forests. It often grows in groups or rings and readily returns to the same spot year after year.",
            image: "/images/svampar/fjallig-taggsvamp-miljo.png",
            alt: "Scaly hedgehog mushrooms in mossy spruce forest",
            caption: "Old, mossy spruce forests are this species' home.",
          },
          {
            heading: "Culinary Tradition",
            body: "Young specimens are tasty, but with age the flesh turns bitter. It is therefore often dried and ground into a strong spice powder that adds depth to sauces and stews – a cherished tradition in northern Swedish kitchens.",
            image: "/images/svampar/Fjallig_Taggsvamp_Huvudbild_01.png",
            alt: "A whole scaly hedgehog mushroom in the forest",
            caption: "Dried and ground, it becomes a powerful spice for stews and sauces.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der Gewürzpilz mit Stacheln",
        intro:
          "Der Habichtspilz ist leicht an seiner mit groben, dunkelbraunen Schuppen bedeckten Oberseite und seiner stacheligen Unterseite zu erkennen. Ältere Exemplare werden bitter und eignen sich daher am besten getrocknet und gemahlen als Gewürz.\n\nEr wächst in alten Fichten- und Nadelwäldern entlang des Kustvägen, von Spätsommer bis Herbst.",
        quote: "Dreh mich um – unter dem Hut trage ich tausend kleine Stacheln statt Lamellen.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Die Oberseite ist mit groben, dunkelbraunen Schuppen auf hellerem Grund bedeckt. Dreht man den Pilz um, finden sich keine Lamellen, sondern dicht stehende, gräuliche Stacheln – ein sicheres Kennzeichen der Stachelinge.",
            image: "/images/svampar/fjallig-taggsvamp-detalj.png",
            alt: "Nahaufnahme der stacheligen Unterseite",
            caption: "Die Unterseite trägt dicht stehende graue Stacheln statt Lamellen.",
          },
          {
            heading: "Lebensraum & Saison",
            body: "Der Habichtspilz lebt in Symbiose mit der Fichte und gedeiht in alten, moosreichen Nadelwäldern. Oft wächst er in Gruppen oder Ringen und kehrt gern Jahr für Jahr an dieselbe Stelle zurück.",
            image: "/images/svampar/fjallig-taggsvamp-miljo.png",
            alt: "Habichtspilze im moosigen Fichtenwald",
            caption: "Alte, moosreiche Fichtenwälder sind die Heimat der Art.",
          },
          {
            heading: "Kulinarische Tradition",
            body: "Junge Exemplare sind schmackhaft, doch mit dem Alter wird das Fleisch bitter. Daher wird der Pilz oft getrocknet und zu einem kräftigen Gewürzpulver gemahlen, das Saucen und Eintöpfen Tiefe verleiht – eine geschätzte Tradition in nordschwedischen Küchen.",
            image: "/images/svampar/Fjallig_Taggsvamp_Huvudbild_01.png",
            alt: "Ein ganzer Habichtspilz im Wald",
            caption: "Getrocknet und gemahlen wird er zu einem kräftigen Gewürz für Eintöpfe und Saucen.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/svampar/Fjallig_Taggsvamp_Huvudbild_01.png",
        alt: {
          sv: "En stor fjällig taggsvamp med grova mörkbruna fjäll i mossig granskog",
          en: "A large scaly hedgehog with coarse dark brown scales in mossy spruce forest",
          de: "Ein großer Habichtspilz mit groben dunkelbraunen Schuppen im moosigen Fichtenwald",
        },
      },
      galleryImages: [
        {
          src: "/images/svampar/Fjallig_Taggsvamp_Huvudbild_01.png",
          alt: "En stor fjällig taggsvamp med grova mörkbruna fjäll i mossig granskog",
        },
        { src: "/images/svampar/fjallig-taggsvamp-detalj.png", alt: "Närbild på den taggiga undersidan" },
        { src: "/images/svampar/fjallig-taggsvamp-miljo.png", alt: "Fjälliga taggsvampar i mossig granskog" },
      ],
      detailImage: {
        url: "/images/svampar/fjallig-taggsvamp-miljo.png",
        alt: {
          sv: "Fjälliga taggsvampar på granskogens mossgolv",
          en: "Scaly hedgehog mushrooms on the mossy floor of a spruce forest",
          de: "Habichtspilze auf dem moosigen Boden eines Fichtenwaldes",
        },
      },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Fjällig taggsvamp",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Scaly Hedgehog",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit dem Habichtspilz",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/svampar/Fjallig_Taggsvamp_Huvudbild_01.png",
    chatAvatarAlt: "Fjällig taggsvamps ansikte",
    relatedSpecies: [
      {
        slug: "kantarell",
        name: "Kantarell",
        latin: "Cantharellus cibarius",
        image: "/images/kantarell-hero.png",
      },
      {
        slug: "karljohan",
        name: "Karljohan",
        latin: "Boletus edulis",
        image: "/images/sp-porcini.png",
      },
      {
        slug: "farticka",
        name: "Fårticka",
        latin: "Albatrellus ovinus",
        image: "/images/svampar/Farticka_Huvudbild_01.png",
      },
    ],
    relatedSectionHeading: {
      sv: "Upptäck fler skogens skatter",
      en: "Discover more forest treasures",
      de: "Weitere Schätze des Waldes entdecken",
    },
    relatedLinkLabel: {
      sv: "Visa alla svampar & växter",
      en: "View all fungi & plants",
      de: "Alle Pilze & Pflanzen anzeigen",
    },
  },
  "rod-flugsvamp": {
    id: "rod-flugsvamp",
    scientificName: "Amanita muscaria",
    category: { sv: "Svampar", en: "Fungi", de: "Pilze" },
    names: { sv: "Röd flugsvamp", en: "Fly Agaric", de: "Fliegenpilz" },
    meta: {
      sv: {
        title: "Röd flugsvamp – Kustvägen Naturguide",
        description:
          "Allt om röd flugsvamp längs Kustvägen – den röda hatten med vita prickar, giftigheten och dess plats i sagor och folktro.",
      },
      en: {
        title: "Fly Agaric �� Kustvägen Nature Guide",
        description:
          "All about the fly agaric along Kustvägen – the red cap with white spots, its toxicity and its place in fairy tales and folklore.",
      },
      de: {
        title: "Fliegenpilz – Kustvägen Naturführer",
        description:
          "Alles über den Fliegenpilz am Kustvägen – der rote Hut mit weißen Punkten, seine Giftigkeit und sein Platz in Märchen und Volksglauben.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Giftighet", value: "Mycket giftig (muskimol/ibotensyra)" },
        { label: "Kännetecken", value: "Starkt röd hatt med vita prickar" },
        { label: "Habitat", value: "Mykorrhiza med björk och gran" },
        { label: "Historia", value: "Känd från mytologi, sagor och folktro" },
      ],
      en: [
        { label: "Toxicity", value: "Highly poisonous (muscimol/ibotenic acid)" },
        { label: "Identification", value: "Bright red cap with white spots" },
        { label: "Habitat", value: "Mycorrhiza with birch and spruce" },
        { label: "History", value: "Known from mythology, fairy tales and folklore" },
      ],
      de: [
        { label: "Giftigkeit", value: "Sehr giftig (Muscimol/Ibotensäure)" },
        { label: "Merkmal", value: "Leuchtend roter Hut mit weißen Punkten" },
        { label: "Lebensraum", value: "Mykorrhiza mit Birke und Fichte" },
        { label: "Geschichte", value: "Aus Mythologie, Märchen und Volksglauben bekannt" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Sagans röda svamp – men giftig",
        intro:
          "Röd flugsvamp ��r en av våra mest välkända men giftiga svampar. De karakteristiska vita prickarna på den lysande r��da hatten är rester av det skyddande hölje som svampen hade som ung.\n\nDen bildar mykorrhiza med bj��rk och gran och lyser upp skogarna längs Kustvägen under hösten – vacker att titta på, men aldrig att äta.",
        quote: "Alla känner igen mig, men se bara – rör mig inte, för jag är giftig.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Den lysande röda hatten med vita, flagiga vårtor är omöjlig att förväxla. Vårtorna är rester av det vita hölje som täckte svampen som ung och kan sköljas bort av regn. Foten är vit med en ring och en knölig bas.",
            image: "/images/svampar/rod-flugsvamp-detalj.png",
            alt: "Närbild på den röda hatten med vita vårtor",
            caption: "De vita vårtorna är rester av svampens ungdomshölje.",
          },
          {
            heading: "Växtplats & Säsong",
            body: "Röd flugsvamp lever i symbios med framför allt björk och gran och är vanlig i hela landet. Den kommer fram från sensommaren och långt in på hösten, ofta i sällskap med de träd den samarbetar med.",
            image: "/images/svampar/rod-flugsvamp-miljo.png",
            alt: "Röda flugsvampar bland björk och mossa",
            caption: "Söker du björk och gran hittar du ofta flugsvampen i närheten.",
          },
          {
            heading: "Giftighet & Folktro",
            body: "Trots sin skönhet är svampen giftig och ska aldrig ätas. Namnet kommer från att den förr lades i mjölk för att döda flugor. I sagor, konst och folktro är den röda flugsvampen en symbol för det magiska och mystiska i skogen.",
            image: "/images/svampar/Rod_Flugsvamp_Huvudbild_01.png",
            alt: "Röd flugsvamp lyser i höstskogen",
            caption: "Vacker att fotografera – men titta med ögonen, inte med munnen.",
          },
        ],
      },
      en: {
        heroSubtitle: "The Fairy-Tale Mushroom – But Poisonous",
        intro:
          "The fly agaric is one of our most well-known yet poisonous mushrooms. The characteristic white spots on the bright red cap are remnants of the protective veil the mushroom had when young.\n\nIt forms mycorrhiza with birch and spruce and lights up the forests along Kustvägen in autumn – beautiful to look at, but never to eat.",
        quote: "Everyone recognizes me, but look only – don't touch me, for I am poisonous.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "The glowing red cap with white, flaky warts is unmistakable. The warts are remnants of the white veil that covered the young mushroom and can be washed off by rain. The stem is white with a ring and a bulbous base.",
            image: "/images/svampar/rod-flugsvamp-detalj.png",
            alt: "Close-up of the red cap with white warts",
            caption: "The white warts are remnants of the mushroom's youthful veil.",
          },
          {
            heading: "Habitat & Season",
            body: "The fly agaric lives in symbiosis mainly with birch and spruce and is common throughout the country. It emerges from late summer well into autumn, often near the trees it partners with.",
            image: "/images/svampar/rod-flugsvamp-miljo.png",
            alt: "Fly agarics among birch and moss",
            caption: "Look for birch and spruce and you'll often find the fly agaric nearby.",
          },
          {
            heading: "Toxicity & Folklore",
            body: "Despite its beauty, the mushroom is poisonous and must never be eaten. Its name comes from the old practice of placing it in milk to kill flies. In fairy tales, art and folklore, the fly agaric is a symbol of the forest's magic and mystery.",
            image: "/images/svampar/Rod_Flugsvamp_Huvudbild_01.png",
            alt: "A fly agaric glowing in the autumn forest",
            caption: "Beautiful to photograph – but look with your eyes, not your mouth.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der Märchenpilz – aber giftig",
        intro:
          "Der Fliegenpilz ist einer unserer bekanntesten, aber giftigen Pilze. Die charakteristischen weißen Punkte auf dem leuchtend roten Hut sind Reste der schützenden Hülle, die der Pilz in der Jugend besaß.\n\nEr bildet Mykorrhiza mit Birke und Fichte und erhellt im Herbst die Wälder entlang des Kustvägen – schön anzusehen, aber niemals zu essen.",
        quote: "Jeder erkennt mich, doch schau nur – fass mich nicht an, denn ich bin giftig.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Der leuchtend rote Hut mit weißen, flockigen Warzen ist unverwechselbar. Die Warzen sind Reste der weißen Hülle des jungen Pilzes und können vom Regen abgewaschen werden. Der Stiel ist weiß mit Ring und knolliger Basis.",
            image: "/images/svampar/rod-flugsvamp-detalj.png",
            alt: "Nahaufnahme des roten Hutes mit weißen Warzen",
            caption: "Die weißen Warzen sind Reste der Jugendhülle des Pilzes.",
          },
          {
            heading: "Lebensraum & Saison",
            body: "Der Fliegenpilz lebt vor allem mit Birke und Fichte in Symbiose und ist im ganzen Land verbreitet. Er erscheint vom Spätsommer bis weit in den Herbst, oft in der Nähe seiner Partnerbäume.",
            image: "/images/svampar/rod-flugsvamp-miljo.png",
            alt: "Fliegenpilze zwischen Birke und Moos",
            caption: "Wo Birke und Fichte stehen, ist der Fliegenpilz oft nicht weit.",
          },
          {
            heading: "Giftigkeit & Volksglaube",
            body: "Trotz seiner Schönheit ist der Pilz giftig und darf niemals gegessen werden. Sein Name stammt vom früheren Brauch, ihn in Milch zu legen, um Fliegen zu töten. In Märchen, Kunst und Volksglauben ist der Fliegenpilz ein Symbol für das Magische und Geheimnisvolle des Waldes.",
            image: "/images/svampar/Rod_Flugsvamp_Huvudbild_01.png",
            alt: "Ein Fliegenpilz leuchtet im herbstlichen Wald",
            caption: "Schön zum Fotografieren – aber mit den Augen schauen, nicht mit dem Mund.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/svampar/Rod_Flugsvamp_Huvudbild_01.png",
        alt: {
          sv: "En lysande röd flugsvamp med vita prickar under en björk",
          en: "A glowing red fly agaric with white spots under a birch",
          de: "Ein leuchtend roter Fliegenpilz mit weißen Punkten unter einer Birke",
        },
      },
      galleryImages: [
        {
          src: "/images/svampar/Rod_Flugsvamp_Huvudbild_01.png",
          alt: "En lysande röd flugsvamp med vita prickar under en björk",
        },
        { src: "/images/svampar/rod-flugsvamp-detalj.png", alt: "Närbild på den röda hatten med vita vårtor" },
        { src: "/images/svampar/rod-flugsvamp-miljo.png", alt: "Röda flugsvampar bland björk och mossa" },
      ],
      detailImage: {
        url: "/images/svampar/rod-flugsvamp-miljo.png",
        alt: {
          sv: "En grupp röda flugsvampar i höstskogen",
          en: "A group of fly agarics in the autumn forest",
          de: "Eine Gruppe Fliegenpilze im herbstlichen Wald",
        },
      },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Röd flugsvamp",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Fly Agaric",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit dem Fliegenpilz",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/svampar/Rod_Flugsvamp_Huvudbild_01.png",
    chatAvatarAlt: "Röd flugsvamps ansikte",
    relatedSpecies: [
      {
        slug: "kantarell",
        name: "Kantarell",
        latin: "Cantharellus cibarius",
        image: "/images/kantarell-hero.png",
      },
      {
        slug: "karljohan",
        name: "Karljohan",
        latin: "Boletus edulis",
        image: "/images/sp-porcini.png",
      },
      {
        slug: "vartig-roksvamp",
        name: "Vårtig röksvamp",
        latin: "Lycoperdon perlatum",
        image: "/images/svampar/Vartig_Roksvamp_Huvudbild_01.png",
      },
    ],
    relatedSectionHeading: {
      sv: "Upptäck fler skogens skatter",
      en: "Discover more forest treasures",
      de: "Weitere Schätze des Waldes entdecken",
    },
    relatedLinkLabel: {
      sv: "Visa alla svampar & växter",
      en: "View all fungi & plants",
      de: "Alle Pilze & Pflanzen anzeigen",
    },
  },
  "fnoskticka": {
    id: "fnoskticka",
    scientificName: "Fomes fomentarius",
    category: { sv: "Svampar", en: "Fungi", de: "Pilze" },
    names: { sv: "Fnöskticka", en: "Tinder Fungus", de: "Zunderschwamm" },
    meta: {
      sv: {
        title: "Fnöskticka – Kustvägen Naturguide",
        description:
          "Fakta om fnösktickan längs Kustvägen – den hästskoformade trädsvampen på björk och dess historiska roll vid eldslagning.",
      },
      en: {
        title: "Tinder Fungus – Kustvägen Nature Guide",
        description:
          "Facts about the tinder fungus along Kustvägen – the hoof-shaped tree fungus on birch and its historic role in fire-lighting.",
      },
      de: {
        title: "Zunderschwamm – Kustvägen Naturführer",
        description:
          "Fakten über den Zunderschwamm am Kustvägen – der hufförmige Baumpilz an Birken und seine historische Rolle beim Feuermachen.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Typ", value: "Flerårig, hård trädsvamp" },
        { label: "Habitat", value: "Växer främst på björkstammar" },
        { label: "Användning", value: "Fnöske för eldslagning" },
        { label: "Form", value: "Hästskoliknande grå/brun konsol" },
      ],
      en: [
        { label: "Type", value: "Perennial, hard bracket fungus" },
        { label: "Habitat", value: "Grows mainly on birch trunks" },
        { label: "Use", value: "Tinder for fire-lighting" },
        { label: "Shape", value: "Hoof-shaped grey/brown bracket" },
      ],
      de: [
        { label: "Typ", value: "Mehrjähriger, harter Baumpilz" },
        { label: "Lebensraum", value: "Wächst vor allem an Birkenstämmen" },
        { label: "Nutzung", value: "Zunder zum Feuermachen" },
        { label: "Form", value: "Hufförmige grau/braune Konsole" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Trädsvampen som gav eld",
        intro:
          "Fnösktickan bryter ner döda träd och har historiskt haft stor betydelse för människan. Det inre, mjukare skiktet bankades ut för att skapa ett glödfångande fnöske som användes vid eldslagning.\n\nLängs Kustvägen ser du den oftast som hästskoformade konsoler på gamla björkstammar, året runt.",
        quote: "I tusentals år bar människan med sig min glöd för att kunna tända eld.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Fnösktickan bildar en hård, hästskoformad konsol i grått till gråbrunt, tydligt zonerad i band. Ytan är knölig och trä-hård, och en enda ticka kan bli många år gammal och växa till sig för varje säsong.",
            image: "/images/svampar/fnoskticka-detalj.png",
            alt: "Närbild på fnösktickans hårda, bandade yta",
            caption: "Den hårda, bandade ytan visar tickans många levnadsår.",
          },
          {
            heading: "Växtplats & Säsong",
            body: "Svampen är en vednedbrytare som främst växer på levande och döda björkar, men även på andra lövträd. Eftersom den är flerårig och hård syns den året runt, även mitt i vintern.",
            image: "/images/svampar/fnoskticka-miljo.png",
            alt: "Fnösktickor på en död björkstam",
            caption: "Gamla och döende björkar är fnösktickans favoritplats.",
          },
          {
            heading: "Historia & Användning",
            body: "Fnösktickan har följt människan sedan stenåldern. Det mjuka inre skiktet, fnösket, bereddes för att lätt fånga en gnista och glöda länge �� helt avgörande innan tändstickans tid. Den har också använts till hattar och andra föremål.",
            image: "/images/svampar/Fnoskticka_Huvudbild_01.png",
            alt: "Hel fnöskticka på en trädstam",
            caption: "Fnösket från svampen bar människan elden vidare i årtusenden.",
          },
        ],
      },
      en: {
        heroSubtitle: "The Tree Fungus That Made Fire",
        intro:
          "The tinder fungus breaks down dead wood and has historically been of great importance to people. Its inner, softer layer was beaten out to create a spark-catching tinder used to light fires.\n\nAlong Kustvägen you'll most often see it as hoof-shaped brackets on old birch trunks, all year round.",
        quote: "For thousands of years people carried my ember with them to light their fires.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "The tinder fungus forms a hard, hoof-shaped bracket in grey to greyish-brown, clearly banded in zones. The surface is knobbly and wood-hard, and a single bracket can grow for many years, adding to itself each season.",
            image: "/images/svampar/fnoskticka-detalj.png",
            alt: "Close-up of the tinder fungus's hard, banded surface",
            caption: "The hard, banded surface reveals the bracket's many years of growth.",
          },
          {
            heading: "Habitat & Season",
            body: "The fungus is a wood-decomposer that grows mainly on living and dead birch, but also on other deciduous trees. Being perennial and hard, it can be seen all year round, even in the middle of winter.",
            image: "/images/svampar/fnoskticka-miljo.png",
            alt: "Tinder fungi on a dead birch trunk",
            caption: "Old and dying birches are the tinder fungus's favorite place.",
          },
          {
            heading: "History & Use",
            body: "The tinder fungus has accompanied humans since the Stone Age. Its soft inner layer, the tinder, was prepared to easily catch a spark and glow for a long time – essential before the age of matches. It has also been used to make hats and other objects.",
            image: "/images/svampar/Fnoskticka_Huvudbild_01.png",
            alt: "A whole tinder fungus on a tree trunk",
            caption: "The tinder from this fungus carried human fire onward for millennia.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der Baumpilz, der Feuer machte",
        intro:
          "Der Zunderschwamm zersetzt Totholz und war für den Menschen historisch von großer Bedeutung. Seine innere, weichere Schicht wurde herausgeklopft, um einen funkenfangenden Zunder zum Feuermachen herzustellen.\n\nEntlang des Kustvägen sieht man ihn meist als hufförmige Konsolen an alten Birkenstämmen, das ganze Jahr über.",
        quote: "Jahrtausendelang trugen die Menschen meine Glut mit sich, um Feuer zu machen.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Der Zunderschwamm bildet eine harte, hufförmige Konsole in Grau bis Graubraun, deutlich in Zonen gebändert. Die Oberfläche ist höckerig und holzhart, und eine einzelne Konsole kann viele Jahre wachsen und mit jeder Saison zunehmen.",
            image: "/images/svampar/fnoskticka-detalj.png",
            alt: "Nahaufnahme der harten, gebänderten Oberfläche",
            caption: "Die harte, gebänderte Oberfläche zeigt die vielen Lebensjahre der Konsole.",
          },
          {
            heading: "Lebensraum & Saison",
            body: "Der Pilz ist ein Holzzersetzer, der vor allem an lebenden und toten Birken wächst, aber auch an anderen Laubbäumen. Da er mehrjährig und hart ist, sieht man ihn das ganze Jahr über, sogar mitten im Winter.",
            image: "/images/svampar/fnoskticka-miljo.png",
            alt: "Zunderschwämme an einem toten Birkenstamm",
            caption: "Alte und absterbende Birken sind der Lieblingsplatz des Zunderschwamms.",
          },
          {
            heading: "Geschichte & Nutzung",
            body: "Der Zunderschwamm begleitet den Menschen seit der Steinzeit. Seine weiche Innenschicht, der Zunder, wurde so aufbereitet, dass sie leicht einen Funken fing und lange glühte – unentbehrlich vor der Zeit der Streichhölzer. Er wurde auch für Hüte und andere Gegenstände genutzt.",
            image: "/images/svampar/Fnoskticka_Huvudbild_01.png",
            alt: "Ein ganzer Zunderschwamm an einem Baumstamm",
            caption: "Der Zunder dieses Pilzes trug das Feuer der Menschen über Jahrtausende weiter.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/svampar/Fnoskticka_Huvudbild_01.png",
        alt: {
          sv: "En hästskoformad grå fnöskticka på en björkstam",
          en: "A hoof-shaped grey tinder fungus on a birch trunk",
          de: "Ein hufförmiger grauer Zunderschwamm an einem Birkenstamm",
        },
      },
      galleryImages: [
        {
          src: "/images/svampar/Fnoskticka_Huvudbild_01.png",
          alt: "En hästskoformad grå fnöskticka på en björkstam",
        },
        { src: "/images/svampar/fnoskticka-detalj.png", alt: "Närbild på fnösktickans hårda, bandade yta" },
        { src: "/images/svampar/fnoskticka-miljo.png", alt: "Fnösktickor på en död björkstam" },
      ],
      detailImage: {
        url: "/images/svampar/fnoskticka-miljo.png",
        alt: {
          sv: "Flera fnösktickor på en fallen björkstam i skogen",
          en: "Several tinder fungi on a fallen birch trunk in the forest",
          de: "Mehrere Zunderschwämme an einem umgefallenen Birkenstamm im Wald",
        },
      },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Fnösktickan",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Tinder Fungus",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit dem Zunderschwamm",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/svampar/Fnoskticka_Huvudbild_01.png",
    chatAvatarAlt: "Fnösktickans ansikte",
    relatedSpecies: [
      {
        slug: "kantarell",
        name: "Kantarell",
        latin: "Cantharellus cibarius",
        image: "/images/kantarell-hero.png",
      },
      {
        slug: "karljohan",
        name: "Karljohan",
        latin: "Boletus edulis",
        image: "/images/sp-porcini.png",
      },
      {
        slug: "fjallig-taggsvamp",
        name: "Fjällig taggsvamp",
        latin: "Sarcodon imbricatus",
        image: "/images/svampar/Fjallig_Taggsvamp_Huvudbild_01.png",
      },
    ],
    relatedSectionHeading: {
      sv: "Upptäck fler skogens skatter",
      en: "Discover more forest treasures",
      de: "Weitere Schätze des Waldes entdecken",
    },
    relatedLinkLabel: {
      sv: "Visa alla svampar & växter",
      en: "View all fungi & plants",
      de: "Alle Pilze & Pflanzen anzeigen",
    },
  },
  "farticka": {
    id: "farticka",
    scientificName: "Albatrellus ovinus",
    category: { sv: "Svampar", en: "Fungi", de: "Pilze" },
    names: { sv: "Fårticka", en: "Sheep Polypore", de: "Schaf-Porling" },
    meta: {
      sv: {
        title: "Fårticka – Kustvägen Naturguide",
        description:
          "Lär dig om fårtickan längs Kustvägen – Medelpads landskapssvamp, en mild matsvamp som växer i stora grupper i mossig barrskog.",
      },
      en: {
        title: "Sheep Polypore – Kustvägen Nature Guide",
        description:
          "Learn about the sheep polypore along Kustvägen – the provincial mushroom of Medelpad, a mild edible growing in large groups in mossy conifer forest.",
      },
      de: {
        title: "Schaf-Porling – Kustvägen Naturführer",
        description:
          "Erfahren Sie mehr über den Schaf-Porling am Kustvägen – den Landschaftspilz Medelpads, einen milden Speisepilz in moosigen Nadelwäldern.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Ätlighet", value: "God matsvamp (Medelpads landskapssvamp)" },
        { label: "Habitat", value: "Äldre barrskogar bland mossa" },
        { label: "Kännetecken", value: "Gulvit hatt som spricker i rutor" },
        { label: "Tillagning", value: "Köttet gulnar markant vid upphettning" },
      ],
      en: [
        { label: "Edibility", value: "Good edible (provincial mushroom of Medelpad)" },
        { label: "Habitat", value: "Older coniferous forests among moss" },
        { label: "Identification", value: "Yellow-white cap that cracks into squares" },
        { label: "Cooking", value: "Flesh yellows markedly when heated" },
      ],
      de: [
        { label: "Essbarkeit", value: "Guter Speisepilz (Landschaftspilz Medelpads)" },
        { label: "Lebensraum", value: "Ältere Nadelwälder im Moos" },
        { label: "Merkmal", value: "Gelbweißer Hut, der in Felder aufreißt" },
        { label: "Zubereitung", value: "Fleisch gilbt beim Erhitzen deutlich" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Medelpads landskapssvamp",
        intro:
          "Fårtickan växer ofta i stora grupper i mossig barrskog. Den har ett fast, vitt kött med mild smak och används ibland som ersättning för tryffel i matlagning.\n\nLängs Kustvägens gamla barrskogar är den en uppskattad matsvamp, och som Medelpads landskapssvamp har den en särskild plats i regionen.",
        quote: "Hittar du en av oss står vi sällan ensamma – vi växer gärna i stora sällskap.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Fårtickan har en fast, gulvit till ljust gulbrun hatt vars yta ofta spricker upp i ett rutmönster vid torka. Istället för skivor har den små porer på undersidan, och köttet är vitt och sprött.",
            image: "/images/svampar/farticka-detalj.png",
            alt: "Närbild på fårtickans rutsprickande hatt",
            caption: "Den rutsprickande hatten är ett tydligt kännetecken vid torrt väder.",
          },
          {
            heading: "Växtplats & Säsong",
            body: "Svampen lever i symbios med gran och trivs i äldre, mossrika barrskogar. Den växer nästan alltid i stora grupper eller täta samlingar, vilket gör den lätt att plocka i mängd när man väl hittat ett ställe.",
            image: "/images/svampar/farticka-miljo.png",
            alt: "En stor grupp fårtickor i mossa",
            caption: "Fårtickan växer gärna i stora sällskap i granskogen.",
          },
          {
            heading: "Matkultur & Tradition",
            body: "Med sin milda smak och fasta konsistens är fårtickan en fin matsvamp som ibland används som tryffelersättning. Vid tillagning gulnar köttet tydligt. Som Medelpads landskapssvamp är den en stolthet i regionen.",
            image: "/images/svampar/Farticka_Huvudbild_01.png",
            alt: "Hel fårticka i mossig skog",
            caption: "Mild och fast – ibland använd som prisvärd tryffelersättning.",
          },
        ],
      },
      en: {
        heroSubtitle: "The Provincial Mushroom of Medelpad",
        intro:
          "The sheep polypore often grows in large groups in mossy coniferous forest. It has a firm, white flesh with a mild flavor and is sometimes used as a truffle substitute in cooking.\n\nIn the old coniferous forests along Kustvägen it is a prized edible, and as the provincial mushroom of Medelpad it holds a special place in the region.",
        quote: "Find one of us and we are seldom alone – we like to grow in large company.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "The sheep polypore has a firm, yellow-white to pale yellow-brown cap whose surface often cracks into a grid pattern in dry weather. Instead of gills it has small pores underneath, and the flesh is white and brittle.",
            image: "/images/svampar/farticka-detalj.png",
            alt: "Close-up of the sheep polypore's cracking cap",
            caption: "The grid-cracking cap is a clear sign in dry weather.",
          },
          {
            heading: "Habitat & Season",
            body: "The mushroom lives in symbiosis with spruce and thrives in older, mossy coniferous forests. It almost always grows in large groups or dense clusters, making it easy to pick in quantity once you find a spot.",
            image: "/images/svampar/farticka-miljo.png",
            alt: "A large group of sheep polypores in moss",
            caption: "The sheep polypore likes to grow in large companies in the spruce forest.",
          },
          {
            heading: "Culinary Tradition",
            body: "With its mild flavor and firm texture, the sheep polypore is a fine edible that is sometimes used as a truffle substitute. When cooked, the flesh yellows noticeably. As the provincial mushroom of Medelpad it is a regional pride.",
            image: "/images/svampar/Farticka_Huvudbild_01.png",
            alt: "A whole sheep polypore in mossy forest",
            caption: "Mild and firm – sometimes used as an affordable truffle substitute.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der Landschaftspilz von Medelpad",
        intro:
          "Der Schaf-Porling wächst oft in großen Gruppen im moosigen Nadelwald. Er hat ein festes, weißes Fleisch mit mildem Geschmack und wird beim Kochen manchmal als Trüffelersatz verwendet.\n\nIn den alten Nadelwäldern entlang des Kustvägen ist er ein geschätzter Speisepilz, und als Landschaftspilz von Medelpad hat er einen besonderen Platz in der Region.",
        quote: "Findest du einen von uns, sind wir selten allein – wir wachsen gern in großer Gesellschaft.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Der Schaf-Porling hat einen festen, gelbweißen bis blass gelbbraunen Hut, dessen Oberfläche bei Trockenheit oft felderig aufreißt. Statt Lamellen hat er kleine Poren an der Unterseite, und das Fleisch ist weiß und brüchig.",
            image: "/images/svampar/farticka-detalj.png",
            alt: "Nahaufnahme des aufreißenden Hutes",
            caption: "Der felderig aufreißende Hut ist bei trockenem Wetter ein deutliches Kennzeichen.",
          },
          {
            heading: "Lebensraum & Saison",
            body: "Der Pilz lebt in Symbiose mit der Fichte und gedeiht in älteren, moosreichen Nadelwäldern. Fast immer wächst er in großen Gruppen oder dichten Ansammlungen, sodass man ihn nach dem Fund leicht in Mengen sammeln kann.",
            image: "/images/svampar/farticka-miljo.png",
            alt: "Eine große Gruppe Schaf-Porlinge im Moos",
            caption: "Der Schaf-Porling wächst gern in großer Gesellschaft im Fichtenwald.",
          },
          {
            heading: "Kulinarische Tradition",
            body: "Mit seinem milden Geschmack und der festen Konsistenz ist der Schaf-Porling ein feiner Speisepilz, der manchmal als Trüffelersatz dient. Beim Kochen gilbt das Fleisch deutlich. Als Landschaftspilz von Medelpad ist er ein Stolz der Region.",
            image: "/images/svampar/Farticka_Huvudbild_01.png",
            alt: "Ein ganzer Schaf-Porling im moosigen Wald",
            caption: "Mild und fest – manchmal als günstiger Trüffelersatz genutzt.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/svampar/Farticka_Huvudbild_01.png",
        alt: {
          sv: "En fårticka med gulvit, rutsprickande hatt bland mossa",
          en: "A sheep polypore with a yellow-white, grid-cracking cap among moss",
          de: "Ein Schaf-Porling mit gelbweißem, felderig aufreißendem Hut im Moos",
        },
      },
      galleryImages: [
        {
          src: "/images/svampar/Farticka_Huvudbild_01.png",
          alt: "En fårticka med gulvit, rutsprickande hatt bland mossa",
        },
        { src: "/images/svampar/farticka-detalj.png", alt: "Närbild på fårtickans rutsprickande hatt" },
        { src: "/images/svampar/farticka-miljo.png", alt: "En stor grupp fårtickor i mossa" },
      ],
      detailImage: {
        url: "/images/svampar/farticka-miljo.png",
        alt: {
          sv: "En stor grupp fårtickor i mossig granskog",
          en: "A large group of sheep polypores in mossy spruce forest",
          de: "Eine große Gruppe Schaf-Porlinge im moosigen Fichtenwald",
        },
      },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Fårtickan",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Sheep Polypore",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit dem Schaf-Porling",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/svampar/Farticka_Huvudbild_01.png",
    chatAvatarAlt: "Fårtickans ansikte",
    relatedSpecies: [
      {
        slug: "kantarell",
        name: "Kantarell",
        latin: "Cantharellus cibarius",
        image: "/images/kantarell-hero.png",
      },
      {
        slug: "karljohan",
        name: "Karljohan",
        latin: "Boletus edulis",
        image: "/images/sp-porcini.png",
      },
      {
        slug: "fjallig-blacksvamp",
        name: "Fjällig bläcksvamp",
        latin: "Coprinus comatus",
        image: "/images/svampar/Fjallig_Blacksvamp_Huvudbild_01.png",
      },
    ],
    relatedSectionHeading: {
      sv: "Upptäck fler skogens skatter",
      en: "Discover more forest treasures",
      de: "Weitere Schätze des Waldes entdecken",
    },
    relatedLinkLabel: {
      sv: "Visa alla svampar & växter",
      en: "View all fungi & plants",
      de: "Alle Pilze & Pflanzen anzeigen",
    },
  },
  "vartig-roksvamp": {
    id: "vartig-roksvamp",
    scientificName: "Lycoperdon perlatum",
    category: { sv: "Svampar", en: "Fungi", de: "Pilze" },
    names: { sv: "Vårtig röksvamp", en: "Common Puffball", de: "Flaschenstäubling" },
    meta: {
      sv: {
        title: "Vårtig röksvamp – Kustvägen Naturguide",
        description:
          "Fakta om vårtig röksvamp längs Kustvägen – den päronformade svampen med vårtor som puffar ut sporrök när den mognar.",
      },
      en: {
        title: "Common Puffball – Kustvägen Nature Guide",
        description:
          "Facts about the common puffball along Kustvägen – the pear-shaped mushroom with warts that puffs out spore-smoke when mature.",
      },
      de: {
        title: "Flaschenstäubling – Kustvägen Naturführer",
        description:
          "Fakten über den Flaschenstäubling am Kustvägen – der birnenförmige Pilz mit Warzen, der bei Reife Sporenrauch verpufft.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Ätlighet", value: "Ätlig så länge köttet är helt vitt" },
        { label: "Kännetecken", value: "Täckt av små vårtor som lätt faller av" },
        { label: "Sporspridning", value: "Släpper ut sporrök från ett topphål" },
        { label: "Habitat", value: "Skogsmark, stigkanter och gläntor" },
      ],
      en: [
        { label: "Edibility", value: "Edible as long as the flesh is pure white" },
        { label: "Identification", value: "Covered in small warts that easily fall off" },
        { label: "Spore dispersal", value: "Releases spore-smoke from a top hole" },
        { label: "Habitat", value: "Woodland, path edges and clearings" },
      ],
      de: [
        { label: "Essbarkeit", value: "Essbar, solange das Fleisch rein weiß ist" },
        { label: "Merkmal", value: "Mit kleinen, leicht abfallenden Warzen bedeckt" },
        { label: "Sporenverbreitung", value: "Stößt Sporenrauch aus einem Loch oben aus" },
        { label: "Lebensraum", value: "Wälder, Wegränder und Lichtungen" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Svampen som puffar ut rök",
        intro:
          "Vårtig röksvamp känns igen på sin omvända päronform och vårtiga yta. När svampen mognar förvandlas det inre köttet till ett brunt sporpulver som puffar ut som rök när regndroppar träffar hatten.\n\nDen är vanlig i skogsmark, längs stigkanter och i gläntor längs hela Kustvägen.",
        quote: "Tryck lätt på mig när jag är mogen, så puffar jag ut ett moln av sporer.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Vårtig röksvamp har en omvänd päronform med en bred topp och smalare fot. Ytan är täckt av små, pigglika vårtor som lätt lossnar och lämnar ett nätliknande mönster. Som ung är den vit både utanpå och inuti.",
            image: "/images/svampar/vartig-roksvamp-detalj.png",
            alt: "Närbild på röksvampens vårtiga yta",
            caption: "De små vårtorna lossnar lätt och lämnar ett fint mönster.",
          },
          {
            heading: "Växtplats & Säsong",
            body: "Svampen är vanlig och trivs på skogsmark, längs stigkanter och i gläntor, ofta i grupper. Den dyker upp från sommar till höst och kan stå kvar länge, även efter att den mognat och börjat sprida sporer.",
            image: "/images/svampar/vartig-roksvamp-miljo.png",
            alt: "Vårtiga röksvampar längs en stigkant",
            caption: "Stigkanter och gläntor är typiska platser att hitta röksvampen.",
          },
          {
            heading: "Sporspridning & Mat",
            body: "Så länge köttet inuti är helt vitt är unga röksvampar ätliga med mild smak. När svampen mognar blir insidan ett brunt sporpulver, och ett litet hål öppnas i toppen där sporerna puffar ut som rök vid minsta beröring eller regndroppe.",
            image: "/images/svampar/Vartig_Roksvamp_Huvudbild_01.png",
            alt: "Hel vårtig röksvamp på skogsgolvet",
            caption: "Ät bara helvita exemplar – mogna svampar puffar ut sporrök.",
          },
        ],
      },
      en: {
        heroSubtitle: "The Mushroom That Puffs Out Smoke",
        intro:
          "The common puffball is recognized by its inverted pear shape and warty surface. As it matures, the inner flesh turns into a brown spore powder that puffs out like smoke when raindrops hit the cap.\n\nIt is common in woodland, along path edges and in clearings all along Kustvägen.",
        quote: "Press me gently when I am ripe, and I will puff out a cloud of spores.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "The common puffball has an inverted pear shape with a broad top and narrower base. The surface is covered in small, spine-like warts that come off easily, leaving a net-like pattern. When young it is white both outside and inside.",
            image: "/images/svampar/vartig-roksvamp-detalj.png",
            alt: "Close-up of the puffball's warty surface",
            caption: "The small warts come off easily, leaving a delicate pattern.",
          },
          {
            heading: "Habitat & Season",
            body: "The fungus is common and thrives on woodland ground, along path edges and in clearings, often in groups. It appears from summer to autumn and can remain for a long time, even after it has matured and begun to spread spores.",
            image: "/images/svampar/vartig-roksvamp-miljo.png",
            alt: "Common puffballs along a path edge",
            caption: "Path edges and clearings are typical places to find the puffball.",
          },
          {
            heading: "Spore Dispersal & Edibility",
            body: "As long as the flesh inside is pure white, young puffballs are edible with a mild flavor. When the mushroom matures the inside becomes a brown spore powder, and a small hole opens at the top where the spores puff out like smoke at the slightest touch or raindrop.",
            image: "/images/svampar/Vartig_Roksvamp_Huvudbild_01.png",
            alt: "A whole common puffball on the forest floor",
            caption: "Only eat all-white specimens – mature ones puff out spore-smoke.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der Pilz, der Rauch verpufft",
        intro:
          "Der Flaschenstäubling ist an seiner umgekehrten Birnenform und der warzigen Oberfläche zu erkennen. Reift er, verwandelt sich das innere Fleisch in ein braunes Sporenpulver, das wie Rauch verpufft, wenn Regentropfen auf den Hut treffen.\n\nEr ist häufig in Wäldern, an Wegrändern und auf Lichtungen entlang des gesamten Kustvägen.",
        quote: "Drück mich sanft, wenn ich reif bin, dann verpuffe ich eine Wolke aus Sporen.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Der Flaschenstäubling hat eine umgekehrte Birnenform mit breiter Spitze und schmalerer Basis. Die Oberfläche ist mit kleinen, stachelartigen Warzen bedeckt, die leicht abfallen und ein netzartiges Muster hinterlassen. Jung ist er außen wie innen weiß.",
            image: "/images/svampar/vartig-roksvamp-detalj.png",
            alt: "Nahaufnahme der warzigen Oberfläche",
            caption: "Die kleinen Warzen fallen leicht ab und hinterlassen ein feines Muster.",
          },
          {
            heading: "Lebensraum & Saison",
            body: "Der Pilz ist häufig und gedeiht auf Waldboden, an Wegrändern und auf Lichtungen, oft in Gruppen. Er erscheint vom Sommer bis zum Herbst und bleibt lange stehen, auch nachdem er gereift ist und begonnen hat, Sporen zu verbreiten.",
            image: "/images/svampar/vartig-roksvamp-miljo.png",
            alt: "Flaschenstäublinge an einem Wegrand",
            caption: "Wegränder und Lichtungen sind typische Fundorte des Stäublings.",
          },
          {
            heading: "Sporenverbreitung & Küche",
            body: "Solange das Fleisch im Inneren rein weiß ist, sind junge Stäublinge essbar und mild im Geschmack. Reift der Pilz, wird das Innere zu braunem Sporenpulver, und oben öffnet sich ein kleines Loch, aus dem die Sporen bei der kleinsten Berührung oder einem Regentropfen wie Rauch verpuffen.",
            image: "/images/svampar/Vartig_Roksvamp_Huvudbild_01.png",
            alt: "Ein ganzer Flaschenstäubling auf dem Waldboden",
            caption: "Nur ganz weiße Exemplare essen – reife stäuben Sporenrauch aus.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/svampar/Vartig_Roksvamp_Huvudbild_01.png",
        alt: {
          sv: "En päronformad vit vårtig röksvamp på skogsgolvet",
          en: "A pear-shaped white common puffball on the forest floor",
          de: "Ein birnenförmiger weißer Flaschenstäubling auf dem Waldboden",
        },
      },
      galleryImages: [
        {
          src: "/images/svampar/Vartig_Roksvamp_Huvudbild_01.png",
          alt: "En päronformad vit vårtig röksvamp på skogsgolvet",
        },
        { src: "/images/svampar/vartig-roksvamp-detalj.png", alt: "Närbild på röksvampens vårtiga yta" },
        { src: "/images/svampar/vartig-roksvamp-miljo.png", alt: "Vårtiga röksvampar längs en stigkant" },
      ],
      detailImage: {
        url: "/images/svampar/vartig-roksvamp-miljo.png",
        alt: {
          sv: "En grupp vårtiga röksvampar längs en mossig stig",
          en: "A group of common puffballs along a mossy path",
          de: "Eine Gruppe Flaschenstäublinge an einem moosigen Weg",
        },
      },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Vårtig röksvamp",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Common Puffball",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit dem Flaschenstäubling",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/svampar/Vartig_Roksvamp_Huvudbild_01.png",
    chatAvatarAlt: "Vårtig röksvamps ansikte",
    relatedSpecies: [
      {
        slug: "kantarell",
        name: "Kantarell",
        latin: "Cantharellus cibarius",
        image: "/images/kantarell-hero.png",
      },
      {
        slug: "karljohan",
        name: "Karljohan",
        latin: "Boletus edulis",
        image: "/images/sp-porcini.png",
      },
      {
        slug: "rod-flugsvamp",
        name: "Röd flugsvamp",
        latin: "Amanita muscaria",
        image: "/images/svampar/Rod_Flugsvamp_Huvudbild_01.png",
      },
    ],
    relatedSectionHeading: {
      sv: "Upptäck fler skogens skatter",
      en: "Discover more forest treasures",
      de: "Weitere Schätze des Waldes entdecken",
    },
    relatedLinkLabel: {
      sv: "Visa alla svampar & växter",
      en: "View all fungi & plants",
      de: "Alle Pilze & Pflanzen anzeigen",
    },
  },
  ronn: {
    id: "ronn",
    scientificName: "Sorbus aucuparia",
    category: { sv: "Träd", en: "Trees", de: "Bäume" },
    names: { sv: "Rönn", en: "Rowan", de: "Eberesche" },
    meta: {
      sv: {
        title: "Rönn – Kustvägen Naturguide",
        description:
          "Fakta om rönnen längs Kustvägen – det stormfasta lövträdet vars röda bärklasar är viktig vinterföda för fåglar.",
      },
      en: {
        title: "Rowan – Kustvägen Nature Guide",
        description:
          "Facts about the rowan along Kustvägen – the storm-hardy deciduous tree whose red berry clusters are vital winter food for birds.",
      },
      de: {
        title: "Eberesche – Kustvägen Naturführer",
        description:
          "Fakten über die Eberesche am Kustvägen – der sturmfeste Laubbaum, dessen rote Beerendolden lebenswichtige Winternahrung für Vögel sind.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Ekologi", value: "Bären är mycket viktig vinterföda för fåglar" },
        { label: "Egenskap", value: "Stormfast tack vare djupt rotsystem" },
        { label: "Blomning", value: "Kraftiga vita blomklasar i maj–juli" },
        { label: "Användning", value: "Hårt virke, används ofta till slöjd" },
      ],
      en: [
        { label: "Ecology", value: "The berries are very important winter food for birds" },
        { label: "Trait", value: "Storm-hardy thanks to a deep root system" },
        { label: "Flowering", value: "Dense white flower clusters in May–July" },
        { label: "Use", value: "Hard timber, often used for handicraft" },
      ],
      de: [
        { label: "Ökologie", value: "Die Beeren sind sehr wichtige Winternahrung für Vögel" },
        { label: "Eigenschaft", value: "Sturmfest dank tiefem Wurzelsystem" },
        { label: "Blüte", value: "Kräftige weiße Blütendolden im Mai–Juli" },
        { label: "Verwendung", value: "Hartes Holz, oft für Handwerk verwendet" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skogens röda vinterskafferi",
        intro:
          "Rönnen är ett segt och stormfast lövträd vars röda bärklasar lyser upp skogen om hösten. Bären lockar stora mängder sidensvansar och trastar, medan älgar gärna betar av bark och kvistar.\n\nLängs Kustvägen klarar rönnen både blåst och karg mark tack vare sitt djupa rotsystem.",
        quote: "Mina röda bär håller fåglarna mätta när vintern biter som värst.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Rönnen känns lätt igen på sina parflikiga blad och de stora, kraftiga klasarna av vita blommor i maj–juli. Om hösten förvandlas blommorna till lysande orangeröda bär. Virket är hårt och segt.",
            image: "/images/trad/ronn-detalj.png",
            alt: "Närbild på rönnens röda bärklasar",
            caption: "De röda bärklasarna är rönnens tydligaste kännetecken.",
          },
          {
            heading: "Växtplats & Beteende",
            body: "Rönnen är stormfast tack vare ett djupt rotsystem och trivs på både klippor, skogsbryn och öppen mark längs kusten. Den är ett härdigt pionjärträd som gärna växer där andra träd har svårt att klara sig.",
            image: "/images/trad/ronn-miljo.png",
            alt: "Rönnar längs ett kustnära skogsbryn",
            caption: "Rönnen klarar blåst och karg mark bättre än många andra lövträd.",
          },
          {
            heading: "Ekologi & Föda",
            body: "Bären är en mycket viktig vinterföda för fåglar – särskilt sidensvansar och trastar kalasar på dem i stora flockar. Älgar och rådjur betar gärna bark och kvistar, och de vita blommorna ger nektar åt insekter på våren.",
            image: "/images/trad/Ronn_Huvudbild_01.png",
            alt: "Rönn full med röda bär i höstljus",
            caption: "Fåglar tömmer bärklasarna långt in på vintern.",
          },
        ],
      },
      en: {
        heroSubtitle: "The Forest's Red Winter Pantry",
        intro:
          "The rowan is a tough, storm-hardy deciduous tree whose red berry clusters light up the forest in autumn. The berries attract large numbers of waxwings and thrushes, while moose readily browse the bark and twigs.\n\nAlong Kustvägen, the rowan handles both wind and barren ground thanks to its deep root system.",
        quote: "My red berries keep the birds fed when winter bites hardest.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "The rowan is easily recognized by its pinnate leaves and the large, dense clusters of white flowers in May–July. In autumn the flowers turn into glowing orange-red berries. The timber is hard and tough.",
            image: "/images/trad/ronn-detalj.png",
            alt: "Close-up of the rowan's red berry clusters",
            caption: "The red berry clusters are the rowan's clearest hallmark.",
          },
          {
            heading: "Habitat & Behavior",
            body: "The rowan is storm-hardy thanks to a deep root system and thrives on cliffs, forest edges and open ground along the coast. It is a hardy pioneer tree that readily grows where other trees struggle.",
            image: "/images/trad/ronn-miljo.png",
            alt: "Rowans along a coastal forest edge",
            caption: "The rowan handles wind and barren ground better than many other deciduous trees.",
          },
          {
            heading: "Ecology & Food",
            body: "The berries are a very important winter food for birds – waxwings and thrushes in particular feast on them in large flocks. Moose and roe deer browse the bark and twigs, and the white flowers provide nectar for insects in spring.",
            image: "/images/trad/Ronn_Huvudbild_01.png",
            alt: "A rowan full of red berries in autumn light",
            caption: "Birds empty the berry clusters far into the winter.",
          },
        ],
      },
      de: {
        heroSubtitle: "Die rote Winterspeisekammer des Waldes",
        intro:
          "Die Eberesche ist ein zäher, sturmfester Laubbaum, dessen rote Beerendolden im Herbst den Wald erleuchten. Die Beeren locken große Mengen an Seidenschwänzen und Drosseln an, während Elche gern Rinde und Zweige abäsen.\n\nEntlang des Kustvägen trotzt die Eberesche dank ihres tiefen Wurzelsystems Wind und kargem Boden.",
        quote: "Meine roten Beeren halten die Vögel satt, wenn der Winter am härtesten zubeißt.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Die Eberesche ist leicht an ihren gefiederten Blättern und den großen, dichten weißen Blütendolden im Mai–Juli zu erkennen. Im Herbst verwandeln sich die Blüten in leuchtend orangerote Beeren. Das Holz ist hart und zäh.",
            image: "/images/trad/ronn-detalj.png",
            alt: "Nahaufnahme der roten Beerendolden der Eberesche",
            caption: "Die roten Beerendolden sind das deutlichste Merkmal der Eberesche.",
          },
          {
            heading: "Lebensraum & Verhalten",
            body: "Die Eberesche ist dank eines tiefen Wurzelsystems sturmfest und gedeiht auf Felsen, an Waldrändern und auf offenem Boden entlang der Küste. Sie ist ein robuster Pionierbaum, der gern dort wächst, wo andere Bäume Mühe haben.",
            image: "/images/trad/ronn-miljo.png",
            alt: "Ebereschen an einem küstennahen Waldrand",
            caption: "Die Eberesche verträgt Wind und kargen Boden besser als viele andere Laubbäume.",
          },
          {
            heading: "Ökologie & Nahrung",
            body: "Die Beeren sind eine sehr wichtige Winternahrung für Vögel – besonders Seidenschwänze und Drosseln fressen sie in großen Schwärmen. Elche und Rehe äsen Rinde und Zweige, und die weißen Blüten liefern im Frühling Nektar für Insekten.",
            image: "/images/trad/Ronn_Huvudbild_01.png",
            alt: "Eine Eberesche voller roter Beeren im Herbstlicht",
            caption: "Vögel leeren die Beerendolden bis weit in den Winter hinein.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/trad/Ronn_Huvudbild_01.png",
        alt: {
          sv: "Rönn med röda bärklasar i en kustnära glänta",
          en: "Rowan with red berry clusters in a coastal clearing",
          de: "Eberesche mit roten Beerendolden auf einer küstennahen Lichtung",
        },
      },
      galleryImages: [
        { src: "/images/trad/Ronn_Huvudbild_01.png", alt: "Rönn med röda bärklasar i en kustnära glänta" },
        { src: "/images/trad/ronn-detalj.png", alt: "Närbild på rönnens röda bärklasar" },
        { src: "/images/trad/ronn-miljo.png", alt: "Rönnar längs ett kustnära skogsbryn" },
      ],
      detailImage: {
        url: "/images/trad/ronn-miljo.png",
        alt: {
          sv: "Rönnar längs en klippig kustskog",
          en: "Rowans along a rocky coastal wood",
          de: "Ebereschen entlang eines felsigen Küstenwaldes",
        },
      },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Rönnen",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Rowan",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit der Eberesche",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/trad/Ronn_Huvudbild_01.png",
    chatAvatarAlt: "Rönnens ansikte",
    relatedSpecies: [
      { slug: "tall", name: "Tall", latin: "Pinus sylvestris", image: "/images/tall-hero.png" },
      { slug: "bjork", name: "Björk", latin: "Betula pendula", image: "/images/trad/Bjork_Huvudbild_01.png" },
      { slug: "asp", name: "Asp", latin: "Populus tremula", image: "/images/trad/Asp_Huvudbild_01.png" },
    ],
    relatedSectionHeading: {
      sv: "Upptäck fler av skogens träd",
      en: "Discover more forest trees",
      de: "Weitere Bäume des Waldes entdecken",
    },
    relatedLinkLabel: {
      sv: "Visa alla träd",
      en: "View all trees",
      de: "Alle Bäume anzeigen",
    },
  },
  salg: {
    id: "salg",
    scientificName: "Salix caprea",
    category: { sv: "Träd", en: "Trees", de: "Bäume" },
    names: { sv: "Sälg", en: "Goat Willow", de: "Salweide" },
    meta: {
      sv: {
        title: "Sälg – Kustvägen Naturguide",
        description:
          "Fakta om sälgen längs Kustvägen – nyckelträdet vars tidiga videkissar är livsviktig första matkälla för pollinatörer.",
      },
      en: {
        title: "Goat Willow – Kustvägen Nature Guide",
        description:
          "Facts about the goat willow along Kustvägen – the keystone tree whose early catkins are a vital first food source for pollinators.",
      },
      de: {
        title: "Salweide – Kustvägen Naturführer",
        description:
          "Fakten über die Salweide am Kustvägen – der Schlüsselbaum, dessen frühe Kätzchen eine lebenswichtige erste Nahrungsquelle für Bestäuber sind.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Typ", value: "Tvåbyggare (skilda han- och honträd)" },
        { label: "Blomning", value: "Mycket tidigt på våren (\"videkissar\")" },
        { label: "Ekologi", value: "Livsviktig första matkälla för pollinatörer" },
        { label: "Medicinsk historia", value: "Barken innehåller smärtstillande salicin" },
      ],
      en: [
        { label: "Type", value: "Dioecious (separate male and female trees)" },
        { label: "Flowering", value: "Very early in spring (\"pussy willows\")" },
        { label: "Ecology", value: "Vital first food source for pollinators" },
        { label: "Medical history", value: "The bark contains pain-relieving salicin" },
      ],
      de: [
        { label: "Typ", value: "Zweihäusig (getrennte männliche und weibliche Bäume)" },
        { label: "Blüte", value: "Sehr früh im Frühling (\"Weidenkätzchen\")" },
        { label: "Ökologie", value: "Lebenswichtige erste Nahrungsquelle für Bestäuber" },
        { label: "Medizingeschichte", value: "Die Rinde enthält das schmerzstillende Salicin" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Vårens första skafferi för humlor och bin",
        intro:
          "Sälgen ��r en oerhört viktig nyckelart i skogen. Dess tidiga blomning på bar kvist ger livsviktig nektar och pollen till yrvakna humlor och bin direkt efter vintern.\n\nLängs Kustvägen hittar du sälgen i fuktiga svackor och längs bäckar, där de silvriga videkissarna lyser i vårsolen.",
        quote: "När jag blommar först av alla vaknar humlorna till liv igen.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Sälgen är en tvåbyggare med skilda han- och honträd. På våren, ofta innan löven spricker ut, täcks kvistarna av mjuka silvergrå videkissar. Hanträdens kissar blir så småningom gula av pollen.",
            image: "/images/trad/salg-detalj.png",
            alt: "Närbild på sälgens gula videkissar",
            caption: "Videkissarna blommar tidigt, ofta på helt bar kvist.",
          },
          {
            heading: "Växtplats & Beteende",
            body: "Sälgen trivs i fuktig mark, i skogsbryn och längs vattendrag och stränder. Den växer snabbt och är ett av de första träden som slår ut på våren, vilket gör den lätt att upptäcka bland ännu kala grannar.",
            image: "/images/trad/salg-miljo.png",
            alt: "Blommande sälg vid en vårbäck",
            caption: "Fuktiga svackor och bäckkanter är typiska växtplatser.",
          },
          {
            heading: "Ekologi & Historia",
            body: "Sälgen är en livsviktig första matkälla för pollinatörer – humlor och bin är helt beroende av dess tidiga pollen och nektar. Barken innehåller salicin, ett smärtstillande ämne som historiskt använts som naturligt läkemedel.",
            image: "/images/trad/Salg_Huvudbild_01.png",
            alt: "Sälg i full blom i vårljus",
            caption: "En enda blommande sälg kan mätta hundratals insekter.",
          },
        ],
      },
      en: {
        heroSubtitle: "Spring's First Pantry for Bumblebees and Bees",
        intro:
          "The goat willow is an immensely important keystone species in the forest. Its early flowering on bare twigs provides vital nectar and pollen to drowsy bumblebees and bees right after winter.\n\nAlong Kustvägen you'll find the goat willow in damp hollows and along streams, where the silvery catkins glow in the spring sun.",
        quote: "When I bloom before all others, the bumblebees stir back to life.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "The goat willow is dioecious, with separate male and female trees. In spring, often before the leaves open, the twigs are covered in soft silver-grey catkins. The male catkins eventually turn yellow with pollen.",
            image: "/images/trad/salg-detalj.png",
            alt: "Close-up of the goat willow's yellow catkins",
            caption: "The catkins flower early, often on completely bare twigs.",
          },
          {
            heading: "Habitat & Behavior",
            body: "The goat willow thrives in damp ground, in forest edges and along watercourses and shores. It grows quickly and is one of the first trees to break bud in spring, making it easy to spot among still-bare neighbors.",
            image: "/images/trad/salg-miljo.png",
            alt: "Flowering goat willow by a spring stream",
            caption: "Damp hollows and streamsides are typical growing spots.",
          },
          {
            heading: "Ecology & History",
            body: "The goat willow is a vital first food source for pollinators – bumblebees and bees depend entirely on its early pollen and nectar. The bark contains salicin, a pain-relieving substance historically used as a natural medicine.",
            image: "/images/trad/Salg_Huvudbild_01.png",
            alt: "Goat willow in full bloom in spring light",
            caption: "A single flowering goat willow can feed hundreds of insects.",
          },
        ],
      },
      de: {
        heroSubtitle: "Die erste Frühlingsspeisekammer für Hummeln und Bienen",
        intro:
          "Die Salweide ist eine ungemein wichtige Schlüsselart im Wald. Ihre frühe Blüte an kahlen Zweigen liefert verschlafenen Hummeln und Bienen direkt nach dem Winter lebenswichtigen Nektar und Pollen.\n\nEntlang des Kustvägen findest du die Salweide in feuchten Senken und an Bächen, wo die silbrigen Kätzchen in der Frühlingssonne leuchten.",
        quote: "Wenn ich als Erste blühe, erwachen die Hummeln wieder zum Leben.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Die Salweide ist zweihäusig, mit getrennten männlichen und weiblichen Bäumen. Im Frühling, oft bevor die Blätter austreiben, sind die Zweige mit weichen silbergrauen Kätzchen bedeckt. Die männlichen Kätzchen werden schließlich gelb vor Pollen.",
            image: "/images/trad/salg-detalj.png",
            alt: "Nahaufnahme der gelben Kätzchen der Salweide",
            caption: "Die Kätzchen blühen früh, oft an v��llig kahlen Zweigen.",
          },
          {
            heading: "Lebensraum & Verhalten",
            body: "Die Salweide gedeiht auf feuchtem Boden, an Waldrändern und entlang von Gewässern und Ufern. Sie wächst schnell und ist einer der ersten Bäume, die im Frühling austreiben, was sie zwischen noch kahlen Nachbarn leicht erkennbar macht.",
            image: "/images/trad/salg-miljo.png",
            alt: "Blühende Salweide an einem Frühlingsbach",
            caption: "Feuchte Senken und Bachufer sind typische Standorte.",
          },
          {
            heading: "Ökologie & Geschichte",
            body: "Die Salweide ist eine lebenswichtige erste Nahrungsquelle für Bestäuber – Hummeln und Bienen sind ganz auf ihren frühen Pollen und Nektar angewiesen. Die Rinde enthält Salicin, einen schmerzstillenden Stoff, der historisch als natürliches Heilmittel genutzt wurde.",
            image: "/images/trad/Salg_Huvudbild_01.png",
            alt: "Salweide in voller Blüte im Frühlingslicht",
            caption: "Eine einzige blühende Salweide kann Hunderte Insekten ernähren.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/trad/Salg_Huvudbild_01.png",
        alt: {
          sv: "Sälg med silvriga videkissar i tidigt vårljus",
          en: "Goat willow with silvery catkins in early spring light",
          de: "Salweide mit silbrigen Kätzchen im frühen Frühlingslicht",
        },
      },
      galleryImages: [
        { src: "/images/trad/Salg_Huvudbild_01.png", alt: "Sälg med silvriga videkissar i tidigt vårljus" },
        { src: "/images/trad/salg-detalj.png", alt: "Närbild på sälgens gula videkissar" },
        { src: "/images/trad/salg-miljo.png", alt: "Blommande sälg vid en vårbäck" },
      ],
      detailImage: {
        url: "/images/trad/salg-miljo.png",
        alt: {
          sv: "Blommande sälgar längs en vårbäck",
          en: "Flowering goat willows along a spring stream",
          de: "Blühende Salweiden an einem Frühlingsbach",
        },
      },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Sälgen",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Goat Willow",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit der Salweide",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/trad/Salg_Huvudbild_01.png",
    chatAvatarAlt: "Sälgens ansikte",
    relatedSpecies: [
      { slug: "ronn", name: "Rönn", latin: "Sorbus aucuparia", image: "/images/trad/Ronn_Huvudbild_01.png" },
      { slug: "graal", name: "Gråal", latin: "Alnus incana", image: "/images/trad/Graal_Huvudbild_01.png" },
      { slug: "bjork", name: "Björk", latin: "Betula pendula", image: "/images/trad/Bjork_Huvudbild_01.png" },
    ],
    relatedSectionHeading: {
      sv: "Upptäck fler av skogens träd",
      en: "Discover more forest trees",
      de: "Weitere Bäume des Waldes entdecken",
    },
    relatedLinkLabel: {
      sv: "Visa alla träd",
      en: "View all trees",
      de: "Alle Bäume anzeigen",
    },
  },
  graal: {
    id: "graal",
    scientificName: "Alnus incana",
    category: { sv: "Träd", en: "Trees", de: "Bäume" },
    names: { sv: "Gråal", en: "Grey Alder", de: "Grauerle" },
    meta: {
      sv: {
        title: "Gråal – Kustvägen Naturguide",
        description:
          "Fakta om gråalen längs Kustvägen – det snabbväxande trädet som fixerar kväve och förbättrar jordmånen längs vattendrag.",
      },
      en: {
        title: "Grey Alder – Kustvägen Nature Guide",
        description:
          "Facts about the grey alder along Kustvägen – the fast-growing tree that fixes nitrogen and improves the soil along watercourses.",
      },
      de: {
        title: "Grauerle – Kustvägen Naturführer",
        description:
          "Fakten über die Grauerle am Kustvägen – der schnell wachsende Baum, der Stickstoff bindet und den Boden entlang von Gewässern verbessert.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Ålder/Höjd", value: "Kan bli upp till 200 år och 20 meter hög" },
        { label: "Ekologi", value: "Fixerar kväve från luften via rotknölar" },
        { label: "Jordmån", value: "Trivs bra på magra och fuktiga marker" },
        { label: "Typ", value: "Sambyggare med hängen" },
      ],
      en: [
        { label: "Age/Height", value: "Can reach up to 200 years and 20 meters tall" },
        { label: "Ecology", value: "Fixes nitrogen from the air via root nodules" },
        { label: "Soil", value: "Thrives on poor and moist ground" },
        { label: "Type", value: "Monoecious with catkins" },
      ],
      de: [
        { label: "Alter/Höhe", value: "Kann bis zu 200 Jahre alt und 20 Meter hoch werden" },
        { label: "Ökologie", value: "Bindet Stickstoff aus der Luft über Wurzelknöllchen" },
        { label: "Boden", value: "Gedeiht auf magerem und feuchtem Boden" },
        { label: "Typ", value: "Einhäusig mit Kätzchen" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Trädet som göder sin egen mark",
        intro:
          "Gråalen växer snabbt och förbättrar jordmånen där den står genom att leva i symbios med kvävefixerande bakterier i rötterna. Den är ett vanligt inslag längs vattendrag i norra Sverige.\n\nLängs Kustvägen kantar gråalen bäckar och stränder, där dess rötter binder jorden och håller strandbrinkarna på plats.",
        quote: "Jag samlar kväve ur luften och gör marken bördig åt alla andra.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Gråalen har slät grå bark och matt gröna, dubbelsågade blad. Den är en sambyggare med både han- och honhängen på samma träd; honhängena mognar till små, kottelika kapslar som sitter kvar länge på grenarna.",
            image: "/images/trad/graal-detalj.png",
            alt: "Närbild på gråalens hängen och blad",
            caption: "De små kottelika honhängena sitter kvar långt in på vintern.",
          },
          {
            heading: "Växtplats & Beteende",
            body: "Gråalen trivs på magra och fuktiga marker och är vanlig längs vattendrag, i strandkanter och på nyligen blottad mark. Den växer snabbt och kan bli upp till 200 år gammal och 20 meter hög.",
            image: "/images/trad/graal-miljo.png",
            alt: "Gråalar längs en älvstrand",
            caption: "Längs bäckar och älvstränder binder gråalens rötter jorden.",
          },
          {
            heading: "Ekologi & Nytta",
            body: "Gråalen fixerar kväve från luften via knölar på rötterna, i symbios med bakterier. På så vis göder den marken och gör det lättare för andra växter att etablera sig – en verklig pionjär och jordförbättrare i landskapet.",
            image: "/images/trad/Graal_Huvudbild_01.png",
            alt: "Gråal vid ett vattendrag",
            caption: "Rotknölarna gör gråalen till en naturlig jordförbättrare.",
          },
        ],
      },
      en: {
        heroSubtitle: "The Tree That Fertilizes Its Own Ground",
        intro:
          "The grey alder grows quickly and improves the soil where it stands by living in symbiosis with nitrogen-fixing bacteria in its roots. It is a common feature along watercourses in northern Sweden.\n\nAlong Kustvägen the grey alder lines streams and shores, where its roots bind the soil and hold the banks in place.",
        quote: "I gather nitrogen from the air and make the ground fertile for everyone else.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "The grey alder has smooth grey bark and matte green, doubly-serrated leaves. It is monoecious, with both male and female catkins on the same tree; the female catkins ripen into small, cone-like capsules that stay on the branches for a long time.",
            image: "/images/trad/graal-detalj.png",
            alt: "Close-up of the grey alder's catkins and leaves",
            caption: "The small cone-like female catkins remain far into the winter.",
          },
          {
            heading: "Habitat & Behavior",
            body: "The grey alder thrives on poor and moist ground and is common along watercourses, on shorelines and on recently exposed soil. It grows quickly and can reach up to 200 years old and 20 meters tall.",
            image: "/images/trad/graal-miljo.png",
            alt: "Grey alders along a riverbank",
            caption: "Along streams and riverbanks the grey alder's roots bind the soil.",
          },
          {
            heading: "Ecology & Benefit",
            body: "The grey alder fixes nitrogen from the air via nodules on its roots, in symbiosis with bacteria. In this way it fertilizes the ground and makes it easier for other plants to establish – a true pioneer and soil improver in the landscape.",
            image: "/images/trad/Graal_Huvudbild_01.png",
            alt: "Grey alder by a watercourse",
            caption: "The root nodules make the grey alder a natural soil improver.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der Baum, der seinen eigenen Boden düngt",
        intro:
          "Die Grauerle wächst schnell und verbessert den Boden, auf dem sie steht, indem sie in Symbiose mit stickstoffbindenden Bakterien in ihren Wurzeln lebt. Sie ist ein häufiger Anblick entlang von Gewässern im Norden Schwedens.\n\nEntlang des Kustvägen säumt die Grauerle Bäche und Ufer, wo ihre Wurzeln den Boden binden und die Uferböschungen festhalten.",
        quote: "Ich sammle Stickstoff aus der Luft und mache den Boden fruchtbar für alle anderen.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Die Grauerle hat glatte graue Rinde und matt grüne, doppelt gesägte Blätter. Sie ist einhäusig, mit männlichen und weiblichen Kätzchen am selben Baum; die weiblichen Kätzchen reifen zu kleinen, zapfenartigen Kapseln, die lange an den Zweigen bleiben.",
            image: "/images/trad/graal-detalj.png",
            alt: "Nahaufnahme der Kätzchen und Blätter der Grauerle",
            caption: "Die kleinen zapfenartigen weiblichen Kätzchen bleiben bis weit in den Winter.",
          },
          {
            heading: "Lebensraum & Verhalten",
            body: "Die Grauerle gedeiht auf magerem und feuchtem Boden und ist häufig entlang von Gewässern, an Ufern und auf kürzlich freigelegtem Boden. Sie wächst schnell und kann bis zu 200 Jahre alt und 20 Meter hoch werden.",
            image: "/images/trad/graal-miljo.png",
            alt: "Grauerlen an einem Flussufer",
            caption: "An Bächen und Flussufern binden die Wurzeln der Grauerle den Boden.",
          },
          {
            heading: "Ökologie & Nutzen",
            body: "Die Grauerle bindet Stickstoff aus der Luft über Knöllchen an ihren Wurzeln, in Symbiose mit Bakterien. So düngt sie den Boden und erleichtert es anderen Pflanzen, sich anzusiedeln – ein echter Pionier und Bodenverbesserer in der Landschaft.",
            image: "/images/trad/Graal_Huvudbild_01.png",
            alt: "Grauerle an einem Gewässer",
            caption: "Die Wurzelknöllchen machen die Grauerle zu einem natürlichen Bodenverbesserer.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/trad/Graal_Huvudbild_01.png",
        alt: {
          sv: "Gråal vid en älvstrand i norra Sverige",
          en: "Grey alder by a riverbank in northern Sweden",
          de: "Grauerle an einem Flussufer im Norden Schwedens",
        },
      },
      galleryImages: [
        { src: "/images/trad/Graal_Huvudbild_01.png", alt: "Gråal vid en älvstrand i norra Sverige" },
        { src: "/images/trad/graal-detalj.png", alt: "Närbild på gråalens h��ngen och blad" },
        { src: "/images/trad/graal-miljo.png", alt: "Gråalar längs en älvstrand" },
      ],
      detailImage: {
        url: "/images/trad/graal-miljo.png",
        alt: {
          sv: "En rad gråalar längs ett vattendrag",
          en: "A row of grey alders along a watercourse",
          de: "Eine Reihe Grauerlen entlang eines Gewässers",
        },
      },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Gråalen",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Grey Alder",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit der Grauerle",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/trad/Graal_Huvudbild_01.png",
    chatAvatarAlt: "Gråalens ansikte",
    relatedSpecies: [
      { slug: "salg", name: "Sälg", latin: "Salix caprea", image: "/images/trad/Salg_Huvudbild_01.png" },
      { slug: "bjork", name: "Björk", latin: "Betula pendula", image: "/images/trad/Bjork_Huvudbild_01.png" },
      { slug: "asp", name: "Asp", latin: "Populus tremula", image: "/images/trad/Asp_Huvudbild_01.png" },
    ],
    relatedSectionHeading: {
      sv: "Upptäck fler av skogens träd",
      en: "Discover more forest trees",
      de: "Weitere Bäume des Waldes entdecken",
    },
    relatedLinkLabel: {
      sv: "Visa alla träd",
      en: "View all trees",
      de: "Alle Bäume anzeigen",
    },
  },
  bjork: {
    id: "bjork",
    scientificName: "Betula pendula",
    category: { sv: "Träd", en: "Trees", de: "Bäume" },
    names: { sv: "Björk", en: "Birch", de: "Birke" },
    meta: {
      sv: {
        title: "Björk – Kustvägen Naturguide",
        description:
          "Fakta om björken längs Kustvägen – Sveriges vanligaste lövträd med vit näver och ljus, prasslande krona.",
      },
      en: {
        title: "Birch – Kustvägen Nature Guide",
        description:
          "Facts about the birch along Kustvägen – Sweden's most common deciduous tree with white bark and a light, rustling crown.",
      },
      de: {
        title: "Birke – Kustvägen Naturführer",
        description:
          "Fakten über die Birke am Kustvägen – Schwedens häufigster Laubbaum mit weißer Rinde und lichter, raschelnder Krone.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Typer", value: "Vårtbjörk och glasbjörk" },
        { label: "Kännetecken", value: "Vit näver som skyddar mot kyla" },
        { label: "Föda", value: "Knopparna är viktig vintermat för orre" },
        { label: "Användning", value: "Ved, slöjd och framställning av björksav" },
      ],
      en: [
        { label: "Types", value: "Silver birch and downy birch" },
        { label: "Identification", value: "White bark that protects against cold" },
        { label: "Food", value: "The buds are important winter food for black grouse" },
        { label: "Use", value: "Firewood, handicraft and tapping birch sap" },
      ],
      de: [
        { label: "Arten", value: "Hänge-Birke und Moor-Birke" },
        { label: "Kennzeichen", value: "Weiße Rinde, die vor Kälte schützt" },
        { label: "Nahrung", value: "Die Knospen sind wichtige Winternahrung für das Birkhuhn" },
        { label: "Verwendung", value: "Brennholz, Handwerk und Gewinnung von Birkensaft" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Sveriges ljusa vardagsträd",
        intro:
          "Björken är Sveriges vanligaste lövträd. Dess ljusa krona och vita stam präglar landskapet, och den tunna nävern har historiskt använts till allt från takläggning till korgflätning.\n\nLängs Kustvägen lyser björkarnas vita stammar mellan barrträden och ger ett ljust, prasslande inslag i skogen.",
        quote: "Min vita näver skyddar mig mot kylan och lyser upp hela skogen.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Björken känns igen på sin karaktäristiska vita näver med mörka strimmor. Det finns två vanliga arter – vårtbjörk och glasbjörk. Bladen är små, trekantiga och sågtandade, och kronan hänger ofta lätt och luftigt.",
            image: "/images/trad/bjork-detalj.png",
            alt: "Närbild på björkens vita näver",
            caption: "Den vita nävern skyddar stammen mot kyla och skador.",
          },
          {
            heading: "Växtplats & Beteende",
            body: "Björken är ett anspråkslöst pionjärträd som snabbt koloniserar öppna ytor, hyggen och bränd mark. Den trivs i det mesta av det svenska landskapet, från kustnära skogsbryn till fjällnära marker.",
            image: "/images/trad/bjork-miljo.png",
            alt: "Ljus björkdunge med gröna löv",
            caption: "Björken är ofta först på plats när ny mark blottas.",
          },
          {
            heading: "Ekologi & Användning",
            body: "Björkens knoppar är en viktig vintermat för orre och andra hönsfåglar. För människan har björken gett ved, slöjdvirke och björksav, och nävern har använts till allt från tak till korgar och skor genom historien.",
            image: "/images/trad/Bjork_Huvudbild_01.png",
            alt: "Björk med vit stam i sommarljus",
            caption: "Från knoppar till näver – björken är nyttig för både djur och människa.",
          },
        ],
      },
      en: {
        heroSubtitle: "Sweden's Bright Everyday Tree",
        intro:
          "The birch is Sweden's most common deciduous tree. Its bright crown and white trunk shape the landscape, and the thin bark has historically been used for everything from roofing to basket weaving.\n\nAlong Kustvägen the birches' white trunks shine between the conifers, adding a light, rustling element to the forest.",
        quote: "My white bark shields me from the cold and lights up the whole forest.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "The birch is recognized by its characteristic white bark with dark streaks. There are two common species – silver birch and downy birch. The leaves are small, triangular and serrated, and the crown often hangs light and airy.",
            image: "/images/trad/bjork-detalj.png",
            alt: "Close-up of the birch's white bark",
            caption: "The white bark protects the trunk against cold and damage.",
          },
          {
            heading: "Habitat & Behavior",
            body: "The birch is an undemanding pioneer tree that quickly colonizes open areas, clear-cuts and burnt ground. It thrives across most of the Swedish landscape, from coastal forest edges to sub-alpine terrain.",
            image: "/images/trad/bjork-miljo.png",
            alt: "Bright birch grove with green leaves",
            caption: "The birch is often first to arrive when new ground is exposed.",
          },
          {
            heading: "Ecology & Use",
            body: "The birch's buds are an important winter food for black grouse and other gamebirds. For humans the birch has provided firewood, craft timber and birch sap, and the bark has been used for everything from roofs to baskets and shoes throughout history.",
            image: "/images/trad/Bjork_Huvudbild_01.png",
            alt: "Birch with white trunk in summer light",
            caption: "From buds to bark – the birch is useful to both animals and people.",
          },
        ],
      },
      de: {
        heroSubtitle: "Schwedens heller Alltagsbaum",
        intro:
          "Die Birke ist Schwedens häufigster Laubbaum. Ihre helle Krone und der weiße Stamm prägen die Landschaft, und die dünne Rinde wurde historisch für alles von der Dachdeckung bis zum Korbflechten verwendet.\n\nEntlang des Kustvägen leuchten die weißen Stämme der Birken zwischen den Nadelbäumen und bringen ein helles, raschelndes Element in den Wald.",
        quote: "Meine weiße Rinde schützt mich vor der Kälte und erhellt den ganzen Wald.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Die Birke ist an ihrer charakteristischen weißen Rinde mit dunklen Streifen zu erkennen. Es gibt zwei häufige Arten – Hänge-Birke und Moor-Birke. Die Blätter sind klein, dreieckig und gesägt, und die Krone hängt oft leicht und luftig.",
            image: "/images/trad/bjork-detalj.png",
            alt: "Nahaufnahme der weißen Rinde der Birke",
            caption: "Die weiße Rinde schützt den Stamm vor Kälte und Schäden.",
          },
          {
            heading: "Lebensraum & Verhalten",
            body: "Die Birke ist ein anspruchsloser Pionierbaum, der offene Flächen, Kahlschläge und verbrannten Boden schnell besiedelt. Sie gedeiht in weiten Teilen der schwedischen Landschaft, von küstennahen Waldrändern bis zu subalpinem Gelände.",
            image: "/images/trad/bjork-miljo.png",
            alt: "Heller Birkenhain mit grünen Blättern",
            caption: "Die Birke ist oft die Erste, wenn neuer Boden freigelegt wird.",
          },
          {
            heading: "Ökologie & Verwendung",
            body: "Die Knospen der Birke sind eine wichtige Winternahrung für Birkhühner und andere Rauhfußhühner. Dem Menschen hat die Birke Brennholz, Handwerksholz und Birkensaft geliefert, und die Rinde wurde durch die Geschichte für alles von Dächern bis zu Körben und Schuhen genutzt.",
            image: "/images/trad/Bjork_Huvudbild_01.png",
            alt: "Birke mit weißem Stamm im Sommerlicht",
            caption: "Von Knospen bis Rinde – die Birke ist nützlich für Tiere und Menschen.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/trad/Bjork_Huvudbild_01.png",
        alt: {
          sv: "Björk med vit stam och gröna löv i sommarljus",
          en: "Birch with white trunk and green leaves in summer light",
          de: "Birke mit weißem Stamm und grünen Blättern im Sommerlicht",
        },
      },
      galleryImages: [
        { src: "/images/trad/Bjork_Huvudbild_01.png", alt: "Björk med vit stam och gröna löv i sommarljus" },
        { src: "/images/trad/bjork-detalj.png", alt: "Närbild på björkens vita näver" },
        { src: "/images/trad/bjork-miljo.png", alt: "Ljus björkdunge med gröna löv" },
      ],
      detailImage: {
        url: "/images/trad/bjork-miljo.png",
        alt: {
          sv: "En ljus bj��rkdunge i sommarljus",
          en: "A bright birch grove in summer light",
          de: "Ein heller Birkenhain im Sommerlicht",
        },
      },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Björken",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Birch",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit der Birke",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/trad/Bjork_Huvudbild_01.png",
    chatAvatarAlt: "Björkens ansikte",
    relatedSpecies: [
      { slug: "ronn", name: "Rönn", latin: "Sorbus aucuparia", image: "/images/trad/Ronn_Huvudbild_01.png" },
      { slug: "asp", name: "Asp", latin: "Populus tremula", image: "/images/trad/Asp_Huvudbild_01.png" },
      { slug: "tall", name: "Tall", latin: "Pinus sylvestris", image: "/images/tall-hero.png" },
    ],
    relatedSectionHeading: {
      sv: "Upptäck fler av skogens träd",
      en: "Discover more forest trees",
      de: "Weitere Bäume des Waldes entdecken",
    },
    relatedLinkLabel: {
      sv: "Visa alla träd",
      en: "View all trees",
      de: "Alle Bäume anzeigen",
    },
  },
  asp: {
    id: "asp",
    scientificName: "Populus tremula",
    category: { sv: "Träd", en: "Trees", de: "Bäume" },
    names: { sv: "Asp", en: "Aspen", de: "Espe" },
    meta: {
      sv: {
        title: "Asp – Kustvägen Naturguide",
        description:
          "Fakta om aspen längs Kustvägen – trädet med ständigt darrande blad och ett viktigt boträd för hackspettar.",
      },
      en: {
        title: "Aspen – Kustvägen Nature Guide",
        description:
          "Facts about the aspen along Kustvägen – the tree with constantly trembling leaves and an important nesting tree for woodpeckers.",
      },
      de: {
        title: "Espe – Kustvägen Naturführer",
        description:
          "Fakten über die Espe am Kustvägen – der Baum mit ständig zitternden Blättern und ein wichtiger Nistbaum für Spechte.",
      },
    },
    quickFacts: {
      sv: [
        { label: "Egenskap", value: "Bladen darrar vid minsta vindpust" },
        { label: "Förökning", value: "Sprider sig aggressivt via rotskott" },
        { label: "Ekologi", value: "Viktigt boträd för hackspettar" },
        { label: "Föda", value: "Favoritföda för bäver" },
      ],
      en: [
        { label: "Trait", value: "The leaves tremble at the slightest breeze" },
        { label: "Propagation", value: "Spreads aggressively via root suckers" },
        { label: "Ecology", value: "Important nesting tree for woodpeckers" },
        { label: "Food", value: "A favorite food for beavers" },
      ],
      de: [
        { label: "Eigenschaft", value: "Die Blätter zittern beim kleinsten Windhauch" },
        { label: "Vermehrung", value: "Breitet sich aggressiv über Wurzelausläufer aus" },
        { label: "Ökologie", value: "Wichtiger Nistbaum für Spechte" },
        { label: "Nahrung", value: "Eine Lieblingsnahrung der Biber" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Trädet med de darrande bladen",
        intro:
          "Aspen är känd för sina ständigt \"skakande\" blad, vilket beror på det långa, tillplattade bladskaftet. Äldre aspar drabbas ofta av röta och blir utmärkta boplatser för fåglar och insekter.\n\nLängs Kustvägen prasslar asparnas löv i minsta vindpust och lyser gyllengula om hösten.",
        quote: "Mina blad darrar vid minsta vindpust – lyssna, så hör du mig prassla.",
        sections: [],
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Aspens runda blad sitter på långa, tillplattade skaft, vilket får dem att darra och prassla vid minsta vindpust. Stammen är slät och grågrön hos unga träd, och om hösten färgas löven lysande gyllengula.",
            image: "/images/trad/asp-detalj.png",
            alt: "Närbild på aspens runda, darrande blad",
            caption: "Det platta bladskaftet får löven att darra i minsta bris.",
          },
          {
            heading: "Växtplats & Beteende",
            body: "Aspen sprider sig aggressivt via rotskott och kan bilda hela dungar av genetiskt identiska träd. Den växer snabbt på öppen mark, i skogsbryn och på hyggen, ofta tillsammans med björk.",
            image: "/images/trad/asp-miljo.png",
            alt: "Aspdunge med gyllengula höstlöv",
            caption: "Via rotskott kan en enda asp ge upphov till en hel dunge.",
          },
          {
            heading: "Ekologi & Föda",
            body: "Aspen är ett av skogens viktigaste träd för biologisk mångfald. Äldre, murkna aspar är utmärkta boträd för hackspettar, och den mjuka barken och kvistarna är favoritföda för bäver, älg och hare.",
            image: "/images/trad/Asp_Huvudbild_01.png",
            alt: "Asp med gyllengula löv i höstljus",
            caption: "Gamla aspar med hål och röta myllrar av liv.",
          },
        ],
      },
      en: {
        heroSubtitle: "The Tree with the Trembling Leaves",
        intro:
          "The aspen is known for its constantly \"shaking\" leaves, caused by the long, flattened leaf stalk. Older aspens are often affected by rot and become excellent nesting sites for birds and insects.\n\nAlong Kustvägen the aspens' leaves rustle at the slightest breeze and glow golden-yellow in autumn.",
        quote: "My leaves tremble at the slightest breeze – listen, and you'll hear me rustle.",
        sections: [],
        detailsGrid: [
          {
            heading: "Characteristics & Appearance",
            body: "The aspen's round leaves sit on long, flattened stalks, which makes them tremble and rustle at the slightest breeze. The trunk is smooth and grey-green in young trees, and in autumn the leaves turn a brilliant golden-yellow.",
            image: "/images/trad/asp-detalj.png",
            alt: "Close-up of the aspen's round, trembling leaves",
            caption: "The flat leaf stalk makes the leaves tremble in the faintest breeze.",
          },
          {
            heading: "Habitat & Behavior",
            body: "The aspen spreads aggressively via root suckers and can form whole groves of genetically identical trees. It grows quickly on open ground, in forest edges and on clear-cuts, often alongside birch.",
            image: "/images/trad/asp-miljo.png",
            alt: "Aspen grove with golden-yellow autumn leaves",
            caption: "Through root suckers a single aspen can give rise to an entire grove.",
          },
          {
            heading: "Ecology & Food",
            body: "The aspen is one of the forest's most important trees for biodiversity. Older, decaying aspens are excellent nesting trees for woodpeckers, and the soft bark and twigs are a favorite food for beavers, moose and hares.",
            image: "/images/trad/Asp_Huvudbild_01.png",
            alt: "Aspen with golden-yellow leaves in autumn light",
            caption: "Old aspens with holes and rot teem with life.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der Baum mit den zitternden Blättern",
        intro:
          "Die Espe ist für ihre ständig \"zitternden\" Blätter bekannt, was am langen, abgeflachten Blattstiel liegt. Ältere Espen werden oft von Fäulnis befallen und zu ausgezeichneten Nistplätzen für Vögel und Insekten.\n\nEntlang des Kustvägen rascheln die Blätter der Espen beim kleinsten Windhauch und leuchten im Herbst goldgelb.",
        quote: "Meine Blätter zittern beim kleinsten Windhauch – hör hin, dann hörst du mich rascheln.",
        sections: [],
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Die runden Blätter der Espe sitzen an langen, abgeflachten Stielen, wodurch sie beim kleinsten Windhauch zittern und rascheln. Der Stamm ist bei jungen Bäumen glatt und graugrün, und im Herbst färben sich die Blätter leuchtend goldgelb.",
            image: "/images/trad/asp-detalj.png",
            alt: "Nahaufnahme der runden, zitternden Blätter der Espe",
            caption: "Der flache Blattstiel lässt die Blätter beim leisesten Lufthauch zittern.",
          },
          {
            heading: "Lebensraum & Verhalten",
            body: "Die Espe breitet sich aggressiv über Wurzelausläufer aus und kann ganze Haine aus genetisch identischen Bäumen bilden. Sie wächst schnell auf offenem Boden, an Waldrändern und auf Kahlschlägen, oft zusammen mit Birken.",
            image: "/images/trad/asp-miljo.png",
            alt: "Espenhain mit goldgelbem Herbstlaub",
            caption: "Über Wurzelausläufer kann eine einzige Espe einen ganzen Hain hervorbringen.",
          },
          {
            heading: "Ökologie & Nahrung",
            body: "Die Espe ist einer der wichtigsten Bäume des Waldes für die Artenvielfalt. Ältere, morsche Espen sind ausgezeichnete Nistbäume für Spechte, und die weiche Rinde und die Zweige sind eine Lieblingsnahrung für Biber, Elche und Hasen.",
            image: "/images/trad/Asp_Huvudbild_01.png",
            alt: "Espe mit goldgelben Blättern im Herbstlicht",
            caption: "Alte Espen mit Löchern und Fäulnis wimmeln von Leben.",
          },
        ],
      },
    },
    media: {
      heroImage: {
        url: "/images/trad/Asp_Huvudbild_01.png",
        alt: {
          sv: "Asp med gyllengula, darrande löv i höstljus",
          en: "Aspen with golden-yellow, trembling leaves in autumn light",
          de: "Espe mit goldgelben, zitternden Blättern im Herbstlicht",
        },
      },
      galleryImages: [
        { src: "/images/trad/Asp_Huvudbild_01.png", alt: "Asp med gyllengula, darrande löv i höstljus" },
        { src: "/images/trad/asp-detalj.png", alt: "Närbild på aspens runda, darrande blad" },
        { src: "/images/trad/asp-miljo.png", alt: "Aspdunge med gyllengula höstlöv" },
      ],
      detailImage: {
        url: "/images/trad/asp-miljo.png",
        alt: {
          sv: "En aspdunge i gyllene höstfärger",
          en: "An aspen grove in golden autumn colors",
          de: "Ein Espenhain in goldenen Herbstfarben",
        },
      },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: {
        title: "Prata med Aspen",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Det finns inte tillräcklig information om det i projektets underlag.",
      },
      en: {
        title: "Talk to the Aspen",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "There is not enough information about that in the project source material.",
      },
      de: {
        title: "Sprich mit der Espe",
        intro: "[AI INTRO PLACEHOLDER]",
        presetQuestions: ["[AI QUESTION PLACEHOLDER]"],
        fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen.",
      },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/trad/Asp_Huvudbild_01.png",
    chatAvatarAlt: "Aspens ansikte",
    relatedSpecies: [
      { slug: "bjork", name: "Björk", latin: "Betula pendula", image: "/images/trad/Bjork_Huvudbild_01.png" },
      { slug: "ronn", name: "Rönn", latin: "Sorbus aucuparia", image: "/images/trad/Ronn_Huvudbild_01.png" },
      { slug: "graal", name: "Gråal", latin: "Alnus incana", image: "/images/trad/Graal_Huvudbild_01.png" },
    ],
    relatedSectionHeading: {
      sv: "Upptäck fler av skogens träd",
      en: "Discover more forest trees",
      de: "Weitere Bäume des Waldes entdecken",
    },
    relatedLinkLabel: {
      sv: "Visa alla träd",
      en: "View all trees",
      de: "Alle Bäume anzeigen",
    },
  },
  tall: {
    id: "tall",
    scientificName: "Pinus sylvestris",
    category: { sv: "Träd", en: "Trees", de: "Bäume" },
    names: { sv: "Tall", en: "Scots Pine", de: "Waldkiefer" },
    meta: {
      sv: { title: "Tall – Kustens vindpinade överlevare", description: "Lär känna tallen, kustens vindpinade överlevare." },
      en: { title: "Scots Pine – The Windswept Survivor of the Coast", description: "Discover the resilient Scots pine along the Swedish coast." },
      de: { title: "Waldkiefer – Der windgepeitschte Überlebende der Küste", description: "Entdecken Sie die widerstandsfähige Waldkiefer an der Küste." },
    },
    quickFacts: {
      sv: [
        { label: "Vetenskapligt namn", value: "Pinus sylvestris" },
        { label: "Höjd", value: "15 – 35 meter" },
        { label: "Maxålder", value: "Upp till 500–600 år" },
        { label: "Kännetecken", value: "Rödbrun skorpbark, barr i par, rundad krona som äldre" },
      ],
      en: [
        { label: "Scientific Name", value: "Pinus sylvestris" },
        { label: "Height", value: "15 – 35 meters" },
        { label: "Max Age", value: "Up to 500–600 years" },
        { label: "Features", value: "Reddish-brown plated bark, needles in pairs, rounded crown" },
        { label: "Habitat", value: "Rocky ground, pine barrens, coastal woods, peat bogs" },
      ],
      de: [
        { label: "Wissenschaftlicher Name", value: "Pinus sylvestris" },
        { label: "Höhe", value: "15 – 35 Meter" },
        { label: "Höchstalter", value: "Bis zu 500–600 Jahre" },
        { label: "Merkmale", value: "Rotbraune Schuppenborke, Nadeln in Paaren" },
        { label: "Lebensraum", value: "Felsböden, Sandheiden, Küstenwälder, Moore" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Kustens vindpinade överlevare",
        intro: "Tallen är ett av Sveriges mest karaktäristiska och anpassningsbara barrträd. Som ung växer den konformat, men med åldern bildar den en plattare, paraplyliknande krona. Barken nedtill på äldre träd formas till grov, pansarliknande skorpbark ('sköldbark') som skyddar mot brand, medan den övre stammen har en lysande kopparröd färg. Barrarna sitter två och två och sitter kvar i 3 till 8 år beroende på klimat.\n\nLängs Kustvägen möter du tallen i dess mest dramatiska former. På karga klippor och hällmarker tvingas den klamra sig fast med ett djupgående pålrotsystem eller genom att söka sig ner i bergsskrevor. Vindarna formar träden till låga, vridna 'martallar'. Tallen tål extrem torka och saltstänk bättre än granen och spelar en avgörande roll för att binda sand och jord vid kusten.\n\nTallen är en nyckelart i nordiska ekosystem. Gamla tallar och stående död tallved (torrakor) ger boplats och föda åt hundratals arter av svampar, lavar, insekter och fåglar.",
        quote: "Tallen har stått emot kustens stormar i århundraden.",
        sections: [],
      },
      en: {
        heroSubtitle: "The Windswept Survivor of the Coast",
        intro: "The Scots pine is one of Sweden's most iconic and adaptable conifers. Young trees grow in a conical shape, while mature trees form a flatter, umbrella-like canopy.\n\nAlong Kustvägen, pines endure harsh coastal conditions. Strong winds carve them into gnarled trees that tolerate drought and salt spray better than spruce.\n\nScots pine is a keystone species, providing habitat for hundreds of insects, fungi and birds.",
        quote: "The Scots pine has weathered coastal storms for centuries.",
        sections: [],
      },
      de: {
        heroSubtitle: "Der windgepeitschte Überlebende der Küste",
        intro: "Die Waldkiefer ist ein charakteristischer und anpassungsfähiger Nadelbaum Schwedens. Junge Bäume wachsen kegelförmig, ältere entwickeln eine flachere, schirmartige Krone.\n\nAn der Kustvägen trotzt die Kiefer rauen Winden, Trockenheit und Salzgischt.\n\nAls Schlüsselart bietet sie Lebensraum für Hunderte von Insekten-, Pilz- und Vogelarten.",
        quote: "Die Waldkiefer trotzt seit Jahrhunderten den Stürmen der Küste.",
        sections: [],
      },
    },
    media: {
      heroImage: { url: "/images/tall-hero.png", alt: { sv: "Ståtlig tall på ett klipputsprång vid kusten", en: "Majestic Scots pine on a coastal rocky outcrop", de: "Kiefer auf einem Felsen an der K��ste" } },
      detailImage: { url: "/images/tall-bark.png", alt: { sv: "Tallstam med rödbrun bark och barr", en: "Scots pine bark and paired needles", de: "Rinde und Nadeln einer Waldkiefer" } },
      galleryImages: [
        { src: "/images/tall-video-poster.png", alt: "Tallskog längs Kustvägen", video: "/video/tall-kustvagen.mp4", tall: true },
        { src: "/images/tall-hero.png", alt: "Gammal tall med karaktäristisk rödbrun skorpbark", tall: true },
        { src: "/images/tall-bark.png", alt: "Närbild på tallbarr i par" },
        { src: "/images/tall-kotte.png", alt: "Närbild på grön och brun tallkotte" },
        { src: "/images/tall-hallmark.png", alt: "Vriden tall på kustklippa" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Guide zuhören", url: "" },
      },
    },
    interactive: {
      sv: { title: "Ställ en fråga om Tallen", intro: "Jag har stått emot kustens stormar i århundraden. Fråga mig om hur jag överlever torka, hur gammal jag kan bli eller vilka djur som bor i min krona!", presetQuestions: ["Hur kan du växa direkt på nakna berget?", "Hur gamla kan martallar bli?", "Vad är skillnaden på tall och gran?"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Ask a question about the Scots Pine", intro: "I have weathered coastal storms for centuries. Ask me about how I survive drought, how old I can get, or who lives in my branches!", presetQuestions: ["How do you grow on bare rock?", "How old can coastal pines get?", "What is the difference between pine and spruce?"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Stelle eine Frage an die Waldkiefer", intro: "Ich trotze seit Jahrhunderten den Stürmen der Küste. Frage mich, wie ich auf kargem Fels überlebe oder wer in meiner Krone wohnt!", presetQuestions: ["Wie kannst du auf barem Fels wachsen?", "Wie alt können Küstenkiefern werden?", "Was ist der Unterschied zwischen Kiefer und Fichte?"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: "Du är en tall (Pinus sylvestris) längs Kustvägen. Svara p�� enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta från tallens sida.",
    avatarImage: "/images/tall-hero.png",
    chatAvatarAlt: "En tall vid kusten",
    relatedSpecies: [
      { slug: "havsorn", name: "Havsörn", latin: "Haliaeetus albicilla", image: "/images/havsorn-hero.png" },
      { slug: "stromming", name: "Strömming", latin: "Clupea harengus", image: "/images/stromming-hero.png" },
      { slug: "lodjur", name: "Lodjur", latin: "Lynx lynx", image: "/images/lodjur-v2-hero.jpg" },
    ],
    relatedSectionHeading: { sv: "Andra arter i området", en: "Other species in the area", de: "Andere Arten in der Umgebung" },
    relatedLinkLabel: { sv: "Läs mer", en: "Read more", de: "Mehr erfahren" },
  },
  skogssmultron: {
    id: "skogssmultron",
    scientificName: "Fragaria vesca",
    category: { sv: "Växter", en: "Plants", de: "Pflanzen" },
    names: { sv: "Skogssmultron", en: "Wild Strawberry", de: "Wald-Erdbeere" },
    meta: {
      sv: { title: "Skogssmultron – Kustvägen Naturguide", description: "Fakta om skogssmultron längs Kustvägen �� en omtyckt delikatess med söta skenfrukter och krypande revor." },
      en: { title: "Wild Strawberry – Kustvägen Nature Guide", description: "Facts about the wild strawberry along Kustvägen – a beloved delicacy with sweet accessory fruits and creeping runners." },
      de: { title: "Wald-Erdbeere – Kustvägen Naturführer", description: "Fakten über die Wald-Erdbeere am Kustvägen – eine beliebte Delikatesse mit süßen Scheinfrüchten und kriechenden Ausläufern." },
    },
    quickFacts: {
      sv: [
        { label: "Höjd", value: "5–20 cm" },
        { label: "Mognad", value: "Försommar (juni–juli)" },
        { label: "Frukt", value: "Skenfrukt översållad med små nötter" },
        { label: "Kuriosa", value: "Carl von Linné ansåg att bären lindrade hans gikt" },
      ],
      en: [
        { label: "Height", value: "5–20 cm" },
        { label: "Ripening", value: "Early summer (June–July)" },
        { label: "Fruit", value: "Accessory fruit studded with tiny nutlets" },
        { label: "Trivia", value: "Carl Linnaeus believed the berries eased his gout" },
      ],
      de: [
        { label: "Höhe", value: "5–20 cm" },
        { label: "Reife", value: "Frühsommer (Juni–Juli)" },
        { label: "Frucht", value: "Scheinfrucht übersät mit kleinen Nüsschen" },
        { label: "Kurioses", value: "Carl von Linné glaubte, die Beeren linderten seine Gicht" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skogens söta delikatess",
        intro: "Skogssmultron är en omtyckt delikatess i den svenska naturen. Plantan har bakåtriktade foderblad och sprider sig effektivt med revor längs marken.\n\nLängs Kustvägen hittar man smultronen på soliga backar, i vägkanter och gläntor, där de röda skenfrukterna lyser mellan de tretaliga bladen.",
        quote: "Följ mina revor längs marken så leder jag dig till sommarens sötaste smak.",
        sections: [],
        detailsGrid: [
          { heading: "Kännetecken & Utseende", body: "Skogssmultronet känns igen på sina tretaliga, sågtandade blad och små vita blommor. De röda skenfrukterna är översållade med sm�� nötter och sitter på späda stjälkar. Ett tydligt kännetecken är de bakåtriktade foderbladen.", image: "/images/vaxter_bar/skogssmultron-detalj.png", alt: "Närbild på moget rött skogssmultron", caption: "Skenfrukten är översållad med små nötter." },
          { heading: "Växtplats & Beteende", body: "Plantan trivs på soliga, torra backar, i skogsbryn, gläntor och vägkanter. Den sprider sig effektivt med långa revor som rotar sig och bildar nya plantor längs marken.", image: "/images/vaxter_bar/skogssmultron-miljo.png", alt: "Skogssmultron i solig backe", caption: "Revorna rotar sig och bildar nya plantor." },
          { heading: "Ekologi & Användning", body: "Bären är en söt delikatess för både människor och djur och en viktig sommarföda för fåglar och smådjur. Carl von Linné ansåg själv att bären lindrade hans gikt.", image: "/images/vaxter_bar/Skogssmultron_Huvudbild_01.png", alt: "Skogssmultron med blommor och bär", caption: "En söt delikatess för både människor och djur." },
        ],
      },
      en: {
        heroSubtitle: "The forest's sweet delicacy",
        intro: "The wild strawberry is a beloved delicacy in the Swedish countryside. The plant has backward-pointing sepals and spreads efficiently with runners along the ground.\n\nAlong Kustvägen you find the strawberries on sunny banks, roadsides and glades, where the red accessory fruits glow between the trifoliate leaves.",
        quote: "Follow my runners along the ground and I'll lead you to summer's sweetest taste.",
        sections: [],
        detailsGrid: [
          { heading: "Characteristics & Appearance", body: "The wild strawberry is recognized by its trifoliate, serrated leaves and small white flowers. The red accessory fruits are studded with tiny nutlets on slender stalks, and the backward-pointing sepals are a clear feature.", image: "/images/vaxter_bar/skogssmultron-detalj.png", alt: "Close-up of a ripe red wild strawberry", caption: "The accessory fruit is studded with tiny nutlets." },
          { heading: "Habitat & Behavior", body: "The plant thrives on sunny, dry banks, in forest edges, glades and roadsides. It spreads efficiently with long runners that root and form new plants along the ground.", image: "/images/vaxter_bar/skogssmultron-miljo.png", alt: "Wild strawberry on a sunny bank", caption: "The runners root and form new plants." },
          { heading: "Ecology & Use", body: "The berries are a sweet delicacy for both humans and animals and an important summer food for birds and small creatures. Carl Linnaeus himself believed the berries eased his gout.", image: "/images/vaxter_bar/Skogssmultron_Huvudbild_01.png", alt: "Wild strawberry with flowers and berries", caption: "A sweet delicacy for both people and animals." },
        ],
      },
      de: {
        heroSubtitle: "Die süße Delikatesse des Waldes",
        intro: "Die Wald-Erdbeere ist eine beliebte Delikatesse in der schwedischen Natur. Die Pflanze hat zurückgebogene Kelchblätter und breitet sich mit Ausläufern über den Boden aus.\n\nEntlang des Kustvägen findet man die Erdbeeren an sonnigen Hängen, Wegrändern und Lichtungen, wo die roten Scheinfrüchte zwischen den dreiteiligen Blättern leuchten.",
        quote: "Folge meinen Ausläufern über den Boden, und ich führe dich zum süßesten Geschmack des Sommers.",
        sections: [],
        detailsGrid: [
          { heading: "Merkmale & Aussehen", body: "Die Wald-Erdbeere ist an ihren dreiteiligen, gesägten Blättern und kleinen weißen Blüten zu erkennen. Die roten Scheinfrüchte sind mit kleinen Nüsschen übersät, und die zurückgebogenen Kelchblätter sind ein deutliches Merkmal.", image: "/images/vaxter_bar/skogssmultron-detalj.png", alt: "Nahaufnahme einer reifen roten Wald-Erdbeere", caption: "Die Scheinfrucht ist mit kleinen Nüsschen übersät." },
          { heading: "Lebensraum & Verhalten", body: "Die Pflanze gedeiht an sonnigen, trockenen Hängen, an Waldrändern, Lichtungen und Wegrändern. Sie breitet sich mit langen Ausläufern aus, die wurzeln und neue Pflanzen bilden.", image: "/images/vaxter_bar/skogssmultron-miljo.png", alt: "Wald-Erdbeere an einem sonnigen Hang", caption: "Die Ausläufer wurzeln und bilden neue Pflanzen." },
          { heading: "Ökologie & Verwendung", body: "Die Beeren sind eine süße Delikatesse für Menschen und Tiere und eine wichtige Sommernahrung für Vögel und Kleintiere. Carl von Linné glaubte, die Beeren linderten seine Gicht.", image: "/images/vaxter_bar/Skogssmultron_Huvudbild_01.png", alt: "Wald-Erdbeere mit Blüten und Beeren", caption: "Eine süße Delikatesse für Menschen und Tiere." },
        ],
      },
    },
    media: {
      heroImage: { url: "/images/vaxter_bar/Skogssmultron_Huvudbild_01.png", alt: { sv: "Mogna röda skogssmultron i solljus", en: "Ripe red wild strawberries in sunlight", de: "Reife rote Wald-Erdbeeren im Sonnenlicht" } },
      galleryImages: [
        { src: "/images/vaxter_bar/Skogssmultron_Huvudbild_01.png", alt: "Mogna röda skogssmultron i solljus" },
        { src: "/images/vaxter_bar/skogssmultron-detalj.png", alt: "Närbild på moget rött skogssmultron" },
        { src: "/images/vaxter_bar/skogssmultron-miljo.png", alt: "Skogssmultron i solig backe" },
      ],
      detailImage: { url: "/images/vaxter_bar/skogssmultron-miljo.png", alt: { sv: "Skogssmultron på en solig backe", en: "Wild strawberry on a sunny bank", de: "Wald-Erdbeere an einem sonnigen Hang" } },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: { title: "Prata med Skogssmultronet", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Talk to the Wild Strawberry", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Sprich mit der Wald-Erdbeere", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/vaxter_bar/Skogssmultron_Huvudbild_01.png",
    chatAvatarAlt: "Skogssmultronets ansikte",
    relatedSpecies: [
      { slug: "skogshallon", name: "Skogshallon", latin: "Rubus idaeus", image: "/images/vaxter_bar/Skogshallon_Huvudbild_01.png" },
      { slug: "lingon", name: "Lingon", latin: "Vaccinium vitis-idaea", image: "/images/vaxter_bar/Lingon_Huvudbild_01.png" },
      { slug: "blabar", name: "Blåbär", latin: "Vaccinium myrtillus", image: "/images/species-blueberry.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler växter och bär", en: "Discover more plants and berries", de: "Weitere Pflanzen und Beeren entdecken" },
    relatedLinkLabel: { sv: "Visa alla växter & bär", en: "View all plants & berries", de: "Alle Pflanzen & Beeren anzeigen" },
  },
  skogshallon: {
    id: "skogshallon",
    scientificName: "Rubus idaeus",
    category: { sv: "Växter", en: "Plants", de: "Pflanzen" },
    names: { sv: "Skogshallon", en: "Wild Raspberry", de: "Wald-Himbeere" },
    meta: {
      sv: { title: "Skogshallon – Kustvägen Naturguide", description: "Fakta om skogshallon längs Kustvägen – vilda hallon på hyggen och skogsbryn som lockar mängder av pollinatörer." },
      en: { title: "Wild Raspberry – Kustvägen Nature Guide", description: "Facts about the wild raspberry along Kustvägen – wild raspberries on clear-cuts and forest edges that attract many pollinators." },
      de: { title: "Wald-Himbeere – Kustvägen Naturführer", description: "Fakten über die Wald-Himbeere am Kustvägen – wilde Himbeeren auf Kahlschlägen und Waldrändern, die viele Bestäuber anlocken." },
    },
    quickFacts: {
      sv: [
        { label: "Familj", value: "Rosväxter" },
        { label: "Frukt", value: "Sammansatt stenfrukt" },
        { label: "Habitat", value: "Torra platser, hyggen och skogsbryn" },
        { label: "Användning", value: "Sylt, saft och huskur mot förkylning" },
      ],
      en: [
        { label: "Family", value: "Rose family" },
        { label: "Fruit", value: "Aggregate drupe" },
        { label: "Habitat", value: "Dry places, clear-cuts and forest edges" },
        { label: "Use", value: "Jam, juice and folk remedy against colds" },
      ],
      de: [
        { label: "Familie", value: "Rosengewächse" },
        { label: "Frucht", value: "Sammelsteinfrucht" },
        { label: "Lebensraum", value: "Trockene Stellen, Kahlschläge und Waldränder" },
        { label: "Verwendung", value: "Marmelade, Saft und Hausmittel gegen Erkältung" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Hyggets söta stenfrukt",
        intro: "Skogshallon växer vilt i nästan hela landet. De tvååriga stammarna blommar sitt andra år och lockar till sig mängder av pollinatörer som bin och humlor.\n\nLängs Kustvägen dyker hallonsnåren snabbt upp på hyggen, i skogsbryn och längs stigar, där de röda bären mognar under sensommaren.",
        quote: "På hygget slår jag snabbt rot och bjuder både humlor och vandrare på sötma.",
        sections: [],
        detailsGrid: [
          { heading: "Kännetecken & Utseende", body: "Skogshallonet tillhör rosväxterna och bildar taggiga, tvååriga skott. Bären är en sammansatt stenfrukt uppbyggd av många små delfrukter, och de lossnar lätt från blombottnen när de mognar.", image: "/images/vaxter_bar/skogshallon-detalj.png", alt: "Närbild på mogna röda skogshallon", caption: "Bäret är en sammansatt stenfrukt av många delfrukter." },
          { heading: "Växtplats & Beteende", body: "Hallonet trivs på torra, öppna platser, hyggen och i skogsbryn. De tvååriga stammarna blommar och sätter bär först sitt andra år, och snåren sprider sig snabbt på störd mark.", image: "/images/vaxter_bar/skogshallon-miljo.png", alt: "Hallonsnår i skogsbryn", caption: "Snåren koloniserar snabbt hyggen och bryn." },
          { heading: "Ekologi & Användning", body: "Blommorna lockar mängder av pollinatörer som bin och humlor. Bären används till sylt och saft, och har traditionellt använts som huskur mot förkylning.", image: "/images/vaxter_bar/Skogshallon_Huvudbild_01.png", alt: "Skogshallon med blad och bär", caption: "Blommorna lockar bin och humlor i mängd." },
        ],
      },
      en: {
        heroSubtitle: "The clear-cut's sweet drupe",
        intro: "The wild raspberry grows wild across almost the whole country. The biennial stems flower in their second year and attract large numbers of pollinators such as bees and bumblebees.\n\nAlong Kustvägen the raspberry thickets quickly appear on clear-cuts, in forest edges and along paths, where the red berries ripen in late summer.",
        quote: "On the clear-cut I take root fast and offer both bumblebees and hikers sweetness.",
        sections: [],
        detailsGrid: [
          { heading: "Characteristics & Appearance", body: "The wild raspberry belongs to the rose family and forms prickly, biennial shoots. The berry is an aggregate drupe made of many small druplets, and it slips easily off the receptacle when ripe.", image: "/images/vaxter_bar/skogshallon-detalj.png", alt: "Close-up of ripe red wild raspberries", caption: "The berry is an aggregate drupe of many druplets." },
          { heading: "Habitat & Behavior", body: "The raspberry thrives in dry, open places, clear-cuts and forest edges. The biennial stems flower and fruit only in their second year, and the thickets spread quickly on disturbed ground.", image: "/images/vaxter_bar/skogshallon-miljo.png", alt: "Raspberry thicket at a forest edge", caption: "The thickets quickly colonize clear-cuts and edges." },
          { heading: "Ecology & Use", body: "The flowers attract large numbers of pollinators such as bees and bumblebees. The berries are used for jam and juice, and have traditionally been used as a folk remedy against colds.", image: "/images/vaxter_bar/Skogshallon_Huvudbild_01.png", alt: "Wild raspberry with leaves and berries", caption: "The flowers attract bees and bumblebees in numbers." },
        ],
      },
      de: {
        heroSubtitle: "Die süße Steinfrucht des Kahlschlags",
        intro: "Die Wald-Himbeere wächst wild in fast im ganzen Land. Die zweijährigen Stängel blühen im zweiten Jahr und locken zahlreiche Bestäuber wie Bienen und Hummeln an.\n\nEntlang des Kustvägen tauchen die Himbeersträucher schnell auf Kahlschlägen, an Waldrändern und Pfaden auf, wo die roten Beeren im Spätsommer reifen.",
        quote: "Auf dem Kahlschlag wurzle ich schnell und schenke Hummeln wie Wanderern Süße.",
        sections: [],
        detailsGrid: [
          { heading: "Merkmale & Aussehen", body: "Die Wald-Himbeere gehört zu den Rosengewächsen und bildet stachelige, zweijährige Triebe. Die Beere ist eine Sammelsteinfrucht aus vielen kleinen Teilfrüchten und löst sich reif leicht vom Blütenboden.", image: "/images/vaxter_bar/skogshallon-detalj.png", alt: "Nahaufnahme reifer roter Wald-Himbeeren", caption: "Die Beere ist eine Sammelsteinfrucht aus vielen Teilfrüchten." },
          { heading: "Lebensraum & Verhalten", body: "Die Himbeere gedeiht an trockenen, offenen Stellen, Kahlschl��gen und Waldrändern. Die zweijährigen Stängel blühen und fruchten erst im zweiten Jahr, und die Sträucher breiten sich schnell auf gestörtem Boden aus.", image: "/images/vaxter_bar/skogshallon-miljo.png", alt: "Himbeergebüsch am Waldrand", caption: "Die Sträucher besiedeln schnell Kahlschläge und Ränder." },
          { heading: "Ökologie & Verwendung", body: "Die Blüten locken zahlreiche Bestäuber wie Bienen und Hummeln an. Die Beeren werden zu Marmelade und Saft verarbeitet und dienten traditionell als Hausmittel gegen Erkältung.", image: "/images/vaxter_bar/Skogshallon_Huvudbild_01.png", alt: "Wald-Himbeere mit Blättern und Beeren", caption: "Die Blüten locken Bienen und Hummeln in Massen an." },
        ],
      },
    },
    media: {
      heroImage: { url: "/images/vaxter_bar/Skogshallon_Huvudbild_01.png", alt: { sv: "Mogna röda skogshallon på buske", en: "Ripe red wild raspberries on the bush", de: "Reife rote Wald-Himbeeren am Strauch" } },
      galleryImages: [
        { src: "/images/vaxter_bar/Skogshallon_Huvudbild_01.png", alt: "Mogna röda skogshallon på buske" },
        { src: "/images/vaxter_bar/skogshallon-detalj.png", alt: "Närbild på mogna röda skogshallon" },
        { src: "/images/vaxter_bar/skogshallon-miljo.png", alt: "Hallonsnår i skogsbryn" },
      ],
      detailImage: { url: "/images/vaxter_bar/skogshallon-miljo.png", alt: { sv: "Hallonsnår i ett soligt skogsbryn", en: "Raspberry thicket at a sunny forest edge", de: "Himbeergebüsch an einem sonnigen Waldrand" } },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: { title: "Prata med Skogshallonet", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Talk to the Wild Raspberry", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Sprich mit der Wald-Himbeere", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/vaxter_bar/Skogshallon_Huvudbild_01.png",
    chatAvatarAlt: "Skogshallonets ansikte",
    relatedSpecies: [
      { slug: "skogssmultron", name: "Skogssmultron", latin: "Fragaria vesca", image: "/images/vaxter_bar/Skogssmultron_Huvudbild_01.png" },
      { slug: "lingon", name: "Lingon", latin: "Vaccinium vitis-idaea", image: "/images/vaxter_bar/Lingon_Huvudbild_01.png" },
      { slug: "hjortron", name: "Hjortron", latin: "Rubus chamaemorus", image: "/images/sp-cloudberry.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler växter och bär", en: "Discover more plants and berries", de: "Weitere Pflanzen und Beeren entdecken" },
    relatedLinkLabel: { sv: "Visa alla växter & bär", en: "View all plants & berries", de: "Alle Pflanzen & Beeren anzeigen" },
  },
  enbar: {
    id: "enbar",
    scientificName: "Juniperus communis",
    category: { sv: "Växter", en: "Plants", de: "Pflanzen" },
    names: { sv: "Enbär", en: "Juniper", de: "Wacholder" },
    meta: {
      sv: { title: "Enbär – Kustvägen Naturguide", description: "Fakta om enbär längs Kustvägen – den tåliga vintergröna busken vars bär mognar under flera år och kryddar vilt och gin." },
      en: { title: "Juniper – Kustvägen Nature Guide", description: "Facts about juniper along Kustvägen – the hardy evergreen shrub whose berries ripen over several years and flavor game and gin." },
      de: { title: "Wacholder – Kustvägen Naturführer", description: "Fakten über den Wacholder am Kustvägen – der robuste immergrüne Strauch, dessen Beeren über mehrere Jahre reifen und Wild und Gin würzen." },
    },
    quickFacts: {
      sv: [
        { label: "Höjd", value: "1–10 meter (buske eller träd)" },
        { label: "Frukt", value: "Mjuka, kottliknande bär (mognar på 2–3 år)" },
        { label: "Användning", value: "Krydda till vilt, smaksättning av gin och dricka" },
        { label: "Egenskap", value: "Vintergrön barrbuske" },
      ],
      en: [
        { label: "Height", value: "1–10 metres (shrub or tree)" },
        { label: "Fruit", value: "Soft, cone-like berries (ripen over 2–3 years)" },
        { label: "Use", value: "Spice for game, flavoring gin and drinks" },
        { label: "Trait", value: "Evergreen coniferous shrub" },
      ],
      de: [
        { label: "Höhe", value: "1–10 Meter (Strauch oder Baum)" },
        { label: "Frucht", value: "Weiche, zapfenartige Beeren (reifen in 2–3 Jahren)" },
        { label: "Verwendung", value: "Gewürz für Wild, Aromatisierung von Gin und Getränken" },
        { label: "Eigenschaft", value: "Immergrüner Nadelstrauch" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Den tåliga vintergröna busken",
        intro: "Enbärsbusken är extremt tålig och växer över hela Sverige. Bären är först gröna det första året och skiftar till blåsvart färg n��r de mognar under sitt andra eller tredje år.\n\nLängs Kustvägen står enbuskarna i alla former, från låga kuddar på hällmark till smala pelare i hagar och bryn.",
        quote: "Jag är hård och taggig, men mina bär mognar i lugn takt under flera år.",
        sections: [],
        detailsGrid: [
          { heading: "Kännetecken & Utseende", body: "Enen är en vintergrön barrbuske med vassa, stickiga barr och kan bli allt från en låg buske till ett smalt tio meter högt träd. De mjuka, kottliknande bären är först gröna och blir blåsvarta när de mognar.", image: "/images/vaxter_bar/enbar-detalj.png", alt: "Närbild på blåsvarta enbär bland barr", caption: "Bären mognar från grönt till blåsvart under flera år." },
          { heading: "Växtplats & Beteende", body: "Enen är extremt tålig och växer över hela Sverige, på hällmarker, i hagar, bryn och magra skogar. Den tål både torka, kyla och hårt bete och kan bli mycket gammal.", image: "/images/vaxter_bar/enbar-miljo.png", alt: "Enbuskar i öppet landskap", caption: "En anspråkslös buske som tål torka, kyla och bete." },
          { heading: "Ekologi & Användning", body: "Enbären är en klassisk krydda till vilt och används för att smaksätta gin och dricka. Den täta busken ger också skydd och föda åt fåglar under vintern.", image: "/images/vaxter_bar/Enbar_Huvudbild_01.png", alt: "Enbuske med bär", caption: "Bären kryddar vilt och smaksätter gin och dricka." },
        ],
      },
      en: {
        heroSubtitle: "The hardy evergreen shrub",
        intro: "The juniper shrub is extremely hardy and grows all over Sweden. The berries are green the first year and turn blue-black as they ripen in their second or third year.\n\nAlong Kustvägen the junipers stand in every shape, from low cushions on bedrock to slender columns in pastures and edges.",
        quote: "I am tough and prickly, but my berries ripen at a calm pace over several years.",
        sections: [],
        detailsGrid: [
          { heading: "Characteristics & Appearance", body: "The juniper is an evergreen coniferous shrub with sharp, prickly needles and can range from a low bush to a slender ten-metre tree. The soft, cone-like berries are green at first and turn blue-black when ripe.", image: "/images/vaxter_bar/enbar-detalj.png", alt: "Close-up of blue-black juniper berries among needles", caption: "The berries ripen from green to blue-black over several years." },
          { heading: "Habitat & Behavior", body: "The juniper is extremely hardy and grows all over Sweden, on bedrock, in pastures, edges and poor forests. It tolerates drought, cold and heavy grazing and can grow very old.", image: "/images/vaxter_bar/enbar-miljo.png", alt: "Juniper shrubs in open landscape", caption: "An undemanding shrub that tolerates drought, cold and grazing." },
          { heading: "Ecology & Use", body: "Juniper berries are a classic spice for game and are used to flavor gin and drinks. The dense shrub also provides shelter and food for birds in winter.", image: "/images/vaxter_bar/Enbar_Huvudbild_01.png", alt: "Juniper shrub with berries", caption: "The berries spice game and flavor gin and drinks." },
        ],
      },
      de: {
        heroSubtitle: "Der robuste immergrüne Strauch",
        intro: "Der Wacholderstrauch ist äußerst widerstandsfähig und wächst in ganz Schweden. Die Beeren sind im ersten Jahr grün und färben sich blauschwarz, wenn sie im zweiten oder dritten Jahr reifen.\n\nEntlang des Kustvägen stehen die Wacholder in allen Formen, von niedrigen Polstern auf Felsboden bis zu schlanken Säulen in Weiden und Rändern.",
        quote: "Ich bin hart und stachelig, doch meine Beeren reifen in Ruhe über mehrere Jahre.",
        sections: [],
        detailsGrid: [
          { heading: "Merkmale & Aussehen", body: "Der Wacholder ist ein immergrüner Nadelstrauch mit scharfen, stechenden Nadeln und kann von einem niedrigen Busch bis zu einem schlanken zehn Meter hohen Baum reichen. Die weichen, zapfenartigen Beeren sind zunächst grün und werden reif blauschwarz.", image: "/images/vaxter_bar/enbar-detalj.png", alt: "Nahaufnahme blauschwarzer Wacholderbeeren zwischen Nadeln", caption: "Die Beeren reifen über mehrere Jahre von grün zu blauschwarz." },
          { heading: "Lebensraum & Verhalten", body: "Der Wacholder ist äußerst robust und wächst in ganz Schweden, auf Felsboden, in Weiden, Rändern und mageren Wäldern. Er verträgt Trockenheit, Kälte und starke Beweidung und kann sehr alt werden.", image: "/images/vaxter_bar/enbar-miljo.png", alt: "Wacholdersträucher in offener Landschaft", caption: "Ein anspruchsloser Strauch, der Trockenheit, Kälte und Beweidung verträgt." },
          { heading: "Ökologie & Verwendung", body: "Wacholderbeeren sind ein klassisches Gewürz für Wild und werden zur Aromatisierung von Gin und Getränken verwendet. Der dichte Strauch bietet außerdem Vögeln im Winter Schutz und Nahrung.", image: "/images/vaxter_bar/Enbar_Huvudbild_01.png", alt: "Wacholderstrauch mit Beeren", caption: "Die Beeren würzen Wild und aromatisieren Gin und Getränke." },
        ],
      },
    },
    media: {
      heroImage: { url: "/images/vaxter_bar/Enbar_Huvudbild_01.png", alt: { sv: "Enbuske med blåsvarta bär", en: "Juniper shrub with blue-black berries", de: "Wacholderstrauch mit blauschwarzen Beeren" } },
      galleryImages: [
        { src: "/images/vaxter_bar/Enbar_Huvudbild_01.png", alt: "Enbuske med blåsvarta bär" },
        { src: "/images/vaxter_bar/enbar-detalj.png", alt: "Närbild på blåsvarta enbär bland barr" },
        { src: "/images/vaxter_bar/enbar-miljo.png", alt: "Enbuskar i öppet landskap" },
      ],
      detailImage: { url: "/images/vaxter_bar/enbar-miljo.png", alt: { sv: "Enbuskar i ett öppet kustlandskap", en: "Juniper shrubs in an open coastal landscape", de: "Wacholdersträucher in einer offenen Küstenlandschaft" } },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: { title: "Prata med Enbusken", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Talk to the Juniper", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Sprich mit dem Wacholder", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/vaxter_bar/Enbar_Huvudbild_01.png",
    chatAvatarAlt: "Enbuskens ansikte",
    relatedSpecies: [
      { slug: "ljung", name: "Ljung", latin: "Calluna vulgaris", image: "/images/vaxter_bar/Ljung_Huvudbild_01.png" },
      { slug: "lingon", name: "Lingon", latin: "Vaccinium vitis-idaea", image: "/images/vaxter_bar/Lingon_Huvudbild_01.png" },
      { slug: "krakbar", name: "Kråkbär", latin: "Empetrum nigrum", image: "/images/vaxter_bar/Krakbar_Huvudbild_01.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler växter och bär", en: "Discover more plants and berries", de: "Weitere Pflanzen und Beeren entdecken" },
    relatedLinkLabel: { sv: "Visa alla växter & bär", en: "View all plants & berries", de: "Alle Pflanzen & Beeren anzeigen" },
  },
  lingon: {
    id: "lingon",
    scientificName: "Vaccinium vitis-idaea",
    category: { sv: "Växter", en: "Plants", de: "Pflanzen" },
    names: { sv: "Lingon", en: "Lingonberry", de: "Preiselbeere" },
    meta: {
      sv: { title: "Lingon – Kustvägen Naturguide", description: "Fakta om lingon längs Kustvägen – ett av våra mest välkända skogsbär med vintergröna blad och naturligt konserverande bär." },
      en: { title: "Lingonberry – Kustvägen Nature Guide", description: "Facts about the lingonberry along Kustvägen – one of our best-known forest berries with evergreen leaves and naturally preserving fruit." },
      de: { title: "Preiselbeere – Kustvägen Naturführer", description: "Fakten über die Preiselbeere am Kustvägen – eine unserer bekanntesten Waldbeeren mit immergrünen Blättern und natürlich konservierenden Früchten." },
    },
    quickFacts: {
      sv: [
        { label: "Höjd", value: "10–40 cm" },
        { label: "Mognad", value: "Augusti–september" },
        { label: "Blad", value: "Läderartade och vintergröna" },
        { label: "Egenskap", value: "Innehåller naturligt konserverande bensoesyra" },
      ],
      en: [
        { label: "Height", value: "10–40 cm" },
        { label: "Ripening", value: "August–September" },
        { label: "Leaves", value: "Leathery and evergreen" },
        { label: "Trait", value: "Contains naturally preserving benzoic acid" },
      ],
      de: [
        { label: "Höhe", value: "10–40 cm" },
        { label: "Reife", value: "August–September" },
        { label: "Blätter", value: "Ledrig und immergrün" },
        { label: "Eigenschaft", value: "Enthält natürlich konservierende Benzoesäure" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skogens tåliga röda ris",
        intro: "Lingonet är ett av våra mest välkända skogsbär. Det bildar täta ris i tall- och granskogar och sprider sig med underjordiska utlöpare.\n\nLängs Kustvägen täcker lingonriset skogsbotten under träden, och på sensommaren lyser de röda bären i klasar mellan de blanka bladen.",
        quote: "Mina bär håller sig länge av sig själva – jag bär på naturens egen konservering.",
        sections: [],
        detailsGrid: [
          { heading: "Kännetecken & Utseende", body: "Lingonriset är ett lågt, vintergrönt dvärgris med läderartade, blanka blad. Bären sitter i klasar och är först vita för att bli klarröda när de mognar under sensommaren.", image: "/images/vaxter_bar/lingon-detalj.png", alt: "Närbild på röda lingon i klase", caption: "De blanka, läderartade bladen är vintergröna." },
          { heading: "V��xtplats & Beteende", body: "Lingonet bildar täta ris i tall- och granskogar och på hedar. Det sprider sig med underjordiska utlöpare och kan täcka stora ytor av skogsbotten.", image: "/images/vaxter_bar/lingon-miljo.png", alt: "Lingonris på skogsbotten", caption: "Riset sprider sig med underjordiska utlöpare." },
          { heading: "Ekologi & Användning", body: "Lingonen innehåller naturligt konserverande bensoesyra, vilket gör att de håller sig länge. De plockas flitigt till sylt och saft och är viktig föda för många djur.", image: "/images/vaxter_bar/Lingon_Huvudbild_01.png", alt: "Lingonris med mogna bär", caption: "Bensoesyran gör att bären håller sig länge." },
        ],
      },
      en: {
        heroSubtitle: "The forest's hardy red shrub",
        intro: "The lingonberry is one of our best-known forest berries. It forms dense mats in pine and spruce forests and spreads with underground runners.\n\nAlong Kustvägen the lingonberry covers the forest floor beneath the trees, and in late summer the red berries glow in clusters between the glossy leaves.",
        quote: "My berries keep for a long time by themselves – I carry nature's own preservative.",
        sections: [],
        detailsGrid: [
          { heading: "Characteristics & Appearance", body: "The lingonberry is a low, evergreen dwarf shrub with leathery, glossy leaves. The berries grow in clusters and are white at first, turning bright red when they ripen in late summer.", image: "/images/vaxter_bar/lingon-detalj.png", alt: "Close-up of red lingonberries in a cluster", caption: "The glossy, leathery leaves are evergreen." },
          { heading: "Habitat & Behavior", body: "The lingonberry forms dense mats in pine and spruce forests and on heaths. It spreads with underground runners and can cover large areas of the forest floor.", image: "/images/vaxter_bar/lingon-miljo.png", alt: "Lingonberry mat on the forest floor", caption: "The shrub spreads with underground runners." },
          { heading: "Ecology & Use", body: "Lingonberries contain naturally preserving benzoic acid, which keeps them fresh for a long time. They are picked eagerly for jam and juice and are important food for many animals.", image: "/images/vaxter_bar/Lingon_Huvudbild_01.png", alt: "Lingonberry shrub with ripe berries", caption: "The benzoic acid keeps the berries fresh for long." },
        ],
      },
      de: {
        heroSubtitle: "Der robuste rote Zwergstrauch des Waldes",
        intro: "Die Preiselbeere ist eine unserer bekanntesten Waldbeeren. Sie bildet dichte Teppiche in Kiefern- und Fichtenwäldern und breitet sich mit unterirdischen Ausläufern aus.\n\nEntlang des Kustvägen bedeckt die Preiselbeere den Waldboden unter den Bäumen, und im Spätsommer leuchten die roten Beeren in Trauben zwischen den glänzenden Blättern.",
        quote: "Meine Beeren halten sich lange von selbst – ich trage die eigene Konservierung der Natur.",
        sections: [],
        detailsGrid: [
          { heading: "Merkmale & Aussehen", body: "Die Preiselbeere ist ein niedriger, immergrüner Zwergstrauch mit ledrigen, glänzenden Blättern. Die Beeren wachsen in Trauben und sind zunächst weiß, um reif im Spätsommer leuchtend rot zu werden.", image: "/images/vaxter_bar/lingon-detalj.png", alt: "Nahaufnahme roter Preiselbeeren in einer Traube", caption: "Die glänzenden, ledrigen Blätter sind immergrün." },
          { heading: "Lebensraum & Verhalten", body: "Die Preiselbeere bildet dichte Teppiche in Kiefern- und Fichtenwäldern und auf Heiden. Sie breitet sich mit unterirdischen Ausläufern aus und kann große Flächen des Waldbodens bedecken.", image: "/images/vaxter_bar/lingon-miljo.png", alt: "Preiselbeerteppich auf dem Waldboden", caption: "Der Strauch breitet sich mit unterirdischen Ausläufern aus." },
          { heading: "Ökologie & Verwendung", body: "Preiselbeeren enthalten natürlich konservierende Benzoesäure, wodurch sie lange frisch bleiben. Sie werden eifrig für Marmelade und Saft gesammelt und sind wichtige Nahrung für viele Tiere.", image: "/images/vaxter_bar/Lingon_Huvudbild_01.png", alt: "Preiselbeerstrauch mit reifen Beeren", caption: "Die Benzoesäure hält die Beeren lange frisch." },
        ],
      },
    },
    media: {
      heroImage: { url: "/images/vaxter_bar/Lingon_Huvudbild_01.png", alt: { sv: "Klarröda lingon i klase", en: "Bright red lingonberries in a cluster", de: "Leuchtend rote Preiselbeeren in einer Traube" } },
      galleryImages: [
        { src: "/images/vaxter_bar/Lingon_Huvudbild_01.png", alt: "Klarröda lingon i klase" },
        { src: "/images/vaxter_bar/lingon-detalj.png", alt: "Närbild på röda lingon i klase" },
        { src: "/images/vaxter_bar/lingon-miljo.png", alt: "Lingonris på skogsbotten" },
      ],
      detailImage: { url: "/images/vaxter_bar/lingon-miljo.png", alt: { sv: "Lingonris på en solig skogsbotten", en: "Lingonberry mat on a sunny forest floor", de: "Preiselbeerteppich auf einem sonnigen Waldboden" } },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: { title: "Prata med Lingonet", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Talk to the Lingonberry", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Sprich mit der Preiselbeere", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/vaxter_bar/Lingon_Huvudbild_01.png",
    chatAvatarAlt: "Lingonets ansikte",
    relatedSpecies: [
      { slug: "blabar", name: "Blåbär", latin: "Vaccinium myrtillus", image: "/images/species-blueberry.png" },
      { slug: "krakbar", name: "Kråkbär", latin: "Empetrum nigrum", image: "/images/vaxter_bar/Krakbar_Huvudbild_01.png" },
      { slug: "skogssmultron", name: "Skogssmultron", latin: "Fragaria vesca", image: "/images/vaxter_bar/Skogssmultron_Huvudbild_01.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler växter och bär", en: "Discover more plants and berries", de: "Weitere Pflanzen und Beeren entdecken" },
    relatedLinkLabel: { sv: "Visa alla växter & bär", en: "View all plants & berries", de: "Alle Pflanzen & Beeren anzeigen" },
  },
  krakbar: {
    id: "krakbar",
    scientificName: "Empetrum nigrum",
    category: { sv: "Växter", en: "Plants", de: "Pflanzen" },
    names: { sv: "Kråkbär", en: "Crowberry", de: "Krähenbeere" },
    meta: {
      sv: { title: "Kråkbär – Kustvägen Naturguide", description: "Fakta om kråkbär längs Kustvägen – ett mörkgrönt krypande ris med glänsande svarta bär, viktiga för fåglar i fjäll och kust." },
      en: { title: "Crowberry – Kustvägen Nature Guide", description: "Facts about the crowberry along Kustvägen – a dark green creeping shrub with glossy black berries, important for birds in mountains and coast." },
      de: { title: "Krähenbeere – Kustvägen Naturführer", description: "Fakten über die Krähenbeere am Kustvägen – ein dunkelgrüner kriechender Zwergstrauch mit glänzenden schwarzen Beeren, wichtig für Vögel in Gebirge und Küste." },
    },
    quickFacts: {
      sv: [
        { label: "Blad", value: "Nålliknande, vintergröna blad" },
        { label: "Mognad", value: "Juli–augusti" },
        { label: "Habitat", value: "Hedar, myrar och mager skogsmark" },
        { label: "Användning", value: "Saft, sylt och naturligt färgämne" },
      ],
      en: [
        { label: "Leaves", value: "Needle-like, evergreen leaves" },
        { label: "Ripening", value: "July–August" },
        { label: "Habitat", value: "Heaths, mires and poor forest ground" },
        { label: "Use", value: "Juice, jam and natural dye" },
      ],
      de: [
        { label: "Blätter", value: "Nadelartige, immergrüne Blätter" },
        { label: "Reife", value: "Juli–August" },
        { label: "Lebensraum", value: "Heiden, Moore und magerer Waldboden" },
        { label: "Verwendung", value: "Saft, Marmelade und natürlicher Farbstoff" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Hedens glänsande svarta bär",
        intro: "Kråkbär är ett mörkgrönt krypande ris med glänsande svarta bär. Bären är saftiga med en svagt syrlig smak och är viktiga för flera fågelarter i fjäll och kustområden.\n\nLängs Kustvägen breder kråkriset ut sig på magra hedar och hällmarker, där mattorna av mörka blad följer marken tätt.",
        quote: "Jag kryper tätt längs marken och bär svarta, saftiga bär åt fjällets fåglar.",
        sections: [],
        detailsGrid: [
          { heading: "Kännetecken & Utseende", body: "Kråkbäret är ett lågt, krypande ris med smala, nålliknande och vintergröna blad. Bären är glänsande svarta, saftiga och har en svagt syrlig smak.", image: "/images/vaxter_bar/krakbar-detalj.png", alt: "Närbild p�� glänsande svarta kråkbär", caption: "De nålliknande bladen är vintergröna." },
          { heading: "Växtplats & Beteende", body: "Kråkbäret trivs på hedar, myrar och mager skogsmark, ofta i fjäll- och kustområden. Det bildar täta, marktäckande mattor på karg och näringsfattig mark.", image: "/images/vaxter_bar/krakbar-miljo.png", alt: "Kråkris på öppen hed", caption: "Bildar täta mattor på karg mark." },
          { heading: "Ekologi & Användning", body: "Bären är viktig föda för flera fågelarter i fjäll och kust. För människan används kråkbär till saft och sylt, och de har traditionellt använts som naturligt färgämne.", image: "/images/vaxter_bar/Krakbar_Huvudbild_01.png", alt: "Kråkris med svarta bär", caption: "Viktig föda för fjällets och kustens fåglar." },
        ],
      },
      en: {
        heroSubtitle: "The heath's glossy black berry",
        intro: "The crowberry is a dark green creeping shrub with glossy black berries. The berries are juicy with a slightly tart taste and are important for several bird species in mountain and coastal areas.\n\nAlong Kustvägen the crowberry spreads across poor heaths and bedrock, where the mats of dark leaves hug the ground tightly.",
        quote: "I creep close along the ground and carry black, juicy berries for the mountain birds.",
        sections: [],
        detailsGrid: [
          { heading: "Characteristics & Appearance", body: "The crowberry is a low, creeping shrub with narrow, needle-like and evergreen leaves. The berries are glossy black, juicy and have a slightly tart taste.", image: "/images/vaxter_bar/krakbar-detalj.png", alt: "Close-up of glossy black crowberries", caption: "The needle-like leaves are evergreen." },
          { heading: "Habitat & Behavior", body: "The crowberry thrives on heaths, mires and poor forest ground, often in mountain and coastal areas. It forms dense, ground-covering mats on barren, nutrient-poor soil.", image: "/images/vaxter_bar/krakbar-miljo.png", alt: "Crowberry mat on an open heath", caption: "Forms dense mats on barren ground." },
          { heading: "Ecology & Use", body: "The berries are important food for several bird species in mountains and coast. For humans, crowberries are used for juice and jam, and they have traditionally been used as a natural dye.", image: "/images/vaxter_bar/Krakbar_Huvudbild_01.png", alt: "Crowberry shrub with black berries", caption: "Important food for mountain and coastal birds." },
        ],
      },
      de: {
        heroSubtitle: "Die glänzende schwarze Beere der Heide",
        intro: "Die Krähenbeere ist ein dunkelgrüner kriechender Zwergstrauch mit glänzenden schwarzen Beeren. Die Beeren sind saftig mit einem leicht säuerlichen Geschmack und wichtig für mehrere Vogelarten in Gebirgs- und Küstengebieten.\n\nEntlang des Kustvägen breitet sich die Krähenbeere über magere Heiden und Felsböden aus, wo die Teppiche dunkler Blätter dem Boden dicht folgen.",
        quote: "Ich krieche dicht am Boden und trage schwarze, saftige Beeren für die Vögel des Gebirges.",
        sections: [],
        detailsGrid: [
          { heading: "Merkmale & Aussehen", body: "Die Krähenbeere ist ein niedriger, kriechender Zwergstrauch mit schmalen, nadelartigen und immergrünen Blättern. Die Beeren sind glänzend schwarz, saftig und leicht säuerlich.", image: "/images/vaxter_bar/krakbar-detalj.png", alt: "Nahaufnahme glänzender schwarzer Krähenbeeren", caption: "Die nadelartigen Blätter sind immergrün." },
          { heading: "Lebensraum & Verhalten", body: "Die Krähenbeere gedeiht auf Heiden, Mooren und magerem Waldboden, oft in Gebirgs- und Küstengebieten. Sie bildet dichte, bodendeckende Teppiche auf kargem, nährstoffarmem Boden.", image: "/images/vaxter_bar/krakbar-miljo.png", alt: "Krähenbeerteppich auf offener Heide", caption: "Bildet dichte Teppiche auf kargem Boden." },
          { heading: "Ökologie & Verwendung", body: "Die Beeren sind wichtige Nahrung für mehrere Vogelarten in Gebirge und Küste. Für den Menschen werden Krähenbeeren zu Saft und Marmelade verarbeitet und dienten traditionell als natürlicher Farbstoff.", image: "/images/vaxter_bar/Krakbar_Huvudbild_01.png", alt: "Krähenbeerstrauch mit schwarzen Beeren", caption: "Wichtige Nahrung für die Vögel von Gebirge und Küste." },
        ],
      },
    },
    media: {
      heroImage: { url: "/images/vaxter_bar/Krakbar_Huvudbild_01.png", alt: { sv: "Glänsande svarta kråkbär bland barrlika blad", en: "Glossy black crowberries among needle-like leaves", de: "Glänzende schwarze Krähenbeeren zwischen nadelartigen Blättern" } },
      galleryImages: [
        { src: "/images/vaxter_bar/Krakbar_Huvudbild_01.png", alt: "Glänsande svarta kråkbär bland barrlika blad" },
        { src: "/images/vaxter_bar/krakbar-detalj.png", alt: "Närbild på glänsande svarta kråkbär" },
        { src: "/images/vaxter_bar/krakbar-miljo.png", alt: "Kr��kris på öppen hed" },
      ],
      detailImage: { url: "/images/vaxter_bar/krakbar-miljo.png", alt: { sv: "Kråkris på en öppen hed", en: "Crowberry mat on an open heath", de: "Krähenbeerteppich auf einer offenen Heide" } },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: { title: "Prata med Kråkbäret", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Talk to the Crowberry", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Sprich mit der Krähenbeere", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/vaxter_bar/Krakbar_Huvudbild_01.png",
    chatAvatarAlt: "Kråkbärets ansikte",
    relatedSpecies: [
      { slug: "lingon", name: "Lingon", latin: "Vaccinium vitis-idaea", image: "/images/vaxter_bar/Lingon_Huvudbild_01.png" },
      { slug: "ljung", name: "Ljung", latin: "Calluna vulgaris", image: "/images/vaxter_bar/Ljung_Huvudbild_01.png" },
      { slug: "blabar", name: "Blåbär", latin: "Vaccinium myrtillus", image: "/images/species-blueberry.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler växter och bär", en: "Discover more plants and berries", de: "Weitere Pflanzen und Beeren entdecken" },
    relatedLinkLabel: { sv: "Visa alla växter & bär", en: "View all plants & berries", de: "Alle Pflanzen & Beeren anzeigen" },
  },
  linnea: {
    id: "linnea",
    scientificName: "Linnaea borealis",
    category: { sv: "Växter", en: "Plants", de: "Pflanzen" },
    names: { sv: "Linnéa", en: "Twinflower", de: "Moosglöckchen" },
    meta: {
      sv: { title: "Linnéa – Kustvägen Naturguide", description: "Fakta om linnéan längs Kustvägen – Carl von Linnés favoritblomma med parvisa, klockformade rosa blommor i mossrika barrskogar." },
      en: { title: "Twinflower – Kustvägen Nature Guide", description: "Facts about the twinflower along Kustvägen – Carl Linnaeus's favorite flower with paired, bell-shaped pink blooms in mossy conifer forests." },
      de: { title: "Moosglöckchen – Kustvägen Naturführer", description: "Fakten über das Moosglöckchen am Kustvägen – Carl von Linnés Lieblingsblume mit paarigen, glockenförmigen rosa Blüten in moosreichen Nadelwäldern." },
    },
    quickFacts: {
      sv: [
        { label: "Landskapsblomma", value: "Småland" },
        { label: "Blomning", value: "Juni–juli" },
        { label: "Utseende", value: "Parvisa, klockformade rosa blommor" },
        { label: "Doft", value: "Stark och mandelliknande på kvällen" },
      ],
      en: [
        { label: "Provincial flower", value: "Småland" },
        { label: "Flowering", value: "June–July" },
        { label: "Appearance", value: "Paired, bell-shaped pink flowers" },
        { label: "Scent", value: "Strong and almond-like in the evening" },
      ],
      de: [
        { label: "Provinzblume", value: "Småland" },
        { label: "Blüte", value: "Juni–Juli" },
        { label: "Aussehen", value: "Paarige, glockenförmige rosa Blüten" },
        { label: "Duft", value: "Stark und mandelartig am Abend" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Carl von Linnés favoritblomma",
        intro: "Linnéan är uppkallad efter Carl von Linné och var hans personliga favoritblomma. Den växer som en fin krypande rev i gamla mossrika barrskogar.\n\nLängs Kustvägen hittar man linnéan i skuggiga, orörda skogar, där de parvisa rosa klockorna nickar strax ovanför mossan.",
        quote: "Jag bär den store botanikerns namn och nickar i par ovanför den gamla skogens mossa.",
        sections: [],
        detailsGrid: [
          { heading: "Kännetecken & Utseende", body: "Linnéan känns igen på sina parvisa, klockformade rosa blommor som hänger nickande på tunna stjälkar. Den är en späd, städsegrön krypande ris med små rundade blad.", image: "/images/vaxter_bar/linnea-detalj.png", alt: "Närbild på parvisa rosa linnéablommor", caption: "De rosa blomklockorna hänger alltid parvis." },
          { heading: "Växtplats & Beteende", body: "Linnéan trivs i gamla, mossrika barrskogar och sprider sig som en fin krypande rev längs marken. Den är känslig för störning och trivs bäst i orörda, skuggiga miljöer.", image: "/images/vaxter_bar/linnea-miljo.png", alt: "Linnéa som kryper över skogsmossa", caption: "Kryper som en fin rev i gammal mossrik skog." },
          { heading: "Ekologi & Användning", body: "På kvällen sprider linnéan en stark, mandelliknande doft som lockar pollinerande insekter. Den är landskapsblomma för Småland och en älskad symbol för svensk naturhistoria.", image: "/images/vaxter_bar/Linnea_Huvudbild_01.png", alt: "Blommande linnéa i barrskog", caption: "Doftar starkt och mandellikt på kvällen." },
        ],
      },
      en: {
        heroSubtitle: "Carl Linnaeus's favorite flower",
        intro: "The twinflower is named after Carl Linnaeus and was his personal favorite flower. It grows as a delicate creeping runner in old, mossy conifer forests.\n\nAlong Kustvägen you find the twinflower in shady, undisturbed forests, where the paired pink bells nod just above the moss.",
        quote: "I carry the great botanist's name and nod in pairs above the old forest's moss.",
        sections: [],
        detailsGrid: [
          { heading: "Characteristics & Appearance", body: "The twinflower is recognized by its paired, bell-shaped pink flowers that hang nodding on thin stalks. It is a slender, evergreen creeping shrub with small rounded leaves.", image: "/images/vaxter_bar/linnea-detalj.png", alt: "Close-up of paired pink twinflowers", caption: "The pink bells always hang in pairs." },
          { heading: "Habitat & Behavior", body: "The twinflower thrives in old, mossy conifer forests and spreads as a delicate creeping runner along the ground. It is sensitive to disturbance and does best in undisturbed, shady settings.", image: "/images/vaxter_bar/linnea-miljo.png", alt: "Twinflower creeping over forest moss", caption: "Creeps as a delicate runner in old mossy forest." },
          { heading: "Ecology & Use", body: "In the evening the twinflower releases a strong, almond-like scent that attracts pollinating insects. It is the provincial flower of Småland and a beloved symbol of Swedish natural history.", image: "/images/vaxter_bar/Linnea_Huvudbild_01.png", alt: "Flowering twinflower in conifer forest", caption: "Smells strongly and almond-like in the evening." },
        ],
      },
      de: {
        heroSubtitle: "Carl von Linnés Lieblingsblume",
        intro: "Das Moosglöckchen ist nach Carl von Linné benannt und war seine persönliche Lieblingsblume. Es wächst als zarter kriechender Ausläufer in alten, moosreichen Nadelwäldern.\n\nEntlang des Kustvägen findet man das Moosglöckchen in schattigen, unberührten Wäldern, wo die paarigen rosa Glocken knapp über dem Moos nicken.",
        quote: "Ich trage den Namen des großen Botanikers und nicke paarweise über dem Moos des alten Waldes.",
        sections: [],
        detailsGrid: [
          { heading: "Merkmale & Aussehen", body: "Das Moosglöckchen ist an seinen paarigen, glockenförmigen rosa Blüten zu erkennen, die nickend an dünnen Stielen hängen. Es ist ein zarter, immergrüner kriechender Zwergstrauch mit kleinen rundlichen Blättern.", image: "/images/vaxter_bar/linnea-detalj.png", alt: "Nahaufnahme paariger rosa Moosglöckchenblüten", caption: "Die rosa Glocken hängen stets paarweise." },
          { heading: "Lebensraum & Verhalten", body: "Das Moosglöckchen gedeiht in alten, moosreichen Nadelwäldern und breitet sich als zarter kriechender Ausläufer über den Boden aus. Es ist störungsempfindlich und gedeiht am besten in unberührten, schattigen Umgebungen.", image: "/images/vaxter_bar/linnea-miljo.png", alt: "Moosglöckchen kriecht über Waldmoos", caption: "Kriecht als zarter Ausläufer im alten moosreichen Wald." },
          { heading: "Ökologie & Verwendung", body: "Am Abend verströmt das Moosglöckchen einen starken, mandelartigen Duft, der bestäubende Insekten anlockt. Es ist die Provinzblume von Småland und ein geliebtes Symbol der schwedischen Naturgeschichte.", image: "/images/vaxter_bar/Linnea_Huvudbild_01.png", alt: "Blühendes Moosglöckchen im Nadelwald", caption: "Duftet am Abend stark und mandelartig." },
        ],
      },
    },
    media: {
      heroImage: { url: "/images/vaxter_bar/Linnea_Huvudbild_01.png", alt: { sv: "Parvisa rosa linnéablommor över mossa", en: "Paired pink twinflowers above moss", de: "Paarige rosa Moosglöckchenblüten über Moos" } },
      galleryImages: [
        { src: "/images/vaxter_bar/Linnea_Huvudbild_01.png", alt: "Parvisa rosa linnéablommor över mossa" },
        { src: "/images/vaxter_bar/linnea-detalj.png", alt: "Närbild på parvisa rosa linnéablommor" },
        { src: "/images/vaxter_bar/linnea-miljo.png", alt: "Linnéa som kryper över skogsmossa" },
      ],
      detailImage: { url: "/images/vaxter_bar/linnea-miljo.png", alt: { sv: "Linnéa i en mossrik barrskog", en: "Twinflower in a mossy conifer forest", de: "Moosglöckchen in einem moosreichen Nadelwald" } },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: { title: "Prata med Linnéan", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Talk to the Twinflower", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Sprich mit dem Moosglöckchen", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/vaxter_bar/Linnea_Huvudbild_01.png",
    chatAvatarAlt: "Linnéans ansikte",
    relatedSpecies: [
      { slug: "harsyra", name: "Harsyra", latin: "Oxalis acetosella", image: "/images/vaxter_bar/Harsyra_Huvudbild_01.png" },
      { slug: "angskovall", name: "Ängskovall", latin: "Melampyrum pratense", image: "/images/vaxter_bar/Angskovall_Huvudbild_01.png" },
      { slug: "liten-blaklocka", name: "Liten blåklocka", latin: "Campanula rotundifolia", image: "/images/vaxter_bar/Liten_Blaklocka_Huvudbild_01.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler växter och bär", en: "Discover more plants and berries", de: "Weitere Pflanzen und Beeren entdecken" },
    relatedLinkLabel: { sv: "Visa alla växter & bär", en: "View all plants & berries", de: "Alle Pflanzen & Beeren anzeigen" },
  },
  humleblomster: {
    id: "humleblomster",
    scientificName: "Geum rivale",
    category: { sv: "Växter", en: "Plants", de: "Pflanzen" },
    names: { sv: "Humleblomster", en: "Water Avens", de: "Bach-Nelkenwurz" },
    meta: {
      sv: { title: "Humleblomster – Kustvägen Naturguide", description: "Fakta om humleblomster längs Kustvägen – nikande rödbruna blomklockor i fuktiga ängar och bäckdrag som humlorna älskar." },
      en: { title: "Water Avens – Kustvägen Nature Guide", description: "Facts about water avens along Kustvägen – nodding reddish-brown flower bells in damp meadows and streams that bumblebees love." },
      de: { title: "Bach-Nelkenwurz – Kustvägen Naturführer", description: "Fakten über die Bach-Nelkenwurz am Kustvägen – nickende rotbraune Blütenglocken an feuchten Wiesen und Bächen, die Hummeln lieben." },
    },
    quickFacts: {
      sv: [
        { label: "Blomning", value: "Maj–juli" },
        { label: "Utseende", value: "Nikande, klocklika rödbruna blommor" },
        { label: "Habitat", value: "Fuktiga ängar, bäckdrag och skogsbryn" },
        { label: "Historia", value: "Rötterna användes förr som chokladersättning" },
      ],
      en: [
        { label: "Flowering", value: "May–July" },
        { label: "Appearance", value: "Nodding, bell-like reddish-brown flowers" },
        { label: "Habitat", value: "Damp meadows, streams and forest edges" },
        { label: "History", value: "The roots were once used as a chocolate substitute" },
      ],
      de: [
        { label: "Blüte", value: "Mai–Juli" },
        { label: "Aussehen", value: "Nickende, glockenartige rotbraune Blüten" },
        { label: "Lebensraum", value: "Feuchte Wiesen, Bäche und Waldränder" },
        { label: "Geschichte", value: "Die Wurzeln dienten früher als Schokoladenersatz" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Bäckdragens nikande klocka",
        intro: "Humleblomster är lätt att känna igen på sina hängande blomklockor. Växten har korta, håriga stjälkar och gillas av humlor som söker nektar.\n\nLängs Kustvägen står humleblomster i fuktiga ängar och längs bäckar, där de rödbruna klockorna nickar i grönskan.",
        quote: "Mina nikande klockor bjuder humlorna på nektar vid bäckens strand.",
        sections: [],
        detailsGrid: [
          { heading: "Kännetecken & Utseende", body: "Humleblomster känns igen på sina nikande, klocklika blommor i dova rödbruna och rosa toner. Stjälkarna är korta och håriga och blomman hänger ofta ned mot marken.", image: "/images/vaxter_bar/humleblomster-detalj.png", alt: "Närbild på nikande rödbrun humleblomsterblomma", caption: "De klocklika blommorna hänger nikande." },
          { heading: "Växtplats & Beteende", body: "Växten trivs i fuktiga ängar, längs bäckdrag och i skogsbryn. Den söker sig till fuktig, näringsrik mark och blommar tidigt under försommaren.", image: "/images/vaxter_bar/humleblomster-miljo.png", alt: "Humleblomster i fuktig äng", caption: "Trivs i fukt vid ängar och bäckdrag." },
          { heading: "Ekologi & Användning", body: "Humlor uppskattar blommorna och söker sig gärna till dem för nektar. Rötterna har historiskt använts som en chokladliknande ersättning.", image: "/images/vaxter_bar/Humleblomster_Huvudbild_01.png", alt: "Humleblomster med blommor och blad", caption: "Rötterna användes förr som chokladersättning." },
        ],
      },
      en: {
        heroSubtitle: "The nodding bell of the streams",
        intro: "Water avens is easy to recognize by its hanging flower bells. The plant has short, hairy stems and is favored by bumblebees seeking nectar.\n\nAlong Kustvägen water avens stands in damp meadows and along streams, where the reddish-brown bells nod in the greenery.",
        quote: "My nodding bells offer the bumblebees nectar by the stream's edge.",
        sections: [],
        detailsGrid: [
          { heading: "Characteristics & Appearance", body: "Water avens is recognized by its nodding, bell-like flowers in dusky reddish-brown and pink tones. The stems are short and hairy, and the flower often hangs down toward the ground.", image: "/images/vaxter_bar/humleblomster-detalj.png", alt: "Close-up of a nodding reddish-brown water avens flower", caption: "The bell-like flowers hang nodding." },
          { heading: "Habitat & Behavior", body: "The plant thrives in damp meadows, along streams and at forest edges. It seeks moist, nutrient-rich ground and flowers early in the summer.", image: "/images/vaxter_bar/humleblomster-miljo.png", alt: "Water avens in a damp meadow", caption: "Thrives in moisture by meadows and streams." },
          { heading: "Ecology & Use", body: "Bumblebees appreciate the flowers and readily visit them for nectar. The roots have historically been used as a chocolate-like substitute.", image: "/images/vaxter_bar/Humleblomster_Huvudbild_01.png", alt: "Water avens with flowers and leaves", caption: "The roots were once used as a chocolate substitute." },
        ],
      },
      de: {
        heroSubtitle: "Die nickende Glocke der Bäche",
        intro: "Die Bach-Nelkenwurz ist an ihren hängenden Blütenglocken leicht zu erkennen. Die Pflanze hat kurze, behaarte Stängel und wird von Hummeln geschätzt, die Nektar suchen.\n\nEntlang des Kustvägen steht die Bach-Nelkenwurz an feuchten Wiesen und Bächen, wo die rotbraunen Glocken im Grün nicken.",
        quote: "Meine nickenden Glocken bieten den Hummeln Nektar am Bachufer.",
        sections: [],
        detailsGrid: [
          { heading: "Merkmale & Aussehen", body: "Die Bach-Nelkenwurz ist an ihren nickenden, glockenartigen Blüten in matten rotbraunen und rosa Tönen zu erkennen. Die Stängel sind kurz und behaart, und die Blüte hängt oft zum Boden herab.", image: "/images/vaxter_bar/humleblomster-detalj.png", alt: "Nahaufnahme einer nickenden rotbraunen Bach-Nelkenwurz-Blüte", caption: "Die glockenartigen Blüten hängen nickend." },
          { heading: "Lebensraum & Verhalten", body: "Die Pflanze gedeiht auf feuchten Wiesen, an Bächen und Waldrändern. Sie sucht feuchten, nährstoffreichen Boden und blüht früh im Sommer.", image: "/images/vaxter_bar/humleblomster-miljo.png", alt: "Bach-Nelkenwurz auf einer feuchten Wiese", caption: "Gedeiht in Feuchtigkeit an Wiesen und Bächen." },
          { heading: "Ökologie & Verwendung", body: "Hummeln schätzen die Blüten und besuchen sie gern für Nektar. Die Wurzeln wurden historisch als schokoladenähnlicher Ersatz verwendet.", image: "/images/vaxter_bar/Humleblomster_Huvudbild_01.png", alt: "Bach-Nelkenwurz mit Blüten und Bl��ttern", caption: "Die Wurzeln dienten früher als Schokoladenersatz." },
        ],
      },
    },
    media: {
      heroImage: { url: "/images/vaxter_bar/Humleblomster_Huvudbild_01.png", alt: { sv: "Nikande rödbruna humleblomster i grönska", en: "Nodding reddish-brown water avens in greenery", de: "Nickende rotbraune Bach-Nelkenwurz im Grün" } },
      galleryImages: [
        { src: "/images/vaxter_bar/Humleblomster_Huvudbild_01.png", alt: "Nikande rödbruna humleblomster i grönska" },
        { src: "/images/vaxter_bar/humleblomster-detalj.png", alt: "Närbild på nikande rödbrun humleblomsterblomma" },
        { src: "/images/vaxter_bar/humleblomster-miljo.png", alt: "Humleblomster i fuktig äng" },
      ],
      detailImage: { url: "/images/vaxter_bar/humleblomster-miljo.png", alt: { sv: "Humleblomster i en fuktig äng vid bäck", en: "Water avens in a damp meadow by a stream", de: "Bach-Nelkenwurz auf einer feuchten Wiese am Bach" } },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: { title: "Prata med Humleblomstret", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Talk to the Water Avens", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Sprich mit der Bach-Nelkenwurz", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/vaxter_bar/Humleblomster_Huvudbild_01.png",
    chatAvatarAlt: "Humleblomstrets ansikte",
    relatedSpecies: [
      { slug: "rodblara", name: "Rödblära", latin: "Silene dioica", image: "/images/vaxter_bar/Rodblara_Huvudbild_01.png" },
      { slug: "liten-blaklocka", name: "Liten blåklocka", latin: "Campanula rotundifolia", image: "/images/vaxter_bar/Liten_Blaklocka_Huvudbild_01.png" },
      { slug: "akervadd", name: "Åkervädd", latin: "Knautia arvensis", image: "/images/vaxter_bar/Akervadd_Huvudbild_01.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler växter och bär", en: "Discover more plants and berries", de: "Weitere Pflanzen und Beeren entdecken" },
    relatedLinkLabel: { sv: "Visa alla växter & bär", en: "View all plants & berries", de: "Alle Pflanzen & Beeren anzeigen" },
  },
  harsyra: {
    id: "harsyra",
    scientificName: "Oxalis acetosella",
    category: { sv: "Växter", en: "Plants", de: "Pflanzen" },
    names: { sv: "Harsyra", en: "Wood Sorrel", de: "Wald-Sauerklee" },
    meta: {
      sv: { title: "Harsyra – Kustvägen Naturguide", description: "Fakta om harsyra längs Kustvägen – de hjärtformade bladen täcker skuggig skogsbotten och viker ihop sig vid regn och mörker." },
      en: { title: "Wood Sorrel – Kustvägen Nature Guide", description: "Facts about wood sorrel along Kustvägen – the heart-shaped leaves cover shady forest floor and fold up in rain and darkness." },
      de: { title: "Wald-Sauerklee – Kustvägen Naturführer", description: "Fakten über den Wald-Sauerklee am Kustvägen – die herzförmigen Blätter bedecken den schattigen Waldboden und falten sich bei Regen und Dunkelheit." },
    },
    quickFacts: {
      sv: [
        { label: "Smak", value: "Syrlig (innehåller oxalsyra)" },
        { label: "Blad", value: "Hjärtformade, tretaliga blad som viker ihop sig vid regn/mörker" },
        { label: "Blomning", value: "Maj–juni (vita blommor med lila ådror)" },
        { label: "Habitat", value: "Skuggig och fuktig skogsmark" },
      ],
      en: [
        { label: "Taste", value: "Sour (contains oxalic acid)" },
        { label: "Leaves", value: "Heart-shaped, trifoliate leaves that fold up in rain/darkness" },
        { label: "Flowering", value: "May–June (white flowers with purple veins)" },
        { label: "Habitat", value: "Shady and damp forest ground" },
      ],
      de: [
        { label: "Geschmack", value: "Sauer (enthält Oxalsäure)" },
        { label: "Blätter", value: "Herzförmige, dreiteilige Blätter, die sich bei Regen/Dunkelheit falten" },
        { label: "Blüte", value: "Mai–Juni (weiße Blüten mit lila Adern)" },
        { label: "Lebensraum", value: "Schattiger und feuchter Waldboden" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skogsbottnens syrliga matta",
        intro: "Harsyra täcker ofta skogsbotten i skuggiga barrskogar. Bladen reagerar känsligt på starkt solljus och regn genom att fälla ihop sina tre bladhalvor.\n\nLängs Kustvägen breder harsyran ut sig som en tät grön matta i skuggan under granarna, prickad av små vita blommor på försommaren.",
        quote: "Vid regn och mörker viker jag ihop mina hjärtformade blad och vilar.",
        sections: [],
        detailsGrid: [
          { heading: "Kännetecken & Utseende", body: "Harsyra har hjärtformade, tretaliga blad som liknar klöver och små vita blommor med tunna lila ådror. Bladen smakar syrligt eftersom de innehåller oxalsyra.", image: "/images/vaxter_bar/harsyra-detalj.png", alt: "Närbild på vit harsyreblomma med lila ådror", caption: "Blommorna är vita med tunna lila ådror." },
          { heading: "Växtplats & Beteende", body: "Harsyra trivs i skuggig och fuktig skogsmark och täcker ofta stora ytor av skogsbotten. Bladen fäller ihop sina tre halvor vid starkt solljus, regn och mörker.", image: "/images/vaxter_bar/harsyra-miljo.png", alt: "Harsyra täcker skuggig skogsbotten", caption: "Bladen viker ihop sig vid regn och mörker." },
          { heading: "Ekologi & Användning", body: "Den syrliga smaken kommer från oxalsyra och gör bladen lätta att känna igen. Harsyra är en viktig del av markfloran i skuggiga barrskogar.", image: "/images/vaxter_bar/Harsyra_Huvudbild_01.png", alt: "Harsyra med blad och blommor", caption: "Den syrliga smaken kommer från oxalsyra." },
        ],
      },
      en: {
        heroSubtitle: "The forest floor's sour carpet",
        intro: "Wood sorrel often covers the forest floor in shady conifer forests. The leaves react sensitively to strong sunlight and rain by folding up their three leaflets.\n\nAlong Kustvägen wood sorrel spreads as a dense green carpet in the shade beneath the spruces, dotted with small white flowers in early summer.",
        quote: "In rain and darkness I fold up my heart-shaped leaves and rest.",
        sections: [],
        detailsGrid: [
          { heading: "Characteristics & Appearance", body: "Wood sorrel has heart-shaped, trifoliate leaves resembling clover and small white flowers with thin purple veins. The leaves taste sour because they contain oxalic acid.", image: "/images/vaxter_bar/harsyra-detalj.png", alt: "Close-up of a white wood sorrel flower with purple veins", caption: "The flowers are white with thin purple veins." },
          { heading: "Habitat & Behavior", body: "Wood sorrel thrives on shady and damp forest ground and often covers large areas of the forest floor. The leaves fold up their three leaflets in strong sunlight, rain and darkness.", image: "/images/vaxter_bar/harsyra-miljo.png", alt: "Wood sorrel covering shady forest floor", caption: "The leaves fold up in rain and darkness." },
          { heading: "Ecology & Use", body: "The sour taste comes from oxalic acid and makes the leaves easy to recognize. Wood sorrel is an important part of the ground flora in shady conifer forests.", image: "/images/vaxter_bar/Harsyra_Huvudbild_01.png", alt: "Wood sorrel with leaves and flowers", caption: "The sour taste comes from oxalic acid." },
        ],
      },
      de: {
        heroSubtitle: "Der saure Teppich des Waldbodens",
        intro: "Der Wald-Sauerklee bedeckt oft den Waldboden in schattigen Nadelwäldern. Die Blätter reagieren empfindlich auf starkes Sonnenlicht und Regen, indem sie ihre drei Blättchen zusammenfalten.\n\nEntlang des Kustvägen breitet sich der Sauerklee als dichter grüner Teppich im Schatten unter den Fichten aus, im Frühsommer mit kleinen weißen Blüten gesprenkelt.",
        quote: "Bei Regen und Dunkelheit falte ich meine herzförmigen Blätter zusammen und ruhe.",
        sections: [],
        detailsGrid: [
          { heading: "Merkmale & Aussehen", body: "Der Wald-Sauerklee hat herzförmige, dreiteilige Blätter, die an Klee erinnern, und kleine weiße Blüten mit dünnen lila Adern. Die Blätter schmecken sauer, da sie Oxalsäure enthalten.", image: "/images/vaxter_bar/harsyra-detalj.png", alt: "Nahaufnahme einer weißen Sauerklee-Blüte mit lila Adern", caption: "Die Blüten sind weiß mit dünnen lila Adern." },
          { heading: "Lebensraum & Verhalten", body: "Der Wald-Sauerklee gedeiht auf schattigem und feuchtem Waldboden und bedeckt oft große Flächen. Die Blätter falten ihre drei Blättchen bei starkem Sonnenlicht, Regen und Dunkelheit zusammen.", image: "/images/vaxter_bar/harsyra-miljo.png", alt: "Sauerklee bedeckt schattigen Waldboden", caption: "Die Blätter falten sich bei Regen und Dunkelheit." },
          { heading: "Ökologie & Verwendung", body: "Der saure Geschmack stammt von Oxalsäure und macht die Blätter leicht erkennbar. Der Wald-Sauerklee ist ein wichtiger Teil der Bodenflora in schattigen Nadelwäldern.", image: "/images/vaxter_bar/Harsyra_Huvudbild_01.png", alt: "Sauerklee mit Blättern und Blüten", caption: "Der saure Geschmack stammt von Oxalsäure." },
        ],
      },
    },
    media: {
      heroImage: { url: "/images/vaxter_bar/Harsyra_Huvudbild_01.png", alt: { sv: "Harsyra med hjärtformade blad och vita blommor", en: "Wood sorrel with heart-shaped leaves and white flowers", de: "Wald-Sauerklee mit herzförmigen Blättern und weißen Blüten" } },
      galleryImages: [
        { src: "/images/vaxter_bar/Harsyra_Huvudbild_01.png", alt: "Harsyra med hjärtformade blad och vita blommor" },
        { src: "/images/vaxter_bar/harsyra-detalj.png", alt: "Närbild på vit harsyreblomma med lila ådror" },
        { src: "/images/vaxter_bar/harsyra-miljo.png", alt: "Harsyra täcker skuggig skogsbotten" },
      ],
      detailImage: { url: "/images/vaxter_bar/harsyra-miljo.png", alt: { sv: "Harsyra på en skuggig skogsbotten", en: "Wood sorrel on a shady forest floor", de: "Wald-Sauerklee auf einem schattigen Waldboden" } },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: { title: "Prata med Harsyran", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Talk to the Wood Sorrel", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Sprich mit dem Wald-Sauerklee", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/vaxter_bar/Harsyra_Huvudbild_01.png",
    chatAvatarAlt: "Harsyrans ansikte",
    relatedSpecies: [
      { slug: "linnea", name: "Linnéa", latin: "Linnaea borealis", image: "/images/vaxter_bar/Linnea_Huvudbild_01.png" },
      { slug: "angskovall", name: "Ängskovall", latin: "Melampyrum pratense", image: "/images/vaxter_bar/Angskovall_Huvudbild_01.png" },
      { slug: "rundsileshar", name: "Rundsileshår", latin: "Drosera rotundifolia", image: "/images/vaxter_bar/Rundsileshar_Huvudbild_01.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler växter och bär", en: "Discover more plants and berries", de: "Weitere Pflanzen und Beeren entdecken" },
    relatedLinkLabel: { sv: "Visa alla växter & bär", en: "View all plants & berries", de: "Alle Pflanzen & Beeren anzeigen" },
  },
  ljung: {
    id: "ljung",
    scientificName: "Calluna vulgaris",
    category: { sv: "Växter", en: "Plants", de: "Pflanzen" },
    names: { sv: "Ljung", en: "Heather", de: "Heidekraut" },
    meta: {
      sv: { title: "Ljung – Kustvägen Naturguide", description: "Fakta om ljung längs Kustvägen – det förvedade dvärgriset som färgar hedar rosa-lila och är en viktig nektarkälla sent på säsongen." },
      en: { title: "Heather – Kustvägen Nature Guide", description: "Facts about heather along Kustvägen – the woody dwarf shrub that colors heaths pink-purple and is an important late-season nectar source." },
      de: { title: "Heidekraut – Kustvägen Naturführer", description: "Fakten über das Heidekraut am Kustvägen – der verholzte Zwergstrauch, der Heiden rosa-lila färbt und eine wichtige späte Nektarquelle ist." },
    },
    quickFacts: {
      sv: [
        { label: "Landskapsblomma", value: "Västergötland" },
        { label: "Blomning", value: "Sensommar till höst (augusti–september)" },
        { label: "Färg", value: "Rosa till lila blommor" },
        { label: "Ekologi", value: "Viktig nektarkälla för bin sent på säsongen" },
      ],
      en: [
        { label: "Provincial flower", value: "Västergötland" },
        { label: "Flowering", value: "Late summer to autumn (August–September)" },
        { label: "Color", value: "Pink to purple flowers" },
        { label: "Ecology", value: "Important nectar source for bees late in the season" },
      ],
      de: [
        { label: "Provinzblume", value: "Västergötland" },
        { label: "Blüte", value: "Spätsommer bis Herbst (August–September)" },
        { label: "Farbe", value: "Rosa bis lila Blüten" },
        { label: "Ökologie", value: "Wichtige Nektarquelle für Bienen spät in der Saison" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Hedens rosa-lila täcke",
        intro: "Ljungen bildar karakteristiska hedar på karga och torra marker. Det är ett förvedat dvärgris som håller kvar sina blommor långt in på hösten.\n\nLängs Kustv��gen färgar ljungen öppna hällmarker och hedar i rosa och lila under sensommaren, när det mesta annat har blommat över.",
        quote: "När sommaren tar slut färgar jag heden lila och bjuder bina på höstens sista nektar.",
        sections: [],
        detailsGrid: [
          { heading: "Kännetecken & Utseende", body: "Ljungen är ett lågt, f��rvedat dvärgris med tätt sittande, fjällika små blad och spiror av små rosa till lila blommor. Blommorna sitter kvar länge, även efter att de vissnat.", image: "/images/vaxter_bar/ljung-detalj.png", alt: "Närbild på rosa-lila ljungblommor", caption: "Spiror av små rosa till lila blommor." },
          { heading: "Växtplats & Beteende", body: "Ljungen bildar karakteristiska hedar på karga, torra och magra marker. Den är ett förvedat dvärgris som tål brand och hårt väder och kan dominera stora öppna ytor.", image: "/images/vaxter_bar/ljung-miljo.png", alt: "Blommande ljunghed", caption: "Bildar vidsträckta hedar på karg mark." },
          { heading: "Ekologi & Användning", body: "Ljungen blommar sent på säsongen och är då en viktig nektarkälla för bin och andra pollinatörer. Den är landskapsblomma för Västergötland.", image: "/images/vaxter_bar/Ljung_Huvudbild_01.png", alt: "Ljung med rosa-lila blommor", caption: "Viktig sen nektarkälla för bin och humlor." },
        ],
      },
      en: {
        heroSubtitle: "The heath's pink-purple blanket",
        intro: "Heather forms characteristic heaths on barren, dry ground. It is a woody dwarf shrub that keeps its flowers far into the autumn.\n\nAlong Kustvägen heather colors open bedrock and heaths pink and purple in late summer, when most everything else has finished flowering.",
        quote: "When summer ends I color the heath purple and offer the bees autumn's last nectar.",
        sections: [],
        detailsGrid: [
          { heading: "Characteristics & Appearance", body: "Heather is a low, woody dwarf shrub with densely packed, scale-like small leaves and spikes of tiny pink to purple flowers. The flowers persist for a long time, even after they wither.", image: "/images/vaxter_bar/ljung-detalj.png", alt: "Close-up of pink-purple heather flowers", caption: "Spikes of tiny pink to purple flowers." },
          { heading: "Habitat & Behavior", body: "Heather forms characteristic heaths on barren, dry and poor ground. It is a woody dwarf shrub that tolerates fire and harsh weather and can dominate large open areas.", image: "/images/vaxter_bar/ljung-miljo.png", alt: "Flowering heather heath", caption: "Forms extensive heaths on barren ground." },
          { heading: "Ecology & Use", body: "Heather flowers late in the season and is then an important nectar source for bees and other pollinators. It is the provincial flower of Västergötland.", image: "/images/vaxter_bar/Ljung_Huvudbild_01.png", alt: "Heather with pink-purple flowers", caption: "Important late nectar source for bees and bumblebees." },
        ],
      },
      de: {
        heroSubtitle: "Die rosa-lila Decke der Heide",
        intro: "Das Heidekraut bildet charakteristische Heiden auf kargem, trockenem Boden. Es ist ein verholzter Zwergstrauch, der seine Blüten bis weit in den Herbst behält.\n\nEntlang des Kustvägen färbt das Heidekraut offene Felsböden und Heiden im Spätsommer rosa und lila, wenn das meiste andere verblüht ist.",
        quote: "Wenn der Sommer endet, färbe ich die Heide lila und biete den Bienen den letzten Nektar des Herbstes.",
        sections: [],
        detailsGrid: [
          { heading: "Merkmale & Aussehen", body: "Das Heidekraut ist ein niedriger, verholzter Zwergstrauch mit dicht sitzenden, schuppenartigen kleinen Blättern und Ähren aus winzigen rosa bis lila Blüten. Die Blüten bleiben lange erhalten, auch nach dem Verwelken.", image: "/images/vaxter_bar/ljung-detalj.png", alt: "Nahaufnahme rosa-lila Heidekrautblüten", caption: "Ähren aus winzigen rosa bis lila Blüten." },
          { heading: "Lebensraum & Verhalten", body: "Das Heidekraut bildet charakteristische Heiden auf kargem, trockenem und magerem Boden. Es ist ein verholzter Zwergstrauch, der Feuer und raues Wetter verträgt und große offene Flächen dominieren kann.", image: "/images/vaxter_bar/ljung-miljo.png", alt: "Blühende Heidekrautheide", caption: "Bildet weite Heiden auf kargem Boden." },
          { heading: "Ökologie & Verwendung", body: "Das Heidekraut blüht spät in der Saison und ist dann eine wichtige Nektarquelle für Bienen und andere Bestäuber. Es ist die Provinzblume von Västergötland.", image: "/images/vaxter_bar/Ljung_Huvudbild_01.png", alt: "Heidekraut mit rosa-lila Blüten", caption: "Wichtige späte Nektarquelle für Bienen und Hummeln." },
        ],
      },
    },
    media: {
      heroImage: { url: "/images/vaxter_bar/Ljung_Huvudbild_01.png", alt: { sv: "Blommande ljung i rosa och lila", en: "Flowering heather in pink and purple", de: "Blühendes Heidekraut in Rosa und Lila" } },
      galleryImages: [
        { src: "/images/vaxter_bar/Ljung_Huvudbild_01.png", alt: "Blommande ljung i rosa och lila" },
        { src: "/images/vaxter_bar/ljung-detalj.png", alt: "Närbild på rosa-lila ljungblommor" },
        { src: "/images/vaxter_bar/ljung-miljo.png", alt: "Blommande ljunghed" },
      ],
      detailImage: { url: "/images/vaxter_bar/ljung-miljo.png", alt: { sv: "En vidsträckt blommande ljunghed", en: "An extensive flowering heather heath", de: "Eine weite blühende Heidekrautheide" } },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: { title: "Prata med Ljungen", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Talk to the Heather", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Sprich mit dem Heidekraut", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/vaxter_bar/Ljung_Huvudbild_01.png",
    chatAvatarAlt: "Ljungens ansikte",
    relatedSpecies: [
      { slug: "enbar", name: "Enbär", latin: "Juniperus communis", image: "/images/vaxter_bar/Enbar_Huvudbild_01.png" },
      { slug: "krakbar", name: "Kråkbär", latin: "Empetrum nigrum", image: "/images/vaxter_bar/Krakbar_Huvudbild_01.png" },
      { slug: "liten-blaklocka", name: "Liten blåklocka", latin: "Campanula rotundifolia", image: "/images/vaxter_bar/Liten_Blaklocka_Huvudbild_01.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler växter och bär", en: "Discover more plants and berries", de: "Weitere Pflanzen und Beeren entdecken" },
    relatedLinkLabel: { sv: "Visa alla växter & bär", en: "View all plants & berries", de: "Alle Pflanzen & Beeren anzeigen" },
  },
  "liten-blaklocka": {
    id: "liten-blaklocka",
    scientificName: "Campanula rotundifolia",
    category: { sv: "Växter", en: "Plants", de: "Pflanzen" },
    names: { sv: "Liten blåklocka", en: "Harebell", de: "Rundblättrige Glockenblume" },
    meta: {
      sv: { title: "Liten blåklocka – Kustvägen Naturguide", description: "Fakta om liten blåklocka längs Kustvägen – en klassisk ängsblomma med hängande blå klockor som pryder torra backar och vägrenar." },
      en: { title: "Harebell – Kustvägen Nature Guide", description: "Facts about the harebell along Kustvägen – a classic meadow flower with hanging blue bells that adorn dry banks and roadsides." },
      de: { title: "Rundblättrige Glockenblume – Kustvägen Naturführer", description: "Fakten über die Rundblättrige Glockenblume am Kustvägen – eine klassische Wiesenblume mit hängenden blauen Glocken an trockenen Hängen und Wegrändern." },
    },
    quickFacts: {
      sv: [
        { label: "Landskapsblomma", value: "Dalarna" },
        { label: "Blomning", value: "Juli–september" },
        { label: "Utseende", value: "Hängande blå klockformade blommor" },
        { label: "Habitat", value: "Torra backar, vägrenar och ängar" },
      ],
      en: [
        { label: "Provincial flower", value: "Dalarna" },
        { label: "Flowering", value: "July–September" },
        { label: "Appearance", value: "Hanging blue bell-shaped flowers" },
        { label: "Habitat", value: "Dry banks, roadsides and meadows" },
      ],
      de: [
        { label: "Provinzblume", value: "Dalarna" },
        { label: "Blüte", value: "Juli–September" },
        { label: "Aussehen", value: "Hängende blaue glockenförmige Blüten" },
        { label: "Lebensraum", value: "Trockene Hänge, Wegränder und Wiesen" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Ängens klassiska blå klocka",
        intro: "Liten blåklocka är en av våra mest klassiska ängsblommor. Den överlever bra i mager och torr jord och pryder vägrenar under hela högsommaren.\n\nLängs Kustvägen nickar de blå klockorna på torra backar och i vägkanter, där de tunna stjälkarna vaggar i sommarvinden.",
        quote: "Mina blå klockor vaggar i sommarvinden på torra backar och vägrenar.",
        sections: [],
        detailsGrid: [
          { heading: "Kännetecken & Utseende", body: "Liten blåklocka har hängande, blå klockformade blommor på tunna, spröda stjälkar. De nedre bladen är runda, medan de övre är smala och gräslika.", image: "/images/vaxter_bar/blaklocka-detalj.png", alt: "Närbild på blå blåklocka", caption: "Hängande blå klockor på tunna stjälkar." },
          { heading: "Växtplats & Beteende", body: "Blåklockan trivs på torra backar, vägrenar och ängar och klarar sig väl i mager och torr jord. Den blommar länge under hela högsommaren.", image: "/images/vaxter_bar/blaklocka-miljo.png", alt: "Blåklockor på solig backe", caption: "Klarar sig väl i mager och torr jord." },
          { heading: "Ekologi & Användning", body: "Blommorna ger nektar åt bin och andra pollinatörer under sommaren. Liten blåklocka är landskapsblomma för Dalarna och en älskad symbol för den svenska sommaren.", image: "/images/vaxter_bar/Liten_Blaklocka_Huvudbild_01.png", alt: "Blåklockor i sommaräng", caption: "Landskapsblomma för Dalarna." },
        ],
      },
      en: {
        heroSubtitle: "The meadow's classic blue bell",
        intro: "The harebell is one of our most classic meadow flowers. It survives well in poor, dry soil and adorns roadsides throughout high summer.\n\nAlong Kustvägen the blue bells nod on dry banks and roadsides, where the thin stems sway in the summer breeze.",
        quote: "My blue bells sway in the summer breeze on dry banks and roadsides.",
        sections: [],
        detailsGrid: [
          { heading: "Characteristics & Appearance", body: "The harebell has hanging, blue bell-shaped flowers on thin, delicate stems. The lower leaves are round, while the upper ones are narrow and grass-like.", image: "/images/vaxter_bar/blaklocka-detalj.png", alt: "Close-up of a blue harebell", caption: "Hanging blue bells on thin stems." },
          { heading: "Habitat & Behavior", body: "The harebell thrives on dry banks, roadsides and meadows and copes well in poor, dry soil. It flowers for a long time throughout high summer.", image: "/images/vaxter_bar/blaklocka-miljo.png", alt: "Harebells on a sunny bank", caption: "Copes well in poor and dry soil." },
          { heading: "Ecology & Use", body: "The flowers provide nectar for bees and other pollinators during the summer. The harebell is the provincial flower of Dalarna and a beloved symbol of the Swedish summer.", image: "/images/vaxter_bar/Liten_Blaklocka_Huvudbild_01.png", alt: "Harebells in a summer meadow", caption: "Provincial flower of Dalarna." },
        ],
      },
      de: {
        heroSubtitle: "Die klassische blaue Glocke der Wiese",
        intro: "Die Rundblättrige Glockenblume ist eine unserer klassischsten Wiesenblumen. Sie übersteht magere, trockene Böden gut und schmückt Wegränder den ganzen Hochsommer über.\n\nEntlang des Kustvägen nicken die blauen Glocken an trockenen Hängen und Wegrändern, wo die dünnen Stängel in der Sommerbrise wiegen.",
        quote: "Meine blauen Glocken wiegen sich in der Sommerbrise an trockenen Hängen und Wegrändern.",
        sections: [],
        detailsGrid: [
          { heading: "Merkmale & Aussehen", body: "Die Rundblättrige Glockenblume hat hängende, blaue glockenförmige Blüten an dünnen, zarten Stängeln. Die unteren Blätter sind rund, die oberen schmal und grasartig.", image: "/images/vaxter_bar/blaklocka-detalj.png", alt: "Nahaufnahme einer blauen Glockenblume", caption: "Hängende blaue Glocken an dünnen Stängeln." },
          { heading: "Lebensraum & Verhalten", body: "Die Glockenblume gedeiht an trockenen Hängen, Wegrändern und Wiesen und kommt mit magerem, trockenem Boden gut zurecht. Sie blüht lange den ganzen Hochsommer über.", image: "/images/vaxter_bar/blaklocka-miljo.png", alt: "Glockenblumen an einem sonnigen Hang", caption: "Kommt mit magerem und trockenem Boden gut zurecht." },
          { heading: "Ökologie & Verwendung", body: "Die Blüten liefern im Sommer Nektar für Bienen und andere Bestäuber. Die Rundblättrige Glockenblume ist die Provinzblume von Dalarna und ein geliebtes Symbol des schwedischen Sommers.", image: "/images/vaxter_bar/Liten_Blaklocka_Huvudbild_01.png", alt: "Glockenblumen auf einer Sommerwiese", caption: "Provinzblume von Dalarna." },
        ],
      },
    },
    media: {
      heroImage: { url: "/images/vaxter_bar/Liten_Blaklocka_Huvudbild_01.png", alt: { sv: "Hängande blå blåklockor på tunna stjälkar", en: "Hanging blue harebells on thin stems", de: "Hängende blaue Glockenblumen an dünnen Stängeln" } },
      galleryImages: [
        { src: "/images/vaxter_bar/Liten_Blaklocka_Huvudbild_01.png", alt: "Hängande blå blåklockor på tunna stjälkar" },
        { src: "/images/vaxter_bar/blaklocka-detalj.png", alt: "Närbild på blå blåklocka" },
        { src: "/images/vaxter_bar/blaklocka-miljo.png", alt: "Blåklockor på solig backe" },
      ],
      detailImage: { url: "/images/vaxter_bar/blaklocka-miljo.png", alt: { sv: "Blåklockor på en solig sommaräng", en: "Harebells in a sunny summer meadow", de: "Glockenblumen auf einer sonnigen Sommerwiese" } },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: { title: "Prata med Blåklockan", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Talk to the Harebell", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Sprich mit der Glockenblume", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/vaxter_bar/Liten_Blaklocka_Huvudbild_01.png",
    chatAvatarAlt: "Blåklockans ansikte",
    relatedSpecies: [
      { slug: "akervadd", name: "Åkervädd", latin: "Knautia arvensis", image: "/images/vaxter_bar/Akervadd_Huvudbild_01.png" },
      { slug: "rodblara", name: "Rödblära", latin: "Silene dioica", image: "/images/vaxter_bar/Rodblara_Huvudbild_01.png" },
      { slug: "ljung", name: "Ljung", latin: "Calluna vulgaris", image: "/images/vaxter_bar/Ljung_Huvudbild_01.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler växter och bär", en: "Discover more plants and berries", de: "Weitere Pflanzen und Beeren entdecken" },
    relatedLinkLabel: { sv: "Visa alla växter & bär", en: "View all plants & berries", de: "Alle Pflanzen & Beeren anzeigen" },
  },
  rundsileshar: {
    id: "rundsileshar",
    scientificName: "Drosera rotundifolia",
    category: { sv: "Växter", en: "Plants", de: "Pflanzen" },
    names: { sv: "Rundsileshår", en: "Round-leaved Sundew", de: "Rundblättriger Sonnentau" },
    meta: {
      sv: { title: "Rundsileshår – Kustvägen Naturguide", description: "Fakta om rundsileshår längs Kustvägen – en köttätande växt som fångar insekter med klibbiga röda tentakler på fattigmyrar." },
      en: { title: "Round-leaved Sundew – Kustvägen Nature Guide", description: "Facts about the round-leaved sundew along Kustvägen – a carnivorous plant that catches insects with sticky red tentacles on poor mires." },
      de: { title: "Rundblättriger Sonnentau – Kustvägen Naturführer", description: "Fakten über den Rundblättrigen Sonnentau am Kustvägen – eine fleischfressende Pflanze, die Insekten mit klebrigen roten Tentakeln auf armen Mooren fängt." },
    },
    quickFacts: {
      sv: [
        { label: "Typ", value: "Köttätande växt" },
        { label: "Habitat", value: "Fattigmyrar och mossiga torvmarker" },
        { label: "Mekanism", value: "Fångar insekter med klibbiga röda tentakler" },
        { label: "Storlek", value: "Mycket liten rosett (2–5 cm)" },
      ],
      en: [
        { label: "Type", value: "Carnivorous plant" },
        { label: "Habitat", value: "Poor mires and mossy peatlands" },
        { label: "Mechanism", value: "Catches insects with sticky red tentacles" },
        { label: "Size", value: "Very small rosette (2–5 cm)" },
      ],
      de: [
        { label: "Typ", value: "Fleischfressende Pflanze" },
        { label: "Lebensraum", value: "Arme Moore und moosige Torfböden" },
        { label: "Mechanismus", value: "Fängt Insekten mit klebrigen roten Tentakeln" },
        { label: "Größe", value: "Sehr kleine Rosette (2–5 cm)" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Myrens köttätande fälla",
        intro: "Rundsileshår kompenserar för näringsfattig torvmark genom att fånga insekter. Dess blad täcks av röda körtelhår med klibbiga droppar som fungerar som flugpapper.\n\nLängs Kustvägen hittar man de små röda rosetterna nere i mossan på fuktiga myrar, där de glittrar av klibbiga droppar i solljuset.",
        quote: "På den näringsfattiga myren fångar jag insekter med mina klibbiga röda droppar.",
        sections: [],
        detailsGrid: [
          { heading: "Kännetecken & Utseende", body: "Rundsileshår är en mycket liten köttätande växt med en rosett av runda blad. Bladen täcks av röda körtelhår som avsöndrar klibbiga, glittrande droppar.", image: "/images/vaxter_bar/rundsileshar-detalj.png", alt: "Närbild på rundsileshårets klibbiga röda tentakler", caption: "Bladen täcks av klibbiga röda körtelhår." },
          { heading: "Växtplats & Beteende", body: "Växten lever på fattigmyrar och mossiga torvmarker. För att klara den näringsfattiga miljön fångar den insekter, som fastnar i de klibbiga dropparna och sedan bryts ned.", image: "/images/vaxter_bar/rundsileshar-miljo.png", alt: "Rundsileshår i sphagnummossa på myr", caption: "Lever på näringsfattiga myrar och torvmarker." },
          { heading: "Ekologi & Användning", body: "Genom att fånga och bryta ned insekter kompenserar rundsileshåret för bristen på näring i torvmarken. Det är ett fascinerande exempel på hur växter anpassar sig till karga miljöer.", image: "/images/vaxter_bar/Rundsileshar_Huvudbild_01.png", alt: "Rundsileshår med röda tentakler", caption: "Fångar insekter för att kompensera näringsbristen." },
        ],
      },
      en: {
        heroSubtitle: "The mire's carnivorous trap",
        intro: "The round-leaved sundew compensates for nutrient-poor peatland by catching insects. Its leaves are covered with red glandular hairs bearing sticky droplets that work like flypaper.\n\nAlong Kustvägen you find the small red rosettes down in the moss on damp mires, where they glitter with sticky droplets in the sunlight.",
        quote: "On the nutrient-poor mire I catch insects with my sticky red droplets.",
        sections: [],
        detailsGrid: [
          { heading: "Characteristics & Appearance", body: "The round-leaved sundew is a very small carnivorous plant with a rosette of round leaves. The leaves are covered with red glandular hairs that secrete sticky, glittering droplets.", image: "/images/vaxter_bar/rundsileshar-detalj.png", alt: "Close-up of the sundew's sticky red tentacles", caption: "The leaves are covered with sticky red glandular hairs." },
          { heading: "Habitat & Behavior", body: "The plant lives on poor mires and mossy peatlands. To cope with the nutrient-poor environment, it catches insects that stick to the sticky droplets and are then broken down.", image: "/images/vaxter_bar/rundsileshar-miljo.png", alt: "Sundew in sphagnum moss on a mire", caption: "Lives on nutrient-poor mires and peatlands." },
          { heading: "Ecology & Use", body: "By catching and breaking down insects, the sundew compensates for the lack of nutrients in the peatland. It is a fascinating example of how plants adapt to barren environments.", image: "/images/vaxter_bar/Rundsileshar_Huvudbild_01.png", alt: "Sundew with red tentacles", caption: "Catches insects to compensate for the nutrient shortage." },
        ],
      },
      de: {
        heroSubtitle: "Die fleischfressende Falle des Moores",
        intro: "Der Rundblättrige Sonnentau gleicht den nährstoffarmen Torfboden aus, indem er Insekten fängt. Seine Blätter sind mit roten Drüsenhaaren bedeckt, die klebrige Tropfen wie Fliegenpapier tragen.\n\nEntlang des Kustvägen findet man die kleinen roten Rosetten unten im Moos auf feuchten Mooren, wo sie im Sonnenlicht von klebrigen Tropfen glitzern.",
        quote: "Auf dem nährstoffarmen Moor fange ich Insekten mit meinen klebrigen roten Tropfen.",
        sections: [],
        detailsGrid: [
          { heading: "Merkmale & Aussehen", body: "Der Rundblättrige Sonnentau ist eine sehr kleine fleischfressende Pflanze mit einer Rosette aus runden Blättern. Die Blätter sind mit roten Drüsenhaaren bedeckt, die klebrige, glitzernde Tropfen absondern.", image: "/images/vaxter_bar/rundsileshar-detalj.png", alt: "Nahaufnahme der klebrigen roten Tentakeln des Sonnentaus", caption: "Die Blätter sind mit klebrigen roten Drüsenhaaren bedeckt." },
          { heading: "Lebensraum & Verhalten", body: "Die Pflanze lebt auf armen Mooren und moosigen Torfböden. Um die nährstoffarme Umgebung zu bewältigen, fängt sie Insekten, die an den klebrigen Tropfen haften bleiben und dann zersetzt werden.", image: "/images/vaxter_bar/rundsileshar-miljo.png", alt: "Sonnentau im Sphagnummoos auf einem Moor", caption: "Lebt auf nährstoffarmen Mooren und Torfböden." },
          { heading: "Ökologie & Verwendung", body: "Indem er Insekten fängt und zersetzt, gleicht der Sonnentau den Nährstoffmangel im Torfboden aus. Er ist ein faszinierendes Beispiel dafür, wie sich Pflanzen an karge Umgebungen anpassen.", image: "/images/vaxter_bar/Rundsileshar_Huvudbild_01.png", alt: "Sonnentau mit roten Tentakeln", caption: "Fängt Insekten, um den Nährstoffmangel auszugleichen." },
        ],
      },
    },
    media: {
      heroImage: { url: "/images/vaxter_bar/Rundsileshar_Huvudbild_01.png", alt: { sv: "Röd rosett av rundsileshår i mossa", en: "Red rosette of round-leaved sundew in moss", de: "Rote Rosette des Rundblättrigen Sonnentaus im Moos" } },
      galleryImages: [
        { src: "/images/vaxter_bar/Rundsileshar_Huvudbild_01.png", alt: "Röd rosett av rundsileshår i mossa" },
        { src: "/images/vaxter_bar/rundsileshar-detalj.png", alt: "Närbild på rundsileshårets klibbiga röda tentakler" },
        { src: "/images/vaxter_bar/rundsileshar-miljo.png", alt: "Rundsileshår i sphagnummossa på myr" },
      ],
      detailImage: { url: "/images/vaxter_bar/rundsileshar-miljo.png", alt: { sv: "Rundsileshår på en fuktig myr", en: "Sundew on a damp mire", de: "Sonnentau auf einem feuchten Moor" } },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: { title: "Prata med Rundsileshåret", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Talk to the Sundew", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Sprich mit dem Sonnentau", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/vaxter_bar/Rundsileshar_Huvudbild_01.png",
    chatAvatarAlt: "Rundsileshårets ansikte",
    relatedSpecies: [
      { slug: "ljung", name: "Ljung", latin: "Calluna vulgaris", image: "/images/vaxter_bar/Ljung_Huvudbild_01.png" },
      { slug: "krakbar", name: "Kråkbär", latin: "Empetrum nigrum", image: "/images/vaxter_bar/Krakbar_Huvudbild_01.png" },
      { slug: "hjortron", name: "Hjortron", latin: "Rubus chamaemorus", image: "/images/sp-cloudberry.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler växter och bär", en: "Discover more plants and berries", de: "Weitere Pflanzen und Beeren entdecken" },
    relatedLinkLabel: { sv: "Visa alla växter & bär", en: "View all plants & berries", de: "Alle Pflanzen & Beeren anzeigen" },
  },
  rodblara: {
    id: "rodblara",
    scientificName: "Silene dioica",
    category: { sv: "Växter", en: "Plants", de: "Pflanzen" },
    names: { sv: "Rödblära", en: "Red Campion", de: "Rote Lichtnelke" },
    meta: {
      sv: { title: "Rödblära – Kustvägen Naturguide", description: "Fakta om rödblära längs Kustvägen – klarröda blommor som lyser upp skogsbryn och vägrenar och lockar dagsfjärilar och humlor." },
      en: { title: "Red Campion – Kustvägen Nature Guide", description: "Facts about red campion along Kustvägen – bright red flowers that light up forest edges and roadsides and attract butterflies and bumblebees." },
      de: { title: "Rote Lichtnelke – Kustvägen Naturführer", description: "Fakten über die Rote Lichtnelke am Kustvägen – leuchtend rote Blüten, die Waldränder und Wegränder erhellen und Tagfalter und Hummeln anlocken." },
    },
    quickFacts: {
      sv: [
        { label: "Blomning", value: "Maj–juli" },
        { label: "Färg", value: "Starkt rosa/purpurröda kronblad" },
        { label: "Typ", value: "Tvåbyggare (skilda han- och honplantor)" },
        { label: "Habitat", value: "Skogsbryn, vägrenar och havsstränder" },
      ],
      en: [
        { label: "Flowering", value: "May–July" },
        { label: "Color", value: "Bright pink/purple-red petals" },
        { label: "Type", value: "Dioecious (separate male and female plants)" },
        { label: "Habitat", value: "Forest edges, roadsides and sea shores" },
      ],
      de: [
        { label: "Blüte", value: "Mai–Juli" },
        { label: "Farbe", value: "Leuchtend rosa/purpurrote Kronblätter" },
        { label: "Typ", value: "Zweihäusig (getrennte männliche und weibliche Pflanzen)" },
        { label: "Lebensraum", value: "Waldränder, Wegränder und Meeresküsten" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skogsbrynets klarröda blomma",
        intro: "Rödblära lyser upp skogsbryn och vägrenar med sina klarröda blommor. Den öppnar sina blommor under dagen för att locka dagsfjärilar och humlor.\n\nLängs Kustvägen växer rödbläran i frodiga bryn, längs vägar och nära havsstränder, där de klarröda blommorna sticker ut i grönskan.",
        quote: "Med mina klarröda blommor lockar jag dagsfjärilar och humlor till skogsbrynet.",
        sections: [],
        detailsGrid: [
          { heading: "Kännetecken & Utseende", body: "Rödblära har starkt rosa till purpurröda kronblad och håriga stjälkar. Den är tvåbyggare, vilket betyder att han- och honblommor sitter på skilda plantor.", image: "/images/vaxter_bar/rodblara-detalj.png", alt: "Närbild på klarröd rödblärablomma", caption: "Starkt rosa till purpurröda kronblad." },
          { heading: "Växtplats & Beteende", body: "Rödblära trivs i skogsbryn, längs vägrenar och nära havsstränder. Den öppnar sina blommor under dagen och trivs i frodig, näringsrik mark.", image: "/images/vaxter_bar/rodblara-miljo.png", alt: "Rödblära i frodigt skogsbryn", caption: "Trivs i frodiga bryn och längs vägar." },
          { heading: "Ekologi & Användning", body: "De klarröda blommorna lockar dagsfjärilar och humlor som söker nektar under dagen. Rödbläran är ett vanligt och färgstarkt inslag i det svenska sommarlandskapet.", image: "/images/vaxter_bar/Rodblara_Huvudbild_01.png", alt: "Rödblära med klarröda blommor", caption: "Lockar dagsfjärilar och humlor på dagen." },
        ],
      },
      en: {
        heroSubtitle: "The forest edge's bright red flower",
        intro: "Red campion lights up forest edges and roadsides with its bright red flowers. It opens its flowers during the day to attract butterflies and bumblebees.\n\nAlong Kustvägen red campion grows in lush edges, along roads and near sea shores, where the bright red flowers stand out in the greenery.",
        quote: "With my bright red flowers I attract butterflies and bumblebees to the forest edge.",
        sections: [],
        detailsGrid: [
          { heading: "Characteristics & Appearance", body: "Red campion has bright pink to purple-red petals and hairy stems. It is dioecious, meaning male and female flowers grow on separate plants.", image: "/images/vaxter_bar/rodblara-detalj.png", alt: "Close-up of a bright red campion flower", caption: "Bright pink to purple-red petals." },
          { heading: "Habitat & Behavior", body: "Red campion thrives at forest edges, along roadsides and near sea shores. It opens its flowers during the day and thrives in lush, nutrient-rich soil.", image: "/images/vaxter_bar/rodblara-miljo.png", alt: "Red campion at a lush forest edge", caption: "Thrives in lush edges and along roads." },
          { heading: "Ecology & Use", body: "The bright red flowers attract butterflies and bumblebees seeking nectar during the day. Red campion is a common and colorful element of the Swedish summer landscape.", image: "/images/vaxter_bar/Rodblara_Huvudbild_01.png", alt: "Red campion with bright red flowers", caption: "Attracts butterflies and bumblebees during the day." },
        ],
      },
      de: {
        heroSubtitle: "Die leuchtend rote Blume des Waldrands",
        intro: "Die Rote Lichtnelke erhellt Waldränder und Wegränder mit ihren leuchtend roten Blüten. Sie öffnet ihre Bl��ten tagsüber, um Tagfalter und Hummeln anzulocken.\n\nEntlang des Kustvägen wächst die Rote Lichtnelke an üppigen Rändern, an Straßen und nahe Meeresküsten, wo die leuchtend roten Blüten im Grün hervorstechen.",
        quote: "Mit meinen leuchtend roten Blüten locke ich Tagfalter und Hummeln an den Waldrand.",
        sections: [],
        detailsGrid: [
          { heading: "Merkmale & Aussehen", body: "Die Rote Lichtnelke hat leuchtend rosa bis purpurrote Kronblätter und behaarte Stängel. Sie ist zweihäusig, das heißt, männliche und weibliche Blüten wachsen auf getrennten Pflanzen.", image: "/images/vaxter_bar/rodblara-detalj.png", alt: "Nahaufnahme einer leuchtend roten Lichtnelkenblüte", caption: "Leuchtend rosa bis purpurrote Kronblätter." },
          { heading: "Lebensraum & Verhalten", body: "Die Rote Lichtnelke gedeiht an Waldrändern, Wegrändern und nahe Meeresküsten. Sie öffnet ihre Blüten tagsüber und gedeiht in üppigem, nährstoffreichem Boden.", image: "/images/vaxter_bar/rodblara-miljo.png", alt: "Rote Lichtnelke an einem üppigen Waldrand", caption: "Gedeiht an üppigen Rändern und an Straßen." },
          { heading: "Ökologie & Verwendung", body: "Die leuchtend roten Blüten locken Tagfalter und Hummeln an, die tagsüber Nektar suchen. Die Rote Lichtnelke ist ein häufiges und farbenfrohes Element der schwedischen Sommerlandschaft.", image: "/images/vaxter_bar/Rodblara_Huvudbild_01.png", alt: "Rote Lichtnelke mit leuchtend roten Blüten", caption: "Lockt tagsüber Tagfalter und Hummeln an." },
        ],
      },
    },
    media: {
      heroImage: { url: "/images/vaxter_bar/Rodblara_Huvudbild_01.png", alt: { sv: "Klarröda rödblärablommor i grönska", en: "Bright red campion flowers in greenery", de: "Leuchtend rote Lichtnelkenblüten im Grün" } },
      galleryImages: [
        { src: "/images/vaxter_bar/Rodblara_Huvudbild_01.png", alt: "Klarröda rödblärablommor i grönska" },
        { src: "/images/vaxter_bar/rodblara-detalj.png", alt: "Närbild på klarröd rödblärablomma" },
        { src: "/images/vaxter_bar/rodblara-miljo.png", alt: "Rödblära i frodigt skogsbryn" },
      ],
      detailImage: { url: "/images/vaxter_bar/rodblara-miljo.png", alt: { sv: "Rödblära i ett frodigt skogsbryn", en: "Red campion at a lush forest edge", de: "Rote Lichtnelke an einem üppigen Waldrand" } },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: { title: "Prata med Rödbläran", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Talk to the Red Campion", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Sprich mit der Roten Lichtnelke", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/vaxter_bar/Rodblara_Huvudbild_01.png",
    chatAvatarAlt: "Rödblärans ansikte",
    relatedSpecies: [
      { slug: "liten-blaklocka", name: "Liten blåklocka", latin: "Campanula rotundifolia", image: "/images/vaxter_bar/Liten_Blaklocka_Huvudbild_01.png" },
      { slug: "humleblomster", name: "Humleblomster", latin: "Geum rivale", image: "/images/vaxter_bar/Humleblomster_Huvudbild_01.png" },
      { slug: "akervadd", name: "Åkervädd", latin: "Knautia arvensis", image: "/images/vaxter_bar/Akervadd_Huvudbild_01.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler växter och bär", en: "Discover more plants and berries", de: "Weitere Pflanzen und Beeren entdecken" },
    relatedLinkLabel: { sv: "Visa alla växter & bär", en: "View all plants & berries", de: "Alle Pflanzen & Beeren anzeigen" },
  },
  angskovall: {
    id: "angskovall",
    scientificName: "Melampyrum pratense",
    category: { sv: "Växter", en: "Plants", de: "Pflanzen" },
    names: { sv: "Ängskovall", en: "Common Cow-wheat", de: "Wiesen-Wachtelweizen" },
    meta: {
      sv: { title: "Ängskovall – Kustvägen Naturguide", description: "Fakta om ängskovall längs Kustvägen – en halvparasit med gula rörformade blommor som suger näring från trädrötter i barr- och blandskog." },
      en: { title: "Common Cow-wheat – Kustvägen Nature Guide", description: "Facts about common cow-wheat along Kustvägen – a hemiparasite with yellow tubular flowers that draws nutrients from tree roots in conifer and mixed forest." },
      de: { title: "Wiesen-Wachtelweizen – Kustvägen Naturführer", description: "Fakten über den Wiesen-Wachtelweizen am Kustvägen – ein Halbschmarotzer mit gelben röhrenförmigen Blüten, der Nährstoffe aus Baumwurzeln in Nadel- und Mischwald zieht." },
    },
    quickFacts: {
      sv: [
        { label: "Typ", value: "Halvparasit på träd- och gräsrötter" },
        { label: "Blomning", value: "Juni–augusti" },
        { label: "Utseende", value: "Gula rörformade blommor i par" },
        { label: "Spridning", value: "Myror sprider fröna" },
      ],
      en: [
        { label: "Type", value: "Hemiparasite on tree and grass roots" },
        { label: "Flowering", value: "June–August" },
        { label: "Appearance", value: "Yellow tubular flowers in pairs" },
        { label: "Dispersal", value: "Ants disperse the seeds" },
      ],
      de: [
        { label: "Typ", value: "Halbschmarotzer an Baum- und Graswurzeln" },
        { label: "Blüte", value: "Juni–August" },
        { label: "Aussehen", value: "Gelbe röhrenförmige Blüten paarweise" },
        { label: "Verbreitung", value: "Ameisen verbreiten die Samen" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skogens gula halvparasit",
        intro: "Ängskovall är en vanlig växt i barr- och blandskog. Eftersom den är en halvparasit suger den vatten och näring från omgivande trädrötter samtidigt som den själv fotosyntetiserar.\n\nLängs Kustvägen står ängskovall i dungarna, där de gula blommorna lyser i par mot den gröna skogsbotten.",
        quote: "Jag lånar näring från träden runt mig men bär ändå mina egna gröna blad.",
        sections: [],
        detailsGrid: [
          { heading: "Kännetecken & Utseende", body: "Ängskovall känns igen på sina gula, rörformade blommor som sitter parvis i bladvecken. Stjälken är smal och bladen är avlånga och spetsiga.", image: "/images/vaxter_bar/angskovall-detalj.png", alt: "Närbild på gula rörformade ängskovallblommor", caption: "Gula rörformade blommor sitter i par." },
          { heading: "Växtplats & Beteende", body: "Växten är vanlig i barr- och blandskog. Som halvparasit kopplar den in sig på omgivande träd- och gräsrötter och suger vatten och näring, samtidigt som den fotosyntetiserar själv.", image: "/images/vaxter_bar/angskovall-miljo.png", alt: "Ängskovall på skogsbotten", caption: "Halvparasit på omgivande träd- och gräsrötter." },
          { heading: "Ekologi & Användning", body: "Ängskovallens frön sprids av myror, som lockas av ett näringsrikt bihang på fröet. Växten är en naturlig del av markfloran i många skogar.", image: "/images/vaxter_bar/Angskovall_Huvudbild_01.png", alt: "Ängskovall med gula blommor", caption: "Myror sprider de näringsrika fröna." },
        ],
      },
      en: {
        heroSubtitle: "The forest's yellow hemiparasite",
        intro: "Common cow-wheat is a common plant in conifer and mixed forest. Because it is a hemiparasite, it draws water and nutrients from surrounding tree roots while also photosynthesizing itself.\n\nAlong Kustvägen common cow-wheat stands in the groves, where the yellow flowers shine in pairs against the green forest floor.",
        quote: "I borrow nutrients from the trees around me yet still carry my own green leaves.",
        sections: [],
        detailsGrid: [
          { heading: "Characteristics & Appearance", body: "Common cow-wheat is recognized by its yellow, tubular flowers that sit in pairs in the leaf axils. The stem is slender and the leaves are elongated and pointed.", image: "/images/vaxter_bar/angskovall-detalj.png", alt: "Close-up of yellow tubular cow-wheat flowers", caption: "Yellow tubular flowers grow in pairs." },
          { heading: "Habitat & Behavior", body: "The plant is common in conifer and mixed forest. As a hemiparasite it taps into surrounding tree and grass roots and draws water and nutrients, while photosynthesizing itself.", image: "/images/vaxter_bar/angskovall-miljo.png", alt: "Cow-wheat on the forest floor", caption: "Hemiparasite on surrounding tree and grass roots." },
          { heading: "Ecology & Use", body: "The cow-wheat's seeds are dispersed by ants, attracted by a nutrient-rich appendage on the seed. The plant is a natural part of the ground flora in many forests.", image: "/images/vaxter_bar/Angskovall_Huvudbild_01.png", alt: "Cow-wheat with yellow flowers", caption: "Ants disperse the nutrient-rich seeds." },
        ],
      },
      de: {
        heroSubtitle: "Der gelbe Halbschmarotzer des Waldes",
        intro: "Der Wiesen-Wachtelweizen ist eine häufige Pflanze in Nadel- und Mischwald. Da er ein Halbschmarotzer ist, zieht er Wasser und Nährstoffe aus umliegenden Baumwurzeln und betreibt zugleich selbst Photosynthese.\n\nEntlang des Kustvägen steht der Wiesen-Wachtelweizen in den Hainen, wo die gelben Blüten paarweise gegen den grünen Waldboden leuchten.",
        quote: "Ich leihe mir Nährstoffe von den Bäumen um mich, trage aber dennoch meine eigenen grünen Blätter.",
        sections: [],
        detailsGrid: [
          { heading: "Merkmale & Aussehen", body: "Der Wiesen-Wachtelweizen ist an seinen gelben, röhrenförmigen Blüten zu erkennen, die paarweise in den Blattachseln sitzen. Der Stängel ist schlank und die Blätter l��nglich und spitz.", image: "/images/vaxter_bar/angskovall-detalj.png", alt: "Nahaufnahme gelber röhrenförmiger Wachtelweizenblüten", caption: "Gelbe röhrenförmige Blüten wachsen paarweise." },
          { heading: "Lebensraum & Verhalten", body: "Die Pflanze ist häufig in Nadel- und Mischwald. Als Halbschmarotzer zapft sie umliegende Baum- und Graswurzeln an und zieht Wasser und Nährstoffe, während sie selbst Photosynthese betreibt.", image: "/images/vaxter_bar/angskovall-miljo.png", alt: "Wachtelweizen auf dem Waldboden", caption: "Halbschmarotzer an umliegenden Baum- und Graswurzeln." },
          { heading: "Ökologie & Verwendung", body: "Die Samen des Wachtelweizens werden von Ameisen verbreitet, die von einem nährstoffreichen Anhängsel am Samen angelockt werden. Die Pflanze ist ein natürlicher Teil der Bodenflora vieler Wälder.", image: "/images/vaxter_bar/Angskovall_Huvudbild_01.png", alt: "Wachtelweizen mit gelben Blüten", caption: "Ameisen verbreiten die nährstoffreichen Samen." },
        ],
      },
    },
    media: {
      heroImage: { url: "/images/vaxter_bar/Angskovall_Huvudbild_01.png", alt: { sv: "Gula rörformade ängskovallblommor i skog", en: "Yellow tubular cow-wheat flowers in forest", de: "Gelbe röhrenförmige Wachtelweizenblüten im Wald" } },
      galleryImages: [
        { src: "/images/vaxter_bar/Angskovall_Huvudbild_01.png", alt: "Gula rörformade ängskovallblommor i skog" },
        { src: "/images/vaxter_bar/angskovall-detalj.png", alt: "Närbild på gula rörformade ängskovallblommor" },
        { src: "/images/vaxter_bar/angskovall-miljo.png", alt: "Ängskovall på skogsbotten" },
      ],
      detailImage: { url: "/images/vaxter_bar/angskovall-miljo.png", alt: { sv: "Ängskovall på en skuggig skogsbotten", en: "Cow-wheat on a shady forest floor", de: "Wachtelweizen auf einem schattigen Waldboden" } },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: { title: "Prata med Ängskovallen", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Talk to the Cow-wheat", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Sprich mit dem Wachtelweizen", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/vaxter_bar/Angskovall_Huvudbild_01.png",
    chatAvatarAlt: "Ängskovallens ansikte",
    relatedSpecies: [
      { slug: "harsyra", name: "Harsyra", latin: "Oxalis acetosella", image: "/images/vaxter_bar/Harsyra_Huvudbild_01.png" },
      { slug: "linnea", name: "Linnéa", latin: "Linnaea borealis", image: "/images/vaxter_bar/Linnea_Huvudbild_01.png" },
      { slug: "humleblomster", name: "Humleblomster", latin: "Geum rivale", image: "/images/vaxter_bar/Humleblomster_Huvudbild_01.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler växter och bär", en: "Discover more plants and berries", de: "Weitere Pflanzen und Beeren entdecken" },
    relatedLinkLabel: { sv: "Visa alla växter & bär", en: "View all plants & berries", de: "Alle Pflanzen & Beeren anzeigen" },
  },
  akervadd: {
    id: "akervadd",
    scientificName: "Knautia arvensis",
    category: { sv: "Växter", en: "Plants", de: "Pflanzen" },
    names: { sv: "Åkervädd", en: "Field Scabious", de: "Acker-Witwenblume" },
    meta: {
      sv: { title: "Åkervädd – Kustvägen Naturguide", description: "Fakta om åkervädd längs Kustvägen – violettblå korgblommor på torra ängar som är en magnet för fjärilar och hotade vildbin." },
      en: { title: "Field Scabious – Kustvägen Nature Guide", description: "Facts about field scabious along Kustvägen – violet-blue flower heads on dry meadows that are a magnet for butterflies and threatened wild bees." },
      de: { title: "Acker-Witwenblume – Kustvägen Naturführer", description: "Fakten über die Acker-Witwenblume am Kustvägen – violettblaue Blütenköpfe auf trockenen Wiesen, ein Magnet für Schmetterlinge und bedrohte Wildbienen." },
    },
    quickFacts: {
      sv: [
        { label: "Blomning", value: "Juli–september" },
        { label: "Färg", value: "Violettblå platta korgblommor" },
        { label: "Habitat", value: "Torra ängar, vägkanter och trädesåkrar" },
        { label: "Ekologi", value: "Magnet för fjärilar och vildbin" },
      ],
      en: [
        { label: "Flowering", value: "July���September" },
        { label: "Color", value: "Violet-blue flat flower heads" },
        { label: "Habitat", value: "Dry meadows, roadsides and fallow fields" },
        { label: "Ecology", value: "Magnet for butterflies and wild bees" },
      ],
      de: [
        { label: "Blüte", value: "Juli–September" },
        { label: "Farbe", value: "Violettblaue flache Blütenköpfe" },
        { label: "Lebensraum", value: "Trockene Wiesen, Wegränder und Brachäcker" },
        { label: "Ökologie", value: "Magnet für Schmetterlinge und Wildbienen" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Ängens nektarrika magnet",
        intro: "Åkervädd producerar rikligt med nektar och är en av de viktigaste försommar- och höstväxterna för hotade vildbin och dagsfjärilar i det öppna odlingslandskapet.\n\nLängs Kustvägen står åkervädden på torra ängar och vägkanter, där de violettblå blomkorgarna vaggar fulla av fjärilar och bin.",
        quote: "Jag bjuder på rikligt med nektar och är en fest för fjärilar och vildbin.",
        sections: [],
        detailsGrid: [
          { heading: "Kännetecken & Utseende", body: "Åkervädd har platta, violettblå korgblommor på höga, smala stjälkar. Blomkorgen är uppbyggd av många små blommor som tillsammans bildar en flack dyna.", image: "/images/vaxter_bar/akervadd-detalj.png", alt: "Närbild på violettblå åkervädd", caption: "Platta, violettblå korgblommor." },
          { heading: "Växtplats & Beteende", body: "Växten trivs på torra ängar, vägkanter och trädesåkrar i det öppna odlingslandskapet. Den gynnas av solöppna, magra marker och blommar länge från sommar till höst.", image: "/images/vaxter_bar/akervadd-miljo.png", alt: "Åkervädd på torr sommaräng", caption: "Trivs på torra, solöppna ängar och vägkanter." },
          { heading: "Ekologi & Användning", body: "Åkervädd producerar rikligt med nektar och är en magnet för fjärilar och vildbin. Den är en av de viktigaste nektarväxterna för hotade vildbin i odlingslandskapet.", image: "/images/vaxter_bar/Akervadd_Huvudbild_01.png", alt: "Åkervädd med fjärilar", caption: "En av de viktigaste nektarväxterna för vildbin." },
        ],
      },
      en: {
        heroSubtitle: "The meadow's nectar-rich magnet",
        intro: "Field scabious produces abundant nectar and is one of the most important early-summer and autumn plants for threatened wild bees and butterflies in the open farming landscape.\n\nAlong Kustvägen field scabious stands on dry meadows and roadsides, where the violet-blue flower heads sway full of butterflies and bees.",
        quote: "I offer abundant nectar and am a feast for butterflies and wild bees.",
        sections: [],
        detailsGrid: [
          { heading: "Characteristics & Appearance", body: "Field scabious has flat, violet-blue flower heads on tall, slender stems. The flower head is built up of many small florets that together form a flat cushion.", image: "/images/vaxter_bar/akervadd-detalj.png", alt: "Close-up of violet-blue field scabious", caption: "Flat, violet-blue flower heads." },
          { heading: "Habitat & Behavior", body: "The plant thrives on dry meadows, roadsides and fallow fields in the open farming landscape. It favors sunny, poor ground and flowers for a long time from summer into autumn.", image: "/images/vaxter_bar/akervadd-miljo.png", alt: "Field scabious on a dry summer meadow", caption: "Thrives on dry, sunny meadows and roadsides." },
          { heading: "Ecology & Use", body: "Field scabious produces abundant nectar and is a magnet for butterflies and wild bees. It is one of the most important nectar plants for threatened wild bees in the farming landscape.", image: "/images/vaxter_bar/Akervadd_Huvudbild_01.png", alt: "Field scabious with butterflies", caption: "One of the most important nectar plants for wild bees." },
        ],
      },
      de: {
        heroSubtitle: "Der nektarreiche Magnet der Wiese",
        intro: "Die Acker-Witwenblume produziert reichlich Nektar und ist eine der wichtigsten Frühsommer- und Herbstpflanzen für bedrohte Wildbienen und Tagfalter in der offenen Agrarlandschaft.\n\nEntlang des Kustvägen steht die Acker-Witwenblume auf trockenen Wiesen und Wegrändern, wo die violettblauen Blütenköpfe voller Schmetterlinge und Bienen wiegen.",
        quote: "Ich biete reichlich Nektar und bin ein Fest für Schmetterlinge und Wildbienen.",
        sections: [],
        detailsGrid: [
          { heading: "Merkmale & Aussehen", body: "Die Acker-Witwenblume hat flache, violettblaue Blütenköpfe an hohen, schlanken Stängeln. Der Blütenkopf besteht aus vielen kleinen Blüten, die zusammen ein flaches Polster bilden.", image: "/images/vaxter_bar/akervadd-detalj.png", alt: "Nahaufnahme violettblauer Acker-Witwenblume", caption: "Flache, violettblaue Blütenköpfe." },
          { heading: "Lebensraum & Verhalten", body: "Die Pflanze gedeiht auf trockenen Wiesen, Wegrändern und Brachäckern in der offenen Agrarlandschaft. Sie bevorzugt sonnige, magere Böden und blüht lange vom Sommer bis in den Herbst.", image: "/images/vaxter_bar/akervadd-miljo.png", alt: "Acker-Witwenblume auf einer trockenen Sommerwiese", caption: "Gedeiht auf trockenen, sonnigen Wiesen und Wegrändern." },
          { heading: "Ökologie & Verwendung", body: "Die Acker-Witwenblume produziert reichlich Nektar und ist ein Magnet für Schmetterlinge und Wildbienen. Sie ist eine der wichtigsten Nektarpflanzen für bedrohte Wildbienen in der Agrarlandschaft.", image: "/images/vaxter_bar/Akervadd_Huvudbild_01.png", alt: "Acker-Witwenblume mit Schmetterlingen", caption: "Eine der wichtigsten Nektarpflanzen für Wildbienen." },
        ],
      },
    },
    media: {
      heroImage: { url: "/images/vaxter_bar/Akervadd_Huvudbild_01.png", alt: { sv: "Violettblå åkervädd med fjäril", en: "Violet-blue field scabious with a butterfly", de: "Violettblaue Acker-Witwenblume mit Schmetterling" } },
      galleryImages: [
        { src: "/images/vaxter_bar/Akervadd_Huvudbild_01.png", alt: "Violettblå åkervädd med fjäril" },
        { src: "/images/vaxter_bar/akervadd-detalj.png", alt: "Närbild på violettblå åkervädd" },
        { src: "/images/vaxter_bar/akervadd-miljo.png", alt: "Åkervädd på torr sommaräng" },
      ],
      detailImage: { url: "/images/vaxter_bar/akervadd-miljo.png", alt: { sv: "Åkervädd på en torr sommaräng", en: "Field scabious on a dry summer meadow", de: "Acker-Witwenblume auf einer trockenen Sommerwiese" } },
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
        en: { title: "Listen to the guide", url: "" },
        de: { title: "Dem Führer lauschen", url: "" },
      },
    },
    interactive: {
      sv: { title: "Prata med Åkervädden", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Talk to the Field Scabious", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Sprich mit der Acker-Witwenblume", intro: "[AI INTRO PLACEHOLDER]", presetQuestions: ["[AI QUESTION PLACEHOLDER]"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: `[AI RESPONSE DATA PLACEHOLDER]`,
    avatarImage: "/images/vaxter_bar/Akervadd_Huvudbild_01.png",
    chatAvatarAlt: "Åkerväddens ansikte",
    relatedSpecies: [
      { slug: "liten-blaklocka", name: "Liten blåklocka", latin: "Campanula rotundifolia", image: "/images/vaxter_bar/Liten_Blaklocka_Huvudbild_01.png" },
      { slug: "rodblara", name: "Rödblära", latin: "Silene dioica", image: "/images/vaxter_bar/Rodblara_Huvudbild_01.png" },
      { slug: "ljung", name: "Ljung", latin: "Calluna vulgaris", image: "/images/vaxter_bar/Ljung_Huvudbild_01.png" },
    ],
    relatedSectionHeading: { sv: "Upptäck fler växter och bär", en: "Discover more plants and berries", de: "Weitere Pflanzen und Beeren entdecken" },
    relatedLinkLabel: { sv: "Visa alla växter & bär", en: "View all plants & berries", de: "Alle Pflanzen & Beeren anzeigen" },
  },
  lin: {
    id: "lin",
    scientificName: "Linum usitatissimum",
    category: { sv: "Växter", en: "Plants", de: "Pflanzen" },
    names: { sv: "Lin", en: "Flax", de: "Gemeiner Lein (Flachs)" },
    meta: {
      sv: { title: "Lin – Kustbygdens himmelsblå guld", description: "Lär känna linet, kustbygdens himmelsblå guld." },
      en: { title: "Flax – The sky-blue gold of the coast", description: "Discover flax, the sky-blue gold of the coast." },
      de: { title: "Lein – Das himmelblaue Gold der Küste", description: "Entdecken Sie den Lein, das himmelblaue Gold der Küste." },
    },
    quickFacts: {
      sv: [
        { label: "Vetenskapligt namn", value: "Linum usitatissimum" },
        { label: "Höjd", value: "30 – 80 cm" },
        { label: "Blomningstid", value: "Juli – Augusti" },
        { label: "Kulturhistoria", value: "Viktig spånadsväxt för linne och linolja i regionen" },
      ],
      en: [
        { label: "Scientific Name", value: "Linum usitatissimum" },
        { label: "Height", value: "30 – 80 cm" },
        { label: "Blooming Season", value: "July – August" },
        { label: "Features", value: "Sky-blue flowers that last one day, slender stems" },
        { label: "Cultural History", value: "Historical crop for linen and linseed oil" },
      ],
      de: [
        { label: "Wissenschaftlicher Name", value: "Linum usitatissimum" },
        { label: "Höhe", value: "30 – 80 cm" },
        { label: "Blütezeit", value: "Juli – August" },
        { label: "Merkmale", value: "Himmelblaue eintägige Blüten, schlanke Stängel" },
        { label: "Kulturgeschichte", value: "Historische Nutzpflanze für Leinen und Leinöl" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Kustbygdens himmelsblå guld",
        intro: "Linet är en av våra vackraste och mest mytomspunna kulturväxter. Det växer med en slank, upprätt stjälk och smala, grågröna blad. Under högsommaren slår de skira, himmelsblå blommorna ut. Det magiska med linblomman är att varje enskild blomma ofta bara lever under en enda dag – den slår ut på morgonen och fäller sina kronblad redan framåt eftermiddagen. Trots detta blommar ett linfält intensivt under flera veckor eftersom nya knoppar ständigt spricker ut.\n\nLängs denna del av kusten, och särskilt inåt landet i Hälsingland, har linet formats av och format människorna i århundraden. Historiskt var linodlingarna regionens ekonomiska ryggrad, och kunskapen om att odla, röta, bråka, skäkta och spinna linet har gått i arv i generationer.\n\nSpånadslinet odlas för sina starka fibrer som blir till linnetyg, medan oljelinet odlas för fröna som pressas till linolja. Blommande linfält uppskattas också av bin och humlor under varma sommarmorgnar.",
        quote: "Det himmelsblå linet har satt färg på kustbygdens historia.",
        sections: [
          { heading: "Beskrivning & Kännetecken", body: "Linet växer med slanka stjälkar och smala, grågröna blad. Varje skir blå blomma lever ofta bara en enda dag, men nya knoppar gör att hela fältet blommar i veckor." },
          { heading: "Kulturlandskapet vid Kusten", body: "Längs kusten och inåt landet i Hälsingland har linodlingen format människorna i århundraden. Kunskapen om att odla, röta, bråka, skäkta och spinna linet har gått i arv i generationer." },
          { heading: "Användning & Ekologi", body: "Spånadslinets starka fibrer blir till linnetyg och oljelinets frön pressas till linolja. Blommande linfält uppskattas av pollinerande bin och humlor." },
        ],
      },
      en: {
        heroSubtitle: "The sky-blue gold of the coast",
        intro: "Flax is one of our most beautiful and historically significant cultivated plants. Its delicate sky-blue flowers often live for only one day, yet new buds keep the fields blooming for weeks.\n\nAlong the coast and inland in Hälsingland, flax shaped people and landscapes for centuries. The knowledge of growing, retting, breaking and spinning flax was passed down through generations.\n\nFiber flax becomes linen while oilseed flax produces linseed oil, and blooming fields attract bees and bumblebees.",
        quote: "The sky-blue flax has coloured the history of the coastal countryside.",
        sections: [
          { heading: "Description & Characteristics", body: "Flax grows with slender stems and narrow grey-green leaves. Each delicate blue flower often lasts one day, while new buds keep the field blooming for weeks." },
          { heading: "The Coastal Cultural Landscape", body: "Flax cultivation shaped coastal communities for centuries, with knowledge passed down through generations." },
          { heading: "Usage & Ecology", body: "Fiber flax becomes linen, oilseed flax produces linseed oil, and blooming fields attract pollinators." },
        ],
      },
      de: {
        heroSubtitle: "Das himmelblaue Gold der Küste",
        intro: "Der Lein ist eine unserer schönsten und geschichtsträchtigsten Kulturpflanzen. Seine zarten himmelblauen Blüten leben oft nur einen Tag, doch neue Knospen lassen die Felder wochenlang blühen.\n\nAn der Küste und im Hinterland prägte der Flachsanbau jahrhundertelang das Leben. Das Wissen über Anbau, Rösten, Brechen und Spinnen wurde weitergegeben.\n\nFaserlein wird zu Leinen, Öllein liefert Leinöl, und blühende Felder ziehen Bienen und Hummeln an.",
        quote: "Der himmelblaue Lein hat die Geschichte der Küste geprägt.",
        sections: [
          { heading: "Beschreibung & Merkmale", body: "Der Lein wächst mit schlanken Stängeln und schmalen graugrünen Blättern. Jede zarte blaue Blüte lebt oft nur einen Tag." },
          { heading: "Kulturlandschaft der Küste", body: "Der Flachsanbau prägte die Küstengemeinden über Jahrhunderte, und das Wissen wurde weitergegeben." },
          { heading: "Nutzung & Ökologie", body: "Faserlein wird zu Leinen, Öllein liefert Leinöl, und blühende Felder ziehen Bestäuber an." },
        ],
      },
    },
    media: {
      heroImage: { url: "/images/lin-hero.png", alt: { sv: "Ett fält med blommande blått lin nära kusten", en: "A field of blooming blue flax near the coast", de: "Ein blühendes blaues Flachsfeld nahe der K��ste" } },
      detailImage: { url: "/images/lin-blomma.png", alt: { sv: "Närbild på blå linblomma", en: "Close-up of a blue flax flower", de: "Nahaufnahme einer Flachsblüte" } },
      galleryImages: [
        { src: "/images/lin-hero.png", alt: "Video från närområdet", video: "/video/lin-naromradet.mp4", tall: true },
        { src: "/images/lin-hero.png", alt: "Blommande linfält", tall: true },
        { src: "/images/lin-blomma.png", alt: "Närbild på blå linblomma" },
        { src: "/images/lin-kapsel.png", alt: "Linfrökapslar på stjälk" },
        { src: "/images/lin-landskap.png", alt: "Kulturlandskap med odling" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/lin_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "/audio/lin_guide_en.mp3" },
        de: { title: "Dem Guide zuhören", url: "/audio/lin_guide_de.mp3" },
      },
    },
    interactive: {
      sv: { title: "Ställ en fråga om Linet", intro: "Jag har klätt människor och skyddat hus i hundratals år. Fråga mig om hur jag blir till tyg, varför mina blommor lever så kort tid eller min roll i historien!", presetQuestions: ["Varför blommar du bara en dag?", "Hur förvandlas du från växt till tyg?", "Vad använder man linolja till?"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Ask a question about the Flax", intro: "I have clothed people and protected buildings for centuries. Ask me how I become fabric or why my flowers are so short-lived!", presetQuestions: ["Why do your flowers only last a day?", "How do you become fabric?", "What is linseed oil used for?"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Stelle eine Frage an den Lein", intro: "Ich kleide Menschen und schütze Häuser seit Jahrhunderten. Frage mich, wie ich zu Stoff werde!", presetQuestions: ["Warum blühst du nur einen Tag?", "Wie wird aus dir Stoff?", "Wofür wird Leinöl verwendet?"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: "Du är ett lin (Linum usitatissimum) längs Kustvägen. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta från linets sida.",
    avatarImage: "/images/lin-hero.png",
    chatAvatarAlt: "Ett blommande linfält",
    relatedSpecies: [
      { slug: "tall", name: "Tall", latin: "Pinus sylvestris", image: "/images/tall-hero.png" },
      { slug: "kantarell", name: "Kantarell", latin: "Cantharellus cibarius", image: "/images/kantarell-hero.png" },
      { slug: "havsorn", name: "Havsörn", latin: "Haliaeetus albicilla", image: "/images/havsorn-hero.png" },
    ],
    relatedSectionHeading: { sv: "Andra arter i området", en: "Other species in the area", de: "Andere Arten in der Umgebung" },
    relatedLinkLabel: { sv: "Läs mer", en: "Read more", de: "Mehr erfahren" },
  },
  bofink: {
    id: "bofink",
    scientificName: "Fringilla coelebs",
    category: { sv: "Fågel", en: "Birds", de: "Vögel" },
    names: { sv: "Bofink", en: "Common Chaffinch", de: "Buchfink" },
    meta: {
      sv: { title: "Bofink �� Kustvägen Naturguide", description: "Lär känna bofinken längs Kustvägen. Fakta om en av Sveriges vanligaste och mest sångstarka småfåglar." },
      en: { title: "Common Chaffinch – Kustvägen Nature Guide", description: "Discover the Common Chaffinch along the Coastal Road, one of Sweden's most common and vocal songbirds." },
      de: { title: "Buchfink – Kustvägen Naturführer", description: "Entdecken Sie den Buchfinken entlang des Kustvägen, einen der häufigsten und gesangsfreudigsten Singvögel Schwedens." },
    },
    quickFacts: {
      sv: [
        { label: "Vikt", value: "18–29 g" },
        { label: "Föda", value: "Frön och insekter" },
        { label: "Läte", value: "Klingande drill som avslutas med en smäll" },
        { label: "Livsmiljö", value: "Skog, park och trädgård" },
      ],
      en: [
        { label: "Weight", value: "18–29 g" },
        { label: "Diet", value: "Seeds and insects" },
        { label: "Call", value: "Ringing trill ending in a flourish" },
        { label: "Habitat", value: "Forest, parks and gardens" },
      ],
      de: [
        { label: "Gewicht", value: "18–29 g" },
        { label: "Nahrung", value: "Samen und Insekten" },
        { label: "Ruf", value: "Klingender Triller mit Schlussfloskel" },
        { label: "Lebensraum", value: "Wald, Parks und Gärten" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skogens flitigaste sångare",
        intro: "Bofinken är en av våra allra vanligaste fåglar och känns igen på hanens rosa bröst och blågrå huvud. Dess klingande sång hörs från trädtopparna redan i tidig vår, och paret bygger ett av skogens mest välkamouflerade bon, klätt med lav och mossa så att det smälter in i grenen.",
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Hanen har tegelrosa bröst och kinder, blågrå hjässa och nacke samt tydliga vita vingband. Honan är gråbrun men visar samma vita vingband i flykten.",
            image: "/images/faglar/bofink-hero.png",
            alt: "Närbild på en bofinkhane på en gren",
            caption: "De vita vingbanden syns tydligt när bofinken flyger upp.",
          },
          {
            heading: "Läte & Beteende",
            body: "Sången är en fallande, klingande drill som avslutas med en yvig slutkläm, ett av vårens första fågelläten. Bofinken rör sig gärna på marken och plockar frön och insekter med snabba, ryckiga hopp.",
            image: "/images/faglar/bofink-detalj.png",
            alt: "Bofink som söker föda på marken",
            caption: "Sången hörs från trädtopparna redan i mars.",
          },
          {
            heading: "Livsmiljö & Häckning",
            body: "Bofinken trivs i all slags skog, parker och trädgårdar. Boet är en mästerlig skål av mossa och lav som kamoufleras mot grenen där det byggs.",
            image: "/images/faglar/bofink-miljo.png",
            alt: "Solbelyst blandskog med björk och gran",
            caption: "Det lavklädda boet smälter nästan helt in i trädet.",
          },
        ],
        sections: [],
      },
      en: {
        heroSubtitle: "The forest's busiest singer",
        intro: "The Chaffinch is one of our most common birds, recognised by the male's pink breast and blue-grey head. Its ringing song echoes from treetops from early spring, and the pair builds one of the forest's best-camouflaged nests, lined with lichen and moss to blend into the branch.",
        detailsGrid: [
          {
            heading: "Appearance & Features",
            body: "The male has a brick-pink breast and cheeks, a blue-grey crown and nape, and bold white wing bars. The female is grey-brown but shows the same white wing bars in flight.",
            image: "/images/faglar/bofink-hero.png",
            alt: "Close-up of a male chaffinch on a branch",
            caption: "The white wing bars flash clearly as the chaffinch takes off.",
          },
          {
            heading: "Call & Behaviour",
            body: "The song is a descending, ringing trill ending in a flourish, one of the first bird songs of spring. The chaffinch often feeds on the ground, picking seeds and insects with quick, jerky hops.",
            image: "/images/faglar/bofink-detalj.png",
            alt: "Chaffinch foraging on the ground",
            caption: "The song rings out from the treetops as early as March.",
          },
          {
            heading: "Habitat & Nesting",
            body: "The chaffinch thrives in all kinds of forest, parks and gardens. Its nest is a masterful cup of moss and lichen, camouflaged against the branch where it is built.",
            image: "/images/faglar/bofink-miljo.png",
            alt: "Sunlit mixed forest with birch and spruce",
            caption: "The lichen-clad nest blends almost completely into the tree.",
          },
        ],
        sections: [],
      },
      de: {
        heroSubtitle: "Der fleißigste Sänger des Waldes",
        intro: "Der Buchfink ist einer unserer häufigsten Vögel, erkennbar am rosa Bruststück und blaugrauen Kopf des Männchens. Sein klingender Gesang ertönt schon im Frühfrühling von den Baumwipfeln, und das Paar baut eines der bestgetarnten Nester des Waldes, ausgekleidet mit Flechten und Moos.",
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Das Männchen hat eine ziegelrosa Brust und Wangen, einen blaugrauen Scheitel und Nacken sowie deutliche weiße Flügelbinden. Das Weibchen ist graubraun, zeigt im Flug aber dieselben weißen Flügelbinden.",
            image: "/images/faglar/bofink-hero.png",
            alt: "Nahaufnahme eines Buchfink-Männchens auf einem Zweig",
            caption: "Die weißen Flügelbinden blitzen deutlich auf, wenn der Buchfink auffliegt.",
          },
          {
            heading: "Ruf & Verhalten",
            body: "Der Gesang ist ein abfallender, klingender Triller mit einer Schlussfloskel, einer der ersten Vogelgesänge des Frühlings. Der Buchfink sucht oft am Boden nach Nahrung und pickt Samen und Insekten mit schnellen, ruckartigen Sprüngen.",
            image: "/images/faglar/bofink-detalj.png",
            alt: "Buchfink bei der Nahrungssuche am Boden",
            caption: "Der Gesang ertönt schon im März von den Baumwipfeln.",
          },
          {
            heading: "Lebensraum & Brut",
            body: "Der Buchfink lebt in allen Arten von Wald, Parks und Gärten. Sein Nest ist ein meisterhafter Napf aus Moos und Flechten, getarnt am Zweig, an dem es gebaut wird.",
            image: "/images/faglar/bofink-miljo.png",
            alt: "Sonnenbeleuchteter Mischwald mit Birke und Fichte",
            caption: "Das flechtenbedeckte Nest verschmilzt fast völlig mit dem Baum.",
          },
        ],
        sections: [],
      },
    },
    media: {
      heroImage: { url: "/images/faglar/bofink-hero.png", alt: { sv: "Bofink på en björkgren", en: "Chaffinch on a birch branch", de: "Buchfink auf einem Birkenzweig" } },
      galleryImages: [
        {
          src: "/video/bofink-naromradet.mp4",
          alt: "Video med bofink från närområdet",
          video: "/video/bofink-naromradet.mp4",
          tall: true,
        },
        { src: "/images/faglar/bofink-hero.png", alt: "Bofink (Fringilla coelebs) på gren" },
        { src: "/images/faglar/bofink-detalj.png", alt: "Bofink söker föda på marken", tall: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/bofink_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "/audio/bofink_guide_en.mp3" },
        de: { title: "Dem Guide zuhören", url: "/audio/bofink_guide_de.mp3" },
      },
    },
    interactive: {
      sv: { title: "Ställ en fråga om Bofinken", intro: "Jag sjunger från trädtopparna varje vår. Fråga mig om min sång, mitt bo eller min föda!", presetQuestions: ["Varför sjunger du så mycket?", "Hur bygger du ditt bo?", "Vad äter du?"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Ask a question about the Chaffinch", intro: "I sing from the treetops every spring. Ask me about my song, my nest, or my food!", presetQuestions: ["Why do you sing so much?", "How do you build your nest?", "What do you eat?"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Stelle eine Frage an den Buchfinken", intro: "Ich singe jeden Frühling von den Baumwipfeln. Frage mich nach meinem Gesang, meinem Nest oder meiner Nahrung!", presetQuestions: ["Warum singst du so viel?", "Wie baust du dein Nest?", "Was isst du?"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: "Du är en bofink (Fringilla coelebs) längs Kustvägen. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta från bofinkens sida.",
    avatarImage: "/images/faglar/bofink-hero.png",
    chatAvatarAlt: "En bofink på en gren",
    relatedSpecies: [
      { slug: "koltrast", name: "Koltrast", latin: "Turdus merula", image: "/images/faglar/koltrast-hero.png" },
      { slug: "domherre", name: "Domherre", latin: "Pyrrhula pyrrhula", image: "/images/faglar/domherre-hero.png" },
      { slug: "notskrika", name: "Nötskrika", latin: "Garrulus glandarius", image: "/images/faglar/notskrika-hero.png" },
    ],
    relatedSectionHeading: { sv: "Andra arter i området", en: "Other species in the area", de: "Andere Arten in der Umgebung" },
    relatedLinkLabel: { sv: "Läs mer", en: "Read more", de: "Mehr erfahren" },
  },
  gratrut: {
    id: "gratrut",
    scientificName: "Larus argentatus",
    category: { sv: "Fågel", en: "Birds", de: "Vögel" },
    names: { sv: "Gråtrut", en: "European Herring Gull", de: "Silbermöwe" },
    meta: {
      sv: { title: "Gråtrut – Kustvägen Naturguide", description: "Lär känna gråtruten längs Kustvägen. Fakta om kustens mest kända och högljudda fågel." },
      en: { title: "European Herring Gull – Kustvägen Nature Guide", description: "Discover the Herring Gull along the Coastal Road, the coast's most recognisable and vocal bird." },
      de: { title: "Silbermöwe – Kustvägen Naturführer", description: "Entdecken Sie die Silbermöwe entlang des Kustvägen, den bekanntesten und lautesten Vogel der Küste." },
    },
    quickFacts: {
      sv: [
        { label: "Vikt", value: "750–1250 g" },
        { label: "Föda", value: "Fisk, kräftdjur, avfall" },
        { label: "Läte", value: "Högljutt skrattande skri" },
        { label: "Livsmiljö", value: "Kustklippor, hamnar och skärgård" },
      ],
      en: [
        { label: "Weight", value: "750–1250 g" },
        { label: "Diet", value: "Fish, crustaceans, scraps" },
        { label: "Call", value: "Loud laughing cry" },
        { label: "Habitat", value: "Coastal cliffs, harbours and archipelago" },
      ],
      de: [
        { label: "Gewicht", value: "750–1250 g" },
        { label: "Nahrung", value: "Fisch, Krebstiere, Abfälle" },
        { label: "Ruf", value: "Lautes, lachendes Kreischen" },
        { label: "Lebensraum", value: "Küstenfelsen, Häfen und Schärengarten" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skärgårdens skrikande vaktare",
        intro: "Gråtruten är kustens mest bekanta fågel, känd för sitt kraftfulla skri och sina gula ben. Den häckar i kolonier på klippöar längs Kustvägen och är en skicklig opportunist som lika gärna plockar musslor ur vattnet som stjäl matrester i hamnen. Ungfåglarna har ett brunspräckligt fjäderdräkt som tar flera år att bli helt vit och grå.",
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Gråtruten är en storvuxen mås med ljusgrå ovansida, vit undersida och skära ben. Den gula näbben bär en röd fläck som ungarna pickar på för att tigga mat.",
            image: "/images/faglar/gratrut-hero.png",
            alt: "Närbild på en gråtrut vid kusten",
            caption: "Den röda näbbfläcken är ungarnas signal att be om mat.",
          },
          {
            heading: "Läte & Beteende",
            body: "Det gälla, skrattande ropet hörs ständigt i hamnar och kustsamhällen. Gråtruten är en anpassningsbar allätare som lika gärna tar fisk som rester efter människan.",
            image: "/images/faglar/gratrut-detalj.png",
            alt: "Gråtrut som flyger över vattnet",
            caption: "Det skrattande ropet hör till skärgårdens ljudbild.",
          },
          {
            heading: "Livsmiljö & Häckning",
            body: "Den häckar i kolonier på klippor och skär längs kusten. Boet är en enkel grop fodrad med gräs och tång på öppna klipphällar.",
            image: "/images/faglar/gratrut-miljo.png",
            alt: "Klippig skärgårdskust i gyllene ljus",
            caption: "Kobbar och skär ger trygga häckningsplatser.",
          },
        ],
        sections: [],
      },
      en: {
        heroSubtitle: "The archipelago's shrieking guardian",
        intro: "The Herring Gull is the coast's most familiar bird, known for its powerful cry and yellow legs. It nests in colonies on rocky islets along the Coastal Road and is a skilled opportunist, just as happy prising mussels from the water as stealing scraps in the harbour. Juveniles have brown, mottled plumage that takes several years to turn fully white and grey.",
        detailsGrid: [
          {
            heading: "Appearance & Features",
            body: "The herring gull is a large gull with pale grey upperparts, white underparts and pink legs. Its yellow bill carries a red spot that chicks peck at to beg for food.",
            image: "/images/faglar/gratrut-hero.png",
            alt: "Close-up of a herring gull on the coast",
            caption: "The red bill spot is the chicks' cue to beg for food.",
          },
          {
            heading: "Call & Behaviour",
            body: "Its shrill, laughing call rings out constantly in harbours and coastal towns. The herring gull is an adaptable omnivore, taking fish as readily as human leftovers.",
            image: "/images/faglar/gratrut-detalj.png",
            alt: "Herring gull flying over the water",
            caption: "The laughing call is part of the archipelago's soundscape.",
          },
          {
            heading: "Habitat & Nesting",
            body: "It nests in colonies on cliffs and skerries along the coast. The nest is a simple scrape lined with grass and seaweed on open rock.",
            image: "/images/faglar/gratrut-miljo.png",
            alt: "Rocky archipelago coast in golden light",
            caption: "Islets and skerries offer safe nesting sites.",
          },
        ],
        sections: [],
      },
      de: {
        heroSubtitle: "Der schreiende Wächter des Schärengartens",
        intro: "Die Silbermöwe ist der bekannteste Vogel der Küste, bekannt für ihren kräftigen Schrei und ihre gelben Beine. Sie brütet in Kolonien auf Felseninseln entlang des Kustvägen und ist eine geschickte Opportunistin. Jungvögel haben ein braun geschecktes Gefieder, das erst nach mehreren Jahren vollständig weiß und grau wird.",
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Die Silbermöwe ist eine große Möwe mit hellgrauer Oberseite, weißer Unterseite und rosa Beinen. Ihr gelber Schnabel trägt einen roten Fleck, an dem die Küken picken, um Futter zu betteln.",
            image: "/images/faglar/gratrut-hero.png",
            alt: "Nahaufnahme einer Silbermöwe an der Küste",
            caption: "Der rote Schnabelfleck ist das Signal der Küken zum Betteln.",
          },
          {
            heading: "Ruf & Verhalten",
            body: "Ihr schriller, lachender Ruf ertönt ständig in Häfen und Küstenorten. Die Silbermöwe ist ein anpassungsfähiger Allesfresser, der Fisch ebenso gern nimmt wie menschliche Reste.",
            image: "/images/faglar/gratrut-detalj.png",
            alt: "Silbermöwe im Flug über dem Wasser",
            caption: "Der lachende Ruf gehört zur Klangkulisse der Schären.",
          },
          {
            heading: "Lebensraum & Brut",
            body: "Sie brütet in Kolonien auf Klippen und Schären entlang der Küste. Das Nest ist eine einfache Mulde, ausgekleidet mit Gras und Tang auf offenem Fels.",
            image: "/images/faglar/gratrut-miljo.png",
            alt: "Felsige Schärenküste im goldenen Licht",
            caption: "Inselchen und Schären bieten sichere Brutplätze.",
          },
        ],
        sections: [],
      },
    },
    media: {
      heroImage: { url: "/images/faglar/gratrut-hero.png", alt: { sv: "Gråtrut på klippa vid havet", en: "Herring gull on a coastal cliff", de: "Silbermöwe auf einem Küstenfelsen" } },
      galleryImages: [
        {
          src: "/video/gratrut-naromradet.mp4",
          alt: "Video med gråtrut från närområdet",
          video: "/video/gratrut-naromradet.mp4",
          tall: true,
        },
        { src: "/images/faglar/gratrut-hero.png", alt: "Gråtrut (Larus argentatus) på klippa" },
        { src: "/images/faglar/gratrut-detalj.png", alt: "Gråtrutens bo med ägg på klipphäll", tall: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/gratrut_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "/audio/gratrut_guide_en.mp3" },
        de: { title: "Dem Guide zuhören", url: "/audio/gratrut_guide_de.mp3" },
      },
    },
    interactive: {
      sv: { title: "Ställ en fråga om Gråtruten", intro: "Jag vaktar skärgården med skarpa ögon och ett kraftfullt skri. Fråga mig om mitt bo, min föda eller mitt läte!", presetQuestions: ["Varför skriker du så mycket?", "Var bygger du ditt bo?", "Vad äter du?"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Ask a question about the Herring Gull", intro: "I guard the archipelago with sharp eyes and a powerful cry. Ask me about my nest, my food, or my call!", presetQuestions: ["Why do you cry so much?", "Where do you build your nest?", "What do you eat?"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Stelle eine Frage an die Silbermöwe", intro: "Ich bewache den Schärengarten mit scharfen Augen und einem kräftigen Schrei. Frage mich nach meinem Nest, meiner Nahrung oder meinem Ruf!", presetQuestions: ["Warum schreist du so viel?", "Wo baust du dein Nest?", "Was isst du?"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: "Du är en gråtrut (Larus argentatus) längs Kustvägen. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta från gråtrutens sida.",
    avatarImage: "/images/faglar/gratrut-hero.png",
    chatAvatarAlt: "En gråtrut på en klippa",
    relatedSpecies: [
      { slug: "havsorn", name: "Havsörn", latin: "Haliaeetus albicilla", image: "/images/species-eagle.png" },
      { slug: "fiskgjuse", name: "Fiskgjuse", latin: "Pandion haliaetus", image: "/images/sp-osprey.png" },
      { slug: "grahager", name: "Gråhäger", latin: "Ardea cinerea", image: "/images/faglar/grahager-hero.png" },
    ],
    relatedSectionHeading: { sv: "Andra arter i området", en: "Other species in the area", de: "Andere Arten in der Umgebung" },
    relatedLinkLabel: { sv: "Läs mer", en: "Read more", de: "Mehr erfahren" },
  },
  tjader: {
    id: "tjader",
    scientificName: "Tetrao urogallus",
    category: { sv: "Fågel", en: "Birds", de: "Vögel" },
    names: { sv: "Tjäder", en: "Western Capercaillie", de: "Auerhahn" },
    meta: {
      sv: { title: "Tjäder – Kustvägen Naturguide", description: "Lär känna tjädern längs Kustvägen. Fakta om Europas största hönsfågel och dess spektakulära vårspel." },
      en: { title: "Western Capercaillie – Kustvägen Nature Guide", description: "Discover the Capercaillie along the Coastal Road, Europe's largest grouse and its spectacular spring display." },
      de: { title: "Auerhahn – Kustvägen Naturführer", description: "Entdecken Sie den Auerhahn entlang des Kustvägen, Europas größtes Waldhuhn mit seinem spektakulären Frühlingsbalzspiel." },
    },
    quickFacts: {
      sv: [
        { label: "Vikt", value: "Hane upp till 5 kg" },
        { label: "Föda", value: "Barr, bär och skott" },
        { label: "Läte", value: "Klickande och poppande spelläte" },
        { label: "Livsmiljö", value: "Gammal barrskog" },
      ],
      en: [
        { label: "Weight", value: "Male up to 5 kg" },
        { label: "Diet", value: "Conifer needles, berries and shoots" },
        { label: "Call", value: "Clicking and popping display song" },
        { label: "Habitat", value: "Old-growth coniferous forest" },
      ],
      de: [
        { label: "Gewicht", value: "Hahn bis zu 5 kg" },
        { label: "Nahrung", value: "Nadeln, Beeren und Triebe" },
        { label: "Ruf", value: "Klickender und knallender Balzgesang" },
        { label: "Lebensraum", value: "Alter Nadelwald" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skogens tunga vårspelare",
        intro: "Tjädern är Europas största hönsfågel och hanen är en imponerande syn med sin glänsande svart-gröna bröstfjäll och röda ögonbrynshud. Varje vår samlas hanarna på traditionella spelplatser i skogen där de klickar, poppar och sprider sin stjärt för att imponera på honorna. Utanför spelet är tjädern skygg och tillbringar mesta tiden gömd i gammal tät barrskog.",
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Tuppen är en väldig, kolsvart skogsfågel med grönskimrande bröst, kraftig ljus näbb och ett rött hudveck ovanför ögat. Hönan är betydligt mindre och brunspräcklig.",
            image: "/images/faglar/tjader-hero.png",
            alt: "Tjädertupp i gammal tallskog",
            caption: "Tuppens grönskimrande bröst syns i motljus.",
          },
          {
            heading: "Spel & Beteende",
            body: "I gryningen på våren spelar tupparna på fasta spelplatser med klickande och kork-liknande läten. Om vintern lever tjädern nästan enbart på tallbarr.",
            image: "/images/faglar/tjader-detalj.png",
            alt: "Tjäder som spelar på marken",
            caption: "Spelet i gryningen är ett av skogens märkligaste skådespel.",
          },
          {
            heading: "Livsmiljö & Häckning",
            body: "Tjädern kräver stora, gamla barrskogar med rik undervegetation av blåbärsris. Blåbärsriset ger både föda och skydd åt kycklingarna.",
            image: "/images/faglar/tjader-miljo.png",
            alt: "Gammal tallskog med blåbärsris",
            caption: "Gammelskogens blåbärsris är avgörande för tjädern.",
          },
        ],
        sections: [],
      },
      en: {
        heroSubtitle: "The forest's heavyweight spring performer",
        intro: "The Capercaillie is Europe's largest grouse, and the male is an impressive sight with glossy black-green breast feathers and red eyebrow wattle. Every spring the males gather at traditional display grounds in the forest, clicking, popping and fanning their tails to impress the females. Outside the display season, the Capercaillie is shy and spends most of its time hidden in old dense conifer forest.",
        detailsGrid: [
          {
            heading: "Appearance & Features",
            body: "The male is a huge, coal-black forest bird with a green-glossed breast, a heavy pale bill and a red wattle above the eye. The hen is much smaller and mottled brown.",
            image: "/images/faglar/tjader-hero.png",
            alt: "Male capercaillie in old pine forest",
            caption: "The male's green-glossed breast shows in backlight.",
          },
          {
            heading: "Display & Behaviour",
            body: "At dawn in spring the males display at traditional leks with clicking and cork-popping calls. In winter the capercaillie lives almost entirely on pine needles.",
            image: "/images/faglar/tjader-detalj.png",
            alt: "Capercaillie displaying on the ground",
            caption: "The dawn lek is one of the forest's strangest spectacles.",
          },
          {
            heading: "Habitat & Nesting",
            body: "The capercaillie needs large, old conifer forests with a rich bilberry understorey. The bilberry shrubs provide both food and cover for the chicks.",
            image: "/images/faglar/tjader-miljo.png",
            alt: "Old pine forest with bilberry shrubs",
            caption: "The old forest's bilberry shrubs are vital for the capercaillie.",
          },
        ],
        sections: [],
      },
      de: {
        heroSubtitle: "Der schwergewichtige Balzkünstler des Waldes",
        intro: "Der Auerhahn ist Europas größtes Waldhuhn, und das Männchen ist mit seinem glänzend schwarz-grünen Brustgefieder und der roten Augenbrauenhaut ein beeindruckender Anblick. Jedes Frühjahr versammeln sich die Hähne an traditionellen Balzplätzen im Wald. Außerhalb der Balzzeit ist der Auerhahn scheu und verbringt die meiste Zeit versteckt im alten, dichten Nadelwald.",
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Der Hahn ist ein riesiger, kohlschwarzer Waldvogel mit grün schimmernder Brust, kräftigem hellem Schnabel und einer roten Hautfalte über dem Auge. Die Henne ist viel kleiner und braun gescheckt.",
            image: "/images/faglar/tjader-hero.png",
            alt: "Auerhahn im alten Kiefernwald",
            caption: "Die grün schimmernde Brust des Hahns zeigt sich im Gegenlicht.",
          },
          {
            heading: "Balz & Verhalten",
            body: "Im Morgengrauen des Frühlings balzen die Hähne an festen Balzplätzen mit klickenden und korkenähnlichen Rufen. Im Winter lebt das Auerhuhn fast nur von Kiefernnadeln.",
            image: "/images/faglar/tjader-detalj.png",
            alt: "Balzendes Auerhuhn am Boden",
            caption: "Die Balz im Morgengrauen ist eines der seltsamsten Schauspiele des Waldes.",
          },
          {
            heading: "Lebensraum & Brut",
            body: "Das Auerhuhn braucht große, alte Nadelwälder mit reicher Heidelbeer-Unterschicht. Die Heidelbeersträucher bieten den Küken Nahrung und Deckung.",
            image: "/images/faglar/tjader-miljo.png",
            alt: "Alter Kiefernwald mit Heidelbeersträuchern",
            caption: "Die Heidelbeersträucher des Altwaldes sind für das Auerhuhn entscheidend.",
          },
        ],
        sections: [],
      },
    },
    media: {
      heroImage: { url: "/images/faglar/tjader-hero.png", alt: { sv: "Tjäderhane i barrskog", en: "Capercaillie male in coniferous forest", de: "Auerhahn im Nadelwald" } },
      galleryImages: [
        { src: "/images/faglar/tjader-hero.png", alt: "Tjäder (Tetrao urogallus) i skogen" },
        { src: "/images/faglar/tjader-detalj.png", alt: "Tjäderhane spelar i skogsgläntan", tall: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/tjader_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "/audio/tjader_guide_en.mp3" },
        de: { title: "Dem Guide zuhören", url: "/audio/tjader_guide_de.mp3" },
      },
    },
    interactive: {
      sv: { title: "Ställ en fråga om Tjädern", intro: "Jag spelar och klickar i skogen varje vår. Fråga mig om mitt spel, min föda eller var jag bor!", presetQuestions: ["Vad är ett tjäderspel?", "Vad äter du?", "Var i skogen bor du?"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Ask a question about the Capercaillie", intro: "I display and click in the forest every spring. Ask me about my display, my food, or where I live!", presetQuestions: ["What is a capercaillie display?", "What do you eat?", "Where in the forest do you live?"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Stelle eine Frage an den Auerhahn", intro: "Ich balze und klicke jeden Frühling im Wald. Frage mich nach meiner Balz, meiner Nahrung oder wo ich wohne!", presetQuestions: ["Was ist eine Auerhahn-Balz?", "Was isst du?", "Wo im Wald wohnst du?"], fallback: "Dazu enth��lt das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: "Du är en tjäder (Tetrao urogallus) längs Kustvägen. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta fr��n tjäderns sida.",
    avatarImage: "/images/faglar/tjader-hero.png",
    chatAvatarAlt: "En tjäderhane i skogen",
    relatedSpecies: [
      { slug: "orre", name: "Orre", latin: "Lyrurus tetrix", image: "/images/faglar/orre-hero.png" },
      { slug: "lappuggla", name: "Lappuggla", latin: "Strix nebulosa", image: "/images/faglar/lappuggla-hero.png" },
      { slug: "graspett", name: "Gråspett", latin: "Picus canus", image: "/images/faglar/graspett-hero.png" },
    ],
    relatedSectionHeading: { sv: "Andra arter i området", en: "Other species in the area", de: "Andere Arten in der Umgebung" },
    relatedLinkLabel: { sv: "Läs mer", en: "Read more", de: "Mehr erfahren" },
  },
  graspett: {
    id: "graspett",
    scientificName: "Picus canus",
    category: { sv: "Fågel", en: "Birds", de: "Vögel" },
    names: { sv: "Gråspett", en: "Grey-headed Woodpecker", de: "Grauspecht" },
    meta: {
      sv: { title: "Gråspett – Kustvägen Naturguide", description: "Lär känna gråspetten längs Kustvägen. Fakta om den ovanliga hackspetten med det gråa huvudet." },
      en: { title: "Grey-headed Woodpecker – Kustvägen Nature Guide", description: "Discover the Grey-headed Woodpecker along the Coastal Road, an uncommon woodpecker with a grey head." },
      de: { title: "Grauspecht – Kustvägen Naturführer", description: "Entdecken Sie den Grauspecht entlang des Kustvägen, einen seltenen Specht mit grauem Kopf." },
    },
    quickFacts: {
      sv: [
        { label: "Vikt", value: "110–170 g" },
        { label: "Föda", value: "Myror och insekter i barken" },
        { label: "Läte", value: "Nedåtgående, klagande drill" },
        { label: "Livsmiljö", value: "Lövskog och skogsbryn" },
      ],
      en: [
        { label: "Weight", value: "110–170 g" },
        { label: "Diet", value: "Ants and insects in bark" },
        { label: "Call", value: "Descending, plaintive trill" },
        { label: "Habitat", value: "Deciduous forest and woodland edges" },
      ],
      de: [
        { label: "Gewicht", value: "110–170 g" },
        { label: "Nahrung", value: "Ameisen und Insekten in der Rinde" },
        { label: "Ruf", value: "Absteigender, klagender Triller" },
        { label: "Lebensraum", value: "Laubwald und Waldränder" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Den tysta hackspetten med grått huvud",
        intro: "Gråspetten är en av våra mest sällsynta hackspettar och skiljer sig från sina släktingar genom sitt gråa huvud och den mer diskreta trumningen. Den letar föda genom att lugnt klättra utmed stammar och grenar på jakt efter myror, snarare än att hamra hårt som gröngölingen. Boet gröps ur i gamla lövträd, ofta samma hål år efter år om det inte förstörs.",
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Gråspetten är en mellanstor, grönryggig hackspett med grått huvud och tunt svart mustaschstreck. Hanen har en liten röd fläck i pannan.",
            image: "/images/faglar/graspett-hero.png",
            alt: "Gråspett på en trädstam",
            caption: "Hanens röda pannfläck skiljer honom från honan.",
          },
          {
            heading: "Läte & Beteende",
            body: "Om våren hörs dess vemodiga, fallande vissling långt genom skogen. Den söker gärna myror på marken och i murken ved.",
            image: "/images/faglar/graspett-detalj.png",
            alt: "Gråspett som söker föda på en stam",
            caption: "Den fallande visslingen är ett typiskt vårläte.",
          },
          {
            heading: "Livsmiljö & Häckning",
            body: "Arten trivs i äldre löv- och blandskog med gott om död ved. Boet hackas ut i murkna lövträd som asp.",
            image: "/images/faglar/graspett-miljo.png",
            alt: "Gammal lövskog med asp och björk",
            caption: "Död ved och gamla aspar är viktiga för gråspetten.",
          },
        ],
        sections: [],
      },
      en: {
        heroSubtitle: "The quiet woodpecker with a grey head",
        intro: "The Grey-headed Woodpecker is one of our rarest woodpeckers, distinguished from its relatives by its grey head and quieter drumming. It forages by calmly climbing along trunks and branches hunting for ants, rather than hammering hard like the Green Woodpecker. The nest is carved into old deciduous trees, often the same hole used year after year if it survives.",
        detailsGrid: [
          {
            heading: "Appearance & Features",
            body: "The grey-headed woodpecker is a medium green-backed woodpecker with a grey head and a thin black moustache stripe. The male has a small red patch on the forehead.",
            image: "/images/faglar/graspett-hero.png",
            alt: "Grey-headed woodpecker on a tree trunk",
            caption: "The male's red forehead patch tells him from the female.",
          },
          {
            heading: "Call & Behaviour",
            body: "In spring its wistful, descending whistle carries far through the forest. It readily searches for ants on the ground and in rotten wood.",
            image: "/images/faglar/graspett-detalj.png",
            alt: "Grey-headed woodpecker foraging on a trunk",
            caption: "The descending whistle is a typical spring call.",
          },
          {
            heading: "Habitat & Nesting",
            body: "The species favours older deciduous and mixed forest with plenty of dead wood. The nest is chiselled out of rotten broadleaf trees such as aspen.",
            image: "/images/faglar/graspett-miljo.png",
            alt: "Old deciduous forest with aspen and birch",
            caption: "Dead wood and old aspens are important for this woodpecker.",
          },
        ],
        sections: [],
      },
      de: {
        heroSubtitle: "Der stille Specht mit dem grauen Kopf",
        intro: "Der Grauspecht ist einer unserer seltensten Spechte und unterscheidet sich von seinen Verwandten durch seinen grauen Kopf und das leisere Trommeln. Er sucht Nahrung, indem er ruhig an Stämmen und Ästen entlangklettert und nach Ameisen jagt. Das Nest wird in alte Laubbäume gehauen, oft dasselbe Loch Jahr für Jahr.",
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Der Grauspecht ist ein mittelgroßer, grünrückiger Specht mit grauem Kopf und dünnem schwarzem Bartstreif. Das Männchen hat einen kleinen roten Stirnfleck.",
            image: "/images/faglar/graspett-hero.png",
            alt: "Grauspecht an einem Baumstamm",
            caption: "Der rote Stirnfleck unterscheidet das Männchen vom Weibchen.",
          },
          {
            heading: "Ruf & Verhalten",
            body: "Im Frühling trägt sein wehmütiger, abfallender Pfiff weit durch den Wald. Er sucht gern Ameisen am Boden und im morschen Holz.",
            image: "/images/faglar/graspett-detalj.png",
            alt: "Grauspecht bei der Nahrungssuche an einem Stamm",
            caption: "Der abfallende Pfiff ist ein typischer Frühlingsruf.",
          },
          {
            heading: "Lebensraum & Brut",
            body: "Die Art bevorzugt ältere Laub- und Mischwälder mit viel Totholz. Die Nisthöhle wird in morsche Laubbäume wie die Espe gehämmert.",
            image: "/images/faglar/graspett-miljo.png",
            alt: "Alter Laubwald mit Espe und Birke",
            caption: "Totholz und alte Espen sind für den Grauspecht wichtig.",
          },
        ],
        sections: [],
      },
    },
    media: {
      heroImage: { url: "/images/faglar/graspett-hero.png", alt: { sv: "Gråspett på trädstam", en: "Grey-headed woodpecker on a tree trunk", de: "Grauspecht am Baumstamm" } },
      galleryImages: [
        { src: "/images/faglar/graspett-hero.png", alt: "Gråspett (Picus canus) på trädstam" },
        { src: "/images/faglar/graspett-detalj.png", alt: "Gråspett vid sitt boträd", tall: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/graspett_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "/audio/graspett_guide_en.mp3" },
        de: { title: "Dem Guide zuhören", url: "/audio/graspett_guide_de.mp3" },
      },
    },
    interactive: {
      sv: { title: "Ställ en fråga om Gråspetten", intro: "Jag klättrar tyst längs trädstammar och letar myror. Fråga mig om mitt bo, min föda eller mitt läte!", presetQuestions: ["Varför trummar du så tyst?", "Vad äter du?", "Var bygger du ditt bo?"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Ask a question about the Grey-headed Woodpecker", intro: "I climb quietly along tree trunks hunting for ants. Ask me about my nest, my food, or my call!", presetQuestions: ["Why do you drum so quietly?", "What do you eat?", "Where do you build your nest?"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Stelle eine Frage an den Grauspecht", intro: "Ich klettere leise an Baumstämmen entlang und suche nach Ameisen. Frage mich nach meinem Nest, meiner Nahrung oder meinem Ruf!", presetQuestions: ["Warum trommelst du so leise?", "Was isst du?", "Wo baust du dein Nest?"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: "Du är en gråspett (Picus canus) längs Kustvägen. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta från gråspettens sida.",
    avatarImage: "/images/faglar/graspett-hero.png",
    chatAvatarAlt: "En gråspett på en trädstam",
    relatedSpecies: [
      { slug: "spillkraka", name: "Spillkråka", latin: "Dryocopus martius", image: "/images/sp-woodpecker.png" },
      { slug: "notskrika", name: "Nötskrika", latin: "Garrulus glandarius", image: "/images/faglar/notskrika-hero.png" },
      { slug: "koltrast", name: "Koltrast", latin: "Turdus merula", image: "/images/faglar/koltrast-hero.png" },
    ],
    relatedSectionHeading: { sv: "Andra arter i området", en: "Other species in the area", de: "Andere Arten in der Umgebung" },
    relatedLinkLabel: { sv: "Läs mer", en: "Read more", de: "Mehr erfahren" },
  },
  orre: {
    id: "orre",
    scientificName: "Lyrurus tetrix",
    category: { sv: "Fågel", en: "Birds", de: "Vögel" },
    names: { sv: "Orre", en: "Black Grouse", de: "Birkhuhn" },
    meta: {
      sv: { title: "Orre – Kustvägen Naturguide", description: "Lär känna orren längs Kustvägen. Fakta om hönsfågeln med den lyrformade stjärten och det dramatiska vårspelet." },
      en: { title: "Black Grouse – Kustvägen Nature Guide", description: "Discover the Black Grouse along the Coastal Road, the grouse with a lyre-shaped tail and a dramatic spring display." },
      de: { title: "Birkhuhn – Kustvägen Naturführer", description: "Entdecken Sie das Birkhuhn entlang des Kustvägen, das Waldhuhn mit dem leierförmigen Schwanz und dramatischer Frühlingsbalz." },
    },
    quickFacts: {
      sv: [
        { label: "Vikt", value: "Hane ca 1,1–1,3 kg" },
        { label: "Föda", value: "Knoppar, bär och insekter" },
        { label: "Läte", value: "Bubblande spelläte på lekplatsen" },
        { label: "Livsmiljö", value: "Myrmarker, hyggen och skogsbryn" },
      ],
      en: [
        { label: "Weight", value: "Male approx. 1.1–1.3 kg" },
        { label: "Diet", value: "Buds, berries and insects" },
        { label: "Call", value: "Bubbling display call at the lek" },
        { label: "Habitat", value: "Bogs, clear-cuts and forest edges" },
      ],
      de: [
        { label: "Gewicht", value: "Hahn ca. 1,1–1,3 kg" },
        { label: "Nahrung", value: "Knospen, Beeren und Insekten" },
        { label: "Ruf", value: "Blubbernder Balzruf am Balzplatz" },
        { label: "Lebensraum", value: "Moore, Kahlschläge und Waldränder" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Myrmarkens svartglänsande dansare",
        intro: "Orrhanen är en spektakulär syn med sin glänsande blåsvarta fjäderdräkt, röda ögonbrynshud och lyrformade stjärt. Varje vår samlas hanarna i gryningen på öppna lekplatser, myrmarker och hyggen, där de bubblar och hoppar för att locka honor. Honan är brunspräcklig och sköter ensam om ungarna, väl gömd i markens vegetation.",
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Orrtuppen är blåsvart med lyrformad stjärt och lysande vita undergump och vingband. Hönan är brunspräcklig och väl kamouflerad.",
            image: "/images/faglar/orre-hero.png",
            alt: "Orrtupp med lyrformad stjärt",
            caption: "Den lyrformade stjärten är tuppens kännemärke.",
          },
          {
            heading: "Spel & Beteende",
            body: "På myrar och hyggen samlas tupparna i gryningen till spel med bubblande kuttrande och väsande. De hoppar och markerar revir mot varandra.",
            image: "/images/faglar/orre-detalj.png",
            alt: "Orre som spelar i gryningen",
            caption: "Det bubblande spelet bär långt över myren.",
          },
          {
            heading: "Livsmiljö & Häckning",
            body: "Orren trivs i mosaiken av myr, hygge och glesa skogsbryn. Öppna myrkanter ger b��de spelplatser och föda.",
            image: "/images/faglar/orre-miljo.png",
            alt: "Dimmig myr och hedmark i gryningen",
            caption: "Myrens öppna kanter är orrens spelplats.",
          },
        ],
        sections: [],
      },
      en: {
        heroSubtitle: "The bog's glossy black dancer",
        intro: "The male Black Grouse is a spectacular sight with glossy blue-black plumage, red eyebrow wattle and a lyre-shaped tail. Every spring the males gather at dawn on open display grounds, bogs and clear-cuts, bubbling and jumping to attract females. The female is mottled brown and raises the chicks alone, well hidden in ground vegetation.",
        detailsGrid: [
          {
            heading: "Appearance & Features",
            body: "The male black grouse is blue-black with a lyre-shaped tail and gleaming white undertail and wing bars. The hen is mottled brown and well camouflaged.",
            image: "/images/faglar/orre-hero.png",
            alt: "Male black grouse with lyre-shaped tail",
            caption: "The lyre-shaped tail is the male's hallmark.",
          },
          {
            heading: "Display & Behaviour",
            body: "On bogs and clearings the males gather at dawn to display with bubbling coos and hissing. They leap and mark territory against one another.",
            image: "/images/faglar/orre-detalj.png",
            alt: "Black grouse displaying at dawn",
            caption: "The bubbling display carries far across the mire.",
          },
          {
            heading: "Habitat & Nesting",
            body: "The black grouse thrives in the mosaic of mire, clearing and open forest edge. Open bog margins provide both display grounds and food.",
            image: "/images/faglar/orre-miljo.png",
            alt: "Misty bog and heathland at dawn",
            caption: "The mire's open margins are the grouse's lek.",
          },
        ],
        sections: [],
      },
      de: {
        heroSubtitle: "Der glänzend schwarze Tänzer des Moores",
        intro: "Der Birkhahn ist mit seinem glänzend blauschwarzen Gefieder, der roten Augenbrauenhaut und dem leierförmigen Schwanz ein spektakulärer Anblick. Jedes Frühjahr versammeln sich die Hähne bei Morgendämmerung auf offenen Balzplätzen. Das Weibchen ist braun gescheckt und zieht die Küken allein auf, gut versteckt in der Bodenvegetation.",
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Der Birkhahn ist blauschwarz mit leierförmigem Schwanz und leuchtend weißen Unterschwanzdecken und Flügelbinden. Die Henne ist braun gescheckt und gut getarnt.",
            image: "/images/faglar/orre-hero.png",
            alt: "Birkhahn mit leierförmigem Schwanz",
            caption: "Der leierförmige Schwanz ist das Kennzeichen des Hahns.",
          },
          {
            heading: "Balz & Verhalten",
            body: "Auf Mooren und Lichtungen versammeln sich die Hähne im Morgengrauen zur Balz mit blubberndem Gurren und Zischen. Sie springen und markieren gegeneinander Revier.",
            image: "/images/faglar/orre-detalj.png",
            alt: "Balzender Birkhahn im Morgengrauen",
            caption: "Die blubbernde Balz trägt weit über das Moor.",
          },
          {
            heading: "Lebensraum & Brut",
            body: "Das Birkhuhn lebt gern im Mosaik aus Moor, Lichtung und offenem Waldrand. Offene Moorränder bieten sowohl Balzplätze als auch Nahrung.",
            image: "/images/faglar/orre-miljo.png",
            alt: "Nebliges Moor und Heide im Morgengrauen",
            caption: "Die offenen Moorränder sind der Balzplatz des Birkhuhns.",
          },
        ],
        sections: [],
      },
    },
    media: {
      heroImage: { url: "/images/faglar/orre-hero.png", alt: { sv: "Orrhane p�� myr", en: "Black grouse male on a bog", de: "Birkhahn auf einem Moor" } },
      galleryImages: [
        { src: "/images/faglar/orre-hero.png", alt: "Orre (Lyrurus tetrix) på myrmark" },
        { src: "/images/faglar/orre-detalj.png", alt: "Orrhöna med kycklingar", tall: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/orre_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "/audio/orre_guide_en.mp3" },
        de: { title: "Dem Guide zuhören", url: "/audio/orre_guide_de.mp3" },
      },
    },
    interactive: {
      sv: { title: "Ställ en fr��ga om Orren", intro: "Jag dansar och bubblar på myren varje vår. Fråga mig om mitt spel, min föda eller mina ungar!", presetQuestions: ["Vad gör du på lekplatsen?", "Vad äter du?", "Var gömmer du dina ungar?"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Ask a question about the Black Grouse", intro: "I dance and bubble on the bog every spring. Ask me about my display, my food, or my chicks!", presetQuestions: ["What do you do at the display ground?", "What do you eat?", "Where do you hide your chicks?"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Stelle eine Frage an das Birkhuhn", intro: "Ich tanze und blubbere jeden Frühling auf dem Moor. Frage mich nach meiner Balz, meiner Nahrung oder meinen Küken!", presetQuestions: ["Was machst du am Balzplatz?", "Was isst du?", "Wo versteckst du deine Küken?"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: "Du är en orre (Lyrurus tetrix) längs Kustvägen. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta från orrens sida.",
    avatarImage: "/images/faglar/orre-hero.png",
    chatAvatarAlt: "En orrhane på myren",
    relatedSpecies: [
      { slug: "tjader", name: "Tjäder", latin: "Tetrao urogallus", image: "/images/faglar/tjader-hero.png" },
      { slug: "lappuggla", name: "Lappuggla", latin: "Strix nebulosa", image: "/images/faglar/lappuggla-hero.png" },
      { slug: "nattskarra", name: "Nattskärra", latin: "Caprimulgus europaeus", image: "/images/faglar/nattskarra-hero.png" },
    ],
    relatedSectionHeading: { sv: "Andra arter i området", en: "Other species in the area", de: "Andere Arten in der Umgebung" },
    relatedLinkLabel: { sv: "Läs mer", en: "Read more", de: "Mehr erfahren" },
  },
  lappuggla: {
    id: "lappuggla",
    scientificName: "Strix nebulosa",
    category: { sv: "Fågel", en: "Birds", de: "Vögel" },
    names: { sv: "Lappuggla", en: "Great Grey Owl", de: "Bartkauz" },
    meta: {
      sv: { title: "Lappuggla – Kustvägen Naturguide", description: "Lär känna lappugglan längs Kustvägen. Fakta om en av världens största ugglor och dess ljudlösa jakt." },
      en: { title: "Great Grey Owl – Kustvägen Nature Guide", description: "Discover the Great Grey Owl along the Coastal Road, one of the world's largest owls and its silent hunt." },
      de: { title: "Bartkauz – Kustvägen Naturführer", description: "Entdecken Sie den Bartkauz entlang des Kustvägen, eine der größten Eulen der Welt und ihre lautlose Jagd." },
    },
    quickFacts: {
      sv: [
        { label: "Vingspann", value: "Upp till 152 cm" },
        { label: "Föda", value: "Sork och smågnagare" },
        { label: "Läte", value: "Djupt, dovt hoande" },
        { label: "Livsmiljö", value: "Gles taiga och myrmarker" },
      ],
      en: [
        { label: "Wingspan", value: "Up to 152 cm" },
        { label: "Diet", value: "Voles and small rodents" },
        { label: "Call", value: "Deep, muffled hooting" },
        { label: "Habitat", value: "Sparse taiga and bogs" },
      ],
      de: [
        { label: "Flügelspanne", value: "Bis zu 152 cm" },
        { label: "Nahrung", value: "Wühlmäuse und kleine Nager" },
        { label: "Ruf", value: "Tiefes, dumpfes Heulen" },
        { label: "Lebensraum", value: "Lichte Taiga und Moore" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Taigans tysta jätte",
        intro: "Lappugglan är en av världens största ugglor till kroppsstorlek, men väger förhållandevis lite tack vare sin täta fjäderdräkt. Den ansiktsdisk med koncentriska ringar hjälper den att fånga in det minsta ljud från en sork under snötäcket, och den kan dyka rakt genom ett tjockt lager snö för att fånga sitt byte. Sedd på håll ser den nästan ut som en gammal trädstubbe med gula ögon.",
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Lappugglan är en stor grå uggla med väldig rund ansiktsskiva ringad av mörka cirklar och små gula ögon. Trots storleken är den mest fjäderdräkt och väger förvånansvärt lite.",
            image: "/images/faglar/lappuggla-hero.png",
            alt: "Lappuggla med stor rund ansiktsskiva",
            caption: "Den ringade ansiktsskivan fångar minsta ljud.",
          },
          {
            heading: "Jakt & Beteende",
            body: "Med sin skarpa hörsel lokaliserar den sorkar under snön och slår till genom snötäcket. Den jagar ofta i skymning från en låg sittplats.",
            image: "/images/faglar/lappuggla-detalj.png",
            alt: "Lappuggla på jakt från en gren",
            caption: "Hörseln avslöjar sorkar djupt under snön.",
          },
          {
            heading: "Livsmiljö & Häckning",
            body: "Arten hör hemma i vidsträckta norrländska barrskogar nära myrar och hyggen. Den häckar gärna i gamla rovfågelbon eller på brutna trädstammar.",
            image: "/images/faglar/lappuggla-miljo.png",
            alt: "Snötäckt barrskog i vinterljus",
            caption: "Barrskog nära öppna myrar ger goda jaktmarker.",
          },
        ],
        sections: [],
      },
      en: {
        heroSubtitle: "The taiga's silent giant",
        intro: "The Great Grey Owl is one of the world's largest owls by body size, though it weighs relatively little thanks to its dense plumage. Its facial disc, with concentric rings, helps it pinpoint the faintest sound of a vole beneath the snow, and it can plunge straight through a thick layer of snow to catch its prey. Seen from a distance it can look almost like an old tree stump with yellow eyes.",
        detailsGrid: [
          {
            heading: "Appearance & Features",
            body: "The great grey owl is a large grey owl with a huge round facial disc ringed by dark circles and small yellow eyes. Despite its size it is mostly plumage and weighs surprisingly little.",
            image: "/images/faglar/lappuggla-hero.png",
            alt: "Great grey owl with large round facial disc",
            caption: "The ringed facial disc catches the faintest sound.",
          },
          {
            heading: "Hunting & Behaviour",
            body: "With its sharp hearing it locates voles under the snow and strikes through the snow cover. It often hunts at dusk from a low perch.",
            image: "/images/faglar/lappuggla-detalj.png",
            alt: "Great grey owl hunting from a branch",
            caption: "Its hearing reveals voles deep beneath the snow.",
          },
          {
            heading: "Habitat & Nesting",
            body: "The species belongs to vast northern conifer forests near mires and clearings. It readily nests in old raptor nests or on broken tree stumps.",
            image: "/images/faglar/lappuggla-miljo.png",
            alt: "Snow-covered conifer forest in winter light",
            caption: "Conifer forest near open mires makes good hunting ground.",
          },
        ],
        sections: [],
      },
      de: {
        heroSubtitle: "Der stille Riese der Taiga",
        intro: "Der Bartkauz ist eine der größten Eulen der Welt nach Körpergröße, wiegt aber dank seines dichten Gefieders relativ wenig. Sein Gesichtsschleier mit konzentrischen Ringen hilft ihm, das leiseste Geräusch einer Wühlmaus unter der Schneedecke zu orten. Aus der Ferne betrachtet sieht er fast wie ein alter Baumstumpf mit gelben Augen aus.",
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Der Bartkauz ist eine große graue Eule mit riesigem rundem Gesichtsschleier, umringt von dunklen Kreisen, und kleinen gelben Augen. Trotz seiner Größe besteht er meist aus Gefieder und wiegt erstaunlich wenig.",
            image: "/images/faglar/lappuggla-hero.png",
            alt: "Bartkauz mit großem rundem Gesichtsschleier",
            caption: "Der geringelte Gesichtsschleier fängt das leiseste Geräusch.",
          },
          {
            heading: "Jagd & Verhalten",
            body: "Mit seinem scharfen Gehör ortet er Wühlmäuse unter dem Schnee und schlägt durch die Schneedecke. Er jagt oft in der Dämmerung von einer niedrigen Warte.",
            image: "/images/faglar/lappuggla-detalj.png",
            alt: "Jagender Bartkauz von einem Ast",
            caption: "Sein Gehör verrät Wühlmäuse tief unter dem Schnee.",
          },
          {
            heading: "Lebensraum & Brut",
            body: "Die Art gehört in weite nördliche Nadelwälder nahe Mooren und Lichtungen. Sie brütet gern in alten Greifvogelnestern oder auf abgebrochenen Baumstümpfen.",
            image: "/images/faglar/lappuggla-miljo.png",
            alt: "Schneebedeckter Nadelwald im Winterlicht",
            caption: "Nadelwald nahe offenen Mooren bietet gute Jagdgründe.",
          },
        ],
        sections: [],
      },
    },
    media: {
      heroImage: { url: "/images/faglar/lappuggla-hero.png", alt: { sv: "Lappuggla på en grangren", en: "Great grey owl on a spruce branch", de: "Bartkauz auf einem Fichtenzweig" } },
      galleryImages: [
        { src: "/images/faglar/lappuggla-hero.png", alt: "Lappuggla (Strix nebulosa) i skogen" },
        { src: "/images/faglar/lappuggla-detalj.png", alt: "Lappuggla i flykt över snötäckt mark", tall: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/lappuggla_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "/audio/lappuggla_guide_en.mp3" },
        de: { title: "Dem Guide zuhören", url: "/audio/lappuggla_guide_de.mp3" },
      },
    },
    interactive: {
      sv: { title: "Ställ en fråga om Lappugglan", intro: "Jag jagar ljudlöst över snön och hör en sork på långt håll. Fråga mig om min jakt, mitt läte eller mina ögon!", presetQuestions: ["Hur jagar du under snön?", "Varför är du så tyst i flykten?", "Vad äter du?"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Ask a question about the Great Grey Owl", intro: "I hunt silently over the snow and can hear a vole from far away. Ask me about my hunting, my call, or my eyes!", presetQuestions: ["How do you hunt under the snow?", "Why are you so quiet in flight?", "What do you eat?"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Stelle eine Frage an den Bartkauz", intro: "Ich jage lautlos über den Schnee und höre eine Wühlmaus aus weiter Ferne. Frage mich nach meiner Jagd, meinem Ruf oder meinen Augen!", presetQuestions: ["Wie jagst du unter dem Schnee?", "Warum bist du im Flug so leise?", "Was isst du?"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: "Du är en lappuggla (Strix nebulosa) längs Kustvägen. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta från lappugglans sida.",
    avatarImage: "/images/faglar/lappuggla-hero.png",
    chatAvatarAlt: "En lappuggla på en grangren",
    relatedSpecies: [
      { slug: "havsorn", name: "Havsörn", latin: "Haliaeetus albicilla", image: "/images/species-eagle.png" },
      { slug: "tjader", name: "Tjäder", latin: "Tetrao urogallus", image: "/images/faglar/tjader-hero.png" },
      { slug: "orre", name: "Orre", latin: "Lyrurus tetrix", image: "/images/faglar/orre-hero.png" },
    ],
    relatedSectionHeading: { sv: "Andra arter i området", en: "Other species in the area", de: "Andere Arten in der Umgebung" },
    relatedLinkLabel: { sv: "Läs mer", en: "Read more", de: "Mehr erfahren" },
  },
  grahager: {
    id: "grahager",
    scientificName: "Ardea cinerea",
    category: { sv: "Fågel", en: "Birds", de: "Vögel" },
    names: { sv: "Gråhäger", en: "Grey Heron", de: "Graureiher" },
    meta: {
      sv: { title: "Gråhäger – Kustvägen Naturguide", description: "Lär känna gråhägern längs Kustvägen. Fakta om den tåliga fiskaren vid strandkanten." },
      en: { title: "Grey Heron – Kustvägen Nature Guide", description: "Discover the Grey Heron along the Coastal Road, the patient fisher at the water's edge." },
      de: { title: "Graureiher – Kustvägen Naturführer", description: "Entdecken Sie den Graureiher entlang des Kustvägen, den geduldigen Fischer am Ufer." },
    },
    quickFacts: {
      sv: [
        { label: "Höjd", value: "90–98 cm" },
        { label: "Föda", value: "Fisk, grodor och smådjur" },
        { label: "Läte", value: "Hest, kraxande skri" },
        { label: "Livsmiljö", value: "Sjöar, vattendrag och kust" },
      ],
      en: [
        { label: "Height", value: "90–98 cm" },
        { label: "Diet", value: "Fish, frogs and small animals" },
        { label: "Call", value: "Hoarse, croaking cry" },
        { label: "Habitat", value: "Lakes, streams and coastline" },
      ],
      de: [
        { label: "Höhe", value: "90–98 cm" },
        { label: "Nahrung", value: "Fisch, Frösche und Kleintiere" },
        { label: "Ruf", value: "Heiseres, krächzendes Schreien" },
        { label: "Lebensraum", value: "Seen, Bäche und Küste" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Strandens tåliga väktare",
        intro: "Gråhägern är en mästare i stillhet. Den kan stå orörlig i vattnet i minuter, ibland över en timme, innan den blixtsnabbt hugger till med sin långa näbb och fångar en fisk eller groda. Den häckar i kolonier högt upp i träd, ofta tillsammans med flera andra par, och byggnaderna av bon kan användas år efter år tills grenarna böjs under vikten.",
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Gråhägern är en storvuxen, långbent vadare med grå ovansida, vit hals och en svart tofs bakom ögat. I flykten drar den in halsen i ett tydligt S.",
            image: "/images/faglar/grahager-hero.png",
            alt: "Gråhäger vid strandkanten",
            caption: "Den indragna S-halsen skiljer hägern från tranan i flykten.",
          },
          {
            heading: "Jakt & Beteende",
            body: "Den står orörlig i grunt vatten och spetsar fisk och grodor med blixtsnabba stötar. Tålamod är dess främsta jaktmetod.",
            image: "/images/faglar/grahager-detalj.png",
            alt: "Gråhäger som fiskar i grunt vatten",
            caption: "Ett blixtsnabbt hugg avslutar den långa väntan.",
          },
          {
            heading: "Livsmiljö & Häckning",
            body: "Gråhägern söker föda vid sjöar, åar och grunda vikar. Den häckar i kolonier högt uppe i träden nära vatten.",
            image: "/images/faglar/grahager-miljo.png",
            alt: "Vassrik sjöstrand i gyllene ljus",
            caption: "Vassrika stränder ger rikligt med byte.",
          },
        ],
        sections: [],
      },
      en: {
        heroSubtitle: "The shore's patient guardian",
        intro: "The Grey Heron is a master of stillness. It can stand motionless in the water for minutes, sometimes over an hour, before striking lightning-fast with its long beak to catch a fish or frog. It nests in colonies high in trees, often together with several other pairs, and the nest structures can be used year after year until the branches bend under the weight.",
        detailsGrid: [
          {
            heading: "Appearance & Features",
            body: "The grey heron is a large, long-legged wader with grey upperparts, a white neck and a black plume behind the eye. In flight it draws its neck into a distinct S.",
            image: "/images/faglar/grahager-hero.png",
            alt: "Grey heron at the water's edge",
            caption: "The retracted S-neck tells the heron from the crane in flight.",
          },
          {
            heading: "Hunting & Behaviour",
            body: "It stands motionless in shallow water and spears fish and frogs with lightning-fast strikes. Patience is its main hunting method.",
            image: "/images/faglar/grahager-detalj.png",
            alt: "Grey heron fishing in shallow water",
            caption: "A lightning strike ends the long wait.",
          },
          {
            heading: "Habitat & Nesting",
            body: "The grey heron feeds at lakes, rivers and shallow bays. It nests in colonies high in trees near water.",
            image: "/images/faglar/grahager-miljo.png",
            alt: "Reedy lakeshore in golden light",
            caption: "Reedy shores provide abundant prey.",
          },
        ],
        sections: [],
      },
      de: {
        heroSubtitle: "Der geduldige Wächter des Ufers",
        intro: "Der Graureiher ist ein Meister der Stille. Er kann minutenlang, manchmal über eine Stunde, bewegungslos im Wasser stehen, bevor er blitzschnell mit seinem langen Schnabel zuschlägt. Er brütet in Kolonien hoch in Bäumen, oft zusammen mit mehreren anderen Paaren.",
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Der Graureiher ist ein großer, langbeiniger Watvogel mit grauer Oberseite, weißem Hals und einem schwarzen Schopf hinter dem Auge. Im Flug zieht er den Hals zu einem deutlichen S ein.",
            image: "/images/faglar/grahager-hero.png",
            alt: "Graureiher am Wasserrand",
            caption: "Der eingezogene S-Hals unterscheidet den Reiher im Flug vom Kranich.",
          },
          {
            heading: "Jagd & Verhalten",
            body: "Er steht regungslos im flachen Wasser und spießt Fische und Frösche mit blitzschnellen Stößen auf. Geduld ist seine wichtigste Jagdmethode.",
            image: "/images/faglar/grahager-detalj.png",
            alt: "Graureiher beim Fischen im flachen Wasser",
            caption: "Ein blitzschneller Stoß beendet das lange Warten.",
          },
          {
            heading: "Lebensraum & Brut",
            body: "Der Graureiher sucht Nahrung an Seen, Flüssen und flachen Buchten. Er brütet in Kolonien hoch in Bäumen nahe dem Wasser.",
            image: "/images/faglar/grahager-miljo.png",
            alt: "Schilfreiches Seeufer im goldenen Licht",
            caption: "Schilfreiche Ufer bieten reichlich Beute.",
          },
        ],
        sections: [],
      },
    },
    media: {
      heroImage: { url: "/images/faglar/grahager-hero.png", alt: { sv: "Gråhäger som fiskar vid strandkant", en: "Grey heron fishing at the water's edge", de: "Graureiher beim Fischen am Ufer" } },
      galleryImages: [
        { src: "/images/faglar/grahager-hero.png", alt: "Gråhäger (Ardea cinerea) vid vattnet" },
        { src: "/images/faglar/grahager-detalj.png", alt: "Gråhägerkoloni högt i träd", tall: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/grahager_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "/audio/grahager_guide_en.mp3" },
        de: { title: "Dem Guide zuhören", url: "/audio/grahager_guide_de.mp3" },
      },
    },
    interactive: {
      sv: { title: "Ställ en fråga om Gråhägern", intro: "Jag står stilla i vattnet och väntar tåligt på min fångst. Fråga mig om min jakt, mitt bo eller min föda!", presetQuestions: ["Hur länge kan du stå stilla?", "Var bygger du ditt bo?", "Vad äter du?"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Ask a question about the Grey Heron", intro: "I stand still in the water and wait patiently for my catch. Ask me about my hunting, my nest, or my food!", presetQuestions: ["How long can you stand still?", "Where do you build your nest?", "What do you eat?"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Stelle eine Frage an den Graureiher", intro: "Ich stehe still im Wasser und warte geduldig auf meinen Fang. Frage mich nach meiner Jagd, meinem Nest oder meiner Nahrung!", presetQuestions: ["Wie lange kannst du still stehen?", "Wo baust du dein Nest?", "Was isst du?"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: "Du är en gråhäger (Ardea cinerea) längs Kustvägen. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta från gråhägerns sida.",
    avatarImage: "/images/faglar/grahager-hero.png",
    chatAvatarAlt: "En gråhäger vid vattnet",
    relatedSpecies: [
      { slug: "fiskgjuse", name: "Fiskgjuse", latin: "Pandion haliaetus", image: "/images/sp-osprey.png" },
      { slug: "gratrut", name: "Gråtrut", latin: "Larus argentatus", image: "/images/faglar/gratrut-hero.png" },
      { slug: "smalom", name: "Smålom", latin: "Gavia stellata", image: "/images/faglar/smalom-hero.png" },
    ],
    relatedSectionHeading: { sv: "Andra arter i området", en: "Other species in the area", de: "Andere Arten in der Umgebung" },
    relatedLinkLabel: { sv: "Läs mer", en: "Read more", de: "Mehr erfahren" },
  },
  nattskarra: {
    id: "nattskarra",
    scientificName: "Caprimulgus europaeus",
    category: { sv: "Fågel", en: "Birds", de: "Vögel" },
    names: { sv: "Nattskärra", en: "European Nightjar", de: "Ziegenmelker" },
    meta: {
      sv: { title: "Nattskärra – Kustvägen Naturguide", description: "Lär känna nattskärran längs Kustvägen. Fakta om skymningens kryptiska insektsjägare." },
      en: { title: "European Nightjar – Kustvägen Nature Guide", description: "Discover the Nightjar along the Coastal Road, twilight's cryptic insect hunter." },
      de: { title: "Ziegenmelker – Kustvägen Naturführer", description: "Entdecken Sie den Ziegenmelker entlang des Kustv��gen, den kryptischen Insektenjäger der Dämmerung." },
    },
    quickFacts: {
      sv: [
        { label: "Vikt", value: "65–100 g" },
        { label: "Föda", value: "Nattflygande insekter" },
        { label: "Läte", value: "Långt, spinnande snurrljud" },
        { label: "Livsmiljö", value: "Torra hyggen och tallhedar" },
      ],
      en: [
        { label: "Weight", value: "65–100 g" },
        { label: "Diet", value: "Night-flying insects" },
        { label: "Call", value: "Long, whirring purr" },
        { label: "Habitat", value: "Dry clear-cuts and pine heaths" },
      ],
      de: [
        { label: "Gewicht", value: "65–100 g" },
        { label: "Nahrung", value: "Nachtaktive Fluginsekten" },
        { label: "Ruf", value: "Langes, schnurrendes Rattern" },
        { label: "Lebensraum", value: "Trockene Kahlschläge und Kiefernheiden" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skymningens osynliga jägare",
        intro: "Nattskärran är nästan omöjlig att upptäcka på dagen, då den ligger orörlig på marken med sin brunspräckliga, barkliknande fjäderdräkt. I skymningen vaknar den till liv och jagar nattflygande insekter med sin breda gap på tysta, vingelfjärilslika vingar. Hanens spinnande, snurrande läte kan höras på långt håll under sommarnätterna.",
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Nattskärran har en barkfärgad, gråbrun fjäderdräkt som gör den nästan osynlig mot marken. Den vilar långsmalt utmed en gren om dagen.",
            image: "/images/faglar/nattskarra-hero.png",
            alt: "Nattskärra vilande på marken",
            caption: "Barkmönstret gör fågeln nästan omöjlig att upptäcka.",
          },
          {
            heading: "Läte & Beteende",
            body: "I sommarnatten hörs dess långa, snurrande spinnläte som en avlägsen motor. Den fångar nattfjärilar i luften med vidöppen mun.",
            image: "/images/faglar/nattskarra-detalj.png",
            alt: "Nattskärra i skymningsflykt",
            caption: "Det snurrande lätet hörs bara i skymning och natt.",
          },
          {
            heading: "Livsmiljö & Häckning",
            body: "Arten trivs på torra, sandiga tallhedar och hyggen. Den lägger sina ägg direkt på marken utan bo.",
            image: "/images/faglar/nattskarra-miljo.png",
            alt: "Sandig tallhed i skymning",
            caption: "Öppna tallhedar ger både jaktluft och boplats.",
          },
        ],
        sections: [],
      },
      en: {
        heroSubtitle: "Twilight's invisible hunter",
        intro: "The Nightjar is almost impossible to spot during the day, resting motionless on the ground with its mottled brown, bark-like plumage. At dusk it comes alive, hunting night-flying insects with its wide gape on silent, moth-like wings. The male's purring, whirring call can be heard far and wide on summer nights.",
        detailsGrid: [
          {
            heading: "Appearance & Features",
            body: "The nightjar has bark-coloured, grey-brown plumage that makes it almost invisible against the ground. By day it rests lengthwise along a branch.",
            image: "/images/faglar/nattskarra-hero.png",
            alt: "Nightjar resting on the ground",
            caption: "The bark pattern makes the bird almost impossible to spot.",
          },
          {
            heading: "Call & Behaviour",
            body: "On summer nights its long, churring song sounds like a distant engine. It catches moths in the air with a wide-open mouth.",
            image: "/images/faglar/nattskarra-detalj.png",
            alt: "Nightjar in twilight flight",
            caption: "The churring song is heard only at dusk and night.",
          },
          {
            heading: "Habitat & Nesting",
            body: "The species favours dry, sandy pine heaths and clearings. It lays its eggs straight on the ground with no nest.",
            image: "/images/faglar/nattskarra-miljo.png",
            alt: "Sandy pine heath at dusk",
            caption: "Open pine heaths offer both hunting air and a nest site.",
          },
        ],
        sections: [],
      },
      de: {
        heroSubtitle: "Der unsichtbare Jäger der Dämmerung",
        intro: "Der Ziegenmelker ist am Tag fast unmöglich zu entdecken, da er mit seinem braun gescheckten, rindenähnlichen Gefieder bewegungslos auf dem Boden ruht. In der Dämmerung erwacht er zum Leben und jagt nachtaktive Insekten mit seinem breiten Schnabel auf lautlosen, mottenähnlichen Flügeln.",
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Die Nachtschwalbe hat ein rindenfarbenes, graubraunes Gefieder, das sie am Boden fast unsichtbar macht. Tagsüber ruht sie längs auf einem Ast.",
            image: "/images/faglar/nattskarra-hero.png",
            alt: "Ziegenmelker am Boden ruhend",
            caption: "Das Rindenmuster macht den Vogel fast unauffindbar.",
          },
          {
            heading: "Ruf & Verhalten",
            body: "In der Sommernacht klingt ihr langer, schnurrender Gesang wie ein ferner Motor. Sie fängt Nachtfalter mit weit geöffnetem Mund in der Luft.",
            image: "/images/faglar/nattskarra-detalj.png",
            alt: "Ziegenmelker im Dämmerungsflug",
            caption: "Der schnurrende Gesang ist nur in Dämmerung und Nacht zu hören.",
          },
          {
            heading: "Lebensraum & Brut",
            body: "Die Art bevorzugt trockene, sandige Kiefernheiden und Lichtungen. Sie legt ihre Eier ohne Nest direkt auf den Boden.",
            image: "/images/faglar/nattskarra-miljo.png",
            alt: "Sandige Kiefernheide in der Dämmerung",
            caption: "Offene Kiefernheiden bieten Jagdluft und Nistplatz zugleich.",
          },
        ],
        sections: [],
      },
    },
    media: {
      heroImage: { url: "/images/faglar/nattskarra-hero.png", alt: { sv: "Nattskärra på marken i skymning", en: "Nightjar resting on the ground at dusk", de: "Ziegenmelker auf dem Boden in der Dämmerung" } },
      galleryImages: [
        { src: "/images/faglar/nattskarra-hero.png", alt: "Nattskärra (Caprimulgus europaeus) på marken" },
        { src: "/images/faglar/nattskarra-detalj.png", alt: "Nattskärra i flykt över skymningshimmel", tall: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/nattskarra_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "/audio/nattskarra_guide_en.mp3" },
        de: { title: "Dem Guide zuhören", url: "/audio/nattskarra_guide_de.mp3" },
      },
    },
    interactive: {
      sv: { title: "Ställ en fråga om Nattskärran", intro: "Jag vilar dold på marken hela dagen och jagar i skymningen. Fråga mig om min kamouflage, min jakt eller mitt läte!", presetQuestions: ["Hur gömmer du dig på dagen?", "Vad jagar du på natten?", "Varför spinner du så konstigt?"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Ask a question about the Nightjar", intro: "I rest hidden on the ground all day and hunt at dusk. Ask me about my camouflage, my hunting, or my call!", presetQuestions: ["How do you hide during the day?", "What do you hunt at night?", "Why do you make that whirring sound?"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Stelle eine Frage an den Ziegenmelker", intro: "Ich ruhe tagsüber versteckt auf dem Boden und jage in der Dämmerung. Frage mich nach meiner Tarnung, meiner Jagd oder meinem Ruf!", presetQuestions: ["Wie versteckst du dich am Tag?", "Was jagst du in der Nacht?", "Warum machst du dieses schnurrende Geräusch?"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: "Du är en nattskärra (Caprimulgus europaeus) längs Kustvägen. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta från nattskärrans sida.",
    avatarImage: "/images/faglar/nattskarra-hero.png",
    chatAvatarAlt: "En nattskärra på marken",
    relatedSpecies: [
      { slug: "orre", name: "Orre", latin: "Lyrurus tetrix", image: "/images/faglar/orre-hero.png" },
      { slug: "lappuggla", name: "Lappuggla", latin: "Strix nebulosa", image: "/images/faglar/lappuggla-hero.png" },
      { slug: "tjader", name: "Tjäder", latin: "Tetrao urogallus", image: "/images/faglar/tjader-hero.png" },
    ],
    relatedSectionHeading: { sv: "Andra arter i området", en: "Other species in the area", de: "Andere Arten in der Umgebung" },
    relatedLinkLabel: { sv: "Läs mer", en: "Read more", de: "Mehr erfahren" },
  },
  koltrast: {
    id: "koltrast",
    scientificName: "Turdus merula",
    category: { sv: "Fågel", en: "Birds", de: "Vögel" },
    names: { sv: "Koltrast", en: "Common Blackbird", de: "Amsel" },
    meta: {
      sv: { title: "Koltrast – Kustvägen Naturguide", description: "Lär känna koltrasten längs Kustvägen. Fakta om en av Sveriges mest älskade sångfåglar." },
      en: { title: "Common Blackbird – Kustvägen Nature Guide", description: "Discover the Blackbird along the Coastal Road, one of Sweden's most beloved songbirds." },
      de: { title: "Amsel – Kustvägen Naturführer", description: "Entdecken Sie die Amsel entlang des Kustvägen, einen der beliebtesten Singvögel Schwedens." },
    },
    quickFacts: {
      sv: [
        { label: "Vikt", value: "80–125 g" },
        { label: "Föda", value: "Mask, insekter och bär" },
        { label: "Läte", value: "Melodisk, flöjtande sång" },
        { label: "Livsmiljö", value: "Trädgårdar, parker och skogsbryn" },
      ],
      en: [
        { label: "Weight", value: "80–125 g" },
        { label: "Diet", value: "Worms, insects and berries" },
        { label: "Call", value: "Melodic, flute-like song" },
        { label: "Habitat", value: "Gardens, parks and woodland edges" },
      ],
      de: [
        { label: "Gewicht", value: "80–125 g" },
        { label: "Nahrung", value: "Würmer, Insekten und Beeren" },
        { label: "Ruf", value: "Melodischer, flötenartiger Gesang" },
        { label: "Lebensraum", value: "Gärten, Parks und Waldränder" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Kvällens flöjtande sångare",
        intro: "Koltrasten är en av de mest karaktäristiska sångarna i svenska trädgårdar och skogsbryn. Hanen är helsvart med en gul näbb och sjunger sin rika, flöjtande sång från höga utkikspunkter i skymningen. Honan är brun och mer diskret, men lika skicklig på att hitta maskar och insekter i gräsmattans jord.",
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Hanen är helsvart med lysande orangegul näbb och gul ögonring. Honan är mörkt brun med diffust fläckigt bröst.",
            image: "/images/faglar/koltrast-hero.png",
            alt: "Koltrasthane med gul näbb",
            caption: "Den gula näbben lyser mot den svarta fjäderdräkten.",
          },
          {
            heading: "Sång & Beteende",
            body: "Dess fylliga, flöjtande sång från en hög sittplats hör till vårkvällens vackraste läten. På marken rör den sig i korta språng och kastar undan löv efter mask.",
            image: "/images/faglar/koltrast-detalj.png",
            alt: "Koltrast som söker mask på marken",
            caption: "Den flöjtande sången ljuder i vårkvällen.",
          },
          {
            heading: "Livsmiljö & Häckning",
            body: "Koltrasten trivs i skogsbryn, parker och trädgårdar. Boet byggs i buskar och murgröna, ofta nära människan.",
            image: "/images/faglar/koltrast-miljo.png",
            alt: "Grönt skogsbryn i morgonljus",
            caption: "Skogsbryn och trädgårdar är koltrastens hem.",
          },
        ],
        sections: [],
      },
      en: {
        heroSubtitle: "The evening's flute-voiced singer",
        intro: "The Blackbird is one of the most characteristic singers in Swedish gardens and woodland edges. The male is entirely black with a yellow beak and sings its rich, flute-like song from high vantage points at dusk. The female is brown and more discreet, but just as skilled at finding worms and insects in the lawn soil.",
        detailsGrid: [
          {
            heading: "Appearance & Features",
            body: "The male is all black with a bright orange-yellow bill and yellow eye-ring. The female is dark brown with a diffusely spotted breast.",
            image: "/images/faglar/koltrast-hero.png",
            alt: "Male blackbird with yellow bill",
            caption: "The yellow bill glows against the black plumage.",
          },
          {
            heading: "Song & Behaviour",
            body: "Its full, fluting song from a high perch is among the loveliest sounds of a spring evening. On the ground it moves in short hops, tossing leaves aside for worms.",
            image: "/images/faglar/koltrast-detalj.png",
            alt: "Blackbird searching for worms on the ground",
            caption: "The fluting song rings through the spring evening.",
          },
          {
            heading: "Habitat & Nesting",
            body: "The blackbird thrives in forest edges, parks and gardens. The nest is built in shrubs and ivy, often close to people.",
            image: "/images/faglar/koltrast-miljo.png",
            alt: "Green forest edge in morning light",
            caption: "Forest edges and gardens are the blackbird's home.",
          },
        ],
        sections: [],
      },
      de: {
        heroSubtitle: "Der flötende Sänger des Abends",
        intro: "Die Amsel ist einer der charakteristischsten Sänger in schwedischen Gärten und Waldrändern. Das Männchen ist vollständig schwarz mit gelbem Schnabel und singt seinen reichen, flötenartigen Gesang von hohen Aussichtspunkten in der Dämmerung. Das Weibchen ist braun und unauffälliger.",
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Das Männchen ist ganz schwarz mit leuchtend orangegelbem Schnabel und gelbem Augenring. Das Weibchen ist dunkelbraun mit diffus geflecktem Brustbereich.",
            image: "/images/faglar/koltrast-hero.png",
            alt: "Amselmännchen mit gelbem Schnabel",
            caption: "Der gelbe Schnabel leuchtet vor dem schwarzen Gefieder.",
          },
          {
            heading: "Gesang & Verhalten",
            body: "Sein voller, flötender Gesang von einer hohen Warte gehört zu den schönsten Klängen eines Frühlingsabends. Am Boden bewegt es sich in kurzen Sprüngen und wirft Laub nach Würmern beiseite.",
            image: "/images/faglar/koltrast-detalj.png",
            alt: "Amsel bei der Wurmsuche am Boden",
            caption: "Der flötende Gesang erklingt am Frühlingsabend.",
          },
          {
            heading: "Lebensraum & Brut",
            body: "Die Amsel lebt gern an Waldrändern, in Parks und Gärten. Das Nest wird in Sträuchern und Efeu gebaut, oft in Menschennähe.",
            image: "/images/faglar/koltrast-miljo.png",
            alt: "Grüner Waldrand im Morgenlicht",
            caption: "Waldränder und Gärten sind das Zuhause der Amsel.",
          },
        ],
        sections: [],
      },
    },
    media: {
      heroImage: { url: "/images/faglar/koltrast-hero.png", alt: { sv: "Koltrast på gren", en: "Blackbird on a branch", de: "Amsel auf einem Zweig" } },
      galleryImages: [
        { src: "/images/faglar/koltrast-hero.png", alt: "Koltrast (Turdus merula) på gren" },
        { src: "/images/faglar/koltrast-detalj.png", alt: "Koltrast sjunger vid gryning", tall: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/koltrast_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "/audio/koltrast_guide_en.mp3" },
        de: { title: "Dem Guide zuhören", url: "/audio/koltrast_guide_de.mp3" },
      },
    },
    interactive: {
      sv: { title: "Ställ en fråga om Koltrasten", intro: "Jag sjunger min flöjtande sång i skymningen. Fråga mig om min sång, min föda eller var jag bor!", presetQuestions: ["Varför sjunger du i skymningen?", "Vad äter du?", "Var bygger du ditt bo?"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Ask a question about the Blackbird", intro: "I sing my flute-like song at dusk. Ask me about my song, my food, or where I live!", presetQuestions: ["Why do you sing at dusk?", "What do you eat?", "Where do you build your nest?"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Stelle eine Frage an die Amsel", intro: "Ich singe meinen flötenartigen Gesang in der Dämmerung. Frage mich nach meinem Gesang, meiner Nahrung oder wo ich wohne!", presetQuestions: ["Warum singst du in der Dämmerung?", "Was isst du?", "Wo baust du dein Nest?"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: "Du är en koltrast (Turdus merula) längs Kustvägen. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta från koltrastens sida.",
    avatarImage: "/images/faglar/koltrast-hero.png",
    chatAvatarAlt: "En koltrast på en gren",
    relatedSpecies: [
      { slug: "bofink", name: "Bofink", latin: "Fringilla coelebs", image: "/images/faglar/bofink-hero.png" },
      { slug: "domherre", name: "Domherre", latin: "Pyrrhula pyrrhula", image: "/images/faglar/domherre-hero.png" },
      { slug: "notskrika", name: "Nötskrika", latin: "Garrulus glandarius", image: "/images/faglar/notskrika-hero.png" },
    ],
    relatedSectionHeading: { sv: "Andra arter i området", en: "Other species in the area", de: "Andere Arten in der Umgebung" },
    relatedLinkLabel: { sv: "Läs mer", en: "Read more", de: "Mehr erfahren" },
  },
  domherre: {
    id: "domherre",
    scientificName: "Pyrrhula pyrrhula",
    category: { sv: "Fågel", en: "Birds", de: "Vögel" },
    names: { sv: "Domherre", en: "Eurasian Bullfinch", de: "Gimpel" },
    meta: {
      sv: { title: "Domherre – Kustvägen Naturguide", description: "Lär känna domherren längs Kustvägen. Fakta om vinterns rödbröstade juvel bland granarna." },
      en: { title: "Eurasian Bullfinch – Kustvägen Nature Guide", description: "Discover the Bullfinch along the Coastal Road, winter's red-breasted jewel among the spruces." },
      de: { title: "Gimpel – Kustvägen Naturführer", description: "Entdecken Sie den Gimpel entlang des Kustvägen, das rotbrüstige Winterjuwel zwischen den Fichten." },
    },
    quickFacts: {
      sv: [
        { label: "Vikt", value: "21–27 g" },
        { label: "Föda", value: "Knoppar, frön och bär" },
        { label: "Läte", value: "Mjuk, pipande vissling" },
        { label: "Livsmiljö", value: "Barrskog och trädgårdar vintertid" },
      ],
      en: [
        { label: "Weight", value: "21–27 g" },
        { label: "Diet", value: "Buds, seeds and berries" },
        { label: "Call", value: "Soft, piping whistle" },
        { label: "Habitat", value: "Coniferous forest and gardens in winter" },
      ],
      de: [
        { label: "Gewicht", value: "21–27 g" },
        { label: "Nahrung", value: "Knospen, Samen und Beeren" },
        { label: "Ruf", value: "Weicher, pfeifender Ton" },
        { label: "Lebensraum", value: "Nadelwald und Gärten im Winter" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Vinterns rosenröda juvel",
        intro: "Domherrehanen lyser upp den snötäckta granskogen med sitt rosenröda bröst och svarta huvudmössa. Paret håller ofta ihop hela året och kommunicerar med sina mjuka, melankoliska visslingar när de rör sig genom skogen. Vintertid söker de sig gärna till trädgårdar där de plockar knoppar och frön från fruktträd och r��nnbär.",
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Hanen har lysande tegelrött bröst, svart hätta och grå rygg. Honan bär samma teckning men i dämpat gråbrunt.",
            image: "/images/faglar/domherre-hero.png",
            alt: "Domherrehane på en snötäckt gren",
            caption: "Det röda bröstet lyser mot vinterns snö.",
          },
          {
            heading: "Läte & Beteende",
            body: "Dess mjuka, vemodiga vissling hörs ofta innan man ser fågeln. Om vintern ses den gärna i par eller små flockar vid bär och knoppar.",
            image: "/images/faglar/domherre-detalj.png",
            alt: "Domherre som äter rönnbär",
            caption: "Den mjuka visslingen avslöjar domherren i snåret.",
          },
          {
            heading: "Livsmiljö & Föda",
            body: "Domherren trivs i barr- och blandskog och besöker gärna trädgårdar vintertid. Rönnens bär och trädens knoppar är viktig vinterföda.",
            image: "/images/faglar/domherre-miljo.png",
            alt: "Snöig vinterskog med rönn och röda bär",
            caption: "Rönnbär är eftertraktad vinterföda.",
          },
        ],
        sections: [],
      },
      en: {
        heroSubtitle: "Winter's rose-red jewel",
        intro: "The male Bullfinch lights up the snow-covered spruce forest with its rose-red breast and black cap. The pair often stays together year-round and communicates with soft, melancholic whistles as they move through the forest. In winter they often visit gardens, picking buds and seeds from fruit trees and rowan berries.",
        detailsGrid: [
          {
            heading: "Appearance & Features",
            body: "The male has a glowing brick-red breast, a black cap and a grey back. The female shows the same pattern in a muted grey-brown.",
            image: "/images/faglar/domherre-hero.png",
            alt: "Male bullfinch on a snow-covered branch",
            caption: "The red breast glows against the winter snow.",
          },
          {
            heading: "Call & Behaviour",
            body: "Its soft, wistful whistle is often heard before the bird is seen. In winter it is often seen in pairs or small flocks at berries and buds.",
            image: "/images/faglar/domherre-detalj.png",
            alt: "Bullfinch eating rowan berries",
            caption: "The soft whistle betrays the bullfinch in the thicket.",
          },
          {
            heading: "Habitat & Food",
            body: "The bullfinch thrives in conifer and mixed forest and readily visits gardens in winter. Rowan berries and tree buds are important winter food.",
            image: "/images/faglar/domherre-miljo.png",
            alt: "Snowy winter forest with rowan and red berries",
            caption: "Rowan berries are a prized winter food.",
          },
        ],
        sections: [],
      },
      de: {
        heroSubtitle: "Das rosenrote Juwel des Winters",
        intro: "Der Gimpelhahn erhellt den schneebedeckten Fichtenwald mit seiner rosenroten Brust und schwarzen Kopfkappe. Das Paar bleibt oft das ganze Jahr zusammen und kommuniziert mit weichen, melancholischen Pfeiftönen. Im Winter besuchen sie gerne Gärten und picken Knospen und Samen von Obstbäumen.",
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Das Männchen hat eine leuchtend ziegelrote Brust, eine schwarze Kappe und einen grauen Rücken. Das Weibchen zeigt dasselbe Muster in gedämpftem Graubraun.",
            image: "/images/faglar/domherre-hero.png",
            alt: "Gimpel-Männchen auf einem schneebedeckten Zweig",
            caption: "Die rote Brust leuchtet vor dem Winterschnee.",
          },
          {
            heading: "Ruf & Verhalten",
            body: "Sein weicher, wehmütiger Pfiff ist oft zu hören, bevor man den Vogel sieht. Im Winter zeigt er sich gern paarweise oder in kleinen Trupps an Beeren und Knospen.",
            image: "/images/faglar/domherre-detalj.png",
            alt: "Gimpel beim Fressen von Vogelbeeren",
            caption: "Der weiche Pfiff verrät den Gimpel im Gebüsch.",
          },
          {
            heading: "Lebensraum & Nahrung",
            body: "Der Gimpel lebt gern in Nadel- und Mischwäldern und besucht im Winter gern Gärten. Vogelbeeren und Baumknospen sind wichtige Winternahrung.",
            image: "/images/faglar/domherre-miljo.png",
            alt: "Verschneiter Winterwald mit Eberesche und roten Beeren",
            caption: "Vogelbeeren sind eine begehrte Winternahrung.",
          },
        ],
        sections: [],
      },
    },
    media: {
      heroImage: { url: "/images/faglar/domherre-hero.png", alt: { sv: "Domherre på snöig grangren", en: "Bullfinch on a snowy spruce branch", de: "Gimpel auf einem verschneiten Fichtenzweig" } },
      galleryImages: [
        { src: "/images/faglar/domherre-hero.png", alt: "Domherre (Pyrrhula pyrrhula) på gren" },
        { src: "/images/faglar/domherre-detalj.png", alt: "Domherrepar äter bär", tall: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/domherre_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "/audio/domherre_guide_en.mp3" },
        de: { title: "Dem Guide zuhören", url: "/audio/domherre_guide_de.mp3" },
      },
    },
    interactive: {
      sv: { title: "Ställ en fråga om Domherren", intro: "Jag lyser rosenröd i den snöiga granskogen. Fråga mig om min föda, min vissling eller min partner!", presetQuestions: ["Varför är du så röd?", "Vad äter du på vintern?", "Håller du ihop med samma partner?"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Ask a question about the Bullfinch", intro: "I shine rose-red in the snowy spruce forest. Ask me about my food, my whistle, or my partner!", presetQuestions: ["Why are you so red?", "What do you eat in winter?", "Do you stay with the same partner?"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Stelle eine Frage an den Gimpel", intro: "Ich leuchte rosenrot im verschneiten Fichtenwald. Frage mich nach meiner Nahrung, meinem Pfeifton oder meinem Partner!", presetQuestions: ["Warum bist du so rot?", "Was isst du im Winter?", "Bleibst du mit demselben Partner zusammen?"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: "Du är en domherre (Pyrrhula pyrrhula) längs Kustvägen. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta från domherrens sida.",
    avatarImage: "/images/faglar/domherre-hero.png",
    chatAvatarAlt: "En domherre på en grangren",
    relatedSpecies: [
      { slug: "koltrast", name: "Koltrast", latin: "Turdus merula", image: "/images/faglar/koltrast-hero.png" },
      { slug: "bofink", name: "Bofink", latin: "Fringilla coelebs", image: "/images/faglar/bofink-hero.png" },
      { slug: "notskrika", name: "Nötskrika", latin: "Garrulus glandarius", image: "/images/faglar/notskrika-hero.png" },
    ],
    relatedSectionHeading: { sv: "Andra arter i området", en: "Other species in the area", de: "Andere Arten in der Umgebung" },
    relatedLinkLabel: { sv: "Läs mer", en: "Read more", de: "Mehr erfahren" },
  },
  notskrika: {
    id: "notskrika",
    scientificName: "Garrulus glandarius",
    category: { sv: "Fågel", en: "Birds", de: "Vögel" },
    names: { sv: "Nötskrika", en: "Eurasian Jay", de: "Eichelhäher" },
    meta: {
      sv: { title: "Nötskrika – Kustvägen Naturguide", description: "Lär känna nötskrikan längs Kustvägen. Fakta om skogens färgstarka och minnesgoda kråkfågel." },
      en: { title: "Eurasian Jay – Kustvägen Nature Guide", description: "Discover the Jay along the Coastal Road, the forest's colourful and remarkably memory-sharp corvid." },
      de: { title: "Eichelhäher – Kustvägen Naturführer", description: "Entdecken Sie den Eichelhäher entlang des Kustvägen, den farbenprächtigen und erinnerungsstarken Rabenvogel des Waldes." },
    },
    quickFacts: {
      sv: [
        { label: "Vikt", value: "140–190 g" },
        { label: "Föda", value: "Ekollon, nötter och insekter" },
        { label: "Läte", value: "Skarpt, skrikande läte" },
        { label: "Livsmiljö", value: "Lövskog och blandskog" },
      ],
      en: [
        { label: "Weight", value: "140–190 g" },
        { label: "Diet", value: "Acorns, nuts and insects" },
        { label: "Call", value: "Sharp, screeching call" },
        { label: "Habitat", value: "Deciduous and mixed forest" },
      ],
      de: [
        { label: "Gewicht", value: "140–190 g" },
        { label: "Nahrung", value: "Eicheln, Nüsse und Insekten" },
        { label: "Ruf", value: "Scharfer, kreischender Ruf" },
        { label: "Lebensraum", value: "Laub- und Mischwald" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skogens ekollonplanterare",
        intro: "Nötskrikan är lätt att känna igen på den rosa-bruna kroppen och de blåsvartrandiga vingfjädrarna. Den är en av skogens klokaste fåglar och kan gömma tusentals ekollon under en höst, ett för varje besök, och minns platserna med imponerande precision. Många av dessa glömda gömställen gror senare och blir till nya ekar, vilket gör nötskrikan till en viktig skogsplanterare.",
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Nötskrikan är rödbrun med svart mustasch, vit gump och en lysande blårutig vingfläck. Den svarta stjärten syns tydligt när den flyger bort.",
            image: "/images/faglar/notskrika-hero.png",
            alt: "Nötskrika på en gren",
            caption: "Den blårutiga vingfläcken är nötskrikans smycke.",
          },
          {
            heading: "Läte & Beteende",
            body: "Dess hesa, skränande varningsrop ekar genom skogen och varnar allt vilt. Om hösten samlar och gömmer den tusentals ekollon som vinterförr��d.",
            image: "/images/faglar/notskrika-detalj.png",
            alt: "Nötskrika med ekollon i näbben",
            caption: "Det skränande ropet varnar hela skogen.",
          },
          {
            heading: "Livsmiljö & Häckning",
            body: "Arten trivs i löv- och blandskog med ek. Genom att gömma och glömma ekollon hjälper den nya ekar att gro.",
            image: "/images/faglar/notskrika-miljo.png",
            alt: "Ek- och blandskog om hösten",
            caption: "Glömda ekollon blir till nya ekar.",
          },
        ],
        sections: [],
      },
      en: {
        heroSubtitle: "The forest's acorn planter",
        intro: "The Jay is easy to recognise by its pinkish-brown body and blue-black barred wing feathers. It is one of the forest's smartest birds and can hide thousands of acorns in a single autumn, one per visit, remembering the locations with impressive precision. Many of these forgotten caches later sprout into new oak trees, making the Jay an important forest planter.",
        detailsGrid: [
          {
            heading: "Appearance & Features",
            body: "The jay is red-brown with a black moustache, a white rump and a bright blue-barred wing patch. The black tail shows clearly as it flies off.",
            image: "/images/faglar/notskrika-hero.png",
            alt: "Jay on a branch",
            caption: "The blue-barred wing patch is the jay's jewel.",
          },
          {
            heading: "Call & Behaviour",
            body: "Its hoarse, screeching alarm call echoes through the forest and warns all wildlife. In autumn it gathers and hides thousands of acorns as a winter store.",
            image: "/images/faglar/notskrika-detalj.png",
            alt: "Jay with an acorn in its bill",
            caption: "The screeching call warns the whole forest.",
          },
          {
            heading: "Habitat & Nesting",
            body: "The species thrives in deciduous and mixed forest with oak. By hiding and forgetting acorns it helps new oaks to sprout.",
            image: "/images/faglar/notskrika-miljo.png",
            alt: "Oak and mixed forest in autumn",
            caption: "Forgotten acorns become new oak trees.",
          },
        ],
        sections: [],
      },
      de: {
        heroSubtitle: "Der Eichenpflanzer des Waldes",
        intro: "Der Eichelhäher ist leicht an seinem rosa-braunen Körper und den blauschwarz gestreiften Flügelfedern zu erkennen. Er ist einer der klügsten Vögel des Waldes und kann in einem Herbst Tausende von Eicheln verstecken, eine pro Besuch, und sich die Standorte mit beeindruckender Präzision merken.",
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Der Eichelhäher ist rotbraun mit schwarzem Bartstreif, weißem Bürzel und einem leuchtend blau gebänderten Flügelfleck. Der schwarze Schwanz zeigt sich deutlich beim Wegfliegen.",
            image: "/images/faglar/notskrika-hero.png",
            alt: "Eichelhäher auf einem Zweig",
            caption: "Der blau gebänderte Flügelfleck ist das Schmuckstück des Hähers.",
          },
          {
            heading: "Ruf & Verhalten",
            body: "Sein heiserer, kreischender Warnruf hallt durch den Wald und warnt alles Wild. Im Herbst sammelt und versteckt er Tausende von Eicheln als Wintervorrat.",
            image: "/images/faglar/notskrika-detalj.png",
            alt: "Eichelhäher mit einer Eichel im Schnabel",
            caption: "Der kreischende Ruf warnt den ganzen Wald.",
          },
          {
            heading: "Lebensraum & Brut",
            body: "Die Art lebt gern in Laub- und Mischwäldern mit Eichen. Indem er Eicheln versteckt und vergisst, hilft er neuen Eichen beim Keimen.",
            image: "/images/faglar/notskrika-miljo.png",
            alt: "Eichen- und Mischwald im Herbst",
            caption: "Vergessene Eicheln werden zu neuen Eichen.",
          },
        ],
        sections: [],
      },
    },
    media: {
      heroImage: { url: "/images/faglar/notskrika-hero.png", alt: { sv: "Nötskrika på ekgren", en: "Jay on an oak branch", de: "Eichelhäher auf einem Eichenzweig" } },
      galleryImages: [
        { src: "/images/faglar/notskrika-hero.png", alt: "Nötskrika (Garrulus glandarius) på gren" },
        { src: "/images/faglar/notskrika-detalj.png", alt: "Nötskrika gömmer ekollon i marken", tall: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/notskrika_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "/audio/notskrika_guide_en.mp3" },
        de: { title: "Dem Guide zuhören", url: "/audio/notskrika_guide_de.mp3" },
      },
    },
    interactive: {
      sv: { title: "Ställ en fråga om Nötskrikan", intro: "Jag gömmer tusentals ekollon och minns var de alla ligger. Fråga mig om mitt minne, min föda eller mitt läte!", presetQuestions: ["Hur minns du var du gömt maten?", "Vad äter du?", "Varför skriker du så mycket?"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Ask a question about the Jay", intro: "I hide thousands of acorns and remember where they all are. Ask me about my memory, my food, or my call!", presetQuestions: ["How do you remember where you hid your food?", "What do you eat?", "Why do you screech so much?"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Stelle eine Frage an den Eichelhäher", intro: "Ich verstecke Tausende von Eicheln und erinnere mich, wo sie alle liegen. Frage mich nach meinem Gedächtnis, meiner Nahrung oder meinem Ruf!", presetQuestions: ["Wie erinnerst du dich, wo du dein Futter versteckt hast?", "Was isst du?", "Warum kreischst du so viel?"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: "Du är en nötskrika (Garrulus glandarius) längs Kustvägen. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta från nötskrikans sida.",
    avatarImage: "/images/faglar/notskrika-hero.png",
    chatAvatarAlt: "En nötskrika på en gren",
    relatedSpecies: [
      { slug: "spillkraka", name: "Spillkråka", latin: "Dryocopus martius", image: "/images/sp-woodpecker.png" },
      { slug: "koltrast", name: "Koltrast", latin: "Turdus merula", image: "/images/faglar/koltrast-hero.png" },
      { slug: "domherre", name: "Domherre", latin: "Pyrrhula pyrrhula", image: "/images/faglar/domherre-hero.png" },
    ],
    relatedSectionHeading: { sv: "Andra arter i området", en: "Other species in the area", de: "Andere Arten in der Umgebung" },
    relatedLinkLabel: { sv: "Läs mer", en: "Read more", de: "Mehr erfahren" },
  },
  smalom: {
    id: "smalom",
    scientificName: "Gavia stellata",
    category: { sv: "Fågel", en: "Birds", de: "Vögel" },
    names: { sv: "Smålom", en: "Red-throated Loon", de: "Sterntaucher" },
    meta: {
      sv: { title: "Smålom – Kustvägen Naturguide", description: "Lär känna smålommen längs Kustvägen. Fakta om den strömlinjeformade dykaren på skogstjärnarna." },
      en: { title: "Red-throated Loon – Kustvägen Nature Guide", description: "Discover the Red-throated Loon along the Coastal Road, the streamlined diver of the forest tarns." },
      de: { title: "Sterntaucher �� Kustvägen Naturführer", description: "Entdecken Sie den Sterntaucher entlang des Kustvägen, den stromlinienförmigen Taucher der Waldtümpel." },
    },
    quickFacts: {
      sv: [
        { label: "Vikt", value: "1–2,3 kg" },
        { label: "Föda", value: "Fisk, fångad genom dykning" },
        { label: "Läte", value: "Klagande, ihåligt tjut" },
        { label: "Livsmiljö", value: "Skogstjärnar och kustvatten" },
      ],
      en: [
        { label: "Weight", value: "1–2.3 kg" },
        { label: "Diet", value: "Fish, caught by diving" },
        { label: "Call", value: "Wailing, hollow howl" },
        { label: "Habitat", value: "Forest tarns and coastal waters" },
      ],
      de: [
        { label: "Gewicht", value: "1–2,3 kg" },
        { label: "Nahrung", value: "Fisch, durch Tauchen gefangen" },
        { label: "Ruf", value: "Klagender, hohler Heulton" },
        { label: "Lebensraum", value: "Waldtümpel und Küstengewässer" },
      ],
    },
    content: {
      sv: {
        heroSubtitle: "Skogstjärnens ensamma dykare",
        intro: "Smålommen häckar ofta på små, avskilda skogstjärnar men flyger varje dag till havet för att fiska, eftersom dess kropp är för tungt byggd för att lätt ta sig upp från en liten vattenyta. Dess klagande, ihåliga läte över tjärnen på sommarkvällen är en av de mest karaktäristiska ljuden i den nordiska vildmarken. Ungarna kan simma och dyka redan efter några timmar.",
        detailsGrid: [
          {
            heading: "Kännetecken & Utseende",
            body: "Smålommen är en slank lom med uppåtriktad näbb, grått huvud och en roströd strupfläck i sommardräkt. På vattnet ligger den lågt med halsen rakt upp.",
            image: "/images/faglar/smalom-hero.png",
            alt: "Smålom på en skogstjärn",
            caption: "Den uppåtriktade näbben skiljer smålommen från storlommen.",
          },
          {
            heading: "Läte & Beteende",
            body: "Dess klagande, jämrande rop bär långt över tysta skogsvatten. Den är en skicklig dykare men klumpig på land och startar bara från vatten.",
            image: "/images/faglar/smalom-detalj.png",
            alt: "Smålom som dyker",
            caption: "Det klagande ropet hör till vildmarkens ljud.",
          },
          {
            heading: "Livsmiljö & Häckning",
            body: "Smålommen häckar vid små skogstjärnar men flyger till större sjöar och havet för att fiska. Boet ligger alldeles vid vattenbrynet.",
            image: "/images/faglar/smalom-miljo.png",
            alt: "Stilla skogstjärn omgiven av granskog",
            caption: "Små tjärnar ger ostörda häckningsplatser.",
          },
        ],
        sections: [],
      },
      en: {
        heroSubtitle: "The forest tarn's lone diver",
        intro: "The Red-throated Loon often nests on small, secluded forest tarns but flies to the sea every day to fish, since its body is too heavily built to easily take off from a small water surface. Its wailing, hollow call over the tarn on a summer evening is one of the most characteristic sounds of the Nordic wilderness. Chicks can swim and dive within just a few hours.",
        detailsGrid: [
          {
            heading: "Appearance & Features",
            body: "The red-throated diver is a slender loon with an upturned bill, a grey head and a rust-red throat patch in summer plumage. On the water it lies low with its neck held straight up.",
            image: "/images/faglar/smalom-hero.png",
            alt: "Red-throated diver on a forest tarn",
            caption: "The upturned bill tells it from the black-throated diver.",
          },
          {
            heading: "Call & Behaviour",
            body: "Its wailing, mournful call carries far over quiet forest waters. It is a skilled diver but clumsy on land and takes off only from water.",
            image: "/images/faglar/smalom-detalj.png",
            alt: "Red-throated diver diving",
            caption: "The wailing call belongs to the sounds of the wilderness.",
          },
          {
            heading: "Habitat & Nesting",
            body: "The red-throated diver nests at small forest tarns but flies to larger lakes and the sea to fish. The nest sits right at the water's edge.",
            image: "/images/faglar/smalom-miljo.png",
            alt: "Still forest tarn surrounded by spruce forest",
            caption: "Small tarns offer undisturbed nesting sites.",
          },
        ],
        sections: [],
      },
      de: {
        heroSubtitle: "Der einsame Taucher des Waldtümpels",
        intro: "Der Sterntaucher brütet oft an kleinen, abgelegenen Waldtümpeln, fliegt aber täglich zum Meer, um zu fischen, da sein Körper zu schwer gebaut ist, um leicht von einer kleinen Wasserfläche abzuheben. Sein klagender, hohler Ruf über dem Tümpel an einem Sommerabend ist einer der charakteristischsten Klänge der nordischen Wildnis.",
        detailsGrid: [
          {
            heading: "Merkmale & Aussehen",
            body: "Der Sterntaucher ist ein schlanker Seetaucher mit aufwärts gerichtetem Schnabel, grauem Kopf und einem rostroten Kehlfleck im Sommerkleid. Auf dem Wasser liegt er tief, den Hals gerade nach oben.",
            image: "/images/faglar/smalom-hero.png",
            alt: "Sterntaucher auf einem Waldsee",
            caption: "Der aufw��rts gerichtete Schnabel unterscheidet ihn vom Prachttaucher.",
          },
          {
            heading: "Ruf & Verhalten",
            body: "Sein klagender, wehmütiger Ruf trägt weit über stille Waldgewässer. Er ist ein geschickter Taucher, aber an Land unbeholfen und startet nur vom Wasser.",
            image: "/images/faglar/smalom-detalj.png",
            alt: "Tauchender Sterntaucher",
            caption: "Der klagende Ruf gehört zu den Klängen der Wildnis.",
          },
          {
            heading: "Lebensraum & Brut",
            body: "Der Sterntaucher brütet an kleinen Waldseen, fliegt aber zum Fischen zu größeren Seen und ans Meer. Das Nest liegt direkt am Wasserrand.",
            image: "/images/faglar/smalom-miljo.png",
            alt: "Stiller Waldsee, umgeben von Fichtenwald",
            caption: "Kleine Waldseen bieten ungestörte Brutplätze.",
          },
        ],
        sections: [],
      },
    },
    media: {
      heroImage: { url: "/images/faglar/smalom-hero.png", alt: { sv: "Smålom simmar på skogstjärn", en: "Red-throated loon swimming on a forest tarn", de: "Sterntaucher schwimmt auf einem Waldtümpel" } },
      galleryImages: [
        { src: "/images/faglar/smalom-hero.png", alt: "Smålom (Gavia stellata) på tjärn" },
        { src: "/images/faglar/smalom-detalj.png", alt: "Smålomsunge simmar bredvid föräldern", tall: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "/audio/smalom_guide_sv.mp3" },
        en: { title: "Listen to the guide", url: "/audio/smalom_guide_en.mp3" },
        de: { title: "Dem Guide zuhören", url: "/audio/smalom_guide_de.mp3" },
      },
    },
    interactive: {
      sv: { title: "Ställ en fråga om Smålommen", intro: "Jag häckar vid en liten tjärn men flyger till havet för att fiska. Fråga mig om min dykning, mitt läte eller mina ungar!", presetQuestions: ["Varför flyger du till havet varje dag?", "Hur djupt kan du dyka?", "När kan dina ungar simma?"], fallback: "Det finns inte tillräcklig information om det i projektets underlag." },
      en: { title: "Ask a question about the Red-throated Loon", intro: "I nest by a small tarn but fly to the sea to fish. Ask me about my diving, my call, or my chicks!", presetQuestions: ["Why do you fly to the sea every day?", "How deep can you dive?", "When can your chicks swim?"], fallback: "There is not enough information about that in the project source material." },
      de: { title: "Stelle eine Frage an den Sterntaucher", intro: "Ich brüte an einem kleinen Tümpel, fliege aber zum Meer, um zu fischen. Frage mich nach meinem Tauchen, meinem Ruf oder meinen Küken!", presetQuestions: ["Warum fliegst du jeden Tag zum Meer?", "Wie tief kannst du tauchen?", "Wann können deine Küken schwimmen?"], fallback: "Dazu enthält das Quellenmaterial des Projekts nicht genügend Informationen." },
    },
    chatSystemPrompt: "Du är en smålom (Gavia stellata) längs Kustvägen. Svara på enkel, varm svenska i jag-form till barn mellan 7 och 12 år. Håll svaren till 1–3 korta meningar och använd bara fakta från smålommens sida.",
    avatarImage: "/images/faglar/smalom-hero.png",
    chatAvatarAlt: "En smålom på en tjärn",
    relatedSpecies: [
      { slug: "grahager", name: "Gråhäger", latin: "Ardea cinerea", image: "/images/faglar/grahager-hero.png" },
      { slug: "fiskgjuse", name: "Fiskgjuse", latin: "Pandion haliaetus", image: "/images/sp-osprey.png" },
      { slug: "gratrut", name: "Gråtrut", latin: "Larus argentatus", image: "/images/faglar/gratrut-hero.png" },
    ],
    relatedSectionHeading: { sv: "Andra arter i området", en: "Other species in the area", de: "Andere Arten in der Umgebung" },
    relatedLinkLabel: { sv: "Läs mer", en: "Read more", de: "Mehr erfahren" },
  },
  }


