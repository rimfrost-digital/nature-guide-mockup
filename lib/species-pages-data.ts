export type Lang = "sv" | "en" | "de"

export type QuickFact = {
  label: string
  value: string
}

export type ContentSection = {
  heading: string
  body: string
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
      sections: ContentSection[]
    }
  >
  media: {
    heroImage: { url: string; alt: Record<Lang, string> }
    galleryImages: GalleryItem[]
    detailImage?: { url: string; alt: Record<Lang, string> }
    audio: Record<Lang, { title: string; url: string }>
  }
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
        heroSubtitle: "Norra Europas mystiska kattdjur",
        intro:
          "Lodjuret är norra Europas största kattdjur, känt för sina karakteristiska tofsar på öronen och sin korta svans. Det smyger ljudlöst fram genom de djupa skogarna längs Kustvägen och är en mästare på att undvika upptäckt.",
        sections: [
          {
            heading: "Hälsinglands mystiska landskapsdjur",
            body: "Ett möte med lodjuret är en sällsynt och magisk upplevelse. Det trivs bäst i oländig terräng där det kan ligga i bakhåll och vänta på sitt byte. Lodjuret är väldigt tyst och svårt att få syn på – man hittar det lättast via dess spår i snön.",
          },
          {
            heading: "Jakt och föda",
            body: "Lodjuret är en köttätare som jagar genom att smyga och ligga i bakhåll. Det föredrar rådjur och harar. Med sina stora tassar som fungerar som snöskor rör det sig effektivt i djup snö.",
          },
          {
            heading: "Spår och tecken",
            body: "Lodjursspår är runda och saknar klomärken, till skillnad från hundar och vargar. I snön kan man följa ett lodjurs väg långa sträckor. Avföringen lämnas ofta öppet som ett revirmarkerande tecken.",
          },
        ],
      },
      en: {
        heroSubtitle: "The mysterious cat of Northern Europe",
        intro:
          "The Eurasian Lynx is Northern Europe's largest cat, recognized by its characteristic ear tufts and short tail. It moves silently through the deep forests along the Coastal Road, a master of staying hidden.",
        sections: [
          {
            heading: "Hälsingland's mysterious landscape animal",
            body: "An encounter with a lynx is rare and magical. It prefers rugged terrain where it can ambush prey. The lynx is extremely quiet and difficult to spot — its tracks in snow are the most reliable sign of its presence.",
          },
          {
            heading: "Hunting and diet",
            body: "The lynx is a carnivore that hunts by stalking and ambushing. It favors deer and hares. Its large paws act as snowshoes, allowing efficient movement through deep snow.",
          },
          {
            heading: "Tracks and signs",
            body: "Lynx tracks are round and lack claw marks, unlike dogs or wolves. In snow, you can follow a lynx's trail for long distances. Droppings are often left prominently as territorial markers.",
          },
        ],
      },
      de: {
        heroSubtitle: "Die geheimnisvolle Katze Nordeuropas",
        intro:
          "Der Eurasische Luchs ist Nordeuropas größte Katze, erkennbar an seinen charakteristischen Ohrpinseln und dem kurzen Schwanz. Er bewegt sich lautlos durch die tiefen Wälder entlang des Kustvägen.",
        sections: [
          {
            heading: "Hälsinglands geheimnisvolles Landschaftstier",
            body: "Eine Begegnung mit einem Luchs ist selten und magisch. Er bevorzugt unwegsames Gelände, um Beute aus dem Hinterhalt zu jagen. Er ist extrem leise und schwer zu entdecken — seine Spuren im Schnee sind das zuverlässigste Zeichen seiner Anwesenheit.",
          },
          {
            heading: "Jagd und Nahrung",
            body: "Der Luchs ist ein Fleischfresser, der durch Pirsch und Hinterhalt jagt. Er bevorzugt Rehe und Hasen. Seine großen Pfoten wirken wie Schneeschuhe und ermöglichen effiziente Bewegung im Tiefschnee.",
          },
          {
            heading: "Spuren und Zeichen",
            body: "Luchsspuren sind rund und ohne Krallenmärke, anders als bei Hunden oder Wölfen. Im Schnee kann man die Spur eines Luchses über weite Strecken verfolgen. Losung wird oft offen als Reviermarkierung hinterlassen.",
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
          video:
            "https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4",
          poster: "/images/lynx-rock.png",
        },
        { src: "/images/lynx-face.png", alt: "Närbild på ett lodjurs ansikte" },
        { src: "/images/lynx-tracks.png", alt: "Lodjursspår i snön" },
        { src: "/images/sp-lynx.png", alt: "Lodjur i vinterskog" },
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
          "Rödräven är ett av Sveriges mest anpassningsbara däggdjur. Längs Kustvägen rör den sig smidigt mellan täta barrskogar, strandängar och öppna odlingslandskap på sin jakt efter föda.",
        sections: [
          {
            heading: "Utseende och kännetecken",
            body: "Rödräven känns lätt igen på sin rödbruna päls, vita strupe och bröst samt den buskiga svansen med sin karakteristiska vita svanstipp. Benens nedre delar och öronens baksidor är svarta. Färgen kan variera från ljust rödgul till mörkare brunröda nyanser.",
          },
          {
            heading: "Föda och jaktteknik",
            body: "Som opportunistisk allätare består rävens huvudsakliga föda av sorkar och möss. Den är känd för sitt 'mushopp' – där den hoppar högt i luften för att dyka rätt ner över sitt byte. Utöver smågnagare äter den bär, frukt, fågelägg, insekter och slaktavfall.",
          },
          {
            heading: "Spår och tecken i naturen",
            body: "Rävspåret liknar ett litet hundspår men är mer långsträckt. När räven travar placerar den baktassen direkt i framtassens spår och bildar en rak linje, så kallad snörlöpning. Avföringen lämnas ofta öppet på stenar eller tuvor som markering.",
          },
        ],
      },
      en: {
        heroSubtitle: "The nimble hunter of coast and forest",
        intro:
          "The Red Fox is one of Sweden's most adaptable mammals. Along the Coastal Road, it moves effortlessly between dense coniferous forests, coastal meadows, and farmland.",
        sections: [
          {
            heading: "Appearance and Characteristics",
            body: "Easily recognized by its reddish-brown coat, white chest, and bushy tail with a distinct white tip. The lower legs and backs of the ears are black. Coat colors vary from pale yellowish-red to deeper reddish-brown hues.",
          },
          {
            heading: "Diet and Hunting Techniques",
            body: "An opportunistic omnivore, the fox feeds primarily on voles and mice. It is famous for its 'mouse pounce' – leaping high into the air to pin prey to the ground. It also consumes berries, eggs, insects, and carrion.",
          },
          {
            heading: "Tracks and Signs",
            body: "Fox footprints resemble small dog tracks but are more elongated. When trotting, it places its hind paws directly into the front prints, creating a straight line pattern known as 'registering'. Droppings are often placed prominently on rocks or mounds.",
          },
        ],
      },
      de: {
        heroSubtitle: "Der gewandte Jäger von Küste und Wald",
        intro:
          "Der Rotfuchs gehört zu den anpassungsfähigsten Säugetieren Schwedens. Entlang des Kustvägen bewegt er sich mühelos zwischen Nadelwäldern, Küstenwiesen und Agrarflächen.",
        sections: [
          {
            heading: "Aussehen und Merkmale",
            body: "Gut erkennbar an seinem rotbraunen Fell, der weißen Brust und dem buschigen Schwanz mit weißer Spitze. Die Unterläufe und Ohrenrückseiten sind schwarz. Die Fellfärbung variiert von hellgelbrot bis dunkelbraunrot.",
          },
          {
            heading: "Nahrung und Jagdverhalten",
            body: "Als reaktionsschneller Allesfresser ernährt sich der Fuchs hauptsächlich von Mäusen und Wühlmäusen. Bekannt ist sein Mäusesprung. Zudem frisst er Beeren, Insekten, Vogeleier und Aas.",
          },
          {
            heading: "Spuren und Zeichen",
            body: "Fuchsspuren ähneln kleinen Hundespuren, sind jedoch langgestreckter. Im Trab setzt der Fuchs die Hinterpfoten genau in die Abdrücke der Vorderpfoten ('Schnüren'). Losung wird oft gut sichtbar auf Steinen abgelegt.",
          },
        ],
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
