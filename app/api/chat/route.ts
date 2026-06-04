import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request payload" }, { status: 400 })
    }

    const apiKey = process.env.GOOGLE_API_KEY
    if (!apiKey) {
      console.error("GOOGLE_API_KEY is not defined in the environment variables.")
      return NextResponse.json(
        { error: "API configuration error. Please try again later." },
        { status: 500 }
      )
    }

    // Map client-side message roles to Gemini API format.
    // Client format: { role: "user" | "assistant", content: string }
    // Gemini format: { role: "user" | "model", parts: [{ text: string }] }
    const formattedContents = messages.map((msg: any) => {
      const role = msg.role === "assistant" ? "model" : "user"
      return {
        role,
        parts: [{ text: msg.content }],
      }
    })

    const systemPrompt = `You are a helpful jewelry store assistant. Answer customer questions politely and professionally. Provide information about jewelry products, pricing, materials, shipping, returns, and store policies. If information is unavailable, politely ask the customer to contact store support.

Here is store-specific information for Numaans Silver Shop:
- Store Name: Numaans Silver Shop
- Contact Email: contact@numaanssilvershop.com
- Contact Phone / WhatsApp: +91-8390963603 (WhatsApp link: https://wa.me/918390963603)
- Product Categories: Rings, Necklaces, Earrings, Bracelets, Anklets, Bangles, Pendants, Sets, Chains, Cufflinks, and Custom Jewelry.
- Custom Jewelry: We craft custom engraved name rings, necklaces, and bespoke designs. Customers can contact us via email or WhatsApp to design their own pieces.
- Materials: We specialize in certified 925 Sterling Silver, including pure silver, oxidized silver, and silver with gemstones (like pearl, gemstone charm bracelets). Some collections include gold, platinum, and diamonds.
- Sizing: Standard ring sizes are available. Custom sizing can be requested for bespoke jewelry.
- Shipping: Handcrafted orders are typically processed within 3-5 business days. Delivery times are 5-7 business days depending on location. We offer free shipping on major order categories.
- Returns & Exchanges: Return or exchange requests are accepted within 7 days of delivery for unworn items in their original packaging. Note: Custom-made or engraved items are final sale and cannot be returned unless defective.
- Store Policy: If someone asks about buying or prices, let them know that prices shown on our site may vary depending on design customization and current silver/metal rates, and they can add items to their cart or reach out directly for a direct quote.`

    const payload = {
      contents: formattedContents,
      systemInstruction: {
        parts: [
          {
            text: systemPrompt,
          },
        ],
      },
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      let errorJson: any = null
      try {
        errorJson = JSON.parse(errorText)
      } catch {}
      console.error("Gemini API error details:", errorText)

      // Fallback: list models if model not found
      let availableModels: string[] = []
      try {
        const listResponse = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
        )
        if (listResponse.ok) {
          const listData = await listResponse.json()
          availableModels = listData.models?.map((m: any) => m.name) || []
        }
      } catch (listErr) {
        console.error("Failed to list models:", listErr)
      }

      return NextResponse.json(
        { 
          error: "Failed to communicate with AI model", 
          details: errorJson || errorText,
          message: errorJson?.error?.message || "",
          availableModels
        }, 
        { status: response.status }
      )
    }

    const data = await response.json()
    
    // Extract reply text from Gemini API response structure.
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, but I am unable to generate a response right now. Please contact our support team."

    return NextResponse.json({ response: replyText })
  } catch (error: any) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: error.message || "An unexpected error occurred" }, { status: 500 })
  }
}
