import { streamText, convertToModelMessages, type UIMessage } from "ai"
import { speciesPagesData } from "@/lib/species-pages-data"

export const maxDuration = 30

const FALLBACK_SYSTEM_PROMPT = speciesPagesData.lodjur.chatSystemPrompt

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url)
  const namn = searchParams.get("namn") ?? "lodjur"

  const speciesData = speciesPagesData[namn]
  const systemPrompt = speciesData?.chatSystemPrompt ?? FALLBACK_SYSTEM_PROMPT

  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: "openai/gpt-5.4-mini",
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
  })

  return result.toUIMessageStreamResponse()
}
