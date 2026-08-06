// Quiz data for Kustvägen Naturguide
// Images for quiz questions not yet in /public/images/ are marked with TODO comments.

export type TextQuestion = {
  id: string
  type: "text"
  category: string
  question: string
  image?: string
  imageAlt?: string
  options: string[]
  correctIndex: number
  explanation: string
}

export type ImageChoiceQuestion = {
  id: string
  type: "image-choice"
  category: string
  question: string
  options: {
    label: string
    image: string
    alt: string
    revealLabel: string
  }[]
  correctIndex: number
  explanation: string
}

export type Question = TextQuestion | ImageChoiceQuestion

export type Quiz = {
  id: "easy" | "challenge"
  title: string
  description: string
  estimatedTime: string
  questionCount: number
  questions: Question[]
}

// ---------------------------------------------------------------------------
// Easy quiz — Lilla naturquizet (5 questions)
// ---------------------------------------------------------------------------

const easyQuestions: Question[] = [
  {
    id: "easy-1",
    type: "text",
    category: "Däggdjur",
    // TODO: Add Varg_Huvudbild_01.jpg to /public/images/
    image: undefined,
    imageAlt: "En varg i naturen",
    question: "Vilket djur ser vargen mest ut som?",
    options: ["Hund", "Elefant", "Kanin"],
    correctIndex: 0,
    explanation:
      "Vargen är stamfader till hunden och kommunicerar på liknande sätt genom att bland annat skälla, morra, gny och yla.",
  },
  {
    id: "easy-2",
    type: "text",
    category: "Däggdjur",
    // TODO: Add Alg_Huvudbild_01.jpg to /public/images/
    image: undefined,
    imageAlt: "En älg i skogen",
    question: "Vilket djur kallas ofta för skogens konung?",
    options: ["Räv", "Älg", "Ekorre"],
    correctIndex: 1,
    explanation: "Älgen kallas skogens konung och är det största djuret i skogen.",
  },
  {
    id: "easy-3",
    type: "text",
    category: "Däggdjur",
    // TODO: Add Igelkott_Huvudbild_01.jpg to /public/images/
    image: undefined,
    imageAlt: "En igelkott i gräset",
    question: "Vilket djur rullar ihop sig till en taggig boll när det blir skrämt?",
    options: ["Bäver", "Rådjur", "Igelkott"],
    correctIndex: 2,
    explanation: "Igelkotten har ungefär 5 000–7 000 taggar och rullar ofta ihop sig för att skydda sig.",
  },
  {
    id: "easy-4",
    type: "text",
    category: "Svampar",
    // TODO: Add Kantarell_Huvudbild_01.jpg to /public/images/
    image: undefined,
    imageAlt: "Gula kantareller i skogen",
    question: "Vilken svamp brukar kallas för skogens guld?",
    options: ["Röd flugsvamp", "Kantarell", "Fnöskticka"],
    correctIndex: 1,
    explanation: "Kantarellen kallas skogens guld och är en mycket omtyckt matsvamp.",
  },
  {
    id: "easy-5",
    type: "text",
    category: "Växter och bär",
    // TODO: Add Lingon_Huvudbild_01.jpg to /public/images/
    image: undefined,
    imageAlt: "Röda lingon på ett lingonris",
    question: "Vilket av dessa bär är rött och surt?",
    options: ["Hjortron", "Blåbär", "Lingon"],
    correctIndex: 2,
    explanation: "Lingon är röda och sura bär som vanligtvis mognar under augusti och september.",
  },
]

// ---------------------------------------------------------------------------
// Challenge quiz — Naturutmaningen (10 questions)
// ---------------------------------------------------------------------------

