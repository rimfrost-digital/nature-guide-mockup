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
        { src: "/images/alg-hero.png", alt: "En ståtlig älgtjur i svensk barrskog" },
        { src: "/images/species-moose.png", alt: "Älg som betar i kvällsljus" },
        { src: "/images/alg-kalv.png", alt: "Älgkalv i gröngräs" },
        { src: "/images/sp-moosetracks.png", alt: "Älgspår i leran" },
        { src: "/images/alg-spillning.png", alt: "Älgspillning i skogen" },
        { src: "/images/hero-forest-moose.png", alt: "Älg i dimmig morgonskog" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
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
- Prata i jag-form, som om DU är älgen. Till exempel: "Jag är så stor att jag kan äta löv högt upp i tr��den!"
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
      { src: "/images/brunbjorn-hero.png", alt: "Brunbjörn (Ursus arctos) i skogsmiljö" },
      { src: "/images/brunbjorn-detalj.png", alt: "Brunbjörn (Ursus arctos) söker föda" },
      { src: "/images/brunbjorn-ide.png", alt: "Björnide (Ursus arctos) i vinterskog" },
      { src: "brunbjorn-video-placeholder", alt: "Video kommer snart", videoPlaceholder: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
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
      { src: "/images/varg-hero.png", alt: "Varg (Canis lupus) i vildmarksmiljö" },
      { src: "/images/varg-flock.png", alt: "Vargflock (Canis lupus) i skogen" },
      { src: "/images/varg-valpar.png", alt: "Vargvalpar (Canis lupus) i boet" },
      { src: "varg-video-placeholder", alt: "Video kommer snart", videoPlaceholder: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
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
        quote: "The wolverine moves alone across the vast snowfields – a patient survivor far beyond the trails.",
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
      { src: "/images/jarv-hero.png", alt: "Järv (Gulo gulo) i vinterlandskap" },
      { src: "/images/jarv-detalj.png", alt: "Järv (Gulo gulo) letar föda" },
      { src: "/images/jarv-unge.png", alt: "Järvunge (Gulo gulo) i boet" },
      { src: "jarv-video-placeholder", alt: "Video kommer snart", videoPlaceholder: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
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
      { src: "/images/gravling-hero.png", alt: "Grävling (Meles meles) i skogsbrynet" },
      { src: "/images/gravling-natt.png", alt: "Grävling (Meles meles) letar föda på natten" },
      { src: "/images/gravling-gryt.png", alt: "Ingång till grävlingens gryt (Meles meles)" },
      { src: "gravling-video-placeholder", alt: "Video kommer snart", videoPlaceholder: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
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
            body: "Rådjuret är Sveriges minsta hjortdjur, med en smidig kropp och stora, mörka ögon. Det syns ofta vid gryning och skymning nära skogsbryn och trädgårdar.",
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
      { src: "/images/radjur-hero.png", alt: "Rådjur (Capreolus capreolus) vid skogsbrynet" },
      { src: "/images/radjur-betar.png", alt: "Rådjur (Capreolus capreolus) betar på en äng" },
      { src: "/images/radjur-kid.png", alt: "Rådjurskid (Capreolus capreolus) i gräset" },
      { src: "radjur-video-placeholder", alt: "Video kommer snart", videoPlaceholder: true },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
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
        { src: "/images/sp-seal.png", alt: "En gråsäl vilar på en klippa i yttre skärgården" },
        { src: "/images/grasal-simmar.png", alt: "Gråsäl som simmar i solbelyst vatten" },
        { src: "/images/grasal-unge.png", alt: "Vit sälkut vid vattnet" },
      ],
      audio: {
        sv: { title: "Lyssna på guiden", url: "" },
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
        sv: { title: "Lyssna på guiden", url: "" },
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
            caption: "Skärgårdens grunda tångvikar är avgörande barnkammare för strömmingen.",
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
        sv: { title: "Lyssna på guiden", url: "" },
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
        { label: "Cap Width", value: "3–10 cm" },
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
- Var nyfiken, vänlig och uppmuntrande. Använd gärna jämförelser med saker barn känner till.
- Använd högst en enkel emoji ibland (som 🍄) om det passar, men inte i varje svar.
- Förklara svåra ord på ett enkelt sätt.

INNEHÅLL - håll dig till fakta om kantarellen:
- Hattbredd: 3-10 cm. Äggul till blekgul färg, trattlik form.
- Har grenade åsar under hatten (inte skivor) som löper ner på foten. Doftar milt och fruktigt, som aprikos.
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
      heroImage: { url: "/images/lin-hero.png", alt: { sv: "Ett fält med blommande blått lin nära kusten", en: "A field of blooming blue flax near the coast", de: "Ein blühendes blaues Flachsfeld nahe der Küste" } },
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
  }


