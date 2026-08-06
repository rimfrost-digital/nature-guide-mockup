import { QuizClient } from "@/components/quiz-client"
import type { Lang } from "@/lib/species-pages-data"

const VALID_LANGS: Lang[] = ["sv", "en", "de"]

export default async function QuizPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const params = await searchParams
  const lang: Lang = VALID_LANGS.includes(params.lang as Lang)
    ? (params.lang as Lang)
    : "sv"

  return <QuizClient lang={lang} />
}