const challengeQuestions: Question[] = [
  {
    id: "challenge-1",
    type: "image-choice",
    category: "Djurspår",
    question: "Vilket av dessa spår kommer från en varg?",
    options: [
      {
        label: "Spår A",
        // TODO: Add Alg_Spar_01.jpg to /public/images/
        image: "",
        alt: "Spår från en älg",
        revealLabel: "Älgspår",
      },
      {
        label: "Spår B",
        // TODO: Add Varg_Spar_01.jpg to /public/images/ — this is the correct answer
        image: "",
        alt: "Spår från en varg",
        revealLabel: "Vargspår",
      },
      {
        label: "Spår C",
        // TODO: Add Lodjur_Spar_01.jpg to /public/images/
        image: "",
        alt: "Spår från ett lodjur",
        revealLabel: "Lodjursspår",
      },
    ],
    correctIndex: 1,
    explanation:
      "Spår B visar spåret från en varg. Jämför formen med de andra spåren och försök komma ihåg det till nästa gång du är ute i naturen.",
  },
  {
    id: "challenge-2",
    type: "text",
    category: "Däggdjur",
    question: "Vilket djur har stora, platta tassar som fungerar ungefär som snöskor?",
    options: ["Räv", "Järv", "Utter"],
    correctIndex: 1,
    explanation:
      "Järvens stora och platta tassar fungerar som snöskor och gör att den lätt kan ta sig fram över snön.",
  },
  {
    id: "challenge-3",
    type: "text",
    category: "Däggdjur",
    question:
      "Vilket djur använder sin breda, platta svans för att styra i vattnet och varna genom att plaska?",
    options: ["Bäver", "Gråsäl", "Mink"],
    correctIndex: 0,
    explanation:
      "Bävern använder den breda svansen för att styra i vattnet och plaskar hårt med den när den anar fara.",
  },
  {
    id: "challenge-4",
    type: "text",
    category: "Fåglar",
    question: "Vilken fågels bo kan väga omkring 500 kilo?",
    options: ["Tjäder", "Bofink", "Havsörn"],
    correctIndex: 2,
    explanation:
      "Havsörnens stora och tunga bo kan väga omkring 500 kilo och byggs därför i mycket gamla och kraftiga träd.",
  },
  {
    id: "challenge-5",
    type: "text",
    category: "Fiskar",
    question:
      "Vilken fisk föds i rinnande vatten, vandrar ut i Östersjön och återvänder till sin födelseplats för att lägga rom?",
    options: ["Abborre", "Lax", "Lake"],
    correctIndex: 1,
    explanation:
      "Den baltiska laxen föds i älvar och åar, växer till sig i Östersjön och återvänder sedan till platsen där den föddes.",
  },
  {
    id: "challenge-6",
    type: "text",
    category: "Fiskar",
    question: "I vilket hav leker ålen?",
    options: ["Bottenhavet", "Sargassohavet", "Medelhavet"],
    correctIndex: 1,
    explanation:
      "Den vuxna ålen vandrar till Sargassohavet för att leka. De små glasålarna följer sedan Golfströmmen tillbaka mot våra vatten.",
  },
  {
    id: "challenge-7",
    type: "text",
    category: "Svampar",
    question: "Vilken svamp kallas också för karljohanssvamp?",
    options: ["Stensopp", "Smörsopp", "Fårticka"],
    correctIndex: 0,
    explanation:
      "Stensoppen kallas ofta karljohanssvamp. Namnet förknippas med kung Karl XIV Johan, som tog med sig sina franska matvanor till Sverige.",
  },
  {
    id: "challenge-8",
    type: "text",
    category: "Svampar och träd",
    question:
      "Vad kallas samarbetet där svampar hjälper träd att ta upp näring och får kolföreningar tillbaka?",
    options: ["Pollinering", "Mykorrhiza", "Fotosyntes"],
    correctIndex: 1,
    explanation:
      "Mykorrhiza är ett samarbete mellan svampar och träd. Svampen hjälper trädet att ta upp näringsämnen, medan trädet ger svampen kolföreningar.",
  },
  {
    id: "challenge-9",
    type: "text",
    category: "Träd",
    question: "Vilket träd har ett ytligt rotsystem och faller därför lättare vid storm?",
    options: ["Rönn", "Gran", "Tall"],
    correctIndex: 1,
    explanation:
      "Granen har ett ytligt rotsystem och är därför mer känslig för att falla när det stormar.",
  },
  {
    id: "challenge-10",
    type: "text",
    category: "Växter och bär",
    question:
      "Vilken växt kan klara temperaturer ner mot minus 40 grader, även om blommorna är känsliga för frost?",
    options: ["Smultron", "Hjortron", "Hallon"],
    correctIndex: 1,
    explanation:
      "Hjortronplantan är mycket köldtålig och kan klara temperaturer ner mot minus 40 grader, men blommorna kan skadas av frost.",
  },
]

// ---------------------------------------------------------------------------
// Result texts
// ---------------------------------------------------------------------------

export type ResultText = { title: string; text: string }

export function getEasyResultText(score: number): ResultText {
  if (score === 5) return { title: "Full pott!", text: "Du hade rätt på alla frågor. Du är en riktig naturmästare!" }
  if (score >= 3) return { title: "Riktigt bra!", text: "Du har bra koll på djur, svampar och bär." }
  return { title: "Bra försök!", text: "Gör quizet en gång till och se hur mycket du kommer ihåg." }
}

export function getChallengeResultText(score: number): ResultText {
  if (score >= 9) return { title: "Naturmästare", text: "Imponerande! Du har riktigt bra kunskaper om naturen längs Kustvägen." }
  if (score >= 7) return { title: "Naturproffs", text: "Mycket bra resultat. Du kan redan mycket om arter och naturens samband." }
  if (score >= 4) return { title: "Nyfiken naturspanare", text: "Bra jobbat! Du är på god väg och har lärt dig flera nya saker." }
  return { title: "Bra början", text: "Naturen är full av saker att upptäcka. Testa igen och se om du kan slå ditt resultat." }
}

// ---------------------------------------------------------------------------
// Exported quizzes
// ---------------------------------------------------------------------------

export const quizzes: Quiz[] = [
  {
    id: "easy",
    title: "Lilla naturquizet",
    description: "Ett enkelt och roligt quiz för barn och nyfikna naturupptäckare.",
    estimatedTime: "Cirka 2 minuter",
    questionCount: 5,
    questions: easyQuestions,
  },
  {
    id: "challenge",
    title: "Naturutmaningen",
    description: "Lite klurigare frågor om djurspår, arter, livsmiljöer och naturens samband.",
    estimatedTime: "Cirka 5 minuter",
    questionCount: 10,
    questions: challengeQuestions,
  },
]
